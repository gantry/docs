---
title: Styles
taxonomy:
    category: docs
    tag: [gantry5]
---

The **Styles** administrative panel gives you the ability to quickly and easily configure settings related to the appearance of the Gantry-powered theme. This includes being able to switch between pre-configured presets, as well as to refine the look of an outline using a set of style settings linked to the theme.

[plugin:youtube](https://www.youtube.com/watch?v=I0f4bXxZkVQ)

Basically, this panel serves as a one-stop-shop for changing the way the theme itself looks for a specific outline.

## Controls

![Controls](controls.png?classes=shadow,border)

As you configure the commands in this panel, you may notice the **Recompile CSS** and **Save Styles** buttons at the top of the page. These buttons allow you to save your outline **Styles** settings, as well as to recompile the CSS of the page so that you can preview your settings on an associated page.

<!-- The **Recompile CSS** button compiles your adjusted settings to the CSS for the outline. This is a useful button if you are making changes to the outline's style and would like to check your work before locking in the changes and saving the Styles. -->

The **Save Styles** button saves your new style settings to the outline and recompiles the CSS so that your changes appear on the frontend. If you select this button, you do not have to click **Recompile CSS** as this action is automatically performed.

### Development and Production Modes

There is also a process running in Gantry 5 that enables you to activate **Development** and **Production** modes. These modes enable and disable automatic recompilation of SCSS files. We have detailed this feature in the [Extras section of this documentation](../extras).

## Select a Preset

![Select a Preset](presets.png?classes=shadow,border)

Gantry makes use of a powerful preset system that allows developers and site builders to create preset styles and configurations.

Gantry **Styles Presets** are a combination of Gantry features and configuration settings which allow you to create predefined groupings for the entire theme, as well as on a per-outline basis. Presets can consist of any Gantry configuration option such CSS style, link color, background, body graphic levels, font settings, and much more.

The **Preset Selector** gives users the ability to quickly switch between Presets, with a pre-designed color palette and style settings. This is a quick and easy way to dramatically change the look of your site. Once you have selected the preset of your choice, you can further customize the style of the outline using the **Theme-specific Settings**, below.

## Theme-specific Settings

![Settings](settings.png?classes=shadow,border)

Each Gantry-powered theme comes with a set of Style settings you can use to customize the look and feel of the theme. These settings can appear in multiple sections, with each section focusing on a particular area or type of Style quality. For example, there might be a section dedicated to section-by-section color, while another focuses on the background section of the site, specifically.

If you are changing these settings for a non-default outline, the settings themselves will appear faded out until these settings are changed from their defaults. You can either click on the setting itself, or check the box to the right of the setting to indicate that you wish to make a change from the default before making your changes.

If you wish to have the setting for the outline revert back to defaults, simply uncheck the checkbox and save the style.

## Configuration Styles

![Settings](configuration_styles.png?classes=shadow,border)

The **Configuration Styles** area of the **Styles** administration panel gives you the ability to set responsive breakpoints for the outline, as well as menu options such as the dropdown width for the **Simple** dropdown setting.

More information about breakpoints can be found in our [Media Queries](../../tutorials/media-queries#defining-breakpoints) section.
