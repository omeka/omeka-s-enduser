# Metadata Browse

The [Metadata Browse module](https://omeka.org/s/modules/MetadataBrowse){target=_blank} makes it possible to browse all resources that share a value for a particular metadata property.

It does this in one of two ways. The first is by turning selected properties into a link The second is by adding a link below properties that reads "See all items with this value". These links appear only on item view pages. When the link is clicked, the module returns the results of that search (property value is equal to input). It is similar to the Omeka Classic plugin [Search by Metadata](http://omeka.org/add-ons/plugins/search-by-metadata/){target=_blank}.

![The item "Sense and Sensibility". The date property displays as a link, and is indicated with a blue arrow.](../modules/modulesfiles/mdbr-directlinkYes.png)

The module adds a site-specific configuration menu. This menu allows you to make properties browseable on each site. It can also make specific properties browseable in the admin interface. The choice of directly-linked properties, or the display of a separate link, is a universal setting. You cannot change it from site to site.

These settings are only available to users at the level of Global Admin, Supervisor, or Editor. Site Managers cannot change site-specific settings.

## Metadata Browse on sites
Once you activate the module, it will show up in the context menu for [each site on your installation](../sites/index.md). To set up Metadata Browse for a site, click on the Metadata Browse tab in the site's context menu.

![A red arrow points to the Metadata Browse tab](../modules/modulesfiles/mdbr_sites1.png)

On the page that displays, the main section displays all currently enabled properties. Select properties to enable metadata browsing by clicking on them in the sidebar.

![Metadata Browse site settings page. The sidebar shows potential properties and the main region shows properties that have already been set. These are Creator, Date, Publisher, Is Version Of, and Title.](../modules/modulesfiles/mdbr_sites2.png)

Delete any selected properties by clicking the trash can icon. You might accidentally click the delete button at some ponit. If so, click the undo button that replaces it to keep that property.

![A property set to be deleted, highlighted in red, showing the undo button.](../modules/modulesfiles/mdbr_sites3.png)

Remember to click the "Save" button to save changes.

### Public view
Once you select properties and save changes, visitors to your site can use the selected properties to browse all items on the site with matching values.

The item view will either display with the property as a link, or with a link reading "See all items with this value." This depends on whether the [Direct Links option is checked](#direct-links) in the global module configuration.

In the example below, Metadata Browse is available for Title, Date of Publication, and Publisher. The "Direct Links" setting is unchecked.

![An item with arrows pointing to the links for "see all items with this value"](../modules/modulesfiles/mdbr_public1.png)

Clicking on "See all items with this value" under creator takes a visitor to a page of exact match search results. This is the result for clicking "See all items with this value" for the Publisher property in the previous image:

![An Items search result screen showing that the search is "Publisher is exactly: Thomas Egerton." There are two results visible](../modules/modulesfiles/mdbr_public2.png)

## Admin configuration
Change global site settings and admin-side settings from the module's configuration page. You can find it under the Modules tab of the left-hand navigation. Click the "Configure" button with the wrench icon located to the right of the Metadata Browse label.

The module has two checkbox configuration options: Global Configuration and Direct Links.

![Metadata Browse configuration settings, with the two settings as described below. "Use global configuration on admin side" is checked; "Direct Links" is unchecked. A few properties are added to the area below: Date, Rights, Rights Holder.](../modules/modulesfiles/mdbr_config2.png)

### Global configuration
The "Use global configuration on admin side" checkbox determines how the properties available for **administrative side** metadata browsing on items and item sets views are determined. This is done in one of two ways. One is by aggregating the properties selected on all of the sites in the installation (unchecked). The other is by limiting to only the properties chosen on this page (checked).

This checkbox modifies the admin side for all users. For example, a site about artists might have the Metadata Browse enabled for "Creator" (Dublin Core). By contrast, a site collecting conference papers might enable Metadata Browse for "presented at" (Bibliographic Ontology). With the box unchecked, both "Creator" and "presented at" would have Metadata Browse enabled on the admin views of all items and item sets. This would be true across the entire installation.

Checking the box limits the number of properties that have Metadata Browse enabled on the admin side. Say the site about artists was using Metadata Browse on every possible property. In that case, those Metadata Browse links would be visible on the public site but would not show up on the admin side. Instead, the Global Administrator(s) could decide which properties to enable browsing for on the admin side.

### Direct links
The "Direct Links" checkbox sets how metadata-browsing links display on both the admin side and across all sites.

If this box is unchecked, the properties selected for metadata browse display with a textual link under them. This link reads "See all items with this value". Clicking on the link text opens the page of items with matching metadata.

In this example, metadata browsing is active for the "Date of Publication" property:

![The item "Sense and Sensibility". The date property has text as described, and is indicated with a blue arrow.](../modules/modulesfiles/mdbr-directlinkNo.png)

If this box is checked, the values of the properties themselves become the link. This is similar to how a property populated by a resource displays. In this case, clicking on the property value itself opens the page of items with matching metadata.

![The item "Sense and Sensibility". The date property displays as a link, and is indicated with a blue arrow.](../modules/modulesfiles/mdbr-directlinkYes.png)

### Choose properties 
Check the ["Use global configuration" checkbox](#global-configuration) to ensure you can select properties for Metadata Browse in the Module configuration.

Select the properties from the sidebar by clicking on the desired property. It will load under the prompt "Choose properties".

![Metadata Browse configuration, some properties selected](../modules/modulesfiles/mdbr_config4.png)

To remove a property simply click the trash can icon to the right of the property label.

## Admin side browse

Once you select properties for Metadata Browse you will be able to search for exact matches to item and item set properties on the admin side. You can do this either in the configuration for the module or on at least one site.

When viewing the metadata of any item (not when editing), you will be able to browse those properties as exact matches for any other item in the installation with that value in that property. If the [direct link checkbox](#direct-links) is active, these properties will display as links. If not, they will display with the text "See all items with this value" just below the value for the property.

![Admin side view of item with red arrows pointing to the metadata browse links](../modules/modulesfiles/mdbr_admin1.png)
