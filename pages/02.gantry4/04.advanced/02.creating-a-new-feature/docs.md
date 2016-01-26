---
title: Creating a New Feature (Joomla)
taxonomy:
    category: docs
    tag: [gantry4]
gravui:
    enabled: true
    tabs: true
process:
    twig: true
---

In the Gantry framework, we use the term **Feature** to mean a specific bit of functionality. Features are flexible enough that they can be used to perform almost any type of logic you would need. The base **GantryFeature** class contains methods that can be implemented to control how your feature functions. Those methods are:

! For WordPress, the equivalent tab is called **Gizmos**. Many of the features used in Joomla are represented by Widgets on WordPress. You can find out more about WordPress gizmos by visiting the [Creating a New Gizmo guide](../creating-a-new-gizmo).

### `isEnabled()`

* By default, this gets its state from the enabled toggle in the admin. You can override this to force the enabling of a feature without any UI interaction.
* Returns `boolean` (true / false)                                                                                                                         

### `getPosition()`     

* This gets its position from the position element in the admin by default. Again, you can override this to force a position without any UI interaction.
* Returns `string` [current position name]                                                                                                             

### `isInPosition([string $position])`                                

* This is a method to determine if the feature is located in a specified position.                    
* Argument (optional) `string` (position name to get compared with the current position of the feature).
* Returns `boolean` (true / false) if the current position is the same as the argument.          

### `isOrderable()`         

* A method that defaults to true, but can be overriden if the order of this position is not important.
* Returns `boolean` (true / false)                                                                   

### `setPrefix(string $prefix)`    

* This sets a prefix for handling prefixed fields such as chained elements.
* Argument `string` (prefix name - usually the name of the main chain param)

### `get($param [, $prefixed = true])` 

* This gets a param from the feature's configuration. It can also take a prefix for more specificity.
* Argument `string` (field name)                                                                    
* Argument [optional] `boolean` (true / false)                                                      
* Returns `mixed` (the current value of the field)                                                 

### `init()`        

* Empty by default. It's the first method called on initialization of a feature. Used for setup or initialization.

### `render()`

* This is used to render output in a particular position. It is empty by default.

### `finalize()`

* Empty by default, this is called at the end of the feature.

All core features, and any custom feature you create, should extend this **GantryFeature** class. To create a new feature of your own, you would just have to create a new file in your  `features/` folder that extended the `libraries/gantry/core/gantryfeature.class.php` class. It will automatically get picked up by the Gantry framework and be processed. The best way to see what a feature can do for you is to examine a few of the core features located in the `libraries/gantry/features/` folder.


ToTop Feature
-------------
First, let's take a look at `totop.php`, one of the core features. As you can imagine, the **TopTop** feature is intended to display a link at the bottom of your page which provides a smooth-scroll back to the top of the page. The most important part of a feature is the actual feature PHP file. The core features are located in the `libraries/gantry/features/` folder. These should **never** be touched or changed.

If you want to override the behavior of a core feature, simply copy the core feature in your `/templates/[YOUR_TEMPLATE]/features` folder. Gantry will automatically pick up your version of the file and use it rather than the default version if you have created one with the same name. The other part of a feature, and one that is totally optional, is the configuration section. As with other parts of Gantry, the configuration is handled in `template-options.xml`.

For the **totop** feature the section in the `template-options.xml` looks like:

```xml
<fields name="totop" type="chain" label="TOTOP" description="TOTOP_DESC">
    <field name="enabled" type="toggle" default="0" label="SHOW"/>
    <field name="position" type="position" default="copyright-b" label="POSITION"/>
    <field name="text" type="text" default="Back to Top" label="TEXT" class="text-long" />
</fields>
```

This means that there are going to be three fields rendered in the administrator interface. One is a toggle element that will control the 'enabled' state, and the second is position element which controls the position the feature is rendered in. The third field is a text field which allows you to enter custom text. By exposing these elements in the XML, we allow interaction with the user. If you wanted to add new elements in this XML section, you could. They would be available for you to use in your feature's PHP definition.

Next, let's look at the PHP for this feature:

```php
<?php
/**
 * @version   $Id: totop.php 2487 2012-08-17 22:04:06Z btowles $
 * @author    RocketTheme http://www.rockettheme.com
 * @copyright Copyright (C) 2007 - ${copyright_year} RocketTheme, LLC
 * @license   http://www.gnu.org/licenses/gpl-2.0.html GNU/GPLv2 only
 *
 * Gantry uses the Joomla Framework (http://www.joomla.org), a GNU/GPLv2 content management system
 *
 */

defined('JPATH_BASE') or die();

gantry_import('core.gantryfeature');

/**
 * @package     gantry
 * @subpackage  features
 */
class GantryFeatureToTop extends GantryFeature
{
    var $_feature_name = 'totop';

    function init()
    {
        /** @var $gantry Gantry */
        global $gantry;

        if ($this->get('enabled')) {
            $gantry->addScript('gantry-totop.js');
        }
    }

    function render($position)
    {
        ob_start();
        ?>
    <div class="clear"></div>
    <div class="rt-block">
        <a href="#" id="gantry-totop" rel="nofollow"><?php echo $this->get('text'); ?></a>
    </div>
    <?php
        return ob_get_clean();
    }
}
```

As you can see, the there are two methods implemented in the PHP definition of the feature. The first overrides the default `init()` method. This is used to setup the feature. In this case, we are simply using it to added some JavaScript that will provide the smooth scrolling. The second method that is used is `render()`.

This method actually renders out the link and the custom text field that was defined in the administrator interface. The other methods from the base GantryFeature class are not overridden. That means the standard methods to get the enabled state, position, etc. are being used, and are pulling that data from the XML and admin settings. You can see how custom XML fields like **text** are easily available and are prefixed by the feature name, so you can just use `get->("text")` to retrieve the value of of the chained field.

Have a look through all the [default features](../configure/features.md) that come with Gantry to see how we achieved a wide variety of functionality with these features.
