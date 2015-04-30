---
title: Creating Custom File Overrides
taxonomy:
    category: docs
    tag: [gantry5]
gravui:
    enabled: true
    tabs: true
process:
    twig: true
---

We have already detailed some of the ways you can use the `TEMPLATE_DIR/custom/` directory to duplicate and customize Particle and theme files, but for the experienced Web developer wanting to go that extra step and customize virtually all aspects of the Gantry-powered theme, we are providing a detailed guide for you.

>>>> This particular guide provides information to help you create custom versions of files that relate to Gantry's core, the theme, and more. This resource is intended for advanced users only and can disrupt or break functionality. In the event that it does, you should be able to **delete** the contents of your `TEMPLATE_DIR/custom/` directory to return to out-of-the-box defaults.

When creating custom files, you should always keep these files in your `custom` directory. If you place overridden files or edit existing ones outside of this directory path, you run the risk of losing these customizations when the Gantry-powered theme, or the Gantry framework, is updated.

>>> In this and other parts of documentation `TEMPLATE_DIR` refers to the primary theme directory. In Joomla using the **Hydrogen** template, the true directory path would be `/templates/g5_hydrogen/` with the user's `custom` directory path being `/templates/g5_hydrogen/custom`.

## Gantry Directory Structure

{% set tab1 %}

Gantry installs 6 extensions. We have detailed these extensions, including example custom file overrides for extensions with files you would be likely to customize, below.

For the sake of simplicity, we have included a quick-reference table below of the information in the sections below.

| Extension                      | Installed Directory Path                | Custom Directory Path                   |
| :-----                         | :-----                                  | :-----                                  |
| Gantry 5 Framework (Library)   | `/libraries/gantry5`                    | `/templates/TEMPLATE_DIR/custom`        |
|                                | `/media/gantry5/assets`                 | `/templates/TEMPLATE_DIR/custom`        |
| Gantry 5 Nucleus Engine (File) | `/media/gantry5/engines/nucleus`        | `/templates/TEMPLATE_DIR/custom/engine` |
| Gantry 5 Themes (Component)    | `/administrator/components/com_gantry5` | `/templates/TEMPLATE_DIR/custom/admin`  |
|                                | `/components/com_gantry5`               | `/templates/TEMPLATE_DIR/custom/admin`  |

>>> PHP classes found in `/libraries/gantry5` can also be overridden, but as they need to be autoloaded, this requires some additional manual intervention involving adding a loader for classes.

### Gantry 5 (Package)

This package includes the Installer / Uninstaller for all the other core extensions. It is the one package you would install and uninstall, with all other packages locked to this one. There are no files in this package we would recommend customizing as it is essential for Gantry's operation and would provide no real benefit through customization.

### Gantry 5 Framework (Library)

This extension contains the framework's code. This code installs to `/libraries/gantry5` and is always available to every Joomla extension. Common asset files are installed to `/media/gantry5/assets`. **All** assets can be overridden in `/templates/TEMPLATE_DIR/custom`.

| Example File                                     | Example Custom File                                       |
| :-----                                           | :-----                                                    |
| `/media/gantry5/assets/css/font-awesome.min.css` | `/templates/TEMPLATE_DIR/custom/css/font-awesome.min.css` |

### Gantry 5 Nucleus Engine (File)

The Nucleus Engine is the rendering engine used internally by the Gantry administrator and all commercial RocketTheme templates. It installs to `/media/gantry5/engines/nucleus` and all of these files can be customized in `/templates/TEMPLATE_DIR/custom/engine`.

| Example File                                              | Example Custom File                                              |
| :-----                                                    | :-----                                                           |
| `/media/gantry5/engines/nucleus/templates/page.html.twig` | `/templates/TEMPLATE_DIR/custom/engine/templates/page.html.twig` |

### Gantry 5 Themes (Component)

This is the Gantry theme manager within the Joomla administrator. It is also used in the front end for custom page views. It is installed to both `/administrator/components/com_gantry5` and `/components/com_gantry5`. Gantry-specific administration files can be overridden in `/templates/TEMPLATE_DIR/custom/admin`.

| Example File                                                                  | Example Custom File                                                          |
| :-----                                                                        | :-----                                                                       |
| `/administrator/components/com_gantry5/templates/pages/about/about.html.twig` | `/templates/TEMPLATE_DIR/custom/admin/templates/pages/about/about.html.twig` |

### Quick Icon - Gantry 5 (Plugin)

This simple plugin adds a shortcut icon from the Joomla administrator **Control Panel** (landing page after login) to the Gantry Theme Manager.

### System - Gantry 5 (Plugin)

This plugin Bootstraps Gantry5 Framework and hooks into some events to improve usability. It needs to be always enabled for Gantry 5 templates to function.

{% endset %}
{% set tab2 %}

Coming soon...

{% endset %}
{{ gravui_tabs({'Joomla':tab1, 'WordPress':tab2}) }}


## Gantry Theme Files

{% set tab1 %}

All templates are located in the `/templates` folder. Do not change or add any files to the template itself, as these changes will be wiped out during the next template update. If you want to customize any template file, you can do so by doing so in the `templates/TEMPLATE_DIR/custom/` folder.

Here is an example of where the source file and customized duplicate file would be located:

| Example File                             | Example Custom File                                                           |
| :-----                                   | :-----                                                                        |
| `/templates/pages/about/about.html.twig` | `/templates/[MY_TEMPLATE]/custom/admin/templates/pages/about/about.html.twig` |

This doesn't just apply to customizing existing files, but adding new ones such as Particle files. We detail this process in our previous guides on [Customizing Theme Files](../customizing-theme-files) and [Creating a New Particle](../creating-a-new-particle/). You can also customize common assets, the rendering engine, or even parts of the administrator.

{% endset %}
{% set tab2 %}

Coming soon...

{% endset %}
{{ gravui_tabs({'Joomla':tab1, 'WordPress':tab2}) }}