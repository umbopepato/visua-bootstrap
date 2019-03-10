import {StyleMap, Plugin, OptionsMap, templatel} from 'visua';
import * as mkdirp from 'mkdirp';
import {dirname} from 'path';
import * as fs from 'fs';

export default class extends Plugin {

    static get options(): OptionsMap {
        return {
            outFile: String,
        };
    }

    run(styleMap: StyleMap, options: { [key: string]: any }) {
        const outFile = options.outFile || 'variables.scss';
        const vars = styleMap.getAll([
            'primary-color',
            'secondary-color',
            'success-color',
            'info-color',
            'warning-color',
            'error-color',
            'light-color',
            'dark-color',
            'background-color',
            'secondary-text-color',
            'spacer',
            'font-family',
            'code-font-family',
            'font-size',
            'headings-font-family',
            'headings-color',
            'headings-font-weight',
            'headings-line-height',
            'primary-text-color',
            'font-weight',
            'line-height',
        ]);
        const theme = templatel`
            // Colors
            $primary:               ${vars.primaryColor};
            $secondary:             ${vars.secondaryColor};
            $success:               ${vars.successColor};
            $info:                  ${vars.infoColor};
            $warning:               ${vars.warningColor};
            $danger:                ${vars.errorColor};
            $light:                 ${vars.lightColor};
            $dark:                  ${vars.darkColor};
            $body-bg:               ${vars.backgroundColor};
            $body-color:            ${vars.secondaryTextColor};
            
            // Spacing
            $spacer:                ${vars.spacer};
            
            // Typography
            $font-family-base:      ${vars.fontFamily};
            $font-family-monospace: ${vars.codeFontFamily};
            $font-size-base:        ${vars.fontSize};
            $font-weight-base:      ${vars.fontWeight};
            $line-height-base:      ${vars.lineHeight};
            $headings-font-family:  ${vars.headingsFontFamily};
            $headings-color:        ${vars.headingsColor || vars.primaryTextColor};
            $headings-font-weight:  ${vars.headingsFontWeight};
            $headings-line-height:  ${vars.headingsLineHeight};
        `;
        mkdirp.sync(dirname(outFile));
        fs.writeFileSync(outFile, theme);
    }

}
