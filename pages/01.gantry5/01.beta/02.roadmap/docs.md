---
title: Roadmap
taxonomy:
    category: docs
    tag: [gantry5]
---

Gantry 5's beta, launching initially for the Joomla platform, is a multi-phase plan that includes key milestones leading up to the full initial release. With the initial beta already available, we are providing this document to clarify which milestones we have planned for the next major beta release, followed by the initial release candidate.

>>> This information is fluid and subject to change as we receive feedback from open beta participants and discover additional opportunities for improvement.

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
|                              | Load Correct Configuration Based on Assignment in Front End                                                     | <span style="color:green" class="fa fa-check"></span> |
| Updater                      | Hook Up Update Button in Joomla                                                                                 | <span style="color:green" class="fa fa-check"></span> |
|                              | Update Button Implemented in Hydrogen Theme                                                                     | <span style="color:green" class="fa fa-check"></span> |
| Language                     | Integrate Language Support Translations for Joomla                                                              | <span style="color:green" class="fa fa-check"></span> |
|                              | Translations Support in Twig                                                                                    | <span style="color:green" class="fa fa-check"></span> |
| Hydrogen                     | Complete the Hydrogen Home Page, Serving as a Starting Point for Beta Testing                                   | <span style="color:green" class="fa fa-check"></span> |
| Menu                         | Refine Menu Item Settings to Meet Gantry 5 and User Requirements.                                               | <span style="color:green" class="fa fa-check"></span> |
|                              | Rework the front-end menu JS                                                                                    | <span style="color:green" class="fa fa-check"></span> |
|                              | Update Menu Structure to Following New Configuration Options                                                    | <span style="color:green" class="fa fa-check"></span> |
| Builder                      | Create a Builder for Gantry to Generate Packages for Platforms                                                  | <span style="color:green" class="fa fa-check"></span> |
| Docs                         | Make documentation available covering basic use cases, and add to it throughout the duration of the beta period | <span style="color:green" class="fa fa-check"></span> |
| How to get Started           | Create a Simple Page Documenting How to Get Started with Gantry 5                                               | <span style="color:green" class="fa fa-check"></span> |
|                              | Document How People Should Contribute                                                                           | <span style="color:green" class="fa fa-check"></span> |
| File Picker                  | Basic File Picker Functionality with Upload                                                                     | <span style="color:green" class="fa fa-check"></span> |

Beta 2 (Current Phase)
-----

| Category       | Milestone                                                                  | Completed                                             |
| :-----         | :-----                                                                     | :-----                                                |
| Optimization   | Set Joomla JS/CSS Assets to Not Load Where Not Required                    | <span style="color:green" class="fa fa-check"></span> |
| Fixes          | Miscellaneous Bug Fixes from Reports by Beta Testers                       | <span style="color:green" class="fa fa-check"></span> |
| Image Picker   | Add Support for SVG Files                                                  | <span style="color:green" class="fa fa-check"></span> |
| Hydrogen       | Add Additional Hydrogen Color Hookups for Bootstrap Classes                | <span style="color:green" class="fa fa-check"></span> |
|                | Update Hydrogen Preset Images                                              | <span style="color:green" class="fa fa-check"></span> |
| Nucleus        | Add atom block type to nucleus                                             | <span style="color:green" class="fa fa-check"></span> |
| KeyValue Field | Implement KeyValue Field for Things Like Tag Attributes, Meta Values, etc. | <span style="color:green" class="fa fa-check"></span> |
|                | Updated Sections and Blocks to Use KeyValue Field                          | <span style="color:green" class="fa fa-check"></span> |

<a href="https://github.com/gantry/gantry5/releases/download/5.0.0-beta.1/joomla-pkg_gantry5_v5.0.0-beta.1.zip" class="button"><i class="fa fa-fw fa-github"></i> See the Beta 2 Changelog</a>

Beta 3
-----

| Category                            | Milestone                                                                                         | Completed |
| :-----                              | :----                                                                                             | :-----:   |
| Configurations Page                 | Enable Configuration Management within Gantry Administrator (Admin, Add, Delete, Rename, Copy)    |           |
| Menu Editor Particle/Module Support | Drag-and-drop Support of Particles and Modules from Menu Editor                                   |           |
|                                     | Deletion Capability                                                                               |           |
| Layout Manager                      | Ratio Grid Calculations for Adding/Removing Particle from Grid                                    |           |
| Dev/Prod                            | Hook up Dev and Prod Switch                                                                       |           |
| Performance Optimization            | Caching                                                                                           |           |
| Menu                                | Change Base Dropdown Listing so Menu Items are Based on the Menu Type Picked                      |           |
|                                     | Start Level Dropdowns with Proper Min/Max Limit                                                   |           |
| Security                            | Security Review                                                                                   |           |
| Style Management                    | Change Styles from Front End by Session/Cookies                                                    |           |
| Revert to Default                   | Ability to Reset a Configuration Parameter to the Main Default Value                              |           |
| Language                            | Implement Language Support Across Joomla                                                          |           |
| File Picker                         | Implement Improved Streams with Merged Folders/Files                                              |           |
|                                     | Add Ability to Remove Uploaded Files                                                              |           |
| HTML/Markdown Field and Particle    | Field that Inherits from textarea and Adds HTML editor plus Markdown Editor - With a Live Preview |           |
|                                     | Particle Allowing Edit Switching Between Formats (textarea, HTML, Markdown) - With a Live Preview |           |


Beta X
-----

| Category | Milestone                      | Completed |
| :-----   | :----                          | :-----:   |
| Testing  | Test until comfortable with RC |           |

Release Candidate
-----

| Category      | Milestone                                                                                      | Completed |
| :-----        | :----                                                                                          | :-----:   |
| Import/Export | Ability to Import/Export Data Across Entire Administrative Setup (Layout, Menu, Settings, etc) |           |
| Site and Docs | New Gantry Website with Documentation                                                          |           |
| Builder       | Create a Builder for Gantry to Generate Packages for Various Platforms                         |           |

