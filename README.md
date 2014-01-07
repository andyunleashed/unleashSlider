# Super Simple Responsive Unleashed Slider

## How It Works

The slider is super easy to setup and run, just include the JQuery functions in the JS section of the CodePen into your page, preferably in an external file, or even better in a Global JS file that includes all of your scripts.

Basically it takes whatever your container is, for example ".slider" and then grabs the first child and begins fading out and in the siblings of that initial item. When it gets to the end item, it resets to being anew.

When calling the function use `$(document).ready(function() {});` to ensure that your page, contents and imagery are already loaded before firing

## Example Structure

As a hand you can either copy the existing structure, or replicate something like the below;

    <ul class="slider">
      <li><img src="#" alt="#"></li>
      <li><img src="#" alt="#"></li>
      <li><img src="#" alt="#"></li>
    </ul>

### Initialisation

To initialise the slider you need to setup your document with the container of your choice and it's direct children being the slides themselves.

In this example I'm using a UL and list items, but you could have nested DIV's or other elements, **as long as the container is given to the function and it's <u>direct children are the slide content containers</u>**, whether the contents are images or otherwise.

### To get it going

**1. Ensure you are including the JQuery itself, the unleashSlider.js file &amp; the CSS in your document.**

2. Stick this function either inside `<script><script>` tags or inside your jquery file being included.

    `$(document).ready(function() { unleashSlider('.slider', 3000, 500); // run the slider });` 

3. Note the parameters being passed to the unleashSlider function.

- The first is **.slider** - this is the class of your container element.
- The second, in the example "3000" is the **delay interval. (time in miliseconds between fades)** 
- The third "500" is the **fading time in miliseconds of the slides**

### 4. ENJOY!

Made With love by [Andy Howells](http://lkd.to/andyunleash)

