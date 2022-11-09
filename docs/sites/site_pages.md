# Site Pages

Pages form the content of your [sites](../sites/index.md). A site can have one or many pages.

Manage the pages for a site by navigating to the Sites section on the left-hand navigation of the admin dashboard. Select the site for which you want to manage the pages and click either the title or the edit (pencil) button to edit that site. 

Once you are editing the site, click the Pages link in the left-hand navigation.

When you create a new site, Omeka S automatically adds a page titled "Welcome" with a single HTML block (see below). You can edit this page or delete it.

## Adding pages
From the page for the site, click the Pages link. Then click the "Add new page" button on the upper left side of the window.

![At the top of the screen is a grey button labeled "Add new page"](../sites/sitesfiles/sitepg_addnew.png)  

To add a page you must enter a **Title**. You can also enter a **URL Slug**. Both of these can be edited later.

A title is required to create the page. If you do not enter a slug, Omeka S will create one from the page title. A slug is the page’s portion of the URL and can only contain letters, numbers, and hyphens; no other characters are allowed.

In addition, there is a checkbox for "Add to navigation". If checked, the page will automatically be added to the end of the main [navigation](../sites/site_navigation.md) level for the site. If you do not check this box, you can manually add the page to the site navigation and arrange it from the Navigation page. 

![Page view showing the fields for Add Page](../sites/sitesfiles/sitepg_add.png)

The eye icon, to the left of the "Cancel" and "Add" buttons, is a toggle to set the visibility of your page. If the toggle is set to public (no line), then anyone can see the page. If the toggle is set to private (line through the eye icon), the page will only be visible to logged-in users of the Omeka S installation who have site permissions (Supervisors and Global Admins will always be able to see private pages). 

Clicking or hitting enter on the eye icon toggles between public and private. 

Page is public: ![make public button showing an eye icon](../content/contentfiles/item_public.png){style="display:inline;"}

Page is private: ![make private button showing an eye icon with a diagonal slash through it](../content/contentfiles/item_private.png){style="display:inline;"}

Once you have entered this information and set visibility, click the "Add" button in the upper right hand corner of the browser window. You will be automatically taken to that page's edit view (see below). 

If you decide you do not want to create the page, click the "Cancel" button.

## Browse pages
The Pages page (once you have at least one page) will display all of your pages in their navigation order. Child pages will display below the parent page with a `-` before the page title.

Every page is listed with its Title, buttons to view (box with an arrow coming out), edit (pencil), or delete (trash can) the page, and the page's slug. 

![A sites page browse view, with 12 pages listed, some of which are child pages of the others.](../sites/sitesfiles/sitepg_browse.png)

Use the [Navigation](../sites/site_navigation.md) screen of the site to set the order of pages, including setting child and parent pages.

## Editing pages  
After clicking the Pages link, select the page you wish to edit by clicking the name of the page or the edit button (pencil). Note: clicking on the Page title will take you to the public view of that page. 

The edit view for a page will display the page's title across the top. In the upper left is the public/private toggle (the eye icon), and buttons to view the public version (opens in a new tab), delete the page, cancel changes, or save changes. Note that changes will not display on the public view until after they have been saved.

At the top of the work area are fields for the page title and URL slug. You can edit these at any time, but remember that the slug must be unique within the site (you cannot have two pages with the slug "welcome" on the same site).

![A page in edit view, with one media block added](../sites/sitesfiles/sitepg_edit.png)

On the right hand side you can choose to add a new block by selecting one of the following page elements:

- Asset
- Browse preview
- HTML
- Item showcase
- Item with metadata
- Line break
- List of pages
- List of sites
- Media Embed
- Page title
- Table of contents.

If you have the relevant modules installed, you may also have:

- Collecting
- Item Carousel
- Map by attachment
- Map by query.

Once you have added blocks to your page, click the "Save" button in the right hand corner.  To leave without saving changes, click "Cancel".

You can delete any of the blocks by clicking on the trash can icon located in the upper right corner of the block. 

![The “media” block is marked for deletion and thus highlighted in red.](../sites/sitesfiles/sitepg_delblock.png)

Change the order of blocks by clicking on the three horizontal lines on the upper left corner of the block and then dragging and dropping it to the desired location.

Some modules may create additional blocks for your site pages. For information on working with these blocks, please see the documentation for that [module](../modules/index.md).

### From the public side
If you are on the admin side and click "View" in the upper right-hand corner of a page, it will take you to the public view for that page. 

As you are browsing the public side of your site, you can edit the page you are viewing if you are currently logged in and the [user bar option is turned on in Site Settings](../sites/site_settings.md#general-settings). 

The user bar, which appears across the top of the page, includes a link to edit the current page - circled in red in the below image. 

![User bar for a page from the site Jane Austen, with "Edit page" circled in red](../sites/sitesfiles/sitepg_edit_public.png)

## Page blocks
Pages are made up of blocks, each of which has a different form of content.

### Asset
Allows a user to include files on a page that are not media attached to items (i.e. logos or other illustrative materials). Users may upload new assets or select from existing assets.

![Asset block with asset selection sidebar open which includes an asset upload option and an asset selection option](sitesfiles/sitepg_asset_selection.png)

Once an asset is selected, the user has the option to include additional asset information:

- Page link: allows the user to set a link so that when the asset is clicked by an end-user they are directed to that page.
- Alternative link title: allows the user to set a link title. If the link title is unset, the system will default to the file name.
- Caption: allows the user to set a caption to print to the page with the asset.

Click "Apply changes" to set the asset information. Should a user wish to revisit that material, they should click the wrench icon to open the edit sidebar.

![Asset options sidebar with inputs for page link, alternative link title, and caption](sitesfiles/sitepg_asset_sidebar.png)

Additionally, the Asset block includes a set of options for controlling the display of the file on the page:

- Class: allows the user to indicate a style class to control the display of the file.
- Alignment: allows the user to select the positioning of the file on the page. Options are default, float left, float right, and center.

### Browse preview
Allows you to add a block of items on a site page.

![Browse Preview block with the query element](../sites/sitesfiles/sitepg_browsepreview_query.png)

From the **Resource type** dropdown, choose the kind of resource you want to display in the block: Items, Item Sets, or Media. 

Using the **Search query** element interface, select your universe of items.

Click the "Edit" button to reveal the advanced search interface in the drawer. Once you are satisfied with the universe of items in your search, clicking the "Apply" button will set the universe of items for the Browse block.

![Advanced search query drawer](../sites/sitesfiles/sitepg_query_search.png)

Once a query has been set, you can click "Edit" to update the universe of items. You can click "Advanced Edit" to directly edit the query string. Finally, you can "Clear" a query to start over. If you have cleared a search in error, you can "Restore" it.

![Browse block with the edit query element](../sites/sitesfiles/sitepg_query_update.png)

The **Limit** field lets you set the number of resources to display in the block; any additional results from your query can be accessed on a search page linked from the bottom of the block (you set the text of the link in the **Link text** field below).

The **Components** field lets you decide what to display in your browse for each resource: the Heading, the Body, and or the Thumbnail. If not set in Site Settings, Heading defaults to resource Title and Body to resource Description.

The **Preview Title** field sets the heading above the browse section on the page.

The **Link text** field sets the link text at the bottom of the block - the block will only display as many results as you set in the **Limit** field above.

### HTML

Creates an HTML box in which you can add formatted text and links. When you click in the box, a formatting menu will display above the text field. 

Basic block: 

![Page block for HTML content](../sites/sitesfiles/sitepg_html.png)

With formatting menu open:

![Page block for HTML content with active field, showing formatting menu](../sites/sitesfiles/sitepg_html2.png)

You can embed content from elsewhere on the internet using iFrames or other embed codes in the HTML block. 

1. Click into the HTML block content area to show the formatting menu and then click on the button labeled "Source". ![HTML block with formatting menu open. A red arrow points to the Source button](../sites/sitesfiles/sitepg_htmlSource1.png)
2. This will open a dialog box where you can write HTML content.
3. Copy and paste the embed code into the source code editor. 
![Source box open with a short paragraph of text and an iframe from Vimeo](../sites/sitesfiles/sitepg_htmlSource2.png)
4. Click the green "OK" button at the bottom of the editor.
5. Your embed should show up in the HTML block either as a gray rectangle or as the embedded content. 
![HTML block showing the text and an embedded video](../sites/sitesfiles/sitepg_htmlSource3.png)

Finally, you can assign a **Class** to the HTML block for styling by your theme. If you do not assign a class, your HTML contents will show up without a wrapping `div` or other container. If you do assign a class, your HTML entry will appear inside a `<div class="[your class here]">` container. 

### Item showcase

A list of items. 

In item showcase blocks, multiple attachments build horizontally, creating rows across the page.

![Block for item showcase with one item added](../sites/sitesfiles/sitepg_showcase.png)

Using the drop-down menu in the block, you can:

- Set the thumbnail size for these items as large (default), medium, or square. 
- Set the attachment title as:
	- item title (title of the attached item);
	- media title (title of the specific piece of media you select associated with the item); or
	- no title.

Click the "Add Attachment" button to add an item to the block. This will open a drawer on the right side of the page to browse and select items.

If you have a large number of items to navigate, or multiple items with the same title, you can use the "Filter search" options by clicking the triangle button to the right of its label. 
 
These options are:

- Filter by class: opens a dropdown to select from all of the classes for the vocabularies in the Omeka S installation.
- Filter by item set: opens a dropdown to select from all item sets in the installation, not just those associated with the site on which you are working.
- Filter by item id: you can put in the specific item id for an item (the number which appears in the url when you are looking at the item on the admin). 

Once you have applied your changes to the filter, you must click the search button (magnifying glass) to apply the filters or run the search.

![Select item drawer with filter options displayed](../sites/sitesfiles/sitepg_selectitemFilter.png)

Once you’ve selected an item, the drawer will shift to that item’s information. You can add a caption and select which media (if more than one) you want to use. To return to the list of items, click the "Select item" button at the top of the drawer. To use the item displayed and apply the caption, etc, click the "Apply changes" button at the bottom of the drawer.

![Item view with apply changes option](../sites/sitesfiles/sitepg_applyitem.png)

To add multiple items at once, click the "Quick add" slider just above the list of items in the right hand drawer. This will add a checkbox to the left of each item. Check the boxes of those items you want to add to the block, then click the "Add selected" button at the bottom of the drawer.

![Select item drawer with quick add activated - every item in the view now has a checkbox.](../sites/sitesfiles/sitepg_selectitemQuick.png)

To cancel the item selection, click the X in the upper right corner of the drawer at any time.

Once you’ve added an item, it will appear in the Item List block. You can edit the caption or media options by clicking the edit (wrench) button for that row, and you can delete the item using the delete (trash can) icon.

You can add multiple items to the list.

### Item with metadata
This block displays an item along with all associated metadata (entered when creating or editing the [item](../content/items.md)).

Add attachments in the same manner as the [media embed](../sites/site_pages.md#media-embed) page block.

![Item with metadata block with nothing attached](../sites/sitesfiles/sitepg_iwm.png)

### Line break
Line break creates a transparent or opaque line break on the page, clearing all blocks. Select whether the line is transparent or opaque from the dropdown.

![line break table, dropdown selected to transparent](../sites/sitesfiles/sitepg_line.png)

HTML blocks wrap around Media blocks and at times you may want to clear the page. You might also want to create a visual break on the page. 

### List of pages
This block displays a linked list of pages. You may select from pages that are within the site but custom links such as Custom URL, Browse, and Browse Item Set are not available.

Clicking the "Add pages" button in the block, which will reveal a draw that contains all of the pages in the site. Click on the individual page to add it to the list.

![Page edit interface with List of pages block activated to open page select drawer](../sites/sitesfiles/sitespg_listPagesAdd.png)

You may drag and nest pages into any order.

![List of pages block with three pages showing nesting](../sites/sitesfiles/sitespg_listPagesOrder.png)

### List of sites
This block displays a list of all of the sites on your Omeka S install. This block has the following options:

- Sort sites by: Alphabetical order (A-Z); Oldest first; Newest first. By default this is set to alphabetical. 
- Max number of sites allows you to limit the number of sites which display at once. If left blank, all sites will display.
- A checkbox to turn on pagination; applied only if you set a display limit.
- A checkbox to show site summaries.  
- A checkbox to show site thumbnails.
- A checkbox to exclude the current site from the list. 

![List of sites block](../sites/sitesfiles/sitepg_slist1.png)

### Media embed
Creates a block with one or more pieces of media associated with items in the item pool. In media blocks, multiple attachments stack vertically.

![media block with no media attached](../sites/sitesfiles/sitepg_media.png)

The Media block has options for the display of the media: 

- Thumbnail type: choose from large, medium, and square.
- Thumbnail alignment: float left, float right, and center.
- Set the attachment title as:
	- item title (title of the attached item);
	- media title (title of the specific piece of media you select associated with the item); or
	- no title.

!!! note
	If you want media to appear beside a block of text, place a media block *above* an HTML block, select a smaller thumbnail size, and choose either float left or right for alignment. In the example below, the media has a thumbnail type of "medium", alignment "float right," and attachment title of the "item title": 

	![A block of lorem ipsum text with a right-aligned small image embedded at the top of the paragraph](../sites/sitesfiles/sitepg_mediaalign.png)

	Placing a media block *after* an HTML block will cause the media to appear below the end of the HTML block contents. 

To **add media to the block**, click the "Add attachment" button. 

On loading, the drawer will show a list of your items, most recent first. You can select from the first page, page through using the forward and back arrows, or search using the search bar. You can select from the first page, page through using the forward and back arrows, or search using the search bar. 

![Select item drawer](../sites/sitesfiles/sitepg_selectitem.png)
 
If you have a large number of items to navigate, or multiple items with the same title, you can use the "Filter search" options by clicking the triangle button to the right of its label. 
 
These options are:

- Filter by class: opens a dropdown to select from all of the classes for the vocabularies in the Omeka S installation.
- Filter by item set: opens a dropdown to select from all item sets in the installation, not just those associated with the site on which you are working.
- Filter by item id: you can put in the specific item id for an item (the number which appears in the url when you are looking at the item on the admin). 

Once you have applied your changes to the filter, you must click the search button (magnifying glass) to apply the filters or run the search.  

![Select item drawer with filter options displayed](../sites/sitesfiles/sitepg_selectitemFilter.png)

Once you’ve selected an item, the drawer will shift to that item’s information. You can add a caption and select which media (if more than one) you want to use. To return to the list of items, click the "Select item" button at the top of the drawer. To use the item displayed and apply the caption, etc, click the "Apply changes" button at the bottom of the drawer.

![Item view with apply changes option](../sites/sitesfiles/sitepg_applyitem.png)

To add multiple items at once, click the "quick add" slider just above the list of items in the right hand drawer. This will add a checkbox to the left of each item. Check the boxes of those items you want to add to the block, then click the "Add selected" button at the bottom of the drawer.

![Select item drawer with quick add activated - every item in the view now has a checkbox.](../sites/sitesfiles/sitepg_selectitemQuick.png)

### Page date and time

Displays the first-created date and/or time, and/or last-modified date and/or time, for a given page. 

![Page date and time settings box with radio buttons.](../sites/sitesfiles/sitepg_pageDateTime.png)

You have the option of displaying the created, modified, or both dates, as well as formatting for dates and times. If you choose to display both date and time, it will appear with "at" between the two values:

```
<p>Page created: September 6, 2022 at 7:17:35 PM GMT</p>

<p>Page modified: September 7, 2022 at 9:38:39 PM GMT</p>
```

Date format options:

- None
- Short (`7/6/22`)
- Medium (`Sep 6, 2022`)
- Long (`September 6, 2022`)
- Full (`Tuesday, September 6, 2022`).

Time format options:

- None
- Short (`7:17 PM`)
- Medium (`7:17:35 PM`)
- Long (`7:17:35 PM GMT`)
- Full (`7:17:35 PM GMT`).

### Page title
Displays the title of the current page.

![Page block display site's title](../sites/sitesfiles/sitepg_title.png)

### Table of contents
If the current page has child pages, you can add a table of content block for those pages.

The Depth option allows you to set how many levels of child pages you want to display. If left blank, it will display all possible levels. Please enter a whole number.  

![Table of content block with no depth option set](../sites/sitesfiles/sitepg_toc.png)

Add and arrange pages using the [Site Navigation](../sites/site_navigation.md) settings. 

### Other blocks
For module-specific blocks, such as [Collecting](../modules/collecting.md) or [Mapping](../modules/mapping.md), see the documentation for that module.

## Deleting pages
To delete a page, go to the Pages section of the relevant site. Click the delete (trash can) button at the right end of the row for that page. 

A drawer will open on the right side of the page asking you to confirm that you wish to delete the page, with the name of the page displayed under the confirmation button. To proceed, click the "Confirm delete" button. Otherwise, click the "X" in the upper right corner of the drawer to cancel.

![Delete drawer for the Novels page](../sites/sitesfiles/sitepg_delete.png)

