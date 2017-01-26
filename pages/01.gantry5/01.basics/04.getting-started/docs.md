---
title: Getting Started
taxonomy:
    category: docs
    tag: [gantry5]
---

Ready to get started with Gantry 5? That's great! We are here to help.

On this page, you will get some quick tips to help you hit the ground running with Gantry 5. You can find more detailed documentation for each of these tips by clicking the **Learn More** button at the bottom of each section.

We hope you enjoy Gantry 5 every bit as much as we have enjoyed making it.

## Installing Gantry 5 and the Helium Theme

Gantry 5 is a framework by which Gantry-powered themes are made. In order for a Gantry theme to work, you will need to install both the **framework** and the **theme**. Doing this is not difficult at all.

The first thing you need to do is download the latest build of Gantry 5 and Helium. You can do so by clicking the buttons below, or via [GitHub](http://github.com/gantry/gantry5).

<div align="center"><a href="http://gantry.org/downloads" class="button"><i class="fa fa-fw fa-download"></i> Download Gantry 5 and the Helium Theme</a></div>

Once you have the latest packages, installation is simple. We have provided a step-by-step guide in the **Installation** portion of this documentation.

<a href="../basics/installation" class="button"><i class="fa fa-fw fa-graduation-cap"></i> Learn More</a>

## Accessing the Gantry Administrator

[ui-tabs position="top-left" active="0"]
[ui-tab title="Joomla"]

![Administrator](../../configure/gantry-admin/admin_access_1.png?classes=shadow,border)

When you have installed and activated both the Gantry framework and your Gantry-powered theme, you can access the Gantry 5 administrator in several different ways. The easiest being simply navigating to **Components → Gantry 5 Themes** from the back end of Joomla.

Here, you will see a list of any installed Gantry-powered themes. You can **Preview** the theme from here or select **Configure** to go directly to the **Gantry Administrator** where you can get started modifying your Gantry-powered site.

[/ui-tab]
[ui-tab title="WordPress"]

![Administrator](wp_admin_access_1.png?classes=shadow,border)

Accessing the Gantry 5 administrator is pretty easy. Once you have both Gantry and your desired Gantry-powered theme installed and activated, you can simply select **(Theme Name) Theme** from the sidebar in the backend.

[/ui-tab]
[ui-tab title="Grav"]

<video controls="1" alt="Administrator" class="shadow border" style="max-width: 100%;"><source src="/gantry-docs/user/pages/01.gantry5/01.basics/04.getting-started/Gantry_Grav_Accessing_the_Administrator.mp4">Your browser does not support the video tag.</video>

Accessing the Gantry 5 administrator in Grav is easy. Simply log in to the Grav Admin and select **Gantry 5** in the sidebar. Once here, you can choose the Gantry 5 theme you wish to configure by clicking the **Configure** button.

[/ui-tab]
[/ui-tabs]

## Navigating the Gantry 5 Administrator

The Gantry Administrator has multiple administrative tools you can flip through to configure how your Gantry-powered theme looks and functions. Here is a quick breakdown of each of these tools, and what you can do with them.

[ui-callout]
[ui-callout-item title="Outlines" position="8%, 68%, se"]
This administrative panel displays the current theme's outlines, giving you quick access to edit, rename, duplicate, and delete them.
[/ui-callout-item]
[ui-callout-item title="Menu Editor" position="8%, 76%, se"]
This administrative panel gives you the ability to enhance the platform's menu by altering styling, rearranging links, and creating menu items that sit outside of the CMS's integrated Menu Manager.
[/ui-callout-item]
[ui-callout-item title="About" position="8%, 83%, se"]
This page gives you quick, at-a-glance information about the currently-accessed theme. This is a one-stop shop for information about the theme including: name, version number, creator, support links, features, and more.
[/ui-callout-item]
[ui-callout-item title="Extras" position="8%, 91%, se"]
This button opens a dropdown that gives you access to **Clear Cache** and **Platform Settings** functionality.
[/ui-callout-item]
[ui-callout-item title="Outlines Dropdown" position="17%, 3%, se"]
This dropdown displays various outlines associated with your site. You can use it to quickly switch between them to edit their individual settings.
[/ui-callout-item]
[ui-callout-item title="Styles (Pictured)" position="17%, 23%, se"]
The **Styles** administrative panel gives you access to style-related settings for the outline. This includes things like theme colors, fonts, style presets, and more.
[/ui-callout-item]
[ui-callout-item title="Settings" position="17%, 31%, se"]
The **Settings** administrative panel offers you the ability to configure the functional settings of the theme. This includes setting defaults for Particles, as well as enabling/disabling individual Particles.
[/ui-callout-item]
[ui-callout-item title="Layout" position="17%, 39%, se"]
The **Layout** administrative panel is where you would configure the layout for your theme. Creating an placing module positions, Particles, spacers, and non-rendered scripts such as Google Analytics code is all done in this panel.
[/ui-callout-item]
[ui-callout-item title="Assignments" position="17%, 48%, se"]
The **Assignments** administrative panel only appears on child outlines which can be assigned to specific areas of your site. If you are in the **Base Outline**, you will not see this administrative panel as it can't be assigned.
[/ui-callout-item]
![](getting_started_1.png?classes=shadow,border)
[/ui-callout]

1. **Outlines**: This administrative panel displays the current theme's outlines, giving you quick access to edit, rename, duplicate, and delete them.

2. **Menu Editor**: This administrative panel gives you the ability to enhance the platform's menu by altering styling, rearranging links, and creating menu items that sit outside of the CMS's integrated Menu Manager.

3. **About**: This page gives you quick, at-a-glance information about the currently-accessed theme. This is a one-stop shop for information about the theme including: name, version number, creator, support links, features, and more.

4. **Extras**: This button opens a dropdown that gives you access to **Clear Cache** and **Platform Settings** functionality.

5. **Outlines Dropdown**: This dropdown displays various outlines associated with your site. You can use it to quickly switch between them to edit their individual settings.

6. **Styles (Pictured)**: The **Styles** administrative panel gives you access to style-related settings for the outline. This includes things like theme colors, fonts, style presets, and more.

7. **Particle Defaults**: The **Particle Defaults** administrative panel offers you the ability to configure the functional settings of the theme. This includes setting defaults for Particles, as well as enabling/disabling individual Particles.

8. **Layout**: The **Layout** administrative panel is where you would configure the layout for your theme. Creating and placing module positions, Particles, spacers, and non-rendered scripts such as Google Analytics code is all done in this panel.

9. **Assignments**: The **Assignments** administrative panel only appears on child outlines which can be assigned to specific areas of your site. If you are in the **Base Outline**, you will not see this administrative panel as it can't be assigned.

<a href="../configure/gantry-admin" class="button"><i class="fa fa-fw fa-graduation-cap"></i> Learn More</a>

## What are Outlines, Particles, Atoms, etc.?

Because Gantry 5 is so different from any version of Gantry before it, we came up with some terms to help make sense of the relationships Gantry's new features have with one-another. Here is a quick breakdown of commonly used terms related to Gantry 5.

| Term     | Definition                                                                                                                                             |
| :-----   | :-----                                                                                                                                                 |
| Outline  | A configurable style used in one or more areas of your site. It serves as the container on which a page's style, settings, and layout are set.         |
| Particle | A typically small block of data used on the front end. It acts a lot like a widget/module, but can be easily configured in the Gantry 5 Administrator. |
| Atom     | A type of Particle that contains non-rendered data, such as custom scripting (JS, CSS, etc.) or analytics scripts for traffic tracking.                |

<a href="../basics/terminology" class="button"><i class="fa fa-fw fa-graduation-cap"></i> Learn More</a>

## Where to Get Help

A chat room has been set up using [Gitter](https://gitter.im/gantry/gantry5) where you can go to talk about the project with developers, contributors, and other members of the community. This is the best place to go to get quick tips and discuss features with others.
