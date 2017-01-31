---
title: Per-Browser Specific Control
taxonomy:
    category: docs
    tag: [gantry4]
---

The Gantry Framework has the ability to load different CSS files based upon which browser and operating system is viewing the template. This allows complete control over how a site is displayed to even the pickiest browser!

Every CSS file can be customized for different browser and operating system combinations with Gantry Framework. This is handy for targeting specific browser issues, such as IE6 compatibility. Each file is automatically loaded by the framework based on which browser/operating system is viewing the template.


How It Works
------------
Gantry looks for filenames based on the following mini-legend:

* __file__: basename of css
* __browser__: [firefox, chrome, safari, opera, iphone (works for both iphone/ipod), ipad, android, unknown]
* __engine__: [trident, gecko, webkit, presto, unknown]
* __longver__: the real long version of the browser (example, IE => 9.0, Safari 5 => 5.0.4, Firefox 5 => 5.0.0.20)
* __shortver__: the major version of the browser (example, if i'm running Safari 5.0.4 would be 5, if i'm running IE 9.0, would be 9)
* __platform__: [iphone (worths for both iphone/ipod), ipad, android, mobile, win, mac, linux, unknown]


Possible Combinations
---------------------
* file.css
* file-**browser**.css
* file-**engine**.css
* file-**platform**.css
* file-**browser**-**platform**.css
* file-browser**shortver**.css [no space between the two]
* file-browser**longver**.css
* file-browser**shortver**-platform.css
* file-browser**longver**-platform.css


Real-World Usage
----------------
Browser-specific control works for **CSS files** only. For Gantry to lookup a specific file based on your browser, there must be a reference to the base CSS file using the Gantry `$gantry->addStyle();`, or the output CSS file of the `$gantry->addLess();` method. In pre-Gantry 4 templates, there was always a reference to load `template.css` so you could use `template-ie8.css` to target **IE8** or `template-chrome-win.css` if you needed to target **chrome on windows** file.

In Gantry 4 templates, there is a special case that enables a custom CSS file to be manually created: `[TEMPLATE]/css/[TEMPLATE]-custom.css`. This file, if found, will automatically be added. You can also use per-browser options on this file, for example `[TEMPLATE]/css/[TEMPLATE]-custom-trident.css`.


Real-World Example
------------------
In the **default gantry template** there is a `global.less` file that is compiled and out to a `master.css` file. If you were using Chrome v21 on a Mac, Gantry would automatically look for the following files in your `[TEMPLATE]/css/` folder:

* master.css
* master-chrome.css
* master-mac.css
* master-webkit.css
* master-chrome-mac.css
* master-chrome21.css
* master-chrome21.0.1180.82.css
* master-chrome21-mac.css
* master-chrome21.0.1180.82-mac.css
