# Themeing Scripto

Scripto themes are a way to unite the look of a Scripto project with its associated Omeka S site. You first associate a Scripto project to a site by linking to the project from the site's navigation. In the Omeka S site dashboard, go to the "Navigation" settings, and add "Scripto" to your site's navigation. When a user comes to your site, that navigation link will provide Scripto with your site context and apply the accompanying Scripto theme. 

## Using an Existing Scripto Theme

The only requirement for a Scripto theme is a stylesheet (.css) file within the Scripto module in the following subdirectory: `Scripto\asset\css\site-themes\`. The stylesheet name must match the name of your site theme directory.

The Omeka S theme "Papers", based off the Papers of the War Department project theme, contains its companion Scripto theme in the following path: `asset/css/scripto/papers.css`. There are two ways to enable this theme. 

### Manually copy the CSS file to the Scripto module.

Copy your CSS file into the appropriate directory within the Scripto module. The path from within your Omeka S installation looks like this: `[$ROOT]/modules/Scripto/asset/css/site-themes`. If you want to make any changes to your Scripto theme, your styles will be read from that location.

### Use the command line.

This method is for more technical users. The "Papers" theme uses Gulp to manage Sass/CSS compiling, and has a specific task for exporting the Scripto theme. To use this task, navigate to the root of the theme folder via the command line and type `gulp scripto`. This will compile the Scripto theme and place it in the correct folder, provided the Scripto module has been installed. Note: Scripto themes are not required to use Gulp or Sass, so this method may not always be an option.

## Writing a Scripto Theme

The only requirement for a Scripto theme is a stylesheet (.css) file within the Scripto module in the following subdirectory: `Scripto/asset/css/site-themes/`. The stylesheet name must match the name of your site theme directory. Note: all Scripto customizations must be controlled via CSS—themers cannot make changes to the Scripto markup.

The `@import` CSS rule can help create a quick foundation for your Scripto theme by importing existing styles. For example once again using the "Papers" theme, your `@import` rules would look like this:

```
@import url('../public-app.css');
@import url('../../../../../themes/papers/asset/css/style.css');
```

This import uses relative paths from your custom Scripto theme to the default Scripto theme and the site theme. You can now write your style overrides and Scripto-specific CSS.

## Using Sass with Scripto Themes

Like Omeka S itself and many of its themes, the "Papers" theme manages its styles with Gulp and Sass. If you plan on using these tools, here are commands you'll need to run from the root of the "Papers" theme:

* `npm install`: Install the theme's Node dependencies. This is required before running any tools.
* `gulp css`: This command will look at your `.scss` files within `asset/sass` and export their respective CSS files into `asset/css`.
* `gulp css:watch`: This command performs the same function as `gulp css`, but watches the `asset/sass` folder for any ongoing changes until the command is stopped.
* `gulp scripto`: This command performs the same function as `gulp css`, but includes Scripto theme files.
* `gulp scripto:watch`: This command performs the same function as `gulp css:watch`, but includes Scripto theme files.

## Theme Assets

An important note: because Scripto is totally controlled with CSS, it cannot interact with theme options in a site theme, like user-set image assets or colors. If you plan on using custom backgrounds or logos for a site theme alongside a Scripto theme, save the images to a folder within your site theme and reference them using relative paths accordingly.
