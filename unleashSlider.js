/*The MIT License (MIT)
    Copyright (c) 2014 Andy Howells - Unleash IT (http://unleash-it.co.uk)

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in
    all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
    THE SOFTWARE.
*/

function unleashSlider(container) {

    var element = container;

    var interval = 5000;

    var fadeTime = 500;

    slideOut(element);

    function slideOut(element, looping) { // slideOut Functionality

        if(looping != null) { // if looping already
            $slide = element; // $slide = the next slide
        } else { // otherwise the slide to fade out is the first child of the container
            $slide = $(element).find(">:first-child");
        }

        // grab the slide, delay using interval, then fade out
        $slide
            .delay(interval)
            .fadeOut(fadeTime, slideIn);

        // once faded out, callback to SlideIn for next slide

    }

    function slideIn() {
        var $nextSlide = $(this).next(); // get next slide

        if ($nextSlide.length == 0) { // if end of slides

            $firstSlide = $(this).parent().find(">:first-child"); // "next slide" return to first child of the slideshow

            $firstSlide.fadeIn(fadeTime); // fade in the original slide

            slideOut($firstSlide, true); // now run the slideOut again

        } else {
            // if there is a next slide
            $nextSlide.fadeIn(fadeTime); // fade it in

            slideOut($nextSlide, true); // then run the fadeOut

        }
    }
}
