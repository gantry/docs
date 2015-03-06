---
title: System Requirements
taxonomy:
    category: docs
    tag: [gantry4]
gravui:
    enabled: true
    tabs: true
process:
    twig: true
---

The Gantry framework does have some system requirements. Listed below are those requirements broken down into their distinct groups:

Joomla Requirements
-------------------

{% set tab1 %}

**Joomla 2.5, 3.x**

It is strongly recommended that you always use the latest stable version of Joomla to ensure all known bugs and security issues are addressed. At the time this document was written, **3.3** is the latest stable version of Joomla. We encourage you to update your Joomla install if you are running anything less than this version.

Joomla **2.5** is supported in Gantry 4, however it has been deprecated by Joomla and no longer officially supported. We maintain a Joomla 1.5 version of Gantry, but only in a maintenance mode.

{% endset %}
{% set tab2 %}

**WordPress 3.5.1+**

It is strongly recommended that you always use the latest stable version of WordPress to ensure all known bugs and security issues are addressed. At the time this document was written, **4.0.1** is the latest stable version of WordPress. We encourage you to update your WordPress install if you are running anything less than this version.

{% endset %}

{{ gravui_tabs({'Joomla':tab1, 'WordPress':tab2}) }}


Server Requirements
-------------------

We try to ensure that Gantry templates (and specifically the Gantry Library) will work with any modern and secure server environment. The recommended minimum requirements are:

* PHP 5.2.17+ (5.3+ recommended)
* MySQL 3.23 (5+ recommended)
* Apache 1.3 (2.2+ recommended)
* mod_mysql
* mod_xml
* mod_zlib


Browser Requirements
--------------------

The back-end administration requirements of Gantry in order of preference are as follows:

* Firefox 4+
* Safari 5+
* Google Chrome 10+
* Opera 10+
* Internet Explorer 8+

>> NOTE: For Gantry administration, please note that Internet Explorer 7 -- and even Internet Explorer 8 -- have very slow JavaScript implementations and cannot be recommended.

Development Environments
------------------------
Local development is the preferred method of working with any Gantry based template as it allows for the fastest development iterations due to flat out performance and convenience. The following is a list of suitable server setups that can be installed locally on your computer:


|                Mac OS X               |                Windows                |                 Linux                 |
| :------------------------------------ | :------------------------------------ | :------------------------------------ |
| [MAMP & MAMP Pro][mamp]               | [EasyPHP][easyphp]                    | [LAMP Bundle][lamp]                   |
| [XAMPP for Mac OS X][xampm]           | [WampServer][wamp]                    | [XAMPP for Linux][xampl]              |
| [Zend Server Community Edition][zend] | [Zend Server Community Edition][zend] | [Zend Server Community Edition][zend] |
| [Mac Port][macport]                   | [XAMPP for Windows][xampw]            |                                       |



[mamp]: http://www.mamp.info/
[xampm]: http://www.apachefriends.org/en/xampp-macosx.html
[xampw]: http://www.apachefriends.org/en/xampp-windows.html
[xampl]: http://www.apachefriends.org/en/xampp-linux.html
[zend]: http://www.zend.com/en/products/server-ce/
[macport]: http://www.techiecorner.com/174/how-to-install-apache-php-mysql-with-macport-in-mac-os-x/
[easyphp]: http://www.easyphp.org/
[lamp]: http://en.wikipedia.org/wiki/LAMP_(software_bundle)
[wamp]: http://www.wampserver.com/en/
