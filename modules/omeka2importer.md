title: Omeka 2 Importer
---

The Omeka 2 Importer is a module that can import items from an Omeka 2 site into Omeka S.

In the admininstrative dashboard, you can access the importer either through the Modules link or by clicking on Omeka 2 Importer located under the Settings link. You will see links to Import and Past Imports.

Import  
The import section of the module allows you to import items from Omeka 2 sites via an API.

Omeka 2 Api Endpoint: Enter the site URL for the API you wish to access. Make sure you enter http:// at the start of the link, otherwise the importer will not be able to access the items at that site.  
Omeka 2 Api Key: This field can either be blank or filled, depending on whether you have an API key for the site you are attempting to import data from.  
Comment: You can add a comment such as "Jane Doe's API, no key" to help identify the specific import when viewing previous imports.  
Import Into: This option allows you to select a specific item set in which to import the items.   
Import Collections: Check this box if you wish to import the collections from the Omeka 2 site to the Omeka S site.

Past Imports  
The past imports section of the module allows you to view previous API imports.

Undo: Check this box if you wish to undo the import. Once you click submit, the status for that specific import will be undone.    
Job ID: A numerical value assigned to each specific API import. You can also view the job under the Jobs tab on the administrative dashboard.  
Comment: If you entered a comment in the Comment field in the Import section of the module, that comment will appear. If you typed "Jane Doe's API, no key" in the import section you will see it as a comment.  
Items: Lists the number of items added and updated with each import.   
Date: The date on which the import took place.   
Status: Will be in_progress, completed, or undone.  
Owner: The user who requested the import.