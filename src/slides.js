(function() {
    var path = window.location.pathname;
    path += (path.endsWith('/')) ? 'slides.md' : '/slides.md';

    var slideshow = remark.create({
        sourceUrl: path + '?' + Math.random(),
        ratio: '16:9',
        navigation: {
            scroll: false,
            touch: true,
            click: false
        },
        highlightStyle: 'default',
        highlightSpans: true,
        highlightLines: true,
        slideNumberFormat: ''
    });

})();

