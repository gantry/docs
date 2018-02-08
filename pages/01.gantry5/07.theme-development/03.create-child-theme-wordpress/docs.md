---
title: How to Create a Child Theme (WordPress)
taxonomy:
    category: docs
    tag: [gantry5]
---

Creating a child theme in WordPress is a common process, and it is outlined very well in the [official WordPress Documentation](https://codex.wordpress.org/Child_Themes). For the purpose of this tutorial, we are assuming that you have read and followed the instructions given there.

What makes a Gantry 5 child theme different is that it requires two additional files, **theme.php** and **theme.yaml**, to make it work.

!!! This process is available in the Hydrogen theme starting in version **5.2.11**. If you have a previous version of Hydrogen and you are having difficulty with child themes, you should update it to see if the issue resolves. If you are using a third party theme, and encounter difficulties getting this process to work, you may want to check with its developer that their theme has been updated with Hydrogen's changes in 5.2.11.

## theme.yaml

The first thing you will need to do is create a copy of the **theme.yaml** file which is located in `/wp-content/themes/(theme directory)/gantry/theme.yaml` and place it within the child theme directory under `/wp-content/themes/(child theme directory)/gantry/theme.yaml`.

Then, you will need to edit the **theme.yaml** file. Three important lines that should be addressed are the **name**, **description**, and the theme's **parent**.

The **parent** in this case has to match exactly the name of the directory of the parent theme. For example, we are creating a child theme of the Hydrogen theme, which has a directory name of **g5_hydrogen**. Therefor, you should list `g5_hydrogen` as the **parent**. Here is an example of this section of the yaml file:

```yaml
  theme:
    parent: g5_hydrogen
    base: gantry-theme://common
    file: gantry-theme://includes/theme.php
    class: \Gantry\Framework\Theme
    textdomain: g5_hydrogen
```

The **name** can be anything you would like. Typically, for simplicity sake, folks add the word **Child** at the end of the original theme name, but this is not required. Here is an example of this area of the yaml file:

```yaml
details:
  name: Hydrogen Child
  version: "5.2.10"
  icon: paper-plane
  date: 
  author:
    name: RocketTheme, LLC
    email: support@rockettheme.com
    link: http://www.rockettheme.com
```

The **description** does not require an edit, but doing so will make your child theme more awesome.

## theme.php

You will also need to duplicate the **theme.php** file which is located in `/wp-content/themes/(theme directory)/includes/theme.php` and place the copy in `/wp-content/themes/(child theme directory)/includes/theme.php` maintaining its original directory structure in the child theme's directory.

There are two lines you will need to add to this file in your child theme. Below is an example of an area of code you will need to look for in order to add these lines.

```php
// Initialize theme stream.
$gantry['platform']->set(
    'streams.gantry-theme.prefixes',
    array('' => array(
        "gantry-themes://{$gantry['theme.name']}/custom",
        "gantry-themes://{$gantry['theme.name']}",
        "gantry-themes://{$gantry['theme.name']}/common"
    ))
);
```

Here are the two lines you will want to add:

```php
        "gantry-themes://{$gantry['theme.parent']}",
        "gantry-themes://{$gantry['theme.parent']}/common"
```

Here is how the block looks when it is completed. Be sure to place commas after each of the code lines except for the last one prior to `))`.

```php
// Initialize theme stream.
$gantry['platform']->set(
    'streams.gantry-theme.prefixes',
    array('' => array(
        "gantry-themes://{$gantry['theme.name']}/custom",
        "gantry-themes://{$gantry['theme.name']}",
        "gantry-themes://{$gantry['theme.name']}/common",
        "gantry-themes://{$gantry['theme.parent']}",
        "gantry-themes://{$gantry['theme.parent']}/common"
    ))
);
```

Once you have made this modification, save the file and start using your new child theme.
