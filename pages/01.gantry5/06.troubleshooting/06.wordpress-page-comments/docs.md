---
title: WordPress Page Comments Not Displaying
taxonomy:
    category: docs
    tag: [gantry5]
---

If you are using a Gantry 5 WordPress theme, and you are having an issue with Comments being displayed on your WordPress Page, please read the following.

1) Ensure your Page has comments enabled.

![](img-01.jpg?classes=shadow,border)

2) Ensure that you have a Page Content Particle in your Page Outline's Layout and that your Outline is assigned to the correct Page.

![](img-02.jpg?classes=shadow,border)

![](img-03.jpg?classes=shadow,border)

3) If both of those are OK and you still are not seeing comments on your WordPress Page. You most likely need to add the following Twig code to your theme's `/views/content/content-page.html.twig`:


```html
        {# Begin Comments #}
        {% if (post.comment_status == 'open' or post.comment_count > 0) and post.post_type != 'product' %}
            {{ function('comments_template') }}
        {% endif %}
        {# End Comments #}
```

Add it after the End Entry Content comment in that twig file:

```html
        {# End Entry Content #}
```

That's it! You should now be able to see the comments form on your WordPress Page.

![](img-04.jpg?classes=shadow,border)

