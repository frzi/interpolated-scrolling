# Interpolated scrolling
> Smooth scrolling on desktops

## Demo
[Try it out on your desktop](https://frzi.github.io/interpolated-scrolling).

## About
Smooth scrolling isn't a new concept on the web. Smooth scrolling is often applied (implemented) on a site make it look more, well, smooth. Often visually helping the page for scroll based effects like parallax background images. Or perhaps the site is simply one giant `<canvas>` element and all the contents is rendered via WebGL.

Whatever the case, smooth scrolling is usually done via an entirely custom made implementation. Where the Javascript listens to events like `mousewheel` and `key{down|pressed|up}` (for arrows) and performs all the scrolling via code.

The problem with this however is that basic functionality and – more importantly – user preferences are quickly overlooked or ignored. Some of these are:
* **Middle mouse click scroll (aka auto-scrolling)**  
  A feature most popular on Windows machines. The user can click the middle mouse button to initiate auto-scrolling and move the mouse up or down to change the scroll speed.
* **Page up/Page down/Home/End**  
  A personal pet peeve. These buttons tend to be entirely forgotten on sites using custom scrolling implementations. Showing no effect when pressed. :(
* **Mouse wheel sensitivity**  
  The user may have set their mouse wheel sensitivity/speed to a non-default value. For some users a single nudge on the wheel may scroll a few lines of text. For others it may scroll an entire screen worth! This goes for trackpads as well.
* **`prefers-reduced-motion: reduce` (up for discussion)**  
  Up for debate: some believe smooth scrolling should be disabled when the user has enabled *reduced motion*.

The code in this repository examines an implementation for smooth scrolling: interpolated scrolling. Using the scroll position of `window`, interpolating its changes and applies it to some element's `scrollTop`.

This of course comes with its own set of caveats:
* **No scrolling when selecting**  
  Going out of bounds when selecting text will not initiate automatic scrolling.
* **Not suitable for mobile**  
  Pretty self explanatory. Browsers on mobile devices already implement a form of smooth scrolling. Handling the speed and deceleration natively.
* **May not work on high refresh rate monitors**  
  This implementation depends on the `requestAnimationFrame` function. Some browsers may have this fixed at 60fps despite the user sporting a monitor with a higher refresh rate (looking at you, Safari).