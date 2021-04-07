# Installing

Basic instructions for installing and updating from GitHub can be found in the [ReadMe](https://github.com/omeka/omeka-s/blob/develop/README.md) of the Omeka S github repository.

## System Requirements
In order to install Omeka S, you will need a server running the following: 

- Linux
- Apache (with [AllowOverride](https://httpd.apache.org/docs/2.4/mod/core.html#allowoverride) set to "All" and [mod_rewrite ](http://httpd.apache.org/docs/current/mod/mod_rewrite.html) enabled)
- MySQL, minimum version 5.6.4 (or MariaDB, minimum version 10.0.5)
- PHP, minumum version 7.1, with [PDO](http://php.net/manual/en/intro.pdo.php), [pdo_mysql](http://php.net/manual/en/ref.pdo-mysql.php), and [xml](http://php.net/manual/en/intro.xml.php) extensions installed
- Optional, to create thumbnails: ImageMagick version 6.7.5 or greater, the PHP `imagick` extension, or the PHP `gd` extension

## Installing from released zip file
NB: Before you install Omeka S, you need to create a MySQL database and user. Omeka S must have a dedicated database (you cannot use a prefix for a database used by another system or Omeka S or Classic installation). For more information on creating a database and user, please see your hosting's support documentation or talk to your system administratory.

1. Download the latest release from the release page
1. Open config/database.ini and add your MySQL username, password, database name, and host name. The user and database must be created before this step.
1. Make sure the files/ directory is writable by Apache.
1. In your web browser, navigate to the admin page for your Omeka S installation (yoururl/admin), where you can complete installation.

## Initial setup
Once you have successfully installed and configured the database.ini file, you can navigate to the admin location of your Omeka S installation. If your installation is `/myomekas/` then your admin dashboard would be located at `/myomekas/admin`

The first time you to the install site, you will need to enter information for the first user, along with basic information for your install. There are two sections on this page: *Create the first user* and *Settings*. 

In the First User section, enter:

- an *email* address, and type again to confirm.
- confirm the *password* and type again in the next input to confirm.
- a *display name* for the user

Note that you can change all of these later in the [User](admin/users.md) management section of your install.

![First user section with fields as described](files/installOmekaS1.png)

In the Settings section, enter:

- An *installation title* which will display on the admin site,
- The installation's *time zone* (select from dropdown), and
- select a *locale* for the language of the admin side of the installation.

![Settings section with fields as described](files/installOmekaS2.png)

You can changes these at any time in the in the [Settings](admin/settings.md) section of your [Admin Dashboard](admin-dashboard.md)

See [Configuration Options](configuration.md) for information on settings for thumbnail generation, php path, and more.

## Updating
1. Download the latest release from the release page
1. Make a copy of your `/config` directory. You will need to restore your `local.config.php` and `database.ini` files from that copy.
1. Make a copy of your `/modules` and `/themes` directories.
1. Make a copy of your `/files` directory.
1. Remove all Omeka S files, and replace them with the files from the updated zip file.
1. Replace your original `/config/local.config.php` and `/config/database.ini` file, and the `/modules`, `/themes`, and `/files` directories that you copied.
1. In your web browser, go to your site's admin page (yoururl/admin) and run any migrations that are needed.

## Install on Windows or Mac OS (basic development purpose only)
Omeka S does not support proprietary or closed source operating systems. However, for **basic development purposes** or for quick training, Omeka can run with [WAMP](http://www.wampserver.com), [MAMP](https://www.mamp.info) or similar tools.

Follow the standard installation instructions. You will need to make the following [configuration](configuration.md) changes to the file `config/local.config.php` to work.

First, the php path may need to be set if php. Edit the config file and fill the `phpcli_path` at line 12 with the appropriate path for your operating system.

Second, you need to configure Omeka S to use the thumbnailer which is available in your server. Edit the `local.config.php` file with the following, based on what is available for your system:

- replace the default thumbnailer `Omeka\File\Thumbnailer\ImageMagick` by `Omeka\File\Thumbnailer\Gd`.
- replace the default thumbnailer `Omeka\File\Thumbnailer\ImageMagick` by `Omeka\File\Thumbnailer\Imagick`, and enable Imagick in the file `php.ini` of your server via the server admin interface or directly in the file.
- keep the default thumbnailer, but install the command line tool `imagemagick` and set its directory as value of `imagemagick_dir`. To install imagemagick, see the documentation of your server.

[GD](https://secure.php.net/manual/en/intro.image.php) is a basic graphic library installed by default with PHP. It can create thumbnails for common image formats only (jpeg, gif, png). [Imagick and ImageMagick](https://www.imagemagick.org) are the same library and can create thumbnails for more than 200 formats. The difference is that the first is integrated in php and generally older than the command-line version.
