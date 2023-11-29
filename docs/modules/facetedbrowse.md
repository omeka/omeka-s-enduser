# Faceted Browse

The [Faceted Browse module](https://omeka.org/s/modules/FacetedBrowse){target=_blank} lets you create "browse resource" pages with facets - filter and sort functions - that site visitors can use to explore your collections. Faceted Browse pages can be made for items, items sets, or media. 

With this module, site managers are able to configure faceted browse pages and add them to their site's [navigation](../sites/site_navigation.md). End users are then able to browse through resources and use the facets to narrow the results in a logical and intuitive manner. This functionality is similar to the filtering options on many websites and should be easy for users to manage as long as you have clear language.

The [public view](#public-views) section below shows how these facets display for single and multi-category pages.

Faceted browse pages exist as separate [pages](../sites/site_pages.md). You cannot add faceted browsing to a page as a block, or as part of an existing browse page.

Once activated, Faceted Browse is configured on a site-by-site basis.

## Terminology

A quick guide to the terms used to describe the aspects of a faceted browse page:

- Category: a group of resources (items, item sets, or media) to which facets are applied on a specific page. You can use a query to narrow the resources, or leave it blank to show all of that resource type. 
- Facet: an aspect of a resource - usually part of the metadata - which becomes a way to filter the resources in the category. Faceted browsing works best when you have some controlled vocabularies in your metadata values, or when unique values can be sorted into buckets (such as dates browsed by century). 
- Column: information to display for each resource in the results. Columns are optional. Once you have set at least one column, the items will display in a table form (not a grid). When no columns are set, your site's browsing default will display (e.g. title, thumbnail, and description for each resource).

## Creating and managing Faceted Browse pages

![Site admin showing Faceted Browse startup page.](modulesfiles/facetedBrowse.png)

Once the Faceted Browse module is active, a tab for Faceted Browse will appear in the context menu for every site. Clicking on this tab will take you to a list of all of your Faceted Browse pages for that site.

Site managers must create Faceted Browse pages before they can be added to the site's navigation.

### Adding a Faceted Browse page

Create a new page by clicking the "Add a page" button. This takes you to a new page where you can add basic information for the page and start adding categories. 

![Create page interface showing save page dropdown](../modules/modulesfiles/FacetedBrowse-AddPage.png)

The **page title** is required and will display on browser tabs and be sent in the page metadata. You can set a separate label in the site navigation, and most themes will not display this title visibly on the page. When one category is in use, its title will show on the page; when two or more categories are set, the word "Browse" will appear above the category links in the sidebar. 

Use the **resource type** dropdown to select the resource type that you would like to let users browse on this page: Items, Item Sets, or Media. This cannot be edited after page creation.

Select "Save and... Stay on this page" to continue creating the faceted browse.

You can also save your edits and leave without working on categories and facets by selecting "Save and... Return to pages".

### Categories

Once the page has been created, the user must create a Category, which can narrow down the resources to browse with facets. 

Click the "Add" button and give your category a name.

Use the search query interface to set the pool of resources that users will browse. The "Edit" button opens a drawer on the right hand side of the browser window which works exactly like [advanced search forms](../search.md#item-advanced-search) for items, media, and item sets. The "Advanced edit" button allows you to input a query string. You can leave the query blank to include all of the page's selected resource (that have been added to the site). 

![Add category form with name filled in and search query Edit buttons interface](../modules/modulesfiles/FacetedBrowse-SearchQuery.png)

After setting the pool of resources, you can create facets and set columns for your browse display. Once you are done creating your facets and setting your display columns, save your category.

You can have more than one category per page. See [Multiple categories on one page](#multiple-categories-on-one-page) for how this functions on the public view.

### Facets

Facets work within the categories you have created. You can have one or more facets for each category. These are the selections that site visitors will use to narrow down the list of items.

You can create facets from the following options: 

- Value
- Resource class
- Resource template
- Item set (for items only)
- Full-text.

![Facet Type dropdown menu showing options](../modules/modulesfiles/FacetedBrowse-SelectFacetType.png)

Once the type is selected, click the "Add" button. A drawer will open on the right side of the browser window with options to configure the facet. The image below shows the drawer options for the Value facet:

![Configure Facet draw for the Values facet type](../modules/modulesfiles/FacetedBrowse-ConfigureFacetV.png)

You can add more than one type of facet to each page and category.

**Value** facets correspond to the [values](../content/items.md#values) within a specific property for each item.

Give the facet a name (required). This will display on the public view, so make sure it will be legible to your visitors.

Use the dropdown to select which property to use for the facet.

Set the Select type for the browse faceting. This sets how site visitors interact with the options in the field:

- Single (list). Visitors can select only one; all options are displayed in a list of radio buttons.
- Multiple (list). Visitors can select multiple; all options are displayed in a list of checkboxes.
- Single (dropdown menu). Visitors can select only one; all options are given in a dropdown menu.
 - Text input. Visitors can type in text to search items that have property values corresponding to that text input.

 For the Select types that include a list or a dropdown menu you will need to set a Query type. If the query type is

- "Is exactly": Visitors will have to enter a value that is an exact match to the property value.
- "Is not exactly": Visitors can enter an exact value to be excluded from the the property values.
- "Contains": Visitors can enter a value that matches any part of the property value.
- "Does not contain": Visitors can enter a value to be excluded from any part of the property value.
-  "Is resource with ID": Visitors will enter the resource ID.
-  "Is not resource with ID": Visitors will enter a resource ID to be excluded.
-  "Has any value": Visitors will enter the property label.
-  "Has no values": Visitors will enter the property label.

For the Single (list) and Multiple (list) Select types, Page creators can choose to truncate the values available on this list that is visible to the site visitor by setting a number in the "Truncate values" option. Leaving the input blank will display all values. Entering in a number will display only that number of facets, in order, with a "See more (X)" link displaying the number of further facets.  

Next, enter the Values that will make up the facets. Each value should be on a separate line.

Check the "Show all available values" box to get a sense of the data that is available for input. This will return existing values in the property you selected above. You may click the "Add all" button to populate the list of values.

The formatting of the value input will depend up on the query type selected above. If the query type is

-  "Is exactly": enter a value that is an exact match to the property value.
-  "Contains": enter a value that matches any part of the property value.
-  "Is resource with ID": enter the resource ID followed by any value (usually the resource title), separated by a single space.
-  "Has any value": enter the property ID followed by any value (usually the property label), separated by a single space.

When you are satisfied with your settings, click the "Set facet" button.

For example, you may wish to load all the "Subject" property's values and allow people to browse items using the subject headings currently in use. If you select "Show all available values" you will see a list of subjects currently in use, from most frequent to least. Note that you may wish to clean up your data and consolidate similar values, or fix typos and variations, to make faceted browsing more useful. You can use the [Value Suggest module](../modules/valuesuggest.md) in tandem with Faceted Browse to view and clean messy data.

Note that these facets do not dynamically update when new items' values are added to the corpus, or when values are manually edited. You must reload the options using "Show all available values" and "Add all" in the facet to update the browsing list's content and order.

##### **Resource class** 

Allows visitors to narrow items by their resource class.

Give the facet a name (required).

Set the Select type for the browse faceting.

Select the classes that will make up the facets from the dropdown menu.

Check the "Show all available classes" box to get a sense of the data that is available for input.

When you are satisfied with your settings, click the "Set facet" button.

##### **Resource template** 

Allows visitors to narrow items by their [resource template](../content/resource-template.md).

Give the facet a name (required).

Set the Select type for the browse faceting.

Select the resource templates that will make up the facets.

Check the "Show all available templates" box to get a sense of the data that is available for input.

When you are satisfied with your settings, click the "Set facet" button.

##### **Item set** 

Allows visitors to narrow items by [item set](../content/item-sets.md).

Give the facet a name (required).

Set the Select type for the browse faceting.

Select the item sets that will make up the facets.

Check the "Show all available item sets" box to get a sense of the data that is available for input.

When you are satisfied with your settings, click the "Set facet" button.

##### **Full-text** 

Adds a text search bar that will narrow down the results based on what the visitor inputs. This will include all values, including title, description, class, and any extracted text. 

Give the facet a name (required).

When you are satisfied with your settings, click the "Set facet" button.

#### Numeric Data Types integration

If you are using the [Numeric Data Types module](../modules/numericdatatypes.md), you will have additional facet types to work with, including Date after, Date before, Value greater than, Value less than, Duration greater than, Duration less than, Date in interval.

![Facet Type dropdown menu showing options including Numeric Date Types](../modules/modulesfiles/FacetedBrowse-NumericDataTypesSelect.png)

Once you have selected a facet type, you will be able to configure the facet to operate with the properties that use a numeric data type. Only properties with the exact data type set (Integer, Date, Duration, or Interval) will display in the dropdown.

In the public view, the faceting will be controlled through a dropdown menu.

![Public Faceted Browse page with radio button selects for a list of Status values and a "Birth Data Before" dropdown menu in the left column. In the right column is a table of items with information for Title, Location, and Spouse](../modules/modulesfiles/FacetedBrowse-DatesPublic.png)

### Columns

The items on the page will initially display in the default format for your site (grid or list). Items will display in a table. This list of results displays the title, description, and thumbnail for each resource, just as is the case with other browse lists. 

Depending on whether your page has one category or multiple categories, the display of the initial page may change.

You can configure the information displayed about the results by adding columns of metadata to the display for your faceted browse. On the public view of a facted browse, users can sort by a column by selecting it from a dropdown menu. This column can then be sorted in ascending or descending order. If you would like to prevent users from sorting by a certain column, you can check the "Exclude sort by" checkbox when configuring that column to exclude it from the dropdown menu.

Select a type of column to add from the dropdown menu: 

- Title (link to resource) 
- Value
- Resource class
- Resource template 
- Item set 
- ID.

Once the type is selected, click the "Add" button. A drawer will open with options to configure the column. When you are satisfied with configuring the column, remember to click the "Set column" button or your work will not be saved.

![Public Faceted Browse page with columns displaying: ](../modules/modulesfiles/FacetedBrowse_columns.png)

#### **Title (link to resource)**

Give the column a name (required). 

#### **Value**

Give the column a name (required). Select a Property to be displayed (required). 

Then, set the maximum number of values for that property. To display all values, set the input to blank. This may cause very tall rows in your table, if items have multiple values for the selected property. 

If a value is very long, such as your description field, you may also end up with very tall table rows, with the largest field occupying the widest column and other columns narrowed down to compensate. 

#### **Resource class**

Give the column a name (required).

#### **Item set**

Give the column a name (required). 

Set the maximum number of item sets to be displayed. To display all values, set the input to blank. This may cause very tall rows in your table, if items are in a number of item sets. 

#### **ID**

Give the column a name (required). 

## Add a Faceted Browse page to the site navigation

Click on the [Navigation tab](../sites/site_navigation.md) for your site. From the "Add a custom link" list in the page sidebar, select the "Faceted browse" option.

![Custom links in the right drawer to add elements to the navigation](../modules/modulesfiles/FacetedBrowse-AddPageNav.png)

Give your custom link a label (required), and select from your dropdown list of faceted browse pages (required). 

You may add as many Faceted Browse custom links as you desire.

Drag and drop your pages into the desired place in your site navigation, and then save your work.

## Public views

The public view of a faceted browse should look familiar to many viewers:

![Faceted browse page with a list of events which happened on the National Mall. On the left side of the image is a list of eras with radio buttons.](../modules/modulesfiles/FacetedBrowse_publicView.png)

In this image, the facet is Era, displayed as a single-choice list. The items for this page are displayed in columns with the title and era for each item.

### Multiple categories on one page

When there are multiple categories on a page, it will load with all of the resources from all categories displayed and the categories available in a submenu.

![Faceted browse page with two categories. The categories are highlighted in a red annotation box labelled "Categories"](../modules/modulesfiles/FacetedBrowse-multiCatView1.png)

Once a user clicks on a category, the resource list will change to display only that category (and the column display you have set for that category), and the facets will replace the categories in the submenu. Users can use a "back" button on the page to return to the full list of categories and clear their filters.

![A faceted browse page with facets visible. The category heading shows up above the facets. Over that is a button labelled "back." Annotations indicate the button, category, and facet headings.](../modules/modulesfiles/FacetedBrowse-multiCatView2.png)
