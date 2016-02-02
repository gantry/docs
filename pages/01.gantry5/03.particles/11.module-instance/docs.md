---
title: Module Instance
taxonomy:
    category: docs
    tag: [gantry5]
---

![Module Instance](module_instance_3.png?classes=shadow,border)

The **Module Instance** particle enables you to directly inject a single module anywhere in your layout or menu. Instead of inserting an entire module position for a single module, you can use a Module Instance particle to achieve the same effect without having to go back and assign the module manually.

Settings
-----

![Module Instance](module_instance_2.png?classes=shadow,border)

| Setting   | Description                                                                                                                |
| :------   | :----------------------------------                                                                                        |
| Module ID | Enter the module ID associated with the module you wish to inject, or select the module using the **Pick a Module** modal. |
| Chrome    | Sets the module chrome.                                                                                                    |

The **Module Instance** particle enables you to select a module using the module's ID, or the **Pick a Module** modal which is available by clicking the gray button to the right of the **Module ID** field. You can also set the module's **Chrome** here, as well. Any other module-specific settings will need to be performed within Joomla's own Module Manager. This is because Gantry will not change a module itself. It takes what Joomla has, and determines how and where it is displayed.

![Module Instance](module_instance_1.png?classes=shadow,border)

Using the **Pick a Module** modal is very easy. You are presented a list of modules that are currently present in your Joomla site which you can select from. Modules do not have to be assigned to a particular position. The **Module Instance** particle acts as a virtual position that injects the module directly, regardless of where the module is actually assigned. As long as the module is active, it should render on the front end just as it would if you were assigning it to a standard module position.