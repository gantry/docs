---
title: Particle YAML Field Types
taxonomy:
    category: docs
    tag: [gantry5]
gravui:
    enabled: true
    tabs: true
process:
    twig: true
---

When you are creating a new Particle, you might notice that the input fields you set in the Particle's YAML file vary, depending on what you are trying to accomplish.

![Particle](particle_2.png) {.border .shadow}

In the above screenshot, you will notice several different types of input fields are present. Even the green switch in the upper-right corner is a field set in the YAML file.

Here is the Particle's YAML file:

```yaml
name: Example
description: Displays a Title, Image, and Text on the front end.
type: particle

form:
  fields:
    enabled:
      type: input.checkbox
      label: Enabled
      description: Globally enable to the particles.
      default: true

    title:
      type: input.text
      label: Title
      description: Customize the section title text.   

    image:
      type: input.imagepicker
      label: Image
      description: Select the main image.

    description:
      type: textarea.textarea
      label: Text / HTML
      description: Create or modify your description.

    css.class:
      type: input.text
      label: Class
      description: CSS class name for the particle.
```

There are several different field types represented in this example. `input.checkbox`, `input.text`, `input.imagepicker`, and `textarea.textarea` can be found in the example above. Below, we have detailed the core field types included with Gantry 5.

HTML Input Field Types
-----

There are two main types of inputs supported by Gantry. The first are basic HTML input types. Gantry supports them for simplicity sake, making it easier for you to create Particles that take advantage of everything HTML has to offer. These types include:

* collection.list      
* input.checkbox       
* input.color          
* input.date           
* input.datetime-local 
* input.datetime       
* input.email          
* input.file           
* input.group          
* input.hidden         
* input.image          
* input.month          
* input.number         
* input.password       
* input.radio          
* input.range          
* input.reset          
* input.search         
* input.selectize      
* input.submit         
* input.tel            
* input.text           
* input.time           
* input.url            
* input.week           
* textarea.textarea    

Gantry-specific Input Field Types
-----

The second are Gantry-specific types that utilize Gantry's exclusive features such as the robust **Color Picker** and **Image Picker**. These types take what the vanilla HTML input types offer and extends them to make them more powerful, easier to use, and exceptionally robust.

| Field Type             | Description                                                                                                                                         |
| :-----                 | :-----                                                                                                                                              |
| input.block-variations | Enables you to select between Gantry's supported block variations, giving you a quick way to refine how the Particle appears on the front end.      |
| input.colorpicker      | Opens Gantry's **Color Selector** which enables you to quickly choose a color from tools displaying hue, saturation, brilliance, and a color wheel. |
| input.filepicker       | Opens Gantry's file browser, enabling you to select a **file** to use.                                                                                  |
| input.fonts            | Opens Gantry's **Font Selector** which enables you to view and test over 670 fonts from the **Google Font Library**.                                |
| input.icon             | Opens Gantry's **Icon Selector** which displays and enables you to select FontAwesome icons to use in the field.                                    |
| input.imagepicker      | Opens Gantry's file browser, enabling you to select an **image** to use.                                                                                |
| input.videopicker      | Opens Gantry's file browser, enabling you to select a **video file** to use.                                                                            |
