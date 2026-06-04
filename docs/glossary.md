# Glossary

The following glossary should help to clarify some of the less-familiar terms in Omeka S. Where appropriate, we have provided a roughly analogous term from Omeka Classic, although some analogies are stronger than others. 

## **Class**: 
A kind of Resource, as defined by a Vocabulary. Often, Vocabularies expect particular Properties to be used with particular Classes. For example, a `foaf:Person` would not have a `dcterms:publisher` Property, but could be expected to have a `foaf:familyName` Property.  

*Omeka Classic analogy*: Item Type.

## **File**: 

Data uploaded to an Omeka S installation and associated directly with an Item (see also: Media).    

*Omeka Classic analogy*: File (but the analogy is weak).

## **Global Admin**: 
An administrator who controls everything, and is typically the person who created the Installation.  

*Omeka Classic analogy*: Superuser.

## **Installation**: 
An instance of Omeka S. Sometimes, a central IT department of an institution does the process of setting up and maintaining the installation and its modules for others to use. In other cases, an installation only has one administrator and maintainer as well as logged-in user. 

In Omeka Classic, one installation of Classic would equal one site, with browse pages and search functions; each Classic site can have many exhibits. In Omeka S, the main difference is that an installation doesn't necessarily have a default site; it can have many sites. Every site stands on its own with separate branding, browse pages, search pages, and as many exhibits as desired. A common use is for each "site" to be its own exhibit. 

## **Item**: 
The records used to build an Omeka S Site. Items are shared and available to any Site in an Installation, unless explicitly excluded from sharing.  

*Omeka Classic analogy*: Item.

## **Item Set**: 
An aggregation of Items. Items can belong to any number of Item Sets.  

*Omeka Classic analogy*: Collection; Items with the same tag.

## **Mapping**:

Omeka S uses the term "mapping" in two ways. One refers to our [Mapping module](modules/mapping.md), which offers geolocation utilities to pin items and other resources to browseable maps. In Omeka Classic, the analogous plugin to the Mapping module is called "Geolocation". 

The other is a meaning from the world of metadata, where "mapping" means to take one metadata field and map it to another. A similar term is "crosswalking" - one might build a crosswalk between Dublin Core and MODS, for example, transferring data from the `Title` field of Dublin Core to the `titleInfo` field of MODS. When importing information from spreadsheets or from other databases, the fields used in the remote resources will need to be mapped to the fields you wish to use in your Omeka installation. You can also think of this as migrating or converting metadata. 


## **Media**: 
Added to an Item, media contributes the "content" to an item's description (its metadata). Typically, "media" refers to a File of any type, but could also refer to an attachment of plain or HTML-formatted text, external data sources such as a YouTube video, Slideshare deck, DSpace bitstream, etc. An item can have infinite Media, while Media only exist as attached to one item. (See "Assets" if you need files not attached to items, such as site logos and banners.) 

*Omeka Classic analogy*: File.

## **Module**: 
An add-on to your Omeka S installation which extends the functionality of Omeka S. Modules can add options to data entry and interaction on the back end and add new features to your sites.  

*Omeka Classic analogy*: Plugin.

## **Property**: 
A defined — to one degree or another — kind of metadata used to describe a Resource. The most common is dcterms:title, for the written, human-readable title of an Item. The Values for Properties can be written language intended for humans or other sentient beings to read (‘Literals’), Resources (understood here as internal to an Omeka S installation), or External URIs (e.g., a URI to a DBpedia resource page).  

*Omeka Classic analogy*: Element.

## **Resource**: 
Generally, a term to mean items, media, and item sets. Does not include assets. A resource can have metadata description (properties and values), a resource class, and use a template. Resources can be displayed in different ways on each site, using the "Configure resource pages" settings contained within each active theme. 

## **Resource Template**: 
A set of pre-defined Properties, and optionally a Class, to use to guide Item creation and interpretation of Properties. Typical usage is to create a template for, e.g., a `foaf:Person` that makes Items using that template show the inputs for the expected or desired `foaf: properties`, and sets the Class of the Item to `foaf:Person`. 

*Omeka Classic analogy*: Item Type (but the analogy is weak).

## **Site Admin**: 
An administrator of a single Site within an Omeka S Installation.  

*Omeka Classic analogy*: Superuser role.

## **Value**: 
The actual data that fills out the Resource-Property-Value triple. If the property is `dcterms:title`, a reasonable Value might be "Heart of Darkness". Literal Values might also have information about the language in which that Value is expressed attached. Values can also be Resources or URIs to external data (preferably URIs that return RDF data, but I don’t think we’re going to enforce that).   

*Omeka Classic analogy*: Element Text.

## **Vocabulary**: 
A collection of published RDF metadata Classes and Properties for describing a Resource. These exist and are created externally to Omeka, and can be imported (with some limitations) into Omeka S for use throughout the Installation. The most-used Vocabulary is Dublin Core Terms (`dcterms:`).  

*Omeka Classic analogy*: Element Set.