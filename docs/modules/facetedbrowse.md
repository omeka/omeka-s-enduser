# Faceted Browse
The Faceted Browse module offers filtering and sorting that helps users narrow their results while browsing resources. With this module, site administrators are able to configure faceted browse pages and add them to their sites. Then, end users will be able to browse through categories of resources and use the facets to narrow the results in a logical and intuitive manner.

Once activated on the [modules](index.md) tab of the admin dashboard, Faceted Browse is configured on a site-by-site basis. 

## Creating and managing Faceted Browse pages 

If the Facet Browse module is active, then a tab for Faceted Browse will appear in the context menu for every site. Clicking on this tab will take you to a list of all of your Faceted Browse pages for that site.

The administrative user must create Faceted Browse pages before they can be added to the site's navigation. 

Create a new page by clicking the *Add a page* button. Give the page a title, and then select the resource type that you would like to browse (Items, Item Sets, or Media). 

Save the page and select *Stay on this page*.

If you are returning to edit existing pages, you can also save your edits and return to the list of pages by selecting Save and *Return to page*.

### Adding and Editing Categories

Once the page has been created, the user can create a Category, which is a logical grouping of resources that can be described using faceted classification.

Click the *Add* button.

Give your category a name.

Use the search query interface to set the pool of resources that users will browse.

After setting the pool of resources, you can create facets and add columns to your browse display. Once you are done creating your facets and setting your display columns, save your category.

You may repeat the category creation and configuration process to add as many categories to your page as you like.  

#### Facets

Select a type of facet to add: Value; Resource class; Resource Template; Item Set; Full text.

Once the type is selected, click the *Add* button. A drawer will open with options to configure the facet. 

You can add more than one type of facet to each page.

**Value**

Give the facet a name (required).
Select a property for the facet. 
Use the Query type to narrow the facet: 

- Is exactly; 
- Is not exactly; 
- Contains; 
- Does not contain; 
- Is resource with ID; 
- Is not resource with ID; 
- Has any value; 
- Has no values;

Set the Select type for the browse faceting:

- Single (list)
- Multiple (list)
- Single Dropdown

Enter the Values that will make up the facets. Each value should be on a separate line. The format of each value depends on the query type you have selected above. If the query type is

- "Is exactly": enter a value that is an exact match to the property value.
- "Contains": enter a value that matches any part of the property value.
- "Is resource with ID": enter the resource ID followed by any value (usually the resource title), separated by a single space.
- "Has any value": enter the property ID followed by any value (usually the property label), separated by a single space.

Check the *Show all available values* box to get a sense of the data that is available for input.

When you are satisfied with your settings, click the *Set facet* button.

**Resource class**

Give the facet a name (required).

Set the Select type for the browse faceting:

- Single (list)
- Multiple (list)
- Single Dropdown

Select the Classes that will make up the facets. 

Check the *Show all available classes* box to get a sense of the data that is available for input.

When you are satisfied with your settings, click the *Set facet* button.

**Resource template**

Give the facet a name (required).

Set the Select type for the browse faceting:

- Single (list)
- Multiple (list)
- Single Dropdown

Select the Resource templates that will make up the facets. 

Check the *Show all available templates* box to get a sense of the data that is available for input.

When you are satisfied with your settings, click the *Set facet* button.

**Item set**

Give the facet a name (required).

Set the Select type for the browse faceting:

- Single (list)
- Multiple (list)
- Single Dropdown

Select the Item sets that will make up the facets. 

Check the *Show all available item sets* box to get a sense of the data that is available for input.

When you are satisfied with your settings, click the *Set facet* button.

**Full-text**

Give the facet a name (required).

When you are satisfied with your settings, click the *Set facet* button.

### Columns
The display of the browse list of results defaults to include the title and description for the resource, just as is the case with other browse lists. You can configure the information displayed about the results by adding columns of metadata to the display for your faceted browse.

Select a type of column to add from the dropdown menu: Title (link to resource); Value; Resource class; Resource template; Item set; ID. 

Once the type is selected, click the *Add* button. A drawer will open with options to configure the column.

**Title (link to resource)**

Give the column a name (required).

When you are satisfied with configuring the column, click the *Set column* button.

**Value** 

Give the column a name (required).

Select a Property to be displayed (required). Then, set the maximum number of values for that property. To display all values, set the input to blank.

When you are satisfied with configuring the column, click the *Set column* button.

**Resource class**

Give the column a name (required).

When you are satisfied with configuring the column, click the *Set column* button.

**Item set**

Give the column a name. (Required)

Set the maximum number of item sets to be displayed. To display all values, set the input to blank.

When you are satisfied with configuring the column, click the *Set column* button.

**ID**

Give the column a name (required).

When you are satisfied with configuring the column, click the *Set column* button.

## Add a Faceted Browse page to the Site Navigation.
Click on the Navigation tab for your site. Select *Faceted browse* from the *Add a custom link* list in the page sidebar. 

Give your custom link a label (required), and select from your dropdown list of faceted browse pages (required). 

You may add as many Faceted browse custom links as you desire.

Drag and drop your pages into the desired place in your site navigation, and then save your work. 