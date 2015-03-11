---
title: Gantry Core Concepts
taxonomy:
    category: docs
    tag: [gantry5]
gravui:
    enabled: true
    tabs: true
process:
    twig: true
---

One of the key concepts that make Gantry so powerful is its ability to provide a wealth of power and functionality which can easily be accessed by the theme or template. This makes it easier for you, the developer, to write cleaner code. 

As a side benefit, it provides a consistent platform that enables you to rapidly build and deploy your designs on multiple platforms with minimal effort. The Gantry library handles all the complicated bits for you.

Template index.php
------------------

We can start by taking a look at what you will find in your theme's `index.php` file.

{% set tab1 %}

Coming soon...

{% endset %}
{% set tab2 %}

Coming soon...

{% endset %}
{{ gravui_tabs({'Joomla':tab1, 'WordPress':tab2}) }}


XML Configuration
-----------------

{% set tab1 %}

Coming soon...

{% endset %}
{% set tab2 %}

Coming soon...

{% endset %}
{{ gravui_tabs({'Joomla':tab1, 'WordPress':tab2}) }}

Template Parameters
-------------------

{% set tab1 %}

Coming soon...

{% endset %}
{% set tab2 %}

Coming soon...

{% endset %}
{{ gravui_tabs({'Joomla':tab1, 'WordPress':tab2}) }}

Full coverage of the Gantry module layout configurations and how to set up different widths can be found in the [Layouts](../configure/layouts.md) section.

