# Thanks, Roy

A tribute to Roy Rosenzweig. A serif theme for Omeka S based off [the theme for Omeka Classic](https://github.com/omeka/theme-thanksroy).

## Theme Configuration

* **Main body text color**: An accent color to be used on button and link highlights. The default value is #444444.
* **Main background color**: An accent color to be used on button and link highlights. The default value is #FFFFFF.
* **Link color**: An accent color to be used on button and link highlights. The default value is #888888.
* **Visited link color**: An accent color to be used on button and link highlights. The default value is #888888.
* **Active link color**: An accent color to be used on button and link highlights. The default value is #888888.
* **Button background color**: An accent color to be used on button and link highlights. The default value is #000000.
* **Button text color**: An accent color to be used on button and link highlights. The default value is #FFFFFF.
* **Site title color**: An accent color to be used on button and link highlights. The default value is #000000.
* **Top navigation depth**: If the main navigation is set to display child pages, this setting controls how many navigation levels to display. Setting this to '0' shows all levels.
* **Logo**: Upload an image asset to use as a logo in place of a text site title.
* **Banner image**: Upload an image asset to use a banner that sits above the main content area of every view.
* **Banner height**: The banner size with three presets: 'small', 'medium', and 'large'.
* **Banner position**: Where to anchor the banner image within its container: centered, stuck to the top, or stuck to the bottom.
* **Footer content**: Control what appears in the footer. This field takes HTML markup.

## Resource Page Configuration

Omeka S 4.0 introduced configurable resource pages. Thanks, Roy supports a single block configuration area for items, item sets, and media show pages. 

## Customizing the Theme

For advanced CSS and Sass users, Thanks, Roy provides variables for easily customizing typography, spacing, and colors in `asset/sass/_base.scss`.

### Sass Tasks

Run these commands within the theme's root directory.

* **npm start**: While this task runs, it watches for changes to sass files and recompiles the CSS.
* **gulp css**: This is the one-off task for compiling the current Sass/CSS.
  * **gulp css:watch**: This task watches for changes in the Sass, then compiles the CSS.
