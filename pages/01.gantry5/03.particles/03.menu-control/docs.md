---
title: Menu
taxonomy:
    category: docs
    tag: [gantry5]
---

![Menu](menu.png?classes=shadow,border)

The **Menu** particle gives you the ability to place menus and define how they appear on the frontend.

The Menu particle settings are different than the ones found in the [**Menu** administrative panel](../../configure/menu-editor). Here's a quick breakdown of the life cycle of a menu in Gantry 5.

| Step                                       | Description                                                                                                                                                                                       |
| :-----                                     | :-----                                                                                                                                                                                            |
| CMS **Menu Manager**                       | **Creates and configures** the menu as it appears to the CMS. All menus start here.                                                                                                               |
| Gantry 5 **Menu Administrative Panel**     | Enables you to **rearrange the menu**, and **add extras** such as Particles which are rendered by Gantry. These changes do not affect how the CMS sees the menu. It's basically just an override. |
| Gantry 5 **Settings Administrative Panel** | Sets the default Menu Particle **display settings** for the outline. In the case of a default outline, this becomes the global default for the Menu particle.                                     |
| **Layout Manager** Particle Settings       | Gives you the ability to **override the settings** that appear in the Settings Administrative Panel for that particular Particle. Does not affect any other instance of the Menu Particle.        |

Settings
-----

As menus are handled differently by different platforms, the settings may vary. See the options that appear by default on our main supported platforms below:

[ui-tabs position="top-left" active="0"]
[ui-tab title="Joomla"]

![Settings](menu_settings_j.png?classes=shadow,border)

| Setting     | Description                                                         |
| :------     | :----------------------------------                                 |
| Base Path   | Sets the base path for the menu Particle.                           |
| Menu        | Enter the name of the menu you wish to assign to the Particle.      |
| Start level | Sets the starting level for the menu.                               |
| Max Levels  | Sets the deepest level at which the menu particle renders the menu. |

[/ui-tab]
[ui-tab title="WordPress"]

![Settings](menu_settings_wp.png?classes=shadow,border)

| Setting         | Description                                                                                             |
| :------         | :----------------------------------                                                                     |
| Menu            | Select the menu you wish to assign to the Particle.                                                     |
| Base Item       | Select the menu item to be used as the base for the menu display.                                       |
| Start level     | Sets the starting level for the menu.                                                                   |
| Max Levels      | Sets the deepest level at which the menu particle renders the menu.                                     |
| Render Titles   | Renders the titles and/or tooltips of the menu items for accessibility.                                 |
| Expand on Hover | Allows the user to enable/disable the ability to expand menu items by hover or click only.              |
| Mobile Target   | Check this field if you want this menu to become the target for Mobile Menu and to appear in OffCanvas. |

[/ui-tab]
[ui-tab title="Grav"]

![Settings](menu_settings_grav.png?classes=shadow,border)

| Setting         | Description                                                                                             |
| :------         | :----------------------------------                                                                     |
| Menu            | Select the menu you wish to assign to the Particle.                                                     |
| Base Item       | Select the menu item to be used as the base for the menu display.                                       |
| Start level     | Sets the starting level for the menu.                                                                   |
| Max Levels      | Sets the deepest level at which the menu particle renders the menu.                                     |
| Render Titles   | Renders the titles and/or tooltips of the menu items for accessibility.                                 |
| Expand on Hover | Allows the user to enable/disable the ability to expand menu items by hover or click only.              |
| Mobile Target   | Check this field if you want this menu to become the target for Mobile Menu and to appear in OffCanvas. |

[/ui-tab]
[/ui-tabs]

