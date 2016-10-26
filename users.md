---
title: Users
---
Only site and global administrators can create, edit, and delete users. Editors, Reviewers, Authors, and Researchers can edit their own user information but cannot change the information of other users. 

Administrators manage and create users from the User tab of the main administrative dashboard (head and shoulders icon). 

This Users section displays the user’s email followed by full name in parentheses, as well as their role and the date the account was created.

There are six user roles in OmekaS.
- Global Admin: full installation privileges
- Site Administrator: robust site and content privileges
- Editor (Content Expert): full privileges for content creation
- Reviewer: robust content privileges but can only delete own content.
- Author: Create own content.
- Researcher: Search and read privileges only.


## Create a New User
To create a new user, select the *Add new user* button in the upper right hand corner of the Users section in the main administrative dashboard. 

On the Add User page, enter the following:
- *Name* (full name or credit name)
- *Email address*
- Select a *Role* using the dropdown menu (see above for user role privileges)
- Check the *Is Active* box to confirm that the user is active.

## Managing Users
To manage an existing user, go to the Users section.

![Manage users view, top row is the Omeka Devs account. The drawer showing the number of items and item sets created by the Omeka Devs user is opened.](/files/users_table.png)

To view the name, email, and role of a user, click on the username. 

To see the items and item sets owned by a user, click the *more* (ellipses) button located between the *delete* (trash can) button and the user role label. This will open a drawer on the right side of the screen with this information; you can click on the number of items or item sets to go to the items or item sets created by that user.

To edit a user’s information, change their password, or access API keys, click the edit icon (pencil) to the left of their role. 

The Edit User page has three tabs: *User Information*, *Password*, and *API Keys*. 

On the *User Information* tab, you can edit the display *Name* and *Email* for the user, select or change the user *Role* and click the checkbox to confirm that the user *Is Active* (or uncheck the checkbox to render the user inactive)

In order to reset the *Password* on that tab, you must also know the current password. 

To generate an *API Key*, navigate to that tab and enter a *New Key Label*. This could be a date or the purpose of the key. To remove existing API keys, check the *Delete?* box on the row for that key and click *Submit* (save changes) in the upper right hand corner of the screen.

## Delete a User
On the User page of the administrative dashboard, click the trash can icon in the user’s row, to the left of their role information, to delete the user. Confirm the deletion in the dialog box which will appear on the right of the screen.


## Roles and Permissions
The following is a detailed breakdown of permissions for each user role:

**Global Admin**
- Full privileges (create, edit, delete) of item, item sets, media, resource templates, site pages, sites, and users.
- Full privileges for modules - install, activate, configure.
- Search, read, create, and delete privileges for Vocabularies

**Site Administrator**
- Full privileges (create, edit, delete) of item, item sets, media, resource templates, site pages, sites, and users.
- Browse-only privileges for modules in the module tab. Site administrators can interact with active modules where appropriate.
- Search, read, and create privileges for Vocabularies (cannot delete)

**Editor**
- Full privileges (create, edit, delete) of item, item sets, media, resource templates, and site pages
- Can search, read, and create sites and users, and edit or delete sites they own. Can only delete their own user profile.
- Search and read only privileges for vocabularies.
- No privileges for modules

**Reviewer**
- Can search, read, create, and edit all items, item sets, media, sites and site pages. Can only delete those items, item sets, media, sites and site pages which the user owns.
- Search and read only privileges for vocabularies and resource templates.
- No privileges for modules

**Author**
- Can search, read, and create items, item sets, media, and site pages. Can only edit or delete content which the user has created.
- Search and read only privileges for vocabularies and sites.
- No privileges for modules

**Researcher**
- Search and read-only privileges for all content, sites, and users. 
- No privileges for modules
