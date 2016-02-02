---
title: Custom Module Chrome
taxonomy:
    category: docs
    tag: [gantry4]
---

This section covers the creation of a Chrome custom module layout, and how to link it into your Gantry enabled template.

>>>>> NOTE: The term **Module** in Joomla and **Widget** in WordPress mean essentially the same thing. They are blocks of data which can be placed throughout your site. For the purpose of simplifying this guide, consider the terms interchangeable, except when used to describe specific file names or functions.

Step 1: Planning
----------------

Determine the name of your custom module position. In this case, we will be using "example" as the custom Chrome module name.

Step 2: Editing html/modules.php
--------------------------------

[ui-tabs position="top-left" active="0" theme="lite"]
[ui-tab title="Joomla"]

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

[/ui-tab]
[ui-tab title="WordPress"]

The files are located under `YOUR_SITE/wp-content/plugins/gantry/html/layouts/`, however, you do not want to modify the core Gantry files. Instead, copy the new Chrome file to `YOUR_SITE/wp-content/themes/YOUR_TEMPLATE/html/layouts`. In this case, use `chrome_example.php`. Each custom chrome layout requires a `function render()`. This is what will be called by Gantry to display the widget. Since we have copied an existing Chrome, this will already be provided.

Example:

```php
function render($params = array()) {
    global $gantry, $wp_registered_widgets;
    $rparams         = $this->_getParams($params[0]);
    $instance_params = $this->_getWidgetInstanceParams($params[0]['widget_id']);

    $id        = $params[0]['widget_id'];
    $classname = $wp_registered_widgets[$params[0]['widget_id']]['classname'];

    // gantry render params
    $params[0]['pre_widget']   = '';
    $params[0]['widget_open']  = '';
    $params[0]['title_open']   = '';
    $params[0]['title_close']  = '';
    $params[0]['widget_close'] = '';
    $params[0]['post_widget']  = '';
    $params[0]['pre_render']   = '';
    $params[0]['post_render']  = '';

    // normal wp widget params
    $params[0]['before_widget'] = '';
    $params[0]['before_title']  = '';
    $params[0]['after_title']   = '';
    $params[0]['after_widget']  = '';

    if (array_key_exists('custom-variations', $instance_params) && $instance_params['custom-variations'] != '') {
        $params[0]['pre_widget']  = '<div class="' . $instance_params['custom-variations'] . '">';
        $params[0]['post_widget'] = '</div>';
    }

    $params[0]['widget_open']  = sprintf('<div id="%1$s" class="widget %2$s rt-block">', $id, $classname);
    $params[0]['widget_close'] = '</div>';

    $params[0]['title_open']  = '<div class="module-title"><h2 class="title">';
    $params[0]['title_close'] = '</h2></div>';

    if (isset($instance_params['title']) && $instance_params['title'] != '') :
        $params[0]['before_widget'] = $params[0]['pre_widget'] . $params[0]['widget_open'];
        $params[0]['before_title']  = $params[0]['title_open'];
        $params[0]['after_title']   = $params[0]['title_close'] . $params[0]['pre_render'];
        $params[0]['after_widget']  = $params[0]['post_render'] . $params[0]['widget_close'] . $params[0]['post_widget']; else :
        $params[0]['before_widget'] = $params[0]['pre_widget'] . $params[0]['widget_open'] . $params[0]['pre_render'];
        $params[0]['before_title']  = $params[0]['title_open'];
        $params[0]['after_title']   = $params[0]['title_close'];
        $params[0]['after_widget']  = $params[0]['post_render'] . $params[0]['widget_close'] . $params[0]['post_widget'];
    endif;

    return $params;
}
```

A full widget chrome looks like the following: 

```php
class GantryLayoutChrome_Standard extends GantryLayout {
    var $render_params = array(
        'gridCount'   => null,
        'prefixCount' => 0,
        'extraClass'  => ''
    );

    function render($params = array()) {
        global $gantry, $wp_registered_widgets;
        $rparams         = $this->_getParams($params[0]);
        $instance_params = $this->_getWidgetInstanceParams($params[0]['widget_id']);

        $id        = $params[0]['widget_id'];
        $classname = $wp_registered_widgets[$params[0]['widget_id']]['classname'];

        // gantry render params
        $params[0]['pre_widget']   = '';
        $params[0]['widget_open']  = '';
        $params[0]['title_open']   = '';
        $params[0]['title_close']  = '';
        $params[0]['widget_close'] = '';
        $params[0]['post_widget']  = '';
        $params[0]['pre_render']   = '';
        $params[0]['post_render']  = '';

        // normal wp widget params
        $params[0]['before_widget'] = '';
        $params[0]['before_title']  = '';
        $params[0]['after_title']   = '';
        $params[0]['after_widget']  = '';

        if (array_key_exists('custom-variations', $instance_params) && $instance_params['custom-variations'] != '') {
            $params[0]['pre_widget']  = '<div class="' . $instance_params['custom-variations'] . '">';
            $params[0]['post_widget'] = '</div>';
        }

        $params[0]['widget_open']  = sprintf('<div id="%1$s" class="widget %2$s rt-block">', $id, $classname);
        $params[0]['widget_close'] = '</div>';

        $params[0]['title_open']  = '<div class="module-title"><h2 class="title">';
        $params[0]['title_close'] = '</h2></div>';

        if (isset($instance_params['title']) && $instance_params['title'] != '') :
            $params[0]['before_widget'] = $params[0]['pre_widget'] . $params[0]['widget_open'];
            $params[0]['before_title']  = $params[0]['title_open'];
            $params[0]['after_title']   = $params[0]['title_close'] . $params[0]['pre_render'];
            $params[0]['after_widget']  = $params[0]['post_render'] . $params[0]['widget_close'] . $params[0]['post_widget']; else :
            $params[0]['before_widget'] = $params[0]['pre_widget'] . $params[0]['widget_open'] . $params[0]['pre_render'];
            $params[0]['before_title']  = $params[0]['title_open'];
            $params[0]['after_title']   = $params[0]['title_close'];
            $params[0]['after_widget']  = $params[0]['post_render'] . $params[0]['widget_close'] . $params[0]['post_widget'];
        endif;

        return $params;
    }
}
```

Upon saving this custom widget, Chrome will be available to use in Gantry.

[/ui-tab]
[/ui-tabs]

Step 3: Adding Custom Module to Gantry
--------------------------------------

Open up the template's **index.php** file and find the Gantry row module position (widget position for WordPress) you wish to apply your custom module layout to. In the third function parameter, add the name you gave to your Chrome module after the `_`. In the case of this example, we'll use "example." See more below:

```php
<?php echo $gantry->displayModules('top','standard','example'); ?>
```

If you wish to apply this to the main body sidebars, the layout will look like the following:

```php
<?php echo $gantry->displayMainbody('mainbody','sidebar', sidebarchromelayout, contenttoplayoutname, contenttopchromename, contentbottomlayoutname, contentbottomchromename); ?>
```

Any module placed in this position will now use this display format.
