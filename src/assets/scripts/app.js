'use strict';

import '../styles/app.scss';

import { log } from './logger';

import { qs, qsa, byId } from './query';

import { CubeTwo } from './cube-two';

//log('App running');

const states = {};
const infos = {
    // 'cubetwo-component-1': byId('cubetwo-state-info-1'),
    // 'cubetwo-component-2': byId('cubetwo-state-info-2'),
    // 'cubetwo-component-3': byId('cubetwo-state-info-3'),
    // 'cubetwo-component-4': byId('cubetwo-state-info-4'),
    // 'cubetwo-component-5': byId('cubetwo-state-info-5'),
    // 'cubetwo-component-6': byId('cubetwo-state-info-6'),
    // 'cubetwo-component-7': byId('cubetwo-state-info-7'),
    // 'cubetwo-component-8': byId('cubetwo-state-info-8'),
}

function statechangeCallback(eventName, payload) {
    // states[payload.cube.id] = payload.currentStateCode;
    // checkForComplete();

    // let info = infos[payload.cube.id];
    // if (info)
    //     info.innerHTML = `${payload.currentStateCode}`;
}

function initCallback(eventName, payload) {
    // let info = infos[payload.cube.id];
    // if (info)
    //     info.innerHTML = `${payload.state.code}`;
}

const bodyWrapperEl = qs('.body-wrapper');
const cubeComponentEl = byId('cubetwo-component-1');
const cubetwoRotationViewEl = qs('.cubetwo-rotation-view', cubeComponentEl);

function checkForComplete() {}

const cubeTwo = new CubeTwo({
    cubeComponent: cubeComponentEl,
});
cubeTwo.addCallbackForEvent('init', (eventName, payload) => {
    // log('init callback');
    // log(payload);
});
cubeTwo.init();
window.addEventListener('keydown', cubeTwo.handleGlobalKeyEvent, false);

window.cubetwo = cubeTwo;

const cubetwoHelpEl = byId('cubetwo-help');
byId('btn-cubetwo-help').addEventListener('click', ev => {
    cubetwoHelpEl.classList.toggle('cubetwo-show-help');
    ev.currentTarget.classList.toggle('cubetwo-active');
});

byId('btn-cubetwo-rotate-view').addEventListener('click', ev => {
    if (cubetwoRotationViewEl.classList.contains('left-side')) {
        cubetwoRotationViewEl.classList.remove('left-side');
        cubetwoRotationViewEl.classList.add('down-side');
    } else if (cubetwoRotationViewEl.classList.contains('down-side')) {
        cubetwoRotationViewEl.classList.remove('down-side');
        cubetwoRotationViewEl.classList.add('left-down-side');
    } else if (cubetwoRotationViewEl.classList.contains('left-down-side')) {
        cubetwoRotationViewEl.classList.remove('left-down-side');
    } else {
        cubetwoRotationViewEl.classList.add('left-side');
    }
});


// byId('btn-cubetwo-solve').addEventListener('click',
//     ev => cubetwo.solve()
// );


byId('btn-cubetwo-rotate-1').addEventListener('click',
    ev => cubetwo.y2()
);


byId('btn-cubetwo-rotate-2').addEventListener('click',
    ev => cubetwo.x2()
);


log('cubetwo is available in console');