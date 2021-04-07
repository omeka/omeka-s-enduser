# Site Admin

The Site Admin page allows you to manage the main settings for the [site](../sites/index.md) on which you are working. Changes will only be applied to this site and will not change other sites' settings. 

It is the first tab under the site title, represented with a gear icon. 

The Site Admin page has two tabs, Info and Settings.

## Info 
The site info settings for an Omeka S site are where you can change the basic info for the site - the same information you entered when you created the site. You can change the:

* *title* - a text field. 
* *slug* - the url for your site.
* *summary* - the brief description of what it is about which will appear on your installation's landing page and on [List of Site](../sites/site_pages/#page-blocks) blocks. 

![Site info for the site “Jane Austen” with buttons across the top to View, Delete, and Save the site](../sites/sitesfiles/sites_siteinfo.png)

In the upper right hand corner of the window on this tab, you can use buttons to:

- set your site as public or private using the eye icon button (see below);
- *delete* the site;
- *cancel* making changes; and
- *Ssave* changes.

The *make public/private* button (eye icon) is used to both indicate and set whether the site is visible to the public or only to users of this Omeka S installation 

Site is public: ![make public button showing an eye icon](../content/contentfiles/item_public.png)   
Site is Private: ![make private button showing an eye icon with a diagonal slash through it](../content/contentfiles/item_private.png)

## Settings
The Settings page is divided into three sections: General, Browse, and Search. 

To implement any changes you make, click Save at the top right of the browser window when you are done. To leave without saving changes, click cancel.

### General settings

![general settings, all at default](../sites/sitesfiles/sites_settingsgen.png)

**Auto-assign new items** A checkbox which sets whether new items are automatically added to the site. If checked, every new item will be added to the site, regardless of the item's owner. Note that item owners may unassign their items from the site at any time, in the item's edit pages.

**Attachment link type** Sets the target of links from attachments you add to [site page blocks](../sites/site_pages/#page-blocks) (for example, in an [item showcase](../sites/site_pages/#item-showcase). It offers a dropdown with the following options:

- *item page:* clicking on the attachment takes users to the item page associated with the attached media;
- *media page:* clicking on the attachment takes users to the media page; 
- *direct link to file:* clicking on the attachment takes user to the file alone. 

**Embed media on item pages** is a checkbox. When checked, any linked media (such as videos) will be embedded on the item pages. When unchecked, site visitors will click through to view playable media.

**Show page pagination** is also a checkbox. When checked, "Previous" and "Next" links will display at the bottom of every page in the site, proceeding through your navigation. If unchecked, these links will not display.

**Show user bar on public views** sets whether there is a bar across the top of public site pages which allow users to access the admin side of the site. 

When users are logged in, the user bar has the following options:

- Installation Title: takes you back to the installation admin
- Site Title: takes you back to the landing page for managing the site (site/show).
- Resource view: depending on what you are viewing, this is a link to the admin side management for [Pages](../site/site_pages), [Items](../content/items), or [Item Sets](../content/item-sets)
- Edit link for that page, item set, or item. 
- User's display name: takes you to your user page.
- Logout: logs out current user.

![a blue bar across the top of the image displays the following words in light blue text, indicating a link: Stackable Sandbox, Jane Austen, Pages, Edit Page, Signed in as Megan, and a button to Logout.](../sites/sitesfiles/sites_userbarin.png)

When users are not logged, the user bar only displays a login option.

![A blue bar across the top of the image only has a small button reading "Log In". Below this, the site's title "A Tin Box" is displayed in black text on a white background.](../sites/sitesfiles/sites_userbarout.png)

The options for this setting are:

- Never
- When identified (when logged in) 
- Always

**Disable JSON-LD embed** Check this box to disable JSON-LD embedding on resource browse and show pages.

**Locale** is dropdown menu to select the language code for this site. By default this will be set to the same as the global locale setting for the entire Omeka S installation. To change, select a language from the dropdown menu.

### Browse settings

![browse settings, all empty](../sites/sitesfiles/sites_settingsbrowse.png)

**Restrict browse to attached items** is a checkbox. If checked, the Browse functions of your site will only show items which have been added to a page block. If unchecked, browse pages and blocks on your site will include all items in the Item Pool.

**Results per page** sets the number of results per page on browse pages by entering a number. If left blank, the site will use the default from the [global settings](../admin/settings).

Depending on the [site theme](../sites/site_theme), you may want to make this a multiple of 4 for a more elegant display. Note that using very large numbers (50, 75, 100) may cause browse pages to load slowly.

**Browse heading property** sets which property to use as the heading for each resource on a browse page. By default, this is Dublin Core: Title. The dropdown allows you to select from all available vocabularies, and includes a search bar to quickly find the desired property.

![The browse heading property option is open. The current selection, Dublin Core: Title, is at the top. Immediately below it is a search bar, indicated by a magnifying glass symbol. Below that are some properties from the the friend of a friend vocabulary.](../sites/sitesfiles/sites_setbrowseprop.png)


**Browse body property** sets which property to use as the body text for each resource on a browse page. By default, this is Dublin Core: Description. The dropdown allows you to select from all available vocabularies, and includes a search bar to quickly find the desired property.

### Show
When this box is checked, site pages to which an item is attached will display on the public view of that item.

![Show setting checked](../sites/sitesfiles/sites_settingShow.png)

### Search 

![search settings, all empty](../sites/sitesfiles/sites_settingssearch.png)

**Search type** is a dropdown which allows you to set from which site(s) the search bar generates results: 

- This site: only return results from this site;
- All sites: return results for all sites on the installation. 

**Search resources** is a series of checkboxes which let you select which types of resources are searched from the main search field on the site. Select from: site pages, items, and item sets. You can select all if you want.

**Templates** allows you to limit the properties for advanced item or item set search to only properties included in a template or templates. When this field is empty, the "Search by Value" on the advanced search will display all properties from all vocabularies in the Omeka S installation. Applying a template not only limits the options in the dropdown, it also includes your alternate labels for properties: 

![Detail view of a dropdown menu for the option 'Search by value". Values loaded include Creator:Author, Date: Date of Publication, and Description.](../sites/sitesfiles/sites_settingtemp.png)

Click in the field to add a template; you can add more than one template by clicking in the field again.

**Restrict to templates** will restrict search results to only those items which are using the selected templates. 
