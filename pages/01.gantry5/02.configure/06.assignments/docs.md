---
title: Assignments
taxonomy:
    category: docs
gravui:
    enabled: true
    tabs: true
process:
    twig: true
---

![Assignments](assignments.jpeg)

The **Assignments** panel gives you the ability to assign a set of options to specific pages or categories of content. This works a little differently from platform to platform, however the basic function remains the same. As an example, if you create a settings override within the **Gantry Admin** specifically for the home page of your site, you can link that set to the page through this panel.

The **Default** settings are, as the name implies, assigned automatically to all pages assigned in the CMS to the Gantry-powered theme unless assigned to an override using this panel.

Settings
-----

{% set tab1 %}

![Settings](assignments_j.png)

| Setting |             Description             |
| :------ | :---------------------------------- |
| Class   | Sets the CSS class for the particle |

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis aliquam elit. Sed vulputate, turpis a ultrices feugiat, sem dui cursus tellus, eget semper risus nisl non mi. Duis eu urna maximus, tempor est eu, commodo massa. Nulla dolor lorem, molestie iaculis ante ac, semper fermentum erat. Morbi vestibulum dictum nunc vitae viverra. Duis sed dapibus odio. Sed fringilla enim quis pharetra malesuada. In dapibus elit vitae imperdiet hendrerit. Quisque eu ornare erat. Pellentesque vitae arcu id metus ultricies suscipit quis porta ante.

{% endset %}
{% set tab2 %}

![Settings](assignments_wp.png)

| Setting |             Description             |
| :------ | :---------------------------------- |
| Class   | Sets the CSS class for the particle |

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis aliquam elit. Sed vulputate, turpis a ultrices feugiat, sem dui cursus tellus, eget semper risus nisl non mi. Duis eu urna maximus, tempor est eu, commodo massa. Nulla dolor lorem, molestie iaculis ante ac, semper fermentum erat. Morbi vestibulum dictum nunc vitae viverra. Duis sed dapibus odio. Sed fringilla enim quis pharetra malesuada. In dapibus elit vitae imperdiet hendrerit. Quisque eu ornare erat. Pellentesque vitae arcu id metus ultricies suscipit quis porta ante.

{% endset %}
{% set tab3 %}

Coming Soon...

{% endset %}
{% set tab4 %}

Coming Soon...

{% endset %}
{% set tab5 %}

Coming Soon...

{% endset %}
{{ gravui_tabs({'Joomla':tab1, 'WordPress':tab2, 'phpBB':tab3, 'Magento':tab4, 'Grav':tab5}) }}
