# Searching

There are search functions on both the administrative and public sides of Omeka S installs and sites. 

## Administrative interface

### Basic search

There is a search field near the top of the left-hand menu, just underneath the user information. This search field works as a keyword search across all the properties for a resource.

![Search option in blue sidebar.](files/search1.png)

By default, this search operates on items in your installation. However, you can use the ellipses (three dots) to open a menu and change the resource type being searched, selecting from Items, Item Sets, or Media. 

![Close up on the search options, showing the expanded ellipses menu with selection options for Items, Item Sets, or Media.](files/search2.png)

### Item advanced search

Advanced search for items only is available on the [Items](/content/items.md) page, from the *Advanced Search* link above the table of items.

![Advanced search button indicated with a red arrow.](files/advancedsearch2.png)

The advanced search loads on a new page, and has the following options:

![Advanced item search options page.](files/advancedsearch3.png)

*Search full-text:* runs a full-text search on all of the text for every item in the installation.

*Search by value:* search for a term or phrase which you enter 

- The first selector allows you to specify a property to search. 
- The second selector allows you to set the relationship the property has with the value. The options are:
	- is exactly, 
	- is not exactly, 
	- contains,
	- does not contain,
	- is resource with ID,
	- is not resource with ID,
	- has any value (there is something in the property), and
	- has no values.
- Finally, there is a text field for you to enter the value you want the property to have.

To find a resource ID, go to the resource and look at the url in your browser's address bar. The numbers at the end of the url are the resource ID. 

*Search by class:* select a class by which to search from the dropdown menu

*Search by template:* select a resource template from the dropdown. Templates are arranged by owner, then alphabetically. 

*Search by item set:* select from a dropdown of item sets.

*Search by site:* select a site from a dropdown of sites in the installation. Note that you can only search for items from one site at a time.  

*In site pool:* select from a dropdown menu of all the sites on the Omeka S installation, sorted by user-owner. 

Searches by value, class, template, and item set allow you to search by more than one input - use the large red *add new* buttons to search with more than one value or item set. These search terms build - searching for two item sets will return all items in either item set, rather than only those items which are in both. 

You can remove value and item set searches using the red trash can icon to the right of those search options.

You can reset your search terms at any time by using the "Reset" button on the upper right next to the "Search" button.

## Media advanced search
Advanced search for media is accessed from the [Media](/content/media) browse page, from the *Advanced Search* link above the table of item sets.

![Advanced search button indicated with a red arrow.](files/search_mediaadvance1.png)

The advanced search loads on a new page, and has the following options:

*Search full-text:* runs a full-text search on all of the text for every media resource in the installation.

*Search by value:* search for a term or phrase which you enter 

- The first selector allows you to specify a property to search. 
- The second selector allows you to set the relationship the property has with the value. The options are:
	- is exactly, 
	- is not exactly, 
	- contains,
	- does not contain,
	- is resource with ID,
	- is not resource with ID,
	- has any value (there is something in the property), and
	- has no values.
- Finally, there is a text field for you to enter the value you want the property to have.

To find a resource ID, go to the resource and look at the url in your browser's address bar. The numbers at the end of the url are the resource ID. 

You can remove value searches using the red trash can icon to the right of the value settings.

*Search by Class:* select a class by which to search from the dropdown menu

*Search by template:* select a resource template from the dropdown. Templates are arranged by owner, then alphabetically.

*Search by MIME type:* you can specify the media type for the search. For example, to find all tiff images, you would enter `image/tiff`. 

![Advanced media search options form, with fields as described above.](/files/search_mediaadvance2.png)

Searches by value, class, and template allow you to search by more than one input - use the *add new* buttons to search with more than one value or item set. These search terms build - searching for two templates will return all media using either template. 

You can remove value and item set searches using the red trash can icon to the right of those search options.

You can reset your search terms at any time by using the "Reset" button on the upper right next to the "Search" button.

### Item Set advanced search

Advanced search for item sets only is accessed on the [Item Sets](content/item-sets) page, from the *Advanced Search* link above the table of item sets.

![Advanced search button indicated with a red arrow.](/files/advancedsearchis1.png)

The advanced search loads on a new page, and has the following options:

*Search full-text:* runs a full-text search on all of the text for every item set in the installation.

*Search by value:* search for a term or phrase which you enter 

- The first selector allows you to specify a property to search. 
- The second selector allows you to set the relationship the property has with the value. The options are:
	- is exactly, 
	- is not exactly, 
	- contains,
	- does not contain,
	- is resource with ID,
	- is not resource with ID,
	- has any value (there is something in the property), and
	- has no values.
- Finally, there is a text field for you to enter the value you want the property to have.

To find a resource ID, go to the resource and look at the url in your browser's address bar. The numbers at the end of the url are the resource ID. 

You can remove value searches using the red trash can icon to the right of the value settings.

*Search by Class:* select a class by which to search from the dropdown menu

*Search by template:* select a resource template from the dropdown. Templates are arranged by owner, then alphabetically.

![Advanced item set search options form, with fields as described above.](files/advancedsearchis2.png)

Searches by value, class, and template allow you to search by more than one input - use the *add new* buttons to search with more than one value or item set. These search terms build - searching for two templates will return all media using either template. 

You can reset your search terms at any time by using the "Reset" button on the upper right next to the "Search" button.

## Public views
The exact appearance of the search interface will vary based on the [theme](/sites/site_theme/) selected. However, the way search works should be consistent regardless of theme. All of the screenshots in this section are from a site using the the Default theme. 

### Basic search
There is a search bar near the menu for each site. In the default theme, it is located just beneath the main menu, as shown in the image below.

![Homepage of the Jane Austen site, with a blue arrow pointing to the search bar below the main navigation menu](files/search_public1.png)

This search bar works as a full-text search for the whole site. It will search all of the items, item sets, and media as well as the content of every page published on the site. Results are sorted by type, grouping together page results and item or item set results. From the initial results page, you can view all the results for that type (page, item) using the "view all results" link.

![Search results for "Cassandra" showing one page and three items](files/search_public2.png)

If the [

### Advanced item search
Site visitors can access an advanced item search from the Browse Items page, if you have that page accessible. There is a link for Advanced search between the pagination and the sort options at the top of the item browse table.

![The Items page of the Jane Austen site, with a blue arrow pointing to the link for Advanced search](files/search_publicitems1)

Clicking this loads a new page with four options for search:

*Search full-text:* runs a full-text search on all of the text for every item in the installation.

*Search by value:* search for a term or phrase using multiple options.

- The first selector allows you to specify a property to search. 
	- Note that if you have have the [site settings](sites/site_settings/#search) to restrict search to templates, this will only display the properties used by those templates. 
- The second selector allows you to set the relationship the property has with the value. The options are:
	- is exactly, 
	- is not exactly, 
	- contains,
	- does not contain,
	- is resource with ID,
	- is not resource with ID,
	- has any value (there is something in the property), and
	- has no values.
- Finally, there is a text field for you to enter the value you want the property to have.

To find a resource ID, go to the resource and look at the url in your browser's address bar. The numbers at the end of the url are the resource ID. 

*Search by class:* select a class by which to search from the dropdown menu 

*Search by item set:* select from a dropdown of item sets.

![Advanced item search fields as described](files/search_publicitems2)

Searches by value, class, and item set allow a visitor to search by more than one input; they can use the *add new* buttons to search with more than one search term. These search terms build - searching for two item sets will return all items in either item set, rather than only those items which are in both. 

Site visitors can remove value and item set searches using the red trash can icon to the right of those search options.

### Advanced item set search
Site visitors can access an advanced item set search from the Browse Items Sets page, if you have that page accessible. There is a link for Advanced search on the upper left of the Item Sets page. 

![Item sets page for the Jane Austen site. A blue arrow points to the advanced search link](files/search_publicitemsets1.png)

Clicking the advanced search link loads a new page with three options for search:

*Search full-text:* runs a full-text search on all of the text for every item set in the installation.

*Search by value:* search for a term or phrase using multiple options.

- The first selector allows you to specify a property to search. 
	- Note that if you have have the [site settings](sites/site_settings/#search) to restrict search to templates, this will only display the properties used by those templates. 
- The second selector allows you to set the relationship the property has with the value. The options are:
	- is exactly, 
	- is not exactly, 
	- contains,
	- does not contain,
	- is resource with ID,
	- is not resource with ID,
	- has any value (there is something in the property), and
	- has no values.
- Finally, there is a text field for you to enter the value you want the property to have.

To find a resource ID, go to the resource and look at the url in your browser's address bar. The numbers at the end of the url are the resource ID. 

*Search by class:* select a class by which to search from the dropdown menu 

![Item set advanced search options as described](files/search_publicitemsets2.png)

Searches by value and class allow a visitor to search by more than one input; they can use the *add new* buttons to search with more than one search term. These search terms build - searching for two classes will return all item sets which have either class. 

Site visitors can remove value and item set searches using the red trash can icon to the right of those search options.

