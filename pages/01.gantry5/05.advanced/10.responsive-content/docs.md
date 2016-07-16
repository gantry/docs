---
title: Custom Responsive Grids in Content
taxonomy:
    category: docs
    tag: [gantry5]
---

Sometimes, you will want to create custom responsive content within the bounds of a simple content area. For example, within an article/post on your site, as opposed to being created dynamically through a particle.

The way this is done in Gantry 5 is a lot like it was in Gantry 4, with a few minor differences in syntax.

When using these classes, create your HTML code for a block, then set the percentage size that the block should use.

You repeat this process until the accumulated total of your blocks is equal to a 100% for any given grid.

This is the basic structure example for the grid-block:
 
![](blocks.png)

In **mobile** view, these blocks will stack on top of each other while in **tablet** or **desktop** view, these blocks will scale responsively.

If you want some spacing or a margin between your blocks, use the gantry-width spacer class.

Here is a quick breakdown of the available classes, and if you're familiar with Gantry 4, their equivalent class name in Gantry 4.

| Gantry 4 Class Name    | Gantry 5 Class Name |
| :-----                 | :-----              |
| gantry-row             | g-row               |
| gantry-width-container | g-container         |
| gantry-width-%%        | size-%%             |
| gantry-width-spacer    | *`non existant`*    |

The available custom widths are `.size-5 .size-10`, `.size-15`, `.size-20`, `.size-25`, `.size-30`, `.size-33`, `.size-40`, `.size-50`, `.size-60`, `.size-66`, `.size-70`, `.size-75`, `.size-80`, `.size-90 .size-95`.

Here are some examples along with the code that created them.

## Example 1

![](example1.jpg)

In this example we create a one row/four column pricing table.

```html
<div class="g-grid">
    <div class="g-block size-100">
        <p>All plans come with awesome support by email and phone. There is no hidden fee!</p>
    </div>
</div>

<div class="g-grid container">
    <!-- Column1 - Basic -->
    <div class="g-block size-25">
        <ul class="rt-table">
            <li class="rt-table-title">Basic</li>
            <li class="rt-table-price">$28</li>
            <li class="rt-table-description">Globally incubate standards compliant channels</li>
            <li class="rt-table-item">5GB Storage</li>
            <li class="rt-table-item">10 Users</li>
            <li class="rt-table-item">20 Emails</li>
            <li class="rt-table-cta-button"><a class="readon" href="http://www.rockettheme.com/joomla/templates/osmosis">Sign Up</a></li>
        </ul>
    </div>
    <!-- Column2 - Standard -->
    <div class="g-block size-25">
        <ul class="rt-table">
            <li class="rt-table-title">Standard</li>
            <li class="rt-table-price">$58</li>
            <li class="rt-table-description">Globally incubate standards compliant channels</li>
            <li class="rt-table-item">25GB Storage</li>
            <li class="rt-table-item">20 Users</li>
            <li class="rt-table-item">30 Emails</li>
            <li class="rt-table-cta-button"><a class="readon" href="http://www.rockettheme.com/joomla/templates/osmosis">Sign Up</a></li>
        </ul>
    </div>
    <!-- Column3 - Titanium -->
    <div class="g-block size-25">
        <ul class="rt-table">
            <li class="rt-table-title">Titanium</li>
            <li class="rt-table-price">$88</li>
            <li class="rt-table-description">Globally incubate standards compliant channels</li>
            <li class="rt-table-item">50GB Storage</li>
            <li class="rt-table-item">30 Users</li>
            <li class="rt-table-item">40 Emails</li>
            <li class="rt-table-cta-button"><a class="readon" href="http://www.rockettheme.com/joomla/templates/osmosis">Sign Up</a></li>
        </ul>
    </div>
    <!-- Column4 - Platinum -->
    <div class="g-block size-25">
        <ul class="rt-table rt-table-last-col">
            <li class="rt-table-title">Platinum</li>
            <li class="rt-table-price">$288</li>
            <li class="rt-table-description">Globally incubate standards compliant channels</li>
            <li class="rt-table-item">500GB Storage</li>
            <li class="rt-table-item">100 Users</li>
            <li class="rt-table-item">200 Emails</li>
            <li class="rt-table-cta-button"><a class="readon" href="http://www.rockettheme.com/joomla/templates/osmosis">Sign Up</a></li>
        </ul>
    </div>
</div>
```

## Example 2
 
![](example2.jpg)

This is a straight forward example of a one row/four column presentation of alternating text content and images.

```html
<div class="g-grid">
    <div class="g-block size-100">
        <p>Free <strong>10 days trial</strong> on all plans. No credit card needed! Need a bigger plan? <a href="http://www.rockettheme.com/joomla/templates/osmosis">View Professional Plan</a>.</p>
    </div>
</div>

<div class="g-grid">
    <!-- Row1 Column1 - Text -->
    <div class="g-block size-25">
        <div class="g-block size-spacer">
            <a href="#">Dropdown Menu</a>
            <p>A Dropdown Menu system, with inline icons, multiple columns and much more.</p>
            <p>
                <a href="#" class="button button-3 button-small">Learn More</a>
            </p>
        </div>
    </div>
    <!-- Row1 Column2 - Image -->
    <div class="g-block size-25">
        <div class="g-block size-spacer">
            <span class="rt-image">
                <img src="http://localhost:8081/Xenon/images/rocketlauncher/features/overview/img-04.jpg" alt="image">
            </span>
        </div>
    </div>
    <!-- Row1 Column3 - Text -->
    <div class="g-block size-25">
        <div class="g-block size-spacer">
            <a href="#">Positions</a>
            <p>Unlimited positions, with drag and drop add, delete, move and resize capabilities.</p>
            <p>
                <a href="#" class="button button-3 button-small">Learn More</a>
            </p>
        </div>
    </div>
    <!-- Row1 Column4 - Image -->
    <div class="g-block size-25">
        <div class="g-block size-spacer">
            <span class="rt-image">
                <img src="http://localhost:8081/Xenon/images/rocketlauncher/features/overview/img-05.jpg" alt="image">
            </span>
        </div>
    </div>
</div>
```

## Example 3
 
![](example3.jpg)

The first portion is a two row/two column photo gallery, the second is a one row/three column Image & Text layout.

```html
<div class="g-grid">
    <!-- Left 50% Sidebar Wrapper -->
    <div class="g-block size-50">
        <!-- Left 50% Sidebar -> Inner Row 1 with Side by Side Images -->
        <div class="g-grid">
            <!-- Top Left Image -->
            <div class="g-block size-50">
                <div class="rt-image-effect">
                    <img src="images/rocketlauncher/home/fp-feature/img-01.jpg" alt="image" />
                    <div class="rt-image-effect-caption">
                        <p>
                            <a href="/component/content/article?id=1&Itemid=111"><i class="fa fa-fw fa-file-text-o"></i></a>
                            <a href="http://www.rockettheme.com/joomla/templates/myriad"><i class="fa fa-fw fa-file-image-o"></i></a>
                            <a data-rokbox href="/images/rocketlauncher/home/fp-feature/img-01.jpg"><i class="fa fa-fw fa-search"></i></a>
                        </p>
                    </div>
                </div>
            </div>
            <!-- Top Right Image -->
            <div class="g-block size-50">
                <div class="rt-image-effect">
                    <img src="images/rocketlauncher/home/fp-feature/img-01.jpg" alt="image" />
                    <div class="rt-image-effect-caption">
                        <p>
                            <a href="/component/content/article?id=1&Itemid=111"><i class="fa fa-fw fa-file-text-o"></i></a>
                            <a href="http://www.rockettheme.com/joomla/templates/myriad"><i class="fa fa-fw fa-file-image-o"></i></a>
                            <a data-rokbox href="/images/rocketlauncher/home/fp-feature/img-02.jpg"><i class="fa fa-fw fa-search"></i></a>
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Right 50% Sidebar -> Inner Row 2 with Side by Side Images -->
        <div class="g-grid">
            <!-- Bottom Left Image -->
            <div class="g-block size-50">
                <div class="rt-image-effect">
                    <img src="images/rocketlauncher/home/fp-feature/img-01.jpg" alt="image" />
                    <div class="rt-image-effect-caption">
                        <p>
                            <a href="/component/content/article?id=1&Itemid=111"><i class="fa fa-fw fa-file-text-o"></i></a>
                            <a href="http://www.rockettheme.com/joomla/templates/myriad"><i class="fa fa-fw fa-file-image-o"></i></a>
                            <a data-rokbox href="/images/rocketlauncher/home/fp-feature/img-03.jpg"><i class="fa fa-fw fa-search"></i></a>
                        </p>
                    </div>
                </div>
            </div>
            <!-- Bottom Right Image -->
            <div class="g-block size-50">
                <div class="rt-image-effect">
                    <img src="images/rocketlauncher/home/fp-feature/img-01.jpg" alt="image" />
                    <div class="rt-image-effect-caption">
                        <p>
                            <a href="/component/content/article?id=1&Itemid=111"><i class="fa fa-fw fa-file-text-o"></i></a>
                            <a href="http://www.rockettheme.com/joomla/templates/myriad"><i class="fa fa-fw fa-file-image-o"></i></a>
                            <a data-rokbox href="/images/rocketlauncher/home/fp-feature/img-04.jpg"><i class="fa fa-fw fa-search"></i></a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Right 50% Sidebar Wrapper -->
    <div class="g-block size-50">
        <!-- Inner Row -->
        <div class="g-grid">
            <!-- Left Block -->
            <div class="g-block size-33">
                <div>
                    <div class="rt-icon-badge rt-text-accent2"><span class="fa fa-desktop"></span></div>
                    <h5 class="medpaddingtop rt-text-accent2">Responsive Layout</h5>
                    <p>A responsive layout automatically adapts to the viewing device, allowing for tablets.</p>
                    <a href="/component/content/article?id=1&Itemid=111" class="readon4">Read More</a>
                </div>
            </div>

            <!-- Middle Block -->
            <div class="g-block size-33">
                <div>
                    <div class="rt-icon-badge rt-text-accent3"><span class="fa fa-th"></span></div>
                    <h5 class="medpaddingtop rt-text-accent3">Editable Structure</h5>
                    <p>The template manager offers configuration options to individually control each module.</p>
                    <a href="/component/content/article?id=1&Itemid=111" class="readon3">Read More</a>
                </div>
            </div>

            <!-- Right Block -->
            <div class="g-block size-33">
                <div>
                    <div class="rt-icon-badge rt-text-accent2"><span class="fa fa-mobile-phone"></span></div>
                    <h5 class="medpaddingtop rt-text-accent2">Mobile Support</h5>
                    <p>Vermilion has responsive styling for smartphones, but also benefits from a mobile.</p>
                    <a href="/component/content/article?id=1&Itemid=111" class="readon4">Read More</a>
                </div>
            </div>
        </div>
    </div>
</div>
```

This is what the iPhone 6 view looks like of the above three examples:

![](examples1-3.jpg)


## Example 4

![](example5.jpg?classes=shadow,border)

This is a three row/two column presentation of Image & Text with the left-right positioning alternating for each row.

```html
<div class="example4">
    <!-- Row1 - Image Left -->
    <div class="g-grid">
        <div class="g-block">
            <div class="g-grid">
                <div class="g-block size-33">
                    <span class="rt-image">
                        <img src="images/rocketlauncher/features/overview/50/img-04.jpg" alt="image">
                    </span>
                </div>
                <div class="g-block size-66">
                    <a class="g-title-subhero" href="#">Dropdown Menu</a>
                    <p>A Dropdown Menu system, with inline icons, multiple columns and much more.</p>
                    <p>One of the newest additions to the Gantry framework coming in Gantry5 is the powerful Menu Editor.</p>
                    <p>This global administrative panel gives you the ability to quickly and easily enhance your site’s menus.</p>
                    <p>
                        <a href="#" class="button button-3 button-small">Learn More</a>
                    </p>
                </div>
            </div>
        </div>
    </div>

    <!-- Row2 - Image Right -->
    <div class="g-grid">
        <div class="g-block">
            <div class="g-grid">
                <div class="g-block size-66">
                    <a class="g-title-subhero" href="#">Positions</a>
                    <p>Unlimited positions, with drag and drop add, delete, move and resize capabilities.</p>
                    <p>One of the most difficult and time-consuming tasks associated with migrating your Joomla site from one template to another is having to reassign all of your modules from one position naming scheme to another.</p>
                    <p>
                        <a href="#" class="button button-3 button-small">Learn More</a>
                    </p>
                </div>
                <div class="g-block size-33">
                    <span class="rt-image">
                        <img src="images/rocketlauncher/features/overview/50/img-05.jpg" alt="image">
                    </span>
                </div>
            </div>
        </div>
    </div>

    <!-- Row3 - Image Left -->
    <div class="g-grid">
        <div class="g-block">
            <div class="g-grid">
                <div class="g-block size-33">
                    <span class="rt-image">
                        <img src="images/rocketlauncher/features/overview/50/img-06.jpg" alt="image">
                    </span>
                </div>
                <div class="g-block size-66">
                    <a class="g-title-subhero" href="#">Variations</a>
                    <p>A Dropdown Menu system, with inline icons, multiple columns and much more.</p>
                    <p>One of the newest additions to the Gantry framework coming in Gantry5 is the powerful Menu Editor.</p>
                    <p>This global administrative panel gives you the ability to quickly and easily enhance your site’s menus.</p>
                    <p>
                        <a href="#" class="button button-3 button-small">Learn More</a>
                    </p>
                </div>
            </div>
        </div>
    </div>

    <!-- Row4 - Image Right -->
    <div class="g-grid">
        <div class="g-block">
            <div class="g-grid">
                <div class="g-block size-66">
                    <a class="g-title-subhero" href="#">Presets</a>
                    <p>Unlimited positions, with drag and drop add, delete, move and resize capabilities.</p>
                    <p>One of the most difficult and time-consuming tasks associated with migrating your Joomla site from one template to another is having to reassign all of your modules from one position naming scheme to another.</p>
                    <p>
                        <a href="#" class="button button-3 button-small">Learn More</a>
                    </p>
                </div>
                <div class="g-block size-33">
                    <span class="rt-image">
                        <img src="images/rocketlauncher/features/overview/50/img-07.jpg" alt="image">
                    </span>
                </div>
            </div>
        </div>
    </div>

    <!-- Row5 - Image Left -->
    <div class="g-grid">
        <div class="g-block">
            <div class="g-grid">
                <div class="g-block size-33">
                    <span class="rt-image">
                        <img src="images/rocketlauncher/features/overview/50/img-08.jpg" alt="image">
                    </span>
                </div>
                <div class="g-block size-66">
                    <a class="g-title-subhero" href="#">Responsive</a>
                    <p>Unlimited positions, with drag and drop add, delete, move and resize capabilities.</p>
                    <p>One of the most difficult and time-consuming tasks associated with migrating your Joomla site from one template to another is having to reassign all of your modules from one position naming scheme to another.</p>
                    <p>
                        <a href="#" class="button button-3 button-small">Learn More</a>
                    </p>
                </div>
            </div>
        </div>
    </div>

    <!-- Row6 - Image Right -->
    <div class="g-grid">
        <div class="g-block">
            <div class="g-grid">
                <div class="g-block size-66">
                    <a class="g-title-subhero" href="#">Typography</a>
                    <p>Unlimited positions, with drag and drop add, delete, move and resize capabilities.</p>
                    <p>One of the most difficult and time-consuming tasks associated with migrating your Joomla site from one template to another is having to reassign all of your modules from one position naming scheme to another.</p>
                    <p>
                        <a href="#" class="button button-3 button-small">Learn More</a>
                    </p>
                </div>
                <div class="g-block size-33">
                    <span class="rt-image">
                        <img src="images/rocketlauncher/features/overview/50/img-09.jpg" alt="image">
                    </span>
                </div>
            </div>
        </div>
    </div>
</div>
```
