---
title: Roadmap
taxonomy:
    category: docs
    tag: [gantry5]
gravui:
    enabled: true
    tabs: true
process:
    twig: true
---

Gantry 5's, launching initially for the Joomla platform, is a multi-phase plan that includes key milestones leading up to the full initial release. We are providing this document to clarify which milestones we have planned for the next major release.

>>> This information is fluid and subject to change as we receive feedback from users and discover additional opportunities for improvement.

You can find a full changelog for releases from 5.0.0 and beyond [here](https://github.com/gantry/gantry5/blob/master/CHANGELOG.md).

{% set tab1 %}

5.2.5 Release
-----

| Platform  | Milestone                                                                                                                                                                                                                                                                                                                                                                                                           | Completed                                             |
| :-----    | :----                                                                                                                                                                                                                                                                                                                                                                                                               | :-----:                                               |
| Common    | Menu items have a new **Dropdown Direction** option, along with new mixins (`dropdown-left, dropdown-center, dropdown-right`), that will allow to configure where a dropdown should open to, relative to its parent. (thanks @[Bokelmann](https://github.com/Bokelmann) , @[JoomFX](https://github.com/JoomFX) and @[ramon12](https://github.com/ramon12) - #[1058](https://github.com/gantry/gantry5/issues/1058)) | <span style="color:green" class="fa fa-check"></span> |
|           | Selectize is now name-spaced with a `g-` prefix to avoid potential conflicts                                                                                                                                                                                                                                                                                                                                        | <span style="color:green" class="fa fa-check"></span> |
|           | Layout Manager: Add Row and Section Settings action icons are now always visible                                                                                                                                                                                                                                                                                                                                    | <span style="color:green" class="fa fa-check"></span> |
|           | Decimal size classes (`size-33-3`) are also using flexgrid (thanks @[adi8i](https://github.com/adi8i) - #[1047](https://github.com/gantry/gantry5/issues/1047))                                                                                                                                                                                                                                                     | <span style="color:green" class="fa fa-check"></span> |
|           | Reworked all tooltips. They are now JS based instead of CSS making the behavior more predictable as well as allowing longer text and HTML as content.                                                                                                                                                                                                                                                               | <span style="color:green" class="fa fa-check"></span> |
|           | Allow theme developer to assign attributes to grid element in layout preset file                                                                                                                                                                                                                                                                                                                                    | <span style="color:green" class="fa fa-check"></span> |
|           | Styles, Settings and Page groups of type `hidden` will now get properly hidden from the view                                                                                                                                                                                                                                                                                                                        | <span style="color:green" class="fa fa-check"></span> |
| WordPress | Separate configuration for each Multi Site blog (#[921](https://github.com/gantry/gantry5/issues/921))                                                                                                                                                                                                                                                                                                              | <span style="color:green" class="fa fa-check"></span> |


<a href="https://github.com/gantry/gantry5/milestones/5.2.5" class="button"><i class="fa fa-fw fa-github"></i> See the 5.2.5 Milestone</a>

{% endset %}
{% set tab2 %}

5.2.0 Release
-----

| Platform  | Milestone                                                              | Completed                                             |
| :-----    | :----                                                                  | :-----:                                               |
| Common    | Updated Hydrogen and Admin with the new Gantry logo. Thanks Henning!   | <span style="color:green" class="fa fa-check"></span> |
|           | Implemented New Page Settings Administrative Panel                     | <span style="color:green" class="fa fa-check"></span> |
|           | Moved Atoms from Layout to Page Settings                               | <span style="color:green" class="fa fa-check"></span> |
|           | Added Preview to Thumbnails List in File Picker                        | <span style="color:green" class="fa fa-check"></span> |
|           | New Streamlined Layouts YAML File Syntax                               | <span style="color:green" class="fa fa-check"></span> |
|           | Added Support for Nested Wrapper Divs with Customizable ID and Classes | <span style="color:green" class="fa fa-check"></span> |
| Joomla    | Disabled Caching from Particle Module by Default                       | <span style="color:green" class="fa fa-check"></span> |
| WordPress | Added Ability to Use Custom CSS Classes with Widgets                   | <span style="color:green" class="fa fa-check"></span> |


<a href="https://github.com/gantry/gantry5/compare/5.1.5...5.2.0" class="button"><i class="fa fa-fw fa-github"></i> See the 5.2.0 Changelog</a>

5.2.1 Release
-----

| Platform  | Milestone                                                                  | Completed                                             |
| :-----    | :----                                                                      | :-----:                                               |
| Common    | Hydrogen Now Requires Gantry 5.2+                                          | <span style="color:green" class="fa fa-check"></span> |
|           | Added Particle Icons for Particle Picker in Layout Manager and Menu Editor | <span style="color:green" class="fa fa-check"></span> |
|           | Enabled Automatic Cache Clearing after Gantry and Theme Upgrades           | <span style="color:green" class="fa fa-check"></span> |
| WordPress | Added Particle Icons for Login Form and Menu                               | <span style="color:green" class="fa fa-check"></span> |


<a href="https://github.com/gantry/gantry5/compare/5.2.0...5.2.1" class="button"><i class="fa fa-fw fa-github"></i> See the 5.2.1 Changelog</a>

5.2.2 Release (In Development)
-----

| Platform  | Milestone                                                                                                      | Completed                                             |
| :-----    | :----                                                                                                          | :-----:                                               |
| Common    | Added new `imagesize` Twig Filter that returns `width="X" height="Y"` as attributes for images                 | <span style="color:green" class="fa fa-check"></span> |
|           | Add Notification Message on Missing Particle in Front End #[185](https://github.com/gantry/gantry5/issues/185) | <span style="color:green" class="fa fa-check"></span> |
| WordPress | Greatly Improved Page Load Time #[738](https://github.com/gantry/gantry5/issues/738)                           | <span style="color:green" class="fa fa-check"></span> |

<a href="https://github.com/gantry/gantry5/compare/5.2.1...5.2.2" class="button"><i class="fa fa-fw fa-github"></i> See the 5.2.2 Changelog</a>

5.2.3 Release
-----

| Platform  | Milestone                                                                                                        | Completed                                             |
| :-----    | :----                                                                                                            | :-----:                                               |
| Common    | Offcanvas section now adds an option to switch between CSS3 and CSS2 animations, CSS3 being default and fastest. | <span style="color:green" class="fa fa-check"></span> |
| Joomla    | Added Updated Support for Joomla! 3.5                                                                            | <span style="color:green" class="fa fa-check"></span> |
|           | Module Picker Now Shows the Module ID                                                                            | <span style="color:green" class="fa fa-check"></span> |
| WordPress | Added Body Classes `dir-ltr` and `dir-rtl` based on current text direction settings.                             | <span style="color:green" class="fa fa-check"></span> |
|           | Added New Body Class Specific to Currently Used Outline                                                          | <span style="color:green" class="fa fa-check"></span> |

<a href="https://github.com/gantry/gantry5/compare/5.2.2...5.2.3" class="button"><i class="fa fa-fw fa-github"></i> See the 5.2.3 Changelog</a>

5.2.4 Release
-----

| Platform  | Milestone                                 | Completed                                             |
| :-----    | :----                                     | :-----:                                               |
| Common    | Updated FontAwesome to v4.5.0 (+20 icons) | <span style="color:green" class="fa fa-check"></span> |

<a href="https://github.com/gantry/gantry5/compare/5.2.3...5.2.4" class="button"><i class="fa fa-fw fa-github"></i> See the 5.2.4 Changelog</a>

{% endset %}
{% set tab3 %}

5.1.0 Release
-----

| Platform  | Milestone                                                                                                                                                                      | Completed                                             |
| :-----    | :----                                                                                                                                                                          | :-----:                                               |
| Common    | New Menu Item Disable Dropdowns options (thanks @JoomFX - #[611](https://github.com/gantry/gantry5/issues/611) / #[675](https://github.com/gantry/gantry5/issues/675))         | <span style="color:green" class="fa fa-check"></span> |
|           | Add Twig function preg_match() (#[627](https://github.com/gantry/gantry5/issues/627))                                                                                          | <span style="color:green" class="fa fa-check"></span> |
|           | Add support for new twig tags: assets, scripts and styles                                                                                                                      | <span style="color:green" class="fa fa-check"></span> |
|           | Added Icon picker for the To Top Particle, you can now have Icon only, Text only or both (thanks @adi8i - #[696](https://github.com/gantry/gantry5/issues/696))                | <span style="color:green" class="fa fa-check"></span> |
|           | You can now consult the Changelog within the admin.                                                                                                                            | <span style="color:green" class="fa fa-check"></span> |
|           | Add an example how to inject custom twig variables from the theme (see index.php in hydrogen)                                                                                  | <span style="color:green" class="fa fa-check"></span> |
|           | Available Themes: Open Preview in a new window                                                                                                                                 | <span style="color:green" class="fa fa-check"></span> |
|           | Updated Google Fonts library (+2 fonts)                                                                                                                                        | <span style="color:green" class="fa fa-check"></span> |
|           | Rendered titles for Menu Items is now an option of the Menu Particle (#[670](https://github.com/gantry/gantry5/issues/670))                                                    | <span style="color:green" class="fa fa-check"></span> |
|           | Updated Hydrogen sample content to be more platform agnostic                                                                                                                   | <span style="color:green" class="fa fa-check"></span> |
|           | Menu Items rendering on frontend do not render an id anymore, since the id is already available in the classname (#[629](https://github.com/gantry/gantry5/issues/629))        | <span style="color:green" class="fa fa-check"></span> |
|           | Improved UI/UX for Atoms section. A maximum of 5 Atoms are now ever displayed per row, returning to a new one if needed (#[451](https://github.com/gantry/gantry5/issues/451)) | <span style="color:green" class="fa fa-check"></span> |
|           | Improved SCSS 3.3/3.4 compatibility                                                                                                                                            | <span style="color:green" class="fa fa-check"></span> |
|           | Accessibility improvements in admin (#[673](https://github.com/gantry/gantry5/issues/673))                                                                                     | <span style="color:green" class="fa fa-check"></span> |
|           | Improve error message when parsing JS/CSS assets block fails (#[704](https://github.com/gantry/gantry5/issues/704))                                                            | <span style="color:green" class="fa fa-check"></span> |
|           | Change url() logic for plain ?foo=bar urls to avoid issues when url is requested together with domain                                                                          | <span style="color:green" class="fa fa-check"></span> |
| Joomla    | Fixed available theme notice text problems when no themes are installed (#[655](https://github.com/gantry/gantry5/issues/655))                                                 | <span style="color:green" class="fa fa-check"></span> |
|           | Fixed label alignment in Joomla popup email form (#[665](https://github.com/gantry/gantry5/issues/665))                                                                        | <span style="color:green" class="fa fa-check"></span> |
|           | Load missing Joomla assets on AJAX popups (#[683](https://github.com/gantry/gantry5/issues/683), #[684](https://github.com/gantry/gantry5/issues/684))                         | <span style="color:green" class="fa fa-check"></span> |
|           | Added missing responsive bootstrap classes required for Joomla editing views (#[684](https://github.com/gantry/gantry5/issues/684))                                            | <span style="color:green" class="fa fa-check"></span> |
|           | Fix missing preview image in template manager, fix gets applied after upgrading template (#[707](https://github.com/gantry/gantry5/issues/707))                                | <span style="color:green" class="fa fa-check"></span> |
|           | Fixed Joomla frontend article editor and popup styling issues (#[681](https://github.com/gantry/gantry5/issues/681))                                                           | <span style="color:green" class="fa fa-check"></span> |
|           | Added missing size class rules for Joomla frontend editing views                                                                                                               | <span style="color:green" class="fa fa-check"></span> |
|           | Fixed Joomla frontend image manager alignment issues                                                                                                                           | <span style="color:green" class="fa fa-check"></span> |
| WordPress | WordPress is now integrated with Gantry 5!                                                                                                                                     | <span style="color:green" class="fa fa-check"></span> |

<a href="https://github.com/gantry/gantry5/compare/5.0.1...5.1.0" class="button"><i class="fa fa-fw fa-github"></i> See the 5.1.0 Changelog</a>

5.1.1 Release
-----

| Platform  | Milestone                                                                                                                                                                               | Completed                                             |
| :-----    | :----                                                                                                                                                                                   | :-----:                                               |
| Common    | Layout Manager: Add block settings for nested sections (#[539](https://github.com/gantry/gantry5/issues/539))                                                                           | <span style="color:green" class="fa fa-check"></span> |
|           | Layout Manager: Add support for fixed width sections (#[115](https://github.com/gantry/gantry5/issues/115))                                                                             | <span style="color:green" class="fa fa-check"></span> |
|           | Custom JS/CSS Particle supports now inline CSS                                                                                                                                          | <span style="color:green" class="fa fa-check"></span> |
|           | Process shortcodes in custom HTML particle (#[369](https://github.com/gantry/gantry5/issues/369))                                                                                       | <span style="color:green" class="fa fa-check"></span> |
|           | New Twig extension and filter : `json_decode`                                                                                                                                           | <span style="color:green" class="fa fa-check"></span> |
|           | Dramatically improved the click/touch response in the whole Admin and G5 Particle Module (fixes #[551](https://github.com/gantry/gantry5/issues/551))                                   | <span style="color:green" class="fa fa-check"></span> |
|           | WAI-ARIA: Thanks to @Mediaversal, a lot of Admin work has been done for accessibility (#754 - ref. #[713](https://github.com/gantry/gantry5/issues/713))                                | <span style="color:green" class="fa fa-check"></span> |
|           | Catch and display warnings from SCSS compiler (#[705](https://github.com/gantry/gantry5/issues/))                                                                                       | <span style="color:green" class="fa fa-check"></span> |
|           | Dropdowns / Tags fields have been improved for tab stop, it is now easier to navigate through fields via keyboard (partly #[713](https://github.com/gantry/gantry5/issues/713) related) | <span style="color:green" class="fa fa-check"></span> |
|           | Enable twig debug extension if Gantry debug has been turned on                                                                                                                          | <span style="color:green" class="fa fa-check"></span> |
|           | Implemented validation for the Block Size of a Particle Block (#[539](https://github.com/gantry/gantry5/issues/539))                                                                    | <span style="color:green" class="fa fa-check"></span> |
|           | Add HTML body class for used layout preset (#[750](https://github.com/gantry/gantry5/issues/750))                                                                                       | <span style="color:green" class="fa fa-check"></span> |
| Joomla    | Use cleaner formatting in templateDetails.xml for positions                                                                                                                             | <span style="color:green" class="fa fa-check"></span> |
|           | Make Debug module position fixed to the bottom of every layout (#[715](https://github.com/gantry/gantry5/issues/715))                                                                   | <span style="color:green" class="fa fa-check"></span> |
|           | Fixed blocks using bootstrap responsive utility classes displaying improperly (#[722](https://github.com/gantry/gantry5/issues/722))                                                    | <span style="color:green" class="fa fa-check"></span> |
|           | Gantry update message is showing up even when there is no update (#[631](https://github.com/gantry/gantry5/issues/631))                                                                 | <span style="color:green" class="fa fa-check"></span> |
|           | Module positions not showing up after installing/updating theme (#[212](https://github.com/gantry/gantry5/issues/212))                                                                  | <span style="color:green" class="fa fa-check"></span> |
|           | Missing padding in modal windows of 3rd party components (#[746](https://github.com/gantry/gantry5/issues/746))                                                                         | <span style="color:green" class="fa fa-check"></span> |
| WordPress | Add Platform Settings into Extras menu                                                                                                                                                  | <span style="color:green" class="fa fa-check"></span> |
|           | Add support for Offline mode (#[759](https://github.com/gantry/gantry5/issues/759))                                                                                                     | <span style="color:green" class="fa fa-check"></span> |
|           | Make Timber functions to work from particles                                                                                                                                            | <span style="color:green" class="fa fa-check"></span> |

<a href="https://github.com/gantry/gantry5/compare/5.1.0...5.1.1" class="button"><i class="fa fa-fw fa-github"></i> See the 5.1.1 Changelog</a>

5.1.2 Release
-----

| Platform  | Milestone                                                                                                                                                                                                                                                                                                                                       | Completed                                             |
| :-----    | :----                                                                                                                                                                                                                                                                                                                                           | :-----:                                               |
| Common    | Fix regression in all collections (Social, Custom JS / CSS, etc) (#[761](https://github.com/gantry/gantry5/issues/761), #[762](https://github.com/gantry/gantry5/issues/762), #[764](https://github.com/gantry/gantry5/issues/764), #[767](https://github.com/gantry/gantry5/issues/767), #[768](https://github.com/gantry/gantry5/issues/768)) | <span style="color:green" class="fa fa-check"></span> |
|           | Fix Argument 1 passed to `RocketTheme\Toolbox\Blueprints\Blueprints::mergeArrays()` must be of the type array                                                                                                                                                                                                                                     | <span style="color:green" class="fa fa-check"></span> |
|           | Re-index collection lists to avoid gaps in the indexing (also fixes broken lists that were saved)                                                                                                                                                                                                                                               | <span style="color:green" class="fa fa-check"></span> |
|           | Fixed issue in Layout Manager where top level section settings would show the Block tab (#[766](https://github.com/gantry/gantry5/issues/766))                                                                                                                                                                                                  | <span style="color:green" class="fa fa-check"></span> |
| WordPress | Fixed issue when renaming an Outline that prevented it to further get edited, duplicated or deleted (#[588](https://github.com/gantry/gantry5/issues/588))                                                                                                                                                                                      | <span style="color:green" class="fa fa-check"></span> |

<a href="https://github.com/gantry/gantry5/compare/5.1.1...5.1.2" class="button"><i class="fa fa-fw fa-github"></i> See the 5.1.2 Changelog</a>

5.1.3 Release
-----

| Platform  | Milestone                                                                                                                                                                                                                                     | Completed                                             |
| :-----    | :----                                                                                                                                                                                                                                         | :-----:                                               |
| Common    | Icons Picker doesn't allow to select icons when none of them is actually selected (#[813](https://github.com/gantry/gantry5/issues/813)                                                                                                       | <span style="color:green" class="fa fa-check"></span> |
|           | Reduce overall memory usage                                                                                                                                                                                                                   |                                                       |
|           | Twig `url()`: Add support for timestamp max age (#[821](https://github.com/gantry/gantry5/issues/821)                                                                                                                                         | <span style="color:green" class="fa fa-check"></span> |
|           | Added notice to Custom JS/CSS atom that inline code should be stripped out of `<script>` and `<style>` tags.                                                                                                                                  | <span style="color:green" class="fa fa-check"></span> |
|           | Fixed `View on GitHub` button in the Changelog modal that was taking you nowhere                                                                                                                                                              | <span style="color:green" class="fa fa-check"></span> |
|           | Equalized blocks sizes are now always rounded to 1 decimal digit and will only be supported this way (fixes #[776](https://github.com/gantry/gantry5/issues/776)                                                                              | <span style="color:green" class="fa fa-check"></span> |
|           | Fix mkdir(): File exists` exception when copying existing folder structure (#[225](https://github.com/gantry/gantry5/issues/225)                                                                                                              | <span style="color:green" class="fa fa-check"></span> |
|           | Only the first menu item is showing up when menu is starting at level > 1 (#[780](https://github.com/gantry/gantry5/issues/780)                                                                                                               | <span style="color:green" class="fa fa-check"></span> |
|           | Error in menu starting at level > 1: `in_array()` expects parameter 2 to be array, string given (#[803](https://github.com/gantry/gantry5/issues/803)                                                                                         | <span style="color:green" class="fa fa-check"></span> |
|           | Fixed Division by zero error when setting a Block to Fixed and when that block is the only one, at 100%, in the grid (#[804](https://github.com/gantry/gantry5/issues/804)                                                                    | <span style="color:green" class="fa fa-check"></span> |
|           | Fixed checkbox field issue not storing the off state in YAML, needed for things such as Swipe gesture option (fixes #[802](https://github.com/gantry/gantry5/issues/802)                                                                      | <span style="color:green" class="fa fa-check"></span> |
|           | Saving outline style will not properly update CSS in some platforms (#[816](https://github.com/gantry/gantry5/issues/816)                                                                                                                     | <span style="color:green" class="fa fa-check"></span> |
|           | SCSS Compiler issue: White page if compiler gets interrupted (#[805](https://github.com/gantry/gantry5/issues/805)                                                                                                                            | <span style="color:green" class="fa fa-check"></span> |
|           | Fixed override logic in admin for the Styles panel where switching between Presets wasn't taking into account defaults from Base (#[818](https://github.com/gantry/gantry5/issues/818), #[820](https://github.com/gantry/gantry5/issues/820)) | <span style="color:green" class="fa fa-check"></span> |
|           | Global context is not available for particles in the menu                                                                                                                                                                                     | <span style="color:green" class="fa fa-check"></span> |
|           | Cached `index.yaml.php` files are getting updated on every request (#[834](https://github.com/gantry/gantry5/issues/834))                                                                                                                     | <span style="color:green" class="fa fa-check"></span> |
| Joomla    | Object returned by `JApplicationSite::getTemplate(true)` is not compatible (#[499](https://github.com/gantry/gantry5/issues/499))                                                                                                             | <span style="color:green" class="fa fa-check"></span> |
|           | Fix 'Parameter 1 to PlgSystemRedirect::handleError() expected to be a reference' (#[755](https://github.com/gantry/gantry5/issues/755))                                                                                                       | <span style="color:green" class="fa fa-check"></span> |
|           | Fix blank custom pages when format is not HTML (#[786](https://github.com/gantry/gantry5/issues/786))                                                                                                                                         | <span style="color:green" class="fa fa-check"></span> |
|           | Duplicating outlines does not copy everything (#[470](https://github.com/gantry/gantry5/issues/470))                                                                                                                                          | <span style="color:green" class="fa fa-check"></span> |
|           | Deleting outline may cause 500 errors in the backend (#[774](https://github.com/gantry/gantry5/issues/774))                                                                                                                                   | <span style="color:green" class="fa fa-check"></span> |
| WordPress | Implement a particle Widget (#[714](https://github.com/gantry/gantry5/issues/714))                                                                                                                                                            | <span style="color:green" class="fa fa-check"></span> |
|           | Added Login Form particle                                                                                                                                                                                                                     | <span style="color:green" class="fa fa-check"></span> |
|           | Hook streams URL filter into the_content, the_excerpt, widget_text and widget_content filters (#[779](https://github.com/gantry/gantry5/issues/779))                                                                                          | <span style="color:green" class="fa fa-check"></span> |
|           | Added new stream for wp-content directory                                                                                                                                                                                                     | <span style="color:green" class="fa fa-check"></span> |
|           | Added ability to use Widgets in menu (#[726](https://github.com/gantry/gantry5/issues/726))                                                                                                                                                   | <span style="color:green" class="fa fa-check"></span> |
|           | Added `wpautop` enabler in Hydrogen settings                                                                                                                                                                                                    | <span style="color:green" class="fa fa-check"></span> |
|           | Added WooCommerce support in themes declaration                                                                                                                                                                                               | <span style="color:green" class="fa fa-check"></span> |
|           | Added missing the_excerpt filter to excerpts in Hydrogen                                                                                                                                                                                      | <span style="color:green" class="fa fa-check"></span> |

<a href="https://github.com/gantry/gantry5/compare/5.1.2...5.1.3" class="button"><i class="fa fa-fw fa-github"></i> See the 5.1.3 Changelog</a>


5.1.4 Release
-----

| Platform  | Milestone                                                                                                                                                       | Completed                                             |
| :-----    | :----                                                                                                                                                           | :-----:                                               |
| Common    | Updated Google Fonts library (+4 fonts)                                                                                                                         | <span style="color:green" class="fa fa-check"></span> |
|           | Menu Particle: Implement base item support (#[666](https://github.com/gantry/gantry5/issues/666))                                                               | <span style="color:green" class="fa fa-check"></span> |
|           | Remove empty class div on Particle Module/Widget (#[778](https://github.com/gantry/gantry5/issues/778))                                                         | <span style="color:green" class="fa fa-check"></span> |
|           | Added additional utility block variation to provide equal heights when using box variations side by side (#[845](https://github.com/gantry/gantry5/issues/845)) | <span style="color:green" class="fa fa-check"></span> |
| Joomla    | Update minimum Joomla version requirement to 3.4.1 (fixes issues with `JModuleHelper::getModuleList()` missing)                                                 | <span style="color:green" class="fa fa-check"></span> |
|           | Fixed Menu Heading item type not displaying subtitles when set from Menu Editor                                                                                 | <span style="color:green" class="fa fa-check"></span> |
|           | Updated Hydrogen template thumbnail and preview images                                                                                                          | <span style="color:green" class="fa fa-check"></span> |
| WordPress | Ability to set custom cache path when hosting company doesn't allow PHP files in `wp-content/cache` ie. WPEngine                                                | <span style="color:green" class="fa fa-check"></span> |
|           | Added Gantry streams to the kses allowed protocols                                                                                                              | <span style="color:green" class="fa fa-check"></span> |
|           | Fixed Offline Mode not working properly                                                                                                                         | <span style="color:green" class="fa fa-check"></span> |
|           | Added missing Hydrogen block variations                                                                                                                         | <span style="color:green" class="fa fa-check"></span> |

<a href="https://github.com/gantry/gantry5/compare/5.1.3...5.1.4" class="button"><i class="fa fa-fw fa-github"></i> See the 5.1.4 Changelog</a>

5.1.5 Release
-----

| Platform  | Milestone                                                                                                                                                                              | Completed                                             |
| :-----    | :----                                                                                                                                                                                  | :-----:                                               |
| Common    | Enhanced the droppable areas for Menu Editor in the sublevels (#[132](https://github.com/gantry/gantry5/issues/132))                                                                   | <span style="color:green" class="fa fa-check"></span> |
|           | If layout.yaml file is missing, wrong layout preset gets loaded                                                                                                                        | <span style="color:green" class="fa fa-check"></span> |
|           | Fixed issue with multiple dropdown menu items not closing properly in some scenarios (#[863](https://github.com/gantry/gantry5/issues/863))                                            | <span style="color:green" class="fa fa-check"></span> |
|           | Fatal error if there is empty outline directory (#[867](https://github.com/gantry/gantry5/issues/867))                                                                                 | <span style="color:green" class="fa fa-check"></span> |
|           | Fixed issue with ajax calls where in some scenarios the URL would match a method causing the Ajax to fail (#[865](https://github.com/gantry/gantry5/issues/865))                       | <span style="color:green" class="fa fa-check"></span> |
| Joomla    | Added missing Module Class Suffix entry field for the Gantry Particle Module (#[871](https://github.com/gantry/gantry5/issues/871))                                                    | <span style="color:green" class="fa fa-check"></span> |
| WordPress | Changes indicator is now showing in Widgets and Customizer, whenever an instance gets modified and in order to remind of saving (#[822](https://github.com/gantry/gantry5/issues/822)) | <span style="color:green" class="fa fa-check"></span> |
|           | Gantry updates are now available and interactive in the Admin via a Purple bar notification (#[718](https://github.com/gantry/gantry5/issues/718))                                     | <span style="color:green" class="fa fa-check"></span> |
|           | Duplicating outline may cause 'Preset not found' error (#[859](https://github.com/gantry/gantry5/issues/859))                                                                          | <span style="color:green" class="fa fa-check"></span> |
|           | Fix WooCommerce and some other plugins from having missing CSS and JavaScript (requires theme update) (#[855](https://github.com/gantry/gantry5/issues/855))                           | <span style="color:green" class="fa fa-check"></span> |
|           | Fixed fatal errors with PHP <= 5.3, causing Hydrogen and Gantry to not display the proper errors of PHP incompatibility (#[833](https://github.com/gantry/gantry5/issues/833))         | <span style="color:green" class="fa fa-check"></span> |
|           | Fixed customizer JS errors thrown due to wrongly formatted before_widget (#[864](https://github.com/gantry/gantry5/issues/864))                                                        | <span style="color:green" class="fa fa-check"></span> |
|           | Newly cloned Outline should not have any assignments (#[866](https://github.com/gantry/gantry5/issues/866))                                                                            | <span style="color:green" class="fa fa-check"></span> |

<a href="https://github.com/gantry/gantry5/milestones/5.1.5" class="button"><i class="fa fa-fw fa-github"></i> See the 5.1.5 Milestone</a>

{% endset %}
{% set tab4 %}

5.0.0 Release
-----

| Category                   | Milestone                                                                                                | Completed                                             |
| :-----                     | :----                                                                                                    | :-----:                                               |
| Menu                       | Many bug fixes to synchronize Joomla with Gantry 5                                                       | <span style="color:green" class="fa fa-check"></span> |
|                            | Particles and Modules Can Now be Dropped in Non-parent Menu Items                                        | <span style="color:green" class="fa fa-check"></span> |
|                            | Fixed Cases Where Particle / Modules Wouldn't be Deletable                                               | <span style="color:green" class="fa fa-check"></span> |
|                            | Implemented the Option for Menu Items to Append a Hash Value (ie, `http://yourcustomlink.com/page#hash`) | <span style="color:green" class="fa fa-check"></span> |
|                            | Preventing Disabled Particles From Showing Up on Front End When Disabled                                 | <span style="color:green" class="fa fa-check"></span> |
|                            | Subtitles Now Display in the Interface                                                                   | <span style="color:green" class="fa fa-check"></span> |
| Outlines                   | Preventing Default and Non-Deletable Outlines from Being Deleted (UI Adjusted Accordingly)               | <span style="color:green" class="fa fa-check"></span> |
|                            | Fixed Case Where an Outline Wouldn't be Deletable Due to an Incorrect Flag                               | <span style="color:green" class="fa fa-check"></span> |
| Gantry 5 Particle Module   | Prevent Joomla from Stripping Out HTML Content                                                           | <span style="color:green" class="fa fa-check"></span> |
|                            | You Can Now Reset the Value and Change the Particle Type                                                 | <span style="color:green" class="fa fa-check"></span> |
| Assignments                | Introduced a New Filter to Display Only the Active Assignments                                           | <span style="color:green" class="fa fa-check"></span> |
|                            | You Can Now Assign to a Different Language                                                               | <span style="color:green" class="fa fa-check"></span> |
| Layout Manager             | UI/UX Enhancements in the Particles Picker. Now Fixed and Follows Page Scroll                            | <span style="color:green" class="fa fa-check"></span> |
|                            | When Loading a New Layout While Keeping Particles, a Warning Appears                                     | <span style="color:green" class="fa fa-check"></span> |
|                            | Fixed the PReset Informations when Using History and Jumping Between Different Presets                   | <span style="color:green" class="fa fa-check"></span> |
|                            | History Session Fixes                                                                                    | <span style="color:green" class="fa fa-check"></span> |
| Styles                     | Less Aggressive Box Sizing to Automatically Support Joomla and Third-party Implementations               | <span style="color:green" class="fa fa-check"></span> |
| Layout (Front End)         | Fixed Cases where Cumulative Sum of Side-by-side Sections wouldn't be 100% as Expected                   | <span style="color:green" class="fa fa-check"></span> |
|                            | Fixed Issue where Side-by-side Sections (Sidebars/Main) Would Have Overflow into Sidebars                | <span style="color:green" class="fa fa-check"></span> |
| Particles                  | You Can Now Load Particles via Joomla `{loadposition}`                                                   | <span style="color:green" class="fa fa-check"></span> |
|                            | Social Particle: Included a Title Parameter                                                              | <span style="color:green" class="fa fa-check"></span> |
|                            | Menu Particle: It is Now Possible to Choose the `Archive` Menu from the Dropdown                         | <span style="color:green" class="fa fa-check"></span> |
|                            | Menu Particle: Prevent the Rendering of an Empty Menu on the Front End                                   | <span style="color:green" class="fa fa-check"></span> |
|                            | Menu Particle: Fixed Menu Start Level                                                                    | <span style="color:green" class="fa fa-check"></span> |
|                            | Menu Particle: Accessibility Improvements                                                                | <span style="color:green" class="fa fa-check"></span> |
|                            | Menu Particle: Fixed Offcanvas Menu Height Calculations                                                  | <span style="color:green" class="fa fa-check"></span> |
|                            | To Top Particle: Scrolling to the Top is Now Smooth                                                      | <span style="color:green" class="fa fa-check"></span> |
| Global and Generic Changes | Added a New Development/Production Toggle in Extras Tab Allowing Toggle Between States                   | <span style="color:green" class="fa fa-check"></span> |
|                            | Development/Production Now Compiles Different CSS Output.                                                | <span style="color:green" class="fa fa-check"></span> |
|                            | System Plugin and Particle Module Are Now PHP 5.3 Compatible and Won't Fail with Error                   | <span style="color:green" class="fa fa-check"></span> |
|                            | Fixed "Cache Path Not Defined for Compiled Files"                                                        | <span style="color:green" class="fa fa-check"></span> |
|                            | Updated Google Fonts Library with 15+ New Fonts                                                          | <span style="color:green" class="fa fa-check"></span> |
|                            | Use Protocol-less URLs for Loading Google Fonts                                                          | <span style="color:green" class="fa fa-check"></span> |
|                            | Enhanced Filepicker, Now Uses Streams, Supports Drag-and-Drop from Desktop Uploading, Deletion           | <span style="color:green" class="fa fa-check"></span> |
|                            | Initial Work on the Multi-language Support                                                               | <span style="color:green" class="fa fa-check"></span> |
|                            | In Joomla Module Manager, Gantry 5 Particle Modules Will Now Display a Badge with Their Type             | <span style="color:green" class="fa fa-check"></span> |
|                            | Improved RTL Support and Automatic Detection                                                             | <span style="color:green" class="fa fa-check"></span> |
|                            | More Body Classes: Menu Item Page Suffix, Print-mode if Previewing a Print Page                          | <span style="color:green" class="fa fa-check"></span> |
|                            | Fixed Untranslated Positions String in the Joomla Module Editor on Front End                             | <span style="color:green" class="fa fa-check"></span> |
|                            | Fixed Page Heading Not Displaying in the Gantry 5 Custom View Page                                       | <span style="color:green" class="fa fa-check"></span> |

<a href="https://github.com/gantry/gantry5/compare/5.0.0-rc.3...5.0.0" class="button"><i class="fa fa-fw fa-github"></i> See the 5.0.0 Changelog</a>

5.0.1 Release
-----

| Milestone                                                                                                                                                      | Completed                                             |
| :----                                                                                                                                                          | :-----:                                               |
| Custom CSS / JS Atom now supports JavaScript to be dropped before </body> as well as inline scripting (thanks @adi8i)                                          | <span style="color:green" class="fa fa-check"></span> |
| Menu Items can now be set to only display the Icon or Image from the Menu Editor #[574](https://github.com/gantry/gantry5/issues/574)                          | <span style="color:green" class="fa fa-check"></span> |
| Added version number to Theme selector and Theme Configuration header #[560](https://github.com/gantry/gantry5/issues/560)                                     | <span style="color:green" class="fa fa-check"></span> |
| Custom CSS / JS Atom now allows to pick a CSS or JS file via filepicker as well as upload them directly from the picker                                        | <span style="color:green" class="fa fa-check"></span> |
| Minor CSS fixes for Joomla admin when in tablet and smaller viewport #[585](https://github.com/gantry/gantry5/issues/585)                                      | <span style="color:green" class="fa fa-check"></span> |
| Fixed regression with the style of Collections in admin and supporting long strings #[569](https://github.com/gantry/gantry5/issues/569)                       | <span style="color:green" class="fa fa-check"></span> |
| Fixed Assignments filtering failing with empty Menus #[578](https://github.com/gantry/gantry5/issues/578)                                                      | <span style="color:green" class="fa fa-check"></span> |
| Fixed UTF8 special characters being stripped out of Module Gantry 5 Particle causing the value to be lost #[570](https://github.com/gantry/gantry5/issues/570) | <span style="color:green" class="fa fa-check"></span> |
| Fixed initial load of Module Particle not updating the link to the Joomla Module Manager instance #[582](https://github.com/gantry/gantry5/issues/582)         | <span style="color:green" class="fa fa-check"></span> |
| Fixed Menu Item subtitles in Menu Editor, causing any subtitle to get lost #[579](https://github.com/gantry/gantry5/issues/579)                                | <span style="color:green" class="fa fa-check"></span> |
| Fixed Menu Item target not getting synched up between Joomla and Gantry #[584](https://github.com/gantry/gantry5/issues/584)                                   | <span style="color:green" class="fa fa-check"></span> |
| Fixed dropdowns on frontend not working when Offcanvas was disabled #[583](https://github.com/gantry/gantry5/issues/583)                                       | <span style="color:green" class="fa fa-check"></span> |
| Fixed edge case where resizing the browser wouldn't properly recalculate the Particles Picker size #[585](https://github.com/gantry/gantry5/issues/585)        | <span style="color:green" class="fa fa-check"></span> |
| Fixed issue in Menu Editor where it was possible to create more than one empty Columns #[585](https://github.com/gantry/gantry5/issues/585)                    | <span style="color:green" class="fa fa-check"></span> |


<a href="https://github.com/gantry/gantry5/compare/5.0.0...5.0.1" class="button"><i class="fa fa-fw fa-github"></i> See the 5.0.1 Changelog</a>

{% endset %}
{% set tab5 %}

Release Candidate 1
-----

| Category            | Milestone                                                                                                                                                    | Completed                                             |
| :-----              | :----                                                                                                                                                        | :-----:                                               |
| Site and Docs       | New Gantry Website with Documentation                                                                                                                        | <span style="color:green" class="fa fa-check"></span> |
| Font Picker         | Local Fonts Included in Font Picker                                                                                                                          | <span style="color:green" class="fa fa-check"></span> |
|                     | Google Fonts Updated                                                                                                                                         | <span style="color:green" class="fa fa-check"></span> |
| Particles           | Added System Messages Particle                                                                                                                               | <span style="color:green" class="fa fa-check"></span> |
| Outlines Page | Enable Outline Management within Gantry Administrator (Admin, Add, Delete, Rename, Copy)                                                               | <span style="color:green" class="fa fa-check"></span> |
| Revert to Default   | Ability to Reset an Outline Parameter to the Main Default Value                                                                                         | <span style="color:green" class="fa fa-check"></span> |
| Style Management    | Change Styles from Front End by Session/Cookies                                                                                                              | <span style="color:green" class="fa fa-check"></span> |
| Bug Fixes           | [Many Bug Fixes and Enhancements as Suggested by Beta Testers](https://github.com/gantry/gantry5/issues?q=milestone%3A%22Release+Candidate+1%22+is%3Aclosed) | <span style="color:green" class="fa fa-check"></span> |

<a href="https://github.com/gantry/gantry5/compare/5.0.0-beta.5...5.0.0-rc.1" class="button"><i class="fa fa-fw fa-github"></i> See the RC 1 Changelog</a>

Release Candidate 2
-----

| Category       | Milestone                                                                                                                                 | Completed                                             |
| :-----         | :----                                                                                                                                     | :-----:                                               |
| Outlines       | Configurations are Now Called Outlines ([#260](https://github.com/gantry/gantry5/issues/260))                                             | <span style="color:green" class="fa fa-check"></span> |
| Layout Manager | You Can Now Switch Layouts from the Layout Manager While Preserving Current Particles                                                     | <span style="color:green" class="fa fa-check"></span> |
| Menus          | Submenu Items Can Now Have Custom Widths Set                                                                                              | <span style="color:green" class="fa fa-check"></span> |
|                | Menu Items Can Now Have CSS Class Names Added                                                                                             | <span style="color:green" class="fa fa-check"></span> |
|                | Menu Particle Now Includes Option that Allows Setting it as Target for Mobile Menu ([#220](https://github.com/gantry/gantry5/issues/220)) | <span style="color:green" class="fa fa-check"></span> |
|                | Fixed Alignments for Menu When in Header Position                                                                                         | <span style="color:green" class="fa fa-check"></span> |
|                | Fixed Menu Item Open in New Tab                                                                                                           | <span style="color:green" class="fa fa-check"></span> |
| Particles      | To-Top Particle Adds a New Text Field for Customization (default: `To Top`)                                                               | <span style="color:green" class="fa fa-check"></span> |
|                | Fixed Date Particle Not Showing Proper Date in Joomla                                                                                     | <span style="color:green" class="fa fa-check"></span> |
| Miscellanious  | All Modals with **Apply** Can Now Also Include **Apply and Save** for Multiple Actions                                                    | <span style="color:green" class="fa fa-check"></span> |
|                | Added Useful Body Classnames (`dir-ltr`, `dir-rtl`, and `g-style-presetX`)                                                                | <span style="color:green" class="fa fa-check"></span> |
|                | Added Print Media                                                                                                                         | <span style="color:green" class="fa fa-check"></span> |
|                | Fixed Joomla Module Suffixes Not Prepending an Empty Space                                                                                | <span style="color:green" class="fa fa-check"></span> |
|                | Duplicated Action Bar in **Styles**, **Settings**, and **Layout** Panel for Easier Access                                                 | <span style="color:green" class="fa fa-check"></span> |
| Font Picker    | Optimized Font Picker                                                                                                                     | <span style="color:green" class="fa fa-check"></span> |
|                | Font and Icon Picker Automatically Have Search in Focus When Opened                                                                       | <span style="color:green" class="fa fa-check"></span> |

<a href="https://github.com/gantry/gantry5/compare/5.0.0-rc.1...5.0.0-rc.2" class="button"><i class="fa fa-fw fa-github"></i> See the RC 2 Changelog</a>

Release Candidate 3
-----

| Category                        | Milestone                                                                                                                                                       | Completed                                             |
| :-----                          | :----                                                                                                                                                           | :-----:                                               |
| Bug Fixes                       | Various Nucleus and Hydrogen Fixes                                                                                                                              | <span style="color:green" class="fa fa-check"></span> |
|                                 | Fixed CSS Ordering for Theme Platform and User Custom, Preventing Bootstrap Override #[416](https://github.com/gantry/gantry5/issues/416)                       | <span style="color:green" class="fa fa-check"></span> |
|                                 | Fixed `pageclass_sfx` on a Joomla Menu Item, Not Rendering in Com_gantry5 Content (fixes #[346](https://github.com/gantry/gantry5/issues/346))                  | <span style="color:green" class="fa fa-check"></span> |
|                                 | Fixed reset and preview for icon picker (#[143](https://github.com/gantry/gantry5/issues/416))                                                                  | <span style="color:green" class="fa fa-check"></span> |
|                                 | Fixed "Edit all" button in Collections not showing/hiding as intended (fixes #[402](https://github.com/gantry/gantry5/issues/402))                              | <span style="color:green" class="fa fa-check"></span> |
|                                 | Fixed Menu Issue When Only One Parent with No Siblings Was Present (fixes #[397](https://github.com/gantry/gantry5/issues/397))                                 | <span style="color:green" class="fa fa-check"></span> |
|                                 | Fixed Empty Menu Values                                                                                                                                         | <span style="color:green" class="fa fa-check"></span> |
|                                 | Fixed Menu Issue "400 Bad Request: Oops, Invalid Menu Structure" (#[331](https://github.com/gantry/gantry5/issues/331))                                         | <span style="color:green" class="fa fa-check"></span> |
|                                 | Fixed Issue with Offset Not Showing and Throwing Errors When the Mobile Container Wasn't Present (#[282](https://github.com/gantry/gantry5/issues/282))         | <span style="color:green" class="fa fa-check"></span> |
|                                 | Fixed Various Touch Device Issues (#[277](https://github.com/gantry/gantry5/issues/277))                                                                        | <span style="color:green" class="fa fa-check"></span> |
| Community-inspired Improvements | Added Support for Joomla Menu Item Link CSS Style (fixes #[389](https://github.com/gantry/gantry5/issues/389))                                                  | <span style="color:green" class="fa fa-check"></span> |
|                                 | Displaying IDs for Outlines (fixes #[411](https://github.com/gantry/gantry5/issues/411))                                                                        | <span style="color:green" class="fa fa-check"></span> |
|                                 | Added `json_decode` Twig Filter and `get_cookie` Twig Function                                                                                                  | <span style="color:green" class="fa fa-check"></span> |
|                                 | Implemented settings for root containers (fixes #[405](https://github.com/gantry/gantry5/issues/405))                                                           | <span style="color:green" class="fa fa-check"></span> |
|                                 | Added Opening/closing Class Names for the Offcanvas (#[390](https://github.com/gantry/gantry5/issues/390))                                                      | <span style="color:green" class="fa fa-check"></span> |
|                                 | Added an Asterisk Next to the Default Menu (fixes #[391](https://github.com/gantry/gantry5/issues/391))                                                         | <span style="color:green" class="fa fa-check"></span> |
|                                 | It Is Now Possible to Edit the Outlines Titles From Anywhere (fixes #[257](https://github.com/gantry/gantry5/issues/257))                                       | <span style="color:green" class="fa fa-check"></span> |
|                                 | Implemented Global Toggles for Collapsible, Filters and Swatches Toggler (fixes #[349](https://github.com/gantry/gantry5/issues/349))                           | <span style="color:green" class="fa fa-check"></span> |
|                                 | Added Transparency Treatment for Thumbnails in the FilePicker (#[322](https://github.com/gantry/gantry5/issues/322))                                            | <span style="color:green" class="fa fa-check"></span> |
|                                 | Synchronizing Both Top and Bottom Save Buttons With Changes (#[281](https://github.com/gantry/gantry5/issues/281))                                              | <span style="color:green" class="fa fa-check"></span> |
|                                 | Removed Apply and Save Button From Modals Within Modals (#[281](https://github.com/gantry/gantry5/issues/281))                                                  | <span style="color:green" class="fa fa-check"></span> |
|                                 | Added Dropdown Animations (#284) from [JoomFX](https://github.com/JoomFX)                                                                                       | <span style="color:green" class="fa fa-check"></span> |
|                                 | Added body classes for Outline (outline-`*`) and Menualias (menualias-`*`) (#[310](https://github.com/gantry/gantry5/issues/310))                               | <span style="color:green" class="fa fa-check"></span> |
|                                 | Stronger regex for detecting colors/unit checks (#[326](https://github.com/gantry/gantry5/issues/326))                                                          | <span style="color:green" class="fa fa-check"></span> |
|                                 | When the menu is moved in the Mobile Container the #g-navigation is now collapsed (#[181](https://github.com/gantry/gantry5/issues/181))                        | <span style="color:green" class="fa fa-check"></span> |
|                                 | Hidden Input Fields Are Not Overridable Anymore and They Render as... Hidden in the Settings (#[314](https://github.com/gantry/gantry5/issues/314))             | <span style="color:green" class="fa fa-check"></span> |
|                                 | Keep Track of Last Deleted Outline and Return to Base Outline if an Outline Is Not Available Anymore (#[296](https://github.com/gantry/gantry5/issues/296))     | <span style="color:green" class="fa fa-check"></span> |
|                                 | Reintroducing the Preset Images Display for Outlines. Windows Users May Experience ThreadStackSize Issue (#[207](https://github.com/gantry/gantry5/issues/207)) | <span style="color:green" class="fa fa-check"></span> |
|                                 | Cards (Settings/Styles/Swatches) Are Now Collapsible and Their State Gets Stored in a Cookie (#[349](https://github.com/gantry/gantry5/issues/349))             | <span style="color:green" class="fa fa-check"></span> |
|                                 | Added `Reorder`, `Deletion`, `Add_new` Options for Collections List (fixes #[395](https://github.com/gantry/gantry5/issues/395))                                | <span style="color:green" class="fa fa-check"></span> |
|                                 | Optimized Global Toggles for Assignments and Filtering (fixes #[398](https://github.com/gantry/gantry5/issues/398))                                             | <span style="color:green" class="fa fa-check"></span> |
|                                 | Gantry 5 and Hydrogen Now Ship With a MD5 Checksum Listing All the Files (For Future Use) (fixes #[209](https://github.com/gantry/gantry5/issues/209))          | <span style="color:green" class="fa fa-check"></span> |
| Additions and Enhancements      | Removed Platform-Content Class From Gantry 5 Component Output                                                                                                   | <span style="color:green" class="fa fa-check"></span> |
|                                 | Implemented Momentum Scrolling for Offcanvas (For Mobile Devices)                                                                                               | <span style="color:green" class="fa fa-check"></span> |
|                                 | Reworked the Offcanvas to Use Left/right Instead of Transform. Thanks to This It Is Now Possible to Use `Fixed` Elements/backgrounds in the Page                | <span style="color:green" class="fa fa-check"></span> |
|                                 | Added EditorConfig Settings for Gantry 5 (Please Follow Our EditorConfig Rules When Contributing)                                                               | <span style="color:green" class="fa fa-check"></span> |
|                                 | Admin Has Been Reworked and Namespaced Behind the Curtains to Guarantee No Conflicts With Third Parties                                                         | <span style="color:green" class="fa fa-check"></span> |
|                                 | Ensure That LayoutReader Doesn't Throw Any Fatal Errors on Bad Data                                                                                             | <span style="color:green" class="fa fa-check"></span> |
|                                 | **!!!Configurations are Now Outlines!!!**                                                                                                                       | <span style="color:green" class="fa fa-check"></span> |
|                                 | **Initial Wordpress Integration!**                                                                                                                              | <span style="color:green" class="fa fa-check"></span> |
|                                 | Added New `_dependencies.scss` Import to Make Importing All Bourbon, Nucleus, Theme Mixins and Variables Easier (Use: `@import "dependencies";`)                | <span style="color:green" class="fa fa-check"></span> |
|                                 | Added New "Particle Module": You Can Now Create a New Joomla Module (Gantry 5 - Particle Module) and Select a Particle to Be Treated as a Joomla Module         | <span style="color:green" class="fa fa-check"></span> |
|                                 | Added Fields for Selecting Modules and Particles                                                                                                                | <span style="color:green" class="fa fa-check"></span> |
|                                 | Added New `Production/development` Setting in Gantry 5 System Plugin That Will Trigger Automatic Recompilation for SCSS Files Whenever a Change Is Detected     | <span style="color:green" class="fa fa-check"></span> |
|                                 | Updated Selectize to 0.12.1 and Fixed an Issue With IE Where Clicking on a Selectize Dropdown Would Close the Dropdown.                                         | <span style="color:green" class="fa fa-check"></span> |
|                                 | Added Limited Support for Advanced Template Manager                                                                                                             | <span style="color:green" class="fa fa-check"></span> |

<a href="https://github.com/gantry/gantry5/compare/5.0.0-rc.2...5.0.0-rc.3" class="button"><i class="fa fa-fw fa-github"></i> See the RC3 Changelog</a>

{% endset %}
{% set tab6 %}

Beta 1
-----

| Category                     | Milestone                                                                                                       | Completed                                             |
| :-----                       | :----                                                                                                           | :-----:                                               |
| Collections                  | Implement Collections including Hidden JSON field                                                               | <span style="color:green" class="fa fa-check"></span> |
|                              | Parent Recognition when Editing Single Item                                                                     | <span style="color:green" class="fa fa-check"></span> |
|                              | Make Content Savable Regardless of State                                                                        | <span style="color:green" class="fa fa-check"></span> |
|                              | Update Form Fields with Values from POST Rather Than the Ones Saved                                             | <span style="color:green" class="fa fa-check"></span> |
| Presets                      | Preset Images Loading                                                                                           | <span style="color:green" class="fa fa-check"></span> |
|                              | Hooked Up Events for Repopulating Fields with Preset Values                                                     | <span style="color:green" class="fa fa-check"></span> |
| Clear Cache Button           | Add Clear Cache Button                                                                                          | <span style="color:green" class="fa fa-check"></span> |
|                              | Create Method for Calling Ajax with Notification Feedback                                                       | <span style="color:green" class="fa fa-check"></span> |
| Variations (Module Suffixes) | Add Template-defined Variations to Selectize Fields for Easy Use Alongside CSS Classes                          | <span style="color:green" class="fa fa-check"></span> |
| Layout Switcher              | Ability to Change the Layout Based on Different Configurations or Presets as Well as Clearing the Whole Layout  | <span style="color:green" class="fa fa-check"></span> |
| Assignments                  | Implement Assignments for Joomla                                                                                | <span style="color:green" class="fa fa-check"></span> |
|                              | Load Correct Outline Based on Assignment in Front End                                                           | <span style="color:green" class="fa fa-check"></span> |
| Updater                      | Hook Up Update Button in Joomla                                                                                 | <span style="color:green" class="fa fa-check"></span> |
|                              | Update Button Implemented in Hydrogen Theme                                                                     | <span style="color:green" class="fa fa-check"></span> |
| Language                     | Integrate Language Support Translations for Joomla                                                              | <span style="color:green" class="fa fa-check"></span> |
|                              | Translations Support in Twig                                                                                    | <span style="color:green" class="fa fa-check"></span> |
| Hydrogen                     | Complete the Hydrogen Home Page, Serving as a Starting Point for Beta Testing                                   | <span style="color:green" class="fa fa-check"></span> |
| Menu                         | Refine Menu Item Settings to Meet Gantry 5 and User Requirements                                                | <span style="color:green" class="fa fa-check"></span> |
|                              | Rework the front-end menu JS                                                                                    | <span style="color:green" class="fa fa-check"></span> |
|                              | Update Menu Structure to Following New Configuration Options                                                    | <span style="color:green" class="fa fa-check"></span> |
| Builder                      | Create a Builder for Gantry to Generate Packages for Platforms                                                  | <span style="color:green" class="fa fa-check"></span> |
| Docs                         | Make documentation available covering basic use cases, and add to it throughout the duration of the beta period | <span style="color:green" class="fa fa-check"></span> |
| How to get Started           | Create a Simple Page Documenting How to Get Started with Gantry 5                                               | <span style="color:green" class="fa fa-check"></span> |
|                              | Document How People Should Contribute                                                                           | <span style="color:green" class="fa fa-check"></span> |
| File Picker                  | Basic File Picker Functionality with Upload                                                                     | <span style="color:green" class="fa fa-check"></span> |

Beta 2
-----

| Category       | Milestone                                                                                                                               | Completed                                             |
| :-----         | :-----                                                                                                                                  | :-----:                                                |
| Optimization   | Set Joomla JS/CSS Assets to Not Load Where Not Required                                                                                 | <span style="color:green" class="fa fa-check"></span> |
| Fixes          | [Miscellaneous Bug Fixes from Reports by Beta Testers](https://github.com/gantry/gantry5/issues?q=milestone%3A%22Beta+2%22+is%3Aclosed) | <span style="color:green" class="fa fa-check"></span> |
| Image Picker   | Add Support for SVG Files                                                                                                               | <span style="color:green" class="fa fa-check"></span> |
| Hydrogen       | Add Additional Hydrogen Color Hookups for Bootstrap Classes                                                                             | <span style="color:green" class="fa fa-check"></span> |
|                | Update Hydrogen Preset Images                                                                                                           | <span style="color:green" class="fa fa-check"></span> |
| Nucleus        | Add atom block type to nucleus                                                                                                          | <span style="color:green" class="fa fa-check"></span> |
| KeyValue Field | Implement KeyValue Field for Things Like Tag Attributes, Meta Values, etc.                                                              | <span style="color:green" class="fa fa-check"></span> |
|                | Updated Sections and Blocks to Use KeyValue Field                                                                                       | <span style="color:green" class="fa fa-check"></span> |
| PHP            | Removed `fileinfo` Dependency                                                                                                           | <span style="color:green" class="fa fa-check"></span> |

<a href="https://github.com/gantry/gantry5/compare/5.0.0-beta.1...5.0.0-beta.2" class="button"><i class="fa fa-fw fa-github"></i> See the Beta 2 Changelog</a>

Beta 3
-----

| Category                 | Milestone                                                                                                 | Completed                                             |
| :-----                   | :----                                                                                                     | :-----:                                               |
| Reworked Menu Editor     | Drag-and-drop Support of Particles and Modules from Menu Editor                                           | <span style="color:green" class="fa fa-check"></span> |
|                          | Deletion Capability                                                                                       | <span style="color:green" class="fa fa-check"></span> |
|                          | It is Now Possible to Add Modules and Particles in the Menu                                               | <span style="color:green" class="fa fa-check"></span> |
|                          | Menu on the Front End is Now Fully Touch and Desktop Compatible                                           | <span style="color:green" class="fa fa-check"></span> |
|                          | Enhanced the Fullwidth Menu with Slideouts Animation                                                      | <span style="color:green" class="fa fa-check"></span> |
|                          | Support for Images in Menu Items                                                                          | <span style="color:green" class="fa fa-check"></span> |
|                          | Support for Subtitles in Menu Items                                                                       | <span style="color:green" class="fa fa-check"></span> |
| Offcanvas Section        | Offcanvas Section Added                                                                                   | <span style="color:green" class="fa fa-check"></span> |
|                          | Enable any Module or Particle to Reside Within                                                            | <span style="color:green" class="fa fa-check"></span> |
| Mobile Menu Particle     | Created Mobile Menu Particle for the Offcanvas Section                                                    | <span style="color:green" class="fa fa-check"></span> |
|                          | Default Layouts Now Come with the Mobile Menu Particle Built-in                                           | <span style="color:green" class="fa fa-check"></span> |
| Bugs                     | [Many Hydrogen and Gantry Bug Fixes](https://github.com/gantry/gantry5/issues?q=milestone%3A%22Beta+3%22) | <span style="color:green" class="fa fa-check"></span> |
| Platform Settings Button | Added Platform Settings Button to Available Themes List                                                   | <span style="color:green" class="fa fa-check"></span> |
| JS and CSS               | JS and CSS are Now Minified and Without Source Maps in the Packages                                       | <span style="color:green" class="fa fa-check"></span> |
| Joomla                   | Joomla Manifest is Now Being Updated with All of the Available Positions                                  | <span style="color:green" class="fa fa-check"></span> |
| Installer                | Fixed Joomla Post Installation Issues                                                                     | <span style="color:green" class="fa fa-check"></span> |

<a href="https://github.com/gantry/gantry5/compare/5.0.0-beta.2...5.0.0-beta.3" class="button"><i class="fa fa-fw fa-github"></i> See the Beta 3 Changelog</a>

Beta 4
-----

| Category                           | Milestone                                                                                                                              | Completed                                             |
| :-----                             | :----                                                                                                                                  | :-----:                                               |
| Collapsed Particles                | Sidebar is Now Fully Collapsing on the Front End ([#54](https://github.com/gantry/gantry5/issues/54))                                  | <span style="color:green" class="fa fa-check"></span> |
| Smart Warnings                     | Smart Warnings on Pending Changes ([#106](https://github.com/gantry/gantry5/issues/106))                                               | <span style="color:green" class="fa fa-check"></span> |
| Menu Editor and About Admin Panels | Outline Bar Hidden in Global Panels ([#99](https://github.com/gantry/gantry5/issues/99))                                         | <span style="color:green" class="fa fa-check"></span> |
|                                    | Reduced Height of Module List for Smaller Screens ([#113](https://github.com/gantry/gantry5/issues/113))                               | <span style="color:green" class="fa fa-check"></span> |
| Assignments Admin Panel            | Implemented Filtering and All On/Off Toggle ([#71](https://github.com/gantry/gantry5/issues/71))                                       | <span style="color:green" class="fa fa-check"></span> |
| Bug Fixes                          | [Many Bug Fixes for Menu, Offcanvas, and Menu Editor](https://github.com/gantry/gantry5/issues?q=milestone%3A%22Beta+4%22+is%3Aclosed) | <span style="color:green" class="fa fa-check"></span> |
| Presets                            | Recompiling Presets from Base Outline Now Recompiles All Outlines Styles                                                               | <span style="color:green" class="fa fa-check"></span> |

<a href="https://github.com/gantry/gantry5/compare/5.0.0-beta.3...5.0.0-beta.4" class="button"><i class="fa fa-fw fa-github"></i> See the Beta 4 Changelog</a>

Beta 5
-----

| Category                                                                         | Milestone                                                                                         | Completed                                             |
| :-----                                                                           | :----                                                                                             | :-----:                                               |
| Font Support                                                                     | Fonts are Supported in the Styles Panel Including Local Font Support                              | <span style="color:green" class="fa fa-check"></span> |
| Form Validation                                                                  | Added HTML5 Fields Validation for Styles, Settings, Menu Item, Collections, and Particle Settings | <span style="color:green" class="fa fa-check"></span> |
| Hydrogen Theme                                                                   | Many Hydrogen Style Enhancements and Fixes                                                        | <span style="color:green" class="fa fa-check"></span> |
|                                                                                  | Implemented Customizable Style for Hamburger Icon                                                 | <span style="color:green" class="fa fa-check"></span> |
|                                                                                  | Added Hydrogen Layout Presets (2 Column - Left - Right, 3 Column, 3 Column - Left - Right)        | <span style="color:green" class="fa fa-check"></span> |
| [Bug Fixes](https://github.com/gantry/gantry5/issues?q=milestone%3A%22Beta+5%22) | Many Bug Fixes for IE                                                                             | <span style="color:green" class="fa fa-check"></span> |
|                                                                                  | Back End Menu Bug Fixes                                                                           | <span style="color:green" class="fa fa-check"></span> |
|                                                                                  | Fixed Issue When Offline Page Mode Enabled                                                        | <span style="color:green" class="fa fa-check"></span> |
|                                                                                  | Fixed Layout Manager Issues When Using Trackpad                                                   | <span style="color:green" class="fa fa-check"></span> |
|                                                                                  | Icon Picker, Image Picker Fixes and Enhancements                                                  | <span style="color:green" class="fa fa-check"></span> |
|                                                                                  | Many Front End Menu Enhancements and fixes                                                        | <span style="color:green" class="fa fa-check"></span> |
|                                                                                  | Gantry Installer / Updater Fixes                                                                  | <span style="color:green" class="fa fa-check"></span> |
| Module Output                                                                    | Implemented Custom `gantry` Module Chrome and Using it By Default                                 | <span style="color:green" class="fa fa-check"></span> |
| Gantry 5 Administrator                                                           | Consolidated Action Tools Under Extra Tab in Administrator                                        | <span style="color:green" class="fa fa-check"></span> |
|                                                                                  | Added Joomla - Gantry 4 Preset (thanks [@Omegatcu](https://github.com/Omegatcu))                  | <span style="color:green" class="fa fa-check"></span> |
|                                                                                  | Implemented Reset Field Icon to Clear Out the Field with a Click                                  | <span style="color:green" class="fa fa-check"></span> |
|                                                                                  | Back to Setup Now Keeps Track of Your Most Recent Active Tab                             | <span style="color:green" class="fa fa-check"></span> |
|                                                                                  | Implemented Preset Matcher, Detecting When a Combination of Styles Matches a Preset               | <span style="color:green" class="fa fa-check"></span> |
|                                                                                  | Added Outlines page (Work in Progress)                                                      | <span style="color:green" class="fa fa-check"></span> |
| Particles                                                                        | Extended Google Analytics Particle (thanks [@Omegatcu](https://github.com/Omegatcu))              | <span style="color:green" class="fa fa-check"></span> |

<a href="https://github.com/gantry/gantry5/compare/5.0.0-beta.4...5.0.0-beta.5" class="button"><i class="fa fa-fw fa-github"></i> See the Beta 5 Changelog</a>

{% endset %}
{{ gravui_tabs({'Current':tab1, '5.2.x':tab2, '5.1.x':tab3, '5.0.x':tab4, 'Release Candidate':tab5, 'Beta':tab6}) }}
