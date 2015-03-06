---
title: Menu Editor
taxonomy:
    category: docs
    tag: [gantry5]
gravui:
    enabled: true
    tabs: true
process:
    twig: true
---

![Menu](menu.png)

The **Menu Editor** panel in the **Gantry Admin** is where you can configure and refine menus used on the frontend of the site. This does not totally replace the **Menu Manager** provided by the platform, but gives you the ability to quickly and easily add elements, such as in-line particles, to make a better experience for your users.

The **Menu Editor** administrative panel takes what your CMS' built-in Menu Manager has and enables you to override it. Changes you make in this panel do not in any way affect the way the CMS handles Menu items.

This panel is a Global panel, that is not specific to any Configuration. It's because of this that the changes you make here will affect all instances of a particular menu as it appears in any Configuration.

Selecting a Menu
-----

The first thing you will want to do is select the menu you wish to edit. This can be done using the dropdown located near the top of the **Menu Editor** administrative panel. These menus are sourced from your CMS' **Menu Manager**. If you want to create a new menu, you will need to do so using the Menu Manager for your particular CMS.

When you have done this, simply select it in this dropdown and its contents will load, ready for you to work with.

Menu Settings
-----

![Menu Settings](menu_settings.png)

The menu itself has a settings icon (cogwheel) on the right-hand side which gives you the option to access settings that relate to the menu as a whole. These settings differ between content management systems (CMS).

Menu Item Types
-----

![Menu Item Types](menu_item_types.png)

There are six types of menu items in the **Menu Editor**. Here is a breakdown of what five of these types are, and the role they play in the menu.

| Menu Item Type | Description                                                                                               |
| :-----         | :-----                                                                                                    |
| Link           | A link directs the user to an internal link within the site.                                              |
| Alias          | An alias points to another Menu item.                                                                     |
| External URL   | This type of menu item points directly to an external URL.                                                |
| Separator      | Non-clickable menu item that carries a name, usually used for top-level menus with one or more sub-menus. |
| Heading        | A non-clickable menu item that contains text only.                                                        |

The sixth type of menu item, which is added and configured in the **Menu Editor** are **Particles**. This will allow you to do things like create a block of information that appears in the menu. 

Menu Item Settings
-----

![Menu Item Settings](menu_item_settings.png)

Each menu item has a set of settings which can be configured to meet your needs. These may vary slightly between CMS, but have the same basic functions. You can activate the **Menu Item** settings by selecting the cogwheel icon on the right-hand side of the menu item itself.

Here is a breakdown of these settings, and a what they can do.

| Menu Item Setting | Description                                                                                                                          |
| :-----            | :-----                                                                                                                               |
| Menu Item ID      | This is the ID specific to the menu item.                                                                                            |
| Menu Item Type    | Sets the type of menu item, controlling how it behaves and the role it plays in the menu.                                            |
| Link              | The link (relative or absolute) to which the menu item directs the user upon being selected.                                         |
| Dropdown Style    | Sets the style of dropdown for sub-menu items that appear under this particualr menu item.                                           |
| Target Window     | Sets the target window behavior for the link. This enables you to have links open in new tabs, or in the current one, for example.   |
| Link CSS Style    | Enables you to assign a custom CSS style for the link.                                                                               |
| Link Hover Title  | Gives you the ability to set a different title in when the cursor is hovering over the menu item.                                    |
| Link Image        | Enables you to set an image in the menu item, preferred for photo-heavy visual menus where images serve as backgrounds to each item. |
| Link Icon         | Powered by FontAwesome, this feature gives you the ability to add a vector icon to your menu item as it is displayed in the menu.    |

Once you have set the settings as you prefer, simply select **Apply** to save the changes and close the pop-up.
