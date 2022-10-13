# Omeka S User Manual

[Omeka S](https://omeka.org/s/) is a web publication system for universities, galleries, libraries, archives, and museums. It creates a local network of independently curated exhibits sharing a collaboratively built pool of items and their metadata. Watch our [screencast for a quick tour of Omeka S](https://vimeo.com/241702586).

Omeka S is developed alongside [Omeka Classic](http://www.omeka.org), part of the Omeka family of web publishing platforms. 

This repository is the content of the [Omeka S User Manual](http://omeka.org/s/docs/user-manual/) and is best viewed there.

## Contributing to the User Manual

If you notice something that could be improved, we would love your help. 

You can click the "Edit on GitHub" link at the top right corner of any page in the manual. That link will bring you here, where you can edit the page directly and submit your suggested changes as a pull request. This can be useful for typos, dead links, or minor formatting issues. You may need to know some Markdown to make these edits. 

If you do not wish to suggest an edit directly, please [create a new issue](https://github.com/omeka/omeka-s-enduser/issues) here in this repository. If you do not wish to have a GitHub account, you can make suggestions and requests in the [Omeka Forum](https://forum.omeka.org/).

Multi-page edits, larger additions, image modifications or submissions, and significant changes should be created in a branch and submitted as a pull request. Please take the following into consideration when writing documentation:

- This is documentation for ordinary users, not developers. Please use clear, jargon-free language. 
- Explain every possible step, even the ones which seem obvious. It is better for users to skip a step they've already completed than be confused by a leap they can't follow. Do not assume any prior knowledge of technology on the part of the user for this documentation.
- Break longer tasks up into short paragraphs or lists.
- Use illustrative images when needed, especially to indicate which button or link users should engage with.

If you are cloning the user manuals to your local computer and creating a branch, you may wish to [install and use MkDocs](https://www.mkdocs.org/#installation) to preview your changes and ensure the formatting and syntax are correct.

### Formatting 

**Section headings** should start with H2 (`##`) and go down to H4. Create sections where it is logical in the documentation structure; they will appear in the left navigation of the documentation. (See [Pages Management](http://omeka.org/s/docs/user-manual/sites/site_pages/) for an example of extensive section use.) Use "Sentence case for section headings", not "Camel Case".
  
**Links** should be composed as relative to the current file. They will look something like `../modules/csvimport.md` if you are linking to a page that sits within a folder, or `../admin/users.md#manage-users` if you are linking to a section of a page. Do not forget the `.md` part of the page.
 
**Images** for a page go into the `files` folder of the directory in which the page sits (so, for "Content" pages, images go into the `contentfiles` directory). Name images clearly, starting with an indicator of the relevant page, and use an underscore to separate out the image's purpose (for example, `items_addItem.png`).

Images should never give information that is not provided in the text (or in the image alt text and title). No one with vision problems should be missing out. Think of images as a shortcut, not the only route, to understanding how to do something. 

All images should have alt text. A title can also be supplied if having some pop-up text would be useful to readers. An image entered in Markdown looks like this:

```
Some text ends here.

![Alt text for the image goes here.](../modulesfiles/animage_pathGoesHere.png "An optional title which will appear when a user mouses over the image.")

More text picks up here.
```

The maximum display width of an image in the user manuals currently is around 1300px (actually 1296px). A screenshot of the full Omeka interface (public or admin side) should be large. Images can be saved larger (up to 2000px wide) so that readers can open them in new tabs and inspect them in full-scale detail if desired. 

A screenshot of a portion of the interface, such as the left-hand navigation, or the right-hand drawer, should appear at full scale for maximum readability. Currently, Omeka S has a left-side nav width of about 320px, and a right-side drawer width of about 450px, on a 1920x1080 screen.

**Format your text** as follows: 

Buttons appear in quotes, as in the "Save" button. 

You can highlight interface features (such as page titles, page tabs, links, dropdown menus, and checkboxes) in **bold**. 

URLs, file paths, bits of code, and metadata fields are highlighted using `code formatting`. 

Describe icons based on their tooltip. For example, say "edit (pencil icon)", "delete (trash can icon)", "details (ellipsis icon)". This way the text is useful for people using screen readers as well as those who are not.

Use the [language found in the Glossary](https://omeka.org/s/docs/user-manual/glossary/) to refer to elements in the Omeka S interface.

Omeka S terms:
- Left-hand navigation: the bar on the left with options for resources, admin, etc.
- Main work area: center of window, to the right of the left-hand navigation
- Drawer: the menus that open from the right
- Admin dashboard
- Modules
- Properties
- Item sets
- Classes.

### After you submit your changes

A member of the Omeka team will review your suggested edits. If your pull request is approved and merged, you will see your edits on the GitHub version of the documentation immediately. The user manuals are refreshed nightly so you may not see your changes in the user manuals until the next day.

## Rights

This documentation is [CC-BY-NC](https://creativecommons.org/licenses/by-nc/4.0/).
