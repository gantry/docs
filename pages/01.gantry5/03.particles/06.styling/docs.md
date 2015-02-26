---
title: Non-visible
taxonomy:
    category: docs
gravui:
    enabled: true
    tabs: true
process:
    twig: true
---

![Non-visible](nonvisible.png)

These particles do not appear directly on the frontend, but do serve an important purpose. They can be assigned on a per-page basis, or as a default which automatically applies to all of the pages on the site.

For all intents and purposes, non-visible particles such as **Accent Colors**, **Google Analytics**, and **Secondary Colors** add scripting to the page which add or modify the page's scripting during load. This is useful for basic styling such as coloring, and analytics tracking.

Non-visible particles can be assigned in the **Layout Manager** using a special line set up for non-visual particles. This is typically found at the bottom of the **Layout Manager** and non-visible particles can be dragged into place here in much the same way as regular rendered particles would on a visible section.

Google Analytics
-----

![Google Analytics](analytics.png)

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis aliquam elit. Sed vulputate, turpis a ultrices feugiat, sem dui cursus tellus, eget semper risus nisl non mi. Duis eu urna maximus, tempor est eu, commodo massa. Nulla dolor lorem, molestie iaculis ante ac, semper fermentum erat. Morbi vestibulum dictum nunc vitae viverra. Duis sed dapibus odio. Sed fringilla enim quis pharetra malesuada. In dapibus elit vitae imperdiet hendrerit. Quisque eu ornare erat. Pellentesque vitae arcu id metus ultricies suscipit quis porta ante.

{% set tab1 %}

![Settings](styling_j.png)

| Setting |             Description             |
| :------ | :---------------------------------- |
| Class   | Sets the CSS class for the particle |

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis aliquam elit. Sed vulputate, turpis a ultrices feugiat, sem dui cursus tellus, eget semper risus nisl non mi. Duis eu urna maximus, tempor est eu, commodo massa. Nulla dolor lorem, molestie iaculis ante ac, semper fermentum erat. Morbi vestibulum dictum nunc vitae viverra. Duis sed dapibus odio. Sed fringilla enim quis pharetra malesuada. In dapibus elit vitae imperdiet hendrerit. Quisque eu ornare erat. Pellentesque vitae arcu id metus ultricies suscipit quis porta ante.

{% endset %}
{% set tab2 %}

![Settings](styling_wp.png)

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

