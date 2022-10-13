# Data Repository Connector

The [Data Repository Connector module](../modules/datarepositoryconnector.md) allows users to import records and/or data files from several different data repository platforms: Dataverse, Zenodo, and CKAN.

To install Data Repository Connector, follow the instructions for [Installing Modules](../modules/index.md#installing-modules) on the Modules documentation.

## Import data

To use the Data Repository Connector, navigate to the tab labelled Data Repository Connector on the left-hand navigation of the admin dashboard. Then, you will have the option to select Dataverse, Zenodo, or CKAN.

![Navigation showing Data Repository Connector options](../modules/modulesfiles/datarepoconnect_tabs.png)

### Shared options

Regardless of the service you have selected, you will be provided with the following options:

+ **Limit**: The maximum number of results to retrieve at once. If you notice errors or missing data, try lowering this number. Increasing it might make imports faster. (This field is required.)
+ **Import files into Omeka S**: If checked, all data files associated with a record will be imported into Omeka S.
+ **Comment**: A note about the purpose or source of this import.
+ **Item sets**: The items sets to import items into.
+ **Sites**: The sites to import items into.

![The fields for configuring options](../modules/modulesfiles/datarepoconnect_options.png)

Once you have filled out these fields as well as those specific to the option you have selected, be sure to click "Submit".

### Dataverse

If you select Dataverse, you will see a screen with the following options:

+ **Main Dataverse URL**: The URL of the main Dataverse site. (This field is required.)
+ **Dataverse Identifier**: The identifier of the Dataverse to import from. If blank, all datasets under **Main Dataverse URL** will be imported.
+ **Metadata format**: The metadata format to export from Dataverse. The options for Dataverse are "dcterms", "oai_dc", and "schema.org". The format must exist as a vocabulary in your Omeka instance before import. (This field is required.)

### Zenodo

If you select Zenodo, you should see a screen with the following options:

+ **Zenodo Community ID**: The short string identifying which Zenodo community to import from. Found in the URL after "https://zenodo.org/communities/" and before any search parameters. (This field is required.)
+ **Metadata Format**: The metadata format to export from Zenodo. The option for Zenodo is "oai_dc". The format must exist as a vocabulary in your Omeka instance before import.

### CKAN

If you select CKAN, you should see a screen with the following options:

+ **Main CKAN URL**: The URL of the main Dataverse site. (This field is required.)
+ **CKAN Organization**: The identifier of the CKAN organization to import from. If blank, all datasets under **Main CKAN URL** will be imported.

### Checking import status

After you have hit "Submit", you can track the status of the import by navigating to the Data Repository Connector > Past Imports tab or the Jobs tab of the left-hand navigation on the admin dashboard.

!!! note
	Are your jobs starting and not completing? You might need to set the path for PHP so that your system can perform the background process to make the items.

## Review imports

Click on Data Repository Connector on the left-hand navigation of the admin dashboard, and then click on Past Imports, which should appear below the Data Repository Connector tab.

This page displays a table of Past Imports, with a checkbox option to Undo, the Job ID for the import, any Comments made during import, the number of Items imported, the Date of the import, the import Status, and the Ownerwho initiated the import.

![The screen showing past imports from the Data Repository connector](../modules/modulesfiles/datarepoconnect_pastimports.png)

## Update imported resources

To update resources created using the Data Repository Connector, simply re-run an import from the same source. The resources will be updated, not re-imported. This allows you to use the Connector to sync data between your Data Repository and Omeka S installations.

## Undo an import

To undo a completed import and remove all associated items, go to the Data Repository Connector tab on the left-hand navigation of the admin dashboard, click on Data Repository Connector and then click on Past Imports, which should appear below the Data Repository Connector tab.

Check the box for each import you wish to undo and click "Submit".
