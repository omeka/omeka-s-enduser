# CSV Import

The [CSV Import module](https://omeka.org/s/modules/CSVImport) allows you to import items, item sets, media, and users into your Omeka S install from a CSV (comma-separated values), TSV (tab-separated values), or ODF (open document format) file. This module is only available to [Global Administrator and Supervisor users](../admin/users.md).

<!--- too much repetition in this page. need a "common settings" section first, then just the resource-type-specific comments in sections after that. --->

## Preparing your CSV file

Most spreadsheet editors (including Microsoft Excel, Google Sheets, and Apple Numbers) can export to CSV format. CSV files for import **must be encoded in UTF-8**, so when exporting or saving a new document, be sure to check that the encoding is UTF-8.

Most import options rely on you only importing one type of data: a list of items, a list of item sets, a list of media, etc. There is the option for a [Mixed resource import](#mixed-resource-import), requiring one column that identifies the type of each row.

If the spreadsheet is already created, take a moment to think about which columns you want to match to which vocabulary properties. Your CSV file **must have a header row** in order for the module to process it correctly, so you may need to add a row at the top with column names.

If you have multiple inputs for a single property, you can separate them with a secondary **multivalue separator**. For example, a work with multiple authors (E.B. White and William Strunk Jr.) with the column for Creator containing "E.B. White;William Strunk Jr" has a semicolon (;) as the multivalue separator. When imported into Omeka S, each of these would appear as a separate entry in the property (Creator: "E.B. White" and Creator: "William Strunk Jr."). Note that the import will be the same whether you leave a space after your separator (as in "E.B. White; William Strunk Jr") or not.

### Column names

The module will automatically map columns by the names provided in the header row, if they conform to the property terms of your installation's [vocabularies](../content/vocabularies.md). For example, a CSV file with a column header "dcterms:title" would automap to the Dublin Core Title property when the CSV is loaded for mapping.

To find the terms you should use for your column headers, go to the Vocabularies tab from the admin dashboard. Click on the number of properties for the vocabulary you want to use (Dublin Core in the image below).

![Red arrow points to the properties link for Dublin Core](../modules/modulesfiles/csv_automap1.png)

In the table of vocabulary properties, there is a column for **Term**. Use the Term as the column heading for the property you want to automap in CSV Import. For example, "dcterms:abstract" would automap to the Dublin Core property "Abstract" and "foaf:firstName" would automap to the Friend of a Friend property "firstName".

![arrow points to the Term column for Dublin Core properties.](../modules/modulesfiles/csv_automap2.png)

There is a setting in the inital import settings to automap with simple labels - this will work with columns whose names match a vocabulary label, for example "title" or "abstract", without supplying the term. Note that this option defaults to Dublin Core (`dcterms:title` and `dcterms:abstract`) before proceeding through other installed vocabularies.

If your column names are not exact and the automapping feature does not recognize them, you should still label them something helpful so that you can manually map them while importing.

If you have plans to batch-import metadata or properties that come with a module (such as latitude and longitude from the Mapping module) or using structured vocabularies that come from modules (such as the data types from the Value Suggest module), install and configure those modules first to ensure that the fields exist in your site's data model, before trying to enter information into those fields. Data may be lost if you uninstall those modules later.

## Initial import settings

Start an import by clicking on the CSV Import tab on the left-hand navigation. This will open the initial "Import Settings" page.

![A red arrow points to CSV Import in the navigation](../modules/modulesfiles/csvimport_nav.png)

- For the Spreadsheet option, use the "Choose File" button to select the file from your computer.
- From the **CSV column delimiter** dropdown, choose from the following options (this should match the formatting of your file) that separates different values in a row:
	- comma (default)
	- semi-colon
	- colon
	- tabulation
	- carriage return
	- space
	- pipe (`|`).

- From the **CSV column enclosure** dropdown, choose the option that encloses long text in your file, if applicable:
	- double quote (default)
	- quote
	- hash (#).

- From the **Import type** dropdown, select what you are importing:
	- Item Sets
	- Items
	- Media (must relate to already existing Items)
	- Mixed resources (spreadsheet can inlcude Item Sets, Items, and Media)
	- Users.

- Check the box to **Automap with simple labels**. This will automap not only specially formatted column headings but also column headings which match existing vocabulary property labels.

- **Comments** will appear on the "Past Imports" page; you may find this useful to make a note about what is being imported and any settings you have chosen on this page.

![Import settings as described, no entries](../modules/modulesfiles/csvimport_settings.png)

Click the "Next" button to continue with the import process.

## Import items
To import items, select "Items" under the "Import type" on the first page.

When you click next, the page will load with the following tabs:

### Map to Omeka S data
This tab displays a table with the columns from your spreadsheet as rows. Each row displays:

- A checkbox
- The column header from the spreadsheet
- A plus symbol button for adding or modifying a mapping
- A wrench symbol button for spreadsheet column options
- A trash can to delete mappings
- A column to show options selected.

![Mappings for a spreadsheet with ten columns. Some of the columns, such as those named Description and Title have automatically been mapped to Dublin Core properties.](../modules/modulesfiles/csvimport_itemsMap1.png)

#### Mapping options

To map a column header to a vocabulary property, click on the plus symbol button to the left of the column header. This will open a drawer on the right-hand side of the screen.

![A red arrow points to the plus sign button to the left of the word "title"](../modules/modulesfiles/csvimport_itemsMapButton.png)

The drawer has multiple options for mapping:

**Properties** select a property to map the column data to, from any of the installed vocabularies. Use the Filter field to search the available properties for a specific property.

![Properties option open showing all of the installed vocabularies for the Omeka S installation: Dublin Core, Bibliographic Ontology, Friend of a Friend, Scripto and OWL-Time Ontology.](../modules/modulesfiles/csvimport_itemsMapProp.png)

**Item-specific data** has a dropdown to set Item Set by selected property. If you have a column with data for an Item Set to which you want to add the item, you can set how it maps using this dropdown. You can either use the Item Set's internal ID, or any one of its properties (title, description).

![dropdown as described](../modules/modulesfiles/csvimport_itemsMapISD.png)

**Generic data** also has a dropdown where you can set one of four options:

- **Resource template (by label)**: Set the template for an item by name. The name of the template as entered in the spreadsheet and the name of the template in Omeka S must match exactly.
- **Resource class (by term)**: Set the resource class for an item. The term for the class in the spreadsheet and in the Omeka S installation must match exactly.
- **Owner (by email address)**: Set an item's owner by email address. This must be the email address associated with the user's account in the Omeka S installation.
- **Visibility public/private**: Set the visibility of the item. Use "private" or "public" in the spreadsheet.

![Dropdown as described](../modules/modulesfiles/csvimport_itemsMapgeneric.png)

**Media source** If the column in your spreadsheet is a media source, select which kind from the dropdown:

- HTML
- IIIF Image (link)
- oEmbed (link)
- URL
- YouTube (link).

![Dropdown as described](../modules/modulesfiles/csvimport_itemsMapMedia.png)

Be sure to click the "Apply Changes" at the bottom of the drawer or nothing you set here will be kept.

To remove a mapping, click the trash can icon in the row for that data mapping. It will remove *only* the mapping, not the column data.

If you have data in a column in your CSV that you do not want to bring in to your Omeka S installation, simply do not map that column to a property or data type.

#### Column options
To access options for data in a column of your CSV (represented by a row in the import table), click the wrench icon for that column heading.

![A red arrow points to the wrench button to the left of the word "title"](../modules/modulesfiles/csvimport_itemsMapOptions.png)

Column options are in addition to mappings. If you add options without also mapping column data to resource, media, or other data, nothing will be imported.

This will open a drawer on the right side of the browser window with the following options:

- **Use multivalve separator**: Check this box to use the multivalue separator for data in this column. You set the multivalue separator in the initial import page, but you can change it in the Basic Settings tab.  
- **Language**: Set the language for this column using the [IETF Language tag](https://en.wikipedia.org/wiki/IETF_language_tag) for the language in which the text is written. This will override what you have entered in basic settings.
- **Data type**: A dropdown with at least three options, which correspond to the [values](../content/items.md#values) one can use when adding properties to an item:
	- Import as text (default).
	- Import as URI reference. You can set the label for a URI by including the desired text after a space, for example: `http://example.com Label Text Goes Here`.
	- Import as Omeka S resource ID. Note that you must have the correct ID for the resource. A resource's ID is the number sequence at the end of the URL when on the view or edit page, so for `/admin/item/11576` the ID is 11576. You can also see the resource's ID in the right-hand drawer on the resource's view page. Items, item sets, and media all have IDs.
	- If you have certain modules installed, such as [Numeric Data Types](../modules/numericdatatypes.md), there may be additional data type options supplied by those modules.
- **Import values as private**: Check this box to set all property values *in this column* private.

![drawer with options as described above](../modules/modulesfiles/csvimport_ItemColOpt.png)

Be sure to click the "Apply Changes" button at the bottom of the drawer in order to save your changes.

To remove a column option setting, click the wrench icon again and undo your changes manually.

#### Batch edit
When you select one or more rows in the table (columns from your CSV file), you can use the "Batch edit options" button to apply the column options described above - multivalue separator, language, data type, and property privacy - to multiple CSV columns at once.

![a screenshot of the Mapping tab, with the boxes for Columns Title and Creator checked. A red arrow points to the Batch edit options button. On the right side of the screen, a drawer offers options for changing the settings as described](../modules/modulesfiles/csvimport_batchEditItems.png)

Be sure to click the "Apply Changes" button at the bottom of the drawer in order to save your changes.

### Item import basic settings
These settings apply to the entire CSV you are importing. Note that some of these settings can be overwritten by column options in the Map to Omeka S data tab.

![options as described below](../modules/modulesfiles/csvimport_itemsbasic.png)

- **Resource template**: Select a resource template from the drop-down menu to apply to the imported items. You can use the search field at the top of the dropdown to narrow results or find a particular template.
- **Class**: Select a class from the drop-down menu to apply to the imported items. You can use the search field at the top of the dropdown to narrow results or find a particular class.
- **Owner**: Set the owner for the Items by selecting a user from the drop-down menu. You can use the search field at the top of the dropdown to narrow results or find a particular user.
- **Visibility**: Set the visibility of the imported items as public  or private.
- **Item sets**: Add the imported items to a specific item set or sets using the dropdown menu.
- **Sites**: Add the imported items to the specified site or sites. Global and user-specific default sites will be preselected here.
- **Multivalue separator**: Enter the multivalue separator character here, if you have used one.
      - The columns of data in your CSV should be separated by commas, however within those columns you can add a special character to create multiple inputs, for example a semicolon. This is where you can specify multiple creators, multiple subjects, or other common uses.
- **Language**: Set the language of the values in the spreadsheet using the appropriate [IETF Language tag](https://en.wikipedia.org/wiki/IETF_language_tag).

!!! note
	If you are uploading different formats of data (for example, some text-based creator names and some URI-based creator links) into the same field (`dcterms:creator`, in this case), use two columns (named something helpful like "dcterms:creator-text" and "dcterms:creator-uri"), and upon import, map those two columns to different data types. Use the wrench icon to open up column mappings and select the correct data type for each column.

### Item import advanced settings

There are two options on the "Advanced Settings" tab.

![Advanced settings page showing only the Action dropdown and the field for number of rows to process. ](../modules/modulesfiles/csvimport_ItemsAdvanced.png)

The "Action" setting allows you to change the action of process from a straight import to one of the following options:

- **Create a new resource**: Default option. Each row in the CSV will become a new resource.
- **Append data to the resource**: Add new data to the resource, based on an identifier for an existing resource. (Cannot be undone.)
- **Revise data of the resource**: Replace existing data in the resource with data from the CSV, except if empty. (Cannot be undone.)
- **Update data of the resource**: Replace existing data in the resource with data from the CSV, even when the cell is empty. (Cannot be undone.)
- **Replace all data of the resource**: Remove all properties of the resource, and fill with new information from the sheet. (Cannot be undone.)
- **Delete the resource**: Delete all matching resources. (Cannot be undone.)

If you select one of these options from the dropdown, three additional settings will appear on the tab. These settings help the process determine which resources to take action on.

- **Resource identifier column**: Select from a dropdown of the columns in your CSV. This is the data from your spreadsheet which maps to existing data in your Omeka S installation. Choose a unique identifier.
- **Resource identifier property**: Select from a dropdown of all properties in your Omeka S installation. This should be the equivalent property already in your Omeka S install to the column you selected above.
	- Example: if the data in the Resource identifier column is "Title" with the first row of data having a title "A Study in Scarlet," and you set the Resource identifier property to "Dublin Core: Title," then the import process will look for a resource already in your Omeka S installation whose `dc:title` property is "A Study in Scarlet". This will only work with exact matches. If you have more than one resource with matching data, it will only take action on the oldest resource.
- **Action on unidentified resources**: This option determines what to do when no matching resource exists in the Omeka S installation, when your selected action applies to an existing resource ("Append", "Revise", "Update", or "Replace"). This option is not used when the main action is "Create" or "Delete". Your options are:
	- Skip the row
	- Create a new resource.

In addition to the above, the Advanced Settings tab has an option to set the number of rows to process by batch. By default this is set to 20. However, if you are running into errors with an import you may want to set it to 5 or even 1 in order to troubleshoot and determine the source of the error.

### Complete import
Once you have completed mappings, column options, and any settings, click the "Import" button in the upper right corner of the browser window. This should start the import and redirect you to the "Past Imports" tab. You should see a confirmation message saying "Importing in Job ID [number]".

## Import item sets
To import item sets, select "Item Set" under the "Import type" on the first page.

When you click next, the page will load with the following tabs:

### Map to Omeka S data
This tab displays a table with the columns from your spreadsheet as rows. Each row displays:

- a Checkbox
- Column header from the spreadsheet
- A plus symbol button for adding or modifying a mapping
- A wrench symbol button for spreadsheet column options
- A trash can to delete mappings
- A column to show options selected.

![Mappings for a spreadsheet with four columns, all of which have been automapped](../modules/modulesfiles/csvimport_ItemSet1.png)

#### Mapping options

To map a column header to a vocabulary property, click on the plus symbol button to the left of the column header. This will open a drawer on the right-hand side of the screen.

![A red arrow points to the plus sign button to the left of the word "title"](../modules/modulesfiles/csvimport_itemsMapButton.png)

The drawer has multiple options for mapping:

**Properties**: Select a property to map the column data to, from any of the installed vocabularies. Use the Filter field to search the available properties for a specific property.

![Properties option open showing all of the installed vocabularies for the Omeka S installation: Dublin Core, Bibliographic Ontology, Friend of a Friend, Scripto and OWL-Time Ontology.](../modules/modulesfiles/csvimport_itemsMapProp.png)

**Item set-specific data** is a checkbox for "Open to additions". Check to allow other users to edit or add to the item set. Leave unchecked to have the item set be editable only by its creator, site admins, and global admins.

![Add mapping drawer showing the section "Item set-specific data". Below the section header is a single, unselected checkbox option labeled "Open to additions".](../modules/modulesfiles/csvimport_itemSetSD.png)

**Generic data** also has a dropdown where you can set one of four options:

- **Resource template (by label)**: Set the template for an item  set by name. The name of the template as entered in the spreadsheet and the name of the template in Omeka S must match exactly.
- **Resource class (by term)**: Set the resource class for an item set. The term for the class in the spreadsheet and in the Omeka S installation must match exactly.
- **Owner (by email address)**: Set an item set's owner by email address. This must be the email address associated with the user's account in the Omeka S installation.
- **Visibility public/private**: Set the visibility of the item set. Use "private" or "public" in the spreadsheet.

![Dropdown as described](../modules/modulesfiles/csvimport_itemsMapgeneric.png)

Be sure to click the "Apply Changes" at the bottom of the drawer or nothing you set here will be kept.

To remove a mapping, click the trash can icon in the row for that data mapping. It will remove *only* the mapping, not the column data.

If you have data in a column in your CSV which you do not want to bring in to your Omeka S installation, simply do not map that column to a property or data type.

#### Column options
To access options for data in a column of your CSV (represented by a row in the import table), click the wrench icon for that column heading.

![A red arrow points to the wrench button to the left of the word "title"](../modules/modulesfiles/csvimport_itemsMapOptions.png)

Column options are in addition to mappings. If you add options without also mapping column data to resource, media, or other data, nothing will be imported.

This will open a drawer on the right side of the browser window with the following options:

- **Use multivalve separator**: Check this box to use the multivalue separator for data in this column. You set the multivalue separator in the initial import page, but you can change it in the Basic Settings tab.  
- **Language**: Set the language for this column using the [IETF Language tag](https://en.wikipedia.org/wiki/IETF_language_tag) for the language in which the text is written. This will override what you have entered in basic settings.
- **Data type**: A dropdown with at least three options, which correspond to the [values](../content/items.md#values) one can use when adding properties to an item:
	- Import as text (default).
	- Import as URL reference. You can set the label for the URI by including the desired text after a space, for example:  `http://example.com This Is The Label`
	- Import as Omeka S resource ID. Note that you must have the correct ID for the resource. A resource's ID is the number sequence at the end of the URL when on the view or edit page, so for `/admin/item/11576` the ID is 11576. You can also see the resource's ID in the right-hand drawer on the resource's view page. Items, item sets, and media all have IDs.
	- If you have certain modules installed, such as Numeric Data Types, there may be additional data type options supplied by those modules.
- **Import values as private**: Check this box to set all property values *in this column* private.

![drawer with options as described above](../modules/modulesfiles/csvimport_ItemSetCol.png)

To remove a column option setting, click the wrench icon again and undo your changes manually.

#### Batch edit
When you select one or more rows in the table (columns from your CSV file), you can use the "Batch edit options" button to apply the column options described above to multiple CSV columns at once.

![a screenshot of the Mapping tab, with the boxes for Columns Title and Creator checked. A red arrow points to the Batch edit options button. On the right side of the screen, a drawer offers options for changing the settings as described](../modules/modulesfiles/csvimport_batchEditItemSet.png)

Be sure to click the "Apply Changes" button at the bottom of the drawer in order to save your changes.

### Item Set import basic settings
These settings apply to the entire CSV which you are importing. Note that some of these settings can be overwritten by column options in the Map to Omeka S data tab.

![options as described below](../modules/modulesfiles/csvimport_ItemSetBasic.png)

- **Resource template**: Select a resource template from the drop-down menu to apply to the imported item sets. You can use the search field at the top of the dropdown to narrow results or find a particular template.
- **Class**: Select a class from the drop-down menu to apply to the imported item sets. You can use the search field at the top of the dropdown to narrow results or find a particular class.
- **Owner**: Set the owner for the item sets by selecting a user from the drop-down menu. You can use the search field at the top of the dropdown to narrow results or find a particular user.
- **Visibility**: Set the visibility of the imported item sets as public or private.
- **Open/closed to additions**: Set whether users other than the owner (and site & global admins) will be able to add or edit the item sets.
- **Multivalue separator**: Enter the multivalue separator character here, if you have used one.
      - The columns of data in your CSV should be separated by commas, however within those columns you can add a special character to create multiple inputs, for example a semicolon.
- **Language**: Set the language of the values in the spreadsheet using the appropriate [IETF Language tag](https://en.wikipedia.org/wiki/IETF_language_tag).

### Item Set import advanced settings

There are two options on this tab which are only for advanced use.

![Advanced settings page showing only the Action dropdown and the field for number of rows to process. ](../modules/modulesfiles/csvimport_ItemSetAdv.png)

#### Action

This setting allows you to change the action of process from a straight import to one of the following options:

- **Create a new resource**: Default option. Each row in the CSV will become a new resource.
- **Append data to the resource**: Add new data to the resource.
- **Revise data of the resource**: Replace existing data in the resource with data from the CSV, except if empty.
- **Update data of the resource**: Replace existing data in the resource with data from the CSV, even when the cell is empty.
- **Replace all data of the resource**: Remove all properties of the resource, and fill with new information from the sheet.
- **Delete the resource**: Delete all matching resources.

If you select one of these options from the dropdown, three additional settings will appear on the tab. These settings help the process determine which resources to take action on.

![Advanced options tab with options as described below](../modules/modulesfiles/csvimport_itemSetAdvAct.png)

- **Resource identifier column**: Select from a dropdown of the columns in your CSV. This is the data from your spreadsheet which maps to existing data in your Omeka S installation.
- **Resource identifier property**: Select from a dropdown of all properties in your Omeka S installation. This should be the property in which you already have data, that you used to create the column data above.
	- Example: if the data in the Resource identifier column is "Title" with the first row of data having a title "A Study in Scarlet," and you set Resource identifier property to "Dublin Core: Title," then the actions will operate on a resource already in your Omeka S installation whose dc:title property is "A Study in Scarlet".
	- This will only work with exact matches.
	- If you have more than one resource with matching data, it will only take action on the oldest resource.
- **Action on unidentified resources**: This option determines what to do when no matching resource exists in the Omeka S installation, but the selected action only applies to an existing resource ("Append", "Revise", "Update", or "Replace"). This option is not used when the main action is "Create" or "Delete" Your options are two radio buttons:
	- Skip the row
	- Create a new resource

#### Other advanced settings
In addition to the above, the Advanced Settings tab has an option to set the number of rows to process by batch. By default this is set to 20. However, if you are running into errors with an import you may want to set it to 5 or even 1 in order to troubleshoot and determine the source of the error.

### Complete import
Once you have completed mappings, column options, and any settings, click the Import button in the upper right corner of the browser window. This should start the import and redirect you to the Past Imports tab. You should see a confirmation message saying "Importing in Job ID [number]".

## Import media
To import media, select "media" under the "Import type" on the first page.

In order to import media, you must have a column in the CSV which will map to item data. Media cannot exist unless associated with an item. Note that if you are running an advanced job, such as an update or replace, then you do not have to have a column with associated item data.

When you click next, the page will load with the following tabs:

### Map to Omeka S data
This tab displays a table with the columns from your spreadsheet as rows. Each row displays:

- a Checkbox
- Column header from the spreadsheet
- A plus symbol button for adding or modifying a mapping
- A wrench symbol button for spreadsheet column options
- A trash can to delete mappings
- A column to show options selected.

![Mappings for a spreadsheet with ten columns. Some of the columns, such as those named Description and Title have automatically been mapped to Dublin Core properties.](../modules/modulesfiles/csvimport_mediaMap1.png)

#### Mapping options

To map a column header to a vocabulary property, click on the plus symbol button to the left of the column header. This will open a drawer on the right-hand side of the screen.

![A red arrow points to the plus sign button to the left of the word "title"](../modules/modulesfiles/csvimport_itemsMapButton.png)

The drawer has multiple options for mapping:

**Properties**: Select a property to map the column data to, from any of the installed vocabularies. Use the Filter field to search the available properties for a specific property.

![Properties option open showing all of the installed vocabularies for the Omeka S installation: Dublin Core, Bibliographic Ontology, Friend of a Friend, Scripto and OWL-Time Ontology.](../modules/modulesfiles/csvimport_itemsMapProp.png)

**Media-specific data** has a dropdown to set the item to which the media should be added. You can either use the item's internal ID, or match with any one of its unique properties (title, description). An item's ID is the number sequence at the end of the URL when on the view or edit page, so for `/admin/item/11576` the ID is 11576. You can also see the item's ID in the right-hand drawer on the item's view page.

![Media-specific data with dropdown](../modules/modulesfiles/csvimport_mediaMapData.png)

**Generic data** also has a dropdown where you can set one of four options:

- **Resource template (by label)**: Set the template for the media by name. The name of the template as entered in the spreadsheet and the name of the template in Omeka S must match exactly.
- **Resource class (by term)**: Set the resource class for the media. The term for the class in the spreadsheet and in the Omeka S installation must match exactly.
- **Owner (by email address)**: Set the media's owner by email address. This must be the email address associated with the user's account in the Omeka S installation.
- **Visibility public/private**: Set the visibility of the media. Use "private" or "public" in the spreadsheet.

![Dropdown as described](../modules/modulesfiles/csvimport_itemsMapgeneric.png)

**Media source**: For the column in your spreadsheet which points to the media you are creating, select which kind of media it is from the dropdown:

- HTML
- IIIF Image (link)
- oEmbed (link)
- URL
- YouTube (link).

![Dropdown as described](../modules/modulesfiles/csvimport_itemsMapMedia.png)

Be sure to click the "Apply Changes" at the bottom of the drawer or nothing you set here will be kept.

To remove a mapping, click the trash can icon in the row for that data mapping. It will remove *only* the mapping, not the column data.

If you have data in a column in your CSV which you do not want to bring in to your Omeka S installation, simply do not map that column to a property or data type.

#### Column options
To access options for data in a column of your CSV (represented by a row in the import table), click the wrench icon for that column heading.

![A red arrow points to the wrench button to the left of the word "title"](../modules/modulesfiles/csvimport_itemsMapOptions.png)

Column options are in addition to mappings. If you add options without also mapping column data to resource, media, or other data, nothing will be imported.

This will open a drawer on the right side of the browser window with the following options:

- **Use multivalve separator**: Check this box to use the multivalue separator for data in this column. You set the multivalue separator in the initial import page, but you can change it in the Basic Settings tab.  
- **Language**: Set the language for this column using the [IETF Language tag](https://en.wikipedia.org/wiki/IETF_language_tag) for the language in which the text is written. This will override what you have entered in basic settings.
- **Data type**: A dropdown with at least three options, which correspond to the [values](../content/items.md#values) one can use when adding properties to an item:
	- Import as text (default).
	- Import as URL reference. You can set the label for the URI by including the desired text after a space, for example:  `http://example.com This Is The Label`.
	- Import as Omeka S resource ID. Note that you must have the correct ID for the resource. A resource's ID is the number sequence at the end of the URL when on the view or edit page, so for `/admin/item/11576` the ID is 11576. You can also see the resource's ID in the right-hand drawer on the resource's view page. Items, item sets, and media all have IDs.
	- If you have certain modules installed, such as Numeric Data Types, there may be additional data type options supplied by those modules.
- **Import values as private**: Check this box to set all property values *in this column* private.

![drawer with options as described above](../modules/modulesfiles/csvimport_mediaColOpt.png)

To remove a column option setting, click the wrench icon again and undo your changes manually.

#### Batch edit
When you select one or more rows in the table (columns from your CSV file), you can use the "Batch edit options" button to apply the column options described above to multiple CSV columns at once.

![a screenshot of the Mapping tab, with the boxes for Columns Title and Creator checked. A red arrow points to the Batch edit options button. On the right side of the screen, a drawer offers options for changing the settings as described](../modules/modulesfiles/csvimport_batchEditMedia.png)

Be sure to click the "Apply Changes" button at the bottom of the drawer in order to save your changes.

### Media import basic settings
These settings apply to the entire CSV which you are importing. Note that some of these settings can be overwritten by column options in the Map to Omeka S data tab.

![options as described below](../modules/modulesfiles/csvimport_mediaBasic.png)

- **Resource template**: Select a resource template from the drop-down menu to apply to the imported media. You can use the search field at the top of the dropdown to narrow results or find a particular template.
- **Class**: Select a class from the drop-down menu to apply to the imported media. You can use the search field at the top of the dropdown to narrow results or find a particular class.
- **Owner**: Set the owner for the media by selecting a user from the drop-down menu. You can use the search field at the top of the dropdown to narrow results or find a particular user.
- **Visibility**: Set the visibility of the imported media as public or private.
- **Multivalue separator**: Enter the multivalue separator character here, if you have used one.
      - The columns of data in your CSV should be separated by commas; however, within those columns you can add a special character to create multiple inputs, for example a semicolon.
- **Language**: Set the language of the values in the spreadsheet using the appropriate [IETF Language tag](https://en.wikipedia.org/wiki/IETF_language_tag).

### Media import advanced settings
There are two options on this tab which are only for advanced use.

![Advanced settings page showing only the Action dropdown and the field for number of rows to process.](../modules/modulesfiles/csvimport_mediaAdv.png)

The Action setting allows you to change the action of process from a straight import to one of the following options:

- **Create a new resource**: Default option. Each row in the CSV will become a new resource.
- **Append data to the resource**: Add new data to the resource.
- **Revise data of the resource**: Replace existing data in the resource with data from the CSV, except if empty.
- **Update data of the resource**: Replace existing data in the resource with data from the CSV, even when the cell is empty.
- **Replace all data of the resource**: Remove all properties of the resource, and fill with new information from the sheet.
- **Delete the resource**: Delete all matching resources.

If you select one of these options from the dropdown, three additional settings will appear on the tab. These settings help the process determine which resources to take action on.

![Options described below](../modules/modulesfiles/csvimport_mediaAdvAct.png)

- **Resource identifier column**: Select from a dropdown of the columns in your CSV. This is the data from your spreadsheet which maps to existing data in your Omeka S installation.
- **Resource identifier property**: Select from a dropdown of all properties in your Omeka S installation. This should be the property in which you already have data, that you used to create the column data above.
	- Example: if the data in the Resource identifier column is "Title" with the first row of data having a title "A Study in Scarlet," and you set Resource identifier property to "Dublin Core: Title," then the actions will operate on a resource already in your Omeka S installation whose `dc:title` property is "A Study in Scarlet".
	- This will only work with exact matches.
	- If you have more than one resource with matching data, it will only take action on the oldest resource.
- **Action on unidentified resources**: This option determines what to do when no matching resource exists in the Omeka S installation, but the selected action only applies to an existing resource ("Append", "Revise", "Update", or "Replace"). This option is not used when the main action is "Create" or "Delete" Your options are two radio buttons:
	- Skip the row
	- Create a new resource.

In addition to the above, the Advanced Settings tab has an option to set the number of rows to process by batch. By default, this is set to 20. However, if you are running into errors with an import you may want to set it to 5 or even 1 in order to troubleshoot and determine the source of the error.

### Complete import
Once you have completed mappings, column options, and any settings, click the Import button in the upper right corner of the browser window. This should start the import and redirect you to the Past Imports tab. You should see a confirmation message saying "Importing in Job ID [number]".

## Mixed resource import
This resource option allows you to import a sheet with a mix of resource types: items, item sets, and media.

### Map to Omeka S data
This tab displays an initial dropdown above a table with the columns from your spreadsheet as rows. Each row displays:

- a Checkbox
- Column header from the spreadsheet
- A plus symbol button for adding or modifying a mapping
- A wrench symbol button for spreadsheet column options
- A trash can to delete mappings
- A column to show options selected.

![Mappings for a spreadsheet with nine columns.](../modules/modulesfiles/csvimport_mixedR1.png)

The dropdown above the table is where you set which column in the CSV file indicates whether the data in that row is an item, item set, or media. You do not need to map this data in the table on this tab. Values in this column can be `item` or `items`, `item set` or `itemset` or `itemsets` or `item sets`, or `media`. Other values, or empty fields, will lead to the row not being imported.

Rows with `media` in the resource type column need to indicate which item they are to be attached to, as in the [Media section above](#import-media), and require a media source to be included.

#### Mapping options

To map a column header to a vocabulary property, click on the plus symbol button to the left of the column header. This will open a drawer on the right-hand side of the screen.

![A red arrow points to the plus sign button to the left of the word "title"](../modules/modulesfiles/csvimport_itemsMapButton.png)

The drawer has multiple options for mapping:

**Properties** select a property to map the column data to, from any of the installed vocabularies. Use the Filter field to search the available properties for a specific property.
![Properties option open showing all of the installed vocabularies for the Omeka S installation: Dublin Core, Bibliographic Ontology, Friend of a Friend, Scripto and OWL-Time Ontology.](../modules/modulesfiles/csvimport_itemsMapProp.png)

**Item-specific data** has a dropdown to set Item Set by selected property. If you have a column with data for an Item Set to which you want to add the item, you can set how it maps using this dropdown. You can either use the Item Set's internal ID, or any one of its properties (title, description).

![dropdown as described](../modules/modulesfiles/csvimport_itemsMapISD.png)

**Item set-specific data** is a checkbox for "Open to additions." Check to allow other users to edit or add to the item set. Leave unchecked to have the item set be editable only by its creator, site admins, and global admins.

![Add mapping drawer showing the section "Item set-specific data". Below the section header is a single, unselected checkbox option labeled "Open to additions".](../modules/modulesfiles/csvimport_itemSetSD.png)

**Media-specific data** has a dropdown to set the item to which the media should be added. You can either use the item's internal ID, or any one of its properties (title, description). An item's ID is the number sequence at the end of the URL when on the view or edit page, so for `/admin/item/11576` the ID is 11576. You can also see the item's ID in the right-hand drawer on the item's view page.

![Media-specific data with dropdown](../modules/modulesfiles/csvimport_mediaMapData.png)

**Generic data** has a dropdown where you can set one of four options:

- **Resource template (by label)**: Set the template for the media by name. The name of the template as entered in the spreadsheet and the name of the template in Omeka S must match exactly.
- **Resource class (by term)**: Set the resource class for the media. The term for the class in the spreadsheet and in the Omeka S installation must match exactly.
- **Owner (by email address)**: Set the media's owner by email address. This must be the email address associated with the user's account in the Omeka S installation.
- **Visibility public/private**: Set the visibility of the media. Use "private" or "public" in the spreadsheet.

![Dropdown as described](../modules/modulesfiles/csvimport_itemsMapgeneric.png)

**Media source** For the columns in your spreadsheet that point to the media, select for each column from the dropdown:

- HTML
- IIIF Image (link)
- oEmbed (link)
- URL
- YouTube (link).

![Dropdown as described](../modules/modulesfiles/csvimport_itemsMapMedia.png)

Be sure to click the "Apply Changes" at the bottom of the drawer or nothing you set here will be kept.

To remove a mapping, click the trash can icon in the row for that data mapping. It will remove *only* the mapping, not the column data.

If you have data in a column in your CSV that you do not want to bring in to your Omeka S installation, simply do not map that column to a property or data type.

#### Column options
To access options for data in a column of your CSV (represented by a row in the import table), click the wrench icon for that column heading.

![A red arrow points to the wrench button to the left of the word "title"](../modules/modulesfiles/csvimport_itemsMapOptions.png)

Column options are in addition to mappings. If you add options without also mapping column data to resource, media, or other data, nothing will be imported.

This will open a drawer on the right side of the browser window with the following options:

- **Use multivalue separator**: Check this box to use the multivalue separator for data in this column. You set the multivalue separator character in the initial import page, but you can change it in the Basic Settings tab.
- **Language**: Set the language for this column using the [IETF Language tag](https://en.wikipedia.org/wiki/IETF_language_tag) for the language in which the text is written. This will override what you have entered in basic settings.
- **Data type**: A dropdown with at least three options, which correspond to the [values](../content/items.md#values) one can use when adding properties to an item:
	- Import as text (default).
	- Import as URL reference. You can set the label for the URI by including the desired text after a space, for example: `http://example.com This Is The Label`.
	- Import as Omeka S resource ID. Note that you must have the correct ID for the resource. A resource's ID is the number sequence at the end of the URL when on the view or edit page, so for `/admin/item/11576` the ID is 11576. You can also see the resource's ID in the right-hand drawer on the resource's view page. Items, item sets, and media all have IDs.
	- If you have certain modules installed, such as Numeric Data Types, there may be additional data type options supplied by those modules.
- **Import values as private**: Check this box to set all property values *in this column* private.

![drawer with options as described above](../modules/modulesfiles/csvimport_mixedR2.png)

To remove a column option setting, click the wrench icon again and undo your changes manually.

#### Batch edit
When you select one or more rows in the table (columns from your CSV file), you can use the "Batch edit options" button to apply the column options described above to multiple CSV columns at once.

![a screenshot of the Mapping tab, with the boxes for Columns Title and Creator checked. A red arrow points to the Batch edit options button. On the right side of the screen, a drawer offers options for changing the settings as described](../modules/modulesfiles/csvimport_batchEditMixed.png)

Be sure to click the "Apply Changes" button at the bottom of the drawer in order to save your changes.

### Mixed resources import basic settings
These settings apply to the entire CSV you are importing. Note that some of these settings can be overwritten by column options in the Map to Omeka S data tab.

![options as described below](../modules/modulesfiles/csvimport_mixedRBasic.png)

- **Resource template**: Select a resource template from the drop-down menu to apply to the imported item sets. You can use the search field at the top of the dropdown to narrow results or find a particular template.
- **Class**: Select a class from the drop-down menu to apply to the imported item sets. You can use the search field at the top of the dropdown to narrow results or find a particular class.
- **Owner**: Set the owner for the item sets by selecting a user from the drop-down menu. You can use the search field at the top of the dropdown to narrow results or find a particular user.
- **Visibility**: Set the visibility of the imported item sets as public  or private.
- **Item sets open/closed to additions**: Set whether users other than the owner (and site & global admins) will be able to add or edit the item sets.
- **Item set for items**: Select from a dropdown of existing item sets.
- **Sites for items**: Select one or more of your existing sites to add new items as resources.
- **Multivalue separator**: Enter the multivalue separator character here, if you have used one.
      - The columns of data in your CSV should be separated by commas, however within those columns you can add a special character to create multiple inputs, for example a semicolon.
- **Language**: Set the language of the values in the spreadsheet using the appropriate [IETF Language tag](https://en.wikipedia.org/wiki/IETF_language_tag).

### Mixed resources import advanced settings
There are two options on this tab which are only for advanced use.

![Advanced settings page showing only the Action dropdown and the field for number of rows to process. ](../modules/modulesfiles/csvimport_mixedRAdv.png)

The Action setting allows you to change the action of process from a straight import to one of the following options:

- **Create a new resource**: Default option. Each row in the CSV will become a new resource.
- **Append data to the resource**: Add new data to the resource.
- **Revise data of the resource**: Replace existing data in the resource with data from the CSV, except if empty.
- **Update data of the resource**: Replace existing data in the resource with data from the CSV, even when the cell is empty.
- **Replace all data of the resource**: Remove all properties of the resource, and fill with new information from the sheet.
- **Delete the resource**: Delete all matching resources

If you select one of these options from the dropdown, three additional settings will appear on the tab. These settings help the process determine which resources to take action on.

![Options described below](../modules/modulesfiles/csvimport_mixedRAdvAct.png)

- **Resource identifier column**: Select from a dropdown of the columns in your CSV. This is the data from your spreadsheet which maps to existing data in your Omeka S installation.
- **Resource identifier property**: Select from a dropdown of all properties in your Omeka S installation. This should be the property in which you already have data, that you used to create the column data above.
	- Example: if the data in the Resource identifier column is "Title" with the first row of data having a title "A Study in Scarlet," and you set Resource identifier property to "Dublin Core: Title," then the actions will operate on a resource already in your Omeka S installation whose dc:title property is "A Study in Scarlet".
	- This will only work with exact matches.
	- If you have more than one resource with matching data, it will only take action on the oldest resource.
- **Action on unidentified resources**: This option determines what to do when no matching resource exists in the Omeka S installation, but the selected action only applies to an existing resource ("Append", "Revise", "Update", or "Replace"). This option is not used when the main action is "Create" or "Delete" Your options are two radio buttons:
	- Skip the row
	- Create a new resource.

In addition to the above, the Advanced Settings tab has an option to set the number of rows to process by batch. By default this is set to 20. However, if you are running into errors with an import you may want to set it to 5 or even 1 in order to troubleshoot and determine the source of the error.

### Complete import
Once you have completed mappings, column options, and any settings, click the Import button in the upper right corner of the browser window. This should start the import and redirect you to the Past Imports tab. You should see a confirmation message saying "Importing in Job ID [number]".

## Import users
When importing users, you can only bring in data related to the user table in Omeka S: the user's email, display name, and role. Any additional data in your CSV will not be imported. None of these can be multivalue properties.

This tab displays an initial dropdown above a table with the columns from your spreadsheet as rows. Each row displays:

- A checkbox
- A column header from the spreadsheet
- A plus symbol button for adding or modifying a mapping
- A trash can to delete mappings
- A column to show options selected.

![Table as described above, with rows for User, email, and role.](../modules/modulesfiles/csvimport_users.png)

To map a column header to user information, click on the plus symbol button to the left of the column header. This will open a drawer on the right-hand side of the screen.

![A red arrow points to the plus sign button to the left of the word "title"](../modules/modulesfiles/csvimport_usersMapButton.png)

The drawer has a dropdown for Users info, with three options:

- **Email**: The email address for the user
- **Display name**: The user's display name
- **Role**: The user's [role](../admin/users.md#roles-and-permissions).

Role values to use in this import are as follows:

- `global_admin`
- `site_admin`
- `editor`
- `reviewer`
- `author`
- `researcher`.

![The same table as above, now with the mapping drawer open and the dropdown activated to show the three options.](../modules/modulesfiles/csvimport_usersMap.png)

Once you have completed the mappings, click the "Import" button.

!!! note
	Users will not be notified via email when an account is created for them using CSV Import. Normally, when you create an account manually, the email address is sent a notification including a link to set their password. Currently, CSV Import does not send those emails and so users cannot set their own passwords. Site administrators must set passwords and then share them manually once users are created via CSV Import.

## Manage past imports

To review past imports, click on the CSV Import module and select the "Past Imports" tab.

![CSV Import subtab options on left hand nav](../modules/modulesfiles/csvimport_pastimportsnav.png)

This will display a table with the following columns:

- An **Undo** Checkbox
- **Date** of import
- **Action** of the import (create, append, revise, update, replace, or delete).
	- Beneath the action description there are links to the job details and job log.
- **Comment** entered on import or indicating an error
- **Result** the items updated, added, or deleted
- **Status** of import
- Import **Owner**.

![CSV Import past imports table](../modules/modulesfiles/csvimport_pastimports.png)

To see the details of an import, click the "Job details" link below the action description. To review logs, particularly in cases where an error occurred, click the "Log" link below the action description.

## Undo an import

To undo an import, click on the CSV Import module and select the "Past Imports" page.

Check the "Undo" box in the row of the import which you want to undo, and click "Submit".

![a red arrow points to a checked Undo box on the Past Imports page](../modules/modulesfiles/csvimport_undo.png)

Depending on the size of the import, it may take some time to undo. On complete, the status of the import on the "Past Imports" table will say "Undone" followed by the date the import was reversed.

## Troubleshooting
The following are known errors that can occur during an import:  

- **Encoding**: CSVs for import must be UTF-8 encoded.
- Are your jobs starting and not completing? You might need to [set the path for PHP](../configuration.md#php-path) so that your system can perform the background process to make the items.

## Integration with other modules
Some other modules add functionality to the CSV import process. If you have these modules installed and active, you will have access to the following options when using CSV Import.

### Mapping
If you have [Mapping](mapping) (minimum version 1.1.0) installed and active, you will have two additional options in the "Map to Omeka S data" tab when importing Items. Note that these options do not appear for any other import type, including Mixed Resources.

![Add mapping drawer with additional options for "Resource location" and "default map view"](../modules/modulesfiles/csvimport_mapping1.png)

**Resource location** sets the location for the resource. Your column for this option can include one of the following forms of data:

- **Latitude** must be written as a single number ("23.43", not "23° 26′").
- **Longitude** must be written as a decimal fraction using negative and positive to indicate west or east ("−91" rather than "91°W").
- **Latitude/longitude** must be inputted as numbers separated by a slash (`52.19/-1.71`).

![dropdown with the options described above](../modules/modulesfiles/csvimport_mapping2.png)

**Default map view** sets the default map view for the item to which you are adding Mapping information.

- **Map center latitude** must be written as a single number ("23.43", not "23° 26′").
- **Map center longitude** must be written as a decimal fraction using negative and positive to indicate west or east ("−91" rather than "91°W").
- **Default zoom** must be a number between 1 (most zoomed out) and 18 (most zoomed in).

### File Sideload
If you have [File Sideload](filesideload) (minimum version 1.2.0) installed and active, you can use it as a source for media when running a CSV import.

Everything on the **Map to Omeka S data** tab will be the same. When you add a mapping and choose the "Media source" option, you will see that there is now an option for "Sideload".

![Dropdown menu for media source, with Sideload highlighted in blue](../modules/modulesfiles/csvimport_sideload.png).

For the data in this column, you need to include the full file name, including extension. So, for example, if you want to import a JPG file named "Jekyll_and_Hyde_Title", then the data in the media column of the CSV you are importing should be `Jekyll_and_Hyde_Title.jpg`.

### Numeric Data Types
If you have [Numeric Data Types](numericdatatypes) installed and active, it will add the option to set a column data type as numeric data.

Options are:

- Date/Time (ISO 8601)
- Interval (ISO 8601)
- Duration (ISO 8601)
- Integer.

![Column options drawer with the data type dropdown open, showing options for numeric data types as well as the standard options](../modules/modulesfiles/csvimport-numericdata.png)

When importing data as numeric, it must be formatted precisely. Always check to be sure your data has imported correctly into the format of your choice; CSV Import will leave values empty if the formatting isn't recognized. 

Use the following formats for importing [dates](https://en.wikipedia.org/wiki/ISO_8601#Dates), including dashes between values:

- `2022`
- `2022-08` (year and month, no date)
- `2022-08-18`.

Use the following formats to add [times](https://en.wikipedia.org/wiki/ISO_8601#Times) to your date values:

- `2022-08-18T17:26:49+00:00` ([time offset from UTC](https://en.wikipedia.org/wiki/ISO_8601#Time_offsets_from_UTC))
- `2022-08-18T17:26:49Z` ([coordinated universal time](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC))). 

You cannot omit the year while providing a month and/or day. You cannot supply ordinal dates (as in, `2000-175` for the 175th day of the year 2000). 

Use the following formats for importing [intervals](https://en.wikipedia.org/wiki/ISO_8601#Time_intervals) either as start and end points, or with one time point and a duration:

- `2007-03-01T13:00:00Z/2008-05-11T15:30:00Z` (Start and end)
- `2007-03-01T13:00:00Z/P1Y2M10DT2H30M` (Start time/date and duration)
- `P1Y2M10DT2H30M/2008-05-11T15:30:00Z` (Duration and end time/date).

Use the following formats for importing [durations](https://en.wikipedia.org/wiki/ISO_8601#Durations), expressed as number of years, number of months, number of days, etc.:

- `P23DT23H` (23 days & 23 hours)
- `P3Y6M4DT12H30M5S` (3 years, 6 months, 4 days, 12 hours, 30 minutes, & 5 seconds).


### Custom Vocab
If you have [Custom Vocab](customvocab) installed and active, it will add your custom vocabularies as data types in Omeka. You can select these data types during your CSV Import. 
