# Configuration Options

The following are commonly requested options which can be configured in the file `local.config.php`, located in the `/config` directory. 

For a full list of available configuration keys, please see the [developer documentation page on configuration settings](https://omeka.org/s/docs/developer/configuration/){target=_blank}. 

## Password settings
You can change the requirements for user passwords. The options include minimum length, number of upper and lowercase letters, and setting allowed symbols.

```
    'password' => [
        'min_length' => 6,
        'min_lowercase' => null,
        'min_uppercase' => null,
        'min_number' => null,
        'min_symbol' => null,
        'symbol_list' => '`~!@#$%^&*()-=_+[]\{}|;:",./<>?\'',
    ],
```
Requirements will [display on the user creation and edit pages](admin/users.md#password).



## Thumbnails

The `thumbnails` configuration key holds most thumbnail settings:

```
    'thumbnails' => [
        'types' => [
            'large' => ['constraint' => 800],
            'medium' => ['constraint' => 200],
            'square' => ['constraint' => 200],
        ],
        'thumbnailer_options' => [
            'imagemagick_dir' => null,
        ],
    ],
```

Under `types`, set the maximum pixel dimensions for derivative images for media files. There are separate options for large, medium, and square. Defaults for these are 800, 200, and 200 pixels respectively.

`thumbnailer_options` is an array of options passed to the specific thumbnailer in use. For example, the `imagemagick_dir` thumbnail option sets the path to the folder where ImageMagick's `convert` command can be found on the server. This can be useful if Omeka S can't auto-detect the correct path for ImageMagick.

The thumbnailer to use is set under the `service_manager` key, by setting the
alias for `Omeka\File\Thumbnailer`:

```
    'service_manager' => [
        'aliases' => [
            'Omeka\File\Thumbnailer' => 'Omeka\File\Thumbnailer\ImageMagick',
        ],
    ],
```

The default thumbnailer is `Omeka\File\Thumbnailer\ImageMagick`.  Also available are `Omeka\File\Thumbnailer\Imagick` (which uses the `imagick` PHP extension) and `Omeka\File\Thumbnailer\Gd` (which uses the commonly available `gd` PHP extension).

You can also set the thumbnailer to `Omeka\File\Thumbnailer\NoThumbnail`, which will prevent your Omeka S installation from generating thumbnails. 

[GD](https://secure.php.net/manual/en/intro.image.php){target=_blank} is a basic graphic library installed by default with PHP. It can create thumbnails for common image formats only (jpeg, gif, png). 

[Imagick and ImageMagick](https://www.imagemagick.org){target=_blank} are the same library and can create thumbnails for more than 200 formats. The difference is that Imagick is integrated into PHP and ImageMagick is the command-line version. ImageMagick requires Imagick to run.

You can use the ["System information" link](admin-dashboard.md#system-information) at the very bottom of the admin interface to double-check whether GD and imagick are enabled as PHP extensions on your server.

## PHP path

Omeka S uses background jobs for some long-running tasks that operate on many items or just otherwise might take a long time. Omeka S uses the PHP CLI (command-line interface) to run these jobs, the `php` command. An invalid PHP path can cause a number of problems for your Omeka Classic installation. 

Omeka S by default will try to automatically detect the path to the PHP CLI on the server, but for some servers this detection doesn't work, or there are multiple different `php` commands to choose from. In these situations you can manually configure the correct path in the file `local.config.php`, located in the `/config` directory:

```
    'cli' => [
        'phpcli_path' => '/usr/local/bin/php',
    ],
```

This path commonly looks like `/usr/local/php80/bin/php`, `/usr/local/bin/php`, or `/usr/local/bin/ea-php74`.

The paths here are just examples; the proper path will be specific to your server. Search the help documentation or knowledge base for your hosting provider for the correct PHP path; this is a frequently asked question for a large variety of software installations. If you can't find anything, contact your hosting provider or sysadmin and ask them.

If you have downloaded the file in order to edit it, be sure to upload the changed version back to your Omeka installation.

## Mail

The `mail` key can be used to configure how Omeka S sends emails.

The default is to use sendmail, where the server is responsible for having mail delivery configured and set up. Sendmail generally requires no configuration on the Omeka S side. Another option for some servers is to configure a direct SMTP connection for sending mail. 

An example configuration, to be added at the end of `local.config.php`, will look something like this:

```
    'mail' => [
        'transport' => [
            'type' => 'smtp',
            'options' => [
                'name' => 'localhost',
                'host' => '127.0.0.1',
                'port' => 25, // 465 for 'ssl', and 587 for 'tls'
                'connection_class' => 'smtp', // 'plain', 'login', or 'crammd5'
                'connection_config' => [
                    'username' => null,
                    'password' => null,
                    'ssl' => null, // 'ssl' or 'tls'
                    'use_complete_quit' => true,
                ],
            ],
        ],
    ],
```

See the [laminas-mail documentation](https://docs.laminas.dev/laminas-mail/transport/smtp-options/){target=_blank} for clarification.