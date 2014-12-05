---
title: Custom Module Layout
taxonomy:
    category: docs
---

In this section, we will go over creating a custom XHTML layout for modules in a Gantry-enabled template.

Step 1: Preparation
-------------------
Determine the name of your custom module layout.


Step 2: Create/Copy New Layout File
-----------------------------------
The simplest way to do this is to copy an existing layout and modify it after. The files are located under `YOUR_SITE/libraries/gantry/html/layouts/`. However, you do not want to modify the core Gantry files. Instead, copy the new layout file to `YOUR_SITE/templates/YOUR_TEMPLATE/html/layouts`. In this case, use `mod_standard.php`


Step 3: File Structure
----------------------
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

Step 4: Adding Layout to Template
---------------------------------
Open up the template's **index.php** and find the module where we need to use the custom module layout.

Edit the **displayModules** functions 2nd parameter to the name of your custom module layout you created in step 3. As seen in the example below:

```php
<?php echo $gantry->displayModules('top','example','standard'); ?>
```
