# Sharing

The [Sharing module](https://omeka.org/s/modules/Sharing){target=_blank} allows you to add buttons to site pages which visitors can use to share and embed content from your site on social media or via email. Sharing also includes [Open Graph meta elements](https://ogp.me/){target=_blank} in the `<head>` of each item page on your site, so that items will display when shared on social media. 

Currently, Sharing supports the following options:

- Facebook
- Twitter
- Tumblr
- Pinterest
- Email
- Embed codes.

Once Sharing has been installed and activated for an Omeka S install, it is available for all sites on the installation.

## Configuration

![Left hand navigation options for sites: settings is at the bottom](../modules/modulesfiles/sharing2.png)

Sharing settings are configured on a site-by-site basis. Go to a site and click through to the Site Settings. There should be a section labelled "Sharing" (see the image below) with two options:

**Enable Sharing module for these methods**: gives a series of checkboxes, one for each service or option (Facebook, Twitter, etc.).

**Sharing buttons placement on the page**: sets the placement of the sharing buttons either at the top of the content (below the navigation and page header) or at the bottom (just above the footer). 

![Checkboxes for the sharing options listed above, in two rows](../modules/modulesfiles/sharing_options.png)

Ensure that the correct boxes are checked for your site. You can uncheck all of the boxes to turn off sharing for your site. Be sure to save your changes. 

### Open Graph

The module will send Open Graph meta tags regardless of your site settings. This may include: 

- `og:description`, reflecting the `dcterms:description` content of any resource if applicable, or the [field used for the resource description](../content/resource-template.md#other-options)
- `og:title`, reflecting `dcterms:title` or the field used for the resource title
- `og:image`, either the primary media or the default thumbnail based on the media type
- `og:type`, always `content="website"` at this time
- `og:url`, the current page's URL.

These fields are not sent on item set or media pages. Multimedia (audio and video) will not be sent, only a thumbnail image. 

## Public side

Sharing icons for enabled services and options will display on pages you build, as well as individual item/show pages on your site. 

![Share buttons for Facebook, twitter, and email displayed above an item's title, just under the page header](../modules/modulesfiles/sharing_buttons.png)

By default, the module will share the page title, the name of the site, and the name of the installation. 

![An example tweet for the page, listing the page’s title then a dot, followed by the site’s title then a dot, followed by the installation title, ending with a dummy URL for the site](../modules/modulesfiles/sharing_display1.png)
