# CSS Editor

The CSS Editor module allows you to write CSS from the Omeka S admin interface.

Once activated on the [modules](https://omeka.org/s/docs/user-manual/modules/) tab of the admin dashboard, CSS Editor is used on a site-by-site basis.

## Managing Custom CSS

If CSSEditor is active, then a tab for CSSEditor will appear in the context menu for every site.

![Screenshot of Omeka S site context menu witth CSS Editor navigation item highlighted.](modulesfiles/csseditor_contextmenu.jpg)

## Using the CSSEditor interface

![Screenshot of CSS Editor module interface.](modulesfiles/csseditor_interface.jpg)

The first large text area is where you write your individual styles. Use that text area as you would a stylesheet file. 

If you are new to working with CSS, we recommend the following free resources for getting started:

* [Mozilla's "Intro to CSS"](https://learning.mozilla.org/en-US/activities/intermediate-web-lit/)
* [Codecademy's "Learn CSS" course](https://www.codecademy.com/learn/learn-css)
* [Marksheet's "CSS Basics"](https://marksheet.io/css-basics.html)

Next, CSS Editor also allows you to include external stylesheets by entering their URLs. There is no limit to the number of external stylesheet URLs you can enter. Each text input can take a single URL, and additional inputs can be created by clicking the button that reads "Add another stylesheet".

To remove external stylesheets, either clear the text inputs, or click on the trash can icon if there are multiple stylesheet fields.

![Screenshot of CSS Editor module interface, cropped to focus on external stylesheet field with remove button (trash can icon) highlighted.](modulesfiles/csseditor_remove.jpg) <br><br>

### Tutorial: Using a Google Webfont

You can make your Omeka S site more distinct by using a custom font. [Google provides a free library of webfonts](https://fonts.google.com/), and this tutorial will demonstrate how to apply a webfont to an Omeka S site using the "Default" theme through the CSS Editor interface.

For reference, the "Default" theme begins looking like this, using the "Open Sans" font.

![Screenshot of Omeka S site with "Default" theme. All the text us using "Open Sans".](modulesfiles/csseditor_before.jpg)

This tutorial will override "Open Sans" with the "Lato" font family.

1. Navigate to [Google Fonts](https://fonts.google.com/). Find the "Lato" font family and click on the orange "+" button to select it. <br><br>
  ![Google Fonts main page with "Lato" font family highlighted](modulesfiles/csseditor_tutorial1.jpg) <br><br>
2. A bar labeled "1 Family Selected" will appear in the lower right corner. Click on this bar. <br><br>
  ![Cropped view of Google Fonts page with selected font family bar highlighted](modulesfiles/csseditor_tutorial2.jpg) <br><br>
3. The bar will open a panel with the information you'll need to use Lato in your site. The first section, "Embed this font", has the external stylesheet URL you need. Select the URL in the `href` attribute, as pictured. <br><br>
  ![Screenshot of "Embed this font" section with external stylesheet url ("https://fonts.googleapis.com/css?family=Lato&display=swap") highlighted.](modulesfiles/csseditor_tutorial3.jpg) <br><br>
4. Copy this URL into one of the "External stylesheets" inputs in CSS Editor. <br><br>
  ![Screenshot of CSS Editor module interface, cropped to focus on external stylesheet field with pasted stylesheet url.](modulesfiles/csseditor_tutorial4.jpg) <br><br>
5. Back in the Google Fonts panel, there is the second section titled "Specify in CSS". Copy the `font-family` rule.
  ![Screenshot of "Specify in CSS" section with font-family rule ("font-family: 'Lato', sans-serif;") highlighted.](modulesfiles/csseditor_tutorial5.jpg) <br><br>
6. For this tutorial, you are setting Lato as the site's default font. To do this, in the large "CSS" text area in CSS Editor, set the `body` element's font family using the rule you just copied.
  ![Screenshot of CSS Editor module interface, cropped to focus on CSS text area with pasted body font-family rule ('body {font-family: "Lato", sans-serif;}').](modulesfiles/csseditor_tutorial6.jpg) <br><br>
7. Click the "Save" button in the top right corner.

Now the "Default" theme should look like this.

![Screenshot of Omeka S site with "Default" theme. All the text us using "Lato".](modulesfiles/csseditor_after.jpg)

