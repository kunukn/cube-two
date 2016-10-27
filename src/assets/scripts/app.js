'use strict';

import '../styles/app.scss';

import { log } from './logger';

import { qs, qsa, byId } from './query';

//import Cubetwo from './cube-two';

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
const cubetwoSceneEl = qs('.cubetwo-scene');


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

const cubetwo = {
    cubes: []
};



// const cube1 = new cubetwo({
//     cubeComponent: byId('cubetwo-component-1'),
//     // faceSkins: {
//     //     u: {
//     //         bgColor: 'red'
//     //     },
//     //     f: {
//     //         bgColor: 'pink'
//     //     },
//     //     r: {
//     //         bgColor: 'yellow'
//     //     },
//     //     l: {
//     //         bgColor: 'green'
//     //     },
//     //     b: {
//     //         bgColor: 'dodgerblue'
//     //     },
//     //     d: {
//     //         bgColor: 'teal'
//     //     },
//     // },
// });
// const cube2 = new cubetwo({
//     cubeComponent: byId('cubetwo-component-2'),
// });
// const cube3 = new cubetwo({
//     cubeComponent: byId('cubetwo-component-3'),
// });
// const cube4 = new cubetwo({
//     cubeComponent: byId('cubetwo-component-4'),
// });
// const cube5 = new cubetwo({
//     cubeComponent: byId('cubetwo-component-5'),
// });
// const cube6 = new cubetwo({
//     cubeComponent: byId('cubetwo-component-6'),
// });
// const cube7 = new cubetwo({
//     cubeComponent: byId('cubetwo-component-7'),
// });
// const cube8 = new cubetwo({
//     cubeComponent: byId('cubetwo-component-8'),
// });

// let cube = cube1;
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

// //----------
// cube = cube2;
// cube.addCallbackForEvent('init', initCallback);
// cube.addCallbackForEvent('statechange', statechangeCallback);
// cube.init();
// cube.setToRandomState();
// cubetwo.cubes.push(cube);
// cube.addCallbackForEvent('beforerotate', (eventName, payload) => {
//     if (payload.action === 'x') {
//         cube4.x({ skipTriggerEvent: true });
//     } else if (payload.action === '-x') {
//         cube4.X({ skipTriggerEvent: true });
//     } else if (payload.action === 'y') {
//         cube1.y({ skipTriggerEvent: true });
//     } else if (payload.action === '-y') {
//         cube1.Y({ skipTriggerEvent: true });
//     }
// });


// //----------
// cube = cube3;
// cube.addCallbackForEvent('init', initCallback);
// cube.addCallbackForEvent('statechange', statechangeCallback);
// cube.init();
// cube.setToRandomState();
// cubetwo.cubes.push(cube);
// cube.addCallbackForEvent('beforerotate', (eventName, payload) => {
//     if (payload.action === 'x') {
//         cube1.x({ skipTriggerEvent: true });
//     } else if (payload.action === '-x') {
//         cube1.X({ skipTriggerEvent: true });
//     } else if (payload.action === 'y') {
//         cube4.y({ skipTriggerEvent: true });
//     } else if (payload.action === '-y') {
//         cube4.Y({ skipTriggerEvent: true });
//     }
// });

// //----------
// cube = cube4;
// cube.addCallbackForEvent('init', initCallback);
// cube.addCallbackForEvent('statechange', statechangeCallback);
// cube.init();
// cube.setToRandomState();
// cubetwo.cubes.push(cube);
// cube.addCallbackForEvent('beforerotate', (eventName, payload) => {
//     if (payload.action === 'x') {
//         cube2.x({ skipTriggerEvent: true });
//     } else if (payload.action === '-x') {
//         cube2.X({ skipTriggerEvent: true });
//     } else if (payload.action === 'y') {
//         cube3.y({ skipTriggerEvent: true });
//     } else if (payload.action === '-y') {
//         cube3.Y({ skipTriggerEvent: true });
//     }
// });


// //----------
// cube = cube5;
// cube.init();
// cube.setToRandomState();
// cubetwo.cubes.push(cube);


// //----------
// cube = cube6;
// cube.init();
// cube.setToRandomState();
// cubetwo.cubes.push(cube);


// //----------
// cube = cube7;
// cube.init();
// cube.setToRandomState();
// cubetwo.cubes.push(cube);


// //----------
// cube = cube8;
// cube.init();
// cube.setToRandomState();
// cubetwo.cubes.push(cube);


//----------


// cubetwo.solve = () => {
//     cubetwo.cubes.forEach(cube => cube.gotoState('uf'));
// };

// cubetwo.random = () => {
//     cubetwo.cubes.forEach(cube => cube.setToRandomState());
// };


window.cubetwo = cubetwo;

const btncubetwoRotateView = byId('btn-cube-two-rotate-view');
btncubetwoRotateView.addEventListener('click', (ev) => {
    if (cubetwoSceneEl.classList.contains('left-side')) {
        cubetwoSceneEl.classList.remove('left-side');
        cubetwoSceneEl.classList.add('down-side');
    } else if (cubetwoSceneEl.classList.contains('down-side')) {
        cubetwoSceneEl.classList.remove('down-side');
        cubetwoSceneEl.classList.add('left-down-side');
    } else if (cubetwoSceneEl.classList.contains('left-down-side')) {
        cubetwoSceneEl.classList.remove('left-down-side');
    } else {
        cubetwoSceneEl.classList.add('left-side');
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