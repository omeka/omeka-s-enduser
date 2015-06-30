---
title: Items
---

Items are the building blocks of the Omeka system. 

In Omeka S, items are made available to you through the Items tab on the left-hand navigation of the administrative dashboard, and you may add items to a site. 

Each item appears as a row, with the *Title*, buttons for options to *edit* (pencil), *delete* (trash can), or *view details* (ellipses), the *Class*, and *Date Created*. The list of items can be sorted by any of the fields listed using the up/down arrow icons at the end of that section.  

![Basic view of admin items page, showing a handful of item resources](../content/contentfiles/itemsOS.png)

## View
To quickly view the basic information about an item, click the *view details* (ellipses) button in the row for the item, located next to the edit and delete buttons. This will open a drawer displaying the item’s title and description followed by all metadata properties under their respective headings.

![Item browse view with details open for Case of Identity. Links to item view page squared in blue](../content/contentfiles/viewitem.png) The blue squares indicate where to click to open the full item view.

For a more detailed look at an individual item, click on its title in the items browse table or when viewing its details  
When you view an individual item , there are tabs for the item’s *Metadata* and its *Linked Resources*. The right hand side of the page displays the item’s media, any *item sets* to which it belongs, its creation date, owner, and visibility. 

![Item view for Case of Identity, showing linked resources](../content/contentfiles/item_linked.png) 

An item’s *linked resources* (as shown above) are those items which have been added as properties to the item being viewed. The table on this tab gives the predicate (property) and a link to each object (item).

## Adding an Item

To add a new item, begin by selecting the the _Add new item_ button. 

Before creating items, site admins  may want to create [Resource Templates](../resource-template.md), which will load specific fields for various item types which you define.

### Values
The Values tab is where you enter metadata information such as title, description, etc.

![Basic view of add items page, with no content entered](../content/contentfiles/AddItem_start.png)

1. If desired, select a resource template from the top drop-down menu. Resource templates are defined by the site administrators and editors.
  * If using a resource template, the class should automatically load.
  * If not using a resource template, select a class from the dropdown menu (these are populated from the Vocabularies in your installation).
1. Add information to the fields provided.  
  1. You have the choice of three forms of input for fields in your item resources: text, a resource from the installation, or an external link.  
    * **Text** fields are entered with text, which can include html code.  
    * **Omeka Resource** fields create an internal link between the resource you are creating and the resource which fills that field. 
     You have the option to use either another item or an item set. 
     Once you select an item or item set, detailed information will load, and you must click *select resource* to finish linking the resources. You can also click the *X* button in the upper right-hand corner to go back to the list of items or item sets.

      ![Select Item menu with list of items to link in edit item view](../content/contentfiles/AddItem_resource.png)
    * **URI** fields link to an external website or online resource.
1. You can add additional fields by selecting a property from the list on the right side of the screen. You can either browse fields by vocabulary (Dublin Core, Bibliographic Ontology, etc), or search in the *filter properties* bar above the list of properties and vocabularies.

### Media
Use the *Media* tab to add images, video, or other files.
Using the dropdown of the *Add New Media* menu on the right side of the screen, select a media type (Upload, URL, oEmbed, YouTube, or HTML)
  ![“Add new media” dropdown showing the options](../content/contentfiles/AddItem_media.png)
- *Upload*: select a file to upload from your computer.
- *URL*: add a link to a website or web resource.
- *oEmbed*: insert an embedded representation of an external URL. Note that this will only work with content from existing oEmbed providers.
- *HTML*: add html content as a media resource for your item.

While editing, you can delete any media instance using the delete button (trashcan) on the upper right corner of the media block.

![Blank media instance blocks for URL, upload](../content/contentfiles/Additem_media2.png)

If you have more than one media instance for an item, you can reorder them by dragging and drop each media instance block, using the icon of three lines in the upper left corner of the block as the anchor when dragging (click there).

After you have added media, you can edit and delete it from the [Media](../content/media.md) tab on the left hand navigation.

### Item Sets
Use the dropdown to add the item to an item set.

### Visibility
Use the *make public/private* button (eye icon) to set whether the item is visible to the public or only to users of the OmekaS install. 

![make public button showing an eye icon](../content/contentfiles/item_public.png) Public 

![make private button showing an eye icon with a diagonal slash through it](../content/contentfiles/item_private.png)  Private

Note that if an item is private, all the media attached is private, but an item which is public can have attached media which are set to be either public or private.
