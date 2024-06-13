# Copy Resources

The [Copy Resources module](https://omeka.org/s/modules/CopyResources){target=_blank} allows you to duplicate Omeka S sites, site pages, items, and item sets.

Once activated on the [modules](https://omeka.org/s/docs/user-manual/modules/){target=_blank} section of the admin dashboard, Copy Resources inserts a "copy" button into the interface of several pages in the admin side, including the table of sites, each site's table of pages, and the items and item sets tables. 

![The item sets view page in the admin side, showing "copy" buttons next to each item set in the table.](modulesfiles/copyResources_itemsets.png)

Items and item sets will get a new unique identifier, but have all their metadata fields duplicated, including data captured by modules, such as geolocation data in Mapping. Pages (and therefore their sites) will have all their page blocks duplicated, including page blocks added by modules. 

### Permissions

Global Administrators and Supervisors can use this module to copy sites, site pages, items, and item sets.

Users at the Author level and above (Author, Reviewer, Editor) can copy items and item sets. 

Users with site-specific permissions of Creator and Manager can copy pages. 

Site-specific permissions do not affect a user's ability to copy sites. Site copying is reserved for Global Administrators and Supervisors. 

When a resource is copied, its owner will change to the user who made the duplicate; it will not retain the owner of the original. 

### Requirements

Copy Resources depends on versions of those modules that have been updated since Copy Resources' release, specifically:

- Mapping version 2.0 and above
- Scripto version 1.5
- Collecting (when the form is used in sites' pages) version 1.2
- Data Visualization version 1.3
- Item Carousel Block (when the page block is used in sites' pages) version 1.3
- Faceted Browse version 1.5.

## Copying resources

![The items view page in the admin side, showing "copy" buttons next to each item set in the table.](modulesfiles/copyResources_items.png)

When copying an item or item set, the "copy" button appears to the left of the "edit" button (pencil icon) in each row in the resource table. Items and item sets can be copied manually, one at a time (not in bulk). 

When the "copy" button is clicked, a confirmation will appear in the right-hand drawer. 

![The items view page, with the drawer open to a confirmation message.](modulesfiles/copyResources_itemsConfirm.png)

!!! note
	Items will be copied without their media, in order to limit server processing and space use. If you need to copy an item's media, use the [Omeka S Item Importer](osii.md) module, which has the ability to copy items along with their media. Enter in your own site's API to access existing items. Recall that media only exist through association with a single item; you cannot "add" existing media to a second item.

When the resource has been successfully copied, you will be taken to the new resource's view page. 

![The item view page, with a confirmation message that the item was successfully copied.](modulesfiles/copyResources_itemsCopied.png)

You can also copy resources when viewing them individually - a "Copy" button will appear in the top right corner of the screen:

![The item view page, with a "Copy" button in the top right corner, next to the "Edit item" button.](modulesfiles/copyResources_itemsView.png)

!!! note
	Note that duplicated resources will have the same [links to other Omeka S resources](../content/items.md#linked-resources), but anything that links to the original resource will not automatically link to its duplicate. You will have to manually establish these links if desired, or use modules such as [Inverse Properties](inverseproperties.md). 

## Copying sites and pages

### Sites

When copying a site, you can find the "copy" button in the table of sites, or on an individual site's view page.

![The site view page, with a "Copy" button in the top right corner, next to the "Edit" button.](modulesfiles/copyResources_siteCopy.png)

The module will duplicate every page, every navigation entry, every site and theme setting, and every user permission. All resources added to the original site will be carried over to the duplicate site. 

When copying a site, pages will maintain their unique slugs; the site itself will have the original site's slug with "-1" appended to the end. You may then rename and re-slug the site in its settings. 

Where other modules introduce site-specific data (such as Metadata Browse, Sharing, Data Visualization, Collecting, Faceted Browse, Item Carousel Block, etc.) this information will be copied, [as long as the corresponding module is updated where applicable (see the Requirements section above)](#requirements). 

Be sure to check over a duplicated site thoroughly to ensure everything has copied correctly. Some pages, page blocks, or module data may not have copied as intended, and may need manual re-setting, such as items chosen in the media embed page block, or pages set in the navigation. 

#### After you duplicate a site

Copying an entire site is a complicated process; sites contain large varieties of data, including from modules and themes. Copying a site may result in errors that need to be fixed before the site can be made public, and some data may need to be manually recreated from the original site before you can have a perfect copy. 

Some potential issues you may run into:

- A site whose navigation has missing page entries may cause errors until the missing pages are cleared or fixed. This may include problems changing the site theme, name, or slug. If you see the errors "Invalid navigation: page link missing page ID" or "Invalid navigation: invalid link data", check your Navigation for entires displaying "[Missing page]".
- Data visualizations may be copied over as drafts, not as published diagrams and generated datasets. That is, all the settings will persist, but you will need to generate a duplicate dataset in order for the data visualizations to appear on the public side. You may notice that on the original site, the data visualizations are appearing with "View dataset" and "View diagram" icons in the table, whereas on the duplicate site they are only appearing with "Edit" (pencil) icons in the table. 
- Some sites with the Faceted Browse module in use may show errors if the user duplicating the site does not have permissions to use Faceted Browse. 

### Pages

When copying pages within a single site, the duplicated page will have the original slug with "-1" appended to the end. You may then rename and re-slug the page. 

All page blocks should copy over, including page blocks introduced by modules, [as long as the corresponding module is updated where applicable (see the Requirements section above)](#requirements).

Duplicated pages will need to be manually added to the site navigation in order to display publically; this module does not add newly copied pages to the site navigation.