---
title: How to Load CSS / JS from Twig
taxonomy:
    category: docs
    tag: [gantry5]
---



If you want to add JavaScript and/or CSS from your twig file, you can do something like this:


``` twig
{# Add assets into head of the document by using default priority. #}
{% assets in 'head' with { priority: 0 } %}
    <link rel="stylesheet" href="{{ url('gantry-theme://css/my.css') }}" type="text/css"/>
    <style>
        body {color: red}
    </style>
    <script type="text/javascript" src="{{ url('gantry-theme://js/my.js') }}"></script>
    <script type="text/javascript">
        var MY_VAR = 'test';
    </script>
{% endassets -%}
```


Basically assets can take two optional parameters:

* in 'x'
* with { priority: y }

The parameter `x` is the location you want to add your stuff (`head` and `footer` are currently supported by Hydrogen theme) and `y` is priority, which is used to order the assets defaulting to 0 and ranging from `-10` to `10`. 

Priority with higher numbers are added into the document before any lower number. If there are multiple assets tags with the same priority, their ordering is undefined.

There is also a twig tag for JavaScript only:


``` twig
{# Add javascript into end of the document (before any other javascript in the footer). #}
{% scripts in 'footer' with { priority: 10 } %}
    <script type="text/javascript" src="{{ url('gantry-theme://js/footer.js') }}"></script>
    <script type="text/javascript">
        var MY_VAR = 'test';
    </script>
{% endscripts -%}
```


And for style sheets only:


``` twig
{# Add some stylesheets and make them to load last (override other styles). #}
{% styles with { priority: -10 } %}
    <link rel="stylesheet" href="{{ url('gantry-theme://css/my.css') }}" type="text/css"/>
    <style>
        body {color: red}
    </style>
{% endstyles -%}
```

## Compiling custom SCSS files

Sometimes there is a need to compile a custom SCSS file to CSS and include it into the page. 

You can do this by adding your SCSS file to the `custom/scss` folder and calling it in twig like this:
  
``` twig
{% styles with { priority: 0 } %}
    <link rel="stylesheet" href="{{ url(gantry.theme.css('test')) }}" type="text/css"/>
{% endstyles -%}
```

In the above example file is `custom/scss/test.scss`. All the variables defined in **Styles** tab are available just like in any SCSS files to be compiled.

## Advanced Tip

You can also add your custom locations where you can output styles and scripts. As an example:


``` twig
{{ gantry.styles('styles')|join("\n    ")|raw }}
{{ gantry.scripts('scripts')|join("\n    ")|raw }}
```


After defining the locations, you can add stuff into them just like the head and footer:


``` twig
{# Add javascript into your custom location. #}
{% scripts in 'scripts' %}
    <script type="text/javascript" src="{{ url('gantry-theme://js/script.js') }}"></script>
{% endscripts -%}
```
