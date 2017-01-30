---
title: Customizing Theme Files
taxonomy:
  category: docs
  tag: [gantry5]
---

After you have downloaded and installed your Gantry-powered theme, you may want to customize it to make changes that go beyond its included **Page Settings** and **Particle Defaults** options.

As an example, you could add a text field on the back end that enables you to easily change the text in a specific area of the page. You could also add fields and functionality to Gantry 5's core Particles, as well as any included in the theme itself.

The key to overriding files is the `/custom` folder within the main theme folder. This folder is where you can put any overrides and additional files that you would like to add to the theme without risking breaking or losing this data during a theme update.

!! We recommend comparing the updated files to your customized ones after performing an update to see if any changes that have been made would be beneficial to use in your override.

## Customizing Theme Files

In this example, we are going to add a field to the **Section** settings in the **Layout** administrative panel that enables you to use the **Image Picker** to create a background image for a specific section of the site. This change requires two files to be copied over to the `/custom` directory and modified. In this case, we are using the free **Hydrogen** theme for our example.

![Showcase Section - Before](custom_file_1.png?classes=shadow,border)

Pictured above is the **Showcase** section of the site, which features the **Sample Content** particle, included in the **Hydrogen** theme. The particle itself does not define the background image anywhere in its Twig file, and in this case we want to create this capability for each section independent of its particles or positions.

In **Hydrogen** the first thing we want to do is add the **Image Picker** to the options for each section. This will enable the user to define the background image for the section.

[ui-tabs position="top-left" active="0"]
[ui-tab title="Joomla"]

To do this, you will need to create an override of the `section.yaml` found in `/media/gantry5/engines/nucleus/admin/blueprints/layout/`. To create the override, you will need to copy this file and paste it to `/TEMPLATE_DIR/custom/admin/blueprints/layout/`.

[/ui-tab]
[ui-tab title="WordPress"]

To do this, you will need to create an override of the `section.yaml` found in `ROOT/wp-content/plugins/gantry5/engines/nucleus/admin/blueprints/layout/`. To create the override, you will need to copy this file and paste it to `THEME_DIR/custom/engine/admin/blueprints/layout/`.

[/ui-tab]
[ui-tab title="Grav"]

To do this, you will need to create an override of the `section.yaml` found in `ROOT/user/plugins/gantry5/engines/nucleus/admin/blueprints/layout/`. To create the override, you will need to copy this file and paste it to `THEME_DIR/custom/engine/admin/blueprints/layout/`.

[/ui-tab]
[/ui-tabs]


Here is what the file looks like before our changes:

```yaml
name: Section
description: Layout section.
type: section

form:
  fields:
    boxed:
      type: select.selectize
      label: Layout
      description: Select the Layout container behavior. 'Inherit' refers to Page Settings.
      isset: true
      selectize:
        allowEmptyOption: true
      options:
        '': Inherit
        0: Fullwidth (Boxed Content)
        2: Fullwidth (Flushed Content)
        1: Boxed
        3: Remove Container

    class:
      type: input.selectize
      label: CSS Classes
      description: Enter CSS class names.
      default:

    extra:
      type: collection.keyvalue
      label: Tag Attributes
      description: Extra Tag attributes.
      key_placeholder: Key (data-*, style, ...)
      value_placeholder: Value
      exclude: ['id', 'class']
```

To add the background option, we just need to create an `input.imagepicker` field. You can see our edited copy of the file below.

```yaml
name: Section
description: Layout section.
type: section

form:
  fields:
    boxed:
      type: select.selectize
      label: Layout
      description: Select the Layout container behavior. 'Inherit' refers to Page Settings.
      isset: true
      selectize:
        allowEmptyOption: true
      options:
        '': Inherit
        0: Fullwidth (Boxed Content)
        2: Fullwidth (Flushed Content)
        1: Boxed
        3: Remove Container

    class:
      type: input.selectize
      label: CSS Classes
      description: Enter CSS class names.
      default:

    extra:
      type: collection.keyvalue
      label: Tag Attributes
      description: Extra Tag attributes.
      key_placeholder: Key (data-*, style, ...)
      value_placeholder: Value
      exclude: ['id', 'class']

    background:
      type: input.imagepicker
      label: Background
```

[ui-tabs position="top-left" active="0"]
[ui-tab title="Joomla"]

The next thing we need to do is create an override of our existing `section.html.twig` file. This file is located in `/media/gantry5/engines/nucleus/templates/layout`. To create an override for this file which won't be overwritten during a theme update, you will want to copy it and paste it in `/templates/TEMPLATE_DIR/custom/engine/templates/layout`. You will need to create the directory path if it doesn't already exist.

[/ui-tab]
[ui-tab title="WordPress"]

The next thing we need to do is create an override of our existing `section.html.twig` file. This file is located in `ROOT/wp-content/plugins/gantry5/engines/nucleus/templates/layout`. To create an override for this file which won't be overwritten during a theme update, you will want to copy it and paste it in `THEME_DIR/custom/engine/templates/layout`. You will need to create the directory path if it doesn't already exist.

[/ui-tab]
[ui-tab title="Grav"]

The next thing we need to do is create an override of our existing `section.html.twig` file. This file is located in `ROOT/user/plugins/gantry5/engines/nucleus/templates/layout`. To create an override for this file which won't be overwritten during a theme update, you will want to copy it and paste it in `THEME_DIR/custom/engine/templates/layout`. You will need to create the directory path if it doesn't already exist.

[/ui-tab]
[/ui-tabs]

Here is the `section.html.twig` file prior to our changes:

```twig
{% set tag_type = segment.subtype|default('section') %}
{% set attr_id = segment.attributes.id ?: 'g-' ~ segment.id %}
{% set attr_class = segment.attributes.class %}
{% set attr_extra = '' %}
{% set boxed = segment.attributes.boxed %}
{% if boxed is not null %}
    {% set boxed = boxed|trim == '' ? gantry.config.page.body.layout.sections : boxed %}
{% endif %}

{% if segment.attributes.extra %}
    {% for attributes in segment.attributes.extra %}
        {% for key, value in attributes %}
        {% set attr_extra = attr_extra ~ ' ' ~ key|e ~ '="' ~ value|e('html_attr') ~ '"' %}
        {% endfor %}
    {% endfor %}
{% endif %}

{% set html %}
    {% if segment.children %}
        {% for segment in segments %}
            {% include '@nucleus/layout/' ~ segment.type ~ '.html.twig' with { 'segments':segment.children } %}
        {% endfor %}
    {% endif %}
{% endset %}

{% if html|trim %}
    {% if boxed is not null and (boxed == 0 or boxed == 2) %}
        {% set html %}
        <div class="g-container">{{ html|raw }}</div>
        {% endset %}
    {% endif %}

    {% set html %}
    {% if boxed == 2 %}{% set attr_class = attr_class ~ ' g-flushed' %}{% endif %}
    {% set attr_class = attr_class ? ' class="' ~ attr_class|trim ~ '"' %}
    <{{ tag_type }} id="{{ attr_id }}"{{ attr_class|raw }}{{ attr_extra|raw }}>
        {{ html|raw }}
    </{{ tag_type }}>
    {% endset %}

    {% if boxed == 1 %}
    <div class="g-container">{{ html|raw }}</div>
    {% else %}
    {{ html|raw }}
    {% endif %}
{% endif %}
```

What we would like to do for this example is add a div that surrounds the HTML, adding the background the user has added from the **Image Picker** field in the **Section** settings. In order to do this, we have to point the **div** to the attribute set in the `section.` file.

Here is the same file with the changes:



```twig
{% set tag_type = segment.subtype|default('section') %}
{% set attr_id = segment.attributes.id ?: 'g-' ~ segment.id %}
{% set attr_class = segment.attributes.class %}
{% set attr_background = segment.attributes.background %}
{% set attr_extra = '' %}
{% set boxed = segment.attributes.boxed %}
{% if boxed is not null %}
    {% set boxed = boxed|trim == '' ? gantry.config.page.body.layout.sections : boxed %}
{% endif %}

{% if segment.attributes.extra %}
    {% for attributes in segment.attributes.extra %}
        {% for key, value in attributes %}
        {% set attr_extra = attr_extra ~ ' ' ~ key|e ~ '="' ~ value|e('html_attr') ~ '"' %}
        {% endfor %}
    {% endfor %}
{% endif %}

{% set html %}
    {% if segment.children %}
        {% for segment in segments %}
            {% include '@nucleus/layout/' ~ segment.type ~ '.html.twig' with { 'segments':segment.children } %}
        {% endfor %}
    {% endif %}
{% endset %}

{% if html|trim %}
    {% if boxed is not null and (boxed == 0 or boxed == 2) %}
        {% set html %}
        <div class="g-container">{{ html|raw }}</div>
        {% endset %}
    {% endif %}

    {% set html %}
    {% if boxed == 2 %}{% set attr_class = attr_class ~ ' g-flushed' %}{% endif %}
    {% set attr_class = attr_class ? ' class="' ~ attr_class|trim ~ '"' %}
    <{{ tag_type }} id="{{ attr_id }}"{{ attr_class|raw }}{{ attr_extra|raw }}>
    {% if attr_background %}<div class="section-background" style="background-image: url({{ url(attr_background) }})">{% endif %}
        {{ html|raw }}
    {% if attr_background %}</div>{% endif %}
    </{{ tag_type }}>
    {% endset %}

    {% if boxed == 1 %}
    <div class="g-container">{{ html|raw }}</div>
    {% else %}
    {{ html|raw }}
    {% endif %}
{% endif %}
```


![Showcase Section - Before](custom_file_2.png?classes=shadow,border)

Once you have made these changes, you should now be able to access the **Gantry Administrator** and add an image to your section, save the change, and check it out on your site.

![Showcase Section - Before](custom_file_3.png?classes=shadow,border)

## Theme Directory Matrix

Here is a quick reference to help you navigate the directory structure of a Gantry 5 theme, as well as where you can put your custom modifications in the `custom` directory.

### Template Files

! Any files located in subdirectories of the directories listed below would also be added to the custom directory in order to override a file stored within. For example, `scss/hydrogen/_core.scss` would be copied and modified in the `custom` directory as `custom/scss/hydrogen/_core.scss`.

[ui-tabs position="top-left" active="0"]
[ui-tab title="Joomla"]

The first table of folders is rooted in the `ROOT/templates/TEMPLATE_DIR/` directory where `ROOT` is the root directory of the Joomla site and `TEMPLATE_DIR` is the template directory for the Gantry-powered template. It contains files specific to the theme.

| Directory         | Description                                                                                                                       |
| :------           | :-----                                                                                                                            |
| admin             | Contains an `images` directory including theme images for use in the Gantry administrator as well as any additional admin assets. |
| blueprints        | Contains the style setting fields and other abstract elements necessary for the theme.                                            |
| blueprints/styles | Contains YAML files establishing fields and settings for configurable style settings that appear in the **Styles** admin panel.   |
| fonts             | Contains custom fonts used by the theme.                                                                                          |
| gantry            | Contains `presets.yaml` which contains preset Style settings. Also contains `theme.yaml` which sets the **About** admin panel.    |
| language          | Contains language files used in Gantry.                                                                                           |
| layouts           | Contains **YAML** files which make up the settings for the **Layout** presets found in the **Layout Manager**.                    |
| particles         | Contains custom **Particles** or overriding Particles to add or modify functionality of the theme.                                |
| scss              | Contains all the non platform specific SCSS files for the theme and is broken into several subdirectories and files.              |
| html              | Like you would normally do in any template, in the `html` folder you can put any override for the components / modules. For instance `html/com_content/article/default.php`. [more details](https://docs.joomla.org/How_to_override_the_output_from_the_Joomla!_core)              |

[/ui-tab]
[ui-tab title="WordPress"]

The first table of folders is rooted in the `ROOT/wp-content/themes/THEME_DIR/` directory where `ROOT` is the root directory of the WordPress site and `THEME_DIR` is the template directory for the Gantry-powered template. It contains files specific to the theme.

| Directory         | Description                                                                                                                       |
| :------           | :-----                                                                                                                            |
| admin             | Contains an `images` directory including theme images for use in the Gantry administrator as well as any additional admin assets. |
| blueprints        | Contains the style setting fields and other abstract elements necessary for the theme.                                            |
| blueprints/styles | Contains YAML files establishing fields and settings for configurable style settings that appear in the **Styles** admin panel.   |
| fonts             | Contains custom fonts used by the theme.                                                                                          |
| gantry            | Contains `presets.yaml` which contains preset Style settings. Also contains `theme.yaml` which sets the **About** admin panel.    |
| language          | Contains language files used in Gantry.                                                                                           |
| layouts           | Contains **YAML** files which make up the settings for the **Layout** presets found in the **Layout Manager**.                    |
| particles         | Contains custom **Particles** or overriding Particles to add or modify functionality of the theme.                                |
| scss              | Contains all the non platform specific SCSS files for the theme and is broken into several subdirectories and files.              |
| views             | Like you would normally do in any theme, in the `views` folder you can put any override for the plugins.                       |

[/ui-tab]
[ui-tab title="Grav"]

The first table of folders is rooted in the `ROOT/user/themes/THEME_DIR/` directory where `ROOT` is the root directory of the Grav site and `THEME_DIR` is the theme directory for the Gantry-powered template. It contains files specific to the theme.

| Directory         | Description                                                                                                                       |
| :------           | :-----                                                                                                                            |
| admin             | Contains an `images` directory including theme images for use in the Gantry administrator as well as any additional admin assets. |
| blueprints        | Contains the style setting fields and other abstract elements necessary for the theme.                                            |
| blueprints/styles | Contains YAML files establishing fields and settings for configurable style settings that appear in the **Styles** admin panel.   |
| fonts             | Contains custom fonts used by the theme.                                                                                          |
| gantry            | Contains `presets.yaml` which contains preset Style settings. Also contains `theme.yaml` which sets the **About** admin panel.    |
| language          | Contains language files used in Gantry.                                                                                           |
| layouts           | Contains **YAML** files which make up the settings for the **Layout** presets found in the **Layout Manager**.                    |
| particles         | Contains custom **Particles** or overriding Particles to add or modify functionality of the theme.                                |
| scss              | Contains all the non platform specific SCSS files for the theme and is broken into several subdirectories and files.              |
| views             | Like you would normally do in any theme, in the `views` folder you can put any override for the plugins.                          |

[/ui-tab]
[/ui-tabs]

### Engine Files

[ui-tabs position="top-left" active="0"]
[ui-tab title="Joomla"]

The next batch is specific to Gantry, and not the theme. These folders are found in the `ROOT/media/gantry5` directory, which contains data used by the framework, independent of the theme.

The `ROOT/media/gantry5/assets/` directory contains third-party assets used by Gantry 5. This includes [Font Awesome's](http://fortawesome.github.io/Font-Awesome/) font package, Gantry logo images, etc.

The following directories are rooted in the `ROOT/media/gantry5/engines/nucleus` directory. This directory houses files that belong to the **Nucleus** engine, which is the core of Gantry 5's layout system. It provides core CSS, layout control, core files for theme creation, etc.

When creating custom copies of these files, you will want to put them in `TEMPLATE_DIR/custom/engine/` to indicate that these are engine-specific directories and not part of the theme-specific data.

| Directory          |
| :------            |
| admin/blueprints   |
| layouts            |
| particles          |
| scss               |
| templates          |
| templates/content  |
| templates/partials |
| twig               |
| twig/partials      |

[/ui-tab]
[ui-tab title="WordPress"]

The next batch is specific to Gantry, and not the theme. These folders are found in the `ROOT/wp-content/plugins/gantry5` directory, which contains data used by the framework, independent of the theme.

The `ROOT/wp-content/plugins/gantry5/assets/` directory contains third-party assets used by Gantry 5. This includes [Font Awesome's](http://fortawesome.github.io/Font-Awesome/) font package, Gantry logo images, etc.

The following directories are rooted in the `ROOT/wp-content/plugins/gantry5/engines/nucleus` directory. This directory houses files that belong to the **Nucleus** engine, which is the core of Gantry 5's layout system. It provides core CSS, layout control, core files for theme creation, etc.

When creating custom copies of these files, you will want to put them in `THEME_DIR/custom/engine/` to indicate that these are engine-specific directories and not part of the theme-specific data.

| Directory          |
| :------            |
| admin/blueprints   |
| layouts            |
| particles          |
| scss               |
| templates          |
| templates/content  |
| templates/partials |
| twig               |
| twig/partials      |

[/ui-tab]
[ui-tab title="Grav"]

The next batch is specific to Gantry, and not the theme. These folders are found in the `ROOT/user/plugins/gantry5` directory, which contains data used by the framework, independent of the theme.

The `ROOT/user/plugins/gantry5/assets/` directory contains third-party assets used by Gantry 5. This includes [Font Awesome's](http://fortawesome.github.io/Font-Awesome/) font package, Gantry logo images, etc.

The following directories are rooted in the `ROOT/user/plugins/gantry5/engines/nucleus` directory. This directory houses files that belong to the **Nucleus** engine, which is the core of Gantry 5's layout system. It provides core CSS, layout control, core files for theme creation, etc.

When creating custom copies of these files, you will want to put them in `THEME_DIR/custom/engine/` to indicate that these are engine-specific directories and not part of the theme-specific data.

| Directory          |
| :------            |
| admin/blueprints   |
| layouts            |
| particles          |
| scss               |
| templates          |
| templates/content  |
| templates/partials |
| twig               |
| twig/partials      |

[/ui-tab]
[/ui-tabs]

### Administrator Files

[ui-tabs position="top-left" active="0"]
[ui-tab title="Joomla"]

The Gantry Administrator's component files are located in the `ROOT/administrator/components/com_gantry5/` directory. These files control how the Gantry admin looks, its panels, and what data these panels display. Virtually everything that is not specifically controlled by Joomla can be modified from the template.

!! Overriding these files is an advanced action and should only be done if you are absolutely certain that you need to. The vast majority of users will not need to modify any of these files.

Custom copies of these files will be placed in `TEMPLATE_DIR/custom/admin` with the same directory paths as found in the main `com_gantry5` directory. For example, `ROOT/administrator/components/com_gantry5/templates/pages/about/about.html.twig` would be copied to `TEMPLATE_DIR/custom/admin/templates/pages/about/about.html.twig`.

[/ui-tab]
[ui-tab title="WordPress"]

The Gantry Administrator's component files are located in the `ROOT/wp-content/plugins/gantry5/admin/` directory. These files control how the Gantry admin looks, its panels, and what data these panels display. Virtually everything that is not specifically controlled by WordPress can be modified from the template.

!! Overriding these files is an advanced action and should only be done if you are absolutely certain that you need to. The vast majority of users will not need to modify any of these files.

Custom copies of these files will be placed in `THEME_DIR/custom/admin` with the same directory paths as found in the main `gantry5` directory. For example, `ROOT/wp-content/plugins/gantry5/admin/templates/pages/about/about.html.twig` would be copied to `THEME_DIR/custom/admin/templates/pages/about/about.html.twig`.

[/ui-tab]
[ui-tab title="Grav"]

The Gantry Administrator's component files are located in the `ROOT/user/plugins/gantry5/admin/` directory. These files control how the Gantry admin looks, its panels, and what data these panels display. Virtually everything that is not specifically controlled by Grav can be modified from the template.

!! Overriding these files is an advanced action and should only be done if you are absolutely certain that you need to. The vast majority of users will not need to modify any of these files.

Custom copies of these files will be placed in `THEME_DIR/custom/admin` with the same directory paths as found in the main `gantry5` directory. For example, `ROOT/user/plugins/gantry5/admin/templates/pages/about/about.html.twig` would be copied to `THEME_DIR/custom/admin/templates/pages/about/about.html.twig`.

[/ui-tab]
[/ui-tabs]


