# Mapping 

The [Mapping module](https://omeka.org/s/modules/Mapping){target=_blank} allows you to geolocate Omeka S items. Maps can also include timelines that allow you to scroll through items on a map in chronological order.

![Map with timeline](../modules/modulesfiles/Mapping-timelinePublic1.png)

The Mapping module has no global configuration settings. It adds several new metadata fields to each item, and a new "Mapping" tab to each item edit screen, as well as several batch-editing options for items. It adds optional location-based search fields to the advanced search pages on the admin and public interfaces, controlled on a site-by-site basis by [Site Settings](../sites/site_settings.md#settings). It also adds: 

- page blocks to [Site Pages](../sites/site_pages.md) that can display maps and timelines for browsing
- a "Map Browse" page, found in the [Site Navigation settings](../sites/site_navigation.md)
- [resource blocks to items and item sets](../sites/site_theme.md#select-regions-and-blocks) (not media), which can be repositioned within the regions offered by a given site's theme. 

Mapping can work with the [Collecting](../modules/collecting.md#prompts) module, by allowing users filling out the contribution form to provide geolocation data for their submissions. Users click directly on a map to place a marker, and can optionally provide a text label for the marker. See the Collecting module page for more information.

Mapping can work with the [CSV Import](../modules/csvimport.md) module, allowing geolocation data to be added in bulk. See the [CSV Import integration section below](#csv-import-integration) for more information.

## How to use maps

You can navigate the map using your mouse or trackpad by scrolling to zoom and clicking and dragging to pan. Scrolling using your mouse wheel is a setting that can be turned on or off in map page blocks.

Small white square buttons on the left side of the map allow you to modify its settings. Hover over the buttons with the mouse to view tool-tips.

![Screenshot of the buttons on the map described below](../modules/modulesfiles/Mapping_JustButtons.png)

* **Zoom in**: The small white square with a black plus sign. Each click zooms in one step (between 0 and 19).
* **Zoom out**: The square with black minus sign. Each click zooms out one step (between 0 and 19).
* **Full Screen**: The square with four corners. View this map expanded to fit the screen of your device.
* **Draw a polyline**: The square with a diagonal line. Create a line with two or more points to indicate a relevant area on the map, such as a street.
* **Draw a polygon**: The square with a five-sided shape. Create a shape with three or more sides to indicate a relevant area on the map, such as a state or province. 
* **Draw a rectangle**: The square with a black square. Create a shape with four sides to indicate a relevant area on the map. 
* **Draw a marker**: The square with black bubble marker. When you click the button your pointer becomes a blue marker. Click again on the map to place the marker.
* **Edit feature**: The square with black box and pencil icon. This option is only available after a marker or shape has been added. Click the button and a pink box appears around each marker. Click a marker to move it. Click again to place. Use the grey buttons to "Save" or "Cancel".
* **Delete feature**: The square with a trashcan icon. This option is only available after a marker or shape has been added. Click the icon to select a marker. Click the marker to be removed and it will disappear. Use the grey buttons to "Save" or "Cancel" these changes, or to "Clear all" markers currently on the map.
* **Enter address**: The square with a black magnifying glass icon. Click to enter an address in the search bar.
* **Set the current view as the default view**: The square with a target or crosshair symbol. The map may have a default zoom level based on the site settings, or a zoom level containing all existing markers if applicable. Click to set the current view as the default view for this item.
* **Go to the current default view**: The square with a black box around a dot. This option is only available after you have set a default view. Click to pan and zoom map to the selected view for this item.
* **Clear the default view**: The square with a black "X". This option is only available after you have set a default view. Click to clear pan and zoom preferences and return to the initial global view.

## Geolocate items

The Mapping module adds metadata fields to each item, most of which cannot be accessed directly like a text field can. This includes a latitude and longitude pair that creates markers on maps (an item can have more than one marker), or a series of coordinates that define shapes on the map (lines, polygons, and rectangles). There are also default display settings for each item's map - minimum corner coordinates that ensure the map contains at least those top, bottom, left, and right spots. 

This information can be set manually using the item's "Mapping" tab, via a visual map interface, or in some cases can be bulk-added to items using [CSV Import](#csv-import-integration).

### Add locations

The item view screen will not show a "Mapping" tab unless there is already geolocation metadata, but one will appear when editing the item. To add a map to an item, enter editing mode on an item. Navigate to the "Mapping" tab to open the map interface.

![Screenshot of the Add/Edit Item Page with Mapping tab selected.](../modules/modulesfiles/Mapping_Item_Add.png)

To move the map to where you want to add a location, you can do one of the following:

* Zoom and drag to find the location.
* Enter latitude and longitude coordinates into the search box. These should be formatted as decimals, for example `38.897222, -77.064167`, not `38° 53′ 50″ N, 77° 3′ 51″ W`.
* Type the place name into the search box (see the image below).
	* Options will populate as you type, and will not search locations which do not match the formatting of the search function.

![Mapping tab with a search for "Roosevelt Island" in the search view. Below the search field are a number of suggested locations.](../modules/modulesfiles/Mapping_itemSearch.png)

When you are centered on your intended location, you can then:

* Use the line tool to define a line across the map. This can be used to, for example, position an item along a border or a street. A line has a start and end, and as many points or angles as desired, but cannot be connected to make a shape. 
* Use the polygon or rectangle tool to define a shape across the map. This can be used to, for example, enclose a rough area of relevance (such as a city or country) or indicate a potential range of locations (for example, where the precise location of a photo is not known). 
* Click on the marker tool; your cursor will become a marker. To set the point, click on the map.

We refer to these various markers and shapes as "features" throughout the rest of this documentation.

![Mapping tab with an active marker being drawn. The marker has a tooltip saying "click map to place marker"](../modules/modulesfiles/Mapping-drawMarker.png)

#### Edit features

You can now click on the marker or shape to add a label that will display on [public map views](#public-view) of the item. Be aware that this will display in a large font.

![Closeup of map with a marker selected. There is a field to enter the maker label.](../modules/modulesfiles/Mapping-addLabel.png)

You can also add an image to display on the feature when clicked in the [public view](#public-view). You can only select from images which have already been [attached to the item as media](../content/items.md#media). To remove the image, select "No Image" from the sidebar.

![Marker selected with Image added. The media is also visible in the sidebar, along with an option for "no image"](../modules/modulesfiles/Mapping-addImage.png)

Neither field is required, but if you choose an image without entering a label, the media title will appear in the label field. This can be removed. 

To edit the label or image again, click on the feature. This will open the options for the label and image, as seen above.

To **move a marker or shape**, use the "Edit feature" button on the left hand toolbar (small white square with black box and pencil icon). Any feature on the map will become highlighted in a red, dotted-line outline. Click and drag the feature you want to move. Rectangles can be turned into polygons using this tool, and individual points in lines and polgyons can be removed by clicking on them without dragging (a polygon requires a minimum of three points). 

To apply your changes, click the "Save" option that opens from the "Edit feature" button. If you do not save, the marker will not be moved.

![Marker being moved](../modules/modulesfiles/Mapping-moveMarker.png)

To **delete a marker**, first click the "Delete feature" button in the left hand toolbar (trash can icon). Click on the marker or shape you want to delete; this will remove the feature from the map. In order to make the deletion permanent, you must click "Save" in the small menu that opens from the "Delete feature" button.

Note that you can use the "Clear all" button in the menu which opens form the "Delete feature" button to clear all markers and shapes on the map.

![Marker being deleted.](../modules/modulesfiles/Mapping-deleteMarker.png)

#### Map display

You can set any map's zoom level and center. The default is to center on one feature and zoom fully in, or to zoom out far enough to contain all features in the map view.

* **Set the current view as the default view**: The square with a target or crosshair symbol. The map will default to a zoomed out (global) view. Click to set the current view as the default view for this item.
* **Go to the current default view**: The square with a black box around a dot. This option is only available after you have set a default view. Click to pan and zoom map to the selected view for this item.
* **Clear the default view**: The square with a black "X". This option is only available after you have set a default view. Click to clear pan and zoom preferences and return to the initial global view.

### Search for map data

Items with information filled out in their mapping metadata fields (i.e. with markers or shapes on the map) can be searched with fields that the Mapping module adds to the advanced search fields in the admin side of the installation, and the public search pages of each site. The public fields are optional (turned off by default) on [individual sites](../sites/site_settings.md#settings) in their [site settings](#site-wide-settings). 

![Map-based searching in the admin side.](modulesfiles/Mapping_advSearch.png)

The "Add geographic location to advanced search" option will add the three fields seen above, allowing users to search by location: they must provide an address, as well as a distance (in numbers) and select a unit (kilometres or miles). 

The "Search by map marker presence" option provides users with a dropdown with the options of "Has map markers" or "Has no map markers", as seen above.

### Batch-edit map data

Users can select multiple items and perform [batch editing](../content/items.md#batch-editing) to create and edit map markers. You cannot batch-add shapes at this time, nor can you batch-edit map display settings, but you can batch-add markers from latitude and longitude values, and you can batch-edit labels and images for all features. 

The options are:

- **Delete features**: You can batch-remove all existing markers and shapes from multiple items. 
- **Copy coordinates to markers**: This involves taking latitude and longitude data from an existing metadata value on each item or from their associated media. This will append new markers, not overwrite any existing markers. If there are multiple values on an item in the chosen proprerty, this will batch-copy them all as multiple markers. You can specify:
	- Which fields contain each or both values (for example, if you previously put this information into a text field such as `dcterms:spatial`)
	- How they are separated (the operation will ignore spaces)
	- Whether the longitude or latitude comes first in the pair. 
If you copy coordinates from an attached media, you can also check a box to assign the media as a marker image. 
- **Update features**: Markers and shapes can have [customized thumbnails and labels](#edit-features) rather than displaying just the item title as a link. You can batch-edit marker customization by:
	- Removing images
	- Using items' primary media as images
	- Copying labels from an existing metadata value (either from the item, the primary media, or the media already assigned to the marker)
	- Removing labels (the first entry in the dropdown).

Note that marker labels have a limit of 255 characters. You will see your labels truncated if you copy label text from a field containing values longer than 255 characters.

If the chosen field in this batch operation does not contain valid entries, the item(s) will be skipped and you will not see an error message. [Batch-editing operations](../content/items.md#batch-editing) do not appear in the Jobs log unless they are "Edit all," so if you have done a selected-items batch-edit you may not be able to trace which items were modified.

![The map-specific batch-editing field, filled out to copy "Latitude/Longitude" values from dcterms:coverage of each item.](modulesfiles/Mapping_batchEdit.png)

You may wish to copy your coordinates in one batch operation, then update those markers with labels and images in a second batch operation. Note that if an item has multiple markers, all markers will get a marker update of identical images and labels. 

## CSV Import integration

Mapping is compatible with [CSV Import](../modules/csvimport.md) when importing items (but not when importing mixed resources).

If the two modules are enabled, your CSV Import process will have a new "Mapping" dropdown menu in the "Add mapping" sidebar when you are connecting a spreadsheet column to a property.

The "Mapping" dropdown menu includes three options for pinning the item geographically: "Latitude", "Longitude", and "Latitude/Longitude". Make sure your "Latitude/Longitude" values are separated with a slash (`/`) character. 

These must all be supplied as numerical values, not degree: write northern latitudes as positive numbers and southern latitudes as negative numbers ("-90" to "90"), eastern longitudes as positive numbers and western longitudes as negative numbers ("-180" to "180").

!!! note 
	The latitude and longitude fields cannot take multiple values, that is, you cannot bulk-import two or more markers for each item using these fields. You also cannot import multiple latitudes and longitudes using the "Append" method in CSV Import to import multiple rows of data onto the same item. You can add multiple values using the "Latitude/Longitude" field. This will take input in the form of `lat/long;lat/long`, where the semi-colon is the multivalue separator you indicate in the CSV Import settings.

The "Default Bounds (sw_lng,sw_lat,ne_lng,ne_lat)" option allows you to set four corner coordinates for the map that displays for that item, in the format `sw_lng,sw_lat,ne_lng,ne_lat` (bottom left longitude, bottom left latitude, top right longitude, top right latitude). Map widths and heights display dynamically depending on the page and the browser window, so your four coordinates will be centered within the map and excess space will display either vertically or horizontally as applicable. **Be careful to provide longitudes first and latitudes second in your bounds values.**

!!! note
	The default bounds field will not accept multiple values. You will encounter an error with your entire CSV Import process if you attempt to Append a second default bounds value to an item. At this time you will also encounter an error for the entire process if you attempt to Revise or Update an existing default bounds value on an item; the error message will not specify which rows worked successfully, but the log will identify the item where the process stopped by its unique ID. You must manually erase default bounds from each item individually if you wish to change those settings. Mapping properties do not appear in bulk-editing options.

For example, to pin an item near Madrid and set the map bounds around the country of Spain, you could provide two values: a marker latitude and longitude of "40.79864618/-3.645817429" and default bounds of "4.25300,43.95470,-12.12392,36.45605". 

Note that the default bounds will ignore any location markers. For example, if you set bounds around Spain, but your item's marker is pinned to Antarctica, the map will display Spain and users will have to search for the marker manually.

You cannot set marker labels or marker images in CSV Import. You cannot import the coordinates for map shapes in CSV Import. 

You cannot [batch-edit](../content/items.md#batch-actions) mapping values after items are in your system, only edit them manually one item at a time, or batch-revise mapping data using CSV Import.

## Add maps to a site

### Site-wide settings

The Mapping module adds a section to each site's "Settings" tab found under "Site admin." 

![Mapping section of Settings tab.](modulesfiles/Mapping_siteSettings.png)

You can choose to add or remove mapping-specific search fields from this site's advanced search forms, enable or disable feature clustering on this site's maps, and choose a basemap for every map on the site. This can be overriden by specific maps' settings. 

### Map Browse page

![The Map Browse page on the Thanks Roy theme, with a watercolour basemap selected.](modulesfiles/Mapping_mapBrowsePage.png)

Mapping creates a "Map Browse" page that can be added to each site in its navigation settings. This map has minimal customization options and will show every item in the site that has one or more geolocations, as well as some advanced search fields (including search by address with radius). These fields are not affected by [site settings](#searching-for-map-data). The title of the page will be "Map".

Go to a Site, then go to Navigation. You will see under "Add a custom link" the option to add a "Map Browse." When this is added to your navigation, you will be able to change the label that appears in the navigation (default is "Map Browse"), and the basemap, by clicking on the pencil icon to edit the Map Browse page settings. Note that changing the basemap will change the URL that is added to the navigation - for example, `yoursite/map-browse?mapping_basemap_provider=OpenTopoMap`. 

The Map Browse page will [show slightly different markers than other maps](#public-view). Rather than display the item title, it will link with "View item". If media has been used to add an image, it will also display "View media" as a link.

![Item mapping marker with label and image](../modules/modulesfiles/Mapping-publicLabelImg2.png)

If markers have not been customized, the viewer will simply see "View item".

![Item mapping marker with no label or image](../modules/modulesfiles/Mapping-publicNoLabel.png)

### Page blocks

Mapping creates two page blocks you can add to your site pages: "Map by attachments", where you manually add resources to the map block; and "Map by query", which allows you to use a search string to add resources to the map block.

To add a map to a page, click to edit the page. On the right, under "Add new block", click either the "Map by attachments" or "Map by query" option (1). Selecting one will open the map block to the page (2). The blocks include customizable features for the map in collapsable panes. Click the triangle to expand or collapse these fields (3).

![Screenshot of the Page with Map Block selected. Block includes menu options Default View, WMS Overlays and attachments.](../modules/modulesfiles/Mapping_Page_MapBlock1.png)

The "Map by attachments" and "Map by query" blocks have largely the same settings, with the exception of the methods for adding items to the map.

#### Default view
This section lets you set the appearance and zoom level of the map. There are three fields and a preview map. Within the preview map are buttons which you can use to set the default zoom and location of the map. If you do not set a default zoom or location, the map will adjust to display all resources.

![Map by attachments block open to Default Settings. There is no information in any field, and the preview map is zoomed in to level 2](../modules/modulesfiles/Mapping_BlockDefaultView1.png)

**Basemap provider**: select from a dropdown of basemaps. Once selected, the preview map will update to show you the appearance of that map. The default is "OpenStreetMap.Mapnik". These providers are offered as-is; there is no guarantee of service or speed.

**Minimum zoom level**: set the minimum zoom for the map. Fully zoomed out is 0. See the preview map below to visualize each level of zoom and test your settings and basemap.

**Maximum zoom level**: set the maximum possible zoom level. The highest is 19. Some basemaps do not function at higher levels; be sure to set your maximum at a level where your basemap is visible. See the preview map below to visualize each level of zoom and test your settings and basemap.

**Scroll wheel zoom**: set whether users can zoom with their mouse wheel when hovering over the map, either automatically upon page load or after clicking inside the map. You can disable mouse-wheel scrolling entirely.

The preview map allows you to visually set a default view for this map. The map dimensions on the public page may not match the dimensions shown in this preview, but saving a default view here will guarantee that the four corner points seen here will be displayed on the public page, with excess added to the outer edges if applicable. 

Note that the line above the preview map tells you the current zoom level. 

Within the preview map, there are five buttons:

 * **Zoom in**: The square with a black plus sign. Each click zooms in one step (between 0 and 19).
 * **Zoom out**: The square with black minus sign. Each click zooms out one step (between 0 and 19).
 * **Set the current view as default view**: The square with a target or crosshair symbol. The map will default to a global view, or a view containing all map features from all items. Click to set the current view as the default view. 
 * **Go to current default view**: The square with a black box around a dot. This option is only available after a default view has been set. Click to visualize the current setting.
 * **Clear the default center and zoom level**: The square with a black "X". Click to return to the initial default view.

You must save your default view using the in-map buttons, then save the page. 

![closeup of the mapping buttons with labels added](../modules/modulesfiles/Mapping_BlockDefMapButtons.png)

#### WMS overlays

You can add, edit, and delete custom-chosen [Web Map Service (WMS)](https://mapserver.org/ogc/wms_server.html){target=_blank} overlays to your maps using these tools.

 * **Label**: Create a unique, descriptive label for the map overlay. This will be visible to visitors and should be used to differentiate between overlays.
 * **Base URL**: Add a map overlay to the WMS map by URL. 
 * **Layers**: Any layers you wish to use, separated by commas. This is a string or strings provided by the WMS host.
 * **Styles**: Any styles you wish to use, separated by commas. This is a string or strings provided by the WMS host.

 Click "Add Overlay" to create the overlay. Click "Clear Inputs" to clear each of the fields. Multiple overlays can be added.

![Map page block with only the WMS Overlays section open. Two overlays already exist, one selected to display as default. The form is being filled with the details for a third overlay.](../modules/modulesfiles/Mapping_pageOverlays.png)

Once you have added an overlay, it will appear above the fields for adding overlays. If you would like one or more of the overlays to display automatically when the page loads, check the box next to it. Edit an overlay by clicking on on the red pencil edit button, or click the red trashcan icon to delete the overlay.

#### Timeline

The Timeline options allow you to add a timeline display to the left of the map view. Note that this feature requires the [Numeric Data Types](../modules/numericdatatypes.md) module and at least one item that has a property with a Timestamp or Interval value (applied via the [resource template](../content/resource-template.md)).

- **Title headline**: displays on the first slide of the timeline (see ["Timeline public view"](#timeline-public-view) below). You can use this to name the timeline.
- **Title text**: appears below the title headline on the first slide of the timeline (see ["Timeline public view"](#timeline-public-view) below). You can use this to provide context or narrative introduction for the timeline.
- **Fly to**: is a dropdown menu where you can set the zoom level for each point in the timeline on the map. Your options are default view, or zoom levels 0-18 (even numbers only). The higher the number, the more zoomed in the map will be.
	- Note that the transition between points is animated, so if you have very distant points the shift between them will involve a significant zoom out and in.
- **Show contemporaneous events**: sets how two events with the same timestamp or interval are displayed. If checked, contemporaneous events will both display in the map when active in the story slider.
	- For timestamp properties, if two events have a date of "1 January 2000," both events will show on the map when either is in the story slider.
	- For interval properties, if one event has an interval of "28 July 1914 - 11 November 1918" and another has an interval of "January 1819- December 1920" both events will show on the map when either is in the story slider.
	- Note that this setting only works with the default view of Timeline navigation position.
- **Timeline navigation position**: by default, the timeline displays with the story slider, to the left of the map. Using this dropdown, you can change where the story slider displays. Options are:
	- Default position
	- Full width, below story slider and map
	- Full width, above story slider and map.
- **Property**: a dropdown menu; select the timestamp or interval property to use when populating the timeline. The dropdown menu will populate with the properties which have been defined in a resource type as using numeric data types Interval or Timestamp.
	- You may want to make a note of which property and numeric data type you are using before creating the map block. The dropdown only displays the term and data type but not which template it is associated with, for example `Date Created (numeric:timestamp)`.
	- Noted that you can only select *one* property per timeline. You cannot mix timestamp and interval data.

![Mapping block with all options collapsed except Timeline, which shows options as described, all empty](../modules/modulesfiles/Mapping-timelineBlock.png)

To remove the timeline from a map block, click the "X" on the far right of the Property dropdown.

To see how the various settings of the timeline block appear on the public side, please see the [Timeline Public View](#timeline-public-view) section below.

#### Attachments (Map by attachments block)

Markers are added to the map by adding items.

* Click "Add Attachment" (1) to select them from a list on the right (2). Note: This list will only be populated by items that have at least one location added to them (when editing the item).
* Clicking an item adds it to a list in the Attachments pane (3).
* Click and drag items in this list to reorder them.
* Delete items by clicking the red trashcan.

![Screenshot of the map with Add Attachment selected. On the right a list of items.](../modules/modulesfiles/Mapping_pageAttachments.png)

To add multiple items at once, click the "Quick add" slider just above the list of items in the right hand drawer. This will add a checkbox to the left of each item. Check the boxes of those items you want to add to the map, then click the "Add selected" button at the bottom of the drawer.

![Drawer with bulk add option activated](../modules/modulesfiles/Mapping-bulkAttachments.png)

#### Query (Map by query block)

This block allows you to choose a subset of the resources added to your site with a search query, rather than by manually adding individual items. 

The query can be left blank; in this case, the map will show all items added to the site that have qualifying mapping data.

More complicated queries can be set: specific item sets, classes, templates, items from a date range, or items with a specific linked resource (such as a particular Person item in the "Creator" field), for example. 

![The map by query block showing a query for "Has map features", with the sidebar open to the searh query edit interface.](modulesfiles/Mapping-blockquerysidebar.png)

You can also run a search on your public site, and from the search results page, copy everything in your browser's address bar starting with the question mark all the way to the end of the search URL (to the right). Click the "Advanced edit" button and paste the URL string into the field that appears. 

![The address bar and very top of a search results page.](../sites/sitesfiles/sitepg_bpquery.png)

![A map by query block open to the Query section. There is a query pasted into the field.](../modules/modulesfiles/Mapping-blockQuery.png)

Note that the administrative interface will not preview the map with your selected items. You will need to go to the public view of the page to see the items that result from your query.

### Public view

A map block will display on a public page, item page, or item set page at the full page width. If you have settings in the [default view](#default-view) of the map block, or have set [default map bounds for the item](#setting-the-map-display), these should be applied. Otherwise the map will zoom so that all of the items are visible.

Viewers can zoom either using the scroll function of their computer or the zoom in/out buttons on the left side of the map. You can set whether viewers can use their mouse wheels to scroll inside the map page blocks (not item maps or the Map Browse page). 

![Map block with three individual markers and two green cluster circles of two markers. The map shows a portion of southern England.](../modules/modulesfiles/Mapping-public.png)

Each item will display as one or more markers or shapes on the map. Features that are close together may display as a cluster circle, with a number indicating how many items share that location. As you zoom in, these clusters will break open. Depending on the size of a shape, shapes may not cluster except at very low zoom levels, or at all. Clicking on a marker will display the label for that marker. 

Item set pages, if you [add the Mapping resource block to a region](../sites/site_theme.md#select-regions-and-blocks), will display a map with all the features for all the items in that set. Item sets themselves cannot be geolocated. This map resource block has no settings but can be modified with the [site-wide settings](#site-wide-settings).

Note that the following displays are slightly different in the [Map Browse page](#map-browse-page).

If you have not added a label or image for the marker, it will simply say "Item: [Title]." 

!!!
	Note that map features should display the appropriate language metadata based on the site's locale setting: for example, if a site is set to "French" in the locale, and the item has a French-tagged title (`fr`), that title should display rather than a title with another language tag or no tag at all. If you are experiencing problems loading the right language in multilingual projects, check your site settings and the language tags on the items' metadata fields. 

If you have added a label, it will show the label, as well as representative media and a link to the media if the marker has one.

Item mapping marker with label only:

![](../modules/modulesfiles/Mapping-publicLabel.png)

Item mapping marker with label and image:

![](../modules/modulesfiles/Mapping-publicLabelImg.png)

Item mapping marker with no label or image:

![](../modules/modulesfiles/Mapping-publicNoLabel2.png)

#### Timeline public view

Timelines only appear in page blocks. The timeline will display to the left of the map, or above the map on mobile views. Each item appears on both the map and the timeline (meaning it will only display items that have both numeric dates and map markers).

On a map block with a timeline, the block initially loads with the map either at default view or zoomed to display all markers. The timeline will display the title headline and text, as seen below:

![Map block with timeline, displaying the first slide of the timeline. There are two lines of text, a larger font reading "Title Headline" and below it smaller font reading "title text".](../modules/modulesfiles/Mapping-timelinePublic1.png)

In the timeline half of the display, information appears on the top and the timeline on the bottom. The timeline viewer has zoom buttons which increase or decrease the horizontal display of time (zoom in for year by year, zoom out to see decades at once). The arrow below them returns the viewer to the title slide.

When mousing over the timeline, the cursor changes to a four-directional arrow. Viewers can hold and drag left and right to scroll through the timeline. They can also navigate between items using the semi-opaque right and left arrows on the information area of the display.

Clicking on a marker will display that item's date or interval, title, description, and attached image. The information area has a scroll bar for longer material. The title acts as a link to the item's show page.

![Map block with timeline, displaying the interval item "Steventon Rectory, 1775-1801". The information area includes the beginning of a long paragraph describing the item. The marker for the rectory in the timeline runs off the right side of the timeline, which displays 1760-1800.](../modules/modulesfiles/Mapping-timelinePublic2.png)

Whenever an item is selected, its marker in the timeline will show up with a highlight to indicate that it is active.

**Numeric:Interval appearance**

Interval properties display as a long bar running horizontally across the timeline, with bars reaching down to the timeline at the start and end dates of the interval. Overlapping intervals will stack.

![Interval timeline with both Steventon Rectory and Reading Abbey Girls' School. The latter is open and highlighted in the timeline display; it is shorter than and nested under the timeline display for the Rectory.](../modules/modulesfiles/Mapping-timelinePublic3.png)

**Numeric:Timestamp appearance**

Timestamp properties display as a flag on the timeline, with one bar anchoring them to the timeline. Items which overlap either due to date or long text will stack.

![Timestamp timeline showing markers for the births of Cassandra and Jane Austen in the 1770s](../modules/modulesfiles/Mapping-timelinePublic4.png)

**Timeline navigation position**

If you select "full width, below story slider and map" in the "Timeline navigation position" dropdown, the timeline and map will display as follows:

![Timeline start page slide, with the timeline displaying full width below the map and story slider](../modules/modulesfiles/Mapping-timelinePublicBelow.png)

If you select "full width, above story slider and map", the display will be similar but with the timeline above.

**Show contemporaneous events**

When "Show contemporaneous events" is checked, the map zooms to display all events which take place on the same day.

In the image below, the timeline is using interval data. The event "Reading Abbey Girls' School" (March 1785 - December 1786) takes place within the same period as "Steventon Rectory" (1775-1801), so the map is zoomed out to display the location markers for both events.

![image as described](../modules/modulesfiles/Mapping-timelinePublicSCE.png)

## Troubleshooting

- Trouble deleting: If you would like to remove the mapping location from an item, you must delete all the map modifications. First, delete each marker (click the "Delete feature" button, select the markers, click to save). Then clear the map view settings (click the "Clear the default center and zoom level" button). The map will return to a global view. Save the item and confirm that the map no longer appears.
- Trouble with timelines: Ensure you have the Numeric Data Types module installed and active, and that your selected date metadata field is formatted correctly as a Numeric Data Type using resource templates. Items with mapping data but without date data will not show, nor will items with data data but without mapping data, as maps with timelines require both.