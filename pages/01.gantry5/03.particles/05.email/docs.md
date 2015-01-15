---
title: Email Subscription
taxonomy:
    category: docs
gravui:
    enabled: true
    tabs: true
process:
    twig: true
---

![Email](email.png)

The **Email Subscription** particle enables display of the Feedburner and MailChimp email subscription option, including the associated URIs. It can be used anywhere in the site, and offers the users a quick and easy way to subscribe to an email newsletter. 

Settings
-----

{% set tab1 %}

![Settings](email_j.png)

| Setting |             Description             |
| :------ | :---------------------------------- |
| Class   | Sets the CSS class for the particle |

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis aliquam elit. Sed vulputate, turpis a ultrices feugiat, sem dui cursus tellus, eget semper risus nisl non mi. Duis eu urna maximus, tempor est eu, commodo massa. Nulla dolor lorem, molestie iaculis ante ac, semper fermentum erat. Morbi vestibulum dictum nunc vitae viverra. Duis sed dapibus odio. Sed fringilla enim quis pharetra malesuada. In dapibus elit vitae imperdiet hendrerit. Quisque eu ornare erat. Pellentesque vitae arcu id metus ultricies suscipit quis porta ante.

{% endset %}
{% set tab2 %}

![Settings](email_wp.png)

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
