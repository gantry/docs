---
title: Creating a Popup Login Widget (WordPress)
taxonomy:
    category: docs
    tag: [gantry4]
gravui:
    enabled: true
    tabs: true
process:
    twig: true
---

This tutorial details how to create a custom widget that will utilize RokBox to present a modal popup box triggered by a link/button on the frontend. For this tutorial, we will be making a login widget popup.

![](popup-login.jpg)  {.border .shadow}

>>>>> The login popup functionality requires that the [RokBox Plugin](http://www.rockettheme.com/wordpress/plugins/rokbox) be installed on your site. Before beginning, please ensure that you have downloaded and installed the [latest version of RokBox](http://www.rockettheme.com/wordpress/plugins/rokbox).


Step 1: Creating the Custom Widget
----------------------------------
The login form used in our site will be contained in a new file named `loginform.php`. This is a custom widget created for this example and dropped into the theme's `widgets/` directory. Create this new php file with the following code: 

```php
<?php
/**
 * @version   ${project.version} ${build_date}
 * @author    RocketTheme http://www.rockettheme.com
 * @copyright Copyright (C) 2007 - ${copyright_year} RocketTheme, LLC
 * @license   http://www.gnu.org/licenses/gpl-2.0.html GNU/GPLv2 only
 */
 
defined('GANTRY_VERSION') or die();

gantry_import('core.gantrywidget');

add_action('widgets_init', array("GantryWidgetLoginForm","init"));

class GantryWidgetLoginForm extends GantryWidget {
    var $short_name = 'loginform';
    var $wp_name = 'gantry_loginform';
    var $long_name = 'Gantry Login Form';
    var $description = 'Gantry Login Form Widget';
    var $css_classname = 'widget_gantry_loginform';
    var $width = 200;
    var $height = 400;

    function init() {
        register_widget("GantryWidgetLoginForm");
    }
    
    function render_title($args, $instance) {
        global $gantry;
        if($instance['title'] != '') :
            echo $instance['title'];
        endif;
    }

    function render($args, $instance){
        global $gantry, $current_user;
        ob_start();
        ?>
        
        <?php if(!is_user_logged_in()) : ?>
        
            <form action="<?php echo wp_login_url($_SERVER['REQUEST_URI']); ?>" method="post" id="login-form">
                <?php if ($instance['pretext'] != ''): ?>
                <div class="pretext">
                    <p><?php echo $instance['pretext']; ?></p>
                </div>
                <?php endif; ?>
                <fieldset class="userdata">
                    <p id="form-login-username">
                        <label for="modlgn-username"><?php _re('User Name'); ?></label>
                        <input id="modlgn-username" type="text" name="log" class="inputbox" alt="username" size="18" value="" />
                    </p>
                    <p id="form-login-password">
                        <label for="modlgn-passwd"><?php _re('Password'); ?></label>
                        <input id="modlgn-passwd" type="password" name="pwd" class="inputbox" size="18" alt="password" value="" />
                    </p>
                    <p id="form-login-remember">
                        <label for="modlgn-remember"><?php _re('Remember Me'); ?></label>
                        <input id="modlgn-remember" type="checkbox" name="rememberme" class="inputbox" />
                    </p>
                    <input type="submit" value="<?php _re('Log in'); ?>" class="button" name="submit" />
                </fieldset>             
                <ul>
                    <li>
                        <a href="<?php echo wp_lostpassword_url(); ?>"><?php _re('Forgot your password?'); ?></a>
                    </li>
                    <?php if(get_option('users_can_register')) : ?>
                    <li>
                        <a href="<?php echo site_url('/wp-login.php?action=register&redirect_to=' . get_permalink()); ?>"><?php _re('Register'); ?></a>
                    </li>
                    <?php endif; ?>
                </ul>
                <?php if ($instance['posttext'] != ''): ?>
                <div class="posttext">
                    <p><?php echo $instance['posttext']; ?></p>
                </div>
                <?php endif; ?>             
            </form>
            
        <?php else : ?>
        
            <form action="<?php echo wp_logout_url($_SERVER['REQUEST_URI']); ?>" method="post" id="login-form">
                <div class="login-greeting">
                    <p><?php echo $instance['user_greeting']; ?> <?php echo $current_user->display_name; ?></p>
                </div>
                <div class="logout-button">
                    <input type="submit" name="Submit" class="button" value="<?php _re('Log out'); ?>" />
                </div>
            </form>
        
        <?php endif; ?>
        
        <?php 
        
        echo ob_get_clean();
    
    }
}
```

The xml definition file is also a critical component. Create the new file `loginform.xml` with following code:

```xml
<?xml version="1.0" encoding="utf-8"?>
<!-- $Id: style.xml 16565 2010-04-28 12:21:27Z ian $ -->
<form>
    <fieldset name="widget">
        <field name="title" type="text" label="Title" description="Title" default="Login Form" class="widefat" readonly="false"/>
        <field name="user_greeting" type="text" label="User Greeting" description="Text to be displayed as an user greeting" default="Hi," class="widefat" readonly="false"/>
        <field name="pretext" type="text" label="Pre-text" description="Text to be displayed before the login form" default="" class="widefat" readonly="false"/>
        <field name="posttext" type="text" label="Post-text" description="Text to be displayed after the login form" default="" class="widefat" readonly="false"/>
    </fieldset>
</form>
```

When this widget is placed in a position, it will render the login form we want to appear in the popup.


Step 2: Creating Login Button Widget
------------------------------------

The link/button that triggers the popup widget will be contained in a new file that named `loginbutton.php`. This is a custom widget created for this example and dropped into the theme's `widgets/` directory. Create this new php file with the following code:

```php
<?php
/**
 * @version   ${project.version} ${build_date}
 * @author    RocketTheme http://www.rockettheme.com
 * @copyright Copyright (C) 2007 - ${copyright_year} RocketTheme, LLC
 * @license   http://www.gnu.org/licenses/gpl-2.0.html GNU/GPLv2 only
 */
 
defined('GANTRY_VERSION') or die();

gantry_import('core.gantrywidget');

add_action('widgets_init', array("GantryWidgetLoginButton","init"));

class GantryWidgetLoginButton extends GantryWidget {
    var $short_name = 'loginbutton';
    var $wp_name = 'gantry_loginbutton';
    var $long_name = 'Gantry Login Button';
    var $description = 'Gantry Login Button Widget';
    var $css_classname = 'widget_gantry_loginbutton';
    var $width = 200;
    var $height = 400;

    function init() {
        register_widget("GantryWidgetLoginButton");
    }
    
    function render_widget_open($args, $instance) {
    }
    
    function render_widget_close($args, $instance) {
    }
    
    function pre_render($args, $instance) {
    }
    
    function post_render($args, $instance) {
    }
    
    function render_title($args, $instance) {
        global $gantry;
        if($instance['title'] != '') :
            echo $instance['title'];
        endif;
    }

    function render($args, $instance){
        global $gantry, $current_user;
        ob_start();
        ?>
        
        <div id="<?php echo $this->id; ?>" class="widget <?php echo $this->css_classname; ?> rt-block">
            <div class="rt-popupmodule-button">
            <?php if(!is_user_logged_in()) : ?>
                <a href="#" class="buttontext button" rel="rokbox[355 385][module=rt-popuplogin]">
                    <span class="desc"><?php echo $instance['logintext']; ?></span>
                </a>
            <?php else : ?>
                <a href="<?php echo wp_logout_url($_SERVER['REQUEST_URI']); ?>" class="buttontext button">
                    <span class="desc"><?php echo $instance['logouttext']; ?> <?php echo $current_user->display_name; ?></span>
                </a>
            <?php endif; ?>
            </div>
        </div>
        
        <?php 
        
        echo ob_get_clean();
    
    }
}
```

This code consists mostly of a standard set of divs to provide styling potential. There are also some key RokBox syntax items, as well as the reference for some dynamic text that we will breakdown in more detail below:


RokBox Syntax
-------------

```html
<a href="#" class="buttontext button" rel="rokbox[355 385][module=rt-popuplogin]">
```

The actual link makes use of the RokBox link syntax for calling a login form widget into the popup. Using the `rel=` tag we are declaring the size (width height) of our intended popup. ex: `rokbox[355 385]`. You can adjust these width and height values to match the content you plan to have in your popup.

Immediately following width and height declaration, we are referencing the widget's surrounding div which tells RokBox which item needs to be placed into the popup. This surrounding div (rt-popuplogin in our example) will be placed in a widget chrome later on in the tutorial.

XML definition file goes here as well :

```xml
<?xml version="1.0" encoding="utf-8"?>
<!-- $Id: style.xml 16565 2010-04-28 12:21:27Z ian $ -->
<form>
    <fieldset name="widget">
        <field name="title" type="text" label="Title" description="Title" default="" class="widefat" readonly="false"/>
        <field name="logintext" type="text" label="Login Text" description="Login Text" default="Login" class="widefat" readonly="false"/>
        <field name="logouttext" type="text" label="Logout Text" description="Logout Text" default="Logout" class="widefat" readonly="false"/>
    </fieldset>
</form>
```


Step 3: Creating the Widget Layout
----------------------------------
Next, we will be creating a custom chrome that takes advantage of Gantry's ability to define custom layouts for positions. This allows for greater flexibility and significantly cleaner code in the index.

We will be creating a new file named `widget_login.php` and placing it into the `/html/layouts` directory of the template. If `/html/layouts` doesn't exist in your template, you can create this directory. 

Paste the following code into your new file:

```php
<?php
/**
 * @version   ${project.version} ${build_date}
 * @author    RocketTheme http://www.rockettheme.com
 * @copyright Copyright (C) 2007 - ${copyright_year} RocketTheme, LLC
 * @license   http://www.gnu.org/licenses/gpl-2.0.html GNU/GPLv2 only
 *
 */
defined('GANTRY_VERSION') or die();

gantry_import('core.gantrylayout');

/**
 *
 * @package gantry
 * @subpackage html.layouts
 */
class GantryLayoutWidget_Login extends GantryLayout {
    var $render_params = array(
        'gridCount'     =>  null,
        'prefixCount'   =>  0,
        'extraClass'      =>  ''
    );
    
    function render($params = array()){
        global $gantry;

        $params = $gantry->renderLayout("chrome_".$params[0]['chrome'], $params);

        $params[0]['position_open'] ='';
        $params[0]['position_close'] ='';

        $rparams = $this->_getParams($params[0]);
        $start_tag = "";

        // see if this is the first widget in the postion
        if (property_exists($rparams,'start') && $rparams->start == $rparams->widget_id) {
            ob_start();
            ?>
            <div id="rt-popuplogin">
            <?php
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
}
```

This custom layout allows us to reference it in our `index.php` using the name following the **widget_** which is simply **login**. Once it is done, it will render all of the html inside around the entire position allowing us to keep the `index.php` much more concise. For this example, we've used just a single wrapper div `#rt-popuplogin`, but you can add as many elements as you need for any design considerations you have.


Step 4: Creating the Widget Chrome
----------------------------------
You can also set up a widget chrome for the login widget as defined in the part above. For this, you'll need to create the `/html/layouts/chrome_login.php` file (if it doesn't exist). 

Insert the following:

```php
<?php
/**
 * @version   ${project.version} ${build_date}
 * @author    RocketTheme http://www.rockettheme.com
 * @copyright Copyright (C) 2007 - ${copyright_year} RocketTheme, LLC
 * @license   http://www.gnu.org/licenses/gpl-2.0.html GNU/GPLv2 only
 */
defined( 'GANTRY_VERSION' ) or die();

gantry_import( 'core.gantrylayout' );

/**
 *
 * @package gantry
 * @subpackage html.layouts
 */
class GantryLayoutChrome_Login extends GantryLayout {
    var $render_params = array(
        'gridCount'     =>  null,
        'prefixCount'   =>  0,
        'extraClass'      =>  ''
    );

    function render( $params = array() ){
        global $gantry, $wp_registered_widgets;
        $rparams = $this-> _getParams( $params[0] );
        $instance_params = $this->_getWidgetInstanceParams( $params[0]['widget_id'] );
        
        $id =  $params[0]['widget_id'];
        $classname = $wp_registered_widgets[$params[0]['widget_id']]['classname'];

        // gantry render params
        $params[0]['pre_widget'] = '';
        $params[0]['widget_open'] = '';
        $params[0]['title_open'] = '';
        $params[0]['title_close'] = '';
        $params[0]['widget_close'] = '';
        $params[0]['post_widget'] = '';
        $params[0]['pre_render'] = '';
        $params[0]['post_render'] = '';

        // normal wp widget params
        $params[0]['before_widget'] = '';
        $params[0]['before_title']  = '';
        $params[0]['after_title']  = '';
        $params[0]['after_widget']  = '';

        $widget_variations = $pre_widget = $post_widget = $widget_open = $widget_close = $title_open = $title_close = $pre_render = $post_render = '';

        $variations = array( 'custom-variations', 'box-variations', 'title-variations' );

        foreach ( $variations as $variation ) {
            if ( array_key_exists( $variation, $instance_params ) && $instance_params[$variation] != false ) {
                if ( $instance_params[$variation] != '' ) $widget_variations .= ' ' . $instance_params[$variation];
            }
        }

        $widget_variations = trim( $widget_variations );
        ( $widget_variations != '' ) ? $widget_variations = ' ' . $widget_variations : $widget_variations = '';

        ?>

        <?php /** Begin Chrome Layout **/ ?>

        <?php ob_start(); ?>
        <div id="<?php echo $id; ?>" class="widget <?php echo $classname . $widget_variations; ?> rt-block">
            <div class="module-content">
            <?php $widget_open = ob_get_clean(); ?>
                <?php ob_start(); ?>
                <h2 class="title">
                <?php $title_open = ob_get_clean(); ?>
                <?php ob_start(); ?>
                </h2>
                <?php $title_close = ob_get_clean(); ?>
                <?php ob_start(); ?>
                <div class="module-inner">
                <?php $pre_render = ob_get_clean(); ?>
                <?php ob_start(); ?>
                </div>
                <?php $post_render = ob_get_clean(); ?>
            <?php ob_start(); ?>    
            </div>
        </div>
        <?php $widget_close = ob_get_clean(); ?>

        <?php /** End Chrome Layout **/ ?>

        <?php

        $params[0]['pre_widget'] = $pre_widget;
        $params[0]['post_widget'] = $post_widget;

        $params[0]['widget_open'] = $widget_open;
        $params[0]['widget_close'] = $widget_close;

        $params[0]['title_open'] =  $title_open;
        $params[0]['title_close'] = $title_close;
        
        $params[0]['pre_render'] = $pre_render;       
        $params[0]['post_render'] = $post_render;

        if( !empty( $instance_params['title'] ) ) {
            $params[0]['before_widget'] = $params[0]['pre_widget'] . $params[0]['widget_open'];
            $params[0]['before_title'] = $params[0]['title_open'];
            $params[0]['after_title'] =  $params[0]['title_close'] . $params[0]['pre_render'];
            $params[0]['after_widget'] = $params[0]['post_render'] . $params[0]['widget_close'] . $params[0]['post_widget'];
        } else {
            $params[0]['before_widget'] = $params[0]['pre_widget'] . $params[0]['widget_open'] . $params[0]['pre_render'];
            $params[0]['before_title'] = $params[0]['title_open'];
            $params[0]['after_title'] =  $params[0]['title_close'];
            $params[0]['after_widget'] = $params[0]['post_render'] . $params[0]['widget_close'] . $params[0]['post_widget'];
        }
        
        return $params;
        
    }
}
```


Step 5: Defining the position in the index.php
----------------------------------------------
Now, we want to add the new widget position to be called into the RokBox popup. It is important to create a new widget position for this purpose. It will be hidden by CSS until it is triggered, and we want it to be out of the normal flow of the page.

For this example, we are creating a position simply called **login**. We are going to add the following code near the very end of our template's `index.php` file, immediately before the closing body tag:

```php
<?php /** Begin Popup **/
echo $gantry->displayModules('login','login','login');
/** End Popup **/ ?>
```

Inside of the **displayModules** function, we are making three references. The first refers to the name of the widget position. The second refers to the layout we wish to use for this position. 

This is now referencing our widget_login.php layout we created in the Step 3), the third refers to the widget chrome to be applied to each rendering of the widget (this references your login chrome located in `/html/layouts/chrome_login.php`. For this example, we are simply using the standard style.


Step 6: Adding the Widget Position
----------------------------------
Now, it's time to define our new widget position in the administration. All of the widgets placed in that position will be displayed in the RokBox popup.


#### templateDetails.xml

First, you'll need to open up the `templateDetails.xml` file, which is located in the theme's root directory. A line needs to be added to the position section of this file. Look for the listing of widget positions that begins with the tag `<positions>`. At the bottom of the list, immediately before the `</positions>` tag, add the following:

```xml
<position id="login" name="Login" max_positions="1">Login</position>
```

This code adds the `login` position to Gantry and WordPress. It allows the WordPress to render the `Login` position in the widgets manager, so you can place any widgets (that you want to appear in the popup) inside.


Step 7: Adding the CSS
----------------------
Lastly, in terms of coding, CSS will need to be added to style the widget position. Place the CSS in the most appropriate file. If you are using LESS, this will be `/less/template.less`. If you are just using CSS, then `/css/template.css` is where you want to go. The following is required for the login to function:

```css
#rt-popuplogin { display: none; }
```

You will most likely want to add additional CSS, which you can do by using the **#rt-popuplogin** ID. This will apply strictly to the popup login.


Step 8: Putting it all together
-------------------------------
Now, all of our logic and core items are in place. We are ready to place the **Login Form** widget in the `Login` position, and the **Login Button** in any other position you want it to appear.

You can modify the settings of the widgets to match your personal preferences. Once you are done, **Save**, then refresh your site to review the changes.
