---
title: Asset Timestamps
taxonomy:
    category: docs
    tag: [gantry5]
---

You might notice file identifiers being used in compiled code. For example, an image file might appear in the code as `img-01.jpg?56667` with a `?` trailed by a series of numbers. These identifiers are essentially a timestamp of the file which changes when the file is modified, updated, replaced, etc.

This number is applied, by default, for up to a week after a change to an asset takes place. This doesn't only affect media files. It is also applied to **CSS** and **JavaScript** assets, as well.

This is especially useful when you are in Develop mode, or in the process of making updates to your page. It encourages the browser to refresh the asset so it doesn't load it from cache.

In Joomla, this feature can be turned off by accessing the **System - Gantry 5** plugin settings. You can do this by navigating to **Admin > Extensions > Plugins > System - Gantry 5**.

![Asset Timestamps](asset.png?classes=shadow,border)

Once there, you can turn this off by toggling the **Asset Timestamps** option to **No**.

You can also adjust the number of days a timestamp is maintained using the **Timestamp Period** field. The value you place in this field is the number of days the asset timestamp will be maintained.