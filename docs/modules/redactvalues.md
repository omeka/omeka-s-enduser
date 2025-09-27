# Redact Values

The [Redact Values module](https://omeka.org/s/modules/RedactValues/) allows administrators to hide certain pieces of metadata. Logged-out users will always be unable to see the values that are hidden; logged-in users at editor, supervisor, or global admin levels will always be able to see what has been redacted. The module allows admin to set viewability for users at the author or researcher level.

Administrators will be able to choose a resource type, build a query to filter the resources, select the property from which to redact text, select the pattern to use for redaction, and enter the replacement text.

## Adding a redaction

Select Redact Values from the Modules tab of the left-hand navigation. From the "Browse Redactions" page, click the "Add Redaction" button in the upper right corner.

![Add Redact Values button.](../modules/modulesfiles/redactValues_add-redact.png)

When adding a redaction, you are required to provide:

1. A **label** for your redaction
2. The **resource type** you would like to redact (item, item set, or media)
3. The **property** from which to redact text
4. The **pattern** to use when redacting text.

![Add Redact Values form including label, resource type, property, and pattern.](../modules/modulesfiles/redactValues_add.png)

If you'd like, you can also add a query to filter the resources from which to redact text. You can add a query via the "Edit" button, which will open a drawer on the right that provides options for narrowing your search. Alternatively, you can use "Advanced Edit" to add your query directly from the search results page by copying everything in your browser's address bar starting with the question mark all the way to the end of the search URL (to the right). In either circumstance, be sure to click the "Apply" button to add your query to the form. No query means all resources of the specified resource type will be included in your redaction. 

![Edit query tray in add Redact Values form.](../modules/modulesfiles/redactValues_query.png)

There is also a field to include the replacement text that will appear in place of the redacted values. If you leave this blank, the redacted field will not be visible to roles who do not have permission to view redactions.

Each redaction has individual viewing options. You have the option to give certain role types permissions in viewing redactions. Note that any user with permission to update a resource can automatically view its redacted text. You can allow authors or researchers by checking their respective boxes. Normally, values will be redacted for authors except for resources that they own and researchers unless you grant them permissions in individual redactions.

![Add Redact Values form Author and Researcher permissions checkboxes.](../modules/modulesfiles/redactValues_roles.png)

Note that the module does not apply redactions for users who have permission to update the resource. That means that values will never be redacted for global administrators, supervisors, and editors. 

Users who are not logged in will never be able to view redacted values.

Click "Submit" in the upper right corner to save your changes.

## Managing redactions

You can manage your already created redactions from the main module screen. To edit a previously added redaction, click the "Edit" icon next to the redaction you would like to change. 

![Edit button for existing redactions.](../modules/modulesfiles/redactValues_edit.png)

Be sure to submit the form again after you have made any changes. 

You can also sort your existing redactions by date or label in ascending or descending order via the "Sort" function in the upper right corner.

![Sort function for list of existing redactions.](../modules/modulesfiles/redactValues_sort.png)

## Adding patterns

You can customize the patterns available for redactions by selecting "Patterns" under Redact Values in the Modules tab of the left-hand navigation. To create a new pattern, select the "Add Pattern" button in the upper right corner. You will be asked to provide both a **Label** and a **Pattern**.

![Add Pattern form for Redact Values module including Label and Pattern fields.](../modules/modulesfiles/redactValues_add-pattern.png)

For the pattern, you must enter the regular expression pattern that identifies the sequence of characters that will be redacted. You must enclose the pattern with [delimiters](https://www.php.net/manual/en/regexp.reference.delimiters.php). You may use [modifiers](https://www.php.net/manual/en/reference.pcre.pattern.modifiers.php). For more information on regular expressions, see [Regular-Expressions.info](https://www.regular-expressions.info/) and [PCRE Patterns](https://www.php.net/manual/en/pcre.pattern.php). To validate your pattern, try [RegExr](https://regexr.com/).

Once you have added this information, click "Submit" in the upper right corner. Your added pattern should now appear in the Pattern dropdown menu when adding a redaction.

![Example of new pattern added to Pattern field in add Redact Values form.](../modules/modulesfiles/redactValues_pattern-dropdown.png)

<!--- needs a good example / walkthrough so people can see a use case. maybe some public view screenshots too. double check whether supervisors or editors can use this, and does it work on a site-specific basis, I don't even know. --->
