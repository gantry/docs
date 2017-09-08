---
title: Creating a Multilingual Site (Grav)
taxonomy:
  category: docs
  tag: [gantry4]
---

## Introduction

Multilingual support in websites opens them up to a considerably larger audience than a single-language site might be able to. Developing a site with multilingual support takes a little know-how, and we have put together this guide to help you get through it.

Grav has [detailed documentation](https://learn.getgrav.org/content/multi-language#multi-language-basics) available to help you add additional languages to your Grav website. Here, you'll learn how to assign outlines to specific languages within the Gantry 5 administrator.

This feature is useful in cases where, for example, you have a specific layout you want to have apply to the English version of your website or page that differs from the one you wish to have apply to the Spanish one.

This is particularly important when considering particle content. This would be the primary method of allowing for particles to contain language-specific content that is displayed only when a particular language is being loaded.

Accomplishing this is simple. All you need to do is create an outline (or series of outlines) that are configured the way you want them for a specific language and assign them to that language. This will ensure that, for example, the English version of the Home page is loaded with a different outline than the Spanish one.

!! This isn't a requirement. By all means, you could easily get away with using one outline for all languages. Just keep in mind that the particle content, layout, and other options will remain the same.

## Assigning an Outline

![](multi_grav_1.png?classes=shadow,border)

Assigning an outline to a specific language is easy. In addition to any other assignments you would place on the outline, select your desired language from the **Languages** portion of the **Assignments** administrative panel.

For example, if you wanted to create a Spanish home page your assignments for that outline would look something like this:

![](multi_grav_2.png?classes=shadow,border)

