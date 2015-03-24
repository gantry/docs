---
title: Using the Color Picker
taxonomy:
    category: docs
    tag: [gantry5]
gravui:
    enabled: true
    tabs: true
    callouts: true
process:
    twig: true
---

Gantry 5 includes a new **Color Picker** which gives you the ability to set colors for a particular element of your theme, a Particle, etc.

The **Color Picker** includes five integrated tools including **hue**, **saturation**, **brightness**, **opacity**, and a **color wheel**. These settings make it easy to quickly configure your color selection to meet your needs.

## Using the Color Picker

![Color Picker](color_picker_1.png) {.border .shadow}



![Color Picker](color_picker_2.png) {.border .shadow}


## Adding the Font Picker to Your Site

The Font Picker is a Gantry 5 input. If you want to add it to your template or particle, you would do so by assigning the administrative input as `input.fonts` in the Particle's YAML file. 

Here is an example of how this would look in the YAML file.

```yaml
target:
      type: input.fonts
      label: Font
      description: Select the font you would like to have used for content in the Particle.
      default: family=Inconsolata:700,400&subset=latin,latin-ext
```

You can find more information about how to use YAML files in Gantry 5 [in our guide](../../advanced/particle-yaml-field-types).