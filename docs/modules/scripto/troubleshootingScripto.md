# Troubleshooting

The following are advanced options and troubleshooting tips for Scripto for Omeka S.

## Disable anonymous editing
By default, Scripto for Omeka S allows anonymous users to edit the content on your projects. 

To prevent this, you will need to edit the files in the directory containing your MediaWiki installation. Add the line 

```
$wgGroupPermissions['*']['edit'] = false;
```

to the file `LocalSettings.php`.

For more information, see the [MediaWiki manual on preventing access](https://www.mediawiki.org/wiki/Manual:Preventing_access).

## Troubleshooting
### Project sync stuck
If your project sync will not start or remains in process, check that you have [correctly configured the PHP-CLI path for your Omeka S installation](../../configuration.md#php-path). 
