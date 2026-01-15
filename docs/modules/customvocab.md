# Custom Vocab

The [Custom Vocab module](https://omeka.org/s/modules/CustomVocab){target=_blank} allows you to create a controlled vocabulary with your own entries. As a new [data type](../content/resource-template.md#data-types), you can then add the vocabulary to properties in resource templates. When using the template for an item, the property will load with a dropdown limited to the options of the controlled vocabulary, rather than a text entry box.

For example, you may want to create an institution-specific list of locations that correspond to different collections on your campus, or a controlled list of people or places related to your holdings. This can help reduce typos and name variations, and can allow you to offer [metadata browsing](../modules/metadatabrowse.md) for more fields.

Custom Vocab is available to users who are at the [Editor role and above](../admin/users.md).

## Create a custom vocab

Once you have installed and activated the module, go to the Custom Vocab section in the left-hand navigation, under Modules.

Click the "Add new vocab" button in the upper right-hand corner of the window.

The Add Custom Vocab page has four fields: Label, Language, Vocab Type, and Terms/Items/URI input.

![Add Custom Vocab with data entered in the label and terms fields](../modules/modulesfiles/customVocab-add-URI.png)

- **Label**: A name for the vocabulary, which you will use to find it when adding to a resource template. You may wish to include a reminder in the name of what data type you've chosen in the next field. 
- **Language** (optional): The language of the vocab, using the [ISO 639-1 language code](http://www.iso.org/iso/language_codes){target=_blank}.

You can set the controlled vocabulary terms to a list of entered terms, to a list of existing items, or to a list of external URIs with or without labels:

- **Terms**: a list of plain-text terms, one word or phrase per line. This populates the property as text.
- **Items**: a drop-down of Item Sets in your Omeka S installation. Choosing one of these will create a custom vocab populated by items from that item set. When used, the property is populated as an Omeka Resource, not text.
- **URIs**: a list of URIs with or without labels, one URI per line. To include a label, add a space and the label after the URI (for example, "https://youromekainstall.org/item/1119 Canada"). When used, the property will populate as a link to the external resource.

!!! note
	Note that manually entered terms or URIs do not need to be unique when entered; the module will only retain unique entries when saved. If you are entering identical URIs with different labels, only the final entry will be retained and earlier labels will be ignored.

Hit "Submit" to save changes.

## Manage custom vocabs

Once you have created at least one vocabulary, the Custom Vocab tab will display a table of your existing vocabularies. The table displays the Label, the buttons for edit, delete, and display information (ellipsis), and the Owner or creator of the vocabulary. 

There is also a button to "Import" a vocabulary using a file, in the top right. Note that importing will add a new listing to the table. If you are attempting to update an existing vocabulary in your installation, do not use the "Import from file" button. Update the vocabulary from its entry in the table.

![Custom Vocab tab with two existing vocabularies](../modules/modulesfiles/customVocab_manage.png)

Clicking the ellipsis will show you the language of a vocabulary as well as a full listing of its terms. There are two buttons that allow you to "Export" a vocabulary, which can then be shared with other Omeka installations, or to "Update" the existing vocabulary from a file. Note that Items-type vocabularies cannot be exported or imported, as these vocabularies work as Omeka resources and could not replicated on another site.

![Custom Vocab tab with two existing vocabularies](../modules/modulesfiles/customVocab_updateExport.png)

When editing a custom vocabulary, you can change the label, language, or terms.

## Using a custom vocab

Custom Vocabularies are applied in two ways: 

1. Through [resource templates](../content/resource-template.md).
2. Through [data types](../content/resource-template.md#data-types) on specific properties. 

The first option will ensure all future items created using the resource template will require property values from your custom vocab. It will also affect existing items using the resource template, so that the next time those items are edited the custom vocab will appear. This will **not** affect existing values in those properties. 

The second option can take previously-entered text or URI values on existing items and register them as the options provided by your custom vocab. This will require exact text-string or URI matching. At this time, custom vocabulary made of items will not currently be able to employ data-type conversion. 

### Custom vocabs in templates

Go to the resource templates and either add new or edit an existing template. Once you are editing the template:

1. Add the property to which you want to apply the Custom Vocab.
1. Edit the property.
1. In the drawer which opens on the right, go to the Other options section and find the Data type dropdown.
1. Scroll through the dropdown and select the Custom Vocabulary you want to use.
1. Click set changes at the bottom of the drawer.

Be sure to save your changes.

![Resource Template data being edited with dropdown open to show available vocabularies](../modules/modulesfiles/customVocab_select.png)

When you click the title of a resource template to see its details, the Custom Vocab will show up in the "Data Type" column of the table, in the row of the property to which it is set.

![Resource template "National Park" with the custom vocabulary State applied to Spatial Coverage](../modules/modulesfiles/customVocab_resource.png)

When this resource template is used in an item or item set, the designated properties will always load as a drop down menu with the values from the custom vocabulary.

In this image, the resource template modified earlier is loaded for a new item. See that "Spatial Coverage" has a "select below" message and arrows indicating the property input is a dropdown menu.

![as described](../modules/modulesfiles/customVocab_item1.png)

This image shows the dropdown open, displaying the values from the "US states & territories" vocabulary.

![as described](../modules/modulesfiles/customVocab_item2.png)

### Convert data types

You can also apply custom vocabularies as data types to existing items **and** their existing property values, whether or not they are using any resource template. 

This can be helpful in the case of a CSV Import or other ingest that did not apply the correct data type at the time. Or, in the case where manually-entered values can now be matched to a controlled vocabulary online (perhaps one that your institution has itself published). 

Select multiple items from the item browse page, then choose the batch option "Edit selected" (or "Edit all"). On the next screen, look for the "Convert data type" option in the "Values" section near the bottom of the form. This will allow you to choose a property for all the selected items and apply a data type. 

This data-type setting will apply to all new values entered into that property. Existing content inside this property will also be converted if possible. Text values, if they are an exact match to the entries in a text custom-vocab list, will work. URIs, if they are an exact match to the entries in a URI custom-vocab list, will work. Note that at this time, a custom vocabulary of items will not be able to convert where the same item is entered as a linked resource on the property. 

If you have, for example, plain-text-formatted URI values on your existing items and wish to convert them to a custom vocabulary of URIs, that can be done in a two-stage process. First, convert the items' property values from text to URI; then, convert those URIs into your chosen custom vocabulary. 



