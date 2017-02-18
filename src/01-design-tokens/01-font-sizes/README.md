The way to get different sizes is using the SCSS function `modular-scale()`. This function is part of [Bourbon](http://bourbon.io).

## Example

To get the `base-font-size + 2` font size, you have to use the function in the SCSS like:

```scss
div {
  font-size: modular-scale(2); // unit will be 'em'
}
```
