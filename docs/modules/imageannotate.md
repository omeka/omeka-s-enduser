# Image Annotate

The [Image Annotate module](https://omeka.org/s/modules/ImageAnnotate/){target=_blank} allows site users to attach information to coordinates in image files, including [installation assets](../admin/assets.md) and [media attached to items](../content/media.md). 

This module adds a new "Annotate image" tab to the media editing interface on the admin side, where the selected image can be drawn upon. Users can draw rectangles and add area-specific text captions. It also adds new [resource blocks](../sites/site_theme.md#configure-resource-pages) so that annotations can be seen on item and media view pages, and new [page blocks](../sites/site_pages.md#page-blocks) so that annotations can be added and displayed in site pages. 

![A public page showing an image with an annotation. The image has two rectangular selections around people appearing in a photograph; one is a yellow rectangle indicating it is active, and a pop-up shows the text "Pilot James Ray" and a button that says "Close".](modulesfiles/imageAnnotate_publicPage.png)

For media that generates image thumbnails (such as PDFs, which get a thumbnail of the first page), you can annotate the full-sized thumbnail that Omeka S creates. Note that while you can annotate things like video thumbnails, your annotations will only be seen in certain contexts where the original media does not display. 

Depending on your purpose, you can annotate the media files themselves as attached to items, making the annotations available installation-wide, or annotate media only in the context of a specific site page. Consider whether you wish the annotation to be widely available (such as identifying all people in a photograph), or limited to the context of an exhibit or essay (such as pointing out one particular person of note). You can combine media annotations with page-specific annotations if desired.

If you only wish to annotate images in the course of building exhibits, you can skip to the [section on page blocks](#page-blocks). 

### Permissions

Users at the Author level and above can annotate images. Authors can only annotate media that they own; users at Reviewer or higher can annotate any media in the installation. 

Page blocks can be added by anyone with permission to edit a page. 

## Annotate media

Once the module is installed, there are no installation-wide configuration options. 

You can find the "Annotate image" tab by navigating to a specific piece of media, either via an item's attached media, or from the media table. 

![The admin page for a piece of media, set to the "Annotate Image" tab, without any annotations set on the image yet.](modulesfiles/imageAnnotate_mediaEdit.png)

You can annotate images with rectangular selections, which can be as large or small as you want. When a rectangle is created, enter in a caption. A caption is required to save the annotation. Be sure to save the annotation on the image, and then save the page.

![The same page, with two rectangles set. One has had text set as an annotation - "Senator Hiram Bingham". There is a "Cancel" button and an "OK" button to save the annotation.](modulesfiles/imageAnnotate_mediaEdit2.png)

Once annotations have been saved, the "Image annotations" tab appears in view mode and annotations can be interacted with as though on a public page. 

![The same page, saved (not in editing mode), with a green banner reading "Media successfully updated" and the two rectangles showing on the image.](modulesfiles/imageAnnotate_mediaSaved.png)

If you wish to modify existing annotations, you can edit the media again, and edit or remove the annotations that have been saved. You can delete individual annotations with the red trash can icon, or click the "Reset annotations" button to remove all the annotations. 

![The same page and tab, in editing mode, with one rectangle highlighted in yellow and its annotation showing. In the annotation pop-up there is now a red trash icon. The mouse is hovering over the button showing the "Delete" tooltip. There is also a "Reset annotations" button appearing below the image.](modulesfiles/imageAnnotate_mediaReset.png)

## Publish annotations

Annotations appear on sites via resource page blocks, and page blocks in sites. They do not appear anywhere by default; you will have to modify each site on which you wish the annotations to appear. 

### Resource page blocks

To render image annotations on item view and media view pages, you must add the resource page blocks.  

On the [site theme page](../sites/site_theme.md), click the ["Configure resource pages" button](../sites/site_theme.md#configure-resource-pages). 

On the "Item page" tab, you will see a new block called "Media embeds (with image annotations)". If you replace the normal "Media embeds" block with this block, image annotations will show where available; otherwise media will appear on item view pages as normal. 

On the "Media page" tab, you will see a new block called "Media render (with image annotations)". If you replace the normal "Media render" block with this block, image annotations will show where available; otherwise media will appear on media view pages as normal. 

![The media resource page settings, with "Media render (with image annotations)" appearing as a block above "Media render" and "Lightbox gallery", which are in red as they are being removed from the page.](modulesfiles/imageAnnotate_resourceMedia.png)

Where image annotations are available, a button will appear on the public item and media view pages reading "View annotations". This button will appear below each image that has annotations. When clicked, the annotations will appear (they are hidden by default) and the button will change to "View without annotations". 

![The media with its annotations, displayed on the item view page. Below the image is a black button reading "View without annotations".](modulesfiles/imageAnnotate_publicResource.png)

Note that if you usually use the Lightbox gallery to display your media on item and media view pages, this cannot be modified to include image annotations. If you wish to show annotations, you must use the Media embed or Media render formats. 

For videos and PDFs, the "View annotations" button will appear alongside the usual multimedia render, and when clicked, the multimedia will be replaced with its annotated thumbnail. Modules such as PDF Embed may determine whether a media frame or its thumbnail displays in places such as the item or media view page. 

### Page blocks

This module adds two page blocks: "Image annotate asset" and "Image annotate media". 

When displaying an asset image with annotations, you will have the choice to add a text caption to the image.

![The Image annotate asset page block, set to an image, with text in the caption, and showing a space for annotations with rectangles drawn on the image.](modulesfiles/imageAnnotate_asset.png)

When displaying a media image with annotations, you can add a caption in the same style as a Media embed page block, as well as choose to display the item title or media title as a clickable link below the image. 

![The Image annotate media page block with settings reflected below.](modulesfiles/imageAnnotate_pageBlock.png)

You can add page-specific annotations to the media in the page block options, and choose to display or not display the annotations saved to the media itself. If you display the media's own annotations, and draw page-specific annotations as well, the public page will show both sets of boxes. 

![The media with its annotations, both the two set in the media and the one set in the page block, displayed on a page with the item title and a caption.](modulesfiles/imageAnnotate_publicPage2.png)

Note that when you choose a media where only the thumbnails are images, such as a video or PDF, the full-size thumbnail will display on the page with its annotations. Users will not be able to see the full video or PDF on the page.

Once the page has been saved with block-specific annotations, the block will include a "Reset annotations" button that will erase all of the block-specific annotations (but not the annotations saved to the media itself).  
