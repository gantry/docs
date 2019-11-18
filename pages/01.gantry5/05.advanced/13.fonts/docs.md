---
title: Adding and Using Fonts
taxonomy:
    category: docs
    tag: [gantry5]
---

## Adding a New Font to the Font Picker

! In this guide we will be using **Gaspar** as our new local font. You can pick it up from [FontSquirrel](https://www.fontsquirrel.com/fonts/gaspar). Simply select the **Webfont Kit** button and download `gaspar-fontfacekit.zip`.

If you would like to make your new font accessible to the **Font Picker**, you will need to make an edit to the `theme.yaml` file to add the font and set its font weight associations.

!! The `theme.yaml` file is essential for your theme to work. If you are making an edit to this file, be advised that this edit will likely be overwritten in the event of a theme update. This is really only recommended for developers creating their own Gantry theme or for advanced users.

Here are the steps you will need to take to make this happen.

! Gantry does not currently have a method of previewing local fonts in the Font Picker. Previews are currently only available for fonts that are loaded from Google. You will still be able to select a local font, which will load it and any uploaded variant(s) you have listed in the `theme.yaml` file.

[ui-tabs position="top-left" active="0"]
[ui-tab title="Joomla"]

![Fonts](files1.png?classes=shadow,border)

1. The first thing you will want to do is rename the **Web Fonts** subfolder in the `web fonts` directory to `gaspar`. This will make life easier for you in the next step as organizing multiple uploaded web fonts will be simpler.

2. You will also want to rename the subdirectories and files so they're web friendly. Eliminating spaces, making everything lowercase, etc. This will further make your life easier as you reference these files in the YAML. For example, you can rename `Gaspar Bold-webfont.woff` to `gaspar-bold-webfont.woff`.

![Fonts](files.png?classes=shadow,border)

3. Next, add the local font files to `TEMPLATE_DIR/custom/fonts/`.

4. Once this is done, you can add your new font to the YAML in the `fonts` section. Using the Helium template as an example, this is what the `theme.yaml` file looks like by default.

```yaml
fonts:
  Raleway:
    900italic: 'gantry-theme://fonts/raleway/raleway-blackitalic/raleway-blackitalic-webfont'
    900: 'gantry-theme://fonts/raleway/raleway-black/raleway-black-webfont'
    700italic: 'gantry-theme://fonts/raleway/raleway-bold/raleway-bolditalic-webfont'
    700: 'gantry-theme://fonts/raleway/raleway-bold/raleway-bold-webfont'
    600italic: 'gantry-theme://fonts/raleway/raleway-semibolditalic/raleway-semibolditalic-webfont'
    600: 'gantry-theme://fonts/raleway/raleway-semibold/raleway-semibold-webfont'
    500italic: 'gantry-theme://fonts/raleway/raleway-mediumitalic/raleway-mediumitalic-webfont'
    500: 'gantry-theme://fonts/raleway/raleway-medium/raleway-medium-webfont'
    400italic: 'gantry-theme://fonts/raleway/raleway-italic/raleway-italic-webfont'
    400: 'gantry-theme://fonts/raleway/raleway-regular/raleway-regular-webfont'
    200italic: 'gantry-theme://fonts/raleway/raleway-lightitalic/raleway-lightitalic-webfont'
    200: 'gantry-theme://fonts/raleway/raleway-light/raleway-light-webfont'
  Lato:
    900italic: 'gantry-theme://fonts/lato/lato-blackitalic/lato-blackitalic-webfont'
    900: 'gantry-theme://fonts/lato/lato-black/lato-black-webfont'
    700italic: 'gantry-theme://fonts/lato/lato-bold/lato-bolditalic-webfont'
    700: 'gantry-theme://fonts/lato/lato-bold/lato-bold-webfont'
    400italic: 'gantry-theme://fonts/lato/lato-italic/lato-italic-webfont'
    400: 'gantry-theme://fonts/lato/lato-regular/lato-regular-webfont'
    200italic: 'gantry-theme://fonts/lato/lato-lightitalic/lato-lightitalic-webfont'
    200: 'gantry-theme://fonts/lato/lato-light/lato-light-webfont'
```

To add the Gaspar font, the fonts section of the YAML file will look like this.

```yaml
fonts:
  Raleway:
    900italic: 'gantry-theme://fonts/raleway/raleway-blackitalic/raleway-blackitalic-webfont'
    900: 'gantry-theme://fonts/raleway/raleway-black/raleway-black-webfont'
    700italic: 'gantry-theme://fonts/raleway/raleway-bold/raleway-bolditalic-webfont'
    700: 'gantry-theme://fonts/raleway/raleway-bold/raleway-bold-webfont'
    600italic: 'gantry-theme://fonts/raleway/raleway-semibolditalic/raleway-semibolditalic-webfont'
    600: 'gantry-theme://fonts/raleway/raleway-semibold/raleway-semibold-webfont'
    500italic: 'gantry-theme://fonts/raleway/raleway-mediumitalic/raleway-mediumitalic-webfont'
    500: 'gantry-theme://fonts/raleway/raleway-medium/raleway-medium-webfont'
    400italic: 'gantry-theme://fonts/raleway/raleway-italic/raleway-italic-webfont'
    400: 'gantry-theme://fonts/raleway/raleway-regular/raleway-regular-webfont'
    200italic: 'gantry-theme://fonts/raleway/raleway-lightitalic/raleway-lightitalic-webfont'
    200: 'gantry-theme://fonts/raleway/raleway-light/raleway-light-webfont'
  Lato:
    900italic: 'gantry-theme://fonts/lato/lato-blackitalic/lato-blackitalic-webfont'
    900: 'gantry-theme://fonts/lato/lato-black/lato-black-webfont'
    700italic: 'gantry-theme://fonts/lato/lato-bold/lato-bolditalic-webfont'
    700: 'gantry-theme://fonts/lato/lato-bold/lato-bold-webfont'
    400italic: 'gantry-theme://fonts/lato/lato-italic/lato-italic-webfont'
    400: 'gantry-theme://fonts/lato/lato-regular/lato-regular-webfont'
    200italic: 'gantry-theme://fonts/lato/lato-lightitalic/lato-lightitalic-webfont'
    200: 'gantry-theme://fonts/lato/lato-light/lato-light-webfont'
  Gaspar:
    700italic: 'gantry-theme://fonts/gaspar/gaspar_bold/gaspar-bolditalic-webfont'
    700: 'gantry-theme://fonts/gaspar/gaspar_bold/gaspar-bold-webfont'
    400italic: 'gantry-theme://fonts/gaspar/gaspar_bold/gaspar-italic-webfont'
    400: 'gantry-theme://fonts/gaspar/gaspar_bold/gaspar-regular-webfont'
```

The numbers listed here are the font weight. In general, `400` is a normal weight, `700` is bold, etc.

5. Duplicate the `TEMPLATE_DIR/gantry/theme.yaml` file and place the copy in a safe place if you haven't done so already. As you will be modifying this file directly, and not through a custom override, you will likely lose these changes during an update.

[/ui-tab]
[ui-tab title="WordPress"]

![Fonts](files1.png?classes=shadow,border)

1. The first thing you will want to do is rename the **Web Fonts** subfolder in the `web fonts` directory to `gaspar`. This will make life easier for you in the next step as organizing multiple uploaded web fonts will be simpler.

2. You will also want to rename the subdirectories and files so they're web friendly. Eliminating spaces, making everything lowercase, etc. This will further make your life easier as you reference these files in the YAML. For example, you can rename `Gaspar Bold-webfont.woff` to `gaspar-bold-webfont.woff`.

![Fonts](files.png?classes=shadow,border)

3. Add the local font files to `THEME_DIR/custom/fonts/`.

4. Once this is done, you can add your new font to the YAML in the `fonts` section. Using the Helium template as an example, this is what the `theme.yaml` file looks like by default.

```yaml
fonts:
  Raleway:
    900italic: 'gantry-theme://fonts/raleway/raleway-blackitalic/raleway-blackitalic-webfont'
    900: 'gantry-theme://fonts/raleway/raleway-black/raleway-black-webfont'
    700italic: 'gantry-theme://fonts/raleway/raleway-bold/raleway-bolditalic-webfont'
    700: 'gantry-theme://fonts/raleway/raleway-bold/raleway-bold-webfont'
    600italic: 'gantry-theme://fonts/raleway/raleway-semibolditalic/raleway-semibolditalic-webfont'
    600: 'gantry-theme://fonts/raleway/raleway-semibold/raleway-semibold-webfont'
    500italic: 'gantry-theme://fonts/raleway/raleway-mediumitalic/raleway-mediumitalic-webfont'
    500: 'gantry-theme://fonts/raleway/raleway-medium/raleway-medium-webfont'
    400italic: 'gantry-theme://fonts/raleway/raleway-italic/raleway-italic-webfont'
    400: 'gantry-theme://fonts/raleway/raleway-regular/raleway-regular-webfont'
    200italic: 'gantry-theme://fonts/raleway/raleway-lightitalic/raleway-lightitalic-webfont'
    200: 'gantry-theme://fonts/raleway/raleway-light/raleway-light-webfont'
  Lato:
    900italic: 'gantry-theme://fonts/lato/lato-blackitalic/lato-blackitalic-webfont'
    900: 'gantry-theme://fonts/lato/lato-black/lato-black-webfont'
    700italic: 'gantry-theme://fonts/lato/lato-bold/lato-bolditalic-webfont'
    700: 'gantry-theme://fonts/lato/lato-bold/lato-bold-webfont'
    400italic: 'gantry-theme://fonts/lato/lato-italic/lato-italic-webfont'
    400: 'gantry-theme://fonts/lato/lato-regular/lato-regular-webfont'
    200italic: 'gantry-theme://fonts/lato/lato-lightitalic/lato-lightitalic-webfont'
    200: 'gantry-theme://fonts/lato/lato-light/lato-light-webfont'
```

To add the Gaspar font, the fonts section of the YAML file will look like this.

```yaml
fonts:
  Raleway:
    900italic: 'gantry-theme://fonts/raleway/raleway-blackitalic/raleway-blackitalic-webfont'
    900: 'gantry-theme://fonts/raleway/raleway-black/raleway-black-webfont'
    700italic: 'gantry-theme://fonts/raleway/raleway-bold/raleway-bolditalic-webfont'
    700: 'gantry-theme://fonts/raleway/raleway-bold/raleway-bold-webfont'
    600italic: 'gantry-theme://fonts/raleway/raleway-semibolditalic/raleway-semibolditalic-webfont'
    600: 'gantry-theme://fonts/raleway/raleway-semibold/raleway-semibold-webfont'
    500italic: 'gantry-theme://fonts/raleway/raleway-mediumitalic/raleway-mediumitalic-webfont'
    500: 'gantry-theme://fonts/raleway/raleway-medium/raleway-medium-webfont'
    400italic: 'gantry-theme://fonts/raleway/raleway-italic/raleway-italic-webfont'
    400: 'gantry-theme://fonts/raleway/raleway-regular/raleway-regular-webfont'
    200italic: 'gantry-theme://fonts/raleway/raleway-lightitalic/raleway-lightitalic-webfont'
    200: 'gantry-theme://fonts/raleway/raleway-light/raleway-light-webfont'
  Lato:
    900italic: 'gantry-theme://fonts/lato/lato-blackitalic/lato-blackitalic-webfont'
    900: 'gantry-theme://fonts/lato/lato-black/lato-black-webfont'
    700italic: 'gantry-theme://fonts/lato/lato-bold/lato-bolditalic-webfont'
    700: 'gantry-theme://fonts/lato/lato-bold/lato-bold-webfont'
    400italic: 'gantry-theme://fonts/lato/lato-italic/lato-italic-webfont'
    400: 'gantry-theme://fonts/lato/lato-regular/lato-regular-webfont'
    200italic: 'gantry-theme://fonts/lato/lato-lightitalic/lato-lightitalic-webfont'
    200: 'gantry-theme://fonts/lato/lato-light/lato-light-webfont'
  Gaspar:
    700italic: 'gantry-theme://fonts/gaspar/gaspar_bold/gaspar-bolditalic-webfont'
    700: 'gantry-theme://fonts/gaspar/gaspar_bold/gaspar-bold-webfont'
    400italic: 'gantry-theme://fonts/gaspar/gaspar_bold/gaspar-italic-webfont'
    400: 'gantry-theme://fonts/gaspar/gaspar_bold/gaspar-regular-webfont'
```

The numbers listed here are the font weight. In general, `400` is a normal weight, `700` is bold, etc.

5. Duplicate the `THEME_DIR/gantry/theme.yaml` file and place the copy in a safe place if you haven't done so already. As you will be modifying this file directly, and not through a custom override, you will likely lose these changes during an update.

[/ui-tab]
[ui-tab title="Grav"]

![Fonts](files1.png?classes=shadow,border)

1. The first thing you will want to do is rename the **Web Fonts** subfolder in the `web fonts` directory to `gaspar`. This will make life easier for you in the next step as organizing multiple uploaded web fonts will be simpler.

2. You will also want to rename the subdirectories and files so they're web friendly. Eliminating spaces, making everything lowercase, etc. This will further make your life easier as you reference these files in the YAML. For example, you can rename `Gaspar Bold-webfont.woff` to `gaspar-bold-webfont.woff`.

![Fonts](files.png?classes=shadow,border)

3. Add the local font files to `THEME_DIR/custom/fonts/`.

4. Once this is done, you can add your new font to the YAML in the `fonts` section. Using the Helium template as an example, this is what the `theme.yaml` file looks like by default.

```yaml
fonts:
  Raleway:
    900italic: 'gantry-theme://fonts/raleway/raleway-blackitalic/raleway-blackitalic-webfont'
    900: 'gantry-theme://fonts/raleway/raleway-black/raleway-black-webfont'
    700italic: 'gantry-theme://fonts/raleway/raleway-bold/raleway-bolditalic-webfont'
    700: 'gantry-theme://fonts/raleway/raleway-bold/raleway-bold-webfont'
    600italic: 'gantry-theme://fonts/raleway/raleway-semibolditalic/raleway-semibolditalic-webfont'
    600: 'gantry-theme://fonts/raleway/raleway-semibold/raleway-semibold-webfont'
    500italic: 'gantry-theme://fonts/raleway/raleway-mediumitalic/raleway-mediumitalic-webfont'
    500: 'gantry-theme://fonts/raleway/raleway-medium/raleway-medium-webfont'
    400italic: 'gantry-theme://fonts/raleway/raleway-italic/raleway-italic-webfont'
    400: 'gantry-theme://fonts/raleway/raleway-regular/raleway-regular-webfont'
    200italic: 'gantry-theme://fonts/raleway/raleway-lightitalic/raleway-lightitalic-webfont'
    200: 'gantry-theme://fonts/raleway/raleway-light/raleway-light-webfont'
  Lato:
    900italic: 'gantry-theme://fonts/lato/lato-blackitalic/lato-blackitalic-webfont'
    900: 'gantry-theme://fonts/lato/lato-black/lato-black-webfont'
    700italic: 'gantry-theme://fonts/lato/lato-bold/lato-bolditalic-webfont'
    700: 'gantry-theme://fonts/lato/lato-bold/lato-bold-webfont'
    400italic: 'gantry-theme://fonts/lato/lato-italic/lato-italic-webfont'
    400: 'gantry-theme://fonts/lato/lato-regular/lato-regular-webfont'
    200italic: 'gantry-theme://fonts/lato/lato-lightitalic/lato-lightitalic-webfont'
    200: 'gantry-theme://fonts/lato/lato-light/lato-light-webfont'
```

To add the Gaspar font, the fonts section of the YAML file will look like this.

```yaml
fonts:
  Raleway:
    900italic: 'gantry-theme://fonts/raleway/raleway-blackitalic/raleway-blackitalic-webfont'
    900: 'gantry-theme://fonts/raleway/raleway-black/raleway-black-webfont'
    700italic: 'gantry-theme://fonts/raleway/raleway-bold/raleway-bolditalic-webfont'
    700: 'gantry-theme://fonts/raleway/raleway-bold/raleway-bold-webfont'
    600italic: 'gantry-theme://fonts/raleway/raleway-semibolditalic/raleway-semibolditalic-webfont'
    600: 'gantry-theme://fonts/raleway/raleway-semibold/raleway-semibold-webfont'
    500italic: 'gantry-theme://fonts/raleway/raleway-mediumitalic/raleway-mediumitalic-webfont'
    500: 'gantry-theme://fonts/raleway/raleway-medium/raleway-medium-webfont'
    400italic: 'gantry-theme://fonts/raleway/raleway-italic/raleway-italic-webfont'
    400: 'gantry-theme://fonts/raleway/raleway-regular/raleway-regular-webfont'
    200italic: 'gantry-theme://fonts/raleway/raleway-lightitalic/raleway-lightitalic-webfont'
    200: 'gantry-theme://fonts/raleway/raleway-light/raleway-light-webfont'
  Lato:
    900italic: 'gantry-theme://fonts/lato/lato-blackitalic/lato-blackitalic-webfont'
    900: 'gantry-theme://fonts/lato/lato-black/lato-black-webfont'
    700italic: 'gantry-theme://fonts/lato/lato-bold/lato-bolditalic-webfont'
    700: 'gantry-theme://fonts/lato/lato-bold/lato-bold-webfont'
    400italic: 'gantry-theme://fonts/lato/lato-italic/lato-italic-webfont'
    400: 'gantry-theme://fonts/lato/lato-regular/lato-regular-webfont'
    200italic: 'gantry-theme://fonts/lato/lato-lightitalic/lato-lightitalic-webfont'
    200: 'gantry-theme://fonts/lato/lato-light/lato-light-webfont'
  Gaspar:
    700italic: 'gantry-theme://fonts/gaspar/gaspar_bold/gaspar-bolditalic-webfont'
    700: 'gantry-theme://fonts/gaspar/gaspar_bold/gaspar-bold-webfont'
    400italic: 'gantry-theme://fonts/gaspar/gaspar_bold/gaspar-italic-webfont'
    400: 'gantry-theme://fonts/gaspar/gaspar_bold/gaspar-regular-webfont'
```

The numbers listed here are the font weight. In general, `400` is a normal weight, `700` is bold, etc.

5. Duplicate the `THEME_DIR/gantry/theme.yaml` file and place the copy in a safe place if you haven't done so already. As you will be modifying this file directly, and not through a custom override, you will likely lose these changes during an update.

[/ui-tab]
[/ui-tabs]