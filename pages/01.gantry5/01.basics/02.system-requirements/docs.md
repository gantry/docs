---
title: System Requirements
taxonomy:
    category: docs
    tag: [gantry5]
gravui:
    enabled: true
    tabs: true
process:
    twig: true
---

The Gantry framework does have some system requirements. Listed below are those requirements broken down into their distinct groups:

Requirements
-------------------

{% set tab1 %}

**Joomla 3.4+**

It is strongly recommended that you always use the latest stable version of Joomla to ensure all known bugs and security issues are addressed. At the time this document was written, **3.4.1** is the latest stable version of Joomla. Gantry 5 will only function properly on Joomla 3.4 and higher.

{% endset %}
{% set tab2 %}

**WordPress 4.2**

It is strongly recommended that you always use the latest stable version of WordPress to ensure all known bugs and security issues are addressed. At the time this document was written, **4.2** is the latest stable version of WordPress. We encourage you to update your WordPress install if you are running anything less than this version.

{% endset %}
{{ gravui_tabs({'Joomla':tab1, 'WordPress':tab2}) }}

## Server Requirements

We try to ensure that Gantry templates (and specifically the Gantry Library) will work with any modern and secure server environment. The recommended minimum requirements are:

* PHP 5.4+
    * Curl
    * OpenSSL Libraries
    * Multibyte String Support

>>>>> If you have `xdebug` enabled, make sure the setting ` xdebug.max_nesting_level` is higher than **100**. During our development, we found **256** to be more than enough for us.

## Browser Requirements

The back-end administration requirements of Gantry in order of preference are as follows:

* Google Chrome 41+
* Firefox 36+
* Safari 8+
* Opera 28+
* Internet Explorer 11+ (9, 10 supported at limited capacity)
* Microsoft Edge

>>> Due to the wide range of variances between default browsers on the Android platform, we are unable to accurately test and list all of the possible regional, carrier, and manufacturer software variables. We recommend an updated Chrome browser for Android as it provides a more consistent experience. Support for `flex` is the most likely sign of whether or not a browser will work with Gantry 5.

## Development Environments

Local development is the preferred method of working with any Gantry based template as it allows for the fastest development iterations due to flat out performance and convenience. The following is a list of suitable server setups that can be installed locally on your computer:


| Mac OS X                                                                                              | Windows                                                                     | Linux                                                                       |
| :-----                                                                                                | :-----                                                                      | :-----                                                                      |
| [MAMP & MAMP Pro](http://www.mamp.info/)                                                              | [EasyPHP](http://www.easyphp.org/)                                          | [LAMP Bundle](http://en.wikipedia.org/wiki/LAMP_(software_bundle))          |
| [XAMPP for Mac OS X](http://www.apachefriends.org/en/xampp-macosx.html)                               | [WampServer](http://www.wampserver.com/en/)                                 | [XAMPP for Linux](http://www.apachefriends.org/en/xampp-linux.html)         |
| [Zend Server Community Edition](http://www.zend.com/en/products/server-ce/)                           | [Zend Server Community Edition](http://www.zend.com/en/products/server-ce/) | [Zend Server Community Edition](http://www.zend.com/en/products/server-ce/) |
| [Mac Port](http://www.techiecorner.com/174/how-to-install-apache-php-mysql-with-macport-in-mac-os-x/) | [XAMPP for Windows](http://www.apachefriends.org/en/xampp-windows.html)     |                                                                             |


