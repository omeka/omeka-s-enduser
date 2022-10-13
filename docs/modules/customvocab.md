# Custom Vocab

The [Custom Vocab module](https://omeka.org/s/modules/CustomVocab) allows you to create a controlled vocabulary and add it to a specific property in a resource template. When using that template for an item, the property will load with a dropdown limited to the options of the controlled vocabulary, rather than a text entry box.

For example, you may want to create an institution-specific list of locations that correspond to different collections on your campus, or a controlled list of people or places related to your holdings. This can help reduce typos and name variations, and can allow you to offer [metadata browsing](../modules/metadatabrowse.md) for more fields.

Custom Vocab is available to users who are at the [Editor role and above](../admin/users.md).

## Create a custom vocab

Once you have installed and activated the module, go to the Custom Vocab section in the left-hand navigation, under Modules.

Click the "Add a New Vocab" button in the upper right-hand corner of the window.

The Add Custom Vocab page has four fields: Label, Language, Vocab Type, and Terms/Items/URI input.

![Add Custom Vocab with data entered in the label and terms fields](../modules/modulesfiles/customVocab-add-URI.png)

- **Label**: A name for the vocabulary, which you will use to find it when adding to a resource template.
- **Language** (optional): The language of the vocab, using the [ISO 639-1 language code](http://www.iso.org/iso/language_codes).

You can set the controlled vocabulary terms to a list of entered terms, to a list of existing items, or to a list of external URIs with or without labels:

- **Terms**: a list of plain-text terms, one word or phrase per line. This populates the property as text.
- **Items**: a drop-down of Item Sets in your Omeka S installation. Choosing one of these will create a custom vocab populated by items from that item set. When used, the property is populated as an Omeka Resource, not text.
- **URIs**: a list of URIs with or without labels, one URI per line. To include a label, add a space and the label after the URI (for example, "https://youromekainstall.org/item/1119 Canada"). When used, the property will populate as a link to the external resource.

Hit "Submit" to save changes.

## Manage custom vocabs

Once you have created at least one vocabulary, the Custom Vocab module tab will display a table of your existing vocabularies. The table displays the **Label**, the buttons for edit, delete, and display information, and the **Owner** or creator of the vocabulary.

![Custom Vocab tab with two existing vocabularies](../modules/modulesfiles/customVocab_manage.png)

When editing a custom vocabulary, you can change the label, language, or terms.

## Using a custom vocab

Custom Vocabularies are applied through [resource templates](../content/resource-template.md).

Go to the Resource Templates and either add new or edit an existing template. Once you are editing the template:

1. Add the property to which you want to apply the Custom Vocab.
1. Edit the property.
1. In the drawer which opens on the right, go to the Other options section and find the Data type dropdown.
1. Scroll through the dropdown and select the Custom Vocabulary you want to use.
1. Click set changes at the bottom of the drawer.

Be sure to save your changes.

![Resource Template data being edited with dropdown open to show available vocabularies](../modules/modulesfiles/customVocab_select.png)

When you click the title of a Resource Template to see its details, the Custom Vocab will show up in the Data Type table heading.

![Resource Template "National Park" with the custom vocabulary State applied to Spatial Coverage](../modules/modulesfiles/customVocab_resource.png)

When this Resource Template is used in an Item or Item Set, the designated properties will always load as a drop down menu with the values from the custom vocabulary.

In this image, the Resource Template modified earlier is loaded for a new item. See that Spatial Coverage has a "select below" message and arrows indicating the property input is a drop down menu.

![as described](../modules/modulesfiles/customVocab_item1.png)

This image shows the dropdown open, displaying the values from the "US states & territories" vocabulary.

![as described](../modules/modulesfiles/customVocab_item2.png)
