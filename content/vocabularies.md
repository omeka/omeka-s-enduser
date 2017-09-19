---
title: Vocabularies
---

Vocabularies are a collection of published RDF metadata Classes and Properties for describing a Resource. These exist and are created externally to Omeka, and can be imported (with some limitations) into Omeka S for use throughout the Installation. The most-used Vocabulary is Dublin Core Terms (dcterms:).

Global and Site Administrators can manage their installation’s vocabularies from the *Vocabularies* tab on the left hand navigation of the Admin Dashboard. OmekaS comes pre-loaded with the following vocabularies: [Dublin Core](http://purl.org/dc/terms/); [Dublin Core Type](http://purl.org/dc/dcmitype/); [Bibliographic Ontology](http://purl.org/ontology/bibo/); and [Friend of a Friend](http://xmlns.com/foaf/0.1/). 

## Managing vocabularies
The main view of the *Vocabularies* tab in the Admin Dashboard displays the existing vocabularies for the Omeka S install. 

![Main view of vocabularies, with columns for label, prefix, classes, and properties counts and information](/content/contentfiles/vocabularies.png)

Vocabularies are displayed in a table with headings for *Label* (name of vocabulary), *Prefix* (used by the database), *Classes* (number of classes in the vocabulary), and *Properties* (number of properties in the vocabulary). You can sort vocabularies by these columns using the up and down arrows at the right end of each column. 

You can use the icons at the right of the Label field to manage individual vocabularies. The edit icon (pencil) takes you to the edit page for that vocabulary, the delete icon (trash can) opens a sidebar to delete the vocabulary, and the details icon (ellipses) opens a sidebar with information about the vocabulary.

When editing a vocabulary, you can make changes to the *label* and add *comments*. 

### Adding a vocabulary
New vocabularies must be imported from an existing metadata standard source. In order to import a new vocabulary, you must have a vocabulary file (RDF/XML with an .rdf extension).

After specifying the vocabulary file to upload using your browser’s file chooser, enter the follow values for the vocabulary:
- prefix
- namespace uri
- label
- and any comments you have.

Note that you may have to research in order to find the prefix, namespace uri, and label for the vocabulary, as these are not standardized. In addition to the vocabulary's website, you might consult <http://lov.okfn.org/dataset/lov/vocabs>.

### Vocabulary Import
Omeka S will import properly formatted vocabularies/ontologies. rdfs:Class and rdfs:Property data will be available. 

For Web Ontology Language (OWL) data, Omeka S will store only the RDF/S super-Properties and -Classes. Omeka S does not enforce any declaration or inferencing rules from OWL. Thus, for example, an owl:Class is treated in Omeka S like an rdfs:Class.

Similarly, the following are all treated only as rdfs:Property. OWL domains and ranges are also not enforced or stored.

* owl:ObjectProperty 
* owl:DatatypeProperty
* owl:SymmetricProperty
* owl:TransitiveProperty
* owl:FunctionalProperty
* owl:ObjectProperty
* owl:DatatypeProperty
* owl:SymmetricProperty
* owl:TransitiveProperty
* owl:FunctionalProperty
* owl:InverseFunctionalProperty

For example, an imported ontology with an owl:ObjectProperty is not restricted to having objects that are URI’s: Omeka S will accept a Literal value without complaint.

It is up to the person entering metadata to adhere to the standards as best they can.

