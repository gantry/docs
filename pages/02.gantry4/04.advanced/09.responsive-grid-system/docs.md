---
title: Responsive Grid System
taxonomy:
    category: docs
    tag: [gantry4]
gravui:
    enabled: true
    tabs: true
process:
    twig: true
---

The Gantry Framework was originally based on the [960 Grid System](http://960.gs/) that offered a 12-column grid structure based on a fixed 960px-width layout. From version 4.x on, the responsive grid system of [Twitter's Bootstrap](http://twitter.github.com/bootstrap/) is used.

[ui-tabs position="top-left" active="0" theme="lite"]
[ui-tab title="Joomla"]

[plugin:youtube](https://www.youtube.com/watch?v=AKqppYSttEE)

! Check out the Gantry introductory video to see the responsive capabilities of Gantry 4-powered template designs. Powerful features, presets, layout configuration, responsive design, and much, much more.

[/ui-tab]
[ui-tab title="WordPress"]

[plugin:youtube](https://www.youtube.com/watch?v=akpCH1JNvaY)

! Check out the Gantry introductory video to see the responsive capabilities of Gantry 4 powered template designs. Powerful features, presets, layout configuration, responsive design, and much, much more.

[/ui-tab]
[/ui-tabs]

The **Responsive Layout** adapts to the viewing device, such as a smartphone, tablet or desktop, based on the resolution of the screen. There are five different width formats, and each utilizes the grid structure in a different way. This is achieved through **@media queries**, which can detect the width of the browser window, and allows for different CSS, accordingly. This is the basic function that makes responsive designs possible. In effect, a single site will adapt automatically to the viewing device, without the need for separate layouts -- like mobile.

As a note, a responsive layout does not detect a specific device. It only detects the width of the viewing environment. So, any names, such as _smartphone_ or _tablet_, are convenient shorthand only.


Responsive Grid Info
--------------------
The responsive grid system is designed for desktop, tablet and smartphone systems. Each has minor modifications to ensure compatibility in different modes. The table below shows the breakdown of screen resolutions and associated devices, and which layout characters are then applied to each.

|       Label       | Layout Width (in pixels) |     Column Width (in pixels)    |     Gutter Width (in pixels)    |
| :---------------- | :----------------------- | :------------------------------ | :------------------------------ |
| Large Display     | >= 1200                  | 100                             | 20                              |
| Default           | 960 to 1199              | 80                              | 20                              |
| Portrait Tablets  | 768 to 959               | 64                              | 20                              |
| Phones to Tablets | <= 767                   | Fluid Columns (No Fixed Widths) | Fluid Columns (No Fixed Widths) |
| Phones            | <= 480                   | Fluid Columns (No Fixed Widths) | Fluid Columns (No Fixed Widths) |


Responsive Support Classes
--------------------------
Another useful available feature, via Bootstrap, is the collection of responsive utility classes that can be used to help tweak layouts by providing a simple method of showing or hiding modules. Insert the below support classes into your module settings to show/hide a module for a particular mode, or add to a specific element in your content.

|       Class       | Phones (<= 767px) | Tablets (768-959px) | Desktops (960-1199px) | Desktops (>= 1200px) |
| :---------------- | :---------------- | :------------------ | :-------------------- | :------------------- |
| `visible-phone`   | **Visible**       | Hidden              | Hidden                | Hidden               |
| `visible-tablet`  | Hidden            | **Visible**         | Hidden                | Hidden               |
| `visible-desktop` | Hidden            | Hidden              | **Visible**           | **Visible**          |
| `visible-large`   | Hidden            | Hidden              | Hidden                | **Visible**          |
| `hidden-phone`    | Hidden            | **Visible**         | **Visible**           | **Visible**          |
| `hidden-tablet`   | **Visible**       | Hidden              | **Visible**           | **Visible**          |
| `hidden-desktop`  | **Visible**       | **Visible**         | Hidden                | Hidden               |
| `hidden-large`    | **Visible**       | **Visible**         | **Visible**           | Hidden               |

Media Queries
-------------
The actual media queries CSS looks like this:

```css
/* Smartphones */
@media (max-width: 480px) { ... }

/* Smartphones to Tablets */
@media (min-width: 481px) and (max-width: 767px) { ... }

/* Tablets */
@media (min-width: 768px) and (max-width: 959px) { ... }

/* Desktop */
@media (min-width: 960px) and (max-width: 1199px) { ... }

/* Large Display */
@media (min-width: 1200px) { ... }
```

Navigation
----------
The menu system for a smartphone device will be that of a select field. A select field is a great solution for this because most phones have nice native select UI elements. Using this method is necessary as to make the menu accessible on the mobile devices, as Fusion and our other menu types are simply too complex to render effectively on these devices. A new menu system will be created that is responsive, but will also form part of Gantry.

All other sizes will use the normal menu system build on **RokNavMenu**, such as **Fusion Menu** or **SplitMenu**.

![](responsive3.jpg)  {.border .shadow}
