---
title: Introduction to Particles
taxonomy:
    category: docs
    tag: [gantry5]
---

Would you like to change where the Logo appears on your site? How about adding new positions for modules/widgets and placing it directly below the menu? You can do these things and more without even touching your keyboard thanks to a new concept to the Gantry Framework called **Particles**.

Gantry 5’s Layout Manager gives you the power to create a virtually unlimited amount of Particles, including Positions, resize them, and place them just about anywhere you want them to appear on the front end. 

There are three basic types of Particles. Here is a quick breakdown of what they are, and the role they play in your website.

| Type              | Description                                                                                                                                                                                                                                                                                 |
| :-----            | :-----                                                                                                                                                                                                                                                                                      |
| Standard Particle | Referred to as **Features** in previous versions of Gantry, these are small, modular blocks with preset scripting that enable you to **add elements to your page**. Particles can have simple or complex sets of options which enable you to further customize how they appear on the page. |
| Position          | Position Particles are blocks that can have **content or scripting assigned to them by the CMS**. The content body, as well as widget/module positions fall under this category.                                                                                                            |
| Atom              | Atoms are **non-visible** Particles which provide scripting to your site. Analytics tracking, custom CSS / JavaScript, and other elements that need to **run when the page loads but do not appear visually** fall in this category.                                                     |

Types of Particles
-----

### Standard Particles

![Particles](particles_1.png?classes=shadow,border)

Particles are basically like WordPress widgets or Joomla modules. They are blocks of content that are configured on the back end. You can use modules/widgets exactly as you always did, but what makes particles especially useful is their simplicity and the fact that they live independently of the CMS.

For theme developers, particles can be created in minutes, and they can add functionality to your page in an environment that is easy for your clients to navigate and work with.

Instead of pointing them to a Custom HTML module (Joomla) or Text (WordPress) widget, where they have to navigate through supporting code to make small adjustments, they can fill out preset forms that enable them to change things like the section's title, content, any images or links, and more.

### Positions

Positions are Particles that have content assigned to them by the CMS. In most CMS frameworks, these are hard-coded in the theme. In Gantry 5, you can freely create, move, and remove them as you please using the **Layout Manager**.

In WordPress, this is called a **Widget Position**. In Joomla, it's a **Module Position**. You can find out more about positions in our [detailed documentation](../position/).

### Atoms

![Particles](particles_2.png?classes=shadow,border)

Atoms are particles that do not render on the front end in any visible fashion. They make it easy to add scripts such as custom CSS or JS, as well as tracking methods like Google Analytics. You can visually arrange their order in the Particle Defaults to determine the order in which they load during page rendering.

Common Particle Settings
-----

There are several options that you can apply to your particle's YAML file in order to take advantage of more advanced features within Gantry 5.

### Caching

Particle caching enables the developer to assign particle-level caching to a particle. This is currently a hidden feature and requires the addition of a simple line within the particle's YAML file. Here is an example:

```
configuration:
  caching:
    type: static
```

As you can see in this example, the addition of the caching configuration option applies a static type of caching to the particle. At this time, `static` is the only caching option for particles. Static caching is permanent caching which only takes account of particle configuration. Basically, it caches the particle until the configuration of the particle changes.
 
Static caching only works for particles which have no changing content. You cannot cache particles with a date in it, nor can you cache any particles, which use platform content or methods with changing values. This is why caching has been disabled by default.

If you do not define a caching `type` in the particle's YAML, the particle remains dynamic. This means it has no caching.