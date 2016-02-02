---
title: Twig Filters
taxonomy:
    category: docs
    tag: [gantry5]
---

Throughout this documentation, you may have noticed Twig filters such as `|e` and `|raw` being used as we reference YAML fields in our examples. Here is a quick example:

{% verbatim %}

```twig
{% if particle.headline %}<h1 class="font-family-bloody">{{ particle.headline|raw }}</h1>{% endif %}
```

{% endverbatim %}

This line comes from our [guide](../../tutorials/fonts) on adding and applying fonts. It detects if the headline field of a particle has a set value, and if so, displays it in its raw HTML format.

This enables the user to enter HTML such as `<style="color:red">Title</style>` and have it render a red <span style="color: red;" markdown="1">Title</span> on the front end instead of being translated to its literal characters.

In Gantry, these elements are escaped by default. This is a security precaution as it restricts in-line HTML from these fields only to fields that you have intentionally enabled it on. If you would like to open up rendered HTML for a field, you need but to add the `|raw` filter.

## Helpful Resources

The extensive Twig documentation from SensioLabs covers [Filters](http://twig.sensiolabs.org/doc/filters/index.html) extensively. We only covered a couple of the over 30 officially supported in Twig.

You will even find more detailed documentation about each filter, including how and when to use it, as well. We recommend starting with reading about [escape](http://twig.sensiolabs.org/doc/filters/escape.html) and [raw](http://twig.sensiolabs.org/doc/filters/raw.html) as these are used frequently in our documentation, as well as in the Hydrogen theme.