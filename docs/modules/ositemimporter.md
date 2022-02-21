# Omeka S Item Importer

This module makes it possible to import items from one Omeka S installation into another Omeka S installation.

## Prepare for your import

To minimize data loss, the recieving installation must be prepared to accept the data from the providing installation. 

Vocabularies
Data Types
     NumericDataTypes
     Custom Vocab
     Value Suggest
Resource Templates

## Add an Import

Remote Configuration
- Root endpoint
- Query
- Key Identity
- Key Credential

Local Configuration
- Import Label
- Item set
- Exclude Media
- Exclude item sets
- Keep removed resources
- Add remote site URL
- Add remote resource URL

Submit

## Manage Import
Mapping area
Import actions area
Import metadata (Displays the configuration choices for the import)

### Snapshot [Import actions]

Status: [n/a]; In progress; Error; Complete 
Last complete: Date stamp

Click Take snapshot. Might take a while.
Refresh Status
View job

### Map Data
Once a snapshot has been successfully taken, prepare the import by mapping the data from the remote installation to the parameters available in the local installation, using the tabs in the mapping table:

- Resources:
- Data types:
- Templates:
- Media ingesters:
- Properties:
- Classes:

Submit

## Import [Import actions]
Status:
Last complete:

Import snapshot. Might take a while
Refresh Status
View job
View Items
View media
View item sets



