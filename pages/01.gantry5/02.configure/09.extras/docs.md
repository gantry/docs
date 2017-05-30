---
title: Extras
taxonomy:
    category: docs
    tag: [gantry5]
---

[ui-tabs position="top-left" active="0"]
[ui-tab title="Joomla"]

![Extras](devprod.png?classes=shadow,border)

[/ui-tab]
[ui-tab title="WordPress"]

![Production](wp_production.png?classes=shadow,border)

[/ui-tab]
[ui-tab title="Grav"]

![Production](grav_production.png?classes=shadow,border)

[/ui-tab]
[/ui-tabs]


The **Extras** dropdown gives you quick access to a few options that are handy to have instant access to throughout the administrator. This includes the **Development Mode** toggle switch, a **Clear Cache** shortcut, and a shortcut to **Platform Settings** which takes you to a platform-specific settings page for Gantry.

## Development and Production Modes

There is a process running in Gantry 5 that enables you to activate **Development** and **Production** modes. The **Development** toggle switch in the **Extras** areas of the Gantry administrator enables you to toggle between these modes as needed.

When in **Development**, any change made to the `custom.scss` file will be detected by Gantry, triggering an automatic recompilation of the file. This makes it easy to make changes on the fly and have them appear on your site without any extra action required on your part.

In the future, more **Development** vs. **Production** actions will be tied to this same setting, such as cache, minified vs. extended JS/CSS, etc.

#### Alternative Toggle Access

[ui-tabs position="top-left" active="0"]
[ui-tab title="Joomla"]

![Production](production.png?classes=shadow,border)

There is an alternative method for toggling this feature, accessible by navigating to **Administrator → Extensions → Plugin Manager** and selecting the **System - Gantry 5** plugin.

You can also use this settings page to toggle **Asset Timestamps**. This feature adds timestamps on changed asset files, like images, CSS and JS. This option tells the browser to retrieve fresh assets without forcing reload on the page. NOTE: Timestamps are always enabled in development mode.

The **Timestamp Period** field enables you to set the number of days which a timestamp is kept after updating the file. You can enter whole or decimal numbers (example: 0.5, 12, 21, 3, etc.). Set to **0** to add timestamps on every single asset file.

[/ui-tab]
[ui-tab title="WordPress"]

This is currently the recommended, primary method for toggling Development and Production mode in WordPress.

[/ui-tab]
[ui-tab title="Grav"]

This is currently the recommended, primary method for toggling Development and Production mode in Grav. However, you can access the Development and Production toggle in the **Platform Settings** page by selecting **Platform Settings** from the **Extras** menu.

[/ui-tab]
[/ui-tabs]

## Clear Cache

[ui-tabs position="top-left" active="0"]
[ui-tab title="Joomla"]

The **Clear Cache** shortcut clears Gantry's cache instantly. This includes everything stored in the `SITE_ROOT/cache/gantry5/` directory. If you are having any issues in the Gantry administrator, this is an excellent first step to take prior to more detailed troubleshooting.

[/ui-tab]
[ui-tab title="WordPress"]

The **Clear Cache** shortcut clears Gantry's cache instantly. This includes everything stored in the `SITE_ROOT/wp-content/cache/gantry5/` directory. If you are having any issues in the Gantry administrator, this is an excellent first step to take prior to more detailed troubleshooting.

[/ui-tab]
[ui-tab title="Grav"]

The **Clear Cache** shortcut clears Gantry's cache instantly. This includes everything stored in the `SITE_ROOT/cache/gantry5/` directory. If you are having any issues in the Gantry administrator, this is an excellent first step to take prior to more detailed troubleshooting.

[/ui-tab]
[/ui-tabs]

## Platform Settings

[ui-tabs position="top-left" active="0"]
[ui-tab title="Joomla"]

The **Platform Settings** shortcut takes you to a platform-specific settings page for Gantry 5. In Joomla, for example, you will be taken to the component configuration page for Gantry 5 (which typically handles advanced permissions configuration).

[/ui-tab]
[ui-tab title="WordPress"]

You can access these options from the WordPress Plugin Manager > Gantry 5 > Settings or from the Platform Settings option in the Extras Menu.

[/ui-tab]
[ui-tab title="Grav"]

![Production](grav_platform.png?classes=shadow,border)

The **Platform Settings** shortcut takes you to a platform-specific settings page for the Gantry 5 plugin. This page includes toggles for the plugin's status, asset timestamps, production mode, and more.

You can also remove Gantry from this page.

[/ui-tab]
[/ui-tabs]
