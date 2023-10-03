# Planning Tips

In Omeka S, you build your [sites](../sites) page by page, using already existing resources on your installation. While it is best to have some resources before you start building out the pages, you can begin planning your site before you create the first item or item set.

What follows are some questions and ideas to help guide you as you plan your sites in Omeka S.

## Site audience and goals

**Who is the primary audience of this site?** Being specific will help you shape the site; "people interested in historic architecture" is much more useful than "the general public." Do you have secondary audiences? What do you want these specific audiences to accomplish when they come to the site?

**What are the goals of your site?** What do you want your specific audiences to accomplish when they come to the site? What do you want people to take away from the site? What content do you want to highlight?

## Resources

**What will you do with items in this website?**
[Items](../content/items/) are the building blocks of Omeka S. What sort of [resource templates](../content/resource-template/) will you want to create and use to fully describe your items? Any item you include on an Omeka S will have a public item show page, so try to ensure that the information in an item's metadata can stand on its own. 

**What will you do with item sets?**
You can use [item sets](../content/item-sets) to group items to be included on a [site](../sites), and they can be a way to guide visitors' browsing on your sites. For some sites, item sets are robust resources themselves.

How do you want to group items into sets? What metadata fields will your item sets use? Do your item sets have relations to each other or to items?

**What do you want your data to do?**
What properties are you going to want to consistently describe in your site? Do you want some of these to display with a different label - for example 'author' instead of 'creator' for books? Use a [resource template](../content/resource-template/) and change the label of the property.

In Omeka S, items and item sets can use other resources - items, item sets, and media - as properties; for example, you can make an item for William Shakespeare and have that item fill the 'creator' property for a 'Hamlet' item. How can your resources use this functionality?

Do you want to use a set of terms (controlled vocabulary) for certain items? You might want to use [Custom Vocab](../modules/customvocab/). Or do you want to use a terms list created by the Library of Congress or the Getty? Then you might use [Value Suggest](../modules/valuesuggest/).

## Building a site
With Omeka S you will build your site from the ground up, which means you need to give some thought to how you want to organize your site. 

**What pages do you want to include?** What kind of content do you want on these pages? How do you want to arrange them? Try sketching out a sample menu or wireframes for the site. Use that as a guide as you build your pages.

Pages are made up of [blocks](../sites/site_pages/#page-blocks), which can include text, images, and much more. What kind of content do you want on the pages you build? Bear in mind that you can rearrange page blocks as you build, so you can play around with the order of the content on your pages if you need to.

**How do you want to interact with your visitors on your site?** Do you want to [collect](../modules/collecting/) resources from your visitors? Allow them to [share](../modules/sharing/) your content on social media? 

Will you require users to create accounts on your site? Familiarize yourself with [user roles and permissions](admin/users.md).

## Suggested Modules by Site Goal
The Omeka Team and the community of open source developers have created hundreds of modules to extend the Omeka S core functionality. To assist administrators in installing and configuring so that it is geared toward particular types of work, below are some suggested collections of modules by type of work:

### Publishing Digital Collections
- Describing Resources 
    - [Custom Vocab](https://omeka.org/s/modules/CustomVocab/): Describe your resources using vocabularies you create.  
    - [Numeric Data Types](https://omeka.org/s/modules/NumericDataTypes/): Add data types for numbers and dates. 
    - [Persistent Identifiers](https://omeka.org/s/modules/PersistentIdentifiers/): Create/import/assign persistent identifiers to Omeka S items.
    - [Value Suggest](https://omeka.org/s/modules/ValueSuggest/): Describe your resources using auto-suggested values from controlled vocabulary services.  
- Importing Resources
    - [CSV Import](https://omeka.org/s/modules/CSVImport/): Import and update content (items, item sets, media, users) from a CSV, a TSV or an ODS file. 
    - [File Sideload](https://omeka.org/s/modules/FileSideload/): Add files that are already on your server to items. 
    - Other possible importers: [Data Repository Connector](https://omeka.org/s/modules/DataRepositoryConnector/); [DSpace Connector](https://omeka.org/s/modules/DspaceConnector/); [Fedora Connector](https://omeka.org/s/modules/FedoraConnector/); [Omeka Classic Importer](https://omeka.org/s/modules/Omeka2Importer/): [Omeka S Item Importer](https://omeka.org/s/modules/Osii/)
- Increasing Discoverability
    - [Extract Metadata](https://omeka.org/s/modules/ExtractMetadata/): Extract embedded metadata from files.
    - [Extract Text](https://omeka.org/s/modules/ExtractText/): Extract text from files to make them searchable.  
    - [Resource Meta](https://omeka.org/s/modules/ResourceMeta/): Add meta tags to resources.
- Displaying Resources
    - [Faceted Browse](https://omeka.org/s/modules/FacetedBrowse/): Add faceted browsing to your sites.
    - [IIIF Presentation](https://omeka.org/s/modules/IiifPresentation/):  Implementation of the IIIF Presentation API.
    - [Metadata Browse](https://omeka.org/s/modules/MetadataBrowse/): Link from metadata values to find other resources that share the same value.
    - [URI Dereferencer](https://omeka.org/s/modules/UriDereferencer/): Dereferences URIs when viewing items, media, and item sets. 

### Modeling Complex Data
- Describing Resources
    - [Custom Vocab](https://omeka.org/s/modules/CustomVocab/): Describe your resources using vocabularies you create.
    - [Data Cleaning](https://omeka.org/s/modules/DataCleaning/): Low-level auditing and cleaning of resource metadata.
    - [Inverse Properties](https://omeka.org/s/modules/InverseProperties/): Define inverse relations between properties.
    - [Numeric Data Types](https://omeka.org/s/modules/NumericDataTypes/): Add data types for numbers and dates.
    - [Persistent Identifiers](https://omeka.org/s/modules/PersistentIdentifiers/): Create/import/assign persistent identifiers to Omeka S items.  
    - [Value Suggest](https://omeka.org/s/modules/ValueSuggest/): Describe your resources using auto-suggested values from controlled vocabulary services. 
- Private data
    - [Hide Properties](https://omeka.org/s/modules/HideProperties/): : Hide properties on either the administrative or public side.  
    - [Redact Values](https://omeka.org/s/modules/RedactValues/): Redact values so that they are not visible to the public.
    - [View Private Resources](https://omeka.org/s/modules/ViewPrivateResources/): Allow researcher and author roles to view private resources.
- Importing Resources
    - [CSV Import](https://omeka.org/s/modules/CSVImport/): Import and update content (items, item sets, media, users) from a CSV, a TSV or an ODS file.
    - [Data Repository Connector](https://omeka.org/s/modules/DataRepositoryConnector/): Connect Omeka S to data repositories.
    - [File Sideload](https://omeka.org/s/modules/FileSideload/): Add files that are already on your server to items.
    - [Zotero Importer](https://omeka.org/s/modules/ZoteroImport/): Import items and files from Zotero user and group libraries.
- Displaying Data
     - [Data Visualization](https://omeka.org/s/modules/Datavis/): Visualize your data.
    - [Faceted Browse](https://omeka.org/s/modules/FacetedBrowse/): Add faceted browsing to your sites.      
    - [Metadata Browse](https://omeka.org/s/modules/MetadataBrowse/): Link from metadata values to find other resources that share the same value.
    - [URI Dereferencer](https://omeka.org/s/modules/UriDereferencer/): Dereferences URIs when viewing items, media, and item sets. 
    - [Zotero Cititation](https://omeka.org/s/modules/ZoteroCitations/): Use Zotero in rich-text editors to generate citations and bibliographies.

### Community Sourcing
- Public Contributions
    - [Collecting](https://omeka.org/s/modules/Collecting/): Add collecting forms to your sites.
    - [Custom Vocab](https://omeka.org/s/modules/CustomVocab/): Describe your resources using vocabularies you create.
    - [Mapping](https://omeka.org/s/modules/Mapping/): Add location info to your items and sites.
    - [Numeric Data Types](https://omeka.org/s/modules/NumericDataTypes/): Add data types for numbers and dates.
- Private data
    - [Hide Properties](https://omeka.org/s/modules/HideProperties/): Hide properties on either the administrative or public side. 
    - [Redact Values](https://omeka.org/s/modules/RedactValues/): Redact values so that they are not visible to the public.
    - [View Private Resources](https://omeka.org/s/modules/ViewPrivateResources/): Allow researcher and author roles to view private resources.
- Transcription
    - [Scripto](https://omeka.org/s/modules/Scripto/): Transcribe and translate items.
    - [DataScribe](https://omeka.org/s/modules/Datascribe/): Allows community visitors to transcribe structured data.

### Geospatial and Temporal Focus
- Describing Resources
    - [Custom Vocab](https://omeka.org/s/modules/CustomVocab/): Describe your resources using vocabularies you create.
    - [Mapping](https://omeka.org/s/modules/Mapping/): Add location info to your items and sites.
    - [Numeric Data Types](https://omeka.org/s/modules/NumericDataTypes/): Add data types for numbers and dates.
    - [Value Suggest](https://omeka.org/s/modules/ValueSuggest/): Describe your resources using auto-suggested values from controlled vocabulary services.
    - [URI Dereferencer](https://omeka.org/s/modules/UriDereferencer/): Dereferences URIs when viewing items, media, and item sets.