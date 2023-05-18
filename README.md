# alhuff.com
Source to my personal landing page for links to socials and other sites I host. Visit at https://alhuff.com

I originally desired something along the lines of [linktr.ee](https://linktr.ee/) but was more personalizeable and, of course, didn't rely on an extrenal service be it paid or free.

This solution was this: a raw html+css+js site to host my links that I can easily add to, edit, and host myself. This is currently a personal project just for myself. Feel free to fork and/or edit to suit your own needs if you wish; however, creating an inherently customizeable and modular product for anyone to use without touching code is currently out of scope.

## Features:
- Pretty animations
- Link categories
- URL Parsing support for linking to categories (try `https://alhuff.com#development`)
- Adding/Removing links is as easy as a few lines of html
    ```html
    <a href="https://github.com/Jellayy" class="list-link">
        <i class="fa-brands fa-github"></i>
        <p>Github</p>
        <i class="fa-solid fa-arrow-up-right-from-square"></i>
    </a>
    ```
- Mobile responsive design
- Touch based swipe support for switching categories on mobile

## Technologies Used:
The purpose of this project was to *not* use complicated libraries, huge node packages, etc. However, these are some great libraries that mesh well with raw web dev and provide great QoL!

- **jQuery** For shortened JS syntax - https://jquery.com/
- **Vanta.js** Super easy and light animated backgrounds - https://www.vantajs.com/
- **swiped-events** Script that adds native-like mobile swipe events to the DOM (super cool) - https://github.com/john-doherty/swiped-events