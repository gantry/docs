---
title: Creating Style Presets
taxonomy:
  category: docs
  tag: [gantry5]
---

Style presets are a great way to quickly and easily switch between color schemes and other style options. For developers creating a website or adding to an existing site, creating new presets or editing existing ones are a great way to quickly switch between preset style options.

For example, if your site has a particular color scheme and/or background images that you want to use in one or more outlines, you can create a preset so all you need to do when creating a new outline is select it and go.

## Creating an override to a Theme's Style Presets

In order to override a theme's default style presets, you will need to create a new `presets.yaml` file. This file will replace the settings included `presets.yaml` file for the theme. If you wish to make a few modifications to existing presets, we recommend copying the existing `presets.yaml` file located in `THEME_DIR/gantry/` and modifying it before saving in the custom directory.

[ui-tabs position="top-left" active="0"]
[ui-tab title="Joomla"]

Creating a new **Style Preset** is pretty simple. The first thing you will need to do is create a new `presets.yaml` file. This file should be placed in the `/custom/gantry/` directory. This will prevent your custom presets from being overwritten when the theme is updated.

[/ui-tab]
[ui-tab title="WordPress"]

Creating a new **Style Preset** is pretty simple. The first thing you will need to do is create a new `presets.yaml` file. This file should be placed in the `/custom/gantry/` directory. This will prevent your custom presets from being overwritten when the theme is updated.

It's recommended if you use this path that you always back up the `custom` directory and replace it after the update is complete.

[/ui-tab]
[ui-tab title="Grav"]

Creating a new **Style Preset** is pretty simple. The first thing you will need to do is create a new `presets.yaml` file. This file should be placed in the `user/data/gantry5/themes/THEME_DIR/gantry/` directory. This will prevent your custom presets from being overwritten when the theme is updated.

You can, alternatively, place the `presets.yaml` file you create in `user/themes/THEME_DIR/custom/gantry`. However, there is no guarantee this file will remain in place after a theme update. It's recommended if you use this path that you always back up the `custom` directory and replace it after the update is complete.

[/ui-tab]
[/ui-tabs]

## Anatomy of the YAML File

![Preset](yaml.png?classes=shadow,border)

In order to create these new presets, you will need to configure the `presets.yaml` file. This file tells Gantry what the name, thumbnail, and settings of any style presets would be.

Here is the example code that will be in our new YAML file:

```yaml
preset1:
  image: 'gantry-admin://images/preset1.png'
  description: 'Preset 1'
  colors:
    - '#ffffff'
    - '#000000'
  styles:
    base:
      background: '#7b00f7'
      text-color: '#605c72'
      text-active-color: '#232529'
    accent:
      color-1: '#7b00f7'
      color-2: '#ffe6a3'
    menustyle:
      text-color: '#ffffff'
      text-color-alt: '#8e9dab'
      text-color-active: 'rgba(255,255,255, 0.7)'
      background-active: 'rgba(255,255,255, 0)'
      sublevel-text-color: '#ffffff'
      sublevel-text-color-active: '#ffffff'
      sublevel-background: '#000000'
      sublevel-background-active: '#7b00f7'
    font:
      family-default: 'catamaran, Helvetica, Tahoma, Geneva, Arial, sans-serif'
    top:
      background: '#ffffff'
      text-color: '#605c72'
    navigation:
      background: 'rgba(255,255,255, 0)'
      text-color: '#ffffff'
    slideshow:
      background: '#ffffff'
      background-image: 'gantry-media://backgrounds/slideshow/img-01.jpg'
      text-color: '#605c72'
    header:
      background: '#ffffff'
      background-image: 'gantry-media://backgrounds/header/img-01.jpg'
      text-color: '#605c72'
    above:
      background: '#000000'
      background-image: 'gantry-media://backgrounds/above/img-01.jpg'
      text-color: '#ffffff'
    feature:
      background: '#ffffff'
      text-color: '#605c72'
    showcase:
      background: '#ffffff'
      text-color: '#605c72'
    utility:
      background: '#ffffff'
      text-color: '#605c72'
    main:
      background: '#ffffff'
      text-color: '#605c72'
    expanded:
      background: '#ffffff'
      text-color: '#605c72'
    extension:
      background: '#ffffff'
      text-color: '#605c72'
    bottom:
      background: '#ffffff'
      text-color: '#605c72'
    footer:
      background: '#000000'
      text-color: '#605c72'
    copyright:
      background: '#000000'
      text-color: '#605c72'
    offcanvas:
      background: '#7b00f7'
      text-color: '#ffffff'
      toggle-color: '#000000'
    breakpoints:
      large-desktop-container: 75rem
      desktop-container: 60rem
      tablet-container: 51rem
      large-mobile-container: 30rem
      mobile-menu-breakpoint: 51rem
preset25:
  image: 'gantry-admin://images/preset1.png'
  description: 'Preset 25'
  colors:
    - '#000000'
    - '#ffe6a3'
  styles:
    base:
      background: '#000000'
      text-color: '#000000'
      text-active-color: '#000000'
    accent:
      color-1: '#7b00f7'
      color-2: '#ffe6a3'
    menustyle:
      text-color: '#ffffff'
      text-color-alt: '#8e9dab'
      text-color-active: 'rgba(255,255,255, 0.7)'
      background-active: 'rgba(255,255,255, 0)'
      sublevel-text-color: '#ffffff'
      sublevel-text-color-active: '#ffffff'
      sublevel-background: '#000000'
      sublevel-background-active: '#7b00f7'
    font:
      family-default: 'catamaran, Helvetica, Tahoma, Geneva, Arial, sans-serif'
    top:
      background: '#ffffff'
      text-color: '#605c72'
    navigation:
      background: 'rgba(255,255,255, 0)'
      text-color: '#ffffff'
    slideshow:
      background: '#ffffff'
      background-image: 'gantry-media://backgrounds/slideshow/img-01.jpg'
      text-color: '#605c72'
    header:
      background: '#ffffff'
      background-image: 'gantry-media://backgrounds/header/img-01.jpg'
      text-color: '#605c72'
    above:
      background: '#000000'
      background-image: 'gantry-media://backgrounds/above/img-01.jpg'
      text-color: '#ffffff'
    feature:
      background: '#ffffff'
      text-color: '#605c72'
    showcase:
      background: '#ffffff'
      text-color: '#605c72'
    utility:
      background: '#ffffff'
      text-color: '#605c72'
    main:
      background: '#ffffff'
      text-color: '#605c72'
    expanded:
      background: '#ffffff'
      text-color: '#605c72'
    extension:
      background: '#ffffff'
      text-color: '#605c72'
    bottom:
      background: '#ffffff'
      text-color: '#605c72'
    footer:
      background: '#000000'
      text-color: '#605c72'
    copyright:
      background: '#000000'
      text-color: '#605c72'
    offcanvas:
      background: '#7b00f7'
      text-color: '#ffffff'
      toggle-color: '#000000'
    breakpoints:
      large-desktop-container: 75rem
      desktop-container: 60rem
      tablet-container: 51rem
      large-mobile-container: 30rem
      mobile-menu-breakpoint: 51rem
```

Here is a quick breakdown of the main settings and what they do:

| Setting       | Description                                                                                                                                                                            |
| :-----        | :-----                                                                                                                                                                                 |
| Tag           | This is the top-level line that goes on top of each preset. It should be lowercase with no spaces. For example: `preset1`.                                                             |
| `image`       | The `image` tag sets the thumbnail image for the preset as it appears in the Style panel.                                                                                              |
| `description` | This is the name by which the style will be displayed in the Style panel. This line can have spaces and capital letters. For example: `Example` or `Preset 1`.                         |
| `styles`      | This creates the section that makes up the main body of the style preset. The colors, breakpoints, etc. all go here.                                                                   |
| `colors`      | These are the primary colors for the preset. These colors are displayed below the thumbnail.                                                                                           |
| `base`        | The base `background`, `text-color`, etc. are the core default background / text colors for the style.                                                                                 |
| `accent`      | Create the style's accent colors here. These colors are typically numbered (`accent-1`, `accent-2`)                                                                                    |
| `menustyle`   | This part of the preset determines how the menu particle is styled.                                                                                                                    |
| `font`        | This section enables you to set a preset font(s).                                                                                                                                      |
| Sections      | Each section of a Gantry theme has the ability to have its own style settings. Commonly, these include `background` and `text-color` but may also include images and overlay settings. |
| `breakpoints` | Set the default breakpoints for the preset.                                                                                                                                            |
