---
title: How to Create a Child Theme (Grav)
taxonomy:
    category: docs
    tag: [gantry5]
---

Creating a child theme is easy as of Gantry 5.4.18. This can be accomplished with a simple CLI command, enabling you to quickly and easily create a child theme that you can customize without having to worry about changes made during updates undoing the work you've put in to them.

## CLI Command

You can create a child theme in Grav using its powerful CLI toolset. The `bin/plugin gantry5 child-theme` command initiates a series of questions that, when answered, will create a child theme for you with or without cloning of existing outline(s) and configuration options.

Here's a look at the help data for this command:

```text
> bin/plugin gantry5 child-theme --help
Usage:
  child-theme [options]
  child-theme
  childtheme

Options:
  -p, --parent=PARENT   Parent theme name
  -c, --child=CHILD     Child theme name
  -l, --clone           Clone outlines and configuration to the child theme
  -L, --no-clone        Do not clone outlines and configuration to the child theme

Help:
  The child-theme creates a new child theme from an existing Gantry theme
```

Here is an example of the terminal commands in action:

```text
> bin/plugin gantry5 child-theme
Creating new child theme

Enter parent theme name: g5_helium
Enter child theme name: new_helium
Clone outlines and configuration to the child theme [Y/n]:

Success! Child theme new_helium created.
```

Once this is done, you should now see your child theme appear in the **Theme** panel in the **Admin**.

![](test_1.png?classes=shadow,border)
