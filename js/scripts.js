// Hide submenus
$('#body-row .collapse').collapse('hide');

// Collapse/Expand icon
$('#collapse-icon').addClass('fa-angle-double-left');

// Collapse click
$('[data-toggle=sidebar-colapse]').click(function() {
    SidebarCollapse();
});

function SidebarCollapse() {
    $('.menu-collapsed').toggleClass('d-none');
    $('.sidebar-submenu').toggleClass('d-none');
    $('.submenu-icon').toggleClass('d-none');
    $('#sidebar-container').toggleClass('sidebar-expanded sidebar-collapsed');
    
    // Treating d-flex/d-none on separators with title
    var SeparatorTitle = $('.sidebar-separator-title');
    if (SeparatorTitle.hasClass('d-flex')) {
        SeparatorTitle.removeClass('d-flex');
    } else {
        SeparatorTitle.addClass('d-flex');
    }
    
    // Collapse/Expand icon
    $('#collapse-icon').toggleClass('fa-angle-double-left fa-angle-double-right');
}


// screenshare
document.getElementById('screenShareTab').addEventListener('click', function() {
    // Hide other sections and show the screen share section
    document.getElementById('screenShareSection').style.display = 'block';
});

document.getElementById('screenShareButton').addEventListener('click', async function() {
    const screenVideo = document.getElementById('screenVideo');
    
    try {
        // Request to share the screen
        const stream = await navigator.mediaDevices.getDisplayMedia({
            video: true,
            audio: true // Include audio if needed
        });

        // Set the screen stream to the video element
        screenVideo.srcObject = stream;

        // Optionally, handle stream ending (when user stops sharing)
        stream.getVideoTracks()[0].addEventListener('ended', () => {
            screenVideo.srcObject = null; // Clear the video when sharing stops
        });

    } catch (error) {
        console.error('Error sharing screen:', error);
        alert('Failed to share screen. Please check permissions or try again.');
    }
});


