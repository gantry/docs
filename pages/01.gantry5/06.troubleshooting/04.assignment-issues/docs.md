---
title: Assignments Not Appearing on Front End
taxonomy:
    category: docs
    tag: [gantry5]
---

In general, assigning an outline to a specific menu item (or page, category, etc.) should make tie that outline to the assigned pages on the front end without issue. However, some third-party plugins (WordPress) and/or system plugins (Joomla) can interfere with these assignments.

So, if you have assigned an outline to a specific area of your site, and aren't seeing this reflected on the front end, a great place to start troubleshooting is to make sure you aren't running a third-party plugin that could be interfering with how Joomla (and ultimately Gantry) handle page assignments.

Some common Joomla system plugins we've seen this issue with are:

`System - JCK Modal`

`Hikashop - Geo Location`

`Delete My Account`

`System - obSocialSubmit`

`System - Nooku Framework`

`System - JoomlaTools Framework (only the version found in Ohanah component)`

`System - Jarvis Framework - plg_system_jarvis`

`System - solidres`

`System - Helix Framework`

`NS FontAwesome Pro`

`System - ValidationAry`

`CacheControl`

`System - Shack Error Notify`

`NS FontAwesome Pro`

If you believe this might be the problem, disable the plugin and refresh your desired page.
