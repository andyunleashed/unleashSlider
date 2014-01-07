# Super Simple Responsive Unleashed Slider

<div class="container">

*   ![placeholder](http://placehold.it/800x300)
*   ![placeholder](http://placekitten.com/800/300)
*   ![placeholder](http://lorempixel.com/800/300)
*   ![placeholder](http://placehold.it/800x300)
*   ![placeholder](http://placekitten.com/800/300)
*   ![placeholder](http://lorempixel.com/800/300)

  [Download JS](https://s3-us-west-2.amazonaws.com/s.cdpn.io/1063/unleashSlider_1.js) |
  [Download CSS](https://s3-us-west-2.amazonaws.com/s.cdpn.io/1063/unleashSlider.css) |
  [&gt; Download ZIP (with HTML, JS, CSS)](https://s3-us-west-2.amazonaws.com/s.cdpn.io/1063/unleashSlider.zip) 

  <div class="other-content">

## How It Works

The slider is super easy to setup and run, just include the JQuery functions in the JS section of the CodePen into your page, preferably in an external file, or even better in a Global JS file that includes all of your scripts.

Basically it takes whatever your container is, for example ".slider" and then grabs the first child and begins fading out and in the siblings of that initial item. When it gets to the end item, it resets to being anew.

When calling the function use `$(document).ready(function() {});` to ensure that your page, contents and imagery are already loaded before firing

## Example Structure

As a hand you can either copy the existing structure, or replicate something like the below;

    <div style="background: #272822; overflow:auto;width:auto;border:solid #e6db74;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%">  <span style="color: #f92672">&lt;ul</span> <span style="color: #a6e22e">class=</span><span style="color: #e6db74">&quot;slider&quot;</span><span style="color: #f92672">&gt;</span>
      <span style="color: #f92672">&lt;li&gt;&lt;img</span> <span style="color: #a6e22e">src=</span><span style="color: #e6db74">&quot;#&quot;</span> <span style="color: #a6e22e">alt=</span><span style="color: #e6db74">&quot;#&quot;</span><span style="color: #f92672">&gt;&lt;/li&gt;</span>
      <span style="color: #f92672">&lt;li&gt;&lt;img</span> <span style="color: #a6e22e">src=</span><span style="color: #e6db74">&quot;#&quot;</span> <span style="color: #a6e22e">alt=</span><span style="color: #e6db74">&quot;#&quot;</span><span style="color: #f92672">&gt;&lt;/li&gt;</span>
      <span style="color: #f92672">&lt;li&gt;&lt;img</span> <span style="color: #a6e22e">src=</span><span style="color: #e6db74">&quot;#&quot;</span> <span style="color: #a6e22e">alt=</span><span style="color: #e6db74">&quot;#&quot;</span><span style="color: #f92672">&gt;&lt;/li&gt;</span>
  <span style="color: #f92672">&lt;/ul&gt;</span></pre></div>

### Initialisation

To initialise the slider you need to setup your document with the container of your choice and it's direct children being the slides themselves.

In this example I'm using a UL and list items, but you could have nested DIV's or other elements, **as long as the container is given to the function and it's <u>direct children are the slide content containers</u>**, whether the contents are images or otherwise.

### To get it going

**1. Ensure you are including the JQuery itself, the unleashSlider.js file &amp; the CSS in your document.**

2. Stick this function either inside `&lt;script&gt;&lt;script&gt;` tags or inside your jquery file being included.

<!-- HTML generated using hilite.me --><div style="background: #272822; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #a6e22e">$</span><span style="color: #f8f8f2">(document).</span><span style="color: #a6e22e">ready</span><span style="color: #f8f8f2">(</span><span style="color: #66d9ef">function</span><span style="color: #f8f8f2">()</span> <span style="color: #f8f8f2">{</span>

  <span style="color: #a6e22e">unleashSlider</span><span style="color: #f8f8f2">(</span><span style="color: #e6db74">&#39;.slider&#39;</span><span style="color: #f8f8f2">,</span> <span style="color: #ae81ff">3000</span><span style="color: #f8f8f2">,</span> <span style="color: #ae81ff">500</span><span style="color: #f8f8f2">);</span> <span style="color: #75715e">// run the slider</span>

<span style="color: #f8f8f2">});</span> <span style="color: #75715e">// end doc ready</span>
</pre></div>

3. Note the parameters being passed to the unleashSlider function.

      - The first is **.slider** - this is the class of your container element.

      - The second, in the example "3000" is the **delay interval. (time in miliseconds between fades)** 

      - The third "500" is the **fading time in miliseconds of the slides**

### 4. ENJOY!

    <span class="with-love">Made With love by [Andy Howells](http://lkd.to/andyunleash)</span>
  </div>
</div>

<footer>
  [![Unleash](http://unleash-it.co.uk/images/logo.png)](http://unleash-it.co.uk)
  [![codeboxers](http://codeboxers.com/wp-content/themes/codeboxers/images/logo.png)](http://codeboxers.com)
</footer>
