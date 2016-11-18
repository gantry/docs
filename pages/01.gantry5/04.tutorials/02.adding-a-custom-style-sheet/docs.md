---
title: Adding a Custom Style Sheet
taxonomy:
    category: docs
    tag: [gantry5]
---

Adding a custom style sheet is a fairly straightforward process. The first thing you should do is create the custom SCSS/CSS file. You can do so in just about any text editor.

![Custom File](custom.png?classes=shadow,border)

To do this, navigate in the directory structure to `THEME_DIR/custom/scss` and create a file called `custom.scss` if one doesn't already exist. If the `/custom/scss/` directory doesn't exist, you will need to create that, too. If it already does, just open it and make your additions/changes directly to the file.

This file will then be compiled as an override to the theme's core style sheet files. Anything you place in this file will override classes and defaults assigned in other areas of the theme.

You can format the file's content in either **SCSS** or **CSS**. Gantry will automatically pick it up and compile it properly.

Once you have added this file, and put your custom CSS/SCSS within, Gantry will do one of two things. This activity is determined by the **Production Mode** setting. You can reach this setting by navigating to **Gantry 5 Administrator > Extras**.

![Recompile CSS](custom_2.png?classes=shadow,border)

If you have **Production Mode** set to **Yes**: you will need to then navigate to the Gantry 5 administrator, select the **Styles** administrative panel, and click **Recompile CSS** for the outlines you wish to have the custom styling apply for.

[ui-tabs position="top-left" active="0"]
[ui-tab title="Joomla"]

![Extras](devprod.png?classes=shadow,border)

[/ui-tab]
[ui-tab title="WordPress"]

![Production](wp_production.png?classes=shadow,border)

[/ui-tab]
[ui-tab title="Grav"]

![Production](grav_production.png?classes=shadow,border)

[/ui-tab]
[/ui-tabs]

If **Production Mode** is set to **No**, then Gantry will recompile the CSS/SCSS automatically when changes are made. In the future, more **Development** vs. **Production** actions will be tied to this same setting, such as Cache, minified vs. extended JS/CSS, etc.

!! We do not recommend editing or overriding the `css/custom.css` or `css-compiled/custom.css` files as any of these changes will be lost and/or overridden when the custom.scss file recompiles. You can place pure CSS in the `custom.scss` file and it will work just fine.

This will tell Gantry to take the new styling and apply it to the page(s). Once you have done this, you should be able to see your changes on the front end.

!! If you come across an error when you hit **Recompile CSS** this is likely due to an issue in the SCSS/CSS. At this stage, the compiler is pretty unforgiving and any syntax issues can cause issues. Double-check your code, save your changes to the `custom.scss` file, and try again.

## Dependencies.scss

We have consolidated the includes for **Bourbon**, **Nucleus**, **theme mixins**, and **variables** into a `_dependencies.scss` file. You can now just import this one file to have it all. Use `@import "dependencies";` in your `custom.scss` file to import it.

## More Information About Sass and SCSS

If you are new to [Sass](http://sass-lang.com/) or SCSS (Sassy CSS), don't fret. We have you covered! Below you will find a some resources to help you get to know SCSS and find out why it is quickly becoming the preferred styling solution for Web developers everywhere.

To start, SCSS syntax is based on traditional CSS. It adds in some of the features and shortcuts made possible by Sass, giving it the ability to live in both worlds. You can use traditional CSS in a SCSS file just fine, but you have the added benefit of nesting, mixins, and other powerful features that make it easier to hit the ground running.

* [Sass Basics](http://sass-lang.com/guide): An introduction to the features of Sass, including side-by-side comparisons of SASS and SCSS syntax.
* [Getting Started with Sass](https://scotch.io/tutorials/getting-started-with-sass): A great guide for Sass beginners.
