---
title: WordPress: WPML Support
taxonomy:
    category: docs
    tag: [gantry4]
---


## Utilizing WPML Support with Gantry

Gantry 4.1.3 added built-in support for WPML (WordPress Multilingual Plugin), a popular solution for creating a seamless multilanguage experience for your users, enabling them to easily switch between language settings on your site, and giving you the power to create unique layouts, widgets, and posts that appear only on particular languages.

In essence, you can create three versions of a post, each written in a supported language, and have each of these posts only appear on the site for the language it is written in. It's a great way to cater your site to an International audience.

WPML doesn't translate your content for you, but it will give you the ability to quickly and easily set it up so your site is optimized for your diverse audience.

## Enabling WPML Support

If you are using a Gantry-powered theme or plugin that has already been updated to support WPML, there isn't anything else you need to do. It's already ready for the plugin, you just need to download the plugin from [wpml.org](http://wpml.org/) and install it on your site. 

>>>>> WPML is commercial third-party software, and you may have to purchase a license in order to use it on your site. RocketTheme and Gantry do not support the software directly, it has simply been updated to make it possible to use it with the Gantry framework.

If your theme has custom styling or code or uses overwritten widgets or other components sourced from Gantry's core, you may need to make some minor edits in order to make this code compatible with WPML.

## Changing Custom RocketTheme Functions to WordPress Native

The first thing you will need to do is search your theme directory (and subdirectories) for occurrences of `_r` and `_re`. These functions are not compatible with WPML. Here is an example of this used in an incompatible Gantry implementation.

```php
<?php comments_number( _r( '0 Comments' ), _r( '1 Comment' ), _r( '% Comments' ) ); ?>
```

In order to make this compatible, you will need to change it so that it looks more like this.

```php
<?php comments_number( __( '0 Comments', 'rt_gantry_wp_lang' ), __( '1 Comment', 'rt_gantry_wp_lang' ), __( '% Comments', 'rt_gantry_wp_lang' ) ); ?>
```

As you can see in the above example, both the functions and the arguments have been altered. For WPML to work, instances of `_r` need to become `__` with the `r` being replaced by an extra underscore. Instances of `_re` need to become `_e` with the `r` being removed.

| Original | New   |
| :----    | :---- |
| `_r`     | `__`  |
| `_re`    | `_e`  |

The argument has also been changed. You will need to add an extra argument to what is already there. In this case, `( '0 Comments' )` becomes `( '0 Comments', 'rt_gantry_wp_lang' )`. This is done so that WPML can see the line and identify it as a multilanguage object.

In this case, `rt_gantry_wp_lang` is used because the example is the default **Gantry** theme. This should be changed to match the directory name of your theme's folder followed by `_lang`. For example, if your theme's folder is called `rt_myriad_wp` then the string would be changed to `rt_myriad_wp_lang`.

## Making Gantry Widgets Inputs Translatable with WPML

The next thing you will want to do is access any **XML** files for widgets that are overwritten or in addition to the Gantry core and add any fields that you would like to make translatable. This is typically used for **Title** fields, as well as any other language-specific fields that would need to be translated with WPML, especially in third-party custom widgets.

>>>>> If the widget title is filterable by widget_title (and all of the ones in RocketTheme themes are) it doesn't need to be defined in the wpml_inputs field as WPML handles widget_titles automatically.

You can do this very easily, simply open the widget's XML and find the fields you wish to add. Here is an example:

```xml
<fieldset name="widget">
    <field name="prefix" type="text" label="Prefix" class="widefat" size="30" default="You are here:" readonly="false" />
</fieldset>
```

Next, you will want to create a new line in the **fieldset** as follows:

```xml
<field name="wpml_inputs" type="hidden" default="prefix" description="Input field names (separated by space) that can be translated by WPML" readonly="true" />
```

>>>>> The field name must be set to `wpml_inputs`, and `type="hidden"` should also be included to keep this field from appearing in the backend.

The `default` field should include any field names you want to have translatable by WPML. Separate these field names with spaces, if there are more than one. Here is an example of the updated XML file.

```xml
<fieldset name="widget">
  <field name="prefix" type="text" label="Prefix" class="widefat" size="30" default="You are here:" readonly="false" />
    <field name="wpml_inputs" type="hidden" default="prefix" description="Input field names (separated by space) that can be translated by WPML" readonly="true" />
</fieldset>
```

## Converting Text Widgets to Multilingual Text Widget

WPML has a feature that adds a **Multi-language Text** widget to your arsenal. This is a great thing, and should be used for **ANY** text widget you wish to have set to a specific language. If you are updating an existing site and see an option to convert Text widgets to Multi-language Text widgets, doing so will cause issues. We recommend instead replacing these widgets manually as the unique structure of widgets that the overrides mechanism requires makes this potentially problematic.

We have hidden this function in the latest edition of Gantry to avoid this breaking anything. It should be very easy to create a new Multilingual Text widget, copy the text from the existing Text widget, and replace it.

## Exceptions

Some of the strings in Gantry Widgets won't translate. For example, the Gantry Login Form widget.

This happens because some of the widgets (which aren't being overridden at the theme level) are being loaded from the **Gantry Framework** core and injected into the theme on the fly. Because of this, WPML is treating strings found in such widgets as strings that belong to the plugin and not theme itself. Because of this, they aren't being loaded properly in the frontend. In the case of the default **Gantry** theme, some examples would be **Gantry Login Form**, **Gantry Font Sizer**, and **Gantry Overrides Map**.

This isn't a big issue as we can solve this by following a few short steps. Firstly, please navigate to the WP administration dashboard and then to **WPML → String Translation** and scroll down to the `Auto Register Strings for Translation` section.

In that section, please select **Auto-register strings always** and hit **Apply**. 

After finishing this step, please log out of the WordPress administrator and switch to the frontend and load up a page where you have placed your widgets.

This is the moment when WPML should recognize these strings and add them to the **String Translation** page. Now, head back to the **String Translation** page in the WPML administrator and verify that **theme Gantry** is present in the context dropdown at the top of the page. If you can see such context and strings present inside of it - you should be good to go. 

Last step is to **Disable auto-register strings** to save server resources.
