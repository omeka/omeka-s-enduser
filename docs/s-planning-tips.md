# Planning Tips

## The basics

A brand-new Omeka S installation comes with several pre-designed page types ready to share:

- When you add a new site, you can choose an installed theme right away, or allow it to use the "Default" theme. 
- The navigation of your first S site will come loaded with a "Browse" page for exploring items. You can quickly add the pre-installed "Welcome" page, which showcases some text formatting styles. 
- Once you add your first item, you will be able to view the "[item view page](content/items.md#public-views-for-items)". Customize this from the "Configure resource pages" button on the "Theme" tab. There is a separate page layout for viewing media attached to items.
- When you begin sorting items into item sets, you can add a similar "Browse item sets" page to your navigation, and customize a similar "item set view" page. 
- Depending on the theme you choose, these resource pages may have their own pre-configured blocks. Most themes will by default display: 
	- for items: a full-size embedding of the media, the item's metadata sorted by schema, a list of item sets and site pages where the item appears, and then a list of all the item's attached media with small thumbnails;
	- for media: a full-size rendering of the media, then the media's metadata; 
	- for item sets: the item set's metadata, then a browsing grid or list of the set's contents.
- The pages for browsing items and items sets each link to [an Advanced Search form](search.md#public-views), as does the search bar at the top of your site.

In Omeka S, you build your [sites](../sites) page by page, using resources you've added to your installation. You should begin planning your site before you start adding resources at scale, but we suggest experimenting with a few sample items and item sets to get a feel for the way Omeka handles them.

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
With Omeka S, you can built your sites from scratch or quickly set up our in-built pages. It's also easy to use multiple sites to accomplish your goals. 

**What pages do you want to include?** What kind of content do you want on these pages? How do you want to arrange them? Try sketching out a sample menu or wireframes for the site. Look at example sites by other organizations or people. Use those as guides as you build your pages.

Pages are made up of rearrangable [blocks](../sites/site_pages/#page-blocks), which can include text, images, and much more. What kind of content do you want on the pages you build? How do you want people to access and interpret your collections?

**How do you want to interact with your visitors on your site?** Do you want to [collect](../modules/collecting/) resources from your visitors? Allow them to [share](../modules/sharing/) your content on social media? 

Will you allow [users to create accounts](admin/users.md) on your site, and let them add their own items, metadata, or exhibits?

## Suggested modules
The Omeka Team and our community of open-source developers have created hundreds of modules to extend the Omeka S core functionality. To assist administrators in installing and configuring Omeka S so that it is geared toward particular types of work, below are some suggested collections of modules:

### Publishing digital collections

- Describing resources 
    - [Extract Metadata](https://omeka.org/s/modules/ExtractMetadata/){target=_blank}: Extract embedded metadata from files, such as EXIF data from photographs.
    - [Extract Text](https://omeka.org/s/modules/ExtractText/){target=_blank}: Extract text from files (PDFs, word documents, images) to make them searchable.   
    - [Custom Vocab](https://omeka.org/s/modules/CustomVocab/){target=_blank}: Describe your resources using vocabularies you create.
    - [Value Suggest](https://omeka.org/s/modules/ValueSuggest/){target=_blank}: Describe your resources using auto-suggested values from controlled vocabulary services. 
    - [Numeric Data Types](https://omeka.org/s/modules/NumericDataTypes/){target=_blank}: Add data types for numbers and dates. 
- Importing resources
    - [CSV Import](https://omeka.org/s/modules/CSVImport/){target=_blank}: Import and update content (items, item sets, media, users) from a CSV, a TSV, or an ODS file. 
    - [File Sideload](https://omeka.org/s/modules/FileSideload/){target=_blank}: Add files that are already on your server to items. 
    - Other importers include from DSpace, Fedora, Dataverse, Invenio, Zenodo, Zotero, or from existing Omeka Classic or S collections.
- Increasing discoverability
    - [Mapping](https://omeka.org/s/modules/Mapping/){target=_blank}: Geolocate your items to one or more mapped locations.
    - [Sharing](https://omeka.org/s/modules/Sharing/){target=_blank}: Offer OpenGraph metadata, so your Omeka S links display beautifully on social media.
    - [Resource Meta](https://omeka.org/s/modules/ResourceMeta/){target=_blank}: Make your resources' metadata machine-readable.
    - [Persistent Identifiers](https://omeka.org/s/modules/PersistentIdentifiers/){target=_blank}: Create/import/assign DOIs or ARKs to items.
    - [IIIF Presentation](https://omeka.org/s/modules/IiifPresentation/){target=_blank}: Offer your resources using the IIIF Presentation API.
- Displaying resources
    - [Faceted Browse](https://omeka.org/s/modules/FacetedBrowse/){target=_blank}: Add more fine-grained browsing tools to your collections.
    - [Metadata Browse](https://omeka.org/s/modules/MetadataBrowse/){target=_blank}: Browse resources that share the same metadata.
    - [URI Dereferencer](https://omeka.org/s/modules/UriDereferencer/){target=_blank}: Display authority control metadata from external URIs. 

In addition to these basic groups of modules, you may be interest in the following specific types of functionality.

### Modeling complex data

- Describing resources
    - [Data Cleaning](https://omeka.org/s/modules/DataCleaning/){target=_blank}: Low-level auditing and cleaning of resource metadata.
    - [Inverse Properties](https://omeka.org/s/modules/InverseProperties/){target=_blank}: Define reciprocal relations between properties.
- Private data
    - [Hide Properties](https://omeka.org/s/modules/HideProperties/){target=_blank}: Hide properties on the administrative or public side.
    - [Redact Values](https://omeka.org/s/modules/RedactValues/){target=_blank}: Redact values so that they are not visible to the public.
    - [View Private Resources](https://omeka.org/s/modules/ViewPrivateResources/){target=_blank}: Allow lower user roles to view private resources.
- Displaying data
    - [Data Visualization](https://omeka.org/s/modules/Datavis/){target=_blank}: Visualize information about your collections and items.
    - [Mapping](https://omeka.org/s/modules/Mapping/){target=_blank}: Geolocate your items to one or more mapped locations; includes a timeline for displaying items chronologically.

### Community sourcing

- Public contributions
    - [Collecting](https://omeka.org/s/modules/Collecting/){target=_blank}: Add collecting forms to your sites. Integrates with Mapping, Numerica Data Types, Custom Vocab, Value Suggest.
- Transcription
    - [Scripto](https://omeka.org/s/modules/Scripto/){target=_blank}: Transcribe and translate items.
    - [DataScribe](https://omeka.org/s/modules/Datascribe/){target=_blank}: Allows community visitors to transcribe structured data.

### Geospatial and Temporal

- Describing Resources
    - [Mapping](https://omeka.org/s/modules/Mapping/){target=_blank}: Add location info to your items and sites.
    - [Numeric Data Types](https://omeka.org/s/modules/NumericDataTypes/){target=_blank}: Add data types for numbers and dates. Allows for the creation of timelines in conjunction with Mapping.
   
### Working with other digital systems

- Institutional Repositories
    - [Data Repository Connector](https://omeka.org/s/modules/DataRepositoryConnector/){target=_blank} includes Zenodo, Dataverse, Invenio, and CKAN
    - [DSpace Connector](https://omeka.org/s/modules/DspaceConnector/){target=_blank}
    - [Fedora Connector](https://omeka.org/s/modules/FedoraConnector/){target=_blank}
- Other Omeka installations
    - [Omeka Classic Importer](https://omeka.org/s/modules/Omeka2Importer/){target=_blank}
    - [Omeka S Item Importer](https://omeka.org/s/modules/Osii/){target=_blank}
- Zotero
    - [Zotero Citation](https://omeka.org/s/modules/ZoteroCitations/){target=_blank}: Use Zotero to generate citations and bibliographies.
    - [Zotero Importer](https://omeka.org/s/modules/ZoteroImport){target=_blank}: Import items and files from Zotero user and group libraries.