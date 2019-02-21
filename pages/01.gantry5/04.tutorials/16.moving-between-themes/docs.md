---
title: Moving Custom Settings Between Themes
taxonomy:
    category: docs
    tag: [gantry5]
---

## Introduction

Sometimes, you want to move your existing layout and settings from one Gantry 5 theme to another. This is a relatively simple process thanks in large part to how Gantry 5 is designed.

The **Custom** folder is the basic concept of Gantry 5 where everything that gets stored after a user interaction: custom settings, custom layouts, and custom CSS all goes in that folder.

This ensures that it can be easily backed up and never lost after updates. Because we use a flat-file approach for storing the data, it can easily get ported over to other instances, both between templates as well as between platforms.

[ui-tabs position="top-left" active="0"]
[ui-tab title="Joomla"]

In Joomla, this directory is located in `/templates/THEME_NAME/custom/`.

In the case of moving the configuration files from one template to another - the ID number of each outline (i.e. 235) needs to match the corresponding directory number found in `custom/config`. The ID number can be found via your Joomla Administrator -> Extensions -> Templates (far right hand column (see Image 1 below)). You can match the ID numbers of these outlines by renaming the directories (see Image 2) and then moving them over. Also, if any of your layouts are inheriting sections / particles from one another, you will need to modify any ID number(s) that are shown in the layout.yaml file(s).

! If the number of outlines in your Joomla administrator is less than the number of directories you are looking to move over, simply create a new Joomla outline(s) in your Joomla administrator and then match this new ID number(s) with the directory and then move it over.

Please backup your website before undertaking such a change.

![Image 1](img01.jpg?classes=shadow,border)
![Image 2](img02.jpg?classes=shadow,border)

[/ui-tab]
[ui-tab title="WordPress"]

In WordPress, this directory is located in `/wp-content/themes/THEME_NAME/custom/`.

[/ui-tab]
[ui-tab title="Grav"]

In Grav, this directory is located in `user/data/gantry5/themes/THEME_DIR/`.

[/ui-tab]
[/ui-tabs]

The contents of the `/config` folder in particular are important when transferring configuration data between themes. This folder contains layout and assignments information for various outlines in your site.

! You may need to do some minor reconfiguration once you have moved the contents of this directory to your new theme's folder. For example, you might have certain particles or other elements that are supported on one theme and not on another.

