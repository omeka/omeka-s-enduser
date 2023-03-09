# URI Dereferencer

The [URI Dereferencer module](https://omeka.org/s/modules/UriDereferencer/){target=_blank} allows pages to dynamically display data from the source of many URIs on Omeka item, media, and item set pages. 

This module has no configuration settings and adds no functions to the administrative dashboard. It appears on the front-end, on recognizable URIs from built-in [linked data services](#linked-data-services), on any resource view where a URI has been input as a metadata value.

![Two URIs in the Creator field with [+] toggle links beside them.](modulesfiles/uri-display.png)

This module looks up URIs on the page and provides users a snapshot of linked data without having to navigate away from the page. It will automatically dereference all "URI" data type values that match a registered service. URIs recognized will display with a "[+]" link next to them, which can be clicked to expand information found at the source. When expanded, the links will change to "[-]". The snapshot of external metadata loads below the URI.

![URI entries on the Item edit page.](modulesfiles/uri-entry.png)

These toggle buttons will load with the class `uri-dereferencer-toggle` and can be styled using the [CSS Editor module](../csseditor.md) or with externally-hosted stylesheets. When expanded, the external metadata will load inside a `div` with the class `uri-dereferencer-markup` and from there into a `dl` description list. Properties will appear as `dt` and values as `dd`. 

![The same URI entries displayed on the Item view page, expanded to show the information from one of the URIs.](modulesfiles/uri-expanded.png)

The number of dereferenced metadata values, and which ones, are determined by the service and its own data type, and cannot be set in Omeka. You should test the services and data types before deciding if you wish to use these URIs and allow users to see the dereferenced metadata. This module does not allow you to include or exclude specific properties from being dereferenced.

If you have [custom data type values](../modules/customvocab.md) and wish them to be dereferenceable, you must add the class `uri-value-link` to the anchor tag containing the URI.

## Linked data services

Linked data services are JavaScript objects that are responsible for dereferencing URIs and returning information about the resource. This module comes with a handful of services built in:

- [DBpedia](https://wiki.dbpedia.org/){target=_blank}
- [Geonames](https://www.geonames.org/){target=_blank}
- [Getty Vocabularies](https://www.getty.edu/research/tools/vocabularies/){target=_blank}
- [LC Linked Data Service](http://id.loc.gov/){target=_blank}
- [OCLC VIAF](https://www.oclc.org/en/viaf.html){target=_blank}
- [OCLC FAST](http://fast.oclc.org/){target=_blank}
- [RDA Value Vocabularies](http://www.rdaregistry.info/termList/){target=_blank}
- [Wikidata](https://www.wikidata.org/wiki/Wikidata:Main_Page){target=_blank}
- [Gemeentegeschiedenis](https://www.gemeentegeschiedenis.nl/){target=_blank}.

To learn about adding other services, view the [Readme](https://omeka.org/s/modules/UriDereferencer/){target=_blank}.