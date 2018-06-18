---
title: How to Load CSS / SCSS / JS / HTML from Twig
taxonomy:
    category: docs
    tag: [gantry5]
---

## Load CSS / JS in Gantry 5

Starting from Gantry 5.3 there is a new, better way to add JavaScript and CSS files. 

Load JavaScript framework (just JavaScript, CSS needs to be loaded manually by you):

- `jquery` or `jquery.framework`
- `jquery.ui.core`
- `query.ui.sortable`
- `bootstrap.2`
- `bootstrap.3`
- `mootools` or `mootools.framework` or `mootools.core`
- `mootools.more`

``` twig
{% do gantry.document.addFramework('mootools.core') %}
{% do gantry.document.addFramework('mootools.more') %}
```

Add CSS file:

``` twig
{% block stylesheets %}
    <link rel="stylesheet" type="text/css" href="gantry-theme://css/whoops.css" /> 
{% endblock %}
```

Add inline CSS:

``` twig
{% set red %}
body {
    color: red;
}
{% endset %}
{% do gantry.document.addInlineStyle(red, 0) %}
```

Add JavaScript file:

``` twig
{% block javascript %}
    <script src="{{ url('https://cdnjs.cloudflare.com/ajax/libs/mootools/1.6.0/mootools-core.min.js') }}"></script>
{% endblock %}  
```

Add JavaScript file to the Footer (after </body> HTML tag):

``` twig
{% block javascript_footer %}
    <script src="{{ url('https://cdnjs.cloudflare.com/ajax/libs/mootools/1.6.0/mootools-core.min.js') }}"></script>
{% endblock %}  
```

Add inline JavaScript:

``` twig
{% set alert %}
alert("test");
{% endset %}
{% do gantry.document.addInlineScript(alert, 0) %}
```

Add inline JavaScript to the Footer (after </body> HTML tag):

``` twig
{% set alert %}
alert("test");
{% endset %}
{% do gantry.document.addInlineScript(alert, 0, 'footer') %}
```

All the functions except `addFramework()` accepts 3 parameters where second parameter is `priority` and third parameter `location` (usually `head` or `footer`). 

First parameter can also be associative array containing the attributes of the given tag. Note that not all platforms support all the attributes.

## Compiling custom SCSS files

Sometimes there is a need to compile a custom SCSS file to CSS and include it into the page (like when you want to include it only when a certain particle is present on a page). 

To do this, it will require you to create two SCSS files. We'll call them `first.scss` and `second.scss` as an example (use any names you'd like). Place both of these files in your `THEME/custom/scss/` directory.

Once you have those in place, add the following code to the `first.scss` file:

``` css
@import "second";
```

Next, add any CSS/SCSS code to your `second.scss` file. 

Once this is done, add the following to your Twig file (i.e. particle.html.twig):
  
``` twig
{% block stylesheets %}
    <link rel="stylesheet" href="first.scss" /> 
{% endblock %}
```

If the twig file you are using is for a particle, ensure it is being used on your Outline > Layout and you have cleared your Gantry cache. Load the page and you should see your SCSS code compiled into CSS.

## Add HTML into Body in Gantry 5

Sometimes there is a need to add some HTML right after `<body>` or just before `</body>` tag.

You can add HTML from **Page Settings**, but sometimes you may want to do it from a particle or an atom.

Add HTML after `<body>` tag:

``` twig
{% pageblock body_top %}
    -BODY TOP-
{% endpageblock %}
```

Add HTML after `<div id="g-page-surround">`, but before main layout:

``` twig
{% pageblock top %}
    -PAGE TOP-
{% endpageblock %}
```

Add HTML after main layout, but before end of `<div id="g-page-surround">`:

``` twig
{% pageblock bottom %}
    -PAGE BOTTOM-
{% endpageblock %}
```

Add HTML before `</body>` tag:

``` twig
{% pageblock body_bottom %}
    -BODY BOTTOM-
{% endpageblock %}
```

Additionally you can provide priority (10 ... -10):

```twig
{% pageblock bottom with { priority: -10 } %}
   This should be shown after everything else.
{% endpageblock %}
```
