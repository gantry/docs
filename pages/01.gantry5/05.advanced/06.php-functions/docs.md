---
title: Adding New PHP Functions
taxonomy:
    category: docs
    tag: [gantry5]
gravui:
    enabled: true
    tabs: true
process:
    twig: true
---

Adding your own PHP functions to a Gantry theme is achievable, and can be a very simple process. This guide will take you through the steps needed to add your own PHP functions to your site.

In this example, we will be adding [**Mobile Detect**](https://github.com/serbanghita/Mobile-Detect), an open source PHP class that detects mobile devices (including tablets) enabling you to create device-specific responses on your site.

>>> If you are developing your own themes from scratch, this is a great method to accomplish this task. This process is not expected to become the standard solution in the long term for users of existing themes. A cleaner, more intuitive process for extending PHP functionality is in the works and this document will be updated when it becomes available. 

## Overriding the theme.php File

The `includes/theme.php` file defines the theme. It can also be used to add additional PHP functions. You will need to create an override of this file in order to make your changes and have them preserved in the event that the theme is updated.

To do this, simply duplicate the file and place the copy in the `/custom/includes/` directory. This will be the file you make changes to.

To add the Mobile Detect php function, you will want to add the following code at the bottom of the file's content:

{% verbatim %}

```php
// Add Mobile Detect Function
class Simple_Class {
    public $custom_variable = 'this is a test';
    public function displayVariable() {
        echo $this->custom_variable;
    }
}
$gantry['Simple_Class'] = new Simple_Class();

require_once dirname(__FILE__).'/Mobile_Detect.php';
$gantry['Mobile_Detect'] = new Mobile_Detect();
```
{% endverbatim %}

## Putting the Class to Use

Once you have the class added, you will be able to initialize it by adding it to the theme's twig files. This includes core twig files for the theme, individual particles, etc.

Here is an example of a call that puts **Mobile Detect** to use.

{% verbatim %}

```twig
{{ gantry.Simple_Class.displayVariable() }}
{%- if not gantry.Mobile_Detect.isMobile() -%}
    THIS DEVICE IS NOT A MOBILE
{%- endif -%}
```

{% endverbatim %}