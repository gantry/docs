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

Outside of backing up your site, you should keep track of the file(s) you have altered since installing your theme. In most cases, any changes you have made will be stored in the `custom` directory safely tucked away in your theme's directory apart from the rest of the theme's files which are subject to change during an update.

However, there may be cases where you have customized a theme file directly at the source, rather than editing a duplicate in the `custom` directory. If this is the case for your site, make sure you back up the file(s) and store them in a safe place. You may need them for reference after the update should any of your changes revert.

! The process outlined in this guide may not apply to all Gantry 5 themes. Some third-party theme developers may have different update processes depending on their unique situations. This guide is intended to offer a common use scenario as it applies to the **Hydrogen** theme.

## Platform-specific Process

[ui-tabs position="top-left" active="0"]
[ui-tab title="Joomla"]

Joomla makes it easy to update your Gantry 5-powered template. Once an update is available, you will be notified in the Joomla administrator just as you would with any other extension.

![Updating](updating_1.png?classes=shadow,border)

You can initiate the update by navigating to **Administrator > Extensions > Manage > Update**, selecting the theme package, and then the **Update** button to initiate the update.

! Gantry should be updated prior to the template. In some cases, the template update depends on new features included with the latest version of Gantry.

If the update is successful, you will be notified as such and you can continue to use the theme as you did previously. The update process should not affect your custom directory, though if you have any theme-related files outside of the custom directory modified, we recommend comparing your backed up copy to the new copy of the file and manually moving your customizations from there.

! If you are using a template that does not utilize Joomla's Update option (this includes any [RocketTheme](http://rockettheme.com/) premium template), then simply upload the latest template package via **Administrator > Extensions > Manage > Install > Upload Package File** to update the template.

[/ui-tab]
[ui-tab title="WordPress"]

There are a several ways to go about manually updating your Gantry-powered WordPress theme. Each of these methods requires an FTP connection to facilitate replacing the `custom` directory (as well as any customized theme files outside of that directory) as you are essentially deleting the existing theme and installing the updated version from scratch.

Because any changes you made in the administrator are stored in the `custom` directory, they should be safe throughout this process as long as you performed the recommended backup beforehand.

### Method 1: Selective File Replacement

In the vast majority of cases where an updated version of a theme is available, there should be a changelog provided by the developer. This changelog should detail any files that were added, removed, or altered during the update. You can use this as a guide to determine which files you need to work with in your theme's directory.

Your theme's files are contained within the theme's directory. For example, the Hydrogen theme's files can be found in `ROOT/wp-content/themes/g5_hydrogen/`. Once you have downloaded the updated version, you can unpack it and begin replacing the existing files with the updated version, adding new files and/or directories, and deleting any files deleted in the updated version.

After you have done this, make sure you clear the WordPress / Gantry cache completely and test your site.

### Method 2: Install Full Theme Over Existing Theme

If you are confident that the only changes you have made to your site are stored in the theme's `custom` directory, you can simply upload the new, updated version of the theme.

![Updating](updating_2.png?classes=shadow,border)

To do this, navigate to **Admin > Appearance > Themes**. At the top of the **Themes** page is an **Add New** button. Selecting it takes you to the **Add Themes** page where you can select the **Upload Theme** button which is placed in the same position the Add New button was in the last page.

Now, you simply need to choose the theme's zip package and select **Install Now**. Once your installation is complete you will be given the option to **Activate** it. Activate it, clear your Gantry cache, and then test your site.

[/ui-tab]
[ui-tab title="Grav"]

You can update a Gantry 5 theme on Grav in several different ways. The preferred method of updating themes depends on how that theme is listed.

If your theme is part of the Grav GPM like Hydrogen, Helium, or many other free themes listed on the [Grav Themes Repository](https://getgrav.org/downloads/themes), you can update them using the **Grav Admin** in either the **Dashboard** or the **Themes** section of the admin. You can also update the theme using the GPM from a **command line** or **terminal**.

If your theme is not listed on the Grav Themes Directory, or you prefer to manually update it from the file system, you can use our **File Manager** method listed below.

## First Method: Individual Theme Updater

![](grav_theme_update.png?classes=shadow,border)

When an update is available, a notice will be over the theme's thumbnail in the **Admin > Themes** section of the Grav Admin. You can individually update the plugin by clicking the **UPDATE** banner to take you to the theme's description page where you can update it directly.

<div align="center"><a href="https://learn.getgrav.org/admin-panel/themes#controls" class="button"><i class="fa fa-fw fa-graduation-cap"></i> Learn More About the Themes Section of the Admin</a></div>

## Second Method: Dashboard

You can also update your plugins and themes all at once from the main **Dashboard** area of the **Grav Admin**.

![](g5_grav_update_3.png?classes=shadow,border)

All you need to do is select the **<i class="fa fa-cloud-download"></i> Update** button in the **Maintenance** area of the page. This will update all of your plugins and themes at the same time.

<div align="center"><a href="https://learn.getgrav.org/admin-panel/dashboard#maintenance-and-statistics" class="button"><i class="fa fa-fw fa-graduation-cap"></i> Learn More About the Grav Dashboard</a></div>

## Third Method: Command Line

Updating your theme using the command line is simple and easy. Technically, it executes the same process as you would access in the Grav Admin, but enables you to do so from the convenience of the command line.

Here are the steps:

* Open Command Line or Terminal and navigate to the root directory of your Grav site on your server.
* Enter one of the following lines:
    * `bin/gpm update` to initiate an update of all of your currently-installed plugins and themes.
    * or `bin/gpm update helium` to update only the Helium theme.
* Enter `Y` to confirm the update.

The update will run by itself and the theme will be available to you as soon as it's done.

<div align="center"><a href="https://learn.getgrav.org/cli-console/grav-cli-gpm#update" class="button"><i class="fa fa-fw fa-graduation-cap"></i> Learn More Command Line Updating</a></div>

## Fourth Method: File Manager

! This method is available to you in the event that you are using a theme that isn't listed in the Grav GPM. One common example of this would be a premium theme from a third party, such as [RocketTheme](http://rockettheme.com).

You can manually update the theme by doing the following:

* Download the latest theme package/directory. Typically this will be a zip file containing the theme's directory.
* Open your FTP client or command line and navigate to `user/themes` and back up the theme's directory, moving it to a safe place.
* Unpack and replace the theme's directory with the contents of the package you downloaded in the first step.

The updated theme should now be available to you.

[/ui-tab]
[/ui-tabs]

