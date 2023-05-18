// favicon.js - Manages switching favicon for light/dark mode devices
// c: Austin Huffman - Jellayy


// On Load
$(function() {
    // Listen for changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    mediaQuery.addEventListener('change', themeChange)

    // Run once on page load
    themeChange(mediaQuery)
})


// Change favicon content
function themeChange(event) {
    if(event.matches) {
        console.log('themeChange: Dark browser theme detected, showing dark favicon')
        $('#favicon-16x16').attr('href', '/assets/icons/dark/favicon-16x16.png')
        $('#favicon-32x32').attr('href', '/assets/icons/dark/favicon-32x32.png')
    }
    else {
        console.log('themeChange: Light browser theme detected, showing light favicon')
        $('#favicon-16x16').attr('href', '/assets/icons/light/favicon-16x16.png')
        $('#favicon-32x32').attr('href', '/assets/icons/light/favicon-32x32.png')
    }
}