---
title: Updating Themes
taxonomy:
    category: docs
    tag: [gantry5]
---

Updating Gantry 5 themes is a very similar process to updating any other theme on its respective platform. The process for updating a Gantry 5 theme for Joomla, as an example, is virtually identical. 

That said, there are a few notes of caution that you should be aware of prior to starting a manual update. This guide will cover these and go over the update process in greater detail.

## Common Notes

!! Prior to updating any template or theme, we highly recommend backing up your site from stem to stern. This includes the database (if any), and your theme's directory so that you can quickly restore it to the state it was prior to the update should you come across any issues.

Outside of backing up your site, you should keep track of the file(s) you have altered since installing your theme. In most cases, any changes you have made will be stored in the `custom` directory safely tucked away in your theme's directory apart from the rest of the the theme's files which are subject to change during an update.

However, there may be cases where you have customized a theme file directly at the source, rather than editing a duplicate in the `custom` directory. If this is the case for your site, make sure you back up the file(s) and store them in a safe place. You may need them for reference after the update should any of your changes revert.

! The process outlined in this guide may not apply to all Gantry 5 themes. Some third-party theme developers may have different update processes depending on their unique situations. This guide is intended to offer a common use scenario as it applies to the **Hydrogen** theme.

## Platform-specific Process

[ui-tabs position="top-left" active="0"]
[ui-tab title="Joomla"]

Joomla makes it easy to update your Gantry 5-powered template. Once an update is available, you will be notified in the Joomla administrator just as you would with any other extension.

![Updating](updating_1.png?classes=shadow,border)

You can initiate the update by navigating to **Administrator > Extensions > Extension Manager > Update**, selecting the theme package, and then the **Update** button to initiate the update.

! Gantry should be updated prior to the template. In some cases, the template update depends on new features included with the latest version of Gantry.

If the update is successful, you will be notified as such and you can continue to use the theme as you did previously. The update process should not affect your custom directory, though if you have any theme-related files outside of the custom directory modified, we recommend comparing your backed up copy to the new copy of the file and manually moving your customizations from there.

[/ui-tab]
[ui-tab title="WordPress"]

There are a several ways to go about manually updating your Gantry-powered WordPress theme. Each of these methods requires an FTP connection to facilitate replacing the `custom` directory (as well as any customized theme files outside of that directory) as you are essentially deleting the existing theme and installing the updated version from scratch.

Because any changes you made in the administrator are stored in the `custom` directory, they should be safe throughout this process as long as you performed the recommended backup beforehand.

### Method 1: Selective File Replacement

In the vast majority of cases where an updated version of a theme is available, there should be a changelog provided by the developer. This changelog should detail any files that were added, removed, or altered during the update. You can use this as a guide to determine which files you need to work with in your theme's directory.

Your theme's files are contained within the theme's directory. For example, the Hydrogen theme's files can be found in `ROOT/wp-content/themes/g5_hydrogen/`. Once you have downloaded the updated version, you can unpack it and begin replacing the existing files with the updated version, adding new files and/or directories, and deleting any files deleted in the updated version.

After you have done this, make sure you clear the WordPress cache completely and test your site.

### Method 2: Install Full Theme Over Existing Theme

If you are confident that the only changes you have made to your site are stored in the theme's `custom` directory, you can copy that directory and place it somewhere safe and upload the new, updated version of the theme.

![Updating](updating_2.png?classes=shadow,border)

To do this, navigate to **Admin > Appearance > Themes**. At the top of the **Themes** page is an **Add New** button. Selecting it takes you to the **Add Themes** page where you cal select the **Upload Theme** button which is placed in the same position the Add New button was in the last page.

Now, you simply need to choose the theme's zip package and select **Install Now**. Once your installation is complete you will be given the option to **Activate** it. Do so, and before you go to any other area of the admin, use your FTP program to replace the `custom` directory and its contents that you copied earlier.

[/ui-tab]
[ui-tab title="Grav"]

Grav documentation is coming soon...

[/ui-tab]
[/ui-tabs]

