---
title: Item Sets
---

Item sets are an aggregation of *items*, similar to collections in previous versions of Omeka. In Omeka S, items may belong to any number of sets, and an item set can have any number of items.

Item sets are managed via the *Item Sets* tab (stacked boxes) located in the left navigation of the admin dashboard. 

![Browse item sets view with four item sets.](../content/contentfiles/itemsets_browse.png)

After clicking on the tab, a table appears listing all item sets with: their *Title*; icons for each row representing options to *edit* (pencil), *delete* (trash can), or *view details* (ellipses); the item set’s *Class*, the *Owner* of the set, and the *Date Created*.

Above this table on the left is the pagination for the item sets table, where you can click the left and right arrows to move forward and back or enter a page number to go a specific page of item sets. In the center above the table is the button for *advanced search*. On the right above the table are drop-down menus to re-order the table by *title, class, owner,* or *date created* in either *ascending* or *descending* order. 

In the upper right corner is the button to *Add new item set*. 


## View Item Set

To quickly see information about an item set, click on the *view details* button (ellipses) for the item set on the item sets browse page. This will open a drawer on the right hand side of the page with the item set’s Title, Visibility, and number of Items.

![Drawer view of an item, with description and title](../content/contentfiles/itemsets_drawer.png)

To view all the information for an item set, click on its name. On the item sets view page, there are tabs to see an item set’s *Metadata* and *Linked Resources*. On the right side of the item set’s view page is information about the date created, owner, and visibility. For item sets, visibility includes both whether the set is private or public and whether other users can add items to the set. 

![Reading view of a single item set](../content/contentfiles/itemsets_view.png)

The item set’s *metadata* is entered by users. The *linked resources* are items which are used to populate specific metadata properties (for example: Creator). When viewing linked resources, the table includes the predicate (property or description) and the object (linked item resource).

To view the items in a set, either click on the number of items in the set on the item set browse page, or click the *view items* button in the upper right corner of the individual item set page.


## Create an item set

To create a new item set, click the Item Sets tab from the left navigation of the dashboard. Click the *add new item set* button on the right hand side of the screen.

Item sets may use the same resource templates available for items to provide pre-selected fields. Each set should contain at least one descriptive value, such as Dublin Core Description. 

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

![a set which is open and public, with an open padlock icon and an icon of an open eye](../content/contentfiles/setOpenPublic.png) Open and Public 

![a set which is closed and private, with a closed padlock icon and  an icon of an eye with a slash through it](../content/contentfiles/setClosedPrivate.png)  Closed and Private
