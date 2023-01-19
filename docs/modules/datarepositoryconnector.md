# Data Repository Connector

The [Data Repository Connector module](https://omeka.org/s/modules/DataRepositoryConnector/){target=_blank} allows users to import records and/or data files from several different data repository platforms: Dataverse, Zenodo, Invenio, and CKAN. Once imported, these items can be updated at any time by re-running the original import from the Past Imports page.

The Data Repository Connector adds an entry in the left-hand Modules menu. When you click on the name of the module or the plus-sign icon to the left, the menu will expand to display links for the four import options. The module opens the Past Imports page by default.

![Navigation menu showing Data Repository Connector options](../modules/modulesfiles/datarepoconnect_tabs.png)

This module is available to users at the Global Admin and Supervisor levels.

## Import data

### Shared options

Regardless of the service you have selected, you will be provided with the following options:

+ **Limit**: The maximum number of results to retrieve in a single batch. If you notice errors or missing data, try lowering this number. Increasing it might make imports faster. (This field is required. Default is 100.)
+ **Import files into Omeka S**: If checked, all data files associated with a record will be imported into Omeka S. If not, no files will be included in the import.
+ **Comment**: A note about the purpose or source of this import. This will appear on the Past Imports page and can be helpful to track your progress.
+ **Item sets**: The items sets to import items into.
+ **Sites**: The sites to import items into. You may see a default site appear here.

![The Dataverse import screen showing the options listed above.](../modules/modulesfiles/datarepoconnect_options.png)

Once you have filled out these fields as well as those specific to the option you have selected, click "Submit".

### Dataverse

If you select Dataverse, you will see a screen with the following options:

+ **Main Dataverse URL**: The URL of the main Dataverse site. (This field is required.)
+ **Dataverse Identifier**: The identifier of the Dataverse to import from. If blank, all datasets under the **Main Dataverse URL** will be imported, which could be large.
+ **Metadata format**: The metadata format to export from Dataverse. The options for Dataverse are "dcterms", "oai_dc", and "schema.org". The format must exist as a [vocabulary](../content/vocabularies.md) in your Omeka instance before import, which you can retrieve from [purl.org](http://purl.org/dc/elements/1.1/){target=_blank} and [schema.org](https://schema.org/docs/developers.html){target=_blank}. (This field is required.)

### Zenodo

If you select Zenodo, you will see a screen with the following options:

+ **Zenodo Community ID**: The short string identifying which Zenodo community to import from. Found in the URL after "https://zenodo.org/communities/" and before any search parameters. (This field is required.)
+ **Metadata Format**: The metadata format to export from Zenodo. The only option for Zenodo is "oai_dc". The format must exist as a [vocabulary](../content/vocabularies.md) in your Omeka instance before import, which you can retrieve from [purl.org](http://purl.org/dc/elements/1.1/){target=_blank}. (This field is required.)

### Invenio

![The Invenio import screen](../modules/modulesfiles/datarepoconnect_invenio.png)

If you select Invenio, you will see a screen with the following options:

+ **Main Invenio URL**: The URL of the main Invenio site. (This field is required.)
+ **Search Query**: A term that will narrow the imported results. If blank, all datasets under the **Main Invenio URL** will be imported, which could be large. You can use the [ElasticSearch query syntax](https://www.elastic.co/guide/en/elasticsearch/reference/current/search-your-data.html){target=_blank}. Examples: "oceanography", "access_right:open".


### CKAN

If you select CKAN, you should see a screen with the following options:

+ **Main CKAN URL**: The URL of the main Dataverse site. (This field is required.)
+ **CKAN Organization**: The identifier of the CKAN organization to import from. If blank, all datasets under the **Main CKAN URL** will be imported, which could be large.

### Check import status

After you have hit "Submit", you will be taken to the Past Imports page, where your most recent import job will appear in a green bar at the top of the page. You can track the status of the import by reloading the Past Imports page, or by clicking to the Jobs page found in the Admin section of the left-hand navigation.

!!! note
	Are your jobs starting and not completing? You might need to [set the path for PHP](../configuration.md#php-path) so that your system can perform the background process to make the items.

## Review imports

Click on Data Repository Connector on the left-hand navigation of the admin dashboard, which will bring up the Past Imports page.

The table of past imports includes a checkbox option to Undo, the Job ID for the import, any Comments made during import, the number of Items imported, the Date of the import, the import Status, and the Owner who initiated the import.

![The screen showing past imports from the Data Repository connector](../modules/modulesfiles/datarepoconnect_pastimports.png)

### Update imported resources

To update resources created using the Data Repository Connector, simply re-run an import from the same source. The resources will be updated, not re-imported. This allows you to use the Connector to sync data between your data repositories and the Omeka S installation.

### Undo an import

To undo a completed import and remove all associated items, go to the Data Repository Connector tab on the left-hand navigation of the admin dashboard, click on Data Repository Connector and then click on Past Imports, which should appear below the Data Repository Connector tab.

Check the box for each import you wish to undo and click "Submit".
