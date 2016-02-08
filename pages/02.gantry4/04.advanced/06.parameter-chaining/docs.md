---
title: Parameter Chaining
taxonomy:
    category: docs
    tag: [gantry4]
---

[ui-tabs position="top-left" active="0"]
[ui-tab title="Joomla"]

During the development of the Gantry Framework, we found that we needed to organize sets of parameters into custom groups of related settings. You can create your own elements in *template-options.xml* to allow the setting of specific parameters which you can use later in your own features, layouts, etc. A good example of this is the **inactive** chain that controls what menu item should be displayed when the menu is inactive. The XML in question looks like this:

```xml
<fields name="inactive" type="chain" label="INACTIVE"  description="INACTIVE_DESC">
    <field name="enabled" type="toggle" default="1" label="ENABLED"  setinmenuitem="false" />
    <field name="menuitem" type="menuitem" label="SELECT_MENU_ITEM" setinmenuitem="false" />
</fields>
```

This parameter block consists of a parent **chain** element. This element has a name called **inactive**. Within the chain, are two elements. One is a toggle called **enabled**, and the other is a menuitem element named **menuitem**.

Now, you could get the values of these parameters just by using the call:

```php
global $gantry;
echo $gantry->get('inactive-enabled');
echo $gantry->get('inactive-menuitem');
```

However, within Gantry we have a feature to handle the 'inactive' state, and therefore we have a core feature called **GantryFeatureInactive** that looks like this:

```php
class GantryFeatureInactive extends GantryFeature {
    var $_feature_name = 'inactive';

    function init() {
        global $gantry, $Itemid;

        $enabled = $this->get('enabled');
        if($enabled) {
            $menus = &JSite::getMenu();
            $menu  = $menus->getActive();
            if (null == $menu){
                $menuitem = $this->get('menuitem');
                $menus->setActive($menuitem);
                $Itemid = $menuitem;
            }
        }
    }
}
```

Features, by default, are looking for a chained set of parameters. So, by setting the `$_feature_name` to **inactive**, and using the feature's own built in `get()` method, we don't need to use the full **inactive-menuitem** chained name. The feature's method automatically prefixes the feature name to obtain the correct parameter.

[/ui-tab]
[ui-tab title="WordPress"]

During development of the Gantry Framework, we found that we needed to organize sets of parameters into custom groups of related settings. You can create your own elements in `templateDetails.xml` to allow the setting of specific parameters which you can use later in your own features, layouts, etc. A good example of this is the **pagesuffix** chain that controls any extra CSS classes which should be added to the `<body>` tag. The XML in question looks like this:

```xml
<fields name="pagesuffix" type="chain" label="PAGESUFFIX" description="PAGESUFFIX_DESC">
    <field name="enabled" type="toggle" default="0" label="ENABLED" enabler="true" />
    <field name="class" type="text" default="" class="text-long" label="CLASS"/>
    <field name="priority" type="hidden" default="2"/>
</fields>
```

This parameter block consists of a parent **chain** element. This element has a name called **pagesuffix**. Within the chain, are three elements. One is a toggle called **enabled**, the second a text element named **class**, and third is responsible for the **priority**.

Now, you could get the values of these parameters just by using the call:

```php
global $gantry;
echo $gantry->get('pagesuffix-enabled');
echo $gantry->get('pagesuffix-menuitem');
```

Within Gantry, we have a feature to handle the `pagesuffix` state. This gives us a core gizmo called **GantryGizmoPageSuffix**.

Here's what it looks like:

```php
class GantryGizmoPageSuffix extends GantryGizmo {
    var $_name = 'pagesuffix';

    function query_parsed_init()
    {

        /** @global $gantry Gantry */
        global $gantry;

        //add body class suffix
        $gantry->addBodyClass($gantry->get('pagesuffix-class'));

    }

}
```

Gizmos, by default, are looking for a chained set of parameters. By setting the `$_feature_name` to **pagesuffix**, and using the feature's own built in `get()` method, we don't need to use the full **pagesuffix-class** chained name. The gizmos method automatically prefixes the feature name to obtain the correct parameter.


[/ui-tab]
[/ui-tabs]




