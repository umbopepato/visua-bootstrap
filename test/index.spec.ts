import {visua} from 'visua';
import MyPlugin from '../index';
import {expect} from 'chai';
import * as fs from 'fs';

const EXPORT_FILE_PATH = 'test/variables.scss';

describe('run()', () => {
    let styleMap;

    before(() => {
        styleMap = visua({
            path: 'test',
            strict: true,
        });
    });

    it('should... ', () => {
        new MyPlugin().run(styleMap, {
            outFile: EXPORT_FILE_PATH,
        });
        const exportedFile = fs.readFileSync(EXPORT_FILE_PATH, 'UTF-8');
        expect(exportedFile).to.include('primary');
    });

    after(() => {
        if (fs.existsSync(EXPORT_FILE_PATH)) {
            fs.unlinkSync(EXPORT_FILE_PATH);
        }
    });
});
