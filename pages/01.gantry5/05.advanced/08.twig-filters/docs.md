---
title: Twig Filters and Functions
taxonomy:
    category: docs
    tag: [gantry5]
---

Throughout this documentation, you may have noticed Twig filters such as `|e` and `|raw` being used as we reference YAML fields in our examples. Here is a quick example:

```twig
{% if particle.headline %}<h1 class="font-family-bloody">{{ particle.headline|raw }}</h1>{% endif %}
```

This line comes from our [guide](../../tutorials/fonts) on adding and applying fonts. It detects if the headline field of a particle has a set value, and if so, displays it in its raw HTML format.

This enables the user to enter HTML such as `<style="color:red">Title</style>` and have it render a red <span style="color: red;" markdown="1">Title</span> on the front end instead of being translated to its literal characters.

In Gantry, these elements are escaped by default. This is a security precaution as it restricts inline HTML from these fields only to fields that you have intentionally enabled it on. If you would like to open up rendered HTML for a field, you need to add the `|raw` filter.

## Helpful Resources

The extensive Twig documentation from SensioLabs covers [Filters](http://twig.sensiolabs.org/doc/filters/index.html) extensively. We only covered a couple of the over 30 officially supported in Twig.

You will even find more detailed documentation about each filter, including how and when to use it, as well. We recommend starting with reading about [escape](http://twig.sensiolabs.org/doc/filters/escape.html) and [raw](http://twig.sensiolabs.org/doc/filters/raw.html) as these are used frequently in our documentation, as well as in the Hydrogen theme.

## Custom Twig Filters

Gantry 5 includes an array of different Twig filters that are custom to Gantry. They enable you to get more out of Gantry, and utilize some of its powerful features. 

| Filter        | Description                                                                         | Parameters                |
| :----         | :-----                                                                              |                           |
| fieldName     | Used internally in the Gantry administrator. It converts field names for the form.  |                           |
| html          | Finds streams and converts them into real URLs.                                     | `domain` `timestamp_age`  |
| url           | Takes a stream and converts it to a real URL.                                       |                           |
| trans         | Translates the string.                                                              |                           |
| repeat        | Repeats whatever you put in it by the assigned count.                               | `count`                   |
| json_decode   | Basically the same as `json_decode()` in php.                                       | `assoc` `depth` `options` |
| values        | Returns all the values from the array and indexes the array numerically.            |                           |
| base64        | Encodes the string into a base64 format.                                            |                           |
| imagesize     | Grabs the image dimensions and outputs it in HTML tag format.                       |                           |
| truncate_text | Strips text out of HTML tags and truncates text to a provided number of characters. | `limit`                   |
| truncate_html | Truncates text to a provided number of characters, preserving HTML.                 | `limit`                   |

### Examples

#### fieldname

Input (Twig): 

```twig
<input type="text" name="{{ 'particles.date.format'|fieldName }}"/>
```

Output (HTML):

```html
<input type="text" name="particles[date][format]"/>
```

#### html

Input (Twig): 

```twig
{{ '<img src="gantry-theme://images/foo.jpg"/>'|html }}
```

Output:

```html
<img src="/templates/g5_hydrogen/images/foo.jpg"/>
```

#### url

Input (Twig): 

```twig
<img src="{{ 'gantry-theme://images/foo.jpg'|url }}"/>
```

Output (HTML):

```html
<img src="/templates/g5_hydrogen/images/foo.jpg"/>
```

#### trans

Input (Twig): 

```twig
<h1>{{ 'GANTRY5_PLATFORM_STYLES'|trans }}</h1>
```

Output (HTML):

```html
<h1>Styles</h1>
```

#### repeat

Input (Twig): 

```twig
{{ '.'|repeat(3) }}
```

Output (HTML):

```html
...
```

#### values

Input (Twig): 

```twig
{% set array = {one: 'foo', two: 'bar'} %}
{% set values = array|values %}
{{ array|json_encode }} => {{ values|json_encode }}
```

Output (HTML):

```html
{"one":"foo",""two":"bar"} => ["foo","bar"]
```

#### imagesize

Input (Twig): 

```twig
<img src="{{ 'gantry-theme://images/foo.jpg'|url }}" {{ 'gantry-theme://images/foo.jpg'|imagesize }}/>
```

Output (HTML):

```html
<img src="/templates/g5_hydrogen/images/foo.jpg" width="100" height="50" />
```

## Custom Twig Functions

Just like with Twig Filters - Gantry 5 also has a set of custom Twig functions that you can use in templates and particles. Here is a quick list:

| Function      | Description                                                                  | Parameters                |
| :----         | :-----                                                                       |                           |
| nested        | Retrieves value by using dot notation for nested arrays/objects.             |                           |
| colorContrast | Given a color, it returns a fitting light or dark color for better contrast. |                           |
| get_cookie    | Gets a cookie from the current request.                                      |                           |
| preg_match    | Searches subject for a match to the regular expression given in pattern.     | `pattern` `subject`       |
| url           | Takes a stream and converts it to a real URL.                                |                           |
| json_decode   | Basically the same as `json_decode()` in PHP.                                | `assoc` `depth` `options` |
| imagesize     | Grabs the image dimensions and outputs it in HTML tag format.                |                           |
