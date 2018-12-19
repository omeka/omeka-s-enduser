---
title: Installing
---

Basic instructions for installing and updating from GitHub can be found in the [ReadMe](https://github.com/omeka/omeka-s/blob/develop/README.md) of the Omeka S github repository.

## System Requirements
In order to install Omeka S, you will need a server running the following: 

- Linux
- Apache (with [AllowOverride](https://httpd.apache.org/docs/2.4/mod/core.html#allowoverride) set to "All" and [mod_rewrite ](http://httpd.apache.org/docs/current/mod/mod_rewrite.html) enabled)
- MySql 5.5.3+
- PHP 5.6+ (latest stable version preferred, with [PDO](http://php.net/manual/en/intro.pdo.php), [pdo_mysql](http://php.net/manual/en/ref.pdo-mysql.php), and [xml](http://php.net/manual/en/intro.xml.php) extensions installed)
- Optional, to create thumbnails: ImageMagick version 6.7.5 or greater, the PHP `imagick` extension, or the PHP `gd` extension


## Installing from released zip file
NB: Before you install Omeka S, you need to create a MySQL database and user. Omeka S must have a dedicated database (you cannot use a prefix for a database used by another system or Omeka S or Classic installation). For more information on creating a database and user, please see your hosting's support documentation or talk to your system administratory.

1. Download the latest release from the release page
1. Open config/database.ini and add your MySQL username, password, database name, and host name. The user and database must be created before this step.
1. Make sure the files/ directory is writable by Apache.
1. In your web browser, navigate to the admin page for your omeka-s installation, where you can complete installation.

## Initial setup
Once you have successfully installed and configured the database.ini file, you can navigate to the admin location of your Omeka S installation. If your installation is `/myomekas/` then your admin dashboard would be located at `/myomekas/admin`

The first time you to the install site, you will need to enter information for the first user, along with basic information for your install. There are two sections on this page: *Create the first user* and *Settings*. 

In the First User section, enter:

- an *email* address, and type again to confirm.
- confirm the *password* and type again in the next input to confirm.
- a *display name* for the user

Note that you can change all of these later in the [User](/admin/users.md) management section of your install.

![First user section with fields as described](/files/installOmekaS1.png)

In the Settings section, enter:

- An *installation title* which will display on the admin site,
- The installation's *time zone* (select from dropdown), and
- select a *locale* for the language of the admin side of the installation.

![Settings section with fields as described](/files/installOmekaS2.png)

You can changes these at any time in the in the [Settings](/admin/settings.md) section of your [Admin Dashboard](/admin-dashboard.md)

See [Configuration Options](configuration) for information on settings for thumbnail generation, php path, and more.

## Updating
1. Download the latest release from the release page
1. Make a copy of your `/config` directory. You will need to restore your local.config.php and database.ini files from that copy.
1. Make a copy of your `/modules` and `/themes` directories.
1. Make a copy of your `/files` directory.
1. Remove all Omeka S files, and replace them with the files from the updated zip file.
1. Replace your original `/config/local.config.php` and `/config/local/database.ini` file, and the /modules, /themes`, and `/files` directories that you copied.
1. In your web browser, go to your site's admin page (yoururl/admin) and run any migrations that are needed.
