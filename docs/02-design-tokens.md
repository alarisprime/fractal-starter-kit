---
title: Design Tokens
---

In order to scale and reduce the hard coding of values, we store the design attributes—color values, pixel values, durations, etc.—in a variable. They are called _design tokens_. They are the smallest building blocks of the components.

## Example

Token for the font size:
```scss
$font-size: 15px; // $font-size will be using across the code, not 15px.
```

## Parts of a token

A design token can have these parts

1. Token Category Prefix
  Eg. `Color Text`
2. Object (Component)
  Eg. `Button`
3. Alternate or Variant
  Eg. `Secondary`
4. State
  Eg. `Hover`
5. Theme Context
  Eg. `Inverse`

The token will be name like `$color-text-button-secondary-hover-inverse`. Such a long token name is very rare, this is only an example.
