// nav.js - Manages navigation between sections
// c: Austin Huffman - Jellayy


// On Load
$(function() {
    // Show proper section based on link (default to photography)
    const url = new URL(window.location)
    if(url.hash == "#development") {
        console.debug('main: Parsed #development from URL, showing development tab')
        showDevelopment();
    }
    else if(url.hash == "#photography") {
        console.debug('main: Parsed #photography from URL, showing photography tab')
        showPhotography();
    }
    else {
        console.debug('main: Site accessed from root, showing default tab')
        showPhotography();
    }

    // Photography nav handler
    $('#photography-link').click(function() {
        console.debug('main: Photography tab clicked, showing photography tab')
        showPhotography();
    })
    // Photography swipe right handler for mobile (using swiped-events.js)
    document.addEventListener('swiped-right', function(e) {
        console.debug('main: Right swipe detected, showing photography tab')
        showPhotography();
    });

    // Development navbutton handler
    $('#development-link').click(function() {
        console.debug('main: Development tab clicked, showing development tab')
        showDevelopment();
    })
    // Development swipe left handler for mobile (using swiped-events.js)
    document.addEventListener('swiped-left', function(e) {
        console.debug('main: Left swipe detected, showing development tab')
        showDevelopment();
    });
})


// Play animation and change state to show photography section
function showPhotography() {
    $('#card-content-wrapper').css("transform", "translateX(0)");
    $('#photography-link').addClass('selected');
    $('#development-link').removeClass('selected');
}


// Play animation and change state to show development section
function showDevelopment() {
    $('#card-content-wrapper').css("transform", `translateX(-${$("#photography").width()}px)`);
    $('#development-link').addClass('selected');
    $('#photography-link').removeClass('selected');
}