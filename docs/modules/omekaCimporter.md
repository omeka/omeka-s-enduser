# Omeka Classic Importer

The [Omeka Classic Importer module](https://omeka.org/s/modules/Omeka2Importer){target=_blank} (a.k.a. the Omeka 2 Importer) enables you to import items and collections from an Omeka Classic 2.x site into an Omeka S installation. The source site needs to be Classic 2 or greater in order to offer an API endpoint for this module to use. 

Once installed, the Omeka 2 Importer module should appear toward the bottom of the left navigation menu on the main admin dashboard. When selected, there are sub-menu items for *Import* and *Past Imports*. 

![Omeka Classic Importer menu options Import and Past Imports](../modules/modulesfiles/o2i_menu.png)

!!! note
	- The module only imports Dublin Core metadata, Item Type metadata, files, and collections (item sets). It *will not* import tags,  Geolocation data, Simple Page content, or Exhibit Builder content.
	- Because resource properties in Omeka S do not have HTML formatting, any HTML in your Omeka Classic item properties (links, text formatting, etc.) will be stripped during the import process.

## Import

From the Import tab you can start new imports. 

**Note** You must have the API enabled on the source Omeka Classic installation for the importer to work.

### Enter the API
On the first page of the importer, enter the **Omeka 2 Api Endpoint** - the site URL for the API you wish to access (it should end with "api"). Make sure you enter the full URL, beginning with "http", otherwise the importer will not be able to access the items at that site. Click "Next".

![API import field](../modules/modulesfiles/o2i_enterapi.png)

If you have entered a valid API endpoint, the next page will load with no issue. If you have entered an invalid endpoint, the module will display error messages "Warning: Invalid argument".

### Import settings and map metadata
On the second page of the importer there are three tabs: **Basic Import Settings**, **Map to Omeka S Properties**, and **Map to Omeka S Classes**. 

Clicking the "Start Over" button will take you back to the first page, where you can enter an API endpoint.

#### Basic Import Settings
* **Omeka 2 Api key**: This field can either be blank or filled, depending on whether you have an API key for the site you are attempting to import data from.  
* **Comment**: You can add a comment such as “Jane Doe’s API, no key” to help identify the specific import when viewing past imports.  
* **Import into**: This option allows you to select the item set(s) to import the items into. Note that you can only import into item sets you own.
* **Per Page**: Enter a number to limit the number of records retrieved per request. Useful for sites which may have a large number of items.
* **Update a previous import**: To update - and overwrite - a previous import from the same source.
* **Import Collections**: To import the collections from the Omeka 2 site to the Omeka S site, as item sets.

![Basic options for importing Omeka2](../modules/modulesfiles/o2i_basic.png)

#### Map to Omeka S Properties
This tab features a table for mapping between Omeka Classic elements and Omeka S properties. 

The Import module will automatically map many properties, but you may want to review the mapping in case you need to add or edit the automatic mapping. 

Custom item type elements may need to be mapped manually. 

To clear the default mapping, click the "Clear Defaults" button. 

The columns of the table are **Omeka 2 element**, **Mapped properties**, and a checkbox option to **Import as HTML media**. 

![Map Omeka properties](../modules/modulesfiles/o2i_mapprop.png)

The first set of the table is Dublin Core, followed by Item Type Metadata. The import will also bring in any legacy or additional element sets (for example, Omeka Legacy File).

To map:

1. Select the element or item type in the table by clicking on its row or label.
1. In the right-hand drawer, either click through or search for the S property to which you want to map your Classic element. 
1. Click on the property in the drawer to map it. 

![Mapping the element Date of Birth to the FOAF property “birthday”, showing the mapped relationship.](../modules/modulesfiles/o2i_mapping.png)

To remove a mapping, click the trash can icon in the element/property row.

#### Map to Omeka S Classes
In this tab you can map Omeka Classic Item Types to Omeka S Resource Classes. You can select from the classes for any of the installed vocabularies.  

To map:

1. Select the item type in the table by clicking on its row or label.
1. In the right-hand drawer, either click through or search for the resource class to which you want to map your element. 
1. Click on the resource class in the drawer to map it.

![Inactive classes mapping tab](../modules/modulesfiles/o2i_mapclass.png)

### Complete import
When you have finished customizing the mapping, click the "Import" button in the upper right corner of the window.

!!! note
	Are your jobs starting and not completing? You might need to [set the path for PHP](../configuration.md) so that your system can perform the background process to make the items.

## Past imports

The past imports section of the module allows you to view previous API imports.

Each import is a row. The table has the following columns:

* **Undo**: Check this box if you wish to undo the import. Once you click Submit, the status for that specific import will change to "undone".    
* **Job ID**: A numerical value assigned to each specific API import. You can also view the job under the [Jobs tab on the administrative dashboard](../admin/jobs.md).  
* **Comment**: If you entered a comment when setting up the import, that comment will appear here.
* **Items**: Lists the number of items added and updated with each import.   
* **Date**: The date on which the import took place.   
* **Status**: Will be "in_progress", "completed", or "undone".  
* **Owner**: The user who requested the import.

![Table of past imports showing header row and one row of a past import.](../modules/modulesfiles/o2i_past.png)
