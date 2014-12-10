---
title: Overriding a Gizmo (WordPress)
taxonomy:
    category: docs
---

A fundamental principle of *Gantry Framework* is its ability to be overridden so it can be as flexible as possible to suit the needs of an individual site or template. Gantry allows you to override Widget Layouts, Widget Chromes, Layouts, and provides a platform for extension overrides. The area of focus in this tutorial is that of *Gizmos*.

What is a Gizmo?
------------------
A gizmo is a standalone element that adds a specific utility to the template. It extends the functionality of the template and can be configured, either generally or for specific overrides, using the Gantry administrator interface.

Gizmos are located at `/wp-content/plugins/gantry/gizmos/` and include a variety of different types such as Google Analytics, Page Suffix and RokStyle. There are many other default gizmos†included.

Below is an example of the `/wp-content/plugins/gantry/gizmos/pagesuffix.php` gizmo:

```php
<?php
defined('GANTRY_VERSION') or die();

gantry_import('core.gantrygizmo');

/**
 * @package     gantry
 * @subpackage  features
 */
class GantryGizmoPageSuffix extends GantryGizmo
{

  var $_name = 'pagesuffix';

  function query_parsed_init() {

    /** @global $gantry Gantry */
    global $gantry;

    //add body class suffix
    $gantry->addBodyClass($gantry->get('pagesuffix-class'));

  }

}
```

There are several parts to a gizmo. First, the following sets the file as a Gantry Gizmo, importing the necessary functions:

```php
<?php
defined('GANTRY_VERSION') or die();

gantry_import('core.gantrygizmo');
```

Next, the feature is then differentiated by a name, in this case **GantryGizmo**___PageSuffix___ and **'pagesuffix'**:

```php
class GantryGizmoPageSuffix extends GantryGizmo
{
   var $_name = 'pagesuffix';
```

Immediately following the naming of the feature, there is some additional processing code that should not be modified.

```php
function query_parsed_init() {
   ?>
```

The next area of the feature is the XHTML layout or code you want to execute :

```php
    /** @global $gantry Gantry */
    global $gantry;

    //add body class suffix
    $gantry->addBodyClass($gantry->get('pagesuffix-class'));
```

After the above code, the following completes the gizmo:

```php
<?php
   }
}
```


Overriding a Gizmo
--------------------
Gantry allows gizmos to be overridden by either copying a gizmo directly from `/wp-content/plugins/gantry/gizmos/` or creating a new `pagesuffix.php` file at `/wp-content/themes/[TEMPLATE]/gizmos/`.

A gizmo file must follow the format listed in the section above. There are, in effect, just two areas of modification. 

The first is the name. This must be unique in order to avoid conflicts.

The second is the XHTML layout or other PHP code where you can construct the gizmos to meet your needs.


Gizmos and the Administrator
------------------------------
Depending on the level of modification you plan for a particular gizmo, you may wish to edit its parameters. For this, you will need to edit the `/wp-content/themes/[TEMPLATE]/templateDetails.xml` file.

The relevant part of this XML file begins with:

```xml
<fieldset name="gizmos" label="GIZMOS">
```

Here, you can locate the relevant **field(s)** for the gizmo you wish to modify such as **pagesuffix**:

```xml
<fields name="pagesuffix" type="chain" label="PAGESUFFIX" description="PAGESUFFIX_DESC">
  <field name="enabled" type="toggle" default="0" label="ENABLED" enabler="true" />
  <field name="class" type="text" default="" class="text-long" label="CLASS"/>
  <field name="priority" type="hidden" default="2"/>
</fields>
```
