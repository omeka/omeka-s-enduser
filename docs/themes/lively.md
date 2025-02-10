# Lively
 
This is an Omeka S theme that offers some custom options and a clean design.
![Lively Theme](https://github.com/omeka-s-themes/lively/blob/master/theme.jpg?raw=true)

## Theme settings

### General Settings

- Theme's Primary Color: The color to be used as the theme's primary color. The default value is #d62d6a (RGB 214, 45, 106).

- Theme's Secondary Color: The color to be used as the theme's secondary color. The default value is #4D1068 (RGB 77, 16, 104).

- Theme's Accent Color: The color to be used as the theme's accent color for links and accents. The default value is #0a4f9e (10, 79, 158).

- Theme's complementary Color: The color to use on decorative shapes. The default value is #F0B247 (240, 178, 71).

### Contact Info
- Location
- Phone number
- Email
- Show contact info in Top Header and/or Footer

### Header

- Top Navigation Depth: Maximum number of levels to show in the site's top navigation bar. Set to 0 to show all levels.
- Logo: A custom logo (SVG, JPG, PNG)

### Banner
- Banner image
- Heading
- Description
- Button Label
- Button Link
- Content position
- Banner image vertical position within the wrapper
- Banner image horizontal position within the wrapper

### Footer
- Footer Logo
- Footer Site description
- Footer Menu
- Footer Menu Title
- Footer Menu Depth
- Footer Content Title
- Footer Content

### Social Media
- Facebook
- Twitter
- LinkedIn
- Instagram
- Youtube
- Mastodon

### Footer Bottom
- Copyright
- Terms Title
- Terms URL
- Privacy Policy Title
- Privacy Policy URL

### Image Settings
- Decorative border for Banner, Media and/or Assets

### Resource Tags
- Show tags based on Resource Type and/or Class

### Browse Settings
- Layout for Browse Pages
- Truncate Body Property

## Customizing the Theme

For more advanced use, such as customizing the theme with Sass, you'll need to install the tools with [NodeJS](https://nodejs.org/en/) (0.12 or greater). Navigate to your theme directory and run `npm install`. This theme includes variables and mixins for managing and extending many styles.

### Sass Tasks

Run these commands within the theme's root directory.

* **npm run start**: While this task runs, it watches for changes to sass files and recompiles the CSS.
* **gulp css**: This is the one-off task for compiling the current Sass/CSS.
* **gulp css:watch**: This task watches for changes in the Sass, then compiles the CSS.

### Sass File Structure

```bash
sass
    ├── abstracts
    │   ├── mixins
    │   └── variables
    │       ├── breakpoints
    │       ├── colors
    │       ├── layout
    │       └── typography
    ├── base
    │   ├── elements
    │   │   ├── body
    │   │   ├── buttons
    │   │   ├── caption
    │   │   ├── fields
    │   │   ├── hr
    │   │   ├── icons
    │   │   ├── language-tag
    │   │   ├── links
    │   │   ├── lists
    │   │   ├── media
    │   │   ├── resource-description
    │   │   ├── resource-tag
    │   │   ├── tables
    │   │   ├── titles
    │   │   └── tooltip
    │   ├── layout
    │   │   ├── layout
    │   │   └── regions
    │   └── typography
    │       ├── copy
    │       ├── headings
    │       └── typography
    ├── components
    │   ├── accordion
    │   ├── advanced-search
    │   ├── annotation
    │   ├── banner
    │   ├── blocks
    │   │   ├── assets
    │   │   ├── browse-preview
    │   │   ├── carousel
    │   │   ├── collecting
    │   │   ├── item-showcase
    │   │   ├── item-with-metadata
    │   │   ├── list-of-sites
    │   │   ├── media-embed
    │   │   ├── table-of-contents
    │   │   └── timeline
    │   ├── breadcrumbs
    │   ├── facets
    │   ├── footer
    │   ├── header
    │   │   ├── header
    │   │   ├── search
    │   ├── linked-resources
    │   ├── mapping    
    │   ├── metadata
    │   ├── navigation
    │   ├── pagination
    │   ├── resources
    │   │   ├── browse-controls
    │   │   ├── resource-grid
    │   │   ├── resource-list
    │   ├── search-results
    │   ├── uri-dereferencer
    │   └── user-bar
    ├── generic
    │   ├── box-sizing
    │   └── normalize
    └── utilities
        ├── accessibility
        ├── alignments
        └── clearfix
```

## Utility classes
Lively S offers a set of predefined utiliy classes that will help you to add styles to certain elements by just assigning them these classes.

You can even combine multiple utility classes.

- `inline`
- `alignleft`
- `alignright`
- `aligncenter`
- `alignfull`
- `alignwide`
- `alignnarrow`
- `textleft`
- `textright`
- `textcenter`
- `clearfix`
- `screen-reader-text`