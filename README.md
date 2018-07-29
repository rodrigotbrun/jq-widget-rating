# Simple jQuery Rating Plugin

This is a quick and simple jQuery Rating plugin. Made for collect a value from 1 to X, in a nice view with Active and Inactive icons.

![Example of 1-5 rating](doc/demo1.png)

# Requirements

- jQuery

# Installation

- Include the `rating.js` and `rating.css` file to your project.
- If you want to use the default star icons, you should also include the folder `img` to the same path where your `rating.js` is. (if you want to change the icons, you can provide options to the plugin `iconSrcActive` and `iconSrcInactive`)

# Configuration

- `iconSize` : Specify as a string, the desired size for your icons (default: 35px)
- `iconSrcActive` : Icon image for active state
- `iconSrcInactive` : Icon image for inactive state
- `iconPadding` : The space between icons (default: 5px (Define as a integer value))
- `maxValue` : Maximum value for rating (default: 5)
- `value` : Current value for rating (it also looks for attribute `value`, so, if your target element is a input with a number, the default value will be the input value)

Note: Icon resource for Active and Inactive are defined as cover in a background image.

# Example

```
<input type="number" class="my-awesome-rating" value="2" />

<script>

$(document).ready(function(){

    $('.my-awesome-rating').rating({
        maxValue: 10,
        iconSize: '70px',
        iconSrcActive: 'myImages/active-star.svg',
        iconSrcInactive: 'myImages/inactive-star.svg,
        iconPadding: 10
    });

});

</script>
```
