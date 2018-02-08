---
title: Hooking into Joomla Events
taxonomy:
    category: docs
    tag: [gantry5, joomla]
---

Sometimes, you want to create a plugin that reacts to changes made in the back end of Gantry 5. Changing the layout, style settings, etc. will impact the front end of the website, and you may find yourself in a situation where you want another part of your site's infrastructure to notice that change and respond.

## Joomla Events

There are following events in Joomla:

Plugin group: `gantry5`

* `onGantry5ThemeInit($theme)`
* `onGantryGlobalConfig(&$global)`
* `onGantry5UpdateCss($theme)`
* `onGantry5AdminInit($theme)`
* `onGantry5SaveConfig($data)`

## Events Gantry 5 Calls Directly

Additionally Gantry 5 calls these events directly:

* `onRenderModule`
* `onContentBeforeSave`
* `onContentAfterSave`
* `onContentBeforeDelete`
* `onContentAfterDelete`
* `onExtensionBeforeSave`
* `onExtensionAfterSave`
* `onContentCleanCache`

Rest of the events are called by Joomla when saving **JTable** for template styles, menus etc..

## Additional Information

Some Joomla events are missing from this list, though you can still hook to Gantry's own event listener (**symfony/event-dispatcher**) which can be accessed by **Gantry DI**:

```twig
$gantry = \Gantry\Framework\Gantry::instance();
/** @var EventDispatcher $events */
$events = $gantry['events'];

$listener = new EventListener; // Your listener class.
$events->addSubscriber($listener);
```

Events include:

* `theme.init`
* `admin.init.theme`
* `admin.global.save`
* `admin.menus.save`
* `admin.styles.save`
* `admin.layout.save`
* `admin.assignments.save`
* `admin.page.save`
* `admin.settings.save`

