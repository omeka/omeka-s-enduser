# Glossary

The following glossary should help to clarify some of the less-familiar terms in Omeka S. Where appropriate, we have provided a roughly analogous term from Omeka Classic, although some analogies are stronger than others. 


**Class**: A kind of Resource, as defined by a Vocabulary. Often, Vocabularies expect particular Properties to be used with particular Classes. For example, a `foaf:Person` would not have a `dcterms:publisher` Property, but could be expected to have a `foaf:familyName` Property.  
*Omeka Classic analogy*: Item Type

**File**: Data uploaded to an Omeka S installation and associated directly with an Item (see also: Media).    
*Omeka Classic analogy*: File (but the analogy is weak)

**Global Admin**: An administrator who controls everything, and is typically the person who created the Installation.  
*Omeka Classic analogy*: Superuser

**Installation**: An instance of Omeka S. Typically, a central IT department of an institution does the process of installing, and probably also creates sites for others.

**Item**: The records used to build an Omeka S Site. Items are shared and available to any Site in an Installation, unless explicitly excluded from sharing.  
*Omeka Classic analogy*: Item

**Item Set**: An aggregation of Items. Items can belong to any number of Item Sets.  
*Omeka Classic analogy*: Collection, Items with the same tag

**Media**: Additional representations or descriptions of an Item, beyond metadata from vocabularies. Typically, this refers to a File (of any type, including, e.g., text or HTML snippets), but could also refer to external data sources such as a YouTube video, Slideshare deck, Dspace bitstream, etc.  
    - *Omeka Classic analogy*: File (but the analogy the weak)

**Property**: A defined — to one degree or another — kind of metadata used to describe a Resource. The most common is dcterms:title, for the written, human-readable title of an Item. The Values for Properties can be written language intended for humans or other sentient beings to read (‘Literals’), Resources (understood here as internal to an Omeka S Installation), or External URIs (e.g., a URI to a DBpedia resource page).  
*Omeka Classic analogy*: Element

**Resource Template**: A set of pre-defined Properties, and optionally a Class, to use to guide Item creation and interpretation of Properties. Typical usage is to create a template for, e.g., a `foaf:Person` that makes Items using that template show the inputs for the expected or desired `foaf: properties`, and sets the Class of the Item to `foaf:Person`.  
*Omeka Classic analogy*: Item Type (but the analogy is weak) cf. Class

**Site Admin**: An administrator of a single Site within an Omeka S Installation.  
*Omeka Classic analogy*: Superuser role

**Value**: The actual data that fills out the Resource-Property-Value triple. If the property is 'dcterms:title', a reasonable Value might be “Heart of Darkness”. Literal Values might also have information about the language in which that Value is expressed attached. Values can also be Resources or URIs to external data (preferably URIs that return RDF data, but I don’t think we’re going to enforce that).   
*Omeka Classic analogy*: Element Text

**Vocabulary**: A collection of published RDF metadata Classes and Properties for describing a Resource. These exist and are created externally to Omeka, and can be imported (with some limitations) into Omeka S for use throughout the Installation. The most-used Vocabulary is Dublin Core Terms (dcterms:).  
*Omeka Classic analogy*: Element Set
