---
title: Using the Multicheckbox field
taxonomy:
    category: docs
    tag: [gantry5]
---

Since Gantry 5.3 there's a new `multicheckbox` field that you can use as an alternative to `input.selectize`.

The `input.multicheckbox` will display as a list of checkboxes, one on top of the other, that can be selected. The value of the selected checkboxes will be stored as string comma separated.

![Multicheckbox](multicheckbox.png?classes=shadow,border)

## Adding the Multicheckbox to Your Site

The Multicheckbox is a Gantry 5 input field. If you want to add it to your theme or particle, you would do so by assigning the field type as `input.multicheckbox` in the associated YAML file. 

Here is an example of how this would look in the YAML file of a section or a theme. In this example, we will create an Example particle.

We will start by creating and placing the YAML in `<theme>/custom/particles/example.yaml`.

```yaml
name: Example
description: Demonstration of Multicheckbox
icon: fa-check-square-o

form:
  fields:

    title:
      type: input.text
      label: Title
      default: What's your favorite food?

    food:
      type: input.multicheckbox
      label: Favorite Food
      options:
        pasta: Pasta
        pizza: Pizza
        gelato: Gelato
        broccoli: Broccoli
```

Then we will create and place the TWIG file in `<theme>/custom/particles/example.html.twig` with this content:

```twig
{% extends '@nucleus/partials/particle.html.twig' %}

{% block particle %}
    {% set foods = particle.food|split(',') %}

    <h2>{{ particle.title }}</h2>
    <ul>
        {% for food in foods %}
        <li>{{ food }}</li>
        {% endfor %}
    </ul>
{% endblock %}
```

Now when you add this Example particle in your Layout and set it up, it will look like the following:

![Example](example.png?classes=shadow,border)

And on the frontend it will render as:

![Output](output.png?classes=shadow,border)

