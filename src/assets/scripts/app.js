'use strict';

import '../styles/app.scss';

import { log } from './logger';

import { qs, qsa, byId } from './query';

import { ROTATION_VIEW } from './constants';

import { CubeTwo } from './cube-two';

//log('App running');

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
const bodyWrapperEl = qs('.body-wrapper');
const cubeComponentEl = byId('cubetwo-component-1');
const cubetwoRotationViewEl = qs('.cubetwo-rotation-view', cubeComponentEl);

function checkForComplete() {
    // todo
}

/*
    Create and configure CubeTwo
*/
// const imgPathFox =  '/src/assets/images/fox.svg';
const imgPathFox = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/157670/fox.svg';

const cubeTwo = new CubeTwo({
    cubeComponent: cubeComponentEl,
    isTapEnabled: true, // default: true
    isRotateAnimationEnabled: true, // default: true
    transition: 'transform cubic-bezier(0.4, 0.0, 0.2, 1) 200ms', // default: transform 200ms    
    backgroundImages: {
        u: imgPathFox,
        d: imgPathFox,
        f: imgPathFox,
        b: imgPathFox,
        r: imgPathFox,
        l: imgPathFox,
    },
    backgroundColors: {
        u: 'rgba(255, 255, 255, .9)',
        f: 'rgba(0, 158, 96, .9)',
        r: 'rgba(196, 30, 58, .9)',
        l: 'rgba(255, 88, 0, .9)',
        b: 'rgba(0, 81, 186, .9)',
        d: 'rgba(255, 213, 0, .9)',
        _: 'transparent',
    },
});
cubeTwo.addCallbackForEvent('init', initCallback);
cubeTwo.addCallbackForEvent('statechange', statechangeCallback);
cubeTwo.addCallbackForEvent('beforerotate', beforerotateCallback);
cubeTwo.addCallbackForEvent('afterrotate', afterrotateCallback);
cubeTwo.init();


/*
    Setup UI buttons
*/
const cubetwoBtnMenuEl = qs('.cubetwo-js.cubetwo-btn-menu', cubeComponentEl),
    cubetwoMenuEl = qs('.cubetwo-menu-component');

cubetwoBtnMenuEl.addEventListener('click', ev => {
    cubetwoMenuEl.classList.toggle('cubetwo-show-dialog');
    ev.currentTarget.classList.toggle('cubetwo-active');
});

const cubetwoBtnHelpEl = qs('.cubetwo-js.cubetwo-btn-help', cubeComponentEl),
    cubetwoHelpEl = qs('.cubetwo-help-component');

cubetwoBtnHelpEl.addEventListener('click', ev => {
    cubetwoHelpEl.classList.toggle('cubetwo-show-dialog');
    ev.currentTarget.classList.toggle('cubetwo-active');
});

qs('.cubetwo-btn-top-left', cubeComponentEl).addEventListener('click',
    ev => cubetwoRotationViewEl.style.transform = `rotateX(${ROTATION_VIEW.X}deg) rotateY(-${ROTATION_VIEW.Y}deg) rotateZ(0deg)`
);
qs('.cubetwo-btn-top-right', cubeComponentEl).addEventListener('click',
    ev => cubetwoRotationViewEl.style.transform = `rotateX(${ROTATION_VIEW.X}deg) rotateY(${ROTATION_VIEW.Y}deg) rotateZ(0deg)`
);
qs('.cubetwo-btn-bottom-left', cubeComponentEl).addEventListener('click',
    ev => cubetwoRotationViewEl.style.transform = `rotateX(-${ROTATION_VIEW.X}deg) rotateY(-${ROTATION_VIEW.Y}deg) rotateZ(0deg)`
);
qs('.cubetwo-btn-bottom-right', cubeComponentEl).addEventListener('click',
    ev => cubetwoRotationViewEl.style.transform = `rotateX(-${ROTATION_VIEW.X}deg) rotateY(${ROTATION_VIEW.Y}deg) rotateZ(0deg)`
);
qs('.cubetwo-btn-top-center', cubeComponentEl).addEventListener('click',
    ev => cubeTwo.x()
);
qs('.cubetwo-btn-bottom-center', cubeComponentEl).addEventListener('click',
    ev => cubeTwo.x_()
);
qs('.cubetwo-js.cubetwo-btn-rotate-left', cubeComponentEl).addEventListener('click',
    ev => cubeTwo.y_()
);
qs('.cubetwo-js.cubetwo-btn-rotate-left-2x', cubeComponentEl).addEventListener('click',
    ev => cubeTwo.y2_()
);
qs('.cubetwo-js.cubetwo-btn-rotate-right', cubeComponentEl).addEventListener('click',
    ev => cubeTwo.y()
);
qs('.cubetwo-js.cubetwo-btn-rotate-right-2x', cubeComponentEl).addEventListener('click',
    ev => cubeTwo.y2()
);
window.addEventListener('keydown', cubeTwo.handleGlobalKeyEvent, false);

/*
    Expose as Library to window object
*/
window.cubetwo = cubeTwo;

log('cubetwo is available in console');