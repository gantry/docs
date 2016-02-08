---
title: Custom Module Layout
taxonomy:
    category: docs
    tag: [gantry4]
---

In this section, we will go over creating a custom XHTML layout for modules in a Gantry-enabled template.

>>>>> NOTE: The term **Module** in Joomla and **Widget** in WordPress mean essentially the same thing. They are blocks of data which can be placed throughout your site. For the purpose of simplifying this guide, consider the terms interchangeable, except when used to describe specific file names or functions.

Step 1: Preparation
-------------------

Determine the name of your custom module layout.


Step 2: Create/Copy New Layout File
-----------------------------------

[ui-tabs position="top-left" active="0"]
[ui-tab title="Joomla"]

The simplest way to do this is to copy an existing layout and modify it after. The files are located under `YOUR_SITE/libraries/gantry/html/layouts/`. However, you do not want to modify the core Gantry files. Instead, copy the new layout file to `YOUR_SITE/templates/YOUR_TEMPLATE/html/layouts`. In this case, use `mod_standard.php`.

[/ui-tab]
[ui-tab title="WordPress"]

The simplest way to do this is to copy an existing layout and modify it after. These files are located under `YOUR_SITE/wp-content/plugins/gantry/html/layouts/`, however, you do not want to modify the core Gantry files. Instead, copy the new layout file to `YOUR_SITE/wp-content/themes/YOUR_TEMPLATE/html/layouts`. In this case, use `widget_standard.php`.

[/ui-tab]
[/ui-tabs]

Step 3: File Structure
----------------------

[ui-tabs position="top-left" active="0"]
[ui-tab title="Joomla"]

Each custom module layout requires a function `render()`. This is what will be called by Gantry to display the layout. In this case, since we have copied an existing layout, this will already be provided.

At the top of this module, there are Gantry-specific items which should not be modified. These are:

```php
function render($params = array()){
    /** @var $gantry Gantry */
    global $gantry;

    $rparams = $this->>> _getParams($params);

    $prefixClass = '';

    if ($rparams->prefixCount !=0) {
        $prefixClass = " rt-prefix-".$rparams->prefixCount;
    }
    ob_start();
    // XHTML LAYOUT
    .....
```

After the `ob_start();` is where the layout should be written in XHTML.

After adding your XHTML code block, there must be a return with a call to `ob_get_clean();`. This is required for this function. A full override looks like the following:

```php
class GantryLayoutMod_Standard extends GantryLayout {
    var $render_params = array(
        'contents'      =>>>  null,
        'gridCount'     =>>>  null,
        'prefixCount'   =>>>  0,
        'extraClass'      =>>>  ''
    );
    function render($params = array()){
        /** @var $gantry Gantry */
        global $gantry;

        $rparams = $this->>> _getParams($params);

        $prefixClass = '';

        if ($rparams->prefixCount !=0) {
            $prefixClass = " rt-prefix-".$rparams->prefixCount;
        }
        ob_start();
        // XHTML LAYOUT
?>
<div class="rt-grid-<?php echo $rparams->gridCount.$prefixClass.$rparams->extraClass; ?>">
    <?php echo $rparams->contents;  ?>
</div>
<?php

        return ob_get_clean();
    }
}
```

[/ui-tab]
[ui-tab title="WordPress"]

Each custom widget layout requires a function `render()` this is what will be called by Gantry to display the layout. In this case, since we have copied an existing layout, it will already be provided.

At the top of this widget layout, there are Gantry-specific items which should not be modified. These are:

```php
function render($params = array()) {
    /** @global $gantry Gantry */
    global $gantry;
    $instance_params = $this->_getWidgetInstanceParams($params[0]['widget_id']);
    $chrome_to_use   = (isset($instance_params['widget_chrome']) && !empty($instance_params['widget_chrome'])) ? $instance_params['widget_chrome'] : $params[0]['chrome'];
    $params          = $gantry->renderLayout("chrome_" .$chrome_to_use, $params);

    $params[0]['position_open']  = '';
    $params[0]['position_close'] = '';

    $rparams   = $this->_getParams($params[0]);
    $start_tag = "";

    // see if this is the first widget in the postion
    if (property_exists($rparams, 'start') && $rparams->start == $rparams->widget_id) {
        $prefixClass = '';
        // get the prefix class for the start
        if ($rparams->widget_map[$rparams->position]['prefixCount'] != 0) {
            $prefixClass = " rt-prefix-" . $rparams->widget_map[$rparams->position]['prefixCount'];
        }
        ob_start();
        // XHTML LAYOUT
        .....
```

After the `ob_start();`, the layout should be written in XHTML.

After adding your XHTML code block, there must be a return with a call to `ob_get_clean();`. This is required for this function.

```php
        $start_tag = ob_get_clean();
        $params[0]['position_open'] = $start_tag;
    }

    if (property_exists($rparams,'end') && $rparams->end == $rparams->widget_id) {
         $params[0]['position_close'] = "</div>";
    }

    $params[0]['before_widget'] = $params[0]['position_open'].$params[0]['before_widget'] ;
    $params[0]['after_widget'] = $params[0]['after_widget'] . $params[0]['position_close'];
    
    return $params;
}
```

A full override looks like the following:

```php
class GantryLayoutWidget_Standard extends GantryLayout {
    var $render_params = array(
        'gridCount'   => null,
        'prefixCount' => 0,
        'extraClass'  => ''
    );

    function render($params = array())
    {
        /** @global $gantry Gantry */
        global $gantry;
        $instance_params = $this->_getWidgetInstanceParams($params[0]['widget_id']);
        $chrome_to_use   = (isset($instance_params['widget_chrome']) && !empty($instance_params['widget_chrome'])) ? $instance_params['widget_chrome'] : $params[0]['chrome'];
        $params          = $gantry->renderLayout("chrome_" .$chrome_to_use, $params);

        $params[0]['position_open']  = '';
        $params[0]['position_close'] = '';

        $rparams   = $this->_getParams($params[0]);
        $start_tag = "";

        // see if this is the first widget in the postion
        if (property_exists($rparams, 'start') && $rparams->start == $rparams->widget_id) {
            $prefixClass = '';
            // get the prefix class for the start
            if ($rparams->widget_map[$rparams->position]['prefixCount'] != 0) {
                $prefixClass = " rt-prefix-" . $rparams->widget_map[$rparams->position]['prefixCount'];
            }
            ob_start();
            ?>
        <div class="rt-grid-<?php echo $rparams->widget_map[$rparams->position]['paramsSchema'] . $prefixClass . $rparams->widget_map[$rparams->position]['extraClass']; ?>">
            <?php
            $start_tag                  = ob_get_clean();
            $params[0]['position_open'] = $start_tag;
        }

        if (property_exists($rparams, 'end') && $rparams->end == $rparams->widget_id) {
            $params[0]['position_close'] = "</div>";
        }

        $params[0]['before_widget'] = $params[0]['position_open'] . $params[0]['before_widget'];
        $params[0]['after_widget']  = $params[0]['after_widget'] . $params[0]['position_close'];

        return $params;
    }
}
```

[/ui-tab]
[/ui-tabs]

Step 4: Adding Layout to Template
---------------------------------
Open up the template's **index.php** and find the module where we need to use the custom module layout.

Edit the **displayModules** functions second parameter to the name of your custom module layout you created in step 3. 

Example:

```php
<?php echo $gantry->displayModules('top','example','standard'); ?>
```
