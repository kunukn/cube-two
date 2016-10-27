'use strict';

import '../styles/app.scss';

import { log } from './logger';

import { qs, qsa, byId } from './query';

import CubeTwo from './cube-two';

//import dictCubeSkins from './dictionaries/dict-cube-skins';

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

function checkForComplete() {
    // let keys = Object.keys(states),
    //     isComplete = false,
    //     stateCode;

    // if (keys.length >= 4) {
    //     isComplete = true;
    //     keys.forEach((key, index, array) => {
    //         if (index === 0) {
    //             stateCode = states[key];
    //         } else if (states[key] !== stateCode) {
    //             isComplete = false;
    //         }
    //     });
    // }

    // if (isComplete) {
    //     bodyWrapperEl.classList.add('with-background-image');
    //     let front = stateCode[1];
    //     bodyWrapperEl.style.backgroundColor = dictCubeSkins[`${front}-dark`];
    // } else if (bodyWrapperEl.classList.contains('with-background-image')) {
    //     bodyWrapperEl.classList.remove('with-background-image');
    //     bodyWrapperEl.style.backgroundColor = '';
    // }
}


const cubeTwo = new CubeTwo({
    cubeComponent: cubeComponentEl,
});
cubeTwo.addCallbackForEvent('init', (eventName, payload) => {
    log('init callback');
    log(payload);
});
cubeTwo.init();

// let cube = cubeTwo;
// cube.addCallbackForEvent('init', initCallback);
// cube.addCallbackForEvent('statechange', statechangeCallback);
// cube.init();
// cube.setToRandomState();
// cubetwo.cubes.push(cube);
// cube.addCallbackForEvent('beforerotate', (eventName, payload) => {
//     if (payload.action === 'x') {
//         cube3.x({ skipTriggerEvent: true });
//     } else if (payload.action === '-x') {
//         cube3.X({ skipTriggerEvent: true });
//     } else if (payload.action === 'y') {
//         cube2.y({ skipTriggerEvent: true });
//     } else if (payload.action === '-y') {
//         cube2.Y({ skipTriggerEvent: true });
//     }
// });



window.cubeTwo = cubeTwo;

const btncubetwoRotateView = byId('btn-cube-two-rotate-view');
btncubetwoRotateView.addEventListener('click', (ev) => {
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


// const btncubetwoSolve = byId('btn-cube-two-solve');
// btncubetwoSolve.addEventListener('click', (ev) => {
//     cubetwo.solve();
// });

// const btncubetwoRandom = byId('btn-cube-two-random');
// btncubetwoRandom.addEventListener('click', (ev) => {
//     cubetwo.random();
// });

// const cubetwoScene = qs('.cubetwo-scene');
// byId('btn-cube-two-temp').addEventListener('click', (ev) => {
//     cubetwoScene.classList.toggle('left-setup');
//     cubetwoScene.classList.toggle('x2-left');
// });




//----------
log('cubetwo is available in console');