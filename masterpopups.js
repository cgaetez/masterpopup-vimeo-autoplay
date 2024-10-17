// Vimeo play after modal loaded at MasterPopUps for WordPress

// Find the ID of your modal and replace
let your_modal_id = 2222;

MPP_POPUP_OPTIONS[your_modal_id].callbacks.afterOpen = function($, popup_instance, popup_id, options) {

    // Locate the iframe within the div with class 'mpp-wrap-video'
    var iframe = $(document).find('.mpp-wrap-video iframe');
    
    if (iframe.length) {
        var player = new Vimeo.Player(iframe[0]);

        // Mute the video and play, this is important for autoplay
        player.setVolume(0); // Mute the video

        player.play().catch(function(error) {
            console.error('Error playing video:', error);
        });
    }
};
