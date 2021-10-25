---
title: Data Visualization
---

The Data Visualization module allows site administrators are able to generate datasets and render diagrams that reflect their data. Once activated on the modules tab of the admin dashboard, Data Visualization is managed on site by site basis. 

## Creating Data Visualizations
If the Data Visualization module is active, a tab for Data Visualization will appear in the menu for individual sites. Clicking this tab will take you to a list of all visualizations created for the site. You can sort the visualizations by either date or title in ascending or descending order.

## Adding a Data Visualization
After clicking the Data Visualization tab, you can create a new visualization by clicking the *Add new visualization* button.

You will then have the option select what you would like to visualize. The five options include:
1. Count of items in item set, which visualizes the count of items that are assigned to selected item sets;
2. Count of items with classes, which visualizes the count of items that are instances of selected resource classes;
3. Count of items with properties, which visualizes the count of items that have selected properties;
4. Count of items with property values, which visualizes the count of items that have selected values of a selected property; 
5. County of property values, which visualizes the count of values of a selected property.

Once you select what you would like to visualize, click the *Next* button. You will then be on the "Add visualization" page. 

The title field is required, but the description will be included below the title of your visualization on the public facing page if you wish to include it. The search query will help narrow down the items that will be used in your data set. If you choose to leave this blank, the visualization will incorporate all items assigned to that site.

To input a search query, select either the *Edit* button or the *Advanced edit* button. 

If you select *Edit*, a sidebar will open allowing you to search full-text, search by value, search by class, search by template, search by item set, or search by owner. You can either *Preview*, *Reset*, or *Apply* your search by selecting the corresponding button at the bottom of the search sidebar. 

If you select *Advanced edit*, you will only need to fill in the provided textbook. To save your search query click *Apply*, or you can *Cancel* your search.

### Data configuration
The options under "Dataset configuration" will reflet your selection of one of the five options from the previous page. The first field will be "Dataset type," which will indicate whether you selected count of item in item sets, count of items with classes, count of items with properties, count of items with property values, or county of property values.

#### Count of items in item sets
If you are creating a count of items in a item set, you will be able to select the item sets by clicking inside the item sets box and selecting from the dropdown menu. If you do not complete this step, you will receive an error when attempting to generate your data set.

#### Count of items with classes
If you are creating a count of items with classes, you will be able to select the classes by clicking inside the classes box and selecting from the dropdown menu. If you do not complete this step, you will receive an error when attempting to generate your data set.

#### Count of items with properties
IF you are creating a count of items with properties, you will be able to select the classes by clicking inside the "Property" box and selecting from the dropdown menu. If you do not complete this step, you will receive an error when attempting to generate your data set.

#### Count of items with property values
There are two fields you need to complete under "Dataset configuration" when creating a count of items with properties: "Value property" and "Values". First, you must use the drop down menu to select the value property from the dropdown menu. Then, you can enter the specific values, separated by new lines, into the textbox. If you fail to fill out either of these fields you will receive an error when attempting to generate your data set.

#### Count of property values
When configuring your data set for counting property values, you must select a value property from the dropdown menu. If you do not complete this step, you will receive an error when attempting to generate your dataset. There are additionally two other optional configuration fields: "Minimum count" and "Maximum count." You can set the minimum and maximum counts by either typing the desired number or using the up and down arrows on the right side of the box.

### Diagram configuration
Under Diagram Configuration, you will be able to select the kind of diagram you would like to produce for your visualization. Options include bar chart, column chart, and pie chart. 

If you select bar chart or column chart, you will be asked to input the width and height of your visualization as well as the top, right, bottom, and left margins. Additionally, you will be able to use a dropdown menu to order your data by value (ascending), by value (descending), by label (ascending), or by label (descending).

If you select pie chart, you will only be asked to input the width, height, and margin.

If you edit your visualization to change the Diagram Configuration after your initial visualization is produced, you will lose your current diagram configuration.

## Generating your visualization
Once you've configured your visualization, click the "Save and..." button. Then, select the box to "Generate dataset" and click "Stay on this visualization." Once your visualization is complete, you can click the "View..." button and select "Dataset" or "Diagram."

If you select "Dataset," a new window will open that contains your dataset.

If you select "Diagram," a new tab will open containing your diagram. Diagrams will only generate in the context of a public site.

If the text is cramped in the axes of your graph, you will need to go back and adjust the margins.

## Publishing your visualization
To add your visualization to the public site, add a new "Data visualization" block to the page on which you would like it to appear. In the new block, use the dropdown menu to select the visualization you would like to add to the page. Then, click save. To remove the block, click the trash can icon in the block heading.
