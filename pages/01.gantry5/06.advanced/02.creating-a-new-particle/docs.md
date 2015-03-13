---
title: Creating a New Particle
taxonomy:
    category: docs
    tag: [gantry5]
gravui:
    enabled: true
    tabs: true
process:
    twig: true
---

Creating a new **Particle** in Gantry5 is a pretty straightforward process. You will need a text editor, as you will be **creating two files** for the Particle.

For the interest of this guide, we will create a simple Particle that enables you to add custom HTML to your site. This Particle would be a basic substitute for the **Custom HTML** module in Joomla or **Text** widget in WordPress.

Creating the YAML File
-----

While creating your Particle, it may be easier to start with the YAML file as this acts as the blueprint for the particle. The Twig file uses this YAML file to pull information, settings, and find out which fields are being used in the administrator for variables.

{% set tab1 %}

You will want to create this file in your template's folder structure by navigating to `(template directory)/common/particles` and creating a file with a name like `custom_html.yaml`. You can replace `custom_html` with anything you would like. This just happens to be the name we're using for this particular particle. This file name will be referred to later on.

{% endset %}
{% set tab2 %}

Coming soon...

{% endset %}
{{ gravui_tabs({'Joomla':tab1, 'WordPress':tab2}) }}

Here is the body of our Custom HTML YAML file:

```yaml
name: Custom HTML
description: Displays Custom HTML on Frontend
type: particle

form:
  fields:
    enabled:
      type: input.checkbox
      label: Enabled
      description: Globally enable to the particles.
      default: true

    content:
      type: textarea.textarea
      label: Text / HTML
      description: Create or modify custom HTML.

    title:
      type: input.text
      label: Title
      description: Customize the section title text.    

    css.class:
      type: input.text
      label: Class
      description: CSS class name for the particle.
```

This YAML is made up of two main parts. First, the head of the file which sets the **Name**, **Description**, and **Type**. The **Name** is what appears in the administrator as the title of the Particle in the **Settings** and **Layout Manager** panels. The **Type** being **Particle** tells Gantry that this YAML file is being used to create a **Particle**.

The second section sets the forms/fields that appear in the administrator, as well as the default settings. These fields are what appear in the administrator and are accessible to your site managers. They give them the ability to do things like set custom text, titles, and toggle settings.

The first field block (`enabled`) is required. It tells Gantry to put a switch on the backend that makes it possible to enable/disable the Particle.

The rest of the fields here, `content`, `title`, and `css.class` provide fields site managers can use to configure the Particle without having to edit any files manually.

Here is a breakdown of the settings used in the example above and how they affect the file:

| Setting     | Description                                                                                                                                             |
| :-----      | :-----                                                                                                                                                  |
| Type        | Sets the type of field. This determines if your user will see a text field, checkbox, toggle, or some other input type.                                 |
| Label       | This label appears on the backend next to the field, letting the user know what it is/does.                                                             |
| Description | This field sets the tooltip that appears on hover over the Label. It's meant as a reminder for the user.                                                |
| Default     | This sets the default that appears in the field. If it's a text field, you would enter text. If it's a checkbox, you would set it as `true` or `false`. |

Creating the Twig File
-----

The next file you will need to create will sit in the same directory as the YAML file. We recommend naming it the same way as you did the YAML file, but in the (`name.html.twig`) format. Ending the file name with `html.twig` tells Gantry that this is a Twig file, which is basically the template of the file. It controls how Particles are rendered, states the HTML, and determines how variables defined in the YAML are used.

Here is the content of the `custom_html.html.twig` file:

{% verbatim %}

```twig
{% extends '@nucleus/partials/particle.html.twig' %}

{% block particle %}
<div class="custom_html {{ particle.css.class }}">
    <h2>{{ particle.header|raw }}</h2>
    {{ particle.content|raw }}
</div>
{% endblock %}
```

This is a very basic example of a Twig file, containing three parts.

The first part (`{% extends '@nucleus/partials/particle.html.twig' %}`) defines the Twig file as being for a Particle. This is a must-have element for all Particle Twig Files.

The second part is the **Block** wrapper. `{% block particle %}` and `{% endblock %}` surround the block that contains the Particle. This is also a required component as your Particle will not render correctly without it.

The third part is the meat and potatoes of the Particle. This is the body used to determine how a Particle will look and uses the information set in the YAML. In our example, we set the **div class** to `g-custom_html`. This class tells Gantry that this twig file is working with information from the **custom_html.yaml** companion file.

The bits that are placed between curly brackets such as `{{ particle.header|raw }}` pull information from the fields set in the YAML and insert them into the Twig for rendering on the front end.

>>> The `|raw` that appears after the Particle field name in our example is a Twig filter. You can find a list of filters [here](http://twig.sensiolabs.org/doc/filters/index.html).

{% endverbatim %}

Once you have created these files, you should see the Particle appear in the **Settings** and **Layout Manager** administrative panels in the Gantry5 administrator.