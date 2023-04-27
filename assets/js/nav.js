// Manages navbuttons in card header


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

    // Development nav handler
    $('#development-link').click(function() {
        showDevelopment();
    })

    document.addEventListener('swiped-left', function(e) {
        showDevelopment();
    });

    document.addEventListener('swiped-right', function(e) {
        showPhotography();
    });
})


function showPhotography() {
    $('#card-content-wrapper').css("transform", "translateX(0)");
    $('#photography-link').addClass('selected');
    $('#development-link').removeClass('selected');
}

function showDevelopment() {
    $('#card-content-wrapper').css("transform", `translateX(-${$("#photography").width()}px)`);
    $('#development-link').addClass('selected');
    $('#photography-link').removeClass('selected');
}