The Scripto module for Omeka S allows you to create projects to transcribe, translate, or describe media attached to items in your Omeka S installation. The items and media are organized into an item set and then imported into a project in Scripto and can be periodically synched with the Omeka S item set to send the data back from Scripto to the Omeka S item and media metadata.

The Omeka S Scripto module allows you to create multiple projects on a single Scripto installation. Like sites in Omeka S, Scripto projects can exist independently of each other. This means that you can support a manuscript transcription project and a document translation project through the same Omeka S installation.


## Installation and Configuration
To install Scripto, you need:

- To be running Omeka S 1.1.2
- Have a MediaWiki installation running on the same server as the Omeka S installation. Minimum MediaWiki version is 1.30.0.

Create the MediaWiki installation on your server using their instructions. Install the Scripto module using the [documentation for installing modules](https://omeka.org/s/docs/user-manual/modules/#installing-modules). 

Once you have installed the module and created your MediaWiki installation, go to the Modules tab of your Omeka S installation and activate the Scripto module.

Staying on the Modules tab, click the Configure button for the Scripto module. 

On the Configuration page, enter the url for your MediaWiki API endpoint; this should be something like `<your mediawiki url>/api.php`. 

### Create an item set
The Scripto module uses [item sets](../../content/item-sets) to manage the content coming to and from your Omeka installation. 

Each Scripto project needs an item set with which it can synch. You can add items to this item set later if you need to. 

## Users

In addition to an Omeka S user account, any individual working on Scripto will need to have a MediaWiki user account as well.

In order to change the status of transcriptions and sync projects to and from Omeka S, users must have Bureaucrat level permissions on the MediaWiki installation. This *must be done on MediaWiki* and cannot be managed through the Scripto dashboard on Omeka S.

You may find it easiest to have administrators of Scripto projects use the same or similar user names on both installations, in order to keep track of who is doing what. 

## Scripto Admin Dashboard
The Scripto tab which appears under the Modules section of the left-hand navigation on the Omeka S installation admin side takes you to the Scripto Dashboard. From the dashboard, you can:

- Log in to Scripto using the bar across the top. If you are logged in, this bar will display your username, links to your contributions and watchlist, and the option to log out of Scripto.
- Quickly see the projects you own and the projects you review.
- See your recent contributions and activity on items on your watchlist. 
- From the dropdown in the upper right: browse all projects, add a new project, and browse all Scripto users. 

![Scripto dashboard with three projects, two of which the user reviews, and a series of recent contributions.](../../modules/modulesfiles/scripto_dash.png)

## Public and Admin views
To toggle between the public and admin views of a project, delete the `/admin` from the url of any Scripto site, or add it in directly after the name of your Omeka S installation. 

The admin side is `youromekaurl.net/admin/scripto` and the public side is `youromekaurl.net/scripto`.

## Public view
On the public side, users can browse the Scripto project but in order to edit or create content they must have a Scripto (Mediawiki) account and be logged in. 

### Public project view
On the public side, projects display a progress bar for all items, so that community users can easily identify media or items to work on. 

![Public project view. There are two large square thumbnails representing items in the project. One has a "2/2" and a full green bar underneath it, indicating that the item has been completely transcribed](../modules/modulesfiles/scripto_publicproj.png)

### Public item view
The public item view displays the Omeka S item metadata in a column on the left side, and the media in the main area on the right. 

Users can toggle between gallery and list views using the layout button. They can also *sort* and *filter* media in the item. Sort options are by last edited, last completed, and last approved. Filter options are is edited, is not edited, is completed, is not completed, is approved, is not approved.

![Public item view](../modules/modulesfiles/scripto_publicitem.png)

Users can either click on the media's index number to view media information, on edit to go straight to the mediawiki transcription/translation interface.

### Public media view
The initial media view shows the media on the right, with metadata on the left. Underneath the media display is the HTML of whatever wikitext has already been generated. 

At the top of the page is the title of the item, which functions as a link back to the item, followed by the media's number (the second page will be #2, for example). Below this information is the original title of the media itself. 

On the left above the media and metadata are a series of buttons:

- *Edit*
- *Browse revision history*
- *View notes*
- And *track/stop tracking media* with a star button which toggles this option.

On the right above the media and metadata is a pagination button which allows users to easily move between media for a single item

![media view](../modules/modulesfiles/scripto_mediav.png)

#### Adding text
To start working with a piece of media, the user clicks "edit" in the toolbar above the media and metadata display.

A new page loads, with a media viewer and a editing workspace for users to enter text. Depending on the selected layout, media may be to the right of the workspace or above it.

The area between the media title and the workspace and viewer has a combination of information display and action items for the user. 

On the far left is a button to track or stop tracking media, with a star icon.

In the center is an information display with the media's Protection, protection expiration, and status, and a checkbox where the user can mark the media as completed. 

On the far right are buttons to *save* or *cancel* changes. 


Users can rotate the media and zoom in and out using the controls within the media viewer. They can use the layout buttons to toggle between side by side and top and bottom views. 

![edit media](../modules/modulesfiles/scripto_editmedia.png)

Just above the mediawiki workspace is a field where users are encouraged to summarize their changes. 

The editing workspace has a formatting toolbar which adds MediaWiki markup to the text (it does not change the appearance of the text in the workspace). Any formatting will be applied to the HTML view of the text after changes are saved.

## Uninstalling Scripto

In order to successfully uninstall scripto, the module must be still be active. 
