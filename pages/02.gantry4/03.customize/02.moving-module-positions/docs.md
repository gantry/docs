---
title: Moving Module Positions
taxonomy:
    category: docs
    tag: [gantry4]
---

This section covers moving a set of module positions within your Gantry-enabled template.

[ui-tabs position="top-left" active="0" theme="lite"]
[ui-tab title="Joomla"]

[plugin:youtube](https://www.youtube.com/watch?v=snZSUSWMnpM)

! Check out this quick screencast on Module Positions to get an overview of how module positions work within Joomla and the Gantry Framework.

[/ui-tab]
[ui-tab title="WordPress"]

[plugin:youtube](https://www.youtube.com/watch?v=xYsB2VKmkFU)

! Check out this quick screencast on Widget Positions to get an overview of how this feature works within WordPress and the Gantry Framework.

[/ui-tab]
[/ui-tabs]

>>>>> NOTE: The term **Module** in Joomla and **Widget** in WordPress mean essentially the same thing. They are blocks of data which can be placed throughout your site. For the purpose of simplifying this guide, consider the terms interchangeable, except when used to describe specific file names or functions.

Step 1: Planning
----------------
Determine which module you want to move, and where it needs to go within the `index.php` file of the template.

Step 2: Moving Module
---------------------
Copy the Gantry module block of code you wish to move. It should look similar to this:

```html
<?php /** Begin Top **/ if ($gantry->countModules('top')) : ?>
<div id="rt-top" <?php echo $gantry->displayClassesByTag('rt-top'); ?>>
    <div class="rt-container">
        <?php echo $gantry->displayModules('top','standard','standard'); ?>
        <div class="clear"></div>
    </div>
</div>
<?php /** End Top **/ endif; ?>
```

Move to area and paste the copied block of code into the new location.
