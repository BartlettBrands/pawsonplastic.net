// look for the scrolling font being loaded
var fonts = new FontFaceObserver('titling-gothic-fb-extended', {
    weight: 700
});

// detect touch screen
// https://stackoverflow.com/questions/4817029/whats-the-best-way-to-detect-a-touch-screen-device-using-javascript/4819886#4819886
function is_touch_device() {
    var prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');
    var mq = function(query) {
        return window.matchMedia(query).matches;
    }

    if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
        return true;
    }

    // include the 'heartz' as a way to have a non matching MQ to help terminate the join
    // https://git.io/vznFH
    var query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('');
    if (query) {
        var root = document.getElementsByTagName( 'html' )[0]; // '0' to assign the first (and only `HTML` tag)
        root.setAttribute( 'class', 'not-touch-enabled' );
    } else {
        var root = document.getElementsByTagName( 'html' )[0]; // '0' to assign the first (and only `HTML` tag)
        root.setAttribute( 'class', 'touch-enabled' );
    }
    return mq(query);
}
is_touch_device();

fonts.load().then(function () {
    console.log('Font is available');
    Marquee3k.init();
}, function () {
    console.log('Font is not available');
    Marquee3k.init();
});
