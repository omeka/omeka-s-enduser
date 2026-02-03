# Resources

The Resources tab of the site context menu allows you to set what Items and Item Sets are available on your site's browse pages. The Items tab also sets which items are available in the sidebar when building pages.

Resources has two tabs across the top of the window: **Items** and **Item Sets**. 

Under the **Items** tab, you can set the items available for selection and browse in your site.

The **Item Sets** tab is where you select the sets which will show up on the Browse Item Sets page, should you choose to include it.

!!! note
	The two tabs operate *independently* from each other. The selections made on one will have no effect on the other. The Items tab limits which items are available, while the Item Set tab limits which sets are visible for public browsing.

You also have the ability to display or hide [linked resources](../content/items.md#linked-resources) that are not in the given site. Go to the site settings page and [in the "Show" section you will find a checkbox](site_settings.md#show) for excluding resources that have not been added to the site. Note that if you continue to display external linked resources, users can click on the external resource link as it displays in metadata and view the resource as though it belonged to the site. Those external resources will not appear in browses or searches.

## Items

The Items tab determines what automatically appears in the resource selection options on the [pages](../sites/site_pages.md) of your Omeka S [site](../sites/index.md). It also limits the resources which appear on a browse page on your site.

When you first navigate the to items tab, it will display information about the number of items in the site and give you options for making changes. You will see:

- A statement of the number of items current assigned to the site. Click on the number to open a new browser tab showing all of those items. 
- A statement of whether the site automatically includes new items, and a link to the site admin to change that setting. 
- A table with the following options for managing your current items:
	- Do nothing: make no changes
	- Add - keep existing items and assign items from a new search
	- Replace - unassign all items and assign items from a new search
	- Remove - unassign items from a new search
	- Remove all - unassign all items.

![Item resources landing for a site with 28 items](../sites/sitesfiles/sites_resources1.png)

If you want to make changes to the item sources in your site, select the radio button for the action you want to take. For all but "Do nothing" and "Remove all", a **Query Edit** element will appear.

![Item resources with "add" selected and the search form loaded](../sites/sitesfiles/sites_resources_query_element.png)

Clicking "Edit" will reveal an advanced search form in the drawer. 

![Advanced Search query drawer with People, Location, and Event resource templates added](../sites/sitesfiles/sites_resources_query_drawer.png)

Note that the search options in the form work together to build an overall search. If you had the search in the image above, looking for items where "Creator" contains the word "Doyle" and you added a criteria where `Class=Text`, it would only add items to your pool which matched *both* statements.

Search forms options are:

**Search full-text**: search all values of all items. 

**Search by value**: search for a term or phrase which you enter. 

- The first selector allows you to specify a property to search. 
- The second selector allows you to set the relationship the property has with the value. The options are:
	- is exactly, 
	- is not exactly, 
	- contains,
	- does not contain,
	- is resource with ID,
	- is not resource with ID,
	- has any value (there is something in the property), and
	- has no values.
- Finally, there is a text field for you to enter the value you want the property to have.

To find a resource ID, go to the resource and look at the URL in your browser's address bar. The numbers at the end of the URL are the resource ID. 

**Search by Class**: select one or more classes from the dropdown menu - the search will only return items with this class. 

**Search by template**: select from existing resource templates and the search will only return items using this resource template or templates. 

**Search by item set**: select from a dropdown of item sets.

**Search by owner**: select from a dropdown of site users. 

Note that the fields for searches by value, class, template, and item set have a large red plus sign to the left of the select options. Use these to add more than one search of this kind to your form. You can use the red trash can icon to the right of the field to remove it.

At the bottom of search fields within the draw are a set of buttons to control what happens with your search. Clicking the "Preview" button after creating a search will open a new drawer with the items which meet the criteria of the search. If you would like to clear your search, select "Reset". Once you are satisfied with your items, select "Apply" to set the universe. 

Even after you have applied your query, you can still "Edit", "Restore" your previous query, or "Clear" your query. Also, if this is a query that you are likely to repeat, you can select the checkbox to "Keep this query".

![Item resource query element with update options ](../sites/sitesfiles/sites_resources_query_update.png)

Item Sets
---------------------------
On this tab you can select which Item Sets will display on a Browse Item Sets page when added to the [navigation](../sites/site_navigation.md). 

The table in the Item Sets tab shows any item sets already added, with their title and owner's email address. 

![Site resources Item Sets tab](../sites/sitesfiles/siteres_itemsets.png)

To add an item set, select it in the right hand sidebar. You can find the desired item set by either:

- typing the name of the item set in the search bar and then clicking on the correct item set, or
- click on the name of the item set owner, then clicking on the name of the item set.

![Selecting an item set from the owner's section of the sidebar](../sites/sitesfiles/siteres_itemsetsel.png)

Remove an item set by clicking the red delete button (trash can icon). It will still be available to re-add from the drawer on the right.

You can change the order of the item sets by dragging and dropping using the three-bar icon on the left end of the row.

The following image shows a browse item sets public view using the "Default" theme: 

![A site's public page showing the item sets available for browsing.](../sites/sitesfiles/siteres_ispublic.png)

