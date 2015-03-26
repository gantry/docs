---
title: Getting Started
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

Ready to get started with Gantry 5? That's great! We are here to help.

On this page, you will get some quick tips to help you hit the ground running with Gantry 5. You can find more detailed documentation for each of these tips by clicking the **Learn More** button at the bottom of each section.

We hope you enjoy Gantry 5 every bit as much as we have enjoyed making it.

## Installing Gantry 5 and the Hydrogen Theme

Gantry 5 is a framework by which Gantry-powered themes are made. In order for a Gantry theme to work, you will need to install both the **framework** and the **theme**. Doing this is not difficult at all.

The first thing you need to do is download the latest build of Gantry 5 and Hydrogen. You can do so by clicking the buttons below, or via [GitHub](http://github.com).

<div align="center"><a href="http://www.gantry-framework.org/download#joomla" class="button"><i class="fa fa-fw fa-download"></i> Download Gantry 5</a> <a href="http://www.gantry-framework.org/download#joomla" class="button"><i class="fa fa-fw fa-download"></i> Download Hydrogen</a></div>

>>> During the initial beta, the **Framework** and **Template** are being distributed in different installable packages. A bundled package is planned, but will likely be available after the initial beta launch.

Once you have the latest packages, installation is simple. We have provided a step-by-step guide in the **Installation** portion of this documentation.

<a href="../basics/installation" class="button"><i class="fa fa-fw fa-graduation-cap"></i> Learn More</a>

## Accessing the Gantry Administrator

{% set tab1 %}

![Administrator](../../configure/gantry-admin/admin_access_1.png) {.border .shadow}

When you have installed and activated both the Gantry framework and Hydrogen, you can access the Gantry 5 administrator in several different ways. The easiest being simply navigating to **Components > Gantry 5 Templates** from the back end of Joomla.

{% endset %}
{% set tab2 %}

Coming soon...

{% endset %}
{{ gravui_tabs({'Joomla':tab1, 'WordPress':tab2}) }}

Here, you will see a list of any installed Gantry-powered themes. You can **Preview** the theme from here or select **Configure** to go directly to the **Gantry Administrator** where you can get started modifying your Gantry-powered site.

## Navigating the Gantry 5 Administrator

The Gantry Administrator has multiple administrative tools you can flip through to configure how your Gantry-powered theme looks and functions. Here is a quick breakdown of each of these tools, and what you can do with them.

{% set callout_items %}
Menu Editor [16%, 62%, se]
    : This administrative panel gives you the ability to enhance the platform's menu by altering styling, rearranging links, and creating menu items that sit outside of the CMS's integrated Menu Manager.

About (Pictured) [16%, 69%, se]
    : This page gives you quick, at-a-glance information about the currently-accessed theme. This is a one-stop shop for information about the theme including: name, version number, creator, support links, features, and more.

Platform Settings [16%, 76%, se]
    : This button takes you to the CMS' settings page for Gantry 5. In Joomla, this is the **Permissions** configuration page.

Clear Cache [16%, 88%, se]
    : This button clears the cache files related to Gantry. This includes all of the temporary files outside of CSS and configuration information.

Configuration Dropdown [23%, 2%, se]
    : This dropdown makes it easy to quickly switch between Configurations without having to leave the Gantry Administrator.

Styles [23%, 23%, se]
    : The **Styles** administrative panel gives you access to style related configuration settings. This includes things like theme colors, fonts, style presets, and more.

Settings [23%, 31%, se]
    : The **Settings** administrative panel offers you the ability to configure the functional settings of the theme. This includes setting defaults for Particles, as well as enabling/disabling individual Particles.

Layout [23%, 39%, se]
    : The **Layout** administrative panel is where you would configure the layout for your theme. Creating an placing module positions, Particles, spacers, and non-rendered scripts such as Google Analytics code is all done in this panel.

{% endset %}

{{ gravui_callout(page.media['getting_started_1.png'].url, callout_items, 'shadow border') }}

1. **Menu Editor**: This administrative panel gives you the ability to enhance the platform's menu by altering styling, rearranging links, and creating menu items that sit outside of the CMS's integrated Menu Manager.    
    
2. **About (Pictured)**: This page gives you quick, at-a-glance information about the currently-accessed theme. This is a one-stop shop for information about the theme including: name, version number, creator, support links, features, and more.

3. **Platform Settings**: This button takes you to the CMS' settings page for Gantry 5. In Joomla, this is the **Permissions** configuration page.

4. **Clear Cache**: This button clears the cache files related to Gantry. This includes all of the temporary files outside of CSS and configuration information.

5. **Configuration Dropdown**: This dropdown makes it easy to quickly switch between Configurations without having to leave the Gantry Administrator.

6. **Styles**: This administrative panel gives you access to style related configuration settings. This includes things like theme colors, fonts, style presets, and more.

7. **Settings**: This administrative panel offers you the ability to configure the functional settings of the theme. This includes setting defaults for Particles, as well as enabling/disabling individual Particles.

8. **Layout**: This administrative panel is where you would configure the layout for your theme. Creating an placing module positions, Particles, spacers, and non-rendered scripts such as Google Analytics code is all done in this panel.

<a href="../configure/gantry-admin" class="button"><i class="fa fa-fw fa-graduation-cap"></i> Learn More</a>

## What are Configurations, Particles, Atoms, etc.?

Because Gantry 5 is so different from any version of Gantry before it, we came up with some terms to help make sense of the relationships Gantry's new features have with one-another. Here is a quick breakdown of commonly used terms related to Gantry 5.

| Term          | Definition                                                                                                                                             |
| :-----        | :-----                                                                                                                                                 |
| Configuration | A configurable style used in one or more areas of your site. It serves as the container on which a page's style, settings, and layout are set.         |
| Particle      | A typically small block of data used on the front end. It acts a lot like a widget/module, but can be easily configured in the Gantry 5 Administrator. |
| Atom          | A type of Particle that contains non-rendered data, such as custom scripting (JS, CSS, etc.) or analytics scripts for traffic tracking.                |

<a href="../basics/terminology" class="button"><i class="fa fa-fw fa-graduation-cap"></i> Learn More</a>

## Where to Get Help

A chatroom has been set up using [Gitter](https://gitter.im/) where you can go to talk about the project with developers, contributors, and other members of the community. This is the best place to go to get quick tips and discuss features with others.

[Documentation](http://docs.gantry.org) is also available, and being continually added to as development progresses. Is something missing? You can contribute to the documentation through GitHub.