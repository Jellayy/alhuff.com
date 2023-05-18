// animations.js - Manages the animations that run on page load
// c: Austin Huffman - Jellayy


// On load
$(function() {
    // Hide preloader after it fades out
    setTimeout(function() {
        console.debug('main: Hiding preloader')
        $('#preloader').hide();
    }, 2500)
})