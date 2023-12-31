# Arroz con Dulce (Sweet Rice)

'Arroz con Dulce' is a minimalist, responsive [hugo](https://gohugo.io) theme inspired by terminal ricing aesthetics.

[![Hugo Themes](https://img.shields.io/badge/Hugo_Themes-arrozcondulce-blue?logo=hugo)](https://themes.gohugo.io/themes/arrozcondulce/)
[![Version](https://img.shields.io/badge/semver-v0.3.0-blue)](https://semver.org)
![hugo build status](https://github.com/sonofmartinus/arrozcondulce/actions/workflows/hugo-build.yml/badge.svg)
![W3C Validation](https://img.shields.io/w3c-validation/html?targetUrl=https://arrozcondulce.sonofmartinus.com)
![Code size](https://img.shields.io/github/languages/code-size/sonofmartinus/arrozcondulce)

![Screenshot of the arrozcondulce theme](https://raw.githubusercontent.com/sonofmartinus/arrozcondulce/master/images/arrozcondulcedemo.png)

## Install

The easiest way to install the theme is to clone this repository into your site's `themes` directory:

```shell
git clone https://github.com/sonofmartinus/arrozcondulce themes/arrozcondulce
```

If your site is already a git repository, you can add the theme as a submodule instead:

```shell
git submodule add https://github.com/sonofmartinus/arrozcondulce.git themes/arrozcondulce
```

## Update

If you installed the theme using `git clone`, pull the repository to get the latest version:

```shell
cd themes/arrozcondulce
git pull
```

Or, if you added it as a git submodule:

```shell
git submodule update --remote
```

## Configure

To use the theme, add `theme = 'arrozcondulce'` to your site's `config.toml`, or `theme: arrozcondulce` to your `config.yaml` respectively.

See `exampleSite/config.toml` for the theme-specific parameters you need to add to your site's `config.toml` or `config.yaml` to configure the theme.

### Colour palettes

arrozcondulce uses the [base16 framework](https://github.com/chriskempson/base16) to define colour schemes that can be used with the `theme.palette` parameter.
A selection of 16 palettes (10 dark, 6 light) are bundled with the theme: `apprentice`, `base16-dark`, `base16-light`, `dracula`, `gruvbox-dark`, `gruvbox-light`, `material`, `papercolor-dark`, `papercolor-light`, `solarized-dark`, `solarized-light`, `tender`, `tokyo-night-dark`, `tokyo-night-light`, `windows-95` and `windows-95-light`.
The default is `base16-dark`.

<!-- TODO: add screenshots of default themes -->

The easiest way to use other base16 styles is to place .css file from https://github.com/monicfenga/base16-styles/tree/master/css-variables and place it in your `static/css/palettes` directory.

Or to define a wholly custom theme, you will need to define the following CSS variables for the following base16 colours (see [base16-dark.css](blob/main/static/css/palettes/base16-dark.css) for an example):

| Base | Default colour | Used for | Examples |
| ---- | -------------- | -------- | -------- |
| 00   | Dark           | Background | Page background          |
| 01   | │              | Alt. background | Content background          |
| 02   | │              | In-text backgrounds | `<pre>`, `<code>`, `<kbd>`, `<samp>` |
| 03   | │              | Muted text | `:before` & `:marker` symbols |
| 04   | │              | Alt. foreground | Aside text          |
| 05   | │              | Foreground         | Content text         |
| 06   | │              |          |          |
| 07   | Light          |          |          |
| 08   | Red            |          |          |
| 09   | Orange         |          |          |
| 0A   | Yellow         | Highlights | Selected text, `<mark>` |
| 0B   | Green          | Primary accent | Logo          |
| 0C   | Cyan           | Active links | `a:active`, `a:hover`         |
| 0D   | Blue           | Links    | `a:link`, `a:visited`         |
| 0E   | Magenta        |          |          |
| 0F   | Brown          |          |          |

For light mode palettes, the sequence of 00–07 should be reversed (light to dark, not dark to light).
Note that not all colours are currently used in the theme.

## Favicon

arrozcondulce will automatically use favicons placed in the `static/` directory.
The following files will be detected and included in your site's `<head>` section:

* `favicon.ico`
* `favicon-16x16.png`
* `favicon-32x32.png`
* `apple-touch-icon.png`
* `site.webmanifest`

You can generate these from an image or emoji using [favicon.io](https://favicon.io/) or a similar service.
They must be placed directly under your site's `static/` directory, i.e. not in in a subdirectory or `themes/arrozcondulce/static/`.

## Acknowledgements

The 'cooked rice' emoji used as a favicon for the example site was created by the [Twemoji project](https://twemoji.twitter.com/) and is licensed under [CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/).
