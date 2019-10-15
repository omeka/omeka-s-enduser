The Scripto module for Omeka S allows you to create projects to transcribe, translate, or describe media attached to items in your Omeka S installation. The items and media are organized into an item set and then imported into a project in Scripto and can be periodically synched with the Omeka S item set to send the data back from Scripto to the Omeka S item and media metadata.

The Omeka S Scripto module allows you to create multiple projects on a single Scripto installation. Like sites in Omeka S, Scripto projects can exist independently of each other. This means that you can support a manuscript transcription project and a document translation project through the same Omeka S installation.


## Installation and Configuration
To install Scripto, you must:

- be running Omeka S v1.1.2 or higher;
- have a [MediaWiki](https://www.mediawiki.org/wiki/MediaWiki) installation running on the same server as the Omeka S installation. Minimum MediaWiki version is 1.30.0.

Create the MediaWiki installation on your server using [their instructions](https://www.mediawiki.org/wiki/Manual:FAQ#Installation_and_configuration). Install the Scripto module using the [documentation for installing modules](https://omeka.org/s/docs/user-manual/modules/#installing-modules). 

Once you have installed the module and created your MediaWiki installation, go to the Modules tab of your Omeka S installation and activate the Scripto module.

Staying on the Modules tab, click the Configure button for the Scripto module. There is a single, required field for you to enter the url for your MediaWiki API.

![Scripto module configuration page, with the field empty and highlighted in red](../modulesfiles/scripto-configure.png)

Enter the url for your [MediaWiki API endpoint](https://www.mediawiki.org/wiki/API:Main_page#Endpoint) in the field; this should be along the lines of `<your mediawiki url>/api.php`. Be sure to click "Submit" to save your changes.  

## Create an item set
The Scripto module uses [item sets](../../content/item-sets) to manage the content coming to and from your Omeka installation. 

Each Scripto project needs its own item set with which it can sync. Create the item set using items from your Omeka S installation which you want to be included in the project. You can add items to this item set later if you need to. 

## Scripto Admin Dashboard
The Scripto tab which appears under the Modules section of the left-hand navigation on the Omeka S installation admin side takes you to the Scripto Dashboard. From the dashboard, you can:

- Log in to Scripto using the bar across the top. If you are logged in, this bar will display your username, links to your contributions and watchlist, and the option to log out of Scripto.
- Quickly see the projects you own and the projects you review.
- See your recent contributions and activity on items on your watchlist. 
- From the dropdown in the upper right: 
	- browse all projects, 
	- add a new project, and 
	- browse all Scripto users. 

![Scripto dashboard with three projects, two of which the user reviews, and a series of recent contributions.](../../modules/modulesfiles/scripto_dash.png)


## Users
In addition to an Omeka S user account, any individual working on Scripto will need to have a MediaWiki user account as well. They can sign up for this account from the public side of the Scripto interface: `<your omeka S url>/scripto/create-account`.

In order to change the status of transcriptions and sync projects to and from Omeka S, users must have [Bureaucrat level permissions](https://www.mediawiki.org/wiki/Manual:User_rights) on the MediaWiki installation. This *must be done on MediaWiki* and cannot be managed through the Scripto dashboard on Omeka S.

You may find it easiest to have administrators of Scripto projects use the same or similar user names on both installations, in order to keep track of who is doing what. 

### Browse users
From the "actions" dropdown in the upper right corner of the Scripto Dashboard, you can select "Browse users"

This will take you to a user browse page showing all of the users 

## Public and Admin views
To toggle between the public and admin views of a project, delete the `/admin` from the url of any Scripto site, or add it in directly after the name of your Omeka S installation. 

The admin side is `youromekaurl.net/admin/scripto` and the public side is `youromekaurl.net/scripto`.

## Uninstalling Scripto

In order to successfully uninstall scripto, the module must be still be active. 
