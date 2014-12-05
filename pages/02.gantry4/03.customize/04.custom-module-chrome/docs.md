---
title: Custom Module Chrome
taxonomy:
    category: docs
---

This section covers the creation of a Chrome custom module layout, and how to link it into your Gantry enabled template.

Step 1: Planning
----------------
Determine the name of your custom module position. In this case, we will be using "example" as the custom Chrome module name.

Step 2: Editing html/modules.php
--------------------------------
Open `html/modules.php` and scroll down to the bottom of the document. We need to create a new function as per the example below where we use our name "example" after the `modChrome_`.

```php
function modChrome_example($module, &$params, &$attribs) { ... }
```

Inside this function, we can then customize how the module appears when rendered in the template. In this example, we will keep it simple by adding a wrapper around the content and title.

Example:

```php
function modChrome_example($module, &$params, &$attribs)
{
  if (!empty ($module->content)) : ?>
  <div class="examplewrapper">
  <h2><?php echo $module->title; ?></h2>
  <div class="examplecontent">
  <?php echo $module->content; ?>
  </div>
  </div>
  <?php endif;
}
```

Upon saving, this custom module layout will now be available to use in Gantry.


Step 3: Adding Custom Module to Gantry
--------------------------------------
Open up the templates **index.php** file and find the Gantry row module position you wish to apply your custom module layout to. In the third function parameter, add the name you gave to your Chrome module after the _. In the case of this example, we'll use "example." See more below:

```php
<?php echo $gantry->displayModules('top','standard','example'); ?>
```

If you wish to apply this to the main body sidebars, the layout will look like the following:

```php
<?php echo $gantry->displayMainbody('mainbody','sidebar', sidebarchromelayout, contenttoplayoutname, contenttopchromename, contentbottomlayoutname, contentbottomchromename); ?>
```

Any module placed in this position will now use this display format.
