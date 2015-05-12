---
title: Adding Module Positions
taxonomy:
    category: docs
    tag: [gantry4]
gravui:
    enabled: true
    tabs: true
process:
    twig: true
---

This section covers how to add a new row of module positions to the Gantry Framework and to your Gantry-enabled template.

{% set tab1 %}

[plugin:youtube](https://www.youtube.com/watch?v=snZSUSWMnpM)

>>> Check out this quick screencast on Module Positions to get an overview of how module positions work within Joomla and the Gantry Framework.

{% endset %}
{% set tab2 %}

[plugin:youtube](https://www.youtube.com/watch?v=xYsB2VKmkFU)

>>> Check out this quick screencast on *Widget Positions* to get an overview of how widget positions work within WordPress and the Gantry Framework.

{% endset %}
{{ gravui_tabs({'Joomla':tab1, 'WordPress':tab2}) }}

>>>>> NOTE: The term **Module** in Joomla and **Widget** in WordPress mean essentially the same thing. They are blocks of data which can be placed throughout your site. For the purpose of simplifying this guide, consider the terms interchangeable, except when used to describe specific file names or functions.

Step 1: Getting Ready
---------------------
Determine the position name and location on your template where you would like your new "row module" position to appear. In our example we will use "example."


Step 2: Adding Position to index.php
------------------------------------

{% set tab1 %}

Open your template `index.php` file and go to where you would like to add your new row position. Using `$gantry`, we will make a call to the object using the function: `displayModules(positionname, widgetlayouttype, widgetchromelayout);`. This call will need to be echoed.

Example:

```html
<div id="rt-exampleposition">
  <?php echo $gantry->displayModules('example','standard','standard'); ?>
  <div class="clear"></div>
</div>
```

The new position now will appear after we have configured the Gantry portion to recognize it. Until then, it will not work properly.

{% endset %}
{% set tab2 %}

Open your template `index.php` file and go to where you would like to add your new position. Using `$gantry`, we will make a call to the object using the function: `displayModules(positionname, widgetlayouttype, widgetchromelayout);`. This call will need to be echoed.

Example:

```html
<div id="rt-exampleposition">
  <?php echo $gantry->displayModules('example','standard','standard'); ?>
  <div class="clear"></div>
</div>
```

The new position now will appear after we have configured the Gantry portion to recognize it. Until then, it will not work properly.

{% endset %}
{{ gravui_tabs({'Joomla':tab1, 'WordPress':tab2}) }}

Step 3: Adding Position to Gantry Framework
-------------------------------------------

{% set tab1 %}

Open `templateDetails.xml` and scroll down to the "positions" tag where the default Gantry positions are listed. Under here we will need to add our "row module" positions a through f, as in the example below:

```xml
<position>example-a</position>
<position>example-b</position>
<position>example-c</position>
<position>example-d</position>
<position>example-e</position>
<position>example-f</position>
```

Next, open `template-options.xml` and scroll down to the line which says this:

```xml
<fieldset name="layouts" label="LAYOUTS">
```

{% endset %}
{% set tab2 %}

Open `templateDetails.xml` and scroll down to the "positions" tag where the default Gantry positions are listed. Under here, we will need to add our "row module" positions a through f.

Example:

```xml
<position id="example" name="Example" max_positions="6">Example</position>
```

Next: Scroll down to the line which says:

```xml
<fieldset name="layouts" label="LAYOUTS">
```

{% endset %}
{{ gravui_tabs({'Joomla':tab1, 'WordPress':tab2}) }}

This is where we add our new position layout slider. We need to add the following xml block to make this appear in the Template Manager:

```xml
<fields name="example" type="position" label="Example" description="LAYOUT_POS_DESC">
    <field name="layout" type="positions" default="3,3,3,3" label="">
        <schemas>1,2,3,4,5,6</schemas>
        <words>2,3,4,5,6,7,8,9,10</words>
    </field>
    <field name="showall" type="toggle" default="0" label="FORCE_POS"/>
    <field name="showmax" type="showmax" default="6" label="POS_COUNT"/>
</fields>
```

|  Attribute  |                                  Description                                   |
| :---------- | :----------------------------------------------------------------------------- |
| name        | name of position                                                               |
| type        | must always be "position"                                                      |
| default     | default layout for the "row module" any combination of 12 separated by commas. |
| label       | Label in Template Manager for this module.                                     |
| description | description of what this area is used for.                                     |

Joomla
=====

Note: Creating a New Module
---------------------------
When creating a new module in `<header id="rt-top-surround">`, you should also make a reference to the new module in our LESS files, specifically.

```php
#
rt - header, #rt - top { 
    z - index: 2; 
    position: relative; 
}
```

If, for example, your new module is called `#rt-coffee`, then you should throw the following code into the mix.

```php
#
rt - header, #rt - top, #rt - coffee { 
    z - index: 2; 
    position: relative; 
}
```

As a suggestion, you may want to put the following in a custom CSS or LESS file to avoid it being overridden in the event of a template update.

```php
#
rt-coffee {
	z-index: 2;
	position: relative;
}
```
