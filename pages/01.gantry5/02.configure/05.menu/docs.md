---
title: Menu
taxonomy:
    category: docs
---

![Menu](menu_png)

The **Menu** panel in the **Gantry Admin** is where you can configure and refine menus used on the frontend of the site. This does not totally replace the **Menu Manager** provided by the platform, but gives you the ability to quickly and easily add elements, such as in-line particles, to make a better experience for your users.

Settings
-----

{% set tab1 %}

![Settings](menu_j.png)

| Setting |             Description             |
| :------ | :---------------------------------- |
| Class   | Sets the CSS class for the particle |

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis aliquam elit. Sed vulputate, turpis a ultrices feugiat, sem dui cursus tellus, eget semper risus nisl non mi. Duis eu urna maximus, tempor est eu, commodo massa. Nulla dolor lorem, molestie iaculis ante ac, semper fermentum erat. Morbi vestibulum dictum nunc vitae viverra. Duis sed dapibus odio. Sed fringilla enim quis pharetra malesuada. In dapibus elit vitae imperdiet hendrerit. Quisque eu ornare erat. Pellentesque vitae arcu id metus ultricies suscipit quis porta ante.

{% endset %}
{% set tab2 %}

![Settings](menu_wp.png)

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

