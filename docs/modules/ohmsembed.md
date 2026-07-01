# OHMS Embed

The [OHMS Embed module](https://omeka.org/s/modules/OhmsEmbed/){target=_blank} allows site administrators to add [Oral History Metadata Synchonizer](https://www.oralhistoryonline.org/){target=_blank} objects as media to Omeka S items.

This module will add an OHMS viewer to places where media can be embedded. This allows users to view indexes, transcripts, and/or translations of videos and audio as they play. 

![A public display of an OHMS viewer in an Omeka page. There is a small video above, a transcript on the left, and an index on the right.](modulesfiles/ohmsembed_public.png)

OHMS XML files can be uploaded to Omeka items as media. Without this module, they will appear as attached files available for download. With this module installed and activated, they will render as video/audio displays with transcripts, indexes, etc. 

The OHMS media player can appear on item and media pages. You can place it on site pages with the "Media embed" page block.

Preparing your Omeka installation to receive OHMS files can take some work. This includes some optional steps to enhance the process. Read over the following steps thoroughly before taking any action. This ensures that you can set up your installation correctly based on your specific needs. 

## Create OHMS files

To create OHMS packages with your interviews, you must use the OHMS application available on the [OHMS website](https://www.oralhistoryonline.org/){target=_blank}. This requires requesting a free account and working with the web-based application. 

The OHMS application will output XML files that contain all the information created within that tool. 

OHMS files include a link to the video or audio media present alongside the index and texts. They do **not** include the multimedia file itself. This must be hosted elsewhere. Your hosting options include Youtube, Vimeo, Soundcloud, and other audio/video hosting providers. 

### Host your media in Omeka (optional)

You can host your files inside your Omeka installation as media added to items. You can then provide those file URLs to the OHMS packages you generate. 

This means that you must: 

- create Omeka items by ingesting your media through either manual upload or a bulk-ingest process
- gather the URLs of your media from the Omeka server
- provide those URLs to the OHMS application
- output the XML files to be generated into Omeka
- and then append those XML files to the respective items you already created.

The advantages of this approach include simplicity of self-hosting and keeping control over your intellectual property. You can also use the Linked Data properties, data types, and controlled vocabularies feautres to add media-specific metadata right in Omeka.

Once you upload your audio or video to an item, you will need to locate the direct URL of the file. Go to your item and then click on the media you'd like to use. In the description on the right side of the screen, locate the File Derivatives section. The "Original" link will be what you provide to the OHMS application. You can right-click to copy this URL.

![Right panel of media description focused on the File Derivatives section. It shows the link to the Original file.](modulesfiles/ohmsembed_original.png)

In the OHMS application, use "Host" as the "Media File Host" option. Input the URL for the original file in the Omeka S installation as the "Media URL". 

![Image of the OHMS Metadata Editor screen with a focus on the Media and Technical section. Host is selected from the options. The URL is of an original file in the Media URL property](modulesfiles/ohmsembed_ohms_mediahost.png)

When the oral history package is complete, export your OHMS XML file as usual.

![OHMS Record view with Export XML option available.](../modules/modulesfiles/ohmsembed_ohms_xmlexport.png)

Return to the corresponding Omeka S item and upload the XML file as media. Be sure to make the XML file the primary media on the item.

## Add OHMS files to Omeka

The OHMS Editor produces an XML file. This file contains the metadata, index, and transcript that accompany the oral history. The file must be added to an Omeka S item as media to cause the OHMS viewer to appear. 

Usually, XML is not an allowed media type or file extension in an Omeka S installation. You will have to enable this first. 

### Enable XML uploads

Go to your installation's Settings page, and navigate to the Security section. 

- Add `text/xml` to the **Allowed media types** list.
- Add `xml` to the **Allowed file extensions** list. 

![Security settings view for Allowed media types and Allowed file extensions with XML added to the lists.](../modules/modulesfiles/ohmsembed_xmlsettings.png)

When you are finished, click the "Save" button in the upper right hand corner of the screen.

### Configure metadata extraction (optional)

Using the [Extract Metadata](extractmetadata.md) module, you can populate the metadata fields of your Omeka items with information from the XML files. This includes the title, date, duration, source, and more. 

First, update the Extract Metadata module to version 1.2.0 or later. This adds an OHMS-specific extractor to the available tools. The OHMS extractor tool is actually part of this module and will not appear if OHMS Embed is not installed and activated. 

Navigate to your Modules page. If need be, upgrade and activate it. Then, click the "Configure" button. You will see a list of available extractor tools. This list should include "OHMS". Check the box to ensure it is enabled, then save the page. 

![Extract Metadata module configuration page with "OHMS" available and enabled.](modulesfiles/ohmsembed_extractmetadata.png)

Then, map information from the XML metadata to your Omeka items. To do this, enable "JSON Pointer" on the "Mappers" tab. Then go to the "JSON Pointer crosswalk" tab to configure the metadata fields. You can do this either for the media or for the item. Extracted metadata will be generated as plain text. We recommend you view an example OHMS package to see which fields are used. 

We suggest that you use a resource template for your OHMS files, to help plan your selected metadata fields.

![Extract Metadata module config page showing the "JSON Pointer crosswalk" tab. Multiple OHMS pointers are listed: OHMS "/id" mapped to Dublin Core "Identifier" from the Media, for example.](modulesfiles/ohmsembed_EMcrosswalk.png)

The following is a list of possible pointers generated by the OHMS application. Be sure to include the slash in the Omeka interface.

| Metadata                    | Pointer                     |
|-----------------------------|-----------------------------|
| Interview Date              | `/date`                     |
| Date (Non-preferred format) | `/date_nonpreferred_format` |
| Title                       | `/title`                    |
| Summary                     | `/description`              |
| Subject                     | `/subject`                  |
| Keywords                    | `/keyword`                  |
| Interviewee                 | `/interviewee`              |
| Interviewer                 | `/interviewer`              |
| Language                    | `/language`                 |
| Language for Translation    | `/transcript_alt_lang`      |
| Type                        | `/type`                     |
| Format                      | `/format`                   |
| Rights Statement            | `/rights`                   |
| Usage Statment              | `/usage`                    |
| Accession Number            | `/accession`                |
| Duration                    | `/duration`                 |
| Collection ID               | `/collection_id`            |
| Collection Name             | `/collection_name`          |
| Collection Link             | `/collection_link`          |
| Series ID                   | `/series_id`                |
| Series (Name)               | `/series_name`              |
| Series Link                 | `/series_link`              |
| Organization                | `/repository`               |
| Organization URL            | `/repository_url`           |
| Acknowledgement             | `/funding`                  |
| User Notes                  | `/user_notes`               |
| Media file                  | `/file_name`                |
| Media ID                    | `/media_id`                 |
| Media URL                   | `/media_url`                |
| Media Format                | `/fmt`                      |
| OHMS XML Location           | `/xmllocation`              |
| OHMS XML Filename           | `/xmlfilename`              |
| OHMS version                | `/version`                  |
| CMS Record ID               | `/cms_record_id`            |
| Record ID                   | `/id`                       |
| Record date                 | `/dt`                       |
| Rel                         | `/rel`                      |

### Upload XML files

!!! note
	If you use the [Extract Text](extracttext.md) module, you may wish to deactivate it before you upload an XML file. The contents of these files are not human-readable. You may wish to have the contents of your OHMS texts (transcripts, translations, indexes, etc.) text-searchable in your Omeka site. You can extract the text with this module. However, all the XML code will be visible as metadata on your items and media. You can hide this field by using the [Hide Properties module](https://omeka.org/s/modules/HideProperties/){target=_blank}. This affects this field on all resources. 

You can upload your OHMS XML files individually to items from your computer. Or, you can batch-import OHMS files onto new or existing items using [CSV Import](csvimport.md). 

!!! note
	Omeka S will not be able to generate an item thumbnail from OHMS files. You may wish to add a [custom thumbnail](https://omeka.org/s/docs/user-manual/content/items/#thumbnail). Do this via the Advanced tab of the item-editing interface.

#### Bulk-import OHMS files

If you want to add many OHMS objects to your Omeka S installation at once, use [CSV Import](csvimport.md). You can also use [File Sideload](filesideload.md) to host the XML files for ingest if needed.

Upload the XML files to your hosting service or File Sideload directory. Then, create a spreadsheet that lists the URLs of the files and the metadata you wish to ingest. If you plan to extract all metadata from the XML files, you can provide a column of file URLs.

If you have already created Omeka S items to [host audio/video media](#host-your-media-in-omeka-optional), find a unique Omeka item identifier for attaching the respective files. For example, the internal Omeka ID. Add those IDs to your spreadsheet rows. Then use the CSV Import module to [import media](https://omeka.org/s/docs/user-manual/modules/csvimport/#import-media).

If you do not already have target Omeka items, you can use CSV Import to create new items with your XML files. 

#### Bulk-extract from OHMS files

You do not have to run Extract Metadata and Extract Text at the time of your import. You may wish to disable the modules, import your XML files first, and then bulk-extract text and metadata after. 

Select multiple items on the Items browse page in the admin interface. Choose "Edit selected" from the "Batch actions" dropdown, and then find the "Extract metadata" field in the options list. Select "Refresh and map metadata". Do the same again, find "Extract text" in the list, and select "Refresh text."

![Bulk-refresh and map metadata for oral histories once they are uploaded.](modulesfiles/ohmsembed_EMbatch.png)

## Embed the OHMS viewer

Having added your OHMS XML files to your Omeka S items, you are ready to display them on your sites. 

### OHMS viewer on item and media pages

The OHMS viewer will load on [resource pages (items and media)](../sites/site_theme.md#configure-resource-pages) under two circumstnaces. One is if your theme is set to display the "Media embeds" block on item pages. The other is if it is set to display the "Media render" block on media pages. 

![The resource page config with "Media embeds" at the top of the Items page.](modulesfiles/ohmsembed_itemRes.png)

!!! note
	The Lightbox gallery block does not currently display the OHMS viewer where an OHMS XML file is detected. For OHMS to display, the "Media embeds" or "Media render" block **must** be used. Your site may need some reconfiguration to incorporate this smoothly. This will prevent the inclusion of both the Lightbox and the Media blocks, rendering other media twice. 

### OHMS viewer on site pages

You can use the ["Media embed" page block](https://omeka.org/s/docs/user-manual/sites/site_pages/#media-embed) to place the OHMS viewer directly into site pages. 

![Page editing showing the Media embed block with settings.](modulesfiles/ohmsembed_mediaEmbed.png)

You must select the XML file as the attached media. Do not choose video or audio you may have ingested to the same item. Ensure also that "Embed media" is chosen from the "Media display" dropdown.

![Page view with Media Embed block with OHMS viewer in the first column and sample HTML in the second column](modulesfiles/ohmsembed_public_mediaembed.png)

The OHMS viewer appears as a tall and narrow column if the Layout is set to "Vertical". The full-width OHMS viewer will display if the Layout is set to "Horizontal". 

![Item Show view of Omeka S Item with OHMS viewer](modulesfiles/ohmsembed_public_itemshow.png)

#### Using the OHMS viewer

The Omeka S OHMS viewer has several public controls. One is a toggle between the index and the transcription and/or translation if those elements are available. Another is an information icon that shows the media metadata. The final one is an option to move to a fullscreen view.

![Omeka S OHMS viewer public interface controls showing an index/transcript/translations toggle. It also shows an "i" icon and fullscreen button](../modules/modulesfiles/ohmsembed_public_controllers.png)
