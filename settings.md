---
title: Settings
---

Admin users may change the settings for the admin dashboard and general settings for sites using the *Settings* tab on the left side of the admin dashboard (gear icon). 

## Global Settings

Global settings are only available to users with Site Administrator or Global Administraot user roles.

![view of the global settings fields](/files/globalsettings.png)

*Administrator Email* sets the email address for the installation administrator. 
Note that some hosting setups may require that the domain name for the administrator email match the domain name of the installation (if your domain is yourinstall.org, the administrator email must be user@yourinstall.org).  

*Installation Title* allows you to change the title for the OmekaS installation overall. This is what appears in the upper left-hand corner of the admin dashboard.

*Time Zone* sets the default time zone for the install, which will be used for error logging messages and to determine creation dates for items, item sets, and other materials on the install. This is a dropdown menu. 

*Results per page* changes the number of results (items, item sets, media) displayed per page when browsing in either public or admin sides of the installation.

*Property label information* determines what is displayed next to each property when users are editing items and item sets. 
* By default, this is set to *none*, meaning that only the property label is displayed.
* If *show vocabulary* is selected, the parenthetical statement next to the property name displays the vocabulary used (for example, Dublin Core) 
* If *show term* is selected, the parenthetical statement next to the property name displays the vocabulary:term (for example, dc:title). 

*Default Site* dropdown gives you control over where people land they navigate to the base url of your install. You can either display a list of all sites in the install (default) or select a specific site from the dropdown, to which people will be redirected.

*Use HTMLPurifier* checkbox. If checked, the service [HTMLPurifier](http://htmlpurifier.org/) will clean up any user-entered HTML. 