---
title: Customize the Error Page
taxonomy:
    category: docs
---

Customize the Error Page
========================
Joomla comes with a default 404 Error Page which Gantry can override at `/templates/[TEMPLATE]/error.php`.

![](default-404.jpg)

We can customize the Gantry error page by directly editing the `error.php` file. In this tutorial, we will explain how to customize the error page with a simple design.

In this example, we will customize the error page to look like the following.

![](custom-404.jpg)


Step 1: Edit the Error Page
---------------------------
Edit the `rt-error-body` area in `/templates/[TEMPLATE]/error.php` to reflect the following.

```html
<div id="rt-error-body">
  <div class="rt-container">
    <div class="component-content">
      <div class="rt-grid-12">
        <div class="rt-block">
          <div class="rt-error-box custom-404">
            <div>
            <h1 class="error-title title"><?php echo $this->error->getCode(); ?></h1>
            <h2 class="error-message"><?php echo $this->error->getMessage(); ?></h2>
            <div class="error-content">
            <p>The page you requested cannot be found.</p>
            <p><a href="<?php echo $gantry->baseUrl; ?>"><span>Return to the Homepage</span></a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```


Step 2: Adding Custom CSS
-------------------------
[Add a custom css file](custom_stylesheet.md) for styling our custom error page, and load it by adding the stylesheet link declaration in `error.php`.

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="<?php echo $this->language; ?>" lang="<?php echo $this->language; ?>" dir="<?php echo $this->direction; ?>">
<head>

<title><?php echo $this->error->getCode(); ?> - <?php echo $this->title; ?></title>
<link rel="stylesheet" href="<?php echo $this->baseurl; ?>/templates/<?php echo $this->template; ?>/css/gantry-compiled.css" type="text/css" />
<link rel="stylesheet" href="<?php echo $this->baseurl; ?>/templates/<?php echo $this->template; ?>/css/fusionmenu.css" type="text/css" />
<link rel="stylesheet" href="<?php echo $this->baseurl; ?>/templates/<?php echo $this->template; ?>/css/typography.css" type="text/css" />
<link rel="stylesheet" href="<?php echo $this->baseurl; ?>/templates/<?php echo $this->template; ?>/css/font-awesome.css" type="text/css" />

<!-- Adding Custom CSS -->
<link rel="stylesheet" href="<?php echo $this->baseurl; ?>/templates/<?php echo $this->template; ?>/css/gantry-custom.css" type="text/css" />
```

Add the following rules and properties to our custom stylesheet, `gantry-custom.css`.

```css
/* Custom Error */
.custom-404 {text-align: center;}
.custom-404 h1, .custom-404 h2 {border: none; box-shadow: none; margin: 0; padding: 0;}
.custom-404 h1 {font-size: 8.0em; text-shadow: 3px 3px 0 rgba(0, 0, 0, 0.1);}
.custom-404 h2 {font-size: 2.0em; line-height: 2.0em;}
```
