# Extract Text

The [Extract Text module](https://omeka.org/s/modules/ExtractText){target=_blank} will extract text from files to make them searchable and machine readable. The extracted text will be added to a property called "extracted text" in a vocabulary unique to that module.

When enabled, Extract Text adds a new metadata field, with a textual data type, at both the item level and at the media level, with the name "extracted text" and the slug `extracttext:extracted_text`. It is set to public by default on item view pages.

It adds an "Extract text" tab to each item editing page, where you can refresh or remove extracted text. It also adds a batch-editing option to extract or clear text from existing files in your database. When active, it will automatically extract text from files uploaded in [CSV Import](../modules/csvimport.md).

When the module is deactivated, items with text in the "extracted text" fields will not be changed; the field will still display.

If you have more than one file attached to one item, the cumulative extracted text will appear in one single field at the item level, in the order that the files are added. New files will have their extracted text appended to the end of the field.

## System requirements

Potential supported file formats for this module are:

- doc
- docx
- html
- odt
- pdf
- rtf
- txt.

You must have the necessary extractors available on your server for the module to run for these filetypes. To see which filetypes will run on your installation, go to the "Extract Text" entry under Modules, and click the "Configure" button. This will load a table showing you which extractors are available on your server.

## Configuration

![The configuration page showing most extractors available, Tesseract running in the background, and two extractors disabled.](../modules/modulesfiles/extracttext_configure.png)

On this page you can view which extractors are installed, active, and running in the background. You can enable or disable specific extractors, and configure them to run as background jobs only, which can be more efficient on your server. Tesseract runs in the background only as it can be very processing-heavy. 

The extractors required are:

- catdoc, used to extract text from DOC and RTF files.
- docx2txt, used to extract text from DOCX files.
- lynx, used to extract text from HTML files.
- odt2txt, used to extract text from ODT files.
- pdftotext, used to extract text from PDF files.
- filegetcontents, used to extract text from TXT files.
- tesseract, used to recognize text characters from image files. 

## Extracting text from media

To extract text from media, you can choose several actions:
- Manually extract text from one media, when the media is uploaded, or later on its media editing tab
- Manually extract text from all media associated with one item, on its item editing tab
- Batch-extract text from all media associated with several items, from the batch-editing page
- Batch-extract text from a CSV Import containing media uploads.

Extract Text is configured to run automatically when a new piece of media is uploaded anywhere, whether via a CSV Import or by uploading one or more pieces of media to an item. You can manually erase or re-run extracted text by editing the item or media. 

![An item in editing mode, showing the extracttext:extracted_text field with contents.](../modules/modulesfiles/extracttext_item_view.png)

To change the automatic output, navigate to the "Extract Text" tab on an item or on a specific piece of media.

![An item in editing mode, on the Extract Text tab, showing the options to clear or refresh text.](../modules/modulesfiles/extracttext_item_edit.png)

You can clear (erase) all of the recognized text currently in the extracttext:extracted_text field, or you can refresh it. At the item level, this will extract fresh text from all of the item's media, in order, and output it all to the field as one value. 

At the media level, this will erase or refresh only the text from that piece of media. The updated text will appear in the item metadata in order of the media files. 

When "Refresh text" is selected, the extractor will run in the foreground, which could take a few minutes. The page will refresh itself when the extraction is completed. 

When "Refresh text (background)" is selected, all extractors will run including any extractor set to run in the background only (including Tesseract). This will result in a job appearing in the "Jobs" tab on the left-hand side. Go there to check for completion or errors. 

### Batch editing

You can clear or refresh text from more than one item at a time (or more than one media, selected manually). Extract Text appears as a new field on the batch-edit screen. This will function as a foreground job only, and you must wait for the operation to complete. Background extractors will not run from a batch-edit operation.

![A batch-edit screen with three items selected, showing the options to clear or refresh text.](../modules/modulesfiles/extracttext_batchedit.png)

## Languages

Extract Text is configured to recognize English text by default. 





