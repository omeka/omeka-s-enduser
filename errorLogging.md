---
title: Error Logging
---
If you are experiencing problems with your Omeka S installation, or you want to turn on development-style error tracking, you will need to edit the `.htaccess` and `local.config.php` files. You must use a ftp or terminal client to do so; if you're not sure how to do this, please contact your system administrator or hosting provider. 

- The `.htaccess` file is located in the main folder of your Omeka S installation.
    - Change line 1 of that file from `SetEnv APPLICATION_ENV "production"` to `SetEnv APPLICATION_ENV "development"`
- The `local.config.php` file is located in the config folder.
    - Change line 4 from `'log' => false,` to `'log' => true,`