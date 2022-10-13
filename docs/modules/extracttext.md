# Extract Text

The [Extract Text module](https://omeka.org/s/modules/ExtractText) will extract text from files to make them searchable and machine readable. The extracted text will be added to a property called "extracted text" in a vocabulary unique to that module.

When enabled, Extract Text adds a new metadata field, with a textual data type, at the item level and at the media level, with the name "extracted text" and the slug `extracttext:extracted_text`. It is set to public by default on item view pages.

It also adds an "Extract text" tab to each item editing page, where you can refresh or remove extracted text. It adds a batch-editing option to extract or clear text from existing files in your database. When active, it will automatically extract text from files uploaded in [batch imports](../modules/csvimport.md).

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

The extractors required are:

- catdoc, used to extract text from DOC and RTF files.
- docx2txt, used to extract text from DOCX files.
- lynx, used to extract text from HTML files.
- odt2txt, used to extract text from ODT files.
- pdftotext, used to extract text from PDF files.
- filegetcontents, used to extract text from TXT files.

![A table of extractors, as described below. All except docx2txt display with the text Yes in green to the right of the extractor name. Docx2txt displays with a red no.](../modules/modulesfiles/extracttext.png)
