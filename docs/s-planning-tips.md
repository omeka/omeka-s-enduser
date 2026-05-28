# Planning Tips

## The basics

An Omeka S installation comes with several page types ready to share:

- When you add a new site you can choose an installed theme right away. You can also allow it to use the "Default" theme. 
- The navigation of your first S site will come loaded with a "Browse" page. This page is for exploring items. You can also quickly add the pre-installed "Welcome" page. This page showcases some text formatting styles. 
- Once you add your first item, you will be able to view the "[item view page](content/items.md#public-views-for-items)". Customize this from the "Configure resource pages" button on the "Theme" tab. There is a separate page layout for viewing media attached to items.
- When sorting items into item sets, you can add a "Browse item sets" page to your navigation. You can customize a similar "item set view" page. 
- These resource pages have pre-configured blocks tied to the theme you choose. Most themes will by default display: 
	- for items: a full-size embedding of the media, the item's metadata, a list of item sets and site pages where the item appears, and a list of the item's media with small thumbnails;
	- for media: a full-size rendering of the media and the media's metadata; 
	- for item sets: the item set's metadata and a browsing grid or list of the set's contents.
- The pages for browsing items and items sets each link to [an Advanced Search form](search.md#public-views). So does the search bar at the top of your site.

In Omeka S, you build your [sites](sites/index.md) page by page. You do this using resources you've added to your installation. You should begin planning your site before you start adding resources. We suggest experimenting with only a few sample items and item sets at first.

Below are some questions and ideas to help guide you as you plan your Omeka S sites.

## Site audience and goals

**Who is the primary audience of this site?** Being specific will help you shape the site. "People interested in historic architecture" is more useful than "the general public." Do you have secondary audiences? What do you want these specific audiences to accomplish when using the site?

**What are the goals of your site?** What do you want your specific audiences to accomplish when using the site? What do you want people to take away from the site? What content do you want to highlight?

## Resources

**What will you do with items in this website?**
[Items](content/items.md) are the building blocks of Omeka S. What [resource templates](content/resource-template.md) will you want to create and use to describe your items? Any item you include on an Omeka S will have a public item show page. Try to ensure that the information in an item's metadata can stand on its own. 

**What will you do with item sets?**
You can use [item sets](content/item-sets.md) to group items to be included on a [site](sites/index.md). This can guide visitors' browsing on your sites. For some sites, item sets are robust resources themselves.

How do you want to group items into sets? What metadata fields will your item sets use? Do your item sets have relations to each other or to items?

**What do you want your data to do?**
What properties are you going to want to describe in your site? Do you want some of these to display with a different label? For example, 'author' instead of 'creator' for books? Use a [resource template](content/resource-template.md) and change the label of the property.

In Omeka S, items and item sets can use other resources - items, item sets, and media - as properties. For example, you can make an item for William Shakespeare. Then, you can use that item fill the 'creator' property for a 'Hamlet' item. How can your resources use this functionality?

Do you want to use a set of terms (controlled vocabulary) for certain items? You might want to use [Custom Vocab](modules/customvocab.md). Want to use a terms list created by the Library of Congress or the Getty? Then you might use [Value Suggest](modules/valuesuggest.md).

## Building a site
With Omeka S, you can built your sites from scratch. Or, quickly set up our in-built pages. It's also easy to use multiple sites to accomplish your goals. 

**What pages do you want to include?** What kind of content do you want on these pages? How do you want to arrange them? Try sketching out a sample menu or wireframes for the site. Look at example sites by other organizations or people. Use those as guides as you build your pages.

Pages consist of movable [blocks](sites/site_pages.md#page-blocks). These blocks include text, images, and much more. What kind of content do you want on the pages you build? How do you want people to access and interpret your collections?

**How do you want to interact with your visitors on your site?** Do you want to [collect](modules/collecting.md) resources from your visitors? Allow them to [share](modules/sharing.md) your content on social media? 

Will you allow [users to create accounts](admin/users.md) on your site? Will you let them add their own items, metadata, or exhibits?

## Suggested modules
The Omeka Team and our community of open-source developers have created hundreds of modules. These modules extend the Omeka S core. Below are suggested collections of modules for specific kinds of projects:

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
    - Other importers connect to DSpace, Fedora, Dataverse, Invenio, Zenodo, Zotero, or from existing Omeka collections.
- Increasing discoverability
    - [Mapping](https://omeka.org/s/modules/Mapping/){target=_blank}: Geolocate your items to one or more mapped locations.
    - [Sharing](https://omeka.org/s/modules/Sharing/){target=_blank}: Offer OpenGraph metadata, so your Omeka S links display on social media.
    - [Resource Meta](https://omeka.org/s/modules/ResourceMeta/){target=_blank}: Make your resources' metadata machine-readable.
    - [Persistent Identifiers](https://omeka.org/s/modules/PersistentIdentifiers/){target=_blank}: Create/import/assign DOIs or ARKs to items.
    - [IIIF Presentation](https://omeka.org/s/modules/IiifPresentation/){target=_blank}: Offer your resources using the IIIF Presentation API.
- Displaying resources
    - [Faceted Browse](https://omeka.org/s/modules/FacetedBrowse/){target=_blank}: Add more fine-grained browsing tools to your collections.
    - [Metadata Browse](https://omeka.org/s/modules/MetadataBrowse/){target=_blank}: Browse resources that share the same metadata.
    - [URI Dereferencer](https://omeka.org/s/modules/UriDereferencer/){target=_blank}: Display authority control metadata from external URIs. 

In addition to these basic groups of modules, other types of functionality include:

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
    - [Mapping](https://omeka.org/s/modules/Mapping/){target=_blank}: Geolocate your items to one or more mapped locations. This module includes a timeline for displaying items chronologically.

### Community sourcing

- Public contributions
    - [Collecting](https://omeka.org/s/modules/Collecting/){target=_blank}: Add collecting forms to your sites. Integrates with Mapping, Numeric Data Types, Custom Vocab, Value Suggest.
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
