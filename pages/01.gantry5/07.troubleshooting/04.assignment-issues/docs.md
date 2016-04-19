---
title: Assignments Not Appearing on Front End
taxonomy:
    category: docs
    tag: [gantry5]
---

In general, assigning an outline to a specific menu item (or page, category, etc.) should make tie that outline to the assigned pages on the front end without issue. However, some third-party plugins (WordPress) and/or system plugins (Joomla) can interfere with these assignments.

So, if you have assigned an outline to a specific area of your site, and aren't seeing this reflected on the front end, a great place to start troubleshooting is to make sure you aren't running a third-party plugin that could be interfering with how Joomla (and ultimately Gantry) handle page assignments.

One common plugin we've seen this issue with is `System - JCK Modal`. If you believe this might be the problem, disable it and refresh your desired page.