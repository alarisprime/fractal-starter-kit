---
title: Using on Production
---

## Three Steps to Use on Production
### 1. Include the CSS file

Add link to the [`base.css`]({{ path '/css/styleguide.css' }}) of this style guide inside the `<head>` of the page.

```html
<head>
    <!-- ... -->
    <link rel="stylesheet" href="{{ path '/css/styleguide.css' }}">
    <!-- ... -->
</head>
```

### 2. Inline the Icons SVG Symbols file

It’s important to inline the icons SVG file [`inline.svg`]({{ path '/public/icons/inline.svg' }}) at the beginning of the `<body>` tag inside a hidden `<div>`. You can use the below code to inline the SVG code.

```html
<body>
  <div style="height: 0; width: 0; position: absolute; visibility: hidden">
    <svg xmlns="http://www.w3.org/2000/svg">
      <!-- ... -->
    </svg>
  </div>
  <!-- ... -->
</body>
```

Using as external SVG file have problems with IE. You can read more about [here](https://github.com/w0rm/gulp-svgstore#using-svg-as-external-file). If planning to use the icons SVG as external file, you have to generate the SVG file without `inlineSvg = true` of [gulp-svgstore](https://github.com/w0rm/gulp-svgstore) in `gulpfile.js`. Then reference the generated file in the `icon` component like `<use xlink:href="[path to the svg symbol file]#[name of the icon]"></use>`

### 3. Include the JavaScript file [optional]

JavaScript code for the components [Tree Menu]({{ path '/components/detail/menu--tree' }}), [Collapsed Info-Box]({{ path '/components/detail/info-box--collapse' }}) and [Popover]({{ path '/components/detail/popover--default' }}) are included in the [`ui.bundle.js`]({{ path '/js/ui.bundle.js' }}). Include the `ui.bundle.js` towards end of the `<body>` element of the page.

```html
<body>

  <!-- ... -->
  <script src="/js/ui.bundle.js"></script>
</body>
```

The behaviour of these components are managed through manipulating classnames. If the implementation of UI is going to have it’s own JavaScript like ReactJS or something else, you can ignore this `ui.bundle.js` and implement the behavior in the respective frameworks using the same class name manipulations.
