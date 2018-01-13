---
title: Code-based Outline Assignments
taxonomy:
    category: docs
    tag: [gantry5]
---

In some cases using third-party tools such as bbPress, you will find it difficult assigning an outline using conventional methods. In this guide, we'll show you how to manually assign an outline to a php file such as `bbpress.php`.

## Modify Template File

For bbPress, open `bbpress.php` in your theme and add `$theme->setLayout(my_layout', true);` after the variable has been set in line 20. Layout name is the name (folder) of the outline in the file system. This changes the template for all the pages unless you add some additional logic to figure out the outline to be used.

## Add an Action

You can do something like this:

```
add_action('template_redirect', 'gantry_theme_set_template_layout', -9999);

function gantry_theme_set_template_layout() {
    $gantry = Gantry\Framework\Gantry::instance();
    $theme  = $gantry['theme'];

    $theme->setLayout('my_layout', true);
}
```

You need to do this earliest at this point and you need to do it before Gantry loads its configuration for the current outline.

## Create Your Own Assignment Type

Gantry has a couple of filters and actions for adding your own assignment types, which can then used from the admin.

`apply_filters('g5_assignments_types', $types)` is run when Gantry asks for all the available types
`do_action('g5_assignments_page', $list)` is run after all rules have been built assignments set for the current page

Additionally, there are filters for each type if you need to customize any of the lists.