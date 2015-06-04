
Items are the building blocks of the Omeka system. They can be images, texts, objects, or many other item types. Before creating items you may want to create [Resource Templates](/ResourceTemplate/), which will load specific fields for various item types which you define.

You can browse the items in your OmekaS install from the Items tab on the left-hand navigation of the main administrative dashboard. Each item appears as a row, with the *Title*, buttons for *edit*, *delete*, and *view info*, the *Class*, and *Date Created*. The list of items can be sorted by any of the fields listed using the up/down arrow icons at the end of that section.  

![Basic view of admin items page, showing a handful of item resources](/content/contentfiles/itemsOS.png)

## Adding an Item

To add a new item, begin by selecting the the _Add new item_ button. 

### Values
The Values tab is where you enter metadata information such as title, description, etc.

![Basic view of add items page, with no content entered](/content/contentfiles/AddItem_start.png)

1. If desired, select a resource template from the top drop-down menu. Resource templates are defined by the site administrators and editors.
  * If using a resource template, the class should automatically load.
  * If not using a resource template, select a class from the dropdown (these are populated from the Vocabularies in your installation).
1. Add information to the fields provided.  
  1. You have the choice of three forms of input for fields in your item resources: text, a resource from the installation, or an external link.  
    * **Text** fields are entered with text, which can include html code.  
    * **Omeka Resource** fields create an internal link between the resource you are creating and the resource which fills that field. 
     You have the option to use either another item or an item set. 
     Once you select an item or item set, detailed information will load, and you must click *select resource* to finish linking the resources. You can also click the *X* button in the upper right-hand corner to go back to the list of items or item sets.

      ![Select Item menu with list of items to link in edit item view](/content/contentfiles/AddItem_resource.png)
    * **URI** fields link to an external website or online resource.
1. You can add additional fields by selecting a property from the list on the right side of the screen. You can either browse fields by vocabulary (Dublin Core, Bibliographic Ontology, etc), or search in the *filter properties* bar above the list of properties and vocabularies.

### Media
Use the *Media* tab to add images, video, or other files.
1. Using the dropdown of the *Add New Media* menu on the right side of the screen, select a media type (Upload, URL, oEmbed, or YouTube)
  ![“Add new media” dropdown showing the options](/content/contentfiles/AddItem_media.png)

### Item Sets
Use the dropdown to add the item to an item set.

### Visibility
Use the Public checkbox in the upper right-hand corner of the Item add/edit view to set the item visible to the public or not.

