---
title: Overriding a Feature (Joomla)
taxonomy:
    category: docs
    tag: [gantry4]
---

A fundamental principle of the Gantry Framework is its ability to be overridden. This allows it to be as flexible as possible in order to suit the needs of an individual site or template. Gantry allows you to override Module Layouts, Module Chromes, Layouts, and provides a platform for extension overrides. The area of focus in this tutorial is that of Features.

What is a Feature?
------------------
A feature is a standalone element that adds a specific utility to the template. They extend the functionality of the template and can be configured either generally, or for specific menu items using the Gantry administrator interface.

Features are located in `/libraries/gantry/features/` and include a variety of different types such as Date, Copyright, and Logo. There are many other default features included.

Below is an example of the `/libraries/gantry/features/copyright.php` feature:

```php
<?php
defined('JPATH_BASE') or die();

gantry_import('core.gantryfeature');

class GantryFeatureCopyright extends GantryFeature
{
    var $_feature_name = 'copyright';

    function render($position)
    {
        ob_start();
        ?>
    <div class="clear"></div>
    <div class="rt-block">
        <a href="http://www.rockettheme.com/" title="rockettheme.com" id="rocket"></a>
        <?php echo $this->get('text'); ?>
    </div>
    <?php
        return ob_get_clean();
    }
}
```

There are several components to a feature. First, the following sets the file as a Gantry Feature, importing the necessary functions:

```php
<?php
defined('JPATH_BASE') or die();

gantry_import('core.gantryfeature');
```

Next, the feature is then differentiated by a name, in this case **GantryFeature**___Copyright___ and **'copyright'**:

```php
class GantryFeatureCopyright extends GantryFeature
{
   var $_feature_name = 'copyright';
```

Immediately following the naming of the feature is additional processing code that should not be modified.

```php
function render($position)
{
   ob_start();
   ?>
```

The next area of the feature is the XHTML layout, which you can add your custom XHTML code to:

```html
<div class="clear"></div>
<div class="rt-block">
   <a href="http://www.rockettheme.com/" title="rockettheme.com" id="rocket"></a>
   <?php echo $this->get('text'); ?>
</div>
```

After the XHTML structure, you complete the feature with the following:

```php
<?php
   return ob_get_clean();
   }
}
```


Overriding a Feature
--------------------
Gantry allows features to be overridden by either copying a feature directly from `/libraries/gantry/features/` or creating a new **feature.php** file at `/templates/[TEMPLATE]/features/`.

A feature file must follow the format in the section above. There is, in effect, two areas of modification. The first is the name that must be unique. The second is the XHTML layout where you can construct the feature's structure to meet your ends.


Features and the Administrator
------------------------------
Depending on the level of modification you plan for a particular feature, you may wish to edit its parameters. For this, you will need to edit the `/templates/[TEMPLATE]/template-options.xml` file.

The relevant part of this XML file begins with:

```xml
<fieldset name="features" label="FEATURES">
```

Here, you can locate the relevant **field(s)** for the feature you wish to modify such as **copyright**:

```xml
<fields name="copyright" type="chain" label="COPYRIGHT" description="COPYRIGHT_DESC">
   <field name="enabled" type="toggle" default="0" label="SHOW" />
   <field name="position" type="position" default="copyright-a" label="POSITION" />
   <field name="text" type="text" default="Designed by RocketTheme" label="TEXT" class="text-long" />
</fields>
```
