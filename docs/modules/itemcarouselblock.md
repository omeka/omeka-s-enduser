# Item Carousel Block

The [Item Carousel Block module](https://omeka.org/s/modules/ItemCarouselBlock) allows you to add a slideshow block to [Site Pages](../sites/site_pages.md#page-blocks).

Once activated, Item Carousel Block adds an "Item Carousel" page block to the list available from the page editing interface.

![A basic slideshow on a public page.](modulesfiles/itemcarouselblock-public.png)

## Attaching Items

When editing a page, insert the Item Carousel page block. Click the "Add Attachment" button to add an item to the block. This will open a sidebar on the right side of the page to browse and select items.

Once you have selected the items to attach, you can click the configuration wrench to select the media thumbnail to show and to add a caption. Attachments may be reordered by dragging and dropping.

![The page editing interface, with Item Carousel appearing in the blocks menu on the right, and a blank Item Carousel block on the page.](modulesfiles/itemcarouselblock.png)

## Basic configuration
The block includes two basic configuration settings.

![An item carousel block with attached items and configuration settings.](modulesfiles/itemcarouselblock-basicconfiguration.png)

Add a title for the carousel, and select the number of items that appear on the page at one time. The block must show at least 1 item, and can show a maximum of 10 items.

## Advanced options
Using the drop-down menu within the block, you can access a number of advance options to further configure the appearance of the block.

![An item carousel block detail image focused on the advanced options settings.](modulesfiles/itemcarouselblock-advancedoptions.png)

You can use those settings to:

- Select the Thumbnail type for the attachment. The options are [large, medium, or square](../configuration.md#thumbnails).
- Decide which attachment title to show. The setting options include item title, media title, or no title.
- Decide whether or not to show an attachment caption, as set within the attachments.
	- If you have selected to show the title and/or caption, you can decide whether or not to overlay the title/caption on the attached image. Note selecting this option might necessitate making some adjustments to your theme's CSS to achieve the appearance that you desire.
	- Set the alignment for your title/caption. The setting options include left, right, and center.
- Decide to stretch the image from your attached item to fill the slide space. The options include None, Fill width, Fill height, and Fill entire slide.
- Set the duration of time that the slide in the carousel pauses before automatically advancing to the next item. The duration is set in milliseconds (so, a value of "1000" would switch slides once per second). **Set the duration to 0 to disable auto advance**.
- Set the slide to advance in an infinite loop so that once the carousel cycles through the attached items, the cycle will begin again.
- Decide to implement a fade between the advancing attachment slides. Note: This option only works when you have set your carousel to 1 item per page.
