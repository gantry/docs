---
title: Particle Defaults
taxonomy:
    category: docs
    tag: [gantry5]
---

The **Particle Defaults** panel gives you the ability to turn particle types **on** or **off** as you please. Doing this will disable the particle for any assigned pages, even if you have it already set in the **Layout Manager**.

Think of this panel as the breaker panel of Gantry. It serves as a one-stop shop for enabling and disabling particles such as the **Logo**, **Date**, and **Google Analytics**. We have a full breakdown of Gantry's included particles [in the next chapter](../../particles).

Controls
-----

![Controls](controls_1.jpg?classes=shadow,border)

The **Save Particle Defaults** button applies any changes you have made to the **Settings** administrative panel to its associated outline. These changes apply as the new default for the setting for that outline only, and will only become a global default if you are using the theme's assigned base outline.

![Controls](controls_2.jpg?classes=shadow,border)

When using an override or user-created **outline**, you will notice checkboxes next to the different settings fields. When unchecked, these fields may appear grayed out until you either click the setting or the checkbox to indicate you would like to make a change. Once you have made a change and clicked the **Save Settings** button, your changes will be saved for the associated outline. To revert this change back to its default setting, simply uncheck the check box.

! The **Particle Defaults** panel is being phased out in **user-created outlines** as it is not necessary under the new inheritance system. You will see it in the Base Outline as this will enable you to set global defaults for the particle. However, the panel is hidden by default for any user-defined outlines as the vast majority of users will be defining particles in an individual outline through the layout manager most of the time. 

![](particle_defaults.jpg) {.border .shadow}

If you want to access the **Particle Defaults** panel for a user-defined outline, you can still do so by navigating to the **Particle Defaults** panel in the **Base Outline**, then selecting the user outline from the outline dropdown. You will be initially greeted by a notice letting you know why this panel is hidden and giving you the option to manually access it.

![Controls](controls_3.jpg?classes=shadow,border)

You can also take advantage of the search field to filter particles, positions, and atoms to make it easier to find the specific item you want to configure. To make things even easier to navigate through, you can use the **Collapse All** and **Expand All** buttons to collapse items down so all see is its name and whether or not it is activated, or expand them all. Upon selecting the expansion arrow to the left of each item, you can expand or collapse it, individually. 

Particle Defaults
-----

![Particle Defaults](particlesettings.png?classes=shadow,border)

Particles are visual blocks that render where they have been assigned on the **Layout** administrative panel. This section of the **Settings** administrative panel enables you to set defaults which apply to the currently-selected outline. If you are using the **Base Outline**, these settings become the global default for those particles.

Position Defaults
-----

[ui-tabs position="top-left" active="0"]
[ui-tab title="Joomla"]

![Joomla Position Settings](positions.jpg?classes=shadow,border)

[/ui-tab]
[ui-tab title="WordPress"]

![WordPress Position Settings](wp_position_settings.png?classes=shadow,border)

[/ui-tab]
[ui-tab title="Grav"]

Grav documentation is coming soon...

[/ui-tab]
[/ui-tabs] 

Positions are particles as well, but they differ in that they are typically anchor points by which other content is assigned. With the exception of the spacer, position particles are home to other content types, including modules, page content, and system messages.

### Spacer

The **Spacer** setting gives you the ability to globally disable (or enable) spacer particles for the outline. Doing this when Spacer particles are in place will cause them not to affect the frontend.

### Page Content

The **Page Content** setting area enables you to turn the Mainbody **on or off** for the outline. If you have the **Page Content** module already in place in the **Layout Manager** turning it off in the **Settings** administrative panel will disable it so it will not render on the front end.

### System Messages

The **System Messages** setting area enables you to display system messages in your layout. There are no settings that need to be configured here, other than activating and deactivating it.

### Platform-specific Positions

[ui-tabs position="top-left" active="0"]
[ui-tab title="Joomla"]

#### Module Position

The **Module Position** setting enables you to globally disable (or enable) module positions for the outline. Doing this when Module Position particles are in place will cause assigned modules not to appear the front end.

#### Module Instance

The **Module Instance** position enables you to inject a single instance of a Joomla module directly into your layout or menu. You can set a default **Module ID** and **Chrome** in this space.

[/ui-tab]
[ui-tab title="WordPress"]

#### Widget Position

The **Widget Position** setting enables you to globally disable (or enable) widget positions for the outline. Doing this when Widget Position particles are in place will cause assigned widgets not to appear the front end.

#### Widget

The **Widget** position enables you to inject a single widget into the page. Its settings are pretty simple. You need but to **pick a widget**, configure the widget's **settings**, set its **chrome** (if applicable), and it will appear on the front end wherever you place it in the **Layout Manager** or **Menu Editor**.

Doing this bypasses the need to assign the widget to the position via a traditional widget position.

[/ui-tab]
[ui-tab title="Grav"]

Grav documentation is coming soon...

[/ui-tab]
[/ui-tabs]
