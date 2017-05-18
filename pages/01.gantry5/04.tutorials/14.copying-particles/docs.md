---
title: Copying Particles to Another Theme
taxonomy:
    category: docs
    tag: [gantry5]
---

## Introduction

Gantry 5 themes are provided with different particles. Not every particle is included in every Gantry 5 theme. Sometimes you might want to include a particle from another theme into the theme that you are using. This tutorial shows you the safe way to copy particles between themes that won't be overwritten again by theme updates.

For the purpose of this tutorial, the theme you are copying from is the **donor** theme and the theme you are copying to is the **recipient** theme.

!!! CAVEATS: 
!!! * If you copy a particle from one theme to another, and a bug is subsequently found in that particle, it would only be fixed in the **donor** theme (via a theme update release). It's therefore your responsibility to watch for **donor** theme updates and see if the particle was changed, meaning that you would then need to update the particle in your **recipient** theme also.
!!! * It may be that the **donor** theme has some special CSS styling for a page/location where that particle is used (e.g. special home page styling). That may not be replicated in copying a particle.
!!! * This is not about changing any functionality - you are copying the particle "as-is".

## What Particles are made of

A particle is made up of these things:

* A YAML (plain text) file that tells Gantry 5 what fields the particle uses
* A TWIG (plain text) file that uses those fields to render output on your page
* A SCSS (plain text) file that contains the SASS/CSS to style the rendered particle on your page
* Optionally, one or more JS (plain text) files that contain JavaScript/jQuery code to make the particle work.

All theme specific particles reside in: `THEMENAME/particles`
All theme specific particle SCSS files reside in: `THEMENAME/scss/THEMENAME/particles`
All theme specific JS files reside in: `THEMENAME/js`

!!! TERMS:
!!! - *THEMENAME* is the name of the theme (e.g. isotope, xenon, galatea)
!!! - *PARTICLENAME* is the name of the particle (e.g. newsletter, promoimage, contentlist).

## Copying the Particle

It is very important that you do this copy in such a way that any subsequent theme updates do not overwrite what you have done. The steps below ensure that this is the case.

These are the steps to do the copy from the **donor** theme to the **recipient** theme. You are copying the donor file only, not the folder(s) it resides in:

1. Copy `THEMENAME/particles/PARTICLENAME.html.twig` to `THEMENAME/custom/particles`

2. Copy `THEMENAME/particles/PARTICLENAME.yaml` to `THEMENAME/custom/particles`

3. Copy `THEMENAME/scss/THEMENAME/_PARTICLENAME.scss` to `THEMENAME/custom/scss` (note the underscore at the start of the file name).

4. For any JS files that you know to be required by the particle, copy `THEMENAME/js/JSFILENAME.js` to `THEMENAME/custom/js`

5. If you don't have a custom.scss file already then you need to create one (plain text file). Your custom.scss file should be put in `THEMENAME/custom/scss`. Your custom SCSS file must have this statement as the first line:

    ```css
    @import "dependencies";
    ```

    The next thing you need to do is to ensure that the SCSS for the particle is loaded too. We do this by including it into our custom SCSS file.

    ```css
        @import "PARTICLENAME";
    ```

    !!! You do **not** prefix the *PARTICLENAME* with an underscore.

6. If the particle does use a separate JS file then you may need to load that JS file (check to see if it is being loaded in PARTICLENAME.html.twig. If so, you do not need to load it). You do this in your **recipient** theme in the base outline on the **Page Settings** tab.


    ![](copy-particle_1.png)

7. The particle that you are copying may also have a dependency on a JS library (e.g. jQuery, Mootools, etc) so you may also need to ensure the appropriate library is loaded too. You do this again on the **Page Settings** tab of the base outline by dragging the **JavaScript Frameworks** atom onto the Atoms section (if you don't already have one) and then editing the atom settings to toggle on the appropriate framework.

    ![](copy-particle_2.png)

8. Go to the base outline **Styles** tab and click on **Recompile CSS**.

That's it! Now you should be able to use the particle from your **donor** theme in your new **recipient** theme.
