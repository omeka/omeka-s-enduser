---
title: CSV Import
---
The CSV Import module allows you to import items or users into your Omeka S install from a csv (comma separated values), tsv (tab-separated values) or odf (open document format) file. 

Please note that an import must have a specific import type. 

## Preparing your CSV file

Most spreadsheet editors (including Microsoft Excel, Google Sheets, and Apple Numbers) can export to csv format. CSV files for import must be encoded in UTF-8, so when exporting or saving a new document, be sure to check that the encoding is UTF-8.

If the spreadsheet is already created, take a moment to think about which columns you want to match to which vocabulary properties. 

*Note* Your csv file *must have a header row* in order for the module to process it correctly.

If you have multiple inputs for a single property, you can separate them with a secondary *multivalue separator*. For example, a work with multiple authors (E.B. White and William Strunk Jr.) with the column for Creator containing "E.B. White; William Strunk Jr" has a semicolon (;) as the multivalue separator. When imported into Omeka S, each of these would appear as a separate entry in the property (Creator: E.B. White and Creator: William Strunk Jr.)

### Automapping 
The module will automatically automap column headers if they conform to the property terms of your installation's [vocabularies](../content/vocabularies.md). For example, a CSV file with a column header "dcterms:title" would automap to the Dublin Core Title property when the CSV is loaded for mapping.

To find the terms you should use for your column headers, go to the Vocabularies tab from the admin dashboard. Click on the number of properties for the vocabulary you want to use (Dublin Core in the image below)

![Red arrow points to the properties link for Dublin Core](../modules/modulesfiles/csv_automap1.png)

In the table of vocabulary properties, there is a column for *Term*. Use the Term for the property you want to automap in the CSV Import. For example, "dcterms:abstract" would automap to the Dublin Core property "Absract" and "foaf:firstName" would automap to the Friend of a Friend property "firstName"

![arrow points to the Term column for Dublin Core properties.](../modules/modulesfiles/csv_automap2.png)

In addition, there is a setting in the inital import settings to automap with simple labels - this will work with columns whose names match a vocabulary label, for example "Title" or "date". Note that this option defaults to Dublin Core before proceeding through other installed vocabularies. 

## Initial Import Settings

Start an import by clicking on the CSV Importer tab on the left-hand navigation. This will open the initial Import Settings page. 

![A red arrow points to CSV Importer in the navigation](../modules/modulesfiles/csvimport_nav.png)

- For the Spreadsheet option, use the *Choose File* button to select the file from your computer. 
- From the *CSV Column delimiter* dropdown, choose from the following options (this should match the formatting of your file)
	- comma (default)
	- semi-colon
	- colon
	- tabulation
	- carriage return
	- space
	- pipe

- From the *CSV column enclosure* dropdown, choose the option which encloses long text in your file:
	- double quote (default)
	- quote
	- hash

- From the *Import Type* dropdown, select what you are importing:
	- Item Sets
	- Items
	- Media (must relate to already existing Items)
	- Mixed resources (spreadsheet can inlcude Item Sets, Items, and Media)
	- Users

- Check the box to *Automap with simple labels.* This will automap not only specially formatted column headings but also column headings which match existing vocabulary property labels. Note that this option defaults to Dublin Core before proceeding through other installed vocabularies. 

- Comments are useful as they appear on the "Past Imports" page; make a note about what is being imported and any settings you may have on this page. 

![Import settings as described, no entries](../modules/modulesfiles/csvimport_settings.png)

Click the *next* button to continue with the import process. 

## Import Items
To import items, select "Items" under the "Import type" on the first page.

When you click next, the page will load with the following tabs:

### Map to Omeka S data
This tab displays a table with the columns from your spreadsheet as rows. Each row displays:

- a Checkbox
- Column header from the spreadsheet
- A plus symbol button for adding or modifying a mapping
- A wrench symbol button for spreadsheet column options
- A trash can to delete mappings
- A column to show options selected

![Mappings for a spreadsheet with ten columns. Some of the columns, such as those named Description and Title have automatically been mapped to Dublin Core properties.](../modules/modulesfiles/csvimport_itemsMap1.png)

#### Mapping options

To map a column header to a vocabulary property, click on the plus symbol button to the left of the column header. This will open a drawer on the right-hand side of the screen. 

[A red arrow points to the plus sign button to the left of the word "title"](../modules/modulesfiles/csvimport_itemsMapButton.png)

The drawer has multiple options for mapping:

**Resource data** has a dropdown to set Item Set by selected property. If you have a column with data for an Item Set to which you want to add the item, you can set how it maps using this dropdown. You can either use the Item Set's internal ID, or any one of its properties (title, description).

![dropdown as described](../modules/modulesfiles/csvimport_itemsMapRD.png)

**Generic data** also has a dropdown where you can set one of four options:

- *Resource template (by label):* set the template for an item by name. The name of the template as entered in the spreadsheet and the name of the template in Omeka S must match exactly.
- *Resource class (by term):* set the resource class for an item. The term for the class in the spreadsheet and in the Omeka S installation must match exactly.
- *Owner (by email address):* set an item's owner by email address. This must be the email address associated with the user's account in the Omeka S installation.
- *Visibility public/private:* set the visibility of the item. Use "private" or "public" in the spreadsheet. 

![Dropdown as described](../modules/modulesfiles/csvimport_itemsMapgeneric.png)

**Properties** select a property to map the column data to, from any of the installed vocabularies. Use the Filter field to search the available properties for a specific property.

**Media source** If the column in your spreadsheet is a media source, select which kind from the dropdown: 

- HTML
- IIIF Image (link)
- oEmbed (link)
- URL
- YouTube (link)

![Dropdown as described](../modules/modulesfiles/csvimport_itemsMapMedia.png)

Be sure to click the "Apply Changes" at the bottom of the drawer or nothing you set here will be kept.

To remove a mapping, click the trash can icon in the row for that data mapping. It will remove *only* the mapping, not the column data. 

If you have data in a column in your CSV which you do not want to bring in to your Omeka S installation, simply do not map that column to a property or data type.

#### Column options
To access options for data in a column of your csv (represented by a row in the import table), click the wrench icon for that column heading. 

[A red arrow points to the wrenchn button to the left of the word "title"](../modules/modulesfiles/csvimport_itemsMapOptions.png)

Column options are in addition to mappings. If you add options without also mapping column data to resource, media, or other data, nothing will be imported. 

This will open a drawer on the right side of the browser window with the following options: 

- **Use multivalve separator:** check this box to use the multivalue separator for data in this column. You set the multivalue separator in the initial import page, but you can change it in the Basic Settings tab.  
- **Language:** is a field where you can set the language for this column using the [ISO 639-1 code](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) for the language in which the text is written. This will override what you have entered in basic settings. 
- **Data type:** is a dropdown with three options, which correspond to the [values](../content/items/#values one can use when adding properties to an item:
	- Import as text (default);
	- Import as URL reference;
	- Import as Omeka S resource ID. Note that you must have the correct ID for the resource. A resources' ID is the number sequence at the end of the url when on the view or edit page, so for `/admin/item/11576` the ID is 11576

![drawer with options as described above](../modules/modulesfiles/csvimport_ItemColOpt.png)

To remove a column option setting, click the wrench icon again and undo your changes manually.

### Item import Basic Settings
These settings apply to the entire csv which you are importing. Note that some of these settings can be overwritten by column options in the Map to Omeka S data tab. 

![options as described below](../modules/modulesfiles/csvimport_ItemsBasic.png)

- **Resource Template:** select a resource template from the drop-down menu to apply to the imported items. You can use the search field at the top of the dropdown to narrow results or find a particular template.
- **Class:** select a class from the drop-down menu to apply to the imported items. You can use the search field at the top of the dropdown to narrow results or find a particular class.
- **Owner:** set the owner for the Items by selecting a user from the drop-down menu. You can use the search field at the top of the dropdown to narrow results or find a particular user.
- **Visibility:** set the visibility of the imported items as public  or private. 
- **Item Sets:** add the imported items to a specific item set or sets using the dropdown menu.
- **Multivalue Separator:** enter the multivalue separator character here, if you have used one. 
      - The columns of data in your CSV should be separated by commas, however within those columns you can add a special character to create multiple inputs, for example a semicolon.
- **Language:** set the language of the values in the spreadsheet using the appropriate [ISO 639-1 code](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes).

### Item import Advanced Settings

There are two options on this tab which are only for advanced use. 

![options as described below](../modules/modulesfiles/csvimport_ItemsAdvanced.png)

#### Action
This setting allows you to change the action of process from a straight import to one of the following options:

- **Create a new resource:** default option. Each row in the CSV will become a new resource
- **Append data to the resource:** add new data to complete the resource;
- **Revise data of the resource:** replace existing data to the resource by the ones set in each cell, except if empty (don’t modify data that are not provided, except default values);
- **Update data of the resource:** replace existing data to the resource by the ones set in each cell, even empty (don’t modify data that are not provided, except default values);
- **Replace all data of the resource:** remove all properties of the resource, and fill new ones from the data.
- **Delete the resource.**

If you select one of these options from the dropdown, three additional settings will appear on the 

