
## Create a Project
To create a new Scripto project, go to the Scripto dashboard (the Scripto tab in the left-hand navigation) and use the dropdown menu in the upper right corner to select "add new project"

This will load the New project page, which has two tabs: Configuration and Reviewers. 

The eye symbol on the upper right by the "add" button sets the visibility of the project. If the button is set to private (eye with a slash) it will only be visible to users *of the Omeka site*

You can change these settings at any time by editing the project. 

### Configuration options

**Title** (required): the name of the Scripto project. This will display on public and admin sides.

**Item set** (required): select the item set with which the Scripto project should synch. This item set should contain all the items and/or media you wish to include in the project. 

**Property** (required): select from the dropdown which property should store the content created through Scripto and imported back into Omeka S metadata. In addition to installed [Vocabularies](https://omeka.org/s/docs/user-manual/content/vocabularies/), Scripto has its own vocabulary options of content, transcription, and translation. 

**Description**: a description of the project. This will display on public and admin sides.

**Guidelines**: transcription guidelines. These can be formatted using the WYSIWYG editor which will appear when typing inside this field.

**Language tag**: the language tag for the content being imported into the property selected above.

**Import target**: select the resource to store data when it is pushed from the Scripto project back to Omeka S metadata. Options are Item and Media, Item, or Media.

**Browse layout**: choose the default browse layout for the project, either Grid or List.

**Item Type**: if you want, you can specify the type of item used in this project. What you select here will change the interface language for users. For example, if you choose "manuscript" then the browse link for the project will display as "browse manuscripts" instead of "browse items". Choose from:

- Generic Item (default)
- Audio
- Book
- Document
- Journal 
- Manuscript
- Paper
- Video

**Media Type**: use this dropdown to specify the type of media used in the project, and change the way that media is referred to in scripto for this project. Choose from:

- Generic Media
- Entry
- Folio
- Image
- Page
- Section
- Segment
- Sheet

**Content Type**: use this to specify the kind of work in the project. Choose from:

- Generic Content
- Description
- Transcription
- Translation


![Add New Project window open to the "Configuration" tab - all fields are blank](../../modules/modulesfiles/scripto_newconfig.png)

### Reviewers
Add Omeka S users to your Scripto project as reviewers, who can can access private projects, and mark media as approved and unapproved. Only Omeka users with site and global administrator roles can sync and import projects, due to the destructive potential of those actions.

On the right-hand side of the window is a browsable list of Omeka S users, sorted alphabetically by username. To add a user as a Scripto project reviewer, simply click on their name; this will add them to the table of reviewers in the main part of the page.

To remove a user as reviewer, click the trash can icon to the right of their email address in the table of reviewers.  

![Add New Project window open to the "Reviewers" tab - the page is largely blank, with an alphabetical menu down one side.](../../modules/modulesfiles/scripto_newrev.png)


Click "Add" to create the new project.

### Initial Sync
Immediately upon creating a project, you will see the message: "No Scripto items found. Do you need to sync the project? If you have recently synced, the sync job has likely not finished."

![New project sync message](../../modules/modulesfiles/scripto-newproject.png)

To sync the project, go to the Actions dropdown button in the upper right corner of the window. From the options, select "Sync project" - this will update the project so that it has every item in the item set. 

![](../../modules/modulesfiles/scripto-projectactions.png)

Note that the first time you run the sync may take some time, and you may continue to see the "No Scripto items found" message. You should also see a green message across the top of the page stating that the project is syncing and giving you a link to the job for the sync.

## Admin Project View
From the Scripto dashboard you can access projects you own and those to which you have reviewer access. Regardless of your status for the project, clicking on the project's title will take you to its review page.

![scripto review page, user not logged in to Scripto](../../modules/modulesfiles/scripto-admin-project1.png)

At the top of the page you will see the title of the project along with the label "Review". Underneath the project title will be the Scripto account bar, where you can either log in or navigate to the dashboard, your contributions and watchlist. 

The sidebar on the right summarizes the metadata for the project. The project title, item set, and owner all act as links .

In the main work area is a table with all of the items in the project, with the following information:

- Item* (first media thumbnail and title)
- Ellipses to see item metadata - this will open in a drawer on the right
- Date synced: date most recently synced.
- Last edited. If the item's media has not been edited, this will be blank
- Media* count: number of media associated with the item
- Status: item status, which will be blank, completed, or approved.

*NB: If you changed the Item, Media, or Content in the project configuration, then you will see the terms you selected instead of "item" or "media"

Above the table are options to:

- search items and media in the project (search bar)
- page through the project's items
- sort items and media, either ascending or descending, by:
	- Date synced
	- Last edited
	- If you have the module Numeric Data Types installed, you will also see:
		- Date Created
		- Date Submitted
		- Extent
		- Identifier
- filter results by:
	- is approved
	- is not approved
	- is in progress
	- is new
	- is edited after imported

## Admin Item Review
To review an item, click on its title in the project view.

The Item view page, like the project view, has near the top of the page a Scripto account bar, where you can either log in or navigate to the dashboard, your contributions and watchlist.

On the right is a bar summarizing the item's status and data. The properties for the Scripto Project and Omeka S item link back to their respective properties. 

![item admin side](../modules/modulesfiles/scripto-itemview.png)

The main work area has two tabs: one for Media and one with the Omeka item metadata.

### Media tab
On the Media tab, there is a table with all the media in an item. Users transcribe media by media, so Scripto allows you to review on the media level.

The table includes:

- A selectbox for the media
- The index number of the media
- The media's thumbnail and title
- last edited date
- status (approved, complete, blank)
- Edit protection (admin only, open to all)

You can sort the table by last synced, last edited, last completed and last approved, either ascending or descending, using the dropdowns in the upper right of the tab.

You can also filter which media are displayed using the dropdown to show only: 

- Is/is not edited
- Is/is not completed
- Is/is not approved
- Is edited after approved
- Is edited after imported
- Is synced after imported

Using the checkbox you can edit selected or all media.

Batch edit options are: 

Set completion status as Complete, incomplete, or no change. Set Approval status as Approved, not approved, or no change.

![batch edit](../modules/modulesfiles/scripto_batcheditmedia.png)

### Omeka item metadata
This tab is a static display of the metadata for the Omeka S item with which the Scripto item is associated. When you sync the project, this is the item which will be updated. To edit the item, scroll in the right hand drawer 

## Media Review page
This is where you review the community contributions.

Along the top of the page are the following buttons:

- A **star** to add this page to your watchlist (if you are logged in to Scripto)
- A button to go to the **Revision History**
- A button to **View notes** of the media
- A button to **Save** changes

There are three tabs on this page, along with a drawer on the right which remains open. 

The first tab is **Wikitext** and displays the user-generated text from MediaWiki next to the media. You can use the Layout buttons to toggle between side by side and top and bottom display. You can zoom in and rotate the media display using the buttons within the media viewer. There is also an option to go to a full screen view of the text and media.

The second tab is an **HTML** display of the Wikitext content, showing the formatted text as it will display on the public side of a site.

The third tab is **Omeka media metadata** for the media. 

To the right of the tabs is a set of foward-backward arrow buttons and numbers (1 of 2 in the image) which allow you to move through media attached to an item without backing out to the Review item page.

![Media review](../modules/modulesfiles/scripto_mediareview1.png)

In the drawer:

- You can move through revisions using the forward and backward arrows.
- You can view review status and modify using checkboxes if your Mediawiki role includes bureaucrat.
- You can edit the protection of the Wikitext page, choosing from all users, confirmed users, or only administrators, and set the protection to expire or set it as indefinite. Again, you can only do this if your Mediawiki role allows it.

You can toggle the drawer open and closed using the open arrow `>` button in the middle of the divider between the drawer and the main work area. 


#### Media status:

* **Complete:** Community users have the ability to mark a media they are working on as "complete." This serves as a flag to notify the project team that the media is ready for review. If a media is not completely transcribed/translated/described, adminstrators can reverse the Complete status.
* **Approved:** Approval is granted by administrators and indicates that every media is complete and satisfactory. Items can only be considered approved when all child media are approved.
* **Protected:** Protection is a [MediaWiki function](https://www.mediawiki.org/wiki/Manual:Administrators#Protection). In the context of Scripto, it is a way for project owners to close editing on a media or item at a certain point, either because it is complete or because of a need to deal with that particular media or item (bad scan, for example). 
	* Protection can be limited to users, confirmed users, or administrators. In addition,  you can choose to protect the media infinitely or for a set amount of time: 1 hour; 1 day; 1 week; 2 weeks; 1 month; 3 months; 6 months; or 1 year. 

### Revision History
Clicking the "Revision History at the top of the Review media page takes you to a listing of the revision history for the media.

Clicking on the timestamp for a revision will take you to that revision. 
![Revision history](../modules/modulesfiles/scripto_revisionhist.png)

### Notes
Notes are a way for project staff and transcribers to communicate. Access the notes for a specific media using the "View notes" button in the upper right corner of the Review Media page

![a red arrow points to the "View notes" button in a close-up of the upper right hand corner](../modules/modulesfiles/scripto_notes_loc.png)

The note review options are similar to the media review options: there is a tab for wiktext where you can see the notes to the left of a small view of the media. The HTML tab displays only the wikitext in full HTML markup, not editable. The Omeka media metadata tab allows you to review the Omeka S metadata associated with the media.  

Using the drawer on the right hand side of the screen, you can change the protection of the notes page to allow only the selected level of users to edit the notes page: all users, only confirmed users, or only administrators. 

![Notes](../modules/modulesfiles/scripto_notes.png)

You can toggle the drawer open and closed using the open arrow `>` button in the middle of the divider between the drawer and the main work area. 