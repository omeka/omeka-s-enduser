# Front Page

Omeka S allows users to build multiple sites per installation which are not necessarily connected. However, each installation has, by default, a front page which lists the sites in the installation. This page is accessed by going to the main url of your Omeka S installation; if your [admin dashboard](admin-dashboard.md) was at `yourdomain.net/omekas/admin`, then you would find this page a `yourdomain.net/omekas/`

The page displays all sites which a user has permission to see, along with the site's summary if one exists. If someone is not logged in, they will only see public sites. A logged in Global Admin, by contrast, would see all existing sites on the installation.

![Installation front page for the "Stackable Sandbox" showing seven sites, three of which have summaries.](files/frontpage-basic.png)

If you want this site to be hidden from site visitors, you can use the [setting Default Site](admin/settings/#global-settings) to select a public site on your installation to which visitors will be redirected when they navigate to your base url (`yourdomain.net/omekas/`)

You can use the Default Site option in conjunction with the [site page block](sites/site_pages/#page-blocks) "List of sites" to create a branded site index and to add an about page for the overall installation. 
