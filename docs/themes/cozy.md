# Cozy

This is an Omeka S theme featuring an off-canvas navigation menu.

## Theme Configuration

* **Logo**: Upload an image asset to use as a logo in place of a text site title.
* **Banner**: Upload an image asset to use a banner that sits above the main content area of every view.
* **Banner width**: Select whether the banner image fits within the margins of the main content area or to have it bleed outside the margins to the container's edges.
* **Banner height**: The maximum banner image height in pixels.
* **Banner height for mobile devices**: The maximum banner image height in pixels at narrower viewport widths.
* **Banner position**: Where to anchor the banner image within its container: centered, stuck to the top, or stuck to the bottom.
* **Main accent color**: An accent color to be used on button and link highlights. The default value is #089494.
* **Navigation background color**: An color to be used in the off-canvas navigation background. The default value is #bfdcdc.
* **Top navigation depth**: If the main navigation is set to display child pages, this setting controls how many navigation levels to display. Setting this to '0' shows all levels.
* **Truncate Body Property**: Controls the size of the body property of resources in a browseable list. It can be set to show the full value, truncate after 4 lines and fade out, or truncate after 4 lines and clip with an ellipsis.
* **Footer content**: Control what appears in the footer. This field takes HTML markup.

## Resource Page Configuration

Omeka S 4.0 introduced configurable resource pages. Cozy supports block configuration for items, item sets, and media show pages. Each of those views contains 3 configurable regions:

* **Full-width main**: This is intended to be a primary content area that spans the full width of a page.
* **Main with sidebar**: This is a version of the primary content area that expects to sit alongside a single right sidebar.
* **Right sidebar**: This is a sidebar that sits to the right of "main with sidebar".



## Customizing the Theme

For those dipping their toes into customizing sites with CSS, the [CSS Editor](https://omeka.org/s/modules/CSSEditor/) module allows site administrators to write style overrides.

For more advanced use, such as customizing the theme with Sass, you'll need to install the tools with [NodeJS](https://nodejs.org/en/) (0.12 or greater). Navigate to your theme directory and run `npm install`. Cozy provides variables for easily customizing typography, spacing, and colors in `asset/sass/_base.scss`.

### Sass Tasks

Run these commands within the theme's root directory.

* **npm start**: While this task runs, it watches for changes to sass files and recompiles the CSS.
* **gulp css**: This is the one-off task for compiling the current Sass/CSS.
  * **gulp css:watch**: This task watches for changes in the Sass, then compiles the CSS.
