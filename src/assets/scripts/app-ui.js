'use strict';

import '../styles/app.scss';

import { log } from './logger';

import { qs, qsa, byId } from './query';

import { ROTATION_VIEW } from './constants';

import { CubeTwo } from './cube-two';

const bodyWrapperEl = qs('.body-wrapper');
const cubeComponentEl = byId('cubetwo-component-1');
const cubetwoRotationViewEl = qs('.cubetwo-rotation-view', cubeComponentEl);

/*
    Setup UI buttons
*/
const cubetwoBtnMenuEl = qs('.cubetwo-js.cubetwo-btn-menu', cubeComponentEl),
    cubetwoMenuEl = qs('.cubetwo-menu-component'),
    cubetwoSolve = qs('.cubetwo-btn-solve', cubetwoMenuEl),
    cubetwoScramble = qs('.cubetwo-btn-scramble', cubetwoMenuEl),
    cubetwoSpin = qs('.cubetwo-btn-spin', cubetwoMenuEl);

cubetwoBtnMenuEl.addEventListener('click', ev => {
    cubetwoMenuEl.classList.toggle('cubetwo-show-dialog');
    ev.currentTarget.classList.toggle('cubetwo-active');
});

cubetwoSolve.addEventListener('click', _ => cubetwo.solve());
cubetwoScramble.addEventListener('click', _ => cubetwo.scramble());
cubetwoSpin.addEventListener('click', _ => {
    cubetwoSpin.classList.toggle('cubetwo-active');
    cubetwoRotationViewEl.classList.toggle('spin');
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
    ev => cubetwo.x()
);
qs('.cubetwo-btn-bottom-center', cubeComponentEl).addEventListener('click',
    ev => cubetwo.x_()
);
qs('.cubetwo-js.cubetwo-btn-rotate-left', cubeComponentEl).addEventListener('click',
    ev => cubetwo.y_()
);
qs('.cubetwo-js.cubetwo-btn-rotate-left-2x', cubeComponentEl).addEventListener('click',
    ev => cubetwo.z_()
);
qs('.cubetwo-js.cubetwo-btn-rotate-right', cubeComponentEl).addEventListener('click',
    ev => cubetwo.y()
);
qs('.cubetwo-js.cubetwo-btn-rotate-right-2x', cubeComponentEl).addEventListener('click',
    ev => cubetwo.z()
);

window.CubeTwo = CubeTwo;