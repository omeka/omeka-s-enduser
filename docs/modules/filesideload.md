# File Sideload

The [File Sideload module](https://omeka.org/s/modules/FileSideload){target=_blank} adds the ability to ingest media files that are already stored on the server where your Omeka S installation lives. New options will appear when uploading media to your items: "Sideload" for choosing individual files from your server, or "Sideload directory" for choosing folders full of files. 

File Sideload is compatible with [CSV Import](../modules/csvimport.md). When installed, your CSV Import options will include the ability to add media via filenames in your Sideload directory. Be sure to disable file deletion in the File Sideload module when using it with CSV Import.

## Create a directory

Create a directory (folder) on your server. It can be within the File Sideload module directory or on the same level as the Omeka S installation. 

!!! note
	If you place your sideload directory anywhere inside your Omeka installation, including inside the module directory (`youromekainstall/modules/FileSideload/yourdirectory`), be careful not to delete or move it when updating the installation or module. You may see error messages when editing items or media if the sideload directory cannot be found. Return to the module configuration page to fix this issue.

Upload or move files into this directory. All files and folders must be in this directory to be accessible.

Note that when browsing these files from the module to add as media, you will only see the filenames and folder names, so you should name resources as clearly as possible (for example, "StudyInScarlet_coverpage.jpg" will be more helpful than "img001.jpg").

## Configuration

After installing the module, you will need to configure the module to tell it where the directory is located.

From the Modules page of the left-hand navigation, scroll to File Sideload in the list and click the "Configure" button.

The File Sideload module has two configuration options.

![An example configuration screen, with fields as listed below, is shown filled out. The Sideload directory is filled out with a relative path concluding in the folder "/sideloadFiles". The Delete sideloaded file? checkbox is checked.](../modules/modulesfiles/filesideload_config2.png)

**Sideload Directory**: the path, **relative to the server root**, of the directory in which the files are stored. This should look something like:

- `/var/www/html/yourinstallationpath/omeka-s/sideload-media`
- `/home/yourusername/yourwebsite.org/omeka-s/sideload-files` (a typical path for shared hosting)
- `/home/yourusername/public_html/omeka-s/modules/FileSideload/sideload` (a typical path for cPanel users).

If you have shell access to the directory via terminal, you can copy and paste the results of the command `pwd`.

If you are using an FTP application, copy out the remote site path in the location bar of the application.

**Delete sideloaded file?**

- If checked, any file added to an item as media will be deleted from the Sideload directory, as the file is now saved as media in the Omeka S installation.
- If unchecked, the files will remain in the directory, and will be available to be added as media to any item, until you manually remove them.


Add a sideload file to an item
------------------------------
With File Sideload installed and configured, and files in the directory, you can now use the module to add media to items.

When editing an item, go to the Media tab. The "Add media" sidebar now includes two buttons for Sideload (below the core options).

![An item's media tab in the editing mode is shown. Two entries in the sidebar from Sideload have already been added to the main field.](../modules/modulesfiles/filesideload_browse.png)

Clicking on either of the buttons adds a Sideload media block. Adding a single file creates two fields:

- **Title**: Give the media file a new title (optional).
- **File**: Select a file from this dropdown menu. The menu will load the file names as they appear in the directory. Select one from the dropdown and save your changes.

![Sideload media options as listed above, with the dropdown open, displaying file names. Some options are shown as being in a subfolder, in the form "item123/24750.jpg".](../modules/modulesfiles/filesideload_addfile.png)

Adding media by directory creates three fields:

- **Title**: Give the media file a new title (optional). This title will apply to all added media identically.
- **Directory**: Select a folder from this dropdown menu. The menu will load the folder names as they appear in the directory. 
- **Ingest directory recursively**: Checking this box will include both all media from the sideload folder you chose and all media from all folders inside that folder. 

![Sideload directory media options as listed above, with the dropdown open, displaying directory names. One directory is shown as "item234/item234b", indicating a folder within a folder.](../modules/modulesfiles/filesideload_directory_addfile.png)

Remember that File Sideload has a module-wide setting to delete files when ingested through this process. When you are sure your settings are correct, save the changes to the item. You should see the file or files added as media in the media section of the sidebar.

## CSV Import integration

With CSV Import, you can add media to items via File Sideload. Provide a column with the filenames, not full URLs, pointing to the files in your Sideload directory. Add the mapping to Media source > Sideload.

When using CSV Import with your Sideload directory, we recommend you un-check the file deletion setting in the File Sideload module configuration. CSV Import may delete files from your Sideload directory even if an import job has failed or stalled. You should always manually check the results of CSV Import before deleting the files it has imported. 
