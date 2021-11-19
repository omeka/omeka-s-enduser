---
title: Data Visualization
---
# Data Visualization

The Data Visualization module allows site administrators are able to generate datasets and render diagrams that reflect their data. Once installed and activated on the modules tab of the admin dashboard, Data Visualization is managed on site by site basis. 

## Creating Data Visualizations
If the Data Visualization module is active, a tab for Data Visualization will appear in the menu for individual sites. Clicking this tab will take you to a list of all visualizations created for the site. You can sort the visualizations by either date or title in ascending or descending order.

## Adding a Data Visualization
After clicking the Data Visualization tab, you can create a new visualization by clicking the *Add new visualization* button.

You will then have the option select what you would like to visualize. The five options include:

1. **Count of items in item set**, which visualizes the count of items that are assigned to selected item sets;
2. **Count of items with classes**, which visualizes the count of items that are instances of selected resource classes;
3. **Count of items with properties**, which visualizes the count of items that have selected properties;
4. **Count of items with property values**, which visualizes the count of items that have selected values of a selected property; 
5. **County of property values**, which visualizes the count of values of a selected property.

Once you select what you would like to visualize, click the *Next* button. You will then be on the "Add visualization" page, where you can describe and configure visualization.

- Each visualization requires a _Title_.
- You may add a prose _Description_ of the visualization.
- Use the _Search Query_ interface to set the pool if resources to visualized. To input a search query, select either the *Edit* button or the *Advanced edit* button. If you choose to leave this blank, the visualization will incorporate all items assigned to that site.
    - If you select *Edit*, a sidebar will open allowing you to search full-text, search by value, search by class, search by template, search by item set, or search by owner. You can either *Preview*, *Reset*, or *Apply* your search by selecting the corresponding button at the bottom of the search sidebar. 
    - If you select *Advanced edit*, you will only need to fill in the provided textbook. To save your search query click *Apply*, or you can *Cancel* your search.


![Add Data Visualization form including Title, Description, Search Queary and Data configuration options for a Count of Items with Property Values visualization](../modules/modulesfiles/dataviz_editVisualization.png)

### Data configuration
The options for data configuration will reflect the "Dataset type" you selected initially: 

#### Count of items in item sets
If you are creating a count of items in a item set, you will be able to select the item sets by clicking inside the item sets box and selecting from the dropdown menu. If you do not complete this step, you will receive an error when attempting to generate your data set.

#### Count of items with classes
If you are creating a count of items with classes, you will be able to select the classes by clicking inside the classes box and selecting from the dropdown menu. If you do not complete this step, you will receive an error when attempting to generate your data set.

#### Count of items with properties
If you are creating a count of items with properties, you will be able to select the property by clicking inside the "Property" box and selecting from the dropdown menu. You may add more than one property. If you do not complete this step, you will receive an error when attempting to generate your data set.

#### Count of items with property values
There are two fields you need to complete under "Dataset configuration" when creating a count of items with properties: "Value property" and "Values". First, you must use the drop down menu to select the value property from the dropdown menu. Then, you can enter the specific values, separated by new lines, into the textbox. If you fail to fill out either of these fields you will receive an error when attempting to generate your data set.

#### Count of property values
When configuring your data set for counting property values, you must select a value property from the dropdown menu. If you do not complete this step, you will receive an error when attempting to generate your dataset. There are additionally two other optional configuration fields: "Minimum count" and "Maximum count." You can set the minimum and maximum counts by either typing the desired number or using the up and down arrows on the right side of the box.

### Diagram configuration
Under Diagram Configuration, you will be able to select the kind of diagram you would like to produce for your visualization. Options include _bar chart_, _column chart_, and _pie chart_. 

If you select **bar chart** or **column chart**, you will be asked to input the width and height of your visualization as well as the top, right, bottom, and left margins. Additionally, you will be able to use a dropdown menu to order your data by value (ascending), by value (descending), by label (ascending), or by label (descending).

If you select **pie chart**, you will only be asked to input the width, height, and margins.

If you edit your visualization to change the Diagram Configuration after your initial visualization is produced, you will lose your current diagram configuration.

![Diagram configuration form for a Column chart](../modules/modulesfiles/dataviz_diagramConfig.png)

## Generating your visualization
Once you've configured your visualization, click the "Save and..." button. Then, select the box to "Generate dataset" and click "Stay on this visualization." 

![Save menu with Generate dataset checked](../modules/modulesfiles/dataviz_saveGenerate.png)

Once your visualization is complete, you can click the "View..." button and select "Dataset" or "Diagram."

If you select "Dataset," a new window will open that contains your dataset.

If you select "Diagram," a new tab will open containing your diagram. Diagrams will only generate in the context of a public site.

![View menu with Dataset and Diagram](../modules/modulesfiles/dataviz_viewMenu.png)

If the text is cramped in the axes of your graph, you will need to go back and adjust the margins.

You can save your work and select "Return to Visualizations," which will bring you to a browse list of all of your visualizations where you can view the diagram or dataset, or edit the visualization.

![Browse list of two visualizations](../modules/modulesfiles/dataviz_browse.png)

## Publishing your visualization
Data Visualizations are published by adding them to site pages. 

When creating a page within a site, add a new "Data visualization" block. In the new block, use the dropdown menu to select the visualization you would like to add to the page. 

Then, save the page edits. To remove the block, click the trash can icon in the block heading.

![Data visualization block in a page](../modules/modulesfiles/dataviz_block.png)