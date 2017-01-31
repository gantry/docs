---
title: Advanced Theme Customization
taxonomy:
    category: docs
    tag: [gantry5]
---

Throughout this documentation, we have outlined a multitude of different methods you can use to configure and customize your Gantry 5 theme. There are some cases where you will find yourself wanting to take theme customization to a new level. Adding, removing, and even creating brand new features for a Gantry 5 theme is not only possible, it's relatively easy to do.

In this guide, we will combine several techniques outlined previously in our documentation to make a drastic change to an existing Gantry 5 theme.

For our example, we will be adding a fixed navigation section to our theme. This will enable users to access the navigation, even as they scroll down the page. This is achieved by adding JavaScript which detects users scrolling down the page, as well as some custom styling.

Here is a quick list of useful guides to help you with this tutorial:

* [Develop and Production Modes](../../configure/extras#development-and-production-modes)
* [Custom CSS / JS Atom](../../particles/atoms#custom-css-js)
* [Recompiling CSS](../../configure/styles#controls)
* [Customizing Theme Files](../../advanced/customizing-theme-files)
* [Creating a Custom Style Sheet](../../tutorials/adding-a-custom-style-sheet)
* [Headroom.js Documentation](http://bit.ly/1bzlyd3)

## Three Methods

There are three ways to do some incredible things with your theme in Gantry 5. This particular guide focuses on adding a new feature to your theme, and we will detail a few ways to accomplish it.

The first method involves **Atoms**, powerful particles that add code to your pages site-wide. Atoms are a great way to have external CSS and JavaScript load when your page renders and become accessible to your theme without having to edit any core or theme-specific files to do so. Atoms are site-wide and serve as a one-stop-shop for adding scripting to your pages. 

Another method involves the various fields of the **Page Settings** tab in your administrator. Like Atoms, these fields add scripting directly to your site, but they come with the added bonus of being able to be specifically assigned to specific outlines. This way you can have a JavaScript script or CSS load on specific pages without having to be available on others. 

The third method is the one we recommend the least, and we'll detail it in the following paragraphs. Essentially, it involves directly editing core and/or theme-specific files on the back end. It's useful to know this process, but for the vast majority of applications, it isn't necessary. It will also open the door to possible issues down the road as Gantry and theme updates may override these changes or cause other unforeseen issues.

## Override page.html.twig (Not Recommended)

![Theme Customization](theme_customization_1.png?classes=shadow,border)

The `page.html.twig` file is the blueprint by which Gantry 5 creates a page. You can find this file in `SITE_ROOT/media/gantry5/engines/nucleus/templates/` and we will need to modify it to incorporate the fixed section.

!! We do not recommend this method, but are listing here in the event that you really want to edit these files directly. Using this method may result in a loss of your changes and/or broken code in the event that your theme and/or Gantry is updated.

There are two options available to you at this point. If you are creating a brand new theme or are bound and will be in control of exactly what changes are made during theme updates, you can directly edit the `page.html.twig` file. In the vast majority of circumstances, this will not be the preferred option.

For most developers using a pre-existing theme or that would like to have this file safe from being overwritten in the event of a theme update, you will want to copy it and place the copy in `THEME_DIR/custom/engine/templates/`. This copy will become the default source for Gantry 5, and will not change when a theme is updated.

Our preferred method involves putting this information in the **Page Settings** tab of the Gantry administrator. We will demonstrate both of these methods below.

## Add Headroom.js

[Headroom.js](http://bit.ly/1bzlyd3) is a very useful script for creating fixed navigation. 

This step is optional, but will enable your navigation section to disappear when it isn't needed, and come into focus when it is. This is a big space-saver for your site, and a welcome addition when visitors are browsing with a landscape-oriented browser. 

There are two ways you can add this script to your site. You can have it set up to be locally loaded or remotely [via a CDN](https://cdnjs.com/libraries/headroom). There are advantages and disadvantages to each method, so we will cover both methods here.

### Method 1: Local Installation

![Theme Customization](theme_customization_2.png?classes=shadow,border)

The first step to installing `headroom.js` on your local site is to download it. You can download `headroom.js` from [Github](https://github.com/WickyNilliams/headroom.js). 

Once you download it, you need to unzip the `headroom.js-master.zip` file. You will find several files and folders, but the one you need is called `dist`. In the `dist` folder, you will see three different versions of `headroom.js` - one written in **Angular**, one in **jQuery** and one in pure **JavaScript**. We will use the pure JS one for this tutorial, as it does not require additional JS libraries to be installed. This version is given the file name `headroom.min.js`.

You need to keep all your modifications and additions in the `THEME_DIR/custom/` directory so they do not get overwritten when you update the template. Then, create the `THEME_DIR/custom/js/` directory structure and copy the `headroom.min.js` file there.

[ui-tabs position="top-left" active="0"]
[ui-tab title="Atoms Method"]

![](local_1.png?classes=shadow,border)

Now, all you need to do is add a script to the page before the `</body>` tag. You can do this through the Gantry 5 Administrator's **Page Settings** tab using a feature called **Atoms**. They can be found at the bottom of the tab. Simply drag-and-drop a **Custom CSS / JS** atom down to the atoms bar and create a new **JavaScript** item.

In the item, you will want to paste `gantry-theme://custom/js/headroom.min.js` in the **File Location** field and select the **Before </body>** option before selecting **Apply**.

[/ui-tab]
[ui-tab title="Page Settings Method"]

![](local_2.png?classes=shadow,border)

Now, all you need to do is add a script to the page before the `</body>` tag. You can do this through the Gantry 5 Administrator's **Page Settings** tab. This gives you control over which page(s) the effect appears on. Just locate the **Before </body>** field and enter the following:



```html
<script type="text/javascript" src="{{ url('gantry-theme://custom/js/headroom.min.js') }}"></script>
```



[/ui-tab]
[ui-tab title="File Override (Not Recommended)"]

Now, you will need to add a script to `page.html.twig` in order to load `headroom.min.js` on each page. Here is the line of code you will want to place just above the `</body>` tag.



```html
<script type="text/javascript" src="{{ url('gantry-theme://custom/js/headroom.min.js') }}"></script>
```



[/ui-tab]
[/ui-tabs]

### Method 2: Loading Remotely

[ui-tabs position="top-left" active="0"]
[ui-tab title="Atoms Method"]

Adding the script remotely is pretty easy. You can do this through the Gantry 5 Administrator's **Page Settings** tab using a feature called **Atoms**. They can be found at the bottom of the tab. Simply drag-and-drop a **Custom CSS / JS** atom down to the atoms bar and create a new **JavaScript** item.

In the item, you will want to paste the following url in the **File Location** field and, if desired, select the **Before </body>** option. You can now select **Apply**.



```html
//cdnjs.cloudflare.com/ajax/libs/headroom/0.7.0/headroom.min.js
```



The link may differ depending on where you wish to source the file from. [Here is a useful list](https://cdnjs.com/libraries/headroom).

[/ui-tab]
[ui-tab title="Page Settings Method"]

You can also load the script remotely. Just replace the above script in the **Before </body>** field with the following:



```html
<script src="//cdnjs.cloudflare.com/ajax/libs/headroom/0.7.0/headroom.min.js"></script>
```



The link may differ depending on where you wish to source the file from. [Here is a useful list](https://cdnjs.com/libraries/headroom).

[/ui-tab]
[ui-tab title="File Override (Not Recommended)"]

![](remote_2.png?classes=shadow,border)

Loading the script remotely is another option, and one that can be done pretty easily. You just need to add a line of script within the `<body>` tags of your `page.html.twig` file to access it. You can also have it load using an atom, but doing so this way will ensure that it loads on every page, without any additional effort required in the Gantry 5 administrator.

Here's an example of the line you would need to add to the file:

```html
<script src="//cdnjs.cloudflare.com/ajax/libs/headroom/0.7.0/headroom.min.js"></script>
```

This line would go just above the `</body>` tag in the file and may differ depending on the remote location you wish to have the script load from, CDN or otherwise.

[/ui-tab]
[/ui-tabs]

## Target Headroom.js

The next step involves adding another script to the page. This script will be placed directly above the `</body>` tag, just as we did in the previous step, below the script we used to add `headroom.min.js` to the page.

```twig
<script>
    // grab an element
    var myElement = document.querySelector("#g-navigation");
    // construct an instance of Headroom, passing the element
    var headroom  = new Headroom(myElement);
    // initialise
    headroom.init();

    // grab an element
    var myElement = document.querySelector(".g-offcanvas-toggle");
    // construct an instance of Headroom, passing the element
    var headroom  = new Headroom(myElement);
    // initialise
    headroom.init(); 
</script>
```

There are two areas of this script to pay close attention to. The `#g-navigation` target sets the **Navigation** section as the one that will be modified by the `headroom.min.js` file. If your menu is assigned to the **Header** section, you would replace this with `#g-header`.

The second section of script enables the Offcanvas section present for mobile devices to be used with this script.

Putting it all together, here's a look at the full section including our script from before, the script we just added, and the `</body>` tag.



```twig
    <script type="text/javascript" src="{{ url('gantry-theme://custom/js/headroom.min.js') }}"></script>
    <script>
        // grab an element
        var myElement = document.querySelector("#g-navigation");
        // construct an instance of Headroom, passing the element
        var headroom  = new Headroom(myElement);
        // initialise
        headroom.init();

        // grab an element
        var myElement = document.querySelector(".g-offcanvas-toggle");
        // construct an instance of Headroom, passing the element
        var headroom  = new Headroom(myElement);
        // initialise
        headroom.init(); 
    </script>
</body>
```



## Add the Style (SCSS)

This part of the guide is the meat and potatoes of this process. It tells the browser that your navigation section needs to be fixed, and will enable it to scroll with the user down the page. While `header.js` makes it appear and disappear as needed, this is really all that is required to make it stick to the top of the browser window.

[In a previous guide](../../tutorials/adding-a-custom-style-sheet), we detailed how to create a custom style sheet in Gantry 5. Using this method, you can add the following script to your `custom.scss` file.



```css
@import "dependencies";

#g-navigation.headroom--not-top {
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1001;
    left: 0;
}

.g-offcanvas-toggle.headroom--not-top {
    position: fixed;
    z-index: 1002;
}

.g-offcanvas-open {
    #g-navigation.headroom--not-top {
        left: $offcanvas-width;
    }
    .g-offcanvas-toggle.headroom--not-top {
        left: $offcanvas-width + 0.7rem;
    }
}

#g-navigation.headroom--not-top, .g-offcanvas-toggle.headroom--not-top {
    @include transition(all 0.3s);
}
```



This will get you up and running, however users that prefer more control over these elements can use this optional code below, instead. Remember that `#g-navigation` should be replaced with `#g-header` if your main menu is located in the **Header** section.

```scss
@import "dependencies";

//Fixed Header On Scroll - Advanced
.headroom {
    @include transition(transform 200ms linear);
}
.headroom--pinned {
    @include transform(translateY(0%));
}
.headroom--unpinned {
    @include transform(translateY(-100%));
}

#g-navigation.headroom--not-top {
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1001;
    left: 0;
}

.g-offcanvas-toggle.headroom--not-top {
    position: fixed;
    z-index: 1002;
    &.headroom--unpinned {
        top: 0;
    }
}

.g-offcanvas-open {
    #g-navigation.headroom--not-top {
        left: $offcanvas-width;
    }
    .g-offcanvas-toggle.headroom--not-top {
        left: $offcanvas-width + 0.7rem;
    }
}

#g-navigation.headroom--not-top, .g-offcanvas-toggle.headroom--not-top {
    @include transition(all 0.3s);
}
```

Once you have added this script to your `custom.scss` file, you will want to [recompile CSS](../../configure/styles#controls) if you are in [**Production** mode](configure/extras#development-and-production-modes), or simply reload the front end and test if you are in [**Develop** mode](configure/extras#development-and-production-modes).
