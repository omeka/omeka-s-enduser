# Exports

![.](modulesfiles/exports_output.png)

The [Exports module](https://omeka.org/s/modules/ExtractText){target=_blank} will create an export of information about your Omeka S installation's resources. The module can generate CSV or JSON-LD files with both metadata and internal information about your items, item sets, or media. 

## System requirements


## Configuration

![.](modulesfiles/exports_config.png)

On this page you must set a folder on your server, inside your Omeka S installation directory, for the export files to be created. Enter in the path relative to your installation's location. You should create the directory first on your server, and set its permissions to writeable, before you save this page. The module will not check that the folder is writeable until you start an export. 

## Export resources

![.](modulesfiles/exports_emptyTable.png)

Click "Create an export" to set up your first export. 

![.](modulesfiles/exports_select.png)

At this time you can only export resources from your installation. Future or third-party versions of this module may add more exporting options. 

![.](modulesfiles/exports_create.png)

On the next page you set up your export to pull information from items, item sets, or media. You can use a query to filter specific types of these resources, such as by resource template, class, metadata value, etc. 

![.](modulesfiles/exports_inprogress.png)

Once you start the export, you will be returned to the table of past exports. You will see a green bar at the top of the screen indicating that the job has begun, with a link to watch the job's status. If you refresh this page, you will see the table with the export status indicated. You can also find this information on the Jobs page accessible in the sidebar. 

## The Exports table

![.](modulesfiles/exports_sidebar.png)

When an export is complete, you will see a download icon in the table row that, on click, will download a ZIP file containing the export you specified (a CSV or JSON file). 

Once you have created exports, you can view information about them by clicking the ellipsis (three dots) icon in the table row. This will open up a sidebar where you can review the settings you used. 

You can copy an export with the copy (two identical pages) icon, or delete its record from the installation database (and any files it created) with the delete (trashcan) icon. This will bring up a confirmation window. 