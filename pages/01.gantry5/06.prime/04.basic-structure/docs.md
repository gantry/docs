---
title: Basic structure
taxonomy:
    category: docs
    tag: [gantry5]
---

## Content Pages

All the Gantry Prime pages are located in pages/ folder. Content pages are written by using twig templating language.

Gantry prime uses very simple routing where it just looks if there is a file which has identical path to URI appended with .html.twig for regular html output.

    path/to/my/page => PRIME_ROOT/pages/path/to/my/page.html.twig
    another/path => PRIME_ROOT/pages/another/path.html.twig

Basic structure of the file is:

    {% extends "@nucleus/page.html.twig" %}
    {% do gantry.theme.setLayout('gantry-theme://layouts/test.yaml') %}
    {% block content %}
        Here comes your content.
    {% endblock %}

## Module positions

Module positions work in a similar way to Joomla; named module positions are defined in layout files. Each position can contain a set of modules, which are stored under modules/position_name/ folder. All module files defined in here are global and exist on every page which has the module position defined inside their layout file.

Simple module file is defined below:

    {% extends "@nucleus/partials/module.html.twig" %}
    {% set title = position.name %}
    {% block module %}
    {% endblock %}

## Media files

Images and other media files needed for the content pages as well as for the shared module and particle instances can be stored into media/ folder under the Gantry Prime root directory.

They can be accessed by using gantry-media:// stream.

## Configuration

Gantry Prime has its own global configuration, which is located in config/ folder. Themes own configuration options act as the defaults and there will be a way to override Gantry Prime configuration for each template individually (not implemented yet).

## Layouts

Layouts define the structure of the page.

Lookup paths for layouts (against the repository):

    /theme/[current]/layouts
    /theme/[current]/common/layouts
    /platform/prime/layouts

## Streams

Platform specific streams:

    gantry-prime://         /prime
    gantry-layouts://       /prime/layouts, gantry-theme://layouts
    gantry-pages://         /prime/pages
    gantry-positions://     /prime/positions

Common streams:

    gantry-admin://         /prime/admin (only available in admin)
    gantry-media://         /prime/media
    gantry-themes://        /prime/themes
    gantry-theme://         /prime/themes/[current]

Internal streams:

    gantry-cache://         Cached Files
    gantry-blueprints://    Blueprint Files
    gantry-config://        Configuration Files
    gantry-engine://        Nucleus Engine
    gantry-particles://     Gantry Particles
