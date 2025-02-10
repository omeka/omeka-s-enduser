# Papers

An Omeka S theme based on the Papers of the War Department. It comes packaged with a [Scripto](https://github.com/omeka-s-modules/Scripto/) theme.

## Theme Settings

These are settings for the theme that are configurable from within the Omeka S admin interface. They have no effect upon the Scripto theme.

* **Logo**: Upload an image asset to use as a logo in place of a text site title.
* **Background image**: Upload an image asset to use as a background. We recommend something like a 1000x1000 pixel jpg for an image that is not intended to tile but stays fixed and cover a large area. A tiled image can be any size.
* **Background layout**: How to display a background image. Select "none" to disable the background image.
* **Background color**: A hex color to be used instead of a background image. "Background layout" must be set to "none". The default value is #fefefe.
* **Banner**: Upload an image asset to use a banner that sits above the main content area of every view.
* **Show search bar in header**: A toggle for displaying the search bar underneath the top navigation.
* **Footer content**: Control what appears in the footer. This field takes HTML markup.
* **Header bar color**: The hex color for the top header bar background. The default value is #fc0.
* **Button color**: The hex color for button backgrounds. The default value is #fc0.
* **Link color**: The hex color for link text. The default value is #fc0.

## Resource Page Configuration

Omeka S 4.0 introduced configurable resource pages. Cozy supports block configuration for items, item sets, and media show pages. Each of those views contains a single configurable region.

### Using the Scripto Theme

The only requirement for a Scripto theme is a stylesheet (.css) file within the Scripto module in the following subdirectory: `Scripto\asset\css\site-themes\`. The stylesheet name must match the name of your site theme directory.

This theme includes its companion Scripto theme in the following path: `asset/css/scripto/papers.css`. There are two ways to enable this theme. 

#### Manually copy the CSS file to the Scripto module.

Copy your CSS file into the appropriate directory within the Scripto module. The path from within your Omeka S installation looks like this: `[$ROOT]/modules/Scripto/asset/css/site-themes`. If you want to make any changes to your Scripto theme, your styles will be read from that location.

#### Use the command line.

For more advanced use, such as customizing the theme with Sass, you'll need to install the tools with [NodeJS](https://nodejs.org/en/) (0.12 or greater). Navigate to your theme directory and run `npm install`.

This method is for more technical users. The "Papers" theme uses Gulp to manage Sass/CSS compiling, and has a specific task for exporting the Scripto theme. To use this task, navigate to the root of the theme folder via the command line and type `gulp scripto`. This will compile the Scripto theme and place it in the correct folder, provided the Scripto module has been installed. Note: Scripto themes are not required to use Gulp or Sass, so this method may not always be an option.

### Using Sass with Scripto Themes

Like Omeka S itself and many of its themes, the "Papers" theme manages its styles with Gulp and Sass. If you plan on using these tools, here are commands you'll need to run from the root of the "Papers" theme:

* `npm install`: Install the theme's Node dependencies. This is required before running any tools.
* `gulp css`: This command will look at your `.scss` files within `asset/sass` and export their respective CSS files into `asset/css`.
* `gulp css:watch`: This command performs the same function as `gulp css`, but watches the `asset/sass` folder for any ongoing changes until the command is stopped.
* `gulp scripto`: This command performs the same function as `gulp css`, but includes Scripto theme files.
* `gulp scripto:watch`: This command performs the same function as `gulp css:watch`, but includes Scripto theme files.

### Theme Configuration and Scripto

An important note: because Scripto is totally controlled with CSS, it cannot interact with theme options in a site theme, like user-set image assets or colors. If you plan on using custom backgrounds or logos for a site theme alongside a Scripto theme, save the images to a folder within your site theme and reference them using relative paths accordingly. Theme colors and styles will have to be implemented within the `papers.css` file in Scripto.