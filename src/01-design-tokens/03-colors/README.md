You can access the these colors defined in `scss/_config.project.scss`, using the `color()` function. This functions is part of the the [accoutrement-color](https://github.com/oddbird/accoutrement-color) library. There are additional color functions, `tint()`, `shade()` (both part of accoutrement-color), and `transparentize-color()` which help to manipulate the color output from `color()`.

## Example

To get the color `brand-primary`, use the `color()` function in like:

```scss
div {
  color: color('brand-primary'); 
}
```
