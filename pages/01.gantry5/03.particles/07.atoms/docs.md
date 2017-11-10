---
title: Atoms
taxonomy:
    category: docs
    tag: [gantry5]
redirect: /gantry5/configure/page-settings#atoms
---

Atoms are Particles that do not appear visually on the frontend, but do serve an important purpose. They can be assigned on a per-page basis, or as a default which automatically applies to all of the pages on the site.

For all intents and purposes, Atoms such as **Google Analytics**, and **Custom CSS / JS** add scripting to the page which add or modify the page's scripting during load. This is useful for basic styling such as coloring, and analytics tracking.

Atoms can be assigned in the **Layout Manager** using a special line set up for non-visual particles. This is typically found at the bottom of the **Layout Manager** and Atoms can be dragged into place here in much the same way as regular rendered Particles would on a visible section.

! When using an Atom, the path to a local file is relative to the root of the site, and not to template folder. We recommend using a stream link, such as `gantry-theme://custom/thing.css` as an example, which enables the link to work even if you switch between G5 themes or platforms.

Google Analytics
-----

![Google Analytics](analytics_settings.png?classes=shadow,border)

The **Google Analytics** Atom gives you the ability to quickly add your **Google Analytics UA code** to a Layout, which runs in the background of your page during page load. It adds the necessary scripting around the code you enter in the Atom's **settings**.

Custom CSS / JS
-----

![Custom CSS / JS](custom_settings.png?classes=shadow,border)

JavaScript Frameworks
-----

The **JavaScript Frameworks** Atom gives you the ability to easily add popular JS libraries to your page.

[ui-tabs position="top-left" active="0"]
[ui-tab title="Joomla"]
![JavaScript Frameworks](atoms-frameworks_settings.png?classes=shadow,border)
! In Joomla the default **Bootstrap** library option will load your Joomla install's current implementation of Bootstrap based on Bootstrap 2.3.2.
[/ui-tab]
[ui-tab title="WordPress"]
![JavaScript Frameworks](wp_atoms-frameworks_settings.png?classes=shadow,border)
[/ui-tab]
[ui-tab title="Grav"]
![JavaScript Frameworks](grav_atoms-frameworks_settings.png?classes=shadow,border)
[/ui-tab]
[/ui-tabs]

Lightcase
-----

Lightcase is small, lightweight lightbox atom that gives you the ability to bring your images to life. It works in the background as an atom, being called with simple HTML. Here's an example:

```html
<a href="path/to/media.jpg"
   data-rel="lightcase"
   title="Your title"
>
    Your link description or thumb
</a>
```

All you need to do to take advantage of Lightcase is to activate it as an atom on the page (or pages) you wish to use it with, and to wrap images in HTML like that seen above.