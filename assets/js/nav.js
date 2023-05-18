// nav.js - Manages navigation between sections
// c: Austin Huffman - Jellayy


// On Load
$(function() {
    // Show proper section based on link (default to photography)
    const url = new URL(window.location)
    if(url.hash == "#development") {
        showDevelopment();
    }
    else {
        showPhotography();
    }

    // Photography nav handler
    $('#photography-link').click(function() {
        showPhotography();
    })
    // Photography swipe right handler for mobile (using swiped-events.js)
    document.addEventListener('swiped-right', function(e) {
        showPhotography();
    });

    // Development navbutton handler
    $('#development-link').click(function() {
        showDevelopment();
    })
    // Development swipe left handler for mobile (using swiped-events.js)
    document.addEventListener('swiped-left', function(e) {
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