# Media

Omeka S accepts most files and file types, and can be customized to accept or reject file types of your choice. You may wish to format your multimedia files according to what can best be embedded and streamed in modern browsers; see the [Media file types section at the end of this page](#media-file-types). If you are having difficulty or are seeing file-validation errors, you can adjust the accepted file types and extensions in the [Allowed media and files options of the Security Settings](../admin/settings.md#security).

Media are only created by adding them to an item; media cannot exist independently. If you wish to upload files unattached to items, such as logos and banners, see the [Assets page](../admin/assets.md).

To view the media associated with an item, click on the media’s name in the right-hand sidebar on the item view page.

To view all media in the installation, navigate to the **Items** section first. Then click on the **Media** subsection that appears below Items in the left-hand navigation.

## Media permissions

When a user attaches a media to an item, they become the "owner" of that media. Most user levels have the ability to create media, and can always delete their own media. Only higher levels can delete media that others own.

| Category | Permission | Global Admin | Supervisor | Editor | Reviewer | Author | Researcher |
|-----|-----|---|---|---|---|---|---|
| Items & media | Add | Yes | Yes | Yes | Yes | Yes | No |
| | Edit | All | All | All | All | Their own | No |
| | Delete | All | All | All | Their own | Their own | No |
| Value annotations | Add/Edit | Yes | Yes | Yes | Yes | Yes | No |
| Private objects | View | Yes | Yes | Yes | Yes | No | No |

Media ownership is not automatically the same as the attached item's ownership. A media's owner can be changed by a Global Admin or Supervisor on the media's Advanced tab.

Note that when you change a user's role, for example from an Author to a Researcher, they will still own the media they created when they had permission to do so. Deleting a user orphans their media - they will appear as having no owner.

## View media
To browse media, first click on Items in the left-hand navigation. In that sidebar, an option for Media will appear under the Item button (you may have to click on the triangle to expand the menu below Items).

![The Resources section of the navigation, with light blue text on a dark blue background. Below the option for items, indented, is a navigation option for Media. It has no representative icon, unlike the other options.](contentfiles/media-browsenav.png)

Media are displayed in a table. Each media is a row, with columns for:

- a checkbox to select the media
- the **Title**
- icons to **edit** (pencil), **delete** (trash can), or see **details** (ellipsis)
- the media's **Class**
- the media's **Owner**
- and the date the media was **Created**.

![The browse media table displaying 5 items. All of the media have titles that are mediawiki URLs, and all are owned by the user Megan.](contentfiles/media_browse.png)

Options for navigating and creating items display above the table of items:

- On the left side is a display for the number of pages of media, with forward and back arrows. The current page number is an editable field - enter any valid page number and hit return/enter on your keyboard to go to that page.
- In the center top is a button for [Advanced Search](../search.md#media-advanced-search).
- Just above the table on the right are options for sorting media, with two dropdown menus. The first lets you select between **Title**, **Class**, **Owner**, **(date) Created**, and **Size**; the second allows you to sort ascending or descending. To apply, click the "Sort" button.

Clicking on the title of any media will take you to its metadata page. This page displays any metadata in the main work area, with a sidebar on the right listing the visibility, associated item (an active link), date created, MIME type, Size, Ingester, Source, and links to the file derivatives.

![Media view page for a mediawiki file. The image is of a grup of people in late 19th century clothing, from left to right a a women standing and facing a standing man holding a small child while reaching out to the woman, with another man standing and smiling behind the man with the child. On the right hand side of the image is the database information for the media](../content/contentfiles/media_view.png)

## Add media to an item

Media can only be added via an [item](../content/items.md). Options for adding media to your items include uploading a file, or directly attaching content by:

- URL, 
- [oEmbed](https://oembed.com/){target=_blank},
- YouTube URL,
- an [IIIF image](https://iiif.io/api/image/3.0/){target=_blank} by URL,
- an [IIIF presentation](https://iiif.io/api/presentation/3.0/){target=_blank} by URL,
- or by writing HTML using the HTML editor.

To learn more about oEmbed, [see the information about using the oEmbed page block in your site pages](../sites/site_pages.md#oembed). 

To learn more about IIIF, [see the information about using the IIIF page blocks in your site pages](../sites/site_pages.md#iiif-image).

### Describe your media 

At the media adding stage, the only metadata that can be entered is a Title. If you wish to further describe each file, you can edit it after it has been uploaded. If you do not supply a title, the original filename will appear as the media title. Note that the media's actual filename will have changed when uploaded into Omeka S; this filename retained as the title is just for your reference, and can be changed at any time.

You can upload multiple files at once, add multiple types of media at once, or add more media each time you save. They will appear in the order they were uploaded.

You can drag and drop media into the order of your choice, while adding or after they have been added. On the item edit screen, click the "Media" tab and use the horizontal bars at the left of each file to move files up and down in the list.

### Primary media

You can select one file to be the **primary media** of the item. To do so, go to the item edit screen, select the "Media" tab, and use the radio button that appears to the right of each file title to select one file.

![An item being edited, on the Media tab, with multiple files showing. The first file, a PDF, is shown as being the current primary media.](../content/contentfiles/media_primary.png)

This will cause your chosen primary media to:

- become the item thumbnail (if a thumbnail has not been manually selected on the Advanced tab), and
- appear as the main media in slideshows, showcases, and other page blocks where the item has been added.

It will not change the order of the files when displayed on admin or public pages. For example, selecting the last file as the primary media will not influence the order of files in the gallery viewer on the item's public page.

By default, the first media uploaded (at the top of the list) is the primary media. If your chosen primary media is deleted, the item will default back to the file at the top of the list as the primary media.

### Media thumbnails

Thumbnails are automatically created for many file types. Thumbnail creation relies on the ability of your [chosen thumbnail utility](../configuration.md#thumbnails) (the default being ImageMagick) and which file types it can process. Look up the utility you are using (such as ImageMagick, Imagick, or GD) to find out which file types it supports.

If you wish your item to have a generic thumbnail (such as an icon of a book, or a musical note for an audio file), you can upload those default images as [assets](../admin/assets.md), then attach them manually to files using the [Advanced tab in the Item editing screen](../content/items.md#advanced).

Thumbnails selected through the Advanced tab of an item edit screen (from an installation's Assets collection) will override any other thumbnails that have been generated for the item from its media.

### File sizes

Omeka S imposes no file size limitations. Your server, however, may have restrictions on file upload sizes or speeds that may be causing problems. These limitations vary from server to server and we cannot change this for you. If you have a problem uploading media, please first check with your hosting service or your local server administrator.

To manage your Omeka S installation's media based on size, you can view the Media tab and sort your files by "Size" and "Descending". This will put largest files at the top of the table; file sizes are given in bytes. This can help you identify resources for external hosting or derivative reformatting, depending on your storage needs. 

![The Media tab, with largest files at the top of the table.](contentfiles/media_sizes.png)


## Edit media metadata

To edit existing media, you can:

- Go to the Media browse page and click the pencil/edit icon for the media's row
- Go to the Media browse page, click on the title to view the media's metadata, then click the "Edit media" button in the upper right hand corner
- Click on the media's name in the right-hand sidebar of an item's page to go to the media's metadata, then click on "Edit media" from there.

Automatically generated metadata, such as source, date created, and part of item, cannot be edited.

Editing media is very similar to editing [items](../content/items.md) or [item sets](../content/item-sets.md).

![Edit media page, with no properties loaded](../content/contentfiles/media_edit.png)

Use the **make public/private** button (eye icon) to set whether the media is visible to the public or only to users of the Omeka S install.

Media is public: ![make public button showing an eye icon](../content/contentfiles/item_public.png){style="display:inline;"}

Media is private: ![make private button showing an eye icon with a diagonal slash through it](../content/contentfiles/item_private.png){style="display:inline;"}

Note that if an item is private, all the media attached is private, but an item that is public can have attached media which are set to be either public or private.

### Values

If desired, you can select a resource template from the drop-down menu. Resource templates are defined by site administrators and editors.

- If using a resource template, the media class should automatically load.
- If not using a resource template, you may select a class from the dropdown menu (these are populated from the [Vocabularies](vocabularies.md) in your installation).

Add information to the properties that load. If you do not select a resource template or class, no other fields will load automatically.

Whether or not you use a resource template, you can add more properties to the item using the drawer on the right side of the screen. You can simply open one of the vocabularies (Dublin Core, Bibliographic Ontology, etc.) and click on the property you want to add, or you can use the "Filter properties" box to search for a specific property (this is helpful when you have multiple large vocabularies).

Clicking on the property label in the drawer will automatically add it to the item. If you add a property by accident, leave it blank and it will be removed from the item when you save your changes.

You may add text, a resource from the installation, or an external link in each field.  

Note that if you add the property `dcterms:title`, its contents will replace the autogenerated title of the media. This is useful if dealing with URL or media uploads with auto-generated names.  

You can set individual properties as **private or public** using the eye icon for each property. Note that properties set to private are still visible to Global Admins, Site Admins, and Editors. Authors will be able to see all properties on items they own, but will not see private properties created by other users.

In the image below, the first property (Title) is public as indicated by the open eye icon. The second property (Description) is private as indicated by the slashed-through eye icon. Clicking or hitting enter on the eye icon toggles between public and private.

![Individual properties have a red eye icon to the right to allow you to toggle visibility - a red arrow points to the icon](contentfiles/items_propviz.png)

#### Text
Text fields allow for unformatted text entry.

You can indicate the language for the content of an input using the globe symbol above the input (see the red arrow in the image below). Click on the globe icon to activate a text field, then enter the [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes){target=_blank} code for the language in which the text is written.

![Red arrow points to the globe icon and a text entry field highlighted in blue](contentfiles/items_lang.png)

#### Omeka resource

Omeka resource fields create an internal link between the resource you are creating and the resource that fills that field.

You have the option to use either an item or an item set. Choosing a resource type will open a side drawer where you can browse all of those resources in the installation. You can use the search function at the top of the drawer to narrow down the list or to quickly find a specific item or item set.

If you are using an Item resource for the property, you will have additional options for finding the item you want in the drawer. Open these options by clicking the triangle button next to the phrase "Filter search".

This will open a menu below the button with the following options to filter the items in the drawer:

- Filter by class: a dropdown where you can select any class provided by the vocabularies on the installation.
- Filter by item set: a dropdown where you can limit the items displayed in the drawer to only those associated with a particular item set.
- Filter by item ID: a search field where you can input the ID of the item you want to use. You can find an item's ID in the url of its edit page; if you are editing the item and the URL is `admin/item/11547/edit` then the item's ID is 11547.

![options as above described](contentfiles/items_addresItem.png)

Item resources also have an option for "Quick add". When this switch is flipped, all of the items in the drawer have a checkbox. You can use these checkboxes to add multiple items as a property at once. Note that you can only edit one property at a time, so all of the items must populate the same property (e.g. "Creator", "Has Part").

![a red arrow points to the slider button for "Quick add". The two items visible have an empty checkbox to the left of their representative thumbnail](contentfiles/items_quickadd.png)

Media public and admin pages do not display linked resource tables.

#### URI

URI fields link to an external website or online resource. Every URI value has the link itself, and an optional textual Label to replace the URI with something human-readable. For example, you may wish to enter in a Creator as a URI to a controlled vocabulary of artists or authors, and then include the creator's name in plain text as the Label. Omeka will not automatically pull information from the URI.

#### Value annotation

When you input a value for a property associated for a resource, you are making a statement about that resource. If you choose, Omeka allows you to make statements about that statement. We call this value annotation. The advantage of value annotation is that you can choose to make ambiguous facts more concrete by annotating things like:

- Provenance: Where is this fact from?
- Time: When did this fact occur?
- Location: What is the location associated with this fact?
- Certainty: What is the confidence of this fact?
- Type: What type of concept/thing is this fact?

In the world of linked data, this process is know as [reification](https://www.w3.org/wiki/RdfReification){target=_blank}. Each value can have any number of annotations.

To create an annotation, click on the ellipsis on the right side of the value input interface, and then click on the annotation icon (the speech bubble).

![A detail of a value with the annotation bubble highlighted](contentfiles/annotation_add.png)

The annotation sidebar will open to the right. Select any property that is available within the Omeka S installation to describe the relationship between the annotation and the value it describes. For instance, the value for associated with the property `dcterms:Contributor` might be annotated with more detail about the nature of the contribution. Or you may wish to simply include a note using the `dcterms:Description` field.

Select a data type for the annotation: a text field, a URI, or resource in your Omeka S installation. Modules may make additional data types available. Click the "Add annotation" button and a new field will appear below. Input your annotation. You can do this multiple times for the chosen value if desired. Then click "Set annotations" to finalize the process.

![A picture of the value annotation sidebar with a property selected and an annotation included](contentfiles/annotation_sidebar.png)

[Each site has a setting](../sites/site_settings.md#show) to indicate whether or not value annotations are visible to the public. This will include value annotations on items and item sets.

You can set controlled vocabularies for annotations using the [Custom Vocab module](../modules/customvocab.md). In this case, you do not need to apply a custom vocabulary to a property using a resource template; you can select any installed vocabulary from the value-type dropdown in the drawer. This will load your vocabulary's choices into a dropdown of terms.

### Advanced

#### Thumbnail

Not all media generate elegant thumbnails, for example PDF or text file documents, or some video files. You can use this option to set a representative thumbnail for the media which will be used on browse pages but not on the page for the item or its media.

The assets you select from or upload as thumbnails in this tab are the same as those created for [site logos](../admin/assets.md). A thumbnail uploaded as an asset will become available to all users of all sites. If you wish to upload a video still as a thumbnail for a specific video, you may wish to upload it as a media file attached to the item instead of as an asset.

To assign an asset as a thumbnail, click on the "Select" button in the main work area of the tab. This will open a drawer on the right side.

![Select drawer with upload option and two assets, both of which are images.](contentfiles/media_thumbnail1.png)

The drawer offers two options: upload a file using your browser, or select from existing assets. To select an existing asset, simply click on it and it will automatically be assigned to the media.

![Edit media open to Advanced tab, where an asset which is an image of a map of the National Mall is in the main work area. Below it are buttons for Select and Clear](contentfiles/media_thumbnail2.png)

To remove an asset which you have assigned as a thumbnail, click the "Clear" button below the image of the asset. To replace it, click select and either choose or upload a new thumbnail asset.

#### Owner

You can assign an owner for the media by selecting from the dropdown menu.

#### Alt text

You can provide alternate text for all media by typing descriptive text into the input area.

![Edit media open to Advanced tab, showing the Alt Text input box](contentfiles/media_alttext.png)

#### Language

You can indicate the language of a media file by entering the two-letter [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes){target=_blank} language code into this field. This field does not accept multiple values.

## Batch actions
From the media browse page (`admin/media`), you can batch edit media, using the dropdown menu on the left near the pagination buttons. You can select media manually for batch editing using the checkboxes on the left, or select all of the media on the page, or use the dropdown to edit all media that are currently in the subset.

Editors, Supervisors, and Global Admins can batch-edit and batch-delete all media in the installation. Users that have Author-level permissions can batch-edit or batch-delete their own media, but not media of others. In this case, selecting all of the media on the page, or selecting all media, will only include media they own. Users at the Reviewer level cannot batch-delete all resources, but can batch-delete selected resources.

![A red arrow points to the dropdown for batch editing and deleting options](contentfiles/media_batch1.png)

Batch actions are as follows:  

- Edit selected: edit only the media that are selected on the page
- Edit all: edit all the media returned by a search (default is all media)
- Delete selected: delete only the media that are selected on the page
- Delete all: delete all the media returned by a search (default is all media).

The number of results per page is set in the [installation's global settings](../admin/settings.md#general).

You can first use the "🔍 Advanced search" link to narrow down the media to a subset for editing. For example, you can use [Advanced search](../search.md#media-advanced-search) to limit to media of a specific MIME type, or media owned by a specific user.

If you perform a search, you will once again see the browse page, with your selected parameters appearing at the top of the screen. From this browse screen you can select media manually for batch editing using the checkboxes on the left, or select all of the media on the page, or use the dropdown to edit all media that are currently in the subset.

If you complete a batch action from the next screen, you will return back to this same media subset.

### Batch editing

Batch editing media takes you to a new page. The media being edited will display on the right side in a drawer. Be sure to confirm the number of media being edited looks correct.

The batch edit form gives you the following options:  

- **Set visibility**: a radio button. Select from public or not public to make the file visible or not visible to logged-out users.
- **Set template**: a dropdown. Select from the installation's resource templates. You can remove templates from the selected items with the "[Unset template]" option. A search bar appears at the top of the dropdown menu if you would like to type to search.
- **Set class**: a dropdown. Select from classes of the installed vocabularies. You can remove all classes from the selected files with the "[Unset class]" option. A search bar appears at the top of the dropdown menu if you would like to type to search.
- **Set owner**: a dropdown. Select from users of the installation to choose who should be set as the owner of the selected media. Changing media ownership will not change the associated items' ownership. Ownership determines [who can edit and delete those media](#media-permissions), outside the higher [user permission levels](../admin/users.md#roles-and-permissions).
- **Clear language**: a checkbox to remove existing language settings.
- **Set language**: a text field. Enter in a two-letter [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes){target=_blank} language code. You can only indicate one language here.
- **Clear property values**: a dropdown and text field, with all the properties in all vocabularies. Selecting from this will remove any values in that property in the affected media. You can remove multiple property values at once: click in the text field again to see the remaining options.
- **Set value visibility**: a dropdown and text field, with radio buttons. Set the visibility of a specific property or properties to either public or not public. Unlike the radio buttons at the top of the form, this will only affect one or more metadata fields, instead of the entire media (for example, you may wish to hide the "Creator" value on some public media). Select a property from the text field (type to begin searching), and the choose either the "Public" or "Not public" radio button for this option. You can add multiple properties by clicking again within the text field, but they will all become either "Public" or "Not public".

![Batch edit media form, with options as described above.](contentfiles/media_batchedit.png)

In addition, you can use the buttons at the bottom of the batch edit form to **convert existing values in any property from one data type to another**, such as a text value of "1900-01-01" into a date. 

You can also **add properties** to every media:

- Add text value
- Add resource value
- Add URI value.  

Selecting any of these will add a block to the form where you can select a property from the installed vocabularies and enter the value for that property.

### Batch deleting

For the **delete actions**, a drawer will open on the right side of the screen telling you the number of media which will be deleted. Nothing will be deleted unless you click the red "Confirm Delete" button. This action cannot be undone. To opt out of deleting the media, click the "X" in the upper right corner of the deletion drawer. To confirm a "delete all" action, check the "Are you sure" checkbox and then click "Confirm Delete".

![Close up of the warning that all media will be deleted.](contentfiles/media_batchdelwarn.png)

## Media file types

Omeka S uses HTML 5 audio and video tags when embedding audio and video. This means generally better support on newer browsers, but worse support on older ones and for older video formats especially.

By choosing from a few well-supported formats for audio and video files, you can provide a much better experience for your users across different platforms and devices.

### Video

#### MP4
The MP4 container (.mp4 or .m4v) is the best-supported video format across browsers and platforms. By far the best choice for video that will work well across different browsers are .mp4 files with H.264 video and AAC audio.

.mp4 files can contain other types of video (or audio), including newer ones like H.265, and older ones like MPEG-4 Visual. Any video codec other than H.264 has *much* worse browser support.

#### Other formats
The WebM (.webm) container with VP8 or VP9 video is supported by several browsers, but Internet Explorer and Safari are notable and significant exceptions.

The Ogg (.ogg, .ogv) container and Theora video are supported by some browsers, but there is little support among mobile browsers and no support at all on IE or Safari.

### Audio

#### MP3
MP3 (.mp3) is one of the most common formats for compressed audio, and it enjoys wide support across browsers and from desktop to mobile.

#### AAC

AAC is a somewhat newer format than MP3, but it also is well supported in most browsers. The widest support is for AAC in an MP4 container (this usually carries the file extension .m4a), with somewhat lesser support for other containers and formats (often found with a .aac extension).

#### Other formats

WAV or WAVE (.wav) audio is supported by most browsers (with the notable exception of Internet Explorer). The major downside for use on the Web is that WAV audio is uncompressed, so it takes up vastly more storage space and bandwidth than the compressed formats listed above. If feasible, it’s best to use one of those instead of WAV.

Ogg Vorbis audio (.ogg, .oga) is a compressed format like MP3 and AAC, but it has much less widespread support. Expect Vorbis audio to only work on Firefox, Chrome, and Android.

Opus (.opus) is one of the newer available audio formats. For the time being, it has a similar problem as Vorbis: a lack of support among browsers, but there are signs that Opus could gain more support in the future.

### Images

Omeka S accepts most image file types, including JPEG, PING, TIFF, and WEBP. 

Keep in mind that most browsers do not natively display TIFF or JPEG2000 files; Omeka creates derivative images for TIFFs and JPEG2000s (`.jp2`), in JPEG format, that are displayed as thumbnails and on item/media view pages. Users can download these file types where the original file is offered. 

As of Omeka S version 4.1, the Lightbox gallery viewer, used to display original-format media in a zoomable interface, may pull the "large"-size derivative rather than the original TIFF or JPEG2000, limiting the zoom granularity. 

WEBP support is new in Omeka S 4.1. Existing installations that have been upgraded to 4.1 may need to update the list of allowed file types and extensions on the [Settings](../admin/settings.md) tab by pressing the "Restore" buttons ("Restore default media types" and "Restore default extensions").  

### Legacy formats
There are a lot of media files out there that aren’t in any of the formats listed here. With certain add-ons or on certain platforms (like Safari on the Mac in many cases), it can be possible to embed some of those files with HTML 5, but expect many or most users to be unable to play them. Browser plugins can also play many file types, but browsers are steadily reducing and removing their support for these kinds of plugins.

For old media, often the best choice is to just present a download link so the viewer can play or convert the file locally. This is what Omeka does when it doesn’t recognize a file type or when a browser reports that it can’t play a file.

File formats which result in a download link, rather than an embedded playback, include:

- Video: .avi, .wmv
- Audio: .aiff (except Safari), .midi, .wha

If you do not see a format listed here that you think should be, try it out and let us know the results.
