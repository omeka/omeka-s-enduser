---
title: Scripto
---

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

### Creating an item set
The Scripto module uses item sets to manage the content coming to and from your Omeka installation. 

Each Scripto project needs an item set with which it can synch. You can add items to this item set later if you need to. 

## Users

In addition to an Omeka S user account, any individual working on Scripto will need to have a MediaWiki user account as well.

In order to change the status of transcriptions and sync projects to and from Omeka S, users must have Bureaucrat level permissions on the MediaWiki installation. This must be done on MediaWiki and cannot be managed through the Scripto dashboard on Omeka S.

You may find it easiest to have administrators of Scripto projects use the same or similar user names on both installations, in order to keep track of who is doing what. 

## Scripto Admin Dashboard
The Scripto tab which appears under the Modules section of the left-hand navigation on the Omeka S installation admin side takes you to the Scripto Dashboard. From the dashboard, you can:

Log in to Scripto using the bar across the top. If you are logged in, this bar will display your username, links to your contributions and watchlist, and the option to log out of Scripto.

Quickly see the projects you own and the projects you review.

See your recent contributions and activity on items on your watchlist. 

From the dropdown in the upper right, browse all projects, add a new project, and browse all Scripto users. 

## Public and Admin views
To toggle between the public and admin views of a project, delete the `/admin` from the url of any Scripto site, or add it in directly after the name of your Omeka S installation.

## Creating a Project
To create a new Scripto project, go to the Scripto dashboard (the Scripto tab in the left-hand navigation) and use the dropdown menu in the upper right corner to select "add new project"

This will load the New project page, which has two tabs: Configuration and Reviewers. 

The eye symbol on the upper right by the "add" button sets the visibility of the project. If the button is set to private (eye with a slash) it will only be visible to users *of the Omeka site*

You can change these settings at any time by editing the project. 

**Configuration options**

- Title (required): the name of the Scripto project. This will display on public and admin sides.
- Description: a description of the project. This will display on public and admin sides.
- Guidelines: transcription guidelines. These can be formatted using the WYSIWYG editor which will appear when typing inside this field. 
- Item set (required): select the item set with which the Scripto project should synch. This item set should contain all the items and/or media you wish to include in the project. 
- Import target: select the resource to store data when it is pushed from the Scripto project back to Omeka S metadata. Options are Item and Media, Item, or Media.
- Property (required): select from the dropdown which property should store the content created through Scripto and imported back into Omeka S metadata. In addition to installed [Vocabularies](https://omeka.org/s/docs/user-manual/content/vocabularies/), Scripto has its own vocabulary options of content, transcription, and translation. 
- Language tag: the language tag for the content being imported into the property selected above.

![Add New Project window open to the "Configuration" tab - all fields are blank](../modules/modulesfiles/scripto_newconfig.png)

**Reviewers**
Add Omeka S users to your Scripto project as reviewers, who can can access private projects, and mark media as approved and unapproved. Only Omeka users with site and global administrator roles can sync and import projects, due to the destructive potential of those actions.

On the right-hand side of the window is a browsable list of Omeka S users, sorted alphabetically by username. To add a user as a Scripto project reviewer, simply click on their name; this will add them to the table of reviewers in the main part of the page.

To remove a user as reviewer, click the trash can icon to the right of their email address in the table of reviewers.  

![Add New Project window open to the "Reviewers" tab - the page is largely blank, with an alphabetical menu down one side.](../modules/modulesfiles/scripto_newrev.png)

Click "Add" to create the new project.

### Initial Sync
Immediately upon creating a project, you will see the message: "No Scripto items found. Do you need to sync the project? If you have recently synced, the sync job has likely not finished."

![](../modules/modulesfiles/scripto_newproject.png)

To sync the project, go to the Actions dropdown button in the upper right corner of the window. From the options, select "Sync project" - this will update the project so that it has every item in the item set. 

![](../modules/modulesfiles/scripto-projectactions.png)

Note that the first time you run the sync may take some time, and you may continue to see the "No Scripto items found" message. You should also see a green message across the top of the page stating that the project is syncing and giving you a link to the job for the sync.

## Review project
From the Scripto dashboard you can access projects you own and those to which you have reviewer access. Regardless of your status for the project, clicking on the project's title will take you to its review page.

At the top of the page you will see the title of the project along with the label "Review". Underneath the project title will be the Scripto account bar, where you can either log in or navigate to the dashboard, your contributions and watchlist. 





## Uninstalling Scripto

In order to successfully uninstall scripto, the module must be still be active. 
