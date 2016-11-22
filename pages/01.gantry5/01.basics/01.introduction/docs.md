---
title: Introduction
taxonomy:
    category: docs
    tag: [gantry5]
---

Gantry 5 is the latest generation of a powerful, flexible open source theming framework currently available for WordPress and Joomla.

One of the primary goals behind Gantry 5's development has been to make it easier for non-developers to get a lot more done without ever having to open a single code editor or directly alter any files.

In this guide, we will briefly introduce you to what Gantry is, and how it can make managing your site's theme incredibly easy.

## What is Gantry?

Gantry 5 was made from the ground up to make life easier for both the developer and the user. Themes made with Gantry 5 share a consistent user experience, reducing the learning curve for both parties. So, whether you are managing one site or fifty, the process for managing your theme is the same no matter how many different themes you use.

Gantry 5 is really easy to use. It has drag-and-drop functionality that enables you to dramatically change the layout of your site in seconds without ever having to even touch your keyboard.

Gantry is a theming framework. To better define Gantry's role in your website, here are some helpful definitions:

[ui-tabs position="top-left" active="0"]
[ui-tab title="CMS"]

If your website is a house, then the content management system **CMS** is the foundation. This is where your data is stored and managed. It is the system you use to add content such as posts, articles, pages, images, and more.

Gantry currently works on three content management systems, including:

* WordPress
* Joomla
* Grav

[/ui-tab]
[ui-tab title="Framework"]

The framework is the woodwork that gives your house structure such as walls, windows, doorways, and a roof. It is the tool you use to manage how your theme is applied, when and where content is displayed, and the general layout of your home.

In the case of Gantry, the framework is what you interact with on the back end. It gives you the ability to set colors, layouts, and just about any other aspect that affects the way the site looks.

Together, they work together to make your website function, look, and feel exactly as you need it to.

A good framework will give you as close to complete control over your site's visual layout as possible. Virtually everything the user sees outside of the content being served directly from the content management system is managed by the framework.

[/ui-tab]
[ui-tab title="Theme"]

The theme or template is what the look and feel of your site is based on. In the house example, it is the trim, paint, door knobs, light fixtures, and pretty much every little detail that gives the house its unique look and feel.

For websites using a Gantry-powered theme, the theme take advantage of the foundation created by the framework. This enables you to configure several different gantry-powered themes with the same, consistent

[/ui-tab]
[/ui-tabs]

## Meet the Gantry Administrator

![Admin](intro_admin.jpeg?classes=shadow,border)

The back end of Gantry is packed with features to help you configure and customize virtually every aspect of your website. While there are some minor differences in the panel(s) that appear in the administrator from CMS to CMS, the experience is consistent no matter which CMS you are using.

There are several ways to access the Gantry 5 administrator, depending on which CMS you are using. We have a [full guide here](../configure/gantry-admin) to help you find the way that's best for you.

Here are some of the administrative panels you will find:

#### Styles

![Admin](intro_style.jpeg?classes=shadow,border)

The **Styles** administrative panel gives you the ability to quickly and easily configure settings related to the appearance of the Gantry-powered theme. This includes being able to switch between pre-configured presets, as well as to refine the look of an outline using a set of style settings linked to the theme.

If you want to change the color scheme of your site, its fonts, or the animation of your menu's dropdown feature, this is where you would go.

<div align="center"><a href="../configure/styles" class="button"><i class="fa fa-fw fa-graduation-cap"></i> Learn More About Styles</a></div>

#### Particle Defaults

![Admin](intro_particle.jpeg?classes=shadow,border)

The **Particle Defaults** panel is really useful if you want to give your particles global default settings. By default, it only appears in the **Base Outline** and any changes you make here become the particle's default setting. For the most part, you'll go here to set things that are static like the logo and copyright information.

It's also a great place to go if you want to globally turn a particular type of particle **on** or **off**. This is useful if you have a custom particle for a temporary event on your site, such as a sale announcement. You have this particle places in several different places across multiple layouts.

You need to shut this particle off so it doesn't appear on your site after the sale has concluded. You can go through each layout individually, removing the particle one-by-one, or you could shut the particle off in the **Particle Defaults** panel so it disappears on your pages. Turning it back **on** for your next sale will make it reappear.

<div align="center"><a href="../configure/particle-defaults" class="button"><i class="fa fa-fw fa-graduation-cap"></i> Learn More About Particle Defaults</a></div>

#### Page Settings

![Admin](intro_pagesettings.jpeg?classes=shadow,border)

Want to add Google Analytics code to an outline? How about setting a favicon for your site? You can do this and a lot more in the **Page Settings** admin panel. This panel is where you can apply meta tags, JavaScript / CSS files, and more to your page. It's the go-to spot for adding scripts in the header and footer of your site.

You can put these adjustments in your **Base Outline** to have them apply globally, or in an individual **Outline** to have them only apply to the pages assigned to the outline.

<div align="center"><a href="../configure/page-settings" class="button"><i class="fa fa-fw fa-graduation-cap"></i> Learn More About Page Settings</a></div>

#### Layout Manager

![Admin](intro_layout.jpeg?classes=shadow,border)

Don't like where something is on the page? Just click and drag it where you want it to go from the **Layout Manager**. You can add things, remove them, resize them, create module/widget positions, and configure particles without touching the keyboard.

[plugin:youtube](https://www.youtube.com/watch?v=DN_U_W7LT_c)

Things like your logo, copyright information, branding, social icons, and more can also be adjusted directly from the Layout Manager.

Worried you might get something wrong? You can undo and redo any actions taken in the Layout Manager during that session with a click of the mouse.

<div align="center"><a href="../configure/layout-manager" class="button"><i class="fa fa-fw fa-graduation-cap"></i> Learn More About the Layout Manager</a></div>

#### Assignments

![Admin](intro_assignments.jpg?classes=shadow,border)

The **Assignments** panel gives you the ability to assign **outlines** to specific pages or categories of content. This works a little differently from platform to platform, however the basic function remains the same. As an example, if you create an **outline** specifically for the home page of your site, you can assign that outline to the home page here.

<div align="center"><a href="../configure/assignments" class="button"><i class="fa fa-fw fa-graduation-cap"></i> Learn More About Assignments</a></div>

#### Menu Editor

![Admin](intro_menu.jpg?classes=shadow,border)

Gantry 5's Menu Editor is a quick and easy way to non-destructively control the way menus appear on the front end of your site. You can rearrange menu items with drag-and-drop ease, inject particles and more.

It basically takes your menu(s) from the CMS and decorates them before passing them along to the visitor.

[plugin:youtube](https://www.youtube.com/watch?v=Ny0KgUz5JH8)

Everything you do in Gantry 5 is non-destructive, so your content and menus are left exactly the way they were, so you don't have to worry about doing anything that would disrupt your site's permanent makeup within the Gantry 5 Administrator.

<div align="center"><a href="../configure/menu-editor" class="button"><i class="fa fa-fw fa-graduation-cap"></i> Learn More About the Menu Editor</a></div>

#### Outlines

![Outlines](../../configure/outlines/outline_1.png?classes=shadow,border)

The **Outlines** admin panel is a global starting point for creating, duplicating, and accessing your outlines.

You'll notice on this page that there are two different kinds of outlines: **Standard** and **System**. A standard outline includes anything you might assign to a typical page. This includes the **Base Outline** which serves to set global style and settings defaults for your theme, and outlines that you assign to normal pages such as the home page, or to use as a default for your content pages.

![Outlines](../../configure/outlines/outline_5.png?classes=shadow,border)

**System Outlines** are integrated into Gantry's core. They are linked to specific page types, such as 404 or Offline. These outlines can be edited, but can not be created, renamed, or deleted, as they are core to Gantry.

This panel enables you to manage your outlines in a number of ways, and we'll break them down for you now.

#### Extras

[ui-tabs position="top-left" active="0"]
[ui-tab title="Joomla"]

![Admin](intro_extras_joomla.jpeg?classes=shadow,border)

[/ui-tab]
[ui-tab title="WordPress"]

![Admin](intro_extras_wp.jpeg?classes=shadow,border)

[/ui-tab]
[ui-tab title="Grav"]

![Admin](intro_extras_grav.jpeg?classes=shadow,border)

[/ui-tab]
[/ui-tabs]

The **Extras** dropdown gives you quick access to a few options that are handy to have instant access to throughout the administrator. This includes the **Development Mode** toggle switch, a **Clear Cache** shortcut, and a shortcut to **Platform Settings** which takes you to a platform-specific settings page for Gantry.

<div align="center"><a href="../configure/extras" class="button"><i class="fa fa-fw fa-graduation-cap"></i> Learn More About Extras</a></div>

## Particles System

Thanks to Gantry's particles system, the developer can create content blocks for your site that you can add, remove, and update without fear of breaking the site or having to deal with a single line of code. Simple fields and toggle switches make it easy to find and change virtually anything on your site.

This means you can make less calls to the developer for simple changes. Just log in, access the Gantry 5 Administrator, make your changes, and save.

[ui-tabs position="top-left" active="0"]
[ui-tab title="Joomla"]

Are you familiar with Joomla's module system? Gantry 5 integrates completely with Joomla so you can continue to use module positions just as you always have. It's super easy to create a new module position in seconds using the Layout Manager and Menu Editor.

[/ui-tab]
[ui-tab title="WordPress"]

Are you familiar with WordPress' widget system? Gantry 5 integrates completely with WordPress so you can continue to use widget positions just as you always have. It's super easy to create a new widget section in seconds using the Layout Manager.

[/ui-tab]
[ui-tab title="Grav"]

Grav is in a unique position to take full advantage of particles in Gantry 5. In addition to having the ability to add particles wherever you would like on the page, Grav users can take advantage of a new **Positions** area of the administrator that enables you to create positions that can be host to multiple, stacked particles that can be placed in any layout with ease.

This is a big time saver and an addition that creates an advanced layout system typically reserved for larger content management systems like Joomla to Grav.

[/ui-tab]
[/ui-tabs]

The particles system in Gantry 5 gives its themes an extraordinary flexibility. It's easier for developers to create custom features and apply them directly to your site in a way that exists apart from the content management system. For end users, it's a simple and easy way to add content to your pages. You can fill out a form instead of opening a code editor. You can pack your site with content and features without ever having to see a single line of code.

<div align="center"><a href="../particles/particles" class="button"><i class="fa fa-fw fa-graduation-cap"></i> Learn More About the Particles System</a></div>

## Where to Get Help

If you have any problems at all with Gantry, please feel free to let us know by submitting an issue on the [GitHub project](http://github.org/gantry/gantry5), or by reaching out via the [Gitter](http://gitter.im/gantry/gantry5) chat.

If you would like to check out the latest Gantry builds to get a glimpse at the latest developments in the Gantry project, we invite you to check out our CI Builds available for Joomla and WordPress. Additionally, we have CI builds available for download of the free Hydrogen theme.

A chat room has been set up using [Gitter](https://gitter.im/gantry/gantry5) where you can go to talk about the project with developers, contributors, and other members of the community. This is the best place to go to get quick tips and discuss features with others.

<div align="center"><a href="http://gitter.im/gantry/gantry5" class="button"><i class="fa fa-fw fa-support"></i> Chat with Us on Gitter</a></div>

You can also check out the source files and download past/current releases of Gantry 5 [directly on GitHub](http://github.com/gantry/gantry5). This is also the best place to submit issues and bug reports that you come across while using Gantry 5.

<div align="center"><a href="http://github.org/gantry/gantry5" class="button"><i class="fa fa-fw fa-github"></i> Submit an Issue on GitHub</a></div>

You can also find a lot of resources here in the Gantry Documentation. In the next chapter, we break down the different areas of the Gantry 5 Administrator and how it can help you get more done with Gantry 5.
