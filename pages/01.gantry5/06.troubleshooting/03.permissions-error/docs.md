---
title: Permission Denied (WordPress)
taxonomy:
    category: docs
    tag: [gantry5]
---

Permission denied errors may present themselves when a theme is being installed in WordPress if your server is keeping Gantry from creating directories in two directories. The error may appear like this:

```
runtime exception - /htdocs/wp-content/themes/(your theme)/custom/config/default' failed on error mkdir(): permission denied
```

If you are getting this error, it means there is a small (rare) permissions issue in the server. There are two directories that Gantry needs permission to create directories for: `wp-content/cache/gantry5/` for cache, and `wp-content/themes/(your theme)/custom/` where the configuration files are kept.

For these directories, you can resolve this issue by setting their permissions to `775`.

This is a rare issue that should not appear in the vast majority of cases, however changing the permissions for these directories should resolve it. You generally do not need to reinstall the theme after receiving this error.

## Workaround for Issues with Cache Directory Restrictions

Some hosting providers, WPEngine for example, restrict the generation and execution of **php** files to trusted locations only. Since Twig cache files are being compiled to php files, this can cause an issue. We have created a workaround to help you get past this problem.

![](error_1.png?classes=shadow,border)

By navigating to the Gantry 5 Platform Settings page by either going through **Gantry 5 Admin > Extras > Platform Settings** or **Admin > Plugins > Gantry 5 Framework > Settings**, you will be given access to a number of options to help you configure how Gantry 5 is used within WordPress. 

![](error_2.png?classes=shadow,border)

Once you have made it to this page, you can assign an alternative path for Gantry 5's cache files. Your hosting provider should be able to provide you with more information on exactly where this data can/should be stored.

For example, WPEngine recommends that users place cache files within the `/tmp/` directory. Here is an example of the data that would be placed in the **Cache Path**:

```txt
/tmp/<some-random-characters>/cache/gantry5
```

The random characters ensure that your files don't conflict with other users, especially in cases where you are using shared hosting. You might have `/tmp/asid87239ijdau9y293h9duha/cache/gantry5` as your tmp directory, as an example.

Keep in mind that not every hosting provider follows the same rules. You should check with your provider to find out exactly where and how to place these files if they have this type of restriction.