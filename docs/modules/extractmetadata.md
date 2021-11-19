---
title: Extract Metadata
---

Once [installed](index.md#installing-modules) and active, the Extract Metadata module allows site administrators to extract embedded metadata from media. 

## Configuring the module

When configuring the module, you can:
+ View and enable/disable extractors: You can choose from four different extractors, including ExifTool, Tika, Exif, and getID3.
+ View and enable/disable mappers: You can either select to enable no mappers or JSON Pointer.
+ Configure the metadata crosswalk for the JSON Pointer mapper (if enabled).If you decided to use the JSON pointer mapper, you will need to define the metadata crosswalk. 

    1. Click _Add map+_. 
    2. Then you will be asked to select the Resource, Extractor, and Property from dropdown menus.
    3. You will also to provide a Pointer formatted using a JSON pointer as defined by the [IETF standard](https://datatracker.ietf.org/doc/html/rfc6901). 
    4. If you would like to replace the metadata values through this pointer, make sure to select the checkbox to the right of these fields.

When you are finished configuring the module, click the Submit button in the upper right corner of the screen.

![Extract Metadata module configuration view with JSON Pointer crosswalk and submit button indicated](../modules/modulesfiles/extractMetadata_config.png)


## Adding media

Once the module is configured it will act on medias as you add it to a an item or as an asset. The module will automatically:

+ Extract metadata from the file using enabled extractors;
+ Save the metadata alongside the media;
+ Map metadata to resource values.

You can view the extracted metadata on the media show and edit pages.

## Editing media and items

A user can edit media metadata attached to items by directly editing the individual item or by using the batch edit functions. 

### Editing Items
When editing a media/item, a user can choose to perform a number of actions, accessed through the Extract Metadata tab on the Item edit view. Select one of the four options from the dropdown menu.

+ Refresh metadata: (re)extract metadata from files;
+ Refresh and map metadata: (re)extract metadata from files and map metadata to resource values;
+ Map metadata: Map extracted metadata to resource values;
+ Delete metadata: Delete extracted metadata.

![Item edit view with the Extract metadata tab active and the actions dropdown menu open](../modules/modulesfiles/extractMetadata_actions.png)

Be sure to click the "Save" button in the top right corner of the screen to execute the selected action.

### Batch Editing

From the Items Browse screen, selecting the items you'd like to batch edit. From the batch edit page, you can select any of the four action options from the Extract metadata dropdown menu. This will perform the action on all items selected for inclusion in the batch edit. 

![Batch edit view with Extract metadata dropdown open](../modules/modulesfiles/extractMetadata_batchEdit.png)


## Extractors

Extractors extract metadata from files. Note that extractors must be enabled on the module configuration page. This module comes with four extractors, but more can be added depending on your need.

### ExifTool

Used to extract many types of metadata from many types of files. Requires the [ExifTool](https://exiftool.org/) command-line application.

### Exif

Used to extract EXIF metadata that is commonly found in JPEG and TIFF files. Requires PHP's [exif](https://www.php.net/manual/en/book.exif.php) extension.

### getID3

Used to extract many types of metadata from many types of files. Uses the [getID3](https://github.com/JamesHeinrich/getID3) PHP library, which comes withthis module.
 
### Tika

Used to extract many types of metadata from many types of files. Requires the [Apache Tika](https://tika.apache.org/) content analysis toolkit. Java must be installed and the path to the `tika-app-*.jar` file must be configured in `config/module.config.php` under `[extract_metadata_extractor_config][tika][jar_path]`.

## Mappers

Mappers map extracted metadata to resource values. Note that a mapper must be enabled on the module configuration page. This module comes with one mapper, but more can be added depending on your need.

### JSON Pointer

Used to map metadata to resource values using [JSON pointers](https://datatracker.ietf.org/doc/html/rfc6901). You must define your own metadata crosswalk in the module configuration page under "JSON Pointer crosswalk".

One common example is to map a JPEG file's creation date to Dublin Core's "Date Created" property:
+ Resource: [Media or Item]
+ Extractor: "Exif"
+ Pointer: `/EXIF/DateTimeOriginal`
+ Property: "Dublin Core : Date Created"
+ Replace values: [checked or unchecked]

Note that the pointer points to the DateTimeOriginal value in the Exif metadata output, which you can view in a JPEG media's "Extract metadata" section. Once you've saved this map, perform the "Map metadata" action as described above and, if your JPEG file includes DateTimeOriginal, the media/item should now have a "Date Created" value.
