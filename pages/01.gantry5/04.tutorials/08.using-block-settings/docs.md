---
title: Using Block Settings
taxonomy:
    category: docs
    tag: [gantry5]
---

One of the biggest benefits to Gantry 5 is having the ability to easily access and adjust settings at multiple levels. You can do things like add a CSS class to an entire section, a single block, or within a specific Particle, or position - all within the Gantry administrator.

In this guide, we will focus on block settings, which are settings that apply at the block level. We touched on this topic [in the Layout Manager guide](../../configure/layout-manager#blocks) when we discussed the differences between sections, blocks, and grids. We will now dive a little deeper into the **Block Settings** which are accessible within each item in the **Layout Manager**, as well as in injected **modules** and **particles** that appear in the **Menu Editor**. 

## Accessing Block Settings

[ui-callout]
[ui-callout-item title="Settings" position="70%, 33%, se"]
Clicking this icon will enable you to access the **Particle** and **Block** settings for this item.
[/ui-callout-item]
![](block_settings_1.png?classes=shadow,border)
[/ui-callout]

[ui-callout]
[ui-callout-item title="Settings" position="75%, 38%, se"]
Clicking this icon will enable you to access the **Particle** and **Block** settings for this item.
[/ui-callout-item]
![](block_settings_3.png?classes=shadow,border)
[/ui-callout]

Accessing the **Block Settings** for a particular block is pretty simple. Just select the settings <i class="fa fa-cog"></i> icon for the block you wish to adjust the settings for.

![Block Settings](block_settings_2.png?classes=shadow,border)

A popup will appear with two tabs, **Particle** and **Block**. To adjust the settings at the block level, you will want to select the **Block** tab. There may be similar settings in the **Particle** tab, such as a field for **CSS classes**, and adjusting the settings there will apply a CSS class to the Particle's div, or a pre-defined segment of the Particle. When you make changes in the **Block** tab, those changes apply at the block level which affects all of the contents within the block.

## Block Settings Fields

Here is a breakdown of the different settings available for each block.

### CSS id

The **CSS id** field will likely be rarely used in Particles. It enables you to assign a CSS id selectors here. to the block so that it affects everything within it. To find out more about CSS id selectors [here](http://www.w3schools.com/cssref/sel_id.asp). 

### CSS Classes

If you would like to apply a CSS class at the block level, this is where you would do it. Any CSS class assigned here will affect the entirely of the particle, module instance, or position's content.

### Variations

![Block Settings](block_settings_4.png?classes=shadow,border)

Variations are theme-based variables which can be quickly set by selecting the field and clicking the desired option. These variations can include **effects**, **box variations** which set the color scheme of the block as a whole, and **utility** options such as `Align Right` and `Full Width`.

!! For Joomla users, you can still use the Module Class Suffix field for a given module, however we do not recommend doing so if you are also using variations at the block level. This may yield undesirable results.

### Tag Attributes

![Block Settings](block_settings_5.png?classes=shadow,border)

The **Tag Attributes** field gives you the ability to quickly apply HTML tag attributes to the block. This can include a variety of things from a style attribute (pictured above) to a tag used to apply JavaScript effects to the block. 

### Block Size

The **Block Size** field is where you can manually input the width you would like the block to take up in the horizontal grid. If this is the only block you have in the particular row, it would likely be set at `100`. Any changes made by dragging the divider bar between items in the **Layout Manager** would be reflected in this field.