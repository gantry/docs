---
title: Adding a Custom Mainbody Layout
taxonomy:
    category: docs
    tag: [gantry4]
---

The Gantry framework ships with 38 possible layout combinations for the mainbody area. The mainbody is comprised of the mainbody itself (where the article or component is displayed) along with up to three additional sidebars for other modules.

[ui-tabs position="top-left" active="0"]
[ui-tab title="Joomla"]

For the 12-column layout variation, these layouts are controlled by two variables called `$gantry_default_pushpullschemas` and `$gantry_default_mainbodyschemacombos` that are found in the `libraries/gantry/gantry.config.php`. The 12-column portion of this file looks like this:

[/ui-tab]
[ui-tab title="WordPress"]

For the 12-column layout variation, these layouts are controlled by two variables called `$gantry_default_pushpullschemas` and `$gantry_default_mainbodyschemacombos` which are found in `wp-content/plugins/gantry/gantry.config.php`. The 12-column portion of this file looks like this:

[/ui-tab]
[/ui-tabs]



```php
$gantry_default_pushpullschemas = array(
    ....snip....
    'mb12' => array(''),

    'mb6-sa6' => array ('',''),
    'mb7-sa5' => array ('',''),
    'mb8-sa4' => array ('',''),
    'mb9-sa3' => array ('',''),

    'sa6-mb6' => array ('rt-push-6','rt-pull-6'),
    'sa5-mb7' => array ('rt-push-5','rt-pull-7'),
    'sa4-mb8' => array ('rt-push-4','rt-pull-8'),
    'sa3-mb9' => array ('rt-push-3','rt-pull-9'),

    'mb4-sa4-sb4' => array('','',''),
    'mb6-sa3-sb3' => array('','',''),
    'mb8-sa2-sb2' => array('','',''),

    'sa4-mb4-sb4' => array('rt-push-4','rt-pull-4',''),
    'sa3-mb6-sb3' => array('rt-push-3','rt-pull-6',''),
    'sa2-mb8-sb2' => array('rt-push-2','rt-pull-8',''),

    'sa4-sb4-mb4' => array('rt-push-8','rt-pull-4','rt-pull-4'),
    'sa3-sb3-mb6' => array('rt-push-6','rt-pull-6','rt-pull-6'),
    'sa2-sb2-mb8' => array('rt-push-4','rt-pull-8','rt-pull-8'),

    'mb3-sa3-sb3-sc3' => array('','','',''),
    'mb4-sa2-sb3-sc3' => array('','','',''),
    'mb4-sa3-sb2-sc3' => array('','','',''),
    'mb4-sa3-sb3-sc2' => array('','','',''),
    'mb6-sa2-sb2-sc2' => array('','','',''),

    'sa3-mb3-sb3-sc3' => array('rt-push-3','rt-pull-3','',''),
    'sa3-mb4-sb2-sc3' => array('rt-push-3','rt-pull-4','',''),
    'sa2-mb4-sb3-sc3' => array('rt-push-2','rt-pull-4','',''),
    'sa3-mb4-sb3-sc2' => array('rt-push-3','rt-pull-4','',''),
    'sa2-mb6-sb2-sc2' => array('rt-push-2','rt-pull-6','',''),

    'sa3-sb3-mb3-sc3' => array('rt-push-6','rt-pull-3','rt-pull-3',''),
    'sa3-sb2-mb4-sc3' => array('rt-push-5','rt-pull-4','rt-pull-4',''),
    'sa2-sb3-mb4-sc3' => array('rt-push-5','rt-pull-4','rt-pull-4',''),
    'sa3-sb3-mb4-sc2' => array('rt-push-6','rt-pull-4','rt-pull-4',''),
    'sa2-sb2-mb6-sc2' => array('rt-push-4','rt-pull-6','rt-pull-6',''),

    'sa3-sb3-sc3-mb3' => array('rt-push-9','rt-pull-3','rt-pull-3','rt-pull-3'),
    'sa3-sb3-sc2-mb4' => array('rt-push-8','rt-pull-4','rt-pull-4','rt-pull-4'),
    'sa3-sb2-sc3-mb4' => array('rt-push-8','rt-pull-4','rt-pull-4','rt-pull-4'),
    'sa2-sb3-sc3-mb4' => array('rt-push-8','rt-pull-4','rt-pull-4','rt-pull-4'),
    'sa2-sb2-sc2-mb6' => array('rt-push-6','rt-pull-6','rt-pull-6','rt-pull-6'),
    ....snip....
);
```

This is actually quite readable, and you can translate **mbX** to equal **mainbody** occupying **X** column grids. **saX** means the **sidebar-a** module position occupies **X** column grids, etc. The stuff on the right side of the array relates to the push/pull classes that are needed to achieve this layout, because even though you can change the column order in the layout, you aren't physically moving the columns. It's 100% css in order to ensure **source-ordering** and SEO optimization (unless using ordered mainbody layout).

The second variable contains similar data but is laid out slightly differently, the 12-column part looks like this:

```php
$gantry_default_mainbodyschemascombos = array(
    ....snip....
    12 => array(
        1 => array(
                array('mb'=>12)
        ),
        2 => array(
                array('mb'=>6, 'sa'=>6),
                array('mb'=>7, 'sa'=>5),
                array('mb'=>8, 'sa'=>4),
                array('mb'=>9, 'sa'=>3),

                array('sa'=>6, 'mb'=>6),
                array('sa'=>5, 'mb'=>7),
                array('sa'=>4, 'mb'=>8),
                array('sa'=>3, 'mb'=>9)
        ),
        3 => array(
                array('mb'=>4, 'sa'=>4, 'sb'=>4),
                array('mb'=>6, 'sa'=>3, 'sb'=>3),
                array('mb'=>8, 'sa'=>2, 'sb'=>2),

                array('sa'=>4, 'mb'=>4, 'sb'=>4),
                array('sa'=>3, 'mb'=>6, 'sb'=>3),
                array('sa'=>2, 'mb'=>8, 'sb'=>2),

                array('sa'=>4, 'sb'=>4, 'mb'=>4),
                array('sa'=>3, 'sb'=>3, 'mb'=>6),
                array('sa'=>2, 'sb'=>2, 'mb'=>8)
        ),
        4 => array(
                array('mb'=>3, 'sa'=>3, 'sb'=>3, 'sc'=>3),
                array('mb'=>4, 'sa'=>2, 'sb'=>3, 'sc'=>3),
                array('mb'=>4, 'sa'=>3, 'sb'=>2, 'sc'=>3),
                array('mb'=>4, 'sa'=>3, 'sb'=>3, 'sc'=>2),
                array('mb'=>6, 'sa'=>2, 'sb'=>2, 'sc'=>2),

                array('sa'=>3, 'mb'=>3, 'sb'=>3, 'sc'=>3),
                array('sa'=>3, 'mb'=>4, 'sb'=>2, 'sc'=>3),
                array('sa'=>2, 'mb'=>4, 'sb'=>3, 'sc'=>3),
                array('sa'=>3, 'mb'=>4, 'sb'=>3, 'sc'=>2),
                array('sa'=>2, 'mb'=>6, 'sb'=>2, 'sc'=>2),

                array('sa'=>3, 'sb'=>3, 'mb'=>3, 'sc'=>3),
                array('sa'=>3, 'sb'=>2, 'mb'=>4, 'sc'=>3),
                array('sa'=>2, 'sb'=>3, 'mb'=>4, 'sc'=>3),
                array('sa'=>3, 'sb'=>3, 'mb'=>4, 'sc'=>2),
                array('sa'=>2, 'sb'=>2, 'mb'=>6, 'sc'=>2),

                array('sa'=>3, 'sb'=>3, 'sc'=>3, 'mb'=>3),
                array('sa'=>3, 'sb'=>3, 'sc'=>2, 'mb'=>4),
                array('sa'=>3, 'sb'=>2, 'sc'=>3, 'mb'=>4),
                array('sa'=>2, 'sb'=>3, 'sc'=>3, 'mb'=>4),
                array('sa'=>2, 'sb'=>2, 'sc'=>2, 'mb'=>6)
        )
    ),
    ....snip....
);
```

Again, this is pretty easy to break down. The key in the associative array relates to the number of columns, in this case 12. The second set of keys relates to the number of columns. Here, that's 1 through 4 total columns as options. In the 2 column value, you see yet another array with all the combos available.


Adding A new Custom Layout Combo
--------------------------------

[ui-tabs position="top-left" active="0"]
[ui-tab title="Joomla"]

We assume that you have a specific need for a new layout combination that is not provided in these variables, and therefore not available to you in the template administrator. Let's say for some reason you want a really large body on the right, and a very skinny sidebar-a on the left. That would translate into a sidebar-a of **2 columns**, and the mainbody with **10 columns** of space.

Rather than adding these values directly into the Gantry framework core files, we can override these variables as you can with most things in Gantry. To do this, simply open up your `gantry.config.php` file in your Gantry-powered template. In the case of the Gantry core template, this would be located at `templates/[YOUR_TEMPLATE]/gantry.config.php`. Then merely copy the Gantry-core `$gantry_default_pushpullschemas` and `$gantry_default_mainbodyschemacombos` variables into the template's `gantry.config.php` file at the bottom.

Next, we will need to edit the two variables to add the appropriate layout.

```php
$gantry_default_pushpullschemas = array(
    ....snip....
    'sa6-mb6' => array ('rt-push-6','rt-pull-6'),
    'sa5-mb7' => array ('rt-push-5','rt-pull-7'),
    'sa4-mb8' => array ('rt-push-4','rt-pull-8'),
    'sa3-mb9' => array ('rt-push-3','rt-pull-9'),
    'sa2-mb10' => array ('rt-push-2','rt-pull-10'),
    ....snip....
```

and...

```php
$gantry_default_mainbodyschemascombos = array(
    ....snip....
    12 => array(
        1 => array(
                array('mb'=>12)
        ),
        2 => array(
        ....snip....
                array('sa'=>6, 'mb'=>6),
                array('sa'=>5, 'mb'=>7),
                array('sa'=>4, 'mb'=>8),
                array('sa'=>3, 'mb'=>9),
                array('sa'=>2, 'mb'=>10)
        ),
        .....snip....
```

[/ui-tab]
[ui-tab title="WordPress"]

For the pupose of this document, we'll assume that you have a specific need for a new layout combination that is not provided in these variables, and therefore not available to you in the template settings. Let's say for some reason you want a really large body on the right, and a very skinny sidebar-a on the left. That would translate into a sidebar-a of **2 columns**, and the mainbody with **10 columns** of space.

Rather than adding these values directly into the Gantry framework core files, we can override these variables as you can with most things in Gantry. 

To do this, simply open up your `gantry.config.php` file in your Gantry-powered template. In the case of the Gantry core template, this would be located at `wp-content/themes/[YOUR_TEMPLATE]/gantry.config.php`. Then, copy the Gantry-core `$gantry_default_pushpullschemas` and `$gantry_default_mainbodyschemacombos` variables into the template's `gantry.config.php` file at the bottom.

Next, we'll need to edit the two variables in order to add the appropriate layout:

```php
$gantry_default_pushpullschemas = array(
    ....snip....
    'sa6-mb6' => array ('rt-push-6','rt-pull-6'),
    'sa5-mb7' => array ('rt-push-5','rt-pull-7'),
    'sa4-mb8' => array ('rt-push-4','rt-pull-8'),
    'sa3-mb9' => array ('rt-push-3','rt-pull-9'),
    'sa2-mb10' => array ('rt-push-2','rt-pull-10'),
    ....snip....
```

and...

```php
$gantry_default_mainbodyschemascombos = array(
    ....snip....
    12 => array(
        1 => array(
                array('mb'=>12)
        ),
        2 => array(
        ....snip....
                array('sa'=>6, 'mb'=>6),
                array('sa'=>5, 'mb'=>7),
                array('sa'=>4, 'mb'=>8),
                array('sa'=>3, 'mb'=>9),
                array('sa'=>2, 'mb'=>10)
        ),
        .....snip....
```

[/ui-tab]
[/ui-tabs]

Save the file and you're done! Now, when you visit the template settings, you will have a new option in your mainbody layout slider.
