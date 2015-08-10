Omeka S will import propertly formatted vocabularies/ontologies. rdfs:Class and rdfs:Property data will be available. 

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

For example, an imported ontology with an owl:ObjectProperty is not restricted to having objects that are URI's: Omeka S will accept a Literal value without complaint.

It is up to the person entering metadata to adhere to the standards as best they can.







