# Importing and Exporting

There are numerous methods for importing to, or exporting from, an Omeka S site. Third-party modules may add more functionality; we are only documenting Omeka-team-supported methods here. 

## Importing from another Omeka site

### Importing from Omeka Classic to Omeka S

You can use the [Omeka Classic Importer module](../modules/omekaCimporter.md) to import items & collections from a Classic site. This module only imports items and their metadata (including tags), attached files, and collections (as item sets). It will not import Simple Page content or Exhibit Builder content.

If equivalent plugins/modules are installed on both the source site and the target site, Omeka Classic Importer can import module-specific metadata. For example, geolocation data facilitated by the Mapping module in S and the Geolocation plugin in Classic will automatically be imported. PDF Text elements can be imported and mapped to Extract Text fields.

You cannot currently export from an Omeka S site to a Classic site. 

### Importing from S to S

You can use the [Omeka S Item Importer module](../modules/ositemimporter.md) to import items from one Omeka S installation to another. You cannot import sites and their pages. 

## Importing or exporting resource templates 

https://omeka.org/s/docs/user-manual/content/resource-template/#share-resource-templates

## Importing or exporting custom vocabularies

https://omeka.org/s/docs/user-manual/modules/customvocab/#manage-custom-vocabs

## Importing from non-Omeka platforms

Omeka S has modules for Zotero, Zenodo, Fedora, DSpace, CKAN, Dataverse, and Invenio. 

## Importing from a spreadsheet

Omeka S can take data in any spreadsheet (tabular) form, whether a CSV, an Excel file, or an ODS. Use the CSV Import module to add items, item sets, media, and users to your Omeka S site from a spreadsheet. This includes data exported from many different databases and platforms. 

First, look to see if there a connector or importer module for the platform you are looking to export from. Omeka S has modules for Zotero, Zenodo, Fedora, DSpace, CKAN, Dataverse, and Invenio. 




## Exporting to a spreadsheet

https://github.com/omeka/omeka-s-csv.py