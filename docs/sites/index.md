#  Sites Management

Sites are the public-facing side of an Omeka S installation. With sites you can create content and interpretation around a group of items from your installation. 

Sites are managed and accessed via the "Sites" link on the left-hand side of the administrative dashboard. 

![Manage sites view, showing Sites button link on the left, the Add New button, and the table of sites with eight sites listed](../sites/sitesfiles/sites_admin.png)

The Sites page displays a table with all the sites for the installation, giving the title and owner for each site. 

Use the two drop-downs on the right side above the table to sort your sites. You can sort by **title**, **URL slug**, or **owner**, either ascending or descending. Click the "Sort" button to apply your choices. 

Above the table of sites, on the left, is the pagination for the sites table.

Each row gives the title of a site on the left, the URL in the middle, and the display name of the site's owner on the right. Each site has options to **view** (the box with the outward arrow), **edit** (the pencil), or **delete** (the trash can). **Only global admins and site owners can delete a site.**

Sites that are not public will have the **private** icon (an eye with a slash through it) display to the right of the site title. 

Clicking on the site title will take you to a summary page for the site which displays the site’s **URL slug**, **title**, **theme**, and the **thumbnail image** associated with the site. You can return to the site list, or "Edit" or "View" the site using buttons in the upper right. You will also see the left-hand menu expand to display the management options for the site.

![show page for the site "What Does This Look Like" indicating that the theme is default and the slug is public views.](../sites/sitesfiles/sites_quickshow.png)

## Adding a site
To create a site, click the "Add new site" button in the upper right-hand corner of the site browse page.

The "New site" page has two tabs: **Info** and **Theme**.

### Info tab

* Give your site a **title** (required).
* Create a **slug** for the site’s url. The url will be `youromekainstall.org/s/slug`. This is optional - if you leave this field blank, Omeka S will create a slug based on the site title.
* Create a **summary** for your site: a brief description of what it is about.  The summary text will appear on your installation's landing page and on the [list of sites](site_pages.md#list-of-sites) page block.
* Upload a **thumbnail** for your site, which will replace the summary text on the landing page or in the list of sites block.

![Admin tab for a new site with nothing entered](../sites/sitesfiles/sitesadd_admin.png)

### Theme tab
Select from the installed themes. Each theme appears as a tile with a screenshot of the theme, the theme name, and a link to its creator. When a theme is selected, it will highlight in gray and a checkbox will appear in the bottom right corner of the tile.

![Theme tab with default theme selected](../sites/sitesfiles/sitesadd_theme.png)

### Publication settings
In the upper right corner of the screen, next to the "Add" button, you can set the visibility of your site by clicking on the eye icon to make the site public or private.

Site is public: ![make public button showing an eye icon](../content/contentfiles/item_public.png){style="display:inline;"}

Site is private: ![make private button showing an eye icon with a diagonal slash through it](../content/contentfiles/item_private.png){style="display:inline;"}

You will probably want to leave the site Private until you have finished configuring it and added some content.

### Add site
When you are ready, click the "Add" button in the upper right corner. Once the page is created, you will be redirected to the site's Info tab. 

If you decide you do not want to create this site, click the "Cancel" button in the upper right next to the "Add" button.

## Manage a site
To manage a site, navigate to the **Sites** screen from the admin dashboard. Click either on the site’s title or the edit button (pencil icon) in the list of sites. 

This will take you to the site's Info tab, and open the context menu for that site in the left-hand navigation. 

The context menu for every site has the site title at the top, with an icon of a computer (the site icon) to the right. To the left of the site title is a view button (box with escaping arrow). Clicking the view button will open the public side of the site in a new window.

![Context menu for the site "Mysteries", with two modules installed](../sites/sitesfiles/sites_menu.png)

Site admin left hand navigation options are: 

- [Site admin](../sites/site_settings.md),
- [Pages](../sites/site_pages.md), 
- [Navigation](../sites/site_navigation.md), 
- [Resources](../sites/site_resources.md),
- [User permissions](../sites/site_users.md),
- [Theme](../sites/site_theme.md), and
- Settings added by modules, if installed.
