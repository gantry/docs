---
title: Creating an Unsupported Page
taxonomy:
    category: docs
    tag: [gantry4]
gravui:
    enabled: true
    tabs: true
process:
    twig: true
---

This tutorial will take you through the steps needed to create an unsupported browser page as used here on **gantry-framework.org**. You can see what this looks like by pointing your browser to: <http://www.gantry-framework.org/?tmpl=unsupported>. Users of unsupported browsers (IE6 and IE7) are automatically taken to this page whenever they try to access a page on [gantry-framework.org](http://gantry-framework.org).

![](unsupported-browser.jpg)  {.border .shadow}


Step 1: Unsupported Browser Redirect Feature
--------------------------------------------

[ui-tabs position="top-left" active="0" theme="lite"]
[ui-tab title="Joomla"]

The logic for this unsupported browser page is powered by a custom feature that we've called **unsupportedredirect.php**, in this instance. This is a custom feature that we create and drop into the template's `features/` folder. The code is very simple as you can see below:

```php
<?php
/**
 * @package     gantry
 * @subpackage  features
 * @version     ${project.version} ${build_date}
 * @author      RocketTheme http://www.rockettheme.com
 * @copyright   Copyright (C) 2007 - ${copyright_year} RocketTheme, LLC
 * @license     http://www.gnu.org/licenses/gpl-2.0.html GNU/GPLv2 only
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
class GantryFeatureUnsupportedRedirect extends GantryFeature {
    var $_feature_name = 'unsupportedredirect';

    function isEnabled() {
        return true;
    }
    function isInPosition($position) {
        return false;
    }
    function isOrderable(){
        return true;
    }

    function init() {
        global $gantry;

        if (JRequest::getString('tmpl')!='unsupported' && $gantry->browser->name == 'ie' && ($gantry->browser->shortversion == '6' || $gantry->browser->shortversion == '7')) {
            header("Location: ".$gantry->baseUrl."?tmpl=unsupported");
        }
    }
}
```

The feature is actually very simple, but let's break it down into parts so you can get a feel for how it works:


#### isEnabled()

The `isEnabled()` method is set to true because we are effectively forcing this feature to be enabled. We don't need any user interaction to toggle this functionality, though that could easily be added by inserting a simple bit of XML in the **templateDetails.xml** if needed.


#### isInPosition()

The `isInPosition()` method is set to false because this feature is not intended to be treated like a module and placed in a module position. It's really logic that just needs to run without any rendering output.


#### isOrderable()

As you can see, `isOrderable()` is set to true. This is so this feature will show up in the **Advanced** section of the template details in the **Feature Order** list. You probably want to drag the **ie6redirect** feature to the top of the list to ensure that it runs first, and doesn't waste time processing other features if your going to be redirected anyway.


#### init()

This is where the logic actually happens. This feature does not need to display anything, so the `render()` method is not implemented. The `init()` method is the better place for any non-rendering functionality and as you can see here, there is just a simple `if` statement to ensure that we are not already on the unsupported page, the viewing browser is `ie`, and the short version is `6` or `7`. This ensure that only IE6 and IE7 browsers will enter the `if` statement, and redirect the browser to the **?tmpl=unsupported**.

[/ui-tab]
[ui-tab title="WordPress"]

The logic for this unsupported browser page is powered by a custom gizmo that we'll call **unsupportedredirect.php**. This is a custom gizmo that we will create and drop into the template's `gizmos/` folder. The code is very simple, as you can see below:

```php
<?php
/**
 * @version   ${project.version} ${build_date}
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
class GantryGizmoUnsupportedRedirect extends GantryGizmo {

    var $_name = 'unsupportedredirect';

    function isEnabled() {
        return true;
    }

    function init() {
        
        global $gantry;
        
        $request = basename($_SERVER['REQUEST_URI']);
        
        if ($request != 'unsupported.php' && $gantry->browser->name == 'ie' && ($gantry->browser->shortversion == '6' || $gantry->browser->shortversion == '7')) { 
            add_filter('template_include', array(&$this, 'unsupported_redirect'));     
        }

    }
    
    static function unsupported_redirect($template) {
        return locate_template(array('unsupported.php'));
    }
    
}
```

This feature is fairly straightforward, but we'll break it down into parts so you can see how it works.

#### isEnabled()

The `isEnabled()` method is set to true because we are effectively forcing this gizmo to be enabled. We don't need any user interaction to toggle this functionality, though that could easily be added by adding a simple bit of XML in the **templateDetails.xml** if needed.


#### init()

This is where the logic actually happens. The `init()` method is the better place for any non-rendering functionality. As you can see here, a simple `if` statement ensures that we are not already on the unsupported page, the viewing browser is `ie`, and the short version is `6` or `7`. This ensures that only IE6 and IE7 browsers will enter the `if` statement and load the **unsupported.php** page.

[/ui-tab]
[/ui-tabs]

Step 2: Unsupported tmpl file
-----------------------------

[ui-tabs position="top-left" active="0" theme="lite"]
[ui-tab title="Joomla"]

As you saw at the end of Step 1, we've redirected IE6 users to **?tmpl=unsupported**, but what does this mean? We are going to take advantage of a little-known feature in Joomla that allows you to change the 'index' file used when rendering a page. By default, Joomla looks for **index.php** inside your template folder, however if you pass another name in via the 'tmpl' request variable (**?tmpl=unsupported** as an example), Joomla will look for a file called **unsupported.php** and use this rather than **index.php** to render the page.

The **unsupported.php** is basically a stripped down version of our existing **index.php** file as you can see below:

```php
<?php
/**
* @version   $Id: index.php 2670 2012-08-23 17:38:47Z djamil $
 * @author RocketTheme http://www.rockettheme.com
 * @copyright Copyright (C) 2007 - ${copyright_year} RocketTheme, LLC
 * @license http://www.gnu.org/licenses/gpl-2.0.html GNU/GPLv2 only
 *
 * Gantry uses the Joomla Framework (http://www.joomla.org), a GNU/GPLv2 content management system
 *
 */
// no direct access
defined( '_JEXEC' ) or die( 'Restricted index access' );

// load and inititialize gantry class
require_once('lib/gantry/gantry.php');
$gantry->init();

?>
<!doctype html>
<html xml:lang="<?php echo $gantry->language; ?>" lang="<?php echo $gantry->language;?>" >
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php
        $gantry->displayHead();
        $gantry->addLess('global.less', 'master.css');
    ?>
</head>
<div id="body-wrapper">
    <div id="rt-showcase">
        <div class="rt-showcase-pattern">
            <div class="rt-showcase-pattern-2">
                <div class="rt-container">
                    <div class="rt-grid-12 rt-alpha rt-omega">
                        <div class="rt-block main-showcase-logo">
                            <div class="module-surround">
                                <div class="module-content">
                                    <div class="custom main-showcase-logo">
                                        <div class="showcase-image">
                                            <img src="/gantry/g-f/images/gantry_site/showcase-logo.png" alt="">
                                        </div>
                                        <div class="showcase-content">
                                            <h1>
                                                <span class="gantry-logo">Gantry</span> <small>Web Platform Theme Framework</small>
                                            </h1>
                                            <h1>
                                                <b>Unsupported Browser</b>
                                            </h1>
                                            <p>
                                                You are using a browser that is not supported by this website. That probably means your browser is woefully out of date, insecure, and just generally lacking in standards. Luckily for you there are literally 10s of modern, standards compatible browsers available to you at no cost. All you need to do is simply take the time to install one.
                                            </p>
                                            <p>
                                                We suggest installing the latest version of <a href="http://www.mozilla.com/en-US/firefox/firefox.html">Firefox</a>, <a href="http://www.google.com/chrome">Google Chrome</a>, <a href="http://www.apple.com/safari/download/">Safari</a>, heck, even <a href="http://www.opera.com/">Opera</a> would be a better option.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="clear"></div>
            </div>
        </div>
    </div>
</div>
</html>
<?php
$gantry->finalize();
?>
```

Basically, we've removed all the extraneous module calls and left the page in a basic hard-coded state. You could keep some of the module positions if needed, but we opted for the simple approach and kept the output as basic as possible -- while still offering the feel of the regular gantry-framework.org site.

[/ui-tab]
[ui-tab title="WordPress"]

As you saw at the end of Step 1, we've redirected IE6 and IE7 users to **unsupported.php**, but what does this mean? We are going to filter out the **template_include** WordPress filter and load our own file when browser conditions are met. By default, WordPress looks for **index.php** inside your template folder, however, if we are going to use the mentioned previously filter, we can override this behavior. This forces WordPress to load different php file.

The **unsupported.php** is basically a stripped down version of our existing index.php file as you can see below:

```php
<?php
/**
 * @version   ${project.version} ${build_date}
 * @author    RocketTheme http://www.rockettheme.com
 * @copyright Copyright (C) 2007 - ${copyright_year} RocketTheme, LLC
 * @license   http://www.gnu.org/licenses/gpl-2.0.html GNU/GPLv2 only
 */
// no direct access
defined('ABSPATH') or die('Restricted access');
?>
<!doctype html>
<html xml:lang="<?php echo $gantry->language; ?>" lang="<?php echo $gantry->language;?>" >
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <?php
            $gantry->displayHead();
            $gantry->addLess('global.less', 'master.css');
        ?>
    </head>
    <body>
        <div id="body-wrapper">
            <div id="rt-showcase">
                <div class="rt-showcase-pattern">
                    <div class="rt-showcase-pattern-2">
                        <div class="rt-container">
                            <div class="rt-grid-12 rt-alpha rt-omega">
                                <div class="rt-block main-showcase-logo">
                                    <div class="module-surround">
                                        <div class="module-content">
                                            <div class="custom main-showcase-logo">
                                                <div class="showcase-image">
                                                    <img src="/gantry/g-f/images/gantry_site/showcase-logo.png" alt="">
                                                </div>
                                                <div class="showcase-content">
                                                    <h1>
                                                        <span class="gantry-logo">Gantry</span> <small>Web Platform Theme Framework</small>
                                                    </h1>
                                                    <h1>
                                                        <b>Unsupported Browser</b>
                                                    </h1>
                                                    <p>
                                                        You are using a browser that is not supported by this website. That probably means your browser is woefully out of date, insecure, and just generally lacking in standards. Luckily for you there are literally 10s of modern, standards compatible browsers available to you at no cost. All you need to do is simply take the time to install one.
                                                    </p>
                                                    <p>
                                                        We suggest installing the latest version of <a href="http://www.mozilla.com/en-US/firefox/firefox.html">Firefox</a>, <a href="http://www.google.com/chrome">Google Chrome</a>, <a href="http://www.apple.com/safari/download/">Safari</a>, heck, even <a href="http://www.opera.com/">Opera</a> would be a better option.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="clear"></div>
                    </div>
                </div>
            </div>
        </div>
        <?php $gantry->displayFooter(); ?>
    </body>
</html>
<?php
$gantry->finalize();
?>
```

Basically, we've removed all the extraneous widget calls and left the page in a basic hard-coded state. You could, of course, keep some of the widget positions (if needed), but we opted for the simple approach and kept the output as basic as possible. This is done while still offering the feel of the regular <http://gantry-framework.org> site.

[/ui-tab]
[/ui-tabs]

Step 3: Tweaking and Testing
----------------------------

[ui-tabs position="top-left" active="0" theme="lite"]
[ui-tab title="Joomla"]

At this point, you should have a fully-functional feature. To test it out in your regular browser, you can just point it to **http://YOUR_SITE/?tmpl=unsupported**, and it should show you the new page based on the **unsupported.php** file you created. You should tweak and optimize this output to suit your needs. We kept ours pretty similar to our regular page, and even included our regular **template.css** and **joomla.css** files. We also added a new **unsupported.css** file that has some styling which is only needed on this page. You can see these in the `addStyles()` method in the **unsupported.php** file listed above.

After you are pretty happy with the way this looks, you'll want to test and fix it so it looks correct in IE6 an IE7. You should be able to point your IE6 or IE7 browser directly at your site: **http://YOUR_SITE**, and it should redirect you automatically to the unsupported page you have been working on. Just tweak and adjust your CSS as needed to ensure that things look correct in IE6, as this is the only browser that really sees the page.

[/ui-tab]
[ui-tab title="WordPress"]

At this point, you should have a full, functional gizmo. You should be able to tweak and optimize this output to suit your individual needs. We kept ours pretty similar to our regular page, but also included our regular **template.css** and **wordpress.css** files, as well as a new **unsupported.css** file which has some styling that is only needed on this particular page. You can see these in the `addStyles()` method in the **unsupported.php** file, listed above.

After you are pretty happy with the way this looks, the final step is to test it against IE6 an IE7. 

You should be able to point your IE6 or IE7 browser directly at your site: **http://YOUR_SITE**, and it should redirect you automatically to the unsupported page. Just tweak and adjust your CSS as needed to ensure that things look correct in IE6, as this is the only browser that really sees it.

[/ui-tab]
[/ui-tabs]

That's it! Pretty easy, right?
