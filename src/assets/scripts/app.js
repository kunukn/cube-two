'use strict';

(function() {

    var log = console.log.bind(console);

    var imgPath = '/src/assets/images/fox.svg';

    var cubetwo = new window.CubeTwo({
        cubeComponent: document.getElementById('cubetwo-component-1'),
        /* required */
        isTapEnabled: true,
        /* default: true */
        isRotateAnimationEnabled: true,
        /* default: true */
        borderOnTheCube: true,
        /* default: true */
        backgroundBlendModeOnTheCube: 'multiply',
        /* e.g. screen, difference, normal, default: multiply */
        backfaceVisibilityHiddenOnTheCube: false,
        /* default: false */
        transition: 'transform cubic-bezier(0.4, 0.0, 0.2, 1) 190ms',
        /* default: transform 190ms */
        backgroundImages: { /* optional */
            u: imgPath,
            d: imgPath,
            f: imgPath,
            b: imgPath,
            r: imgPath,
            l: imgPath,
        },
        backgroundColors: { /* optional */
            u: 'rgba(255, 255, 255, .9)',
            d: 'rgba(255, 213, 0, .9)',
            f: 'rgba(0, 158, 96, .9)',
            b: 'rgba(0, 81, 186, .9)',
            r: 'rgba(196, 30, 58, .9)',
            l: 'rgba(255, 88, 0, .9)',
            backface: 'transparent',
        },
        cubeSize: { /* optional */
            // value: 80,
            // unit: 'px',
        }
    });
    cubetwo.addCallbackForEvent('init', initCallback);
    cubetwo.addCallbackForEvent('statechange', statechangeCallback);
    cubetwo.addCallbackForEvent('beforerotate', beforerotateCallback);
    cubetwo.addCallbackForEvent('afterrotate', afterrotateCallback);
    cubetwo.addCallbackForEvent('issolved', issolvedCallback);
    cubetwo.init();

    function statechangeCallback(eventName, payload) {
        // log(eventName);
        // log(payload);
    }

    function initCallback(eventName, payload) {
        // log(eventName);
        // log(payload);
    }

    function beforerotateCallback(eventName, payload) {
        // log(eventName);
        // log(payload.action);
    }

    function afterrotateCallback(eventName, payload) {
        // log(eventName);
        // log(payload);
    }

    function issolvedCallback(eventName, payload) {
        // log(eventName);
        // log(payload);
    }


    window.addEventListener('keydown', cubetwo.handleGlobalKeyEvent, false);

    /*
        Expose to the window object
    */
    window.cubetwo = cubetwo;

    log('cubetwo is available in console');
})();