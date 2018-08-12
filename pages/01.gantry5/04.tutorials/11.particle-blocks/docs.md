---
title: Particle Blocks
taxonomy:
    category: docs
    tag: [gantry5]
---

There are times when you just want to have CSS or JavaScript assets load without having them appear in the base of the page. Particles have integrated support for JavaScript and style sheets, even if the particle itself isn't an atom. You could essentially have a single particle that includes standard particle content in addition to accessing CSS and JavaScript elements.

This is a very useful way to bring JavaScript and style sheet blocks into a very specific part of your page.

! Looking for more information about using blocks in Twig? [Here is a ton of useful information](http://twig.sensiolabs.org/doc/tags/extends.html#how-do-blocks-work) about how blocks work in Twig.

Assets loaded within a particle only load once. If you call a specific JavaScript file in one particle, doing so in another particle will have no additional affect on the page. It will only load once.

## Particle Template

In this guide, we will go over the different types of blocks that appear in a particle, and how you can use them to add elements to your page from a particle/atom as opposed to having them load within the page template.

Here's an example twig file demonstrating the different blocks you can use in a particle.


``` twig
{% extends '@nucleus/partials/particle.html.twig' %}

{% block stylesheets %}
    {{ parent() }}
    {# any stylesheet you would like to render in <head> #}
{% endblock %}

{% block javascript %}
    {{ parent() }}
    {# any javascript you would like to render in <head> #}
{% endblock %}

{% block javascript_footer %}
    {{ parent() }}
    {# any javascript you would like to render before </body> #}
{% endblock %}

{% block particle %}
    {# particle output goes here #}
{% endblock %}
```


## Adding a JavaScript Block

Adding a JavaScript block to your particles is pretty easy. In your particle's twig file, you just need to create a JavaScript block and include the necessary information to load your specific JavaScript asset. Here's an example of a JavaScript block being used in a standard particle:


```twig
{% block javascript %}
    {{ parent() }}
    <script src="{{ url('gantry-theme://js/filename.js') }}"></script>
{% endblock %}
```


You can place the block apart from the style sheet or particle block, or have it wrap around these other elements (or parts of them) to apply that JavaScript property to them. If you want a JavaScript asset to load just prior to the `</body>` tag of the page, you would exchange `block javascript` with `block javascript_footer`.

Here's an example of a JavaScript block used a real-world application. In this case, this is the `analytics.html.twig` file used to create Gantry's **Google Analytics** atom.


```twig
{% extends '@nucleus/partials/particle.html.twig' %}

{% block javascript %}
    {{ parent() }}
    {% if particle.ua.code  %}
        <script>
            (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
            }){% if particle.ua.debug %}(window,document,'script','//www.google-analytics.com/analytics_debug.js','ga');{% else %}(window,document,'script','//www.google-analytics.com/analytics.js','ga');{% endif %}
            ga('create', '{{ particle.ua.code }}', 'auto');
        {% if particle.ua.anonym  %}
            ga('set', 'anonymizeIp', true);
        {% endif %}
        {% if particle.ua.ssl  %}
            ga('set', 'forceSSL', true);
        {% endif %}
            ga('send', 'pageview');
        </script>
    {% endif %}
{% endblock %}
```


## Adding a Style Sheet Block

Adding a Style Sheet block works very much the same way to a JavaScript or particle block. Here's an example:


```twig
{% block stylesheets %}
    <link rel="stylesheet" href="{{ somelocation }}" type="text/css"/>
{% endblock %}
```


Combining a style sheet block with a JavaScript block is pretty simple to do. We actually use this approach to load both JavaScript and CSS assets through a single particle. Here's a look at a real-world application found in the `assets.html.twig` file which creates the **Custom CSS / JS** atom.


```twig
{% extends '@nucleus/partials/particle.html.twig' %}

{% block stylesheets %}
    {% for css in particle.css %}
        {% set attr_extra = '' %}
        {% if css.extra %}
            {% for attributes in css.extra %}
                {% for key, value in attributes %}
                    {% set attr_extra = attr_extra ~ ' ' ~ key|e ~ '="' ~ value|e('html_attr') ~ '"' %}
                {% endfor %}
            {% endfor %}
        {% endif %}

        <link rel="stylesheet" href="{{ url(css.location) }}" type="text/css"{{ attr_extra|raw }} />
    {% endfor %}
{% endblock %}

{% block javascript %}
    {% for script in particle.javascript %}
        {% set attr_extra = '' %}
        {% if script.extra %}
            {% for attributes in script.extra %}
                {% for key, value in attributes %}
                    {% set attr_extra = attr_extra ~ ' ' ~ key|e ~ '="' ~ value|e('html_attr') ~ '"' %}
                {% endfor %}
            {% endfor %}
        {% endif %}

        <script src="{{ url(script.location) }}" type="text/javascript"{{ attr_extra|raw }}></script>
    {% endfor %}
{% endblock %}
``` 


## Particle Block

The particle block is the meat and potatoes of a particle. It's the content, the information that Gantry uses to create the particle on the front end. We use the particle block extensively in our [guide on creating new particles](../../advanced/creating-a-new-particle).

To offer a real-world example: Here is a look at the `branding.html.twig` twig file the makes up the **Branding** particle.


```twig
{% extends '@nucleus/partials/particle.html.twig' %}

{% block particle %}
<div class="g-branding {{ particle.css.class }}">
    {{ particle.content|raw }}
</div>
{% endblock %}
```

## Add HTML into Head in Gantry 5

To support the full customization of a website, it is necessary to provide functionality that allow the placement of HTML direclty within the `<head>` tag. Therefore we include from **Gantry v5.4.24** on new options that give developers direct access on the HTML `<head>`.

A similiar mechanism used for resource files can be found under [How to Load CSS / SCSS / JS / HTML from Twig](../../advanced/css-js-twig#add-html-into-body-in-gantry-5).

You can add HTML from a particle or an atom by using the following `pageblock` directives.


Add HTML after `<head>` tag:

``` twig
{% pageblock head_top %}
    -HEAD TOP-
{% endpageblock %}
```

Add HTML right before the favicon / touch icon `<meta>` tags, generated by the Gantry assets configuration:

``` twig
{% pageblock head_meta %}
    -HEAD META-
{% endpageblock %}
```

Add HTML before `</head>` tag:

``` twig
{% pageblock head_bottom %}
    -HEAD BOTTOM-
{% endpageblock %}
```