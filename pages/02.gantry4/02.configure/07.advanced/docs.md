---
title: Advanced
taxonomy:
    category: docs
    tag: [gantry4]
---

The **Advanced** panel in the Gantry-based template administration interface provides several settings for configuring the menu options for the template. The following configuration options are available:


Mainbody Enabled
----------------

[ui-tabs position="top-left" active="0" theme="lite"]
[ui-tab title="Joomla"]

The **Mainbody Enabled** option allows you to enable/disable the entire mainbody section. This is useful for sites and templates that want to make use of a front page that consists entirely of modules with only subpages showing the Joomla component output.

![](advanced-mainbody.jpg?classes=shadow,border) 

[/ui-tab]
[ui-tab title="WordPress"]

The *Mainbody Enabled* option allows you to enable/disable the entire Mainbody section. This is useful for sites and templates that want to make use of a page that consists entirely of widgets.

![](advanced-mainbody_wp.jpg?classes=shadow,border) 

[/ui-tab]
[/ui-tabs]

RTL Support
-----------

RTL means “right-to-left” and is a key component when trying to deliver a website in an RTL language such as Hebrew, Arabic, Urdu, etc. Gantry has built in RTL support which will automatically “flip” the content layouts and ordering to support RTL. This option allows you to enable/disable the built-in RTL support which is automatically detected and displayed based on the language file setting.

![](advanced-rtl.jpg?classes=shadow,border) 




Template Typography
-------------------
The Template Typography option allows you to enable/disable specific typography elements from loading, as well as allowing you to select between light and dark typography.

![](advanced-typography.jpg?classes=shadow,border) 

Selectivizr
-----------
Enable or disable Selectivizr support for IE8 providing support for additional CSS selectors for better compatibility.

![](advanced-selectivizr.jpg?classes=shadow,border) 

Less Compiler
-------------
Less is used for all the CSS, which is a server side compiler. These options allow you to determine the delay on that compiling process, whether CSS compression is also infused within it, or if you wish to debug the header. There is also a button to clear the LESS cache.

![](advanced-less.jpg?classes=shadow,border) 

Joomla Options
=====

Display Component
-----------------

The **Display Component** option allows you to enable/disable the output of the Joomla component on the front page. This is useful for sites and templates that want to make use of a front page that consists entirely of modules, with only subpages showing the Joomla component output.

![](advanced-display-component.jpg?classes=shadow,border) 

Page Suffix
-----------

The Page Suffix option allows you to enable/disable page suffix classes being appended to the body tag. With this option enabled, any page suffix classes used for particular pages in joomla will have that suffix added to the body tag to allow for styling and customization on a page by page basis.

![](advanced-page-suffix.jpg?classes=shadow,border) 

WordPress Options
=====

Maintenance Mode
----------------
*Maintenance Mode* allows you to block the non logged in visitors from viewing your site for the time you're making changes to it. This way you can do modifications and test them without unnecessary rush. By default the front end will display the message specified in the **Message** field, but you can also create your own custom file called `maintenance.php` in the template root directory which will be used instead.

![](advanced-maintenance-mode_wp.jpg?classes=shadow,border) 

Display Content
---------------
The *Display Content* option allows you to enable/disable the output of the WordPress content on the front end. This is useful for sites and templates that want to make use of a page that consists entirely of widgets but preserving all Mainbody widget positions.

![](advanced-display-content_wp.jpg?classes=shadow,border) 

Disable Auto Paragraphs
-----------------------
The *Disable Auto Paragraphs* option allows you to remove the WordPress filter responsible for automatic `<p>` tag content wrapping. This can be very useful when creating a complex content.

![](advanced-disable-auto-paragraphs_wp.jpg?classes=shadow,border) 

Selectivizr
-----------
Enable or disable *Selectivizr* support for IE8 providing support for additional CSS selectors for better compatibility.

![](advanced-selectivizr_wp.jpg?classes=shadow,border) 
