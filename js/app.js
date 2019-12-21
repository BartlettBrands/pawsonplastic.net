// look for the scrolling font being loaded
var fonts = new FontFaceObserver('titling-gothic-fb-extended', {
    weight: 700
});

fonts.load().then(function () {
    console.log('Font is available');
    Marquee3k.init();
}, function () {
    console.log('Font is not available');
    Marquee3k.init();
});
