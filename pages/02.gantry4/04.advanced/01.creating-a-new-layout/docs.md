---
title: Creating New Layout
taxonomy:
    category: docs
    tag: [gantry4]
---

[ui-tabs position="top-left" active="0"]
[ui-tab title="Joomla"]

Layouts are blocks of code that control the HTML structure of a particular section of the template rendering. By default, Gantry comes with several built-in layout files. These are located in the `libraries/gantry/html/layouts/` folder.

Here is a list of included layout files:

|           Layouts           |                                               Description                                               |
| :-------------------------- | :------------------------------------------------------------------------------------------------------ |
| body_debugmainbody.php      | Used for debugging mainbody layout configurations                                                       |
| ~~body_iphonemainbody.php~~ | **Deprecated** - Used for iPhone mainbody layout configurations                                         |
| body_mainbody.php           | The default mainbody layout. This is the layout that controls the mainbody in relation to the sidebars. |
| doc_body.php                | Used to render the body tag, used in `displayBodyTag()`                                                 |
| doc_tag.php                 | Used in the generic rendering of a tag output by the `displayClassesByTag()` method                     |
| feature_basic.php           | Used for generic outputting of feature contents                                                         |
| mod_basic.php               | A basic layout for modules                                                                              |
| mod_sidebar.php             | Layout used for sidebars                                                                                |
| mod_standard.php            | The stanndard layout for modules.                                                                       |
| orderedbody_mainbody.php    | Renders mainbody and sidebars in order for use with CSS tables                                          |

[/ui-tab]
[ui-tab title="WordPress"]

Layouts are blocks of code that control the HTML structure of a particular section of the template rendering. By default, Gantry comes with several built-in layout files located in the `wp-content/plugins/gantry/html/layouts/` folder:

|           Layouts           |                                              Description                                               |
| :-------------------------- | :----------------------------------------------------------------------------------------------------- |
| ~~body_iphonemainbody.php~~ | **Deprecated** - Used for iPhone mainbody layout configurations                                        |
| body_mainbody.php           | the default mainbody layout. This is the layout that controls the mainbody in relation to the sidebars |
| doc_body.php                | a layout to render the body tag, used in `displayBodyTag()`                                            |
| doc_tag.php                 | a layout used in the generic rendering of a tag output by the `displayClassesByTag()` method           |
| widget_basic.php            | a basic layout for modules                                                                             |
| widget_sidebar.php          | the layout for the sidebars                                                                            |
| widget_standard.php         | the standard layout for modules                                                                        |
| orderedbody_mainbody.php    | renders mainbody and sidebars in order for use with CSS tables                                         |

[/ui-tab]
[/ui-tabs]


Step 1: Purpose
---------------

The default layouts that ship with the **Gantry framework** are designed to be flexible enough to handle the needs of 99% of all possible implementations. However, there are occasions when the default HTML structure does not contain all of the block elements or class names required to realize a particular design.

In these rare cases, you can utilize the power of the Gantry framework to override the default layout with your own template-provided layout. Also, certain layouts, such as the ones used with modules, are flexible enough to support your own custom layouts, and you can call them in the same way the default ones are called.


Step 2: Create/Copy New Layout Files
------------------------------------

[ui-tabs position="top-left" active="0"]
[ui-tab title="Joomla"]

The simplist way to do this is to copy an existing layout. In this example, we'll copy the **body_mainbody.php** layout and modify it. These files are located here:

`[YOUR_SITE]/libraries/gantry/html/layouts/`

However, you do not want to modify the core Gantry files. Instead, copy the new layout file to:

`[YOUR_SITE]/templates/YOUR_TEMPLATE/html/layouts/`

You may have to create the `layouts/` folder, if it does not already exist

In this case, copy the `body_mainbody.php` from the core layouts location to the template layouts location.

[/ui-tab]
[ui-tab title="WordPress"]

The simplest way to do this is to copy an existing layout. In this example, we'll copy the **body_mainbody.php** layout and modify it after. The files are located under: 

`[YOUR_SITE]/wp-content/plugins/gantry/html/layouts/`

However, you do not want to modify the core Gantry files. Instead, copy the new layout file to:

`[YOUR_SITE]/wp-content/themes/YOUR_TEMPLATE/html/layouts/`

You may have to create a `layouts/` folder if one does not already exist.

In this case, copy `body_mainbody.php` from the core layouts location into the template layouts location.

[/ui-tab]
[/ui-tabs]

Step 3: File Structure
----------------------

After you have copied the `body_mainbody.php` file, you can open it up and edit it to suit your needs. By default, it looks like this:

[ui-tabs position="top-left" active="0"]
[ui-tab title="Joomla"]

```php
<?php
/**
 * @version   $Id: body_mainbody.php 2381 2012-08-15 04:14:26Z btowles $
 * @author    RocketTheme http://www.rockettheme.com
 * @copyright Copyright (C) 2007 - ${copyright_year} RocketTheme, LLC
 * @license   http://www.gnu.org/licenses/gpl-2.0.html GNU/GPLv2 only
 *
 * Gantry uses the Joomla Framework (http://www.joomla.org), a GNU/GPLv2 content management system
 *
 */
defined('GANTRY_VERSION') or die();

gantry_import('core.gantrylayout');

/**
 *
 * @package    gantry
 * @subpackage html.layouts
 */
class GantryLayoutBody_MainBody extends GantryLayout {
    var $render_params = array(
        'schema'        =>  null,
        'pushPull'      =>  null,
        'classKey'      =>  null,
        'sidebars'      =>  '',
        'contentTop'    =>  null,
        'contentBottom' =>  null
    );
    function render($params = array()){
        /** @var $gantry Gantry */
        global $gantry;

        $fparams = $this->_getParams($params);

        // logic to determine if the component should be displayed
        $display_component = !($gantry->get("component-enabled",true) == false && JRequest::getVar('view') == 'featured');
        ob_start();
// XHTML LAYOUT
?>          <div id="rt-main" class="<?php echo $fparams->classKey; ?>">
                <div class="rt-container">
                    <div class="rt-grid-<?php echo $fparams->schema['mb']; ?> <?php echo $fparams->pushPull[0]; ?>">
                        <?php if (isset($fparams->contentTop)) : ?>
                        <div id="rt-content-top">
                            <?php echo $fparams->contentTop; ?>
                        </div>
                        <?php endif; ?>
                        <?php if ($display_component) : ?>
                        <div class="rt-block">
                            <div id="rt-mainbody">
                                <div class="component-content">
                                    <jdoc:include type="component" />
                                </div>
                            </div>
                        </div>
                        <?php endif; ?>
                        <?php if (isset($fparams->contentBottom)) : ?>
                        <div id="rt-content-bottom">
                            <?php echo $fparams->contentBottom; ?>
                        </div>
                        <?php endif; ?>
                    </div>
                    <?php echo $fparams->sidebars; ?>
                    <div class="clear"></div>
                </div>
            </div>
<?php
        return ob_get_clean();
    }
}
```

[/ui-tab]
[ui-tab title="WordPress"]

```php
<?php
/**
 * @version   $Id: body_mainbody.php 59361 2013-03-13 23:10:27Z btowles $
 * @author    RocketTheme http://www.rockettheme.com
 * @copyright Copyright (C) 2007 - ${copyright_year} RocketTheme, LLC
 * @license   http://www.gnu.org/licenses/gpl-2.0.html GNU/GPLv2 only
 *
 */
defined('GANTRY_VERSION') or die();

gantry_import('core.gantrybodylayout');

/**
 *
 * @package    gantry
 * @subpackage html.layouts
 */
class GantryLayoutBody_MainBody extends GantryBodyLayout
{
    var $render_params = array(
        'schema'            => null,
        'pushPull'          => null,
        'classKey'          => null,
        'sidebars'          => '',
        'contentTop'        => null,
        'contentBottom'     => null,
        'component_content' => ''
    );

    function render($params = array())
    {
        /** @global $gantry Gantry */
        global $gantry;

        $fparams = $this->_getParams($params);

        // logic to determine if the component should be displayed
        $display_mainbody = !($gantry->get("mainbody-enabled", true) == false);
        $display_component = !($gantry->get("component-enabled", true) == false);
        ob_start();
        // XHTML LAYOUT
        ?>
        <?php if ($display_mainbody) : ?>
        <div id="rt-main" class="<?php echo $fparams->classKey; ?>">
            <div class="rt-container">
                <div class="rt-grid-<?php echo $fparams->schema['mb']; ?> <?php echo $fparams->pushPull[0]; ?>">

                    <?php if (isset($fparams->contentTop)) : ?>
                    <div id="rt-content-top">
                        <?php echo $fparams->contentTop; ?>
                    </div>
                    <?php endif; ?>

                    <?php if ($display_component) : ?>
                    <div class="rt-block">
                        <div id="rt-mainbody">
                            <div class="component-content">
                                <?php
                                if ('' == $fparams->component_content) {
                                    $this->include_type();
                                } else {
                                    echo $fparams->component_content;
                                }
                                ?>
                            </div>
                        </div>
                    </div>
                    <?php endif; ?>

                    <?php if (isset($fparams->contentBottom)) : ?>
                    <div id="rt-content-bottom">
                        <?php echo $fparams->contentBottom; ?>
                    </div>
                    <?php endif; ?>

                </div>
                <?php echo $fparams->sidebars; ?>
                <div class="clear"></div>
            </div>
        </div>
        <?php endif; ?>
        <?php
        return ob_get_clean();
    }
}
```

[/ui-tab]
[/ui-tabs]

Feel free to edit this file to suit your needs.
