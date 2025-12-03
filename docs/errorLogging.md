# Retrieving Error Messages

If you are experiencing problems with your Omeka S installation, you can turn on developer-style error tracking.

There are two different options for capturing error messages. You will need to edit the `.htaccess` and/or `local.config.php` files, depending on which way you choose. You must use an FTP or terminal client to do so; if you're not sure how to do this, please contact your system administrator or hosting provider. 

## Display error details

One option is to enable on-page display of error details. This will cause "Omeka S has encountered an error" pages to show the error message and details instead of a generic message, and also will display PHP-level errors and warnings on pages if they occur.

To enable this display, edit your `.htaccess` file. The `.htaccess` file is located in the main folder of your Omeka S installation.

Change line 1 of that file from 

`SetEnv APPLICATION_ENV "production"`

to 

`SetEnv APPLICATION_ENV "development"`

## Log errors

Another option for retrieving error detail information is enabling logging in Omeka S. With logging enabled, Omeka S will write out the details of all errors to a file. Any "Omeka S has encountered an error" page will have its details logged, and additional debugging/warning information may also be logged. 

You may want to choose this option if you want to get detailed error information but do not want to expose error messages to visitors or other users.

To enable error logging, edit your `local.config.php` file. The `local.config.php` file is located in the `config` folder.

Change line 4 of that file from 

`'log' => false,`

to 

`'log' => true,`

Errors will be logged to the file `logs/application.log`. If you wish to change this to another path, add a line below `'log' => true,` in the format

```
'path' => '/a/local/path',
```

Make sure this file (or location, if the file does not yet exist) is writable by your web server. 

You can then view or download that file at any time to understand errors as they are captured. 
