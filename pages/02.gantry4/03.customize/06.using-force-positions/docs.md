---
title: Using Force Positions
taxonomy:
    category: docs
    tag: [gantry4]
---

There are times when you just don't want to have your modules/widgets taking up all the room in a horizontal row -- no matter what the layout. 

For example, you might want to have a module on the left and a module on the right, with nothing in the middle. In traditional templates, you would have to resort to making two specific module positions, and using CSS, position them on the left and right sides of your design.

[ui-tabs position="top-left" active="0"]
[ui-tab title="Joomla"]

[plugin:youtube](https://www.youtube.com/watch?v=Lfl4nQnduvo)

! Forcing the module positions is a powerful layout control. This short screencast provides some insight in how to achieve this and also the layout control that can be attained using this technique.

With Gantry, you can use the layouts settings to achieve this goal with no code or special CSS. First in the layouts settings, for the **Utility Positions**, set the **Force Positions** to **On** and the **Position Count** to 4.

This means that there will always be four utility module positions (**utility-a**, **utility-b**, **utility-c**, **utility-d**) displayed, no matter how many modules you actually have published in the module manager. Then, all you need to do is publish a module in the **utility-a** position to show on the left, and a module in **utility-d** to show on the right. Just ensure you have nothing published in **utility-b** and **utility-c**, and those will just be left as blank spaces.

![](force-positions1.jpg?classes=shadow,border) 

Enter the **Layouts** section and toggle on the **Force Positions** for the module row you are utilizing.

The result will be:

![](force-positions2.jpg?classes=shadow,border) 

[/ui-tab]
[ui-tab title="WordPress"]

[plugin:youtube](https://www.youtube.com/watch?v=ulsy2fkpyfA)

! Forcing the widget positions is a powerful layout control. This short screencast provides some insight in how to achieve this and also the layout control that can be attained using this technique.

With Gantry, however, you can use the layouts settings to achieve this goal with no code or special CSS. First in the layouts settings, for the **Utility Positions**, set the **Force Positions** to **On** and then set the **Position Count** to 4.

This means that there will always be 4 utility widgets placed in the position (**utility-a**, **utility-b**, **utility-c**, **utility-d**) displayed no matter how many widgets you actually have placed in the widget position. Then all you need to do is place a widget in the **utility-a** position to show on the left, a widget in **utility-d** to show on the right. 

Please note that you still need to use 3 **Gantry Divider** widgets in that position, but thanks to this option you don't need to have normal widgets between them.

![](force-positions1.jpg?classes=shadow,border) 

Enter the **Layouts** section and toggle on the **Force Positions** for the widget position you are utilizing.


The result will be:

![](force-positions2.jpg?classes=shadow,border) 

[/ui-tab]
[/ui-tabs]


