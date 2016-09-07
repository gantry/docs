---
title: Installation
taxonomy:
    category: docs
    tag: [gantry5]
---

The Gantry framework itself is independent of any theme. Each Gantry-enabled theme relies on the Gantry framework to provide the underlying base and extensive functionality that enables the creation of such powerful sites. While a Gantry-powered theme does require the Gantry framework to work properly, Gantry is not inherently built in to the theme, itself.

## Downloading Gantry

Gantry requires two major parts to function. The first is the Gantry framework itself, a collection including the Gantry component, library, and associated plugins. This is the base by which the second part, a Gantry-powered theme functions.

* **Gantry 5**: This contains the Gantry 5 framework and its associated bits and pieces (library, component, and plugins).
* **Theme**: This contains just the theme/template.

The installation process is exactly the same for each of these. The only difference is the file you are installing. The Gantry 5 component should be installed prior to a Gantry theme.

<div align="center"><a href="http://gantry.org/downloads" class="button"><i class="fa fa-fw fa-download"></i> Download Gantry 5 and the Hydrogen Theme</a></div>

## Installing the Gantry Framework

[ui-tabs position="top-left" active="0"]
[ui-tab title="Joomla"]

[plugin:youtube](https://www.youtube.com/watch?v=zCH10qrxPSc)

Install the **Gantry Framework** package file (named similarly to `pkg_gantry5-v5.3.0.zip`) by navigating to **Extensions → Extensions Manager → Install** and selecting the **Choose File** button. Locate the downloaded ZIP and click **Upload & Install** to begin the installation process.

![Installation](install-template_joomla.jpeg) {.border .shadow}

After installing the Gantry Framework package, all of the Gantry extensions will appear in the **Extensions Manager**.

![Extensions](gantry_extensions.png?classes=shadow,border)

If you are having any issues, including the following error messages:

* `Failed to load 'g5_hydrogen' template: Please install Gantry5 Framework!`
* `Error - Please install Gantry5 Framework!`
* `Error - Gantry5 Templates: Please enable 'System - Gantry5 Framework' plugin!`

You will want to make sure that all of Gantry's associated extensions are enabled. To do so, simply select any non-enabled extensions listed in the image above, and activate them by selecting the **Enable** button in the upper-left area of the **Extensions Manager**.

[/ui-tab]
[ui-tab title="WordPress"]

![](wp_g_install_1.jpg?classes=shadow,border)

To install the Gantry plugin, you'll need to navigate to **Plugins → Add New** in the admin area of WordPress. One easy way to find this area is to navigate to **Plugins** in your sidebar, then select the **Add New** button next to the title of the page.

![](wp_g_install_2.jpg?classes=shadow,border)

The next step is simple. Use the **Search Plugins** field at the right-hand side of the page to search for `Gantry`. This will enable you to find the **Gantry 5 Framework** plugin.

![](wp_g_install_3.jpg?classes=shadow,border)

The next thing you will need to do is select the **Install Now** button on the **Gantry 5 Framework** plugin's box. Make sure you are installing Gantry 5 and not Gantry 4.

![](wp_g_install_4.jpg?classes=shadow,border)

Once installation is done, select the **Activate** button to turn the Gantry 5 plugin on. This button will appear in the same place the **Install Now** button was before.

![](wp_g_install_5.jpg?classes=shadow,border)

Gantry 5 will now appear in your **Installed Plugins** list.

As of Gantry 5.3.5, Gantry 5 no longer requires that you separately install the **Timber** plugin. This plugin is now included in the Gantry 5 installation by default and enables WordPress to work with Twig templates. You can find more information about Timber on the [project home page](http://upstatement.com/timber/).

[/ui-tab]
[ui-tab title="Grav"]

Grav documentation is coming soon...

[/ui-tab]
[/ui-tabs]

## Installing a Gantry Theme

[ui-tabs position="top-left" active="0"]
[ui-tab title="Joomla"]

Install at **Extensions → Extensions Manager → Install**. Select the **Choose File** button, locate the downloaded ZIP and click **Upload & Install** to begin the installation.

![Installation](install-template_joomla.jpeg) {.border .shadow}

The Gantry template will appear in the **Template Manager**, and all Gantry extensions will appear in the **Extensions Manager**.

[/ui-tab]
[ui-tab title="WordPress"]

Themes made on Gantry 5 install just like any other WordPress theme. The difference here is that you really want to have the Gantry framework installed and activated first, otherwise the theme itself won't be of much use.

![](wp_theme_install_1.jpg?classes=shadow,border)

To install the theme on WordPress, simply navigate to **Admin → Appearance** in the sidebar and select the **Add New** button at the top of the **Themes** page.

![](wp_theme_install_2.jpg?classes=shadow,border)

This will take you to the **Add Themes** page with another button on top called **Upload Theme**. Click it.

![](wp_theme_install_3.jpg?classes=shadow,border)

Use the **Browse...** button to select the zip file for the theme you wish to install and select **Install Now**.

![](wp_theme_install_4.jpg?classes=shadow,border)

The theme should now be installed. You can **Activate** it using the shortcut provided.

[/ui-tab]
[ui-tab title="Grav"]

Grav documentation is coming soon...

[/ui-tab]
[/ui-tabs]

## Setting a Gantry Theme as Default

[ui-tabs position="top-left" active="0"]
[ui-tab title="Joomla"]

If you are using the Gantry template, you will want to set it as the default template so it loads on the front end. Go to **Extensions → Template Manager**, select the **gantry** checkbox, and click **Default** in the button toolbar.

! For some Gantry-powered templates, this will happen automatically upon installation. This is a time-saving step intended to speed up deployment and reduce confusion for new users.

![](gantry_default.png?classes=shadow,border)

[/ui-tab]
[ui-tab title="WordPress"]

![](wp_theme_install_4.jpg?classes=shadow,border)

Your Gantry-powered theme will be set as default upon activation. You can activate your theme during installation by selecting **Activate** from the shortcuts at the bottom of the installation screen.

You can also activate a theme by navigating to **Admin → Appearance** and selecting **Activate** in your desired theme's box.

[/ui-tab]
[ui-tab title="Grav"]

Grav documentation is coming soon...

[/ui-tab]
[/ui-tabs]
