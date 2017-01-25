---
title: Logo
taxonomy:
    category: docs
    tag: [gantry5]
---

![Logo](logo.png?classes=shadow,border)

The **Logo** particle enables you to set the image and/or text you want to have appear as your logo for the site. Through this particle, you can add your logo to the site in a position you set in the **Layout Manager**.

Settings
-----

![Settings](logo_settings.png?classes=shadow,border)

| Setting   | Description                                                            |
| :-----    | :-----                                                                 |
| URL       | Sets the URL the logo links to. If left blank, the home page is used.  |
| Image     | Sets the image that appears as the logo on the front end.               |
| SVG Code  | You can enter SVG code here in place of an image.                      |
| Text      | Sets the text which appears along with, or instead of, the logo image. |
| CSS Class | Set a specific CSS class for custom styling                            |

You can use SVG code to define your logo/image using the **SVG Code** field. For example, you could enter:

```html
<svg width="400" height="180">
  <rect x="50" y="20" rx="20" ry="20" width="150" height="150" style="fill:red;stroke:black;stroke-width:5;opacity:0.5">
  Sorry, your browser does not support inline SVG.
</svg>
```

This would produce a rectangle in place of your image. This is a great way to save on bandwidth as there would be no image file at all to load, just the SVG code.
