# The Daily

The Daily is a theme that features bold chunky sans-serifs, heavy border elements, a bright color accent, and an overlay navigation.

## Theme Configuration

* **Logo**: Upload an image asset to use as a logo in place of a text site title.
* **Banner**: Upload an image asset to use a banner that sits above the main content area of every view.
* **Banner height**: The maximum banner image height in pixels.
* **Banner height**: The maximum banner image height in pixels at narrower viewport widths.
* **Banner height for mobile devices**: The maximum banner image height in pixels at narrower viewport widths.
* **Banner position**: Where to anchor the banner image within its container: centered, stuck to the top, or stuck to the bottom.
* **Footer content**: Control what appears in the footer. This field takes HTML markup.
* **Main accent color**: An accent color to be used on links. The default value is #ff0.

## Resource Page Configuration

Omeka S 4.0 introduced configurable resource pages. The Daily supports block configuration for items, item sets, and media show pages. Each of those views contains 3 configurable regions:

* **Full-width main**: This is intended to be a primary content area that spans the full width of a page.
* **Main with sidebar**: This is a version of the primary content area that expects to sit alongside a single right sidebar.
* **Right sidebar**: This is a sidebar that sits to the right of "main with sidebar".

## Customizing the Theme

For those dipping their toes into customizing sites with CSS, the [CSS Editor](https://omeka.org/s/modules/CSSEditor/) module allows site administrators to write style overrides.

For advanced CSS and Sass users, The Daily provides variables for easily customizing typography, spacing, and colors in `asset/sass/_base.scss`.

### Sass Tasks

Run these commands within the theme's root directory.

* **npm start**: While this task runs, it watches for changes to sass files and recompiles the CSS.
* **gulp css**: This is the one-off task for compiling the current Sass/CSS.
  * **gulp css:watch**: This task watches for changes in the Sass, then compiles the CSS.

