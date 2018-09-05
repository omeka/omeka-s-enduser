---
title: Item Sets
---

Item sets are an aggregation of *items*, similar to collections in previous versions of Omeka. In Omeka S, items may belong to any number of sets, and an item set can have any number of items.

Item sets are managed via the *Item Sets* tab (stacked boxes) located in the left navigation of the admin dashboard. 

![Browse item sets view with four item sets.](/content/contentfiles/itemsets_browse.png)

After clicking on the tab, a table appears listing all item sets with: 

- their *Title*; 
- icons for each row representing options to *edit* (pencil), *delete* (trash can), or *view details* (ellipses); 
- the item set’s *Class*, 
- the *Owner* of the set, 
- and the date the set was *Created*.

Above this table on the left is the pagination for the item sets table, where you can click the left and right arrows to move forward and back or enter a page number to go a specific page of item sets. In the center above the table is the button for *advanced search*. On the right above the table are drop-down menus to re-order the table by *title, class, owner,* or *date created* in either *ascending* or *descending* order. 

In the upper right corner is the button to *Add new item set*. 


## View Item Set

To quickly see information about an item set, click on the *view details* button (ellipses) for the item set on the item sets browse page. This will open a drawer on the right hand side of the page with the item set’s Title, Visibility, and number of Items.

![Drawer view of an item, with description and title](/content/contentfiles/itemsets_drawer.png)

To view all the information for an item set, click on its name. On the item sets view page, there are tabs to see an item set’s *Metadata* and *Linked Resources*. On the right side of the item set’s view page is information about the date created, owner, and visibility. For item sets, visibility includes both whether the set is private or public and whether other users can add items to the set. 

![Reading view of a single item set](/content/contentfiles/itemsets_view.png)

The item set’s *metadata* is entered by users. 

*Linked resources* are items which have used the item set to populate specific metadata properties. When viewing linked resources, the table includes the predicate (property or description) and the object (linked item resource). Note that incoming resources (those used as properties for the item set being viewed) will *not* display here, as they already display in the item set's metadata.

To view the items in a set, either click on the number of items in the set on the item set browse page, or click the *view items* button in the upper right corner of the individual item set page.


## Create an item set

To create a new item set, click the Item Sets tab from the left navigation of the dashboard. Click the *add new item set* button on the right hand side of the screen.

Item sets may use the same resource templates available for items to provide pre-selected fields. Each set should contain at least one descriptive value, such as Dublin Core Description. 

![Add item set, no properties selected](/content/contentfiles/itemsets_add.png)

In the *Values* tab:

- You may add text, a resource from the installation, or an external link in each field.  
    * *Text* fields are entered with text, which can include HTML code. The keyboard at the top of the field input indicates text. The globe icon which appears next to it can be used to set language. 
    * *Omeka Resource* fields create an internal link between the resource you are creating and the resource which fills that field. You have the option to use either another item or an item set. Once you select an item or item set, detailed information will load, and you must click *select resource* to finish linking the resources. You can also click the *X* button in the upper right-hand corner to go back to the list of items or item sets.
    * *URI* fields link to an external website or online resource.
- You may add other fields by selecting a property from the list on the right. Browse fields by vocabulary (Dublin Core, Bibliographic Ontology, etc), or search in the *filter properties* bar above the list of properties and vocabularies.


### Access Settings
Item sets have two settings which control their access. They can be *public* or *not public* and they can be *open* or *closed*.

Use the *make public/private* button (eye icon) to make the item visible to the public or only to all users of the Omeka S installation (not public). 

*Open* sets can be edited and added to by any user on the install.

*Closed* sets are available and editable only by its creator, site admins, and global admins.

![a set which is open and public, with an open padlock icon and an icon of an open eye](/content/contentfiles/setOpenPublic.png) Open and Public 

![a set which is closed and private, with a closed padlock icon and  an icon of an eye with a slash through it](/content/contentfiles/setClosedPrivate.png)  Closed and Private

Note that the public/private and open/closed settings operate independently - you can have an open and private item set, for example.

## Batch Editing

From the browse page of item sets (admin/item-set) you can batch edit item sets, using the dropdown menu on the upper right near the "Add new item set" button. You can select multiple item sets using the checkboxes on the left of each set's row.

![A red arrow points to the dropdown for batch editing and deleting options](/content/contentfiles/itemsets_batch.png)

Batch actions are as follows:  

- Edit selected: edit only the item sets that are selected on the page
- Edit all: edit all the item sets returned by a search (default is all item sets)
- Delete selected: delete only the item sets that are selected on the page
- Delete all: delete all the item sets returned by a search (default is all item sets)

Choose one of these options and then click *Go*.

**Batch editing** item sets takes you to a new page. The item sets being edited will display on the right side in a drawer, while the batch edit form gives you the following options:  

- set visibility: a dropdown, select from public or not public.
- set openness: a dropdown, select from open or not open.
- set template: a dropdown, select from the installation's resource templates.
- set class: a dropdown, select from classes of the installed vocabularies.
- clear property values: a dropdown menu with all the properties in all vocabularies, selecting from this will remove any values in that property in the affected item sets. Clear additional properties using the *Clear another property* button.

![Batch edit items form, with options as described above. Everything is grayscale](/content/contentfiles/itemsets_batchedit.png)

In addition,  you can use the bottoms at the bottom of the batch edit form to add properties to every item set:

- add text value
- add resource value
- add URI value  

Selecting any of these will add a block to the form where you can select a property from the installed vocabularies and enter the value for that property.

![Image depicts only the Add text value block of the batch edit form, with a dropdown labeled "select property" above an empty text field](/content/contentfiles/itemsets_property.png)

For the **delete actions**, a drawer will open on the right side of the screen telling you the number of item sets which will be deleted. Nothing will be deleted unless you click the red *Confirm Delete* button. This action cannot be undone. To opt out of deleting the item sets, click the X in the upper right corner of the deletion drawer. To confirm delete, check the "Are you sure" checkbox and then click *Confirm Delete*. Note that deleting the item set will not delete the items associated with that set.

![Close up of the warning, with the text describing the number of items to be deleted in red.](/content/contentfiles/itemsets_bulkdelete.png)

## Delete Item Set
In addition to the batch delete function described above, you can also delete individual item sets. 

Note that deleting item sets does not delete any items associated with the item set. 

From the Item Set browse view, you can delete an item set by clicking the trash can icon in the row for the item set you want to delete. This will open a drawer on the right with a message at the top asking you to confirm that you want to delete the item set, with the metadata for the item set below the confirm delete button. Click *Confirm delete* to delete the item set, or close the drawer to cancel.

![Browse item sets view with two item sets and a red arrow pointing to the trash can icon](/content/contentfiles/itemsets_browseDel.png)

![Drawer with a confirmation message to delete the an item set, including the Confirm delete button and the item set's basic descriptive metadata - title, description, and number of items in the set. ](/content/contentfiles/itemsets_browseDel.png)


From the edit page for an Item Set, click the *Delete* button in the upper right-hand corner. This will open a drawer on the right side asking you to confirm that you want to delete the item set. Click *Confirm delete* to delete the item set, or close the drawer to cancel.

![Close up of the warning drawer, with text stating "Are you sure you would like to delete this item set" and below it a red button with white text stating "Confirm delete".](/content/contentfiles/itemset-delete2.png)
