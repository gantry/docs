---
title: Gizmos (WordPress)
taxonomy:
    category: docs
    tag: [gantry4]
gravui:
    enabled: true
    tabs: true
process:
    twig: true
---

[plugin:youtube](https://www.youtube.com/watch?v=oQmpE_0OVro)

! A quick way to see the power of Gantry gizmos is to check out this short screencast. It covers some of the basics of gizmos and how they work and how they can be easily integrated into your design.

Page Suffix
-----------
The *Page Suffix* gizmo allows you to add extra CSS classes to the `<body>` tag of your site. This allows you to apply your CSS styles on a per-page basis.

![](gizmos-page-suffix_wp.jpg) {.border .shadow}


Feed Links
----------
The *Feed Links* gizmo decides whether WordPress should add the feed links to the `<head>` tag, allowing various feed readers to access them.

![](gizmos-feed-links_wp.jpg) {.border .shadow}


Custom Title Tag
----------------
The *Custom Title* tag allows you to customize your site's `<title>` tag to replace the default title placed in the head section of your page(s). This, combined with our *Overrides* system, gives you a possibility of having a completely different site title for each element of your content. There are a number of tokens available for usage: 

**Front Page / Home Page**

* `%blog_title%` - displays the blog title (set in WordPress Settings)
* `%blog_description%` - displays the blog description (set in WordPress Settings)

**Static Page**

* `%blog_title%` - displays the blog title (set in WordPress Settings)
* `%blog_description%` - displays the blog description (set in WordPress Settings)
* `%page_title%` - displays the title of currently viewed page
* `%page_author_login%` - displays the login of the author of current page
* `%page_author_nicename%` - displays the nicename of the author of current page (set in the WordPress user settings)
* `%page_author_firstname%` - displays the first name of the author of current page
* `%page_author_lastname%` - displays the last name of the author of current page

**Category Pages**

* `%blog_title%` - displays the blog title (set in WordPress Settings)
* `%blog_description%` - displays the blog description (set in WordPress Settings)
* `%category_title%` - displays the title of the currently browsed category
* `%category_description%` - displays the description of the currently browsed category

**Archive Pages**

* `%blog_title%` - displays the blog title (set in WordPress Settings)
* `%blog_description%` - displays the blog description (set in WordPress Settings)
* `%date%` - displays the date of the currently browsed archive page

**Tags Pages**

* `%blog_title%` - displays the blog title (set in WordPress Settings)
* `%blog_description%` - displays the blog description (set in WordPress Settings)
* `%tag%` - displays the tag of the currently browsed tags page

![](gizmos-custom-title-tag_wp.jpg) {.border .shadow}


Shortcodes in Widgets
---------------------
The *Shortcodes in Widgets* gizmo allows you to use WordPress shortcodes in Widgets when disabled shortcodes syntax placed in widgets won't get parsed.

![](gizmos-shortcodes-in-widgets_wp.jpg) {.border .shadow}


RokStyle
--------
The *RokStyle* gizmo allows you to easily add inline CSS or JS code to the `<head>` tag of your site by placing a shortcode syntax in your content. Here's an example: 

**CSS :** `[rokstyle type="css"].example {font-weight: bold;}[/rokstyle]`

**JavaScript :** `[rokstyle type="js"]InputsExclusion.push('.example')[/rokstyle]`

![](gizmos-rokstyle_wp.jpg) {.border .shadow}


Google Analytics
----------------
The *Google Analytics* gizmo allows you to enable Google Analytics tracking on your site in a quick and easy way. Just enable the feature and input your UA Key assigned to you by Google in the field provided.

![](gizmos-google-analytics_wp.jpg) {.border .shadow}

