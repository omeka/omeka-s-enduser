# Metadata Browse

The Metadata Browse module makes it possible to browse all resources that share a value for a particular metadata property. 

It does this by adding a link below selected properties that reads "See all items with this value"; when clicked, the module returns the results of that search (property value is equal to input). In function it is similar to the Omeka Classic plugin [Search by Metadata](http://omeka.org/add-ons/plugins/search-by-metadata/). 

The module's browse function is applied on the admin side when the module is active, and can be enabled on the public side of individual sites,  on a site-by-site basis. 

## Configuration Options
Once you have installed and activated the module, you can configure it from the Modules tab of the left-hand navigation. Click the Configure button, with the wrench icon, to the right of the Metadata Browse label. 

The module has two checkbox configuration options, Global Configuration and Direct Links. If Use global configuration is checked, you will also be able to select properties from a right-hand sidebar.

![Metadata Browse configuration settings](../modules/modulesfiles/mdbr_config2.png)

### Global Configuration checkbox
The "Use global configuration on admin side" checkbox determines how the properties available for *admin side* metadata browsing (on items and item sets views) are determined: by aggregating the properties selected on all of the sites in the installation (unchecked) or limited to only the properties.

When the box is *unchecked*, metadata browse on the admin side (and only the admin side) aggregates the metadata browse settings for all individual sites and applies them to every item and item set in the installation. 

Leaving the box unchecked allows installation users to browse the properties on the admin side which they have set as key on their sites. For example, a site about various artists might have the Metadata Browse enabled for 'Creator' (Dublin Core), while a site collecting conference papers might enable Metadata Browse for 'presented at' (Bibliographic Ontology); with the box unchecked, both 'Creator' and 'presented at' would have Metadata Browse enabled on the admin views of all items and item sets on the installation.

When the box is *checked*, individual site settings still apply on the public views of those sites, but are not used on the admin side. Instead, only those properties selected in the Metadata Browse module configuration settings (the current page) are used on the admin side. So if the global admin of the installation example above checked the Global Configuration box and only enabled the properties 'Title' and 'Creator', then the 'presented at' property would not include a "See all items with this value" option on the admin side item browse.

Checking the box can be used to limit the number of properties which have Metadata Browse enabled on the admin side. If, for example, the site about various artists mentioned above was using Metadata Browse on every possible property, those Metadata Browse links would still be visible on their site, but would not show up on the admin side. Instead, the Global Administrator(s) could decided which properties to enable browsing on for the admin side, thus reducing visual clutter. 

### Direct Links checkbox
The "Direct Links" checkbox sets how metadata browse links are displayed on both the admin side and across all sites. 

If this box is unchecked, the properties which have been selected for metadata browse will display with a red textual link under them which reads "see all items with this value". Clicking on the link text opens the page of items with matching metadata.

In this example, metadata browse is active for the "Date of Publication" property:

![The item *Sense and Sensibility*. The date property has text as described, and is indicated with a blue arrow.](../modules/modulesfiles/mdbr-directlinkNo.png)

If this box is checked, the values of the properties themselves become the link, similar to how a property populated by a resource displays. In this case, clicking on the property value itself opens the page of items with matching metadata.

![The item *Sense and Sensibility*. The date property displays as a link, and is indicated with a blue arrow.](../modules/modulesfiles/mdbr-directlinkYes.png) 

### Choose properties
Selecting properties for Metadata Browse in the Module configuration will only work if the *use global configuration*  checkbox is checked (see [above](#global-configuration-checkbox)).

Select the properties from the sidebar by clicking on the desired property. It will load under the prompt "Choose properties".

![Metadata Browse configuration, some properties selected](../modules/modulesfiles/mdbr_config4.png)

To remove a property simply click the trash can/delete icon to the right of the property label.

## Admin side browse

Once you have selected properties for Metadata Browse, either in the configuration for the module or on at least one site, you will be able to search for exact matches to item and item set properties on the admin side.

When viewing the metadata of any item (not when editing), you will be able to browse those properties as exact match for any other item in the installation with that value in that property. If the direct [direct link checkbox](#direct-links) is active, these properties will display as links; if not, they will display with the text "see all items with this value" just below the value for the property.

![Admin side view of item with red arrows pointing to the metadata browse links](../modules/modulesfiles/mdbr_admin1.png)


## Metadata Browse on Sites
Once the module is activated and installed, it will show up in the context menu for [sites](../sites/index.md) on your installation. 

To set up Metadata Browse for a site, click on the Metadata Browse tab in the site's context menu.

![A red arrow points to the Metadata Browse tab](../modules/modulesfiles/mdbr_sites1.png)

On the page which loads, select properties from the sidebar to enable metadata browse by clicking on them in the sidebar.

![Metadata Browse site options](../modules/modulesfiles/mdbr_sites2.png)

Delete any selected properties by clicking the trash can/delete icon. If you accidentally click the delete button, simply click the undo button which replaces it to keep that property. 

![A property set to be deleted, showing the undo button](../modules/modulesfiles/mdbr_sites3.png)

Remember to click the *Save* button to save changes. 

### Public View
Once you have selected properties and saved changes, visitors to your site can use the Metadata Browse properties to search for all items on the site with matching properties.

The browse will either display with the property as a link or with the link text "see all items with this value", depending on whether the [direct link checkbox](#direct-links) in the global module configuration.

In the example below, Metadata Browse is available for Title, Date of Publication, and Publisher, and Direct Links is not active.

![An item with arrows pointing to the links for "see all items with this value"](../modules/modulesfiles/mdbr_public1.png)

Clicking on "See all items with this value" under creator takes a visitor to a page of exact match search results. For example, this is the result for clicking "see all items with this value" for the Publisher property in the previous image:

![Beginning of search results](../modules/modulesfiles/mdbr_public2.png)

