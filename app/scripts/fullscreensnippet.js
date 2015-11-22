
// Sample code for using the Fullscreen API
// ==========================================

document.cancelFullScreen = document.webkitCancelFullScreen || document.mozCancelFullScreen || document.cancelFullScreen;

document.body.requestFullScreen = document.body.webkitRequestFullScreen || document.body.mozRequestFullScreen || document.body.requestFullScreen;

function isFullScreen() {
    return !!(document.webkitIsFullScreen || document.mozFullScreen || document.isFullScreen); // if any defined and true
}

function fullScreenElement() {
    return document.webkitFullScreenElement || document.webkitCurrentFullScreenElement || document.mozFullScreenElement || document.fullScreenElement;
}

document.body.onclick = function(e) {
    console.log(fullScreenElement());
    if (!isFullScreen()) {
        document.body.requestFullScreen();
    }
};



// TODO: Bootstrap layout is currently the only one which properly handles the fullscreen
// button injection. This should be done more generally (i.e inject via index.js)