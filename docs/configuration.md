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

Use the [System Information page](admin-dashboard.md#system-information) to verify your installation's ImageMagick version. If there is an error when you click the button, that can indicate whether you need to set the configuration manually.

![The System Information buttons to retrieve the PHP path and the ImageMagick version.](files/systeminfo_buttons.png)

The thumbnailer to use is set under the `service_manager` key, by setting the
alias for `Omeka\File\Thumbnailer`:

```
    'service_manager' => [
        'aliases' => [
            'Omeka\File\Thumbnailer' => 'Omeka\File\Thumbnailer\ImageMagick',
        ],
    ],
```

The default thumbnailer is `Omeka\File\Thumbnailer\ImageMagick`. Also available are `Omeka\File\Thumbnailer\Imagick` (which uses the `imagick` PHP extension) and `Omeka\File\Thumbnailer\Gd` (which uses the commonly available `gd` PHP extension).

You can also set the thumbnailer to `Omeka\File\Thumbnailer\NoThumbnail`, which will prevent your Omeka S installation from generating thumbnails. 

[GD](https://secure.php.net/manual/en/intro.image.php){target=_blank} is a basic graphic library installed by default with PHP. It can create thumbnails for common image formats only (jpeg, gif, png). 

[Imagick and ImageMagick](https://www.imagemagick.org){target=_blank} are the same library and can create thumbnails for more than 200 formats. Imagick is integrated into PHP and ImageMagick is the command-line version. 

ImageMagick may require you to manually set a path in `imagemagick_dir`, whereas Imagick and GD do not require paths.

You can use the ["System information" page](admin-dashboard.md#system-information) at the very bottom of the administrative interface to double-check whether GD and Imagick are enabled as PHP extensions on your server.

!!! note
	Some servers will not allow applications to run command-line programs via PHP. You may see an error message such as 

	`Laminas\ServiceManager\Exception\ServiceNotCreatedException`

	`Service with name “Omeka\Cli” could not be created. Reason: Neither “proc_open()” nor “exec()” are available.`

	In this case, ImageMagick will not work but Imagick and GD will.

## PHP path

Omeka S uses background jobs for some long-running tasks that operate on many items or just otherwise might take a long time. Omeka S uses the PHP CLI (command-line interface) to run these jobs, the `php` command. An invalid PHP path can cause a number of problems for your Omeka installation. 

Omeka 4.0 and later requires PHP version 7.4 and later.

Omeka S by default will try to automatically detect the path to the PHP CLI on the server, but for some servers this detection doesn't work, or there are multiple different `php` commands to choose from. 

Use the [System Information page](admin-dashboard.md#system-information) to verify that you installation has identified the correct PHP path. If there is an error when you click the button, that can indicate whether you need to set the configuration manually.

![The System Information buttons to retrieve the PHP path and the ImageMagick version.](files/systeminfo_buttons.png)

If you begin to see errors once you start working with Omeka, reading something like "PHP-CLI error: invalid PHP path", or have [jobs](admin/jobs.md) that start but do not finish, you will need to manually set the PHP path.

You may also wish to manually select an earlier stable PHP version, rather than a new version that may be causing unexpected behavior in your Omeka site.

To set your PHP path you will need access to the server where your Omeka S site lives; you set the path by editing files in the Omeka site. You cannot set the PHP path from the admin dashboard.

Manually configure the correct path in the file `local.config.php`, located in the `/config` directory:

```
    'cli' => [
        'phpcli_path' => null,
    ],
```

Replace the word "null" with a path, contained in single quotes ('usr/local/bin/php'). This path commonly looks like `/usr/local/php80/bin/php`, `/usr/local/bin/php`, or `/usr/local/bin/ea-php74`.

These are just examples; the proper path will be specific to your server. Search the help documentation or knowledge base for your hosting provider for the correct PHP path; this is a frequently asked question for a large variety of software installations. If you can't find anything, contact your hosting provider or sysadmin and ask them.

If you have downloaded the file in order to edit it, be sure to upload the changed version back to your Omeka installation.

## Mail

The `mail` key can be used to configure how Omeka S sends emails. Omeka sends emails to [users upon registration](admin/users.md#create-a-user) and when they reset their passwords; modules can add other email functions, such as [confirming submissions](modules/collecting.md). 

The default is to use [sendmail](https://en.wikipedia.org/wiki/Sendmail){target=_blank}, where the server is responsible for having mail delivery configured and set up. Sendmail generally requires no configuration on the Omeka S side. Another option for some servers is to configure a direct SMTP connection for sending mail. 

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

Some mail setups only allow sending mail with a From header that uses a specific, authorized address. To ensure all outgoing mail uses a specific From address, you can use `default_message_options`:

```
    'mail' => [
       'default_message_options' => [
           'from' => 'email@example.com',
        ],
    ],
```

## Garbage collection

As of Omeka 4.2, garbage collection of sessions is now turned on by default even for servers that otherwise disable it.

If you wish to manually turn this off, you can set 

```
	'session' => [
		'allow_no_gc' => true,
	],
``` 