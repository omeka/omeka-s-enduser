# Default

## Theme Configuration

* **Main accent color**: An accent color to be used on links. The default hex value is #920b0b.
* **Top navigation depth**: If the main navigation is set to display child pages, this setting controls how many navigation levels to display. Setting this to '0' shows all levels.
* **Logo**: Upload an image asset to use as a logo in place of a text site title.
* **Banner**: Upload an image asset to use a banner that sits above the main content area of every view.
* **Banner height**: The maximum banner image height in pixels.
* **Banner height for mobile devices**: The maximum banner image height in pixels at narrower viewport widths.
* **Banner position**: Where to anchor the banner image within its container: centered, stuck to the top, or stuck to the bottom.
* **Truncate Body Property**: Controls the size of the body property of resources in a browseable list. It can be set to show the full value, truncate after 4 lines and fade out, or truncate after 4 lines and clip with an ellipsis.
* **Footer content**: Control what appears in the footer. This field takes HTML markup.

## Resource Page Configuration

Omeka S 4.0 introduced configurable resource pages. Default supports block configuration for items, item sets, and media show pages. Each of those views contains a single configurable region.

## Customizing the Theme

For those dipping their toes into customizing sites with CSS, the [CSS Editor](https://omeka.org/s/modules/CSSEditor/) module allows site administrators to write style overrides.

For advanced CSS and Sass users, Default provides variables for easily customizing typography, spacing, and colors in `asset/sass/_base.scss`. There is also a mixin for a set of standard container styles.

### Sass Tasks

Run these commands within the theme's root directory.

* **npm start**: While this task runs, it watches for changes to sass files and recompiles the CSS.
* **gulp css**: This is the one-off task for compiling the current Sass/CSS.
  * **gulp css:watch**: This task watches for changes in the Sass, then compiles the CSS.
