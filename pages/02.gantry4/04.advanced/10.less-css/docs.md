---
title: LESS CSS
taxonomy:
    category: docs
    tag: [gantry4]
---

**LESS** is a dynamic stylesheet language that extends CSS with dynamic behaviours such as variables, mixins, operations and functions. LESS allows your code to be cleaner, optimized whilst also reducing the overall time to create and maintain your code base.

Gantry supports LESS, rooting the compiler and core processes into the Framework itself. Furthermore, the administrator and frontend template are constructed with LESS files that are then outputted as CSS files to the browser. Gantry handles all the complex processing, so you can concentrate purely on the styling.

Note, when making modifications, remember to:

1. Always edit the **.less** and not the **compiled .css** files that are output to `/css-compiled/` folder
2. Make sure the `/less/`, `/css/`, and `/css-compiled/` directories for the template are writeable
3. Clear the Joomla, Less, Gantry and Browser caches


LESS: the Basics
----------------
LESS is designed to extend CSS, so you start with the basic principles and attributes that are associated with CSS, IDs, classes and others. Therefore, the format will look familiar. In terms of examples, the `/LESS` files will be shown first, followed by the **Compiled CSS** files which are the outputted files that appear in the `/css-compiled/` directory.


Variables
---------
These are standard values that can be repeated throughout your stylesheets, and thus, one line change will generate a global change, rather than having to change each instant manually. An example from the Gantry template is below:

```css
//LESS
@bodytitle: #303030;
...
a:hover {
  color: @bodytitle;
}
h1, h2, h3, h4, h5, h6 {
  color: @bodytitle;
}
```

```css
/* Compiled CSS */
a:hover {
  color: #303030;
}
h1, h2, h3, h4, h5, h6 {
  color: #303030;
}
```

As you can see in the above example, anywhere **@bodytitle** is used in the LESS files, it will be changed to **#303030** in the compiler.


Mixins
------

**Mixins** combine **Variables** with **Functions** by allowing you to include all the properties associated with a class into another class. These class injections can include functions, as shown in the example extracted from [LessCSS.org][lesscss] below:

```css
//LESS
.rounded.corners (@radius: 5px) {
  border-radius: @radius;
  -webkit-border-radius: @radius;
  -moz-border-radius: @radius;
}

#header {
  .rounded.corners;
}
#footer {
  .rounded.corners(10px);
}
```

```css
/* Compiled CSS */
#header {
  border-radius: 5px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
}

#footer {
  border-radius: 10px;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
}
```


Nested Rules
------------
**Nested Rules** are for inheritance, allowing your style sheets to be cleaner and shorter by placing selector groups within one another, rather than specifying each instant each time. See a Gantry Template example below:

```css
//LESS
ul.menu {
  list-style: none;
  margin: 0;
  padding: 0;
  ul {
    list-style: none;
  }
  li {
    margin-bottom: 8px;
    a, .item, .separator {
      display: block;
      font-size: 1.1em;
      font-weight: bold;
    }
  }
}
```

```css
/* Compiled CSS */
ul.menu {
  list-style: none;
  margin: 0;
  padding: 0;
}
ul.menu ul {
  list-style: none;
}
ul.menu li {
  margin-bottom: 8px;
}
ul.menu li a, ul.menu li .item, ul.menu li .separator {
  display: block;
  font-size: 1.1em;
  font-weight: bold;
}
```


Functions & Operations
----------------------
**Functions & Operations** allow you to perform mathematical operations to CSS values as well as manipulate values through functions, as is available with JavaScript. See the below example extracted from [LessCSS.org][lesscss]:

```css
//LESS
@the-border: 1px;
@base-color: #111;
@red: #842210;

#header {
  color: @base-color * 3;
  border-left: @the-border;
  border-right: @the-border * 2;
}
#footer {
  color: @base-color + #003300;
  border-color: desaturate(@red, 10%);
}
```

```css
/* Compiled CSS */
#header {
  color: #333;
  border-left: 1px;
  border-right: 2px;
}
#footer {
  color: #114411;
  border-color: #7d2717;
}
```

The above outline is to introduce you to the basics of how LESS works. For a more detailed overview of how variables, mixins, functions, and operations work, please visit: [LessCSS.org][lesscss].


LESS in the Gantry Template
---------------------------

[ui-tabs position="top-left" active="0" theme="lite"]
[ui-tab title="Joomla"]

All LESS files associated with the template are located in the `/templates/[TEMPLATE]/less/` directory. Gantry 4 utilizes a powerful PHP-based LESS compiler powered by [lessphp](lessphp). Gantry 4 outputs the processed LESS files into the `/templates/[TEMPLATE]/css-compiled/` directory.

Not all CSS files are compiled into a single file. Any CSS file that is required to be standalone, for purposes of template parameters (such as loading Fusion Menu instead of SplitMenu) will be independent of the main `/templates/[TEMPLATE]/css-compiled/[OUTPUT_CSSFILE]` file.

[/ui-tab]
[ui-tab title="WordPress"]

All LESS files associated with the template are located in the `/wp-content/themes/[TEMPLATE]/less/` directory. Gantry 4 utilizes a powerful PHP-based LESS compiler powered by [lessphp](lessphp). Gantry 4 outputs the processed LESS files into the `/wp-content/themes/[TEMPLATE]/css-compiled/` directory.

Not all CSS files are compiled into a single file. Any CSS file that requires to be standalone, for purposes of template parameters, such as loading Fusion Menu instead of SplitMenu, will be independent of the main `/wp-content/themes/[TEMPLATE]/css-compiled/[OUTPUT_CSSFILE]` file.

[/ui-tab]
[/ui-tabs]

How are LESS files compiled?
----------------------------

[ui-tabs position="top-left" active="0" theme="lite"]
[ui-tab title="Joomla"]

When a change is detected, Gantry **automagically** recompiles your LESS files into CSS files. To add a LESS file, you have two options. You can insert the following function into your PHP code:

```php
$gantry->addLess('NAME.less');
```

Where `NAME.less` is the name of your less file in your `/templates/[TEMPLATE]/less/` directory. The **addLess()** method takes several optional parameters:

```php
public function addLess([INPUT_LESSFILE], [OUTPUT_CSSFILE], [PRIORITY], [ARRAY_OF_VARIABLES]);
```

An example of this as used in the default gantry template is:

```php
$gantry->addLess('global.less', $gantry->templateName . '-compiled.css', 8, array('headerstyle'=>'"header-'.$gantry->get('headerstyle','dark').'.less"'));
```

You can see in this example that `global.less` is the source LESS file, and the output is going to be `gantry-compiled.css`. Priority has been harcoded as **8**, and the last parameter is an array of a single item **headerstyle** passed to the LESS compilation. The ability to pass variables makes less compilation very powerful and flexible.

When you pass variables to less compilation your output will take the format of `[TEMPLATE]-compiled-[MD5_VARIALBLE_NAME_VALUES]`, for example: `gantry-compiled-845729384248h3hf4haeioh.css`.

An alternative way to add LESS files is to simply create the file then add a reference in the `/less/global.less` master LESS file. The `global.less` file imports the other LESS files via the **@import** function, see the example below:

```css
// Core variables and mixins
@import "variables.less";
@import "mixins/index.less";

// Core and Grid
@import "gantry-core.less";
@import "joomla-core.less";

// Template core styling and layout
@import "template.less";
@import "style.less";
@import @headerstyle;
@import "prettify.less";
```

Furthermore, for features that require a separate LESS file, you can use a variety of different techniques. The simplest is to insert the add LESS function into `/features/styledeclaration.php`, as noted in the example from the Gantry Template:

```php
if ($gantry->get('typography-enabled')) $gantry->addLess('typography.less');
```

This adds a conditional, where the parameter **typography-enabled** is active, the `/less/typography.less` file will be compiled.

[/ui-tab]
[ui-tab title="WordPress"]

When a change is detected, Gantry **automagically** recompiles your LESS files into CSS files. To add a LESS file, you have two options. You can insert the following function into your PHP code:

```php
$gantry->addLess('NAME.less');
```

Where `NAME.less` is the name of your less file in your `/wp-content/themes/[TEMPLATE]/less/` directory. The **addLess()** method takes several optional parameters:

```php
public function addLess([INPUT_LESSFILE], [OUTPUT_CSSFILE], [PRIORITY], [ARRAY_OF_VARIABLES]);
```

Here's an example as used in the default gantry template:

```php
$gantry->addLess('global.less', $gantry->templateName . '-compiled.css', 8, array('headerstyle'=>'"header-'.$gantry->get('headerstyle','dark').'.less"'));
```

You can see from this example that `global.less` is the source LESS file, and the output is going to be `gantry-compiled.css`. Priority has been harcoded as **8**, and the last parameter is an array of a single item **headerstyle** passed to the LESS compilation. The ability to pass variables makes LESS compilation both powerful and flexible.

When you pass variables to less compilation, your output will take the format of `[TEMPLATE]-compiled-[MD5_VARIALBLE_NAME_VALUES]`. For example: `gantry-compiled-845729384248h3hf4haeioh.css`.

An alternative way to add LESS files is to simply create the file and add a reference in the `/less/global.less` master LESS file. The `global.less` file imports the other LESS files via the **@import** function. See the example below:

```css
// Core variables and mixins
@import "variables.less";
@import "mixins/index.less";

// Core and Grid
@import "gantry-core.less";
@import "wordpress-core.less";

// Template core styling and layout
@import "template.less";
@import "style.less";
@import @headerstyle;
@import "prettify.less";
```

Furthermore, for features that require a separate LESS file, you can use a variety of different techniques. The simplest is to insert the add the `addLess` function into `/gizmos/styledeclaration.php`, as noted in the example from the Gantry Template:

```php
if ($gantry->get('typography-enabled')) $gantry->addLess('typography.less');
```

This adds a conditional, where the parameter **typography-enabled** is active, the `/less/typography.less` file will be compiled.

[/ui-tab]
[/ui-tabs]

LESS Template Options
---------------------

[ui-tabs position="top-left" active="0" theme="lite"]
[ui-tab title="Joomla"]

You can control CSS compression, Compile Wait Time and Debug Header, as well as manually clear the cache with the **Clear Cache** button at **Extensions → Template Manager → gantry → Advanced → Less Compiler**.

Additionally, CSS compression increases site performance and optimization by consolidating all the CSS into a single file, with little to no whitespace. This reduces the file size of the CSS file and making it quicker for a browser to load.

![](advanced-less.jpg)  {.border .shadow}

[/ui-tab]
[ui-tab title="WordPress"]

You can control CSS compression, compile wait time and debug header, as well as manually clear the cache with the **Clear Cache** button at **Admin Dashboard → Gantry Theme → Advanced → Less Compiler**.

Additionally, CSS compression increases site performance and optimization by consolidating all the CSS into a single file, with none or negligible whitespace. This reduces the file size of the CSS file and reduces browser load time.

![](advanced-less.jpg)  {.border .shadow}

[/ui-tab]
[/ui-tabs]

Custom LESS files
-----------------

Often, you will have a need to add some custom CSS to override a particular style in the template. You may not want to edit the provided LESS or CSS files as this could potentially cause problems with updates of the template. With Gantry 4, you can create custom LESS files of the format: `/less/[LESS_FILE_NAME]-custom.less`, and these will get picked up and compiled into the main compiled CSS file.

For example, in the default Gantry template, there is a file called `less/template.less`. If you were to create a new file called `less/template-custom.less`, you could add your own custom LESS elements in here and they would automatically be pulled in to your compiled CSS file.

[lesscss]: http://lesscss.org/
