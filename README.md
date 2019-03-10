# Visua Bootstrap

An example visua plugin that generates Bootstrap 4.x themes.

See [theming bootstrap](https://getbootstrap.com/docs/4.0/getting-started/theming/) to know how to build your Bootstrap assets from the generated scss variables file.

## Prerequisites

See [visua.io](https://visua.io) to get started with visua and visua plugins.

## Installation

```bash
$ npm i visua-bootstrap
```

## Usage

```bash
$ visua run bootstrap [--outFile]
```

## Variables

This plugin uses the following variables. They are all optional: undefined variables will not appear in the
exported variable file.

|Variable|Type|Exports to|
|:---|:---|:---|
|`primary-color`|`<color>`|`$primary`|
|`secondary-color`|`<color>`|`$secondary`|
|`success-color`|`<color>`|`$success`|
|`info-color`|`<color>`|`$info`|
|`warning-color`|`<color>`|`$warning`|
|`error-color`|`<color>`|`$danger`|
|`light-color`|`<color>`|`$light`|
|`dark-color`|`<color>`|`$dark`|
|`background-color`|`<color>`|`$body-bg`|
|`secondary-text-color`|`<color>`|`$body-color`|
|`spacer`|`<length>`|`$spacer`|
|`font-family`|`[<family-name>\|<generic-family>]#`|`$font-family-base`|
|`code-font-family`|`[<family-name>\|<generic-family>]#`|`$font-family-monospace`|
|`headings-font-family`|`[<family-name>\|<generic-family>]#`|`$font-size-base`|
|`font-size`|`<length>`|`$headings-font-family`|
|`headings-color`|`<color>`|`$headings-color`|
|`primary-text-color`|`<color>`|`$headings-color`|

## Options

### `--outFile`

The path where the variables file is generated

**Examples** 
```
--outFile=filename.scss
--outFile=path/to/filename.scss
--outFile="path/to/filename.scss"
```

**Default value** `variables.scss`

**Required** No
