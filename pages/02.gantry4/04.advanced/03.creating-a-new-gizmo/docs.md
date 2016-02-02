---
title: Creating a New Gizmo (WordPress)
taxonomy:
    category: docs
    tag: [gantry4]
gravui:
    enabled: true
    tabs: true
process:
    twig: true
---

In the Gantry framework, we use the term **Gizmo** to refer to a specific type of functionality. Gizmos are flexible enough that they can be used to perform almost any kind of logic you would need. The base **GantryGizmo** class contains methods that can be implemented to control how your gizmo functions. Those methods are:

! For Joomla, the equivalent tab is called **Feature**. You can find out more about Joomla gizmos by visiting the [Creating a New Feature guide](../creating-a-new-feature).

### `isEnabled()`

* By default, this gets its state from the enabled toggle in the admin. You can override this to force the enabling of a gizmo without any UI interaction.
* Returns `boolean` (true / false)                                                                                                                         

### `setPrefix(string $prefix)`     

* This sets a prefix for handling prefixed parameters such as chained elements.
* Argument `string` (prefix name - usually the name of the main chain param)
                                                                                                         
### `get($param [, $prefixed = true])`                                

* This method gets a param from the gizmo's configuration. Can also take a prefix for more specificity.
* Argument `string` (field name)
* Argument (optional) `boolean` (true / false)
* Returns `mixed` (the current value of the field)     

### `init()`

* Empty, by default. It's the first method called on initialization of a gizmo. It's used for setup or initialization.

### `query_parsed_init()`

* Empty, by default. This method initializes the gizmos after a query gets parsed.

### `admin_init()`

* Empty, by default. It's used to initialize a gizmo when the admin dashboard gets initialized.

### `finalize()`

* Empty, by default. This is called at the end of the gizmo.

All core gizmos, and any custom gizmo you create, should extend this **GantryGizmo class**. To create a new gizmo of your own, you would just have to create a new file in your `gizmos/` folder that extended the **GantryGizmo class**. It will automatically be picked up by the Gantry framework and processed. The best way to see what one can do for you is to examine a few of the core gizmos.

Google Analytics Gizmo
----------------------
First, let's look at one of the core gizmos called `analytics.php`. As you can imagine, the **analytics** gizmo is intended to add the Google Analytics tracking code to your site. The most important part of a gizmo is the actual gizmo PHP file. The core gizmos are located in the `YOUR_SITE/wp-content/plugins/gantry/gizmos/` folder. These should **never** be touched or changed. 

If you want to override the behavior of a core gizmo, simply copy the core gizmo to your `YOUR_SITE/wp-content/themes/YOUR_TEMPLATE/gizmos` folder. Gantry will automatically pick up your version of the file and use it rather than the default version if you have created one with the same name. The other part of a gizmo, and one that is totally optional, is the configuration section. As with other parts of Gantry, the configuration is handled in the **templateDetails.xml**. 

For the **Google Analytics** gizmo, the section in **templateDetails.xml** looks like:

```xml
<fields name="analytics" type="chain" label="Analytics">
    <field name="enabled" type="toggle" default="0" label="Enable" />
    <field name="code" type="text" default="" label="Code" class="text-long" />
    <field name="priority" type="hidden" default="3"/>
</fields>
```

What this means is that in the administrator interface, there are going to be two parameters rendered. One is a toggle element that will control the 'enabled' state. The second is a text input for your unique Analytics key that will be added to the JS script. By exposing these elements in the XML, we allow interaction with the user. If you wanted to add new elements in this XML section, you could. They would be available for you to use in your gizmos PHP definition.

Next, let's look at the PHP for this feature:

```php
<?php
/**
 * @version   $Id: analytics.php 59361 2013-03-13 23:10:27Z btowles $
 * @author    RocketTheme http://www.rockettheme.com
 * @copyright Copyright (C) 2007 - ${copyright_year} RocketTheme, LLC
 * @license   http://www.gnu.org/licenses/gpl-2.0.html GNU/GPLv2 only
 */

defined('GANTRY_VERSION') or die();

gantry_import('core.gantrygizmo');

/**
 * @package     gantry
 * @subpackage  features
 */
class GantryGizmoAnalytics extends GantryGizmo
{

    var $_name = 'analytics';

    function init()
    {
        /** @global $gantry Gantry */
        global $gantry;

        ob_start();
        // start of Google Analytics javascript
        ?>
        var _gaq = _gaq || [];
        _gaq.push(['_setAccount', '<?php echo $this->get('code'); ?>']);
        _gaq.push(['_trackPageview']);

        (function() {
        var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
        ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
        })();
        <?php
        // end of Google Analytics javascript
        $gantry->addInlineScript(ob_get_clean());

    }
}
```

As you can see, the only method that is used is the `init()` method. Other methods from the base **GantryGizmo** class are not overridden. That means that the standard methods (to get the enabled state, etc.) are being used, and are pulling that data from the XML, in addition to the admin settings. You can see how custom XML parameters like **code** are easily available, and are automatically prefixed by the gizmo name. This allows you to just use `get->("code")` to retrieve the value of of a chained field.

Have a look through all the [default gizmos](../configure/gizmos.md) that come with Gantry to see how you can achieve a wide variety of functionality with these incredible tools.
