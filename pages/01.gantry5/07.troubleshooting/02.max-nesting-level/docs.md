---
title: Maximum function nesting level
taxonomy:
    category: docs
    tag: [gantry5]
---

```
Maximum function nesting level of '100' reached, aborting!
```

If you are getting this error, it means your PHP is set to load the `xdebug` extension and that the nesting level is limited to **100**.

Using `xdebug` might be useful for debugging but if you are on a production server or don't even know what `xdebug` is, we strongly suggest you disable the extension altogether. You will immediately notice an increase in speed after that and the error would not show again.

In case you are using `xdebug` for debugging and you need the extension enabled, then you should increase the `max_nesting_level` setting (**256** is a good value).

#### Disabling Xdebug

Edit the `php.ini` file and search for `xdebug`. You should find a line that starts with `zend_extension=` and the path of the xdebug extension getting loaded. Comment that line out by prefixing with a semicolon (`;`):

```
;zend_extension="/usr/local/opt/php56-xdebug/xdebug.so"
```

Then restart your Apache server.

#### Increasing `max_nesting_level` value

Edit the `php.ini` file and search for `[xdebug]`. You should find a block containing the xdebug extension location and settings.

See if there is already an entry `xdebug.max_nesting_level`, if not, just add it at the end of the block with a higher value than **100**:

```
[xdebug]
zend_extension="/usr/local/opt/php56-xdebug/xdebug.so"
xdebug.remote_enable=1
xdebug.remote_handler=dbgp
xdebug.remote_port=9000
xdebug.remote_autostart=0
xdebug.remote_connect_back=0
xdebug.var_display_max_depth=6
xdebug.max_nesting_level=256
```

Then restart your Apache server.

>>>>> If you don't know how to edit the `php.ini` file, contact your hosting provider and let them know about the settings you want to change.
