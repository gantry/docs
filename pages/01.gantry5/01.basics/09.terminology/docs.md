---
title: Terminology
taxonomy:
    category: docs
    tag: [gantry5]
process:
    twig: true
---

Because Gantry 5 is so different from any version of Gantry before it, we came up with some terms to help make sense of the relationships Gantry's new features have with one-another. In this section, we will define some of these terms and explain how they relate to one-another when you are building your Gantry-powered website.

### Outline

[ui-tabs position="top-left" active="0" theme="lite"]
[ui-tab title="Joomla"]

An **Outline** is essentially a style specific to one or more areas of your site. In Joomla, these styles are traditionally created in the **Template Manager** by duplicating an installed theme. This principal is very much the same in Gantry 5, however because we have integrated a global default as well as several system-specific styles that do not appear in the Template Manager, we decided to give them a more appropriate name of Outline.

Each Outline can have its own set of Style, Particle, and Layout settings. An Outline can also be assigned to specific pages, such as the **Home** or **Contact** page, giving them a unique look that sits apart from the rest of your site.

The **Base Outline** acts as the global default by which all other unassigned Outlines are based. This Outline can't be assigned to any pages as it merely acts as a set of defaults which are overridden by other Outlines.

[/ui-tab]
[ui-tab title="WordPress"]

An **Outline** creates a set of standard settings for the layout, particle(s), widget position(s), any scripting, and style of an area of your site. Outlines can be assigned to a specific page or several pages depending on your needs. This enables you to apple different styles and layout configurations to different pages (or types of pages) with ease.

The **Base Outline** acts as the global default by which all other Outlines are based. Any setting not specified in another outline is deferred to this outline.

[/ui-tab]
[ui-tab title="Grav"]

Grav documentation is coming soon...

[/ui-tab]
[/ui-tabs]

![Creating a Outline](getting_started_3.png) {.border .shadow}

To create a new Outline, simply navigate to the **Outlines** administrative panel and select the blue **Plus (+)** button, click the blank outline box with a gray **Plus (+)** sign in it, or select **Duplicate** under an outline you would like to base your new outline on.

This will create a new outline.

### Particle

A **Particle** is a piece of pre-written code which can be configured in the Gantry 5 Administrator and added directly to your page's Layout. Particles can do a variety of things from enabling you to insert a small block of HTML to presenting a large, detailed block of information with images, links, text, and more.

<a href="../particles/particles" class="button"><i class="fa fa-fw fa-graduation-cap"></i> Learn More</a>

### Atom

An **Atom** is a type of **Particle** that does not render visually on the frontend. These allow you to add scripted pieces to your page in a modular fashion, such as adding custom JavaScript you want to have run at the end of the page load, or a Google Analytics script for traffic tracking.

An **Atom** can be placed in your page's layout using a special **Atoms** section in the **Layout Manager** and can be created in very much the same way as any standard particle.

<a href="../particles/particles#atoms" class="button"><i class="fa fa-fw fa-graduation-cap"></i> Learn More</a>

### Position

A **Position** in Gantry 5 can be a number of things. It is an umbrella term used to describe a variety of things including: module (Joomla) or widget (WordPress) positions, a page's main content body (**Page Content**), and **Spacers** used to create a space between **Particles** and/or **Positions**.

<a href="../particles/particles#positions" class="button"><i class="fa fa-fw fa-graduation-cap"></i> Learn More</a>

### Module Position Vs. Module Instance

A module position in Joomla works exactly the same way whether you are using Gantry 5 or any other framework or theme. The only difference is that, in Gantry 5, you have the ability to dynamically create and remove module positions on the fly in the Layout Manager. Once you have a module position created and assigned it a key, you can assign modules to that position just as you normally would.

Module instances, however, are very different. A module instance doesn't depend on a specific position assignment on the part of the module. In fact, you can use module instances in the menu editor and layout manager to inject a single module into your page pretty much wherever you want it. 

The difference between these two can be summed up as follows: 

A module position is a container in which you can assign modules so they appear on the front end. A module instance is a single module, injected directly into a specific place in the page.