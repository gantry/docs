---
title: Flex Elements are Larger than Expected
taxonomy:
    category: docs
    tag: [gantry5]
---

Adding padding to Flex elements can cause a noticeable glitch in some IE versions. 

Elements are bigger than expected - the last Element is in a new row. The problem only occurs in Internet Explorer and can be fixed by adding a `max-width` or by adding `flex-basis: auto;` to the Flex Elements.

Example:

In HTML:

```html
<div class="g-grid">                        
        <div class="g-block size-25 somepadding">
```

In CSS:

```css
.somepadding {
  padding: 10px;
}

.size-25 {
    -webkit-box-flex: 0;
    -moz-box-flex: 0;
    box-flex: 0;
    -webkit-flex: 0 25%;
    -moz-flex: 0 25%;
    -ms-flex: 0 25%;
    flex: 0 25%;
    width: 25%;
    flex-basis: auto;
}


The Fix in CSS:

```css
`*[class*='size-'] {
    flex-basis: auto;
}`