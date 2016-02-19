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
