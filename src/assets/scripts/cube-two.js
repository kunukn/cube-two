'use strict';

import { debug, log, error } from './logger';

import { qs, qsa, byId } from './query';

// import dictCubeSkins from './dictionaries/dict-cube-skins';

import deepFreeze from 'deep-freeze';

import {
    rAF,
    nextFrame,
    cloneObject,
    nextState,
    getLeft,
    getRight,
    getDown,
    getBack,
    getUp,
    getFront
} from './cube-util';

import dictCube from './dictionaries/dict-cube';
import dictCubeTransform from './dictionaries/dict-cube-transform';

import { STATES, STATES_ARRAY, KEY, EVENT_NAMES } from './constants';

const CUBE_COUNT = 8;
const CUBE_SIZE = '20vmin';
const CUBE_SIZE_HALF = '10vmin';


class CubeTwo {
    constructor(config) {
        this._cubeComponentEl = config.cubeComponent;
        this._cubes = [];
        for (var i = 1; i <= CUBE_COUNT; i++) {
            let cube = qs(`.cubetwo-cube-${i}`, this._cubeComponentEl);
            this._cubes.push(cube);
            this[`_cube${i}El`] = cube;
            this[`_cube${i}DisplayEl`] = qs('[data-type="cubetwo-display"]', cube);;
            this[`_cube${i}TouchEl`] = qs('[data-type="cubetwo-touch"]', cube);;
        }
        deepFreeze(this._cubes);

        log('CubeTwo constructor');
    }

    F() {
        log('front clockwise');
    }
    F_() {
        log('front counter clockwise');
    }
    B() {

    }
    B_() {

    }

    U() {
        const angle = '-90';
        this._cube1DisplayEl.style.transformOrigin = `100% 0% -${CUBE_SIZE_HALF}`;
        this._cube2DisplayEl.style.transformOrigin = `0% 0% -${CUBE_SIZE_HALF}`;
        this._cube5DisplayEl.style.transformOrigin = `100% 0% ${CUBE_SIZE_HALF}`;
        this._cube6DisplayEl.style.transformOrigin = `0% 0% ${CUBE_SIZE_HALF}`;

        this._cube1DisplayEl.style.transform = `rotateY(${angle}deg)`;
        this._cube2DisplayEl.style.transform = `rotateY(${angle}deg)`;
        this._cube5DisplayEl.style.transform = `rotateY(${angle}deg)`;
        this._cube6DisplayEl.style.transform = `rotateY(${angle}deg)`;
    }
    U_() {
        const angle = '90';

        this._cube1DisplayEl.style.transformOrigin = `100% 0% -${CUBE_SIZE_HALF}`;
        this._cube2DisplayEl.style.transformOrigin = `0% 0% -${CUBE_SIZE_HALF}`;
        this._cube5DisplayEl.style.transformOrigin = `100% 0% ${CUBE_SIZE_HALF}`;
        this._cube6DisplayEl.style.transformOrigin = `0% 0% ${CUBE_SIZE_HALF}`;

        this._cube1DisplayEl.style.transform = `rotateY(${angle}deg)`;
        this._cube2DisplayEl.style.transform = `rotateY(${angle}deg)`;
        this._cube5DisplayEl.style.transform = `rotateY(${angle}deg)`;
        this._cube6DisplayEl.style.transform = `rotateY(${angle}deg)`;
    }
    U2() {
        const angle = '-180';
        this._cube1DisplayEl.style.transformOrigin = `100% 0% -${CUBE_SIZE_HALF}`;
        this._cube2DisplayEl.style.transformOrigin = `0% 0% -${CUBE_SIZE_HALF}`;
        this._cube5DisplayEl.style.transformOrigin = `100% 0% ${CUBE_SIZE_HALF}`;
        this._cube6DisplayEl.style.transformOrigin = `0% 0% ${CUBE_SIZE_HALF}`;

        this._cube1DisplayEl.style.transform = `rotateY(${angle}deg)`;
        this._cube2DisplayEl.style.transform = `rotateY(${angle}deg)`;
        this._cube5DisplayEl.style.transform = `rotateY(${angle}deg)`;
        this._cube6DisplayEl.style.transform = `rotateY(${angle}deg)`;
    }
    U2_() {
        const angle = '180';
        this._cube1DisplayEl.style.transformOrigin = `100% 0% -${CUBE_SIZE_HALF}`;
        this._cube2DisplayEl.style.transformOrigin = `0% 0% -${CUBE_SIZE_HALF}`;
        this._cube5DisplayEl.style.transformOrigin = `100% 0% ${CUBE_SIZE_HALF}`;
        this._cube6DisplayEl.style.transformOrigin = `0% 0% ${CUBE_SIZE_HALF}`;

        this._cube1DisplayEl.style.transform = `rotateY(${angle}deg)`;
        this._cube2DisplayEl.style.transform = `rotateY(${angle}deg)`;
        this._cube5DisplayEl.style.transform = `rotateY(${angle}deg)`;
        this._cube6DisplayEl.style.transform = `rotateY(${angle}deg)`;
    }
    D() {

    }
    D_() {

    }
    R() {

    }
    R_() {

    }
    L() {

    }
    L_() {

    }

    x() {
        log('rotate hole cube in 90deg x axis');
    }
    y() {}
    z() {}
    x2() {
        log('rotate hole cube in 180deg x axis');
    }
    y2() {}
    z2() {}
    x_() {
        log('rotate hole cube in -90deg x axis');
    }
    y_() {}
    z_() {}
    x2_() {}
    y2_() {}
    z2_() {}


    // _updateEventBindings() {
    //     this._handleKeyEvent = this._handleKeyEvent.bind(this);
    //     this._transitionEnd = this._transitionEnd.bind(this);
    // }


    // _initCallbacks() {
    //     this.callbacks = {};
    //     Object.keys(EVENT_NAMES).forEach((eventName, index) => this.callbacks[eventName] = []);
    // }

    // addCallbackForEvent(eventName, callback) {
    //     let collection = this.callbacks[(eventName = eventName.toLowerCase())];
    //     if (collection && typeof callback === 'function') {
    //         collection.push(callback);
    //     }
    // };

    // _triggerEvent(eventName, payload) {
    //     let collection = this.callbacks[eventName] || [],
    //         i, max;
    //     for (i = 0, max = collection.length; i < max; i++) {
    //         collection[i].call(this, eventName, payload);
    //     }
    // }


    // getState() {
    //     return cloneObject(this._appState);
    // }

    // _setState(state) {

    //     const copyState = cloneObject(state);

    //     const previousStateCode = this._appState.code,
    //         currentStateCode = copyState.code;

    //     this._appState = copyState;

    //     if (previousStateCode !== currentStateCode) {
    //         this._triggerEvent('statechange', {
    //             cube: this.cubeComponentEl,
    //             previousStateCode,
    //             currentStateCode,
    //             state: copyState
    //         });
    //     }
    // }

    // _transitionEnd(ev) {
    //     const cubeEl = this.cubeEl;
    //     const backupTransition = cubeEl.style.transition;
    //     cubeEl.style.transition = `0s`;
    //     nextFrame(_ => {
    //         this._updateUiFaces();
    //         cubeEl.style.transform = backupTransition;
    //         rAF(_ => {
    //             cubeEl.style.transition = backupTransition;

    //             const state = this.getState();
    //             state.rotateEnabled = true;
    //             this._setState(state);
    //             this._triggerEvent('afterrotate', {
    //                 cube: this.cubeComponentEl,
    //                 state: state,
    //             });
    //         });
    //     });
    // }

    // destroy() {
    //     this.cubeComponentEl.removeEventListener('keydown', this._handleKeyEvent, false);
    //     this.cubeEl.removeEventListener('transitionend', this._transitionEnd);
    // }

    init() {
        for (var i = 1; i <= CUBE_COUNT; i++) {
            let cubeDisplay = this[`_cube${i}DisplayEl`];
            if (cubeDisplay) {
                cubeDisplay.addEventListener('transitionend', (ev) => {
                    let target;
                    if (ev.currentTarget) {
                        target = ev.currentTarget;
                    } else if (ev.target) {
                        target = ev.target;
                    }
                    if (target) {
                        target.style.transformOrigin = '';
                        target.style.transform = '';
                    }
                })
            }
        }

        // this._handleKeyEvent.bind(this);

        // const cubeComponentEl = this.cubeComponentEl;

        // const touchUpEl = qs('[data-type="CubeTwo-touch"] > [data-type=up]', cubeComponentEl),
        //     touchFrontEl = qs('[data-type="CubeTwo-touch"] > [data-type=front]', cubeComponentEl),
        //     touchRightEl = qs('[data-type="CubeTwo-touch"] >  [data-type=right]', cubeComponentEl),
        //     touchLeftEl = qs('[data-type="CubeTwo-touch"] >  [data-type=left]', cubeComponentEl),
        //     touchBackEl = qs('[data-type="CubeTwo-touch"] >  [data-type=back]', cubeComponentEl),
        //     touchDownEl = qs('[data-type="CubeTwo-touch"] >  [data-type=down]', cubeComponentEl);

        // const touches = [touchUpEl, touchFrontEl, touchRightEl, touchLeftEl, touchBackEl, touchDownEl];
        // touches.forEach(touch => {
        //     if (!touch) {
        //         error(`html is invalid for touch elements: `);
        //         error(touches);
        //         return;
        //     }
        // });


        // const cubeEl = qs('[data-type="CubeTwo-display"]', cubeComponentEl);
        // this.cubeEl = cubeEl;
        // if (!cubeEl) {
        //     error(`html is invalid for CubeTwo-display`);
        //     return;
        // }

        // this.frontEl = qs('[data-type=front] > div', cubeEl);
        // this.upEl = qs('[data-type=up] > div', cubeEl);
        // this.rightEl = qs('[data-type=right] > div', cubeEl);
        // this.leftEl = qs('[data-type=left] > div', cubeEl);
        // this.backEl = qs('[data-type=back] > div', cubeEl);
        // this.downEl = qs('[data-type=down] > div', cubeEl);
        // const displays = [this.frontEl, this.upEl, this.rightEl, this.leftEl, this.backEl, this.downEl];
        // displays.forEach(display => {
        //     if (!display) {
        //         error(`html is invalid for display elements: `);
        //         error(displays);
        //         return;
        //     }
        // });

        // const swipeFront = new Hammer.Swipe();
        // swipeFront.set({ direction: Hammer.DIRECTION_ALL });
        // const swipeUp = new Hammer.Swipe();
        // swipeUp.set({ direction: Hammer.DIRECTION_ALL });
        // const swipeRight = new Hammer.Swipe();
        // swipeRight.set({ direction: Hammer.DIRECTION_ALL });
        // const swipeLeft = new Hammer.Swipe();
        // swipeLeft.set({ direction: Hammer.DIRECTION_ALL });
        // const swipeDown = new Hammer.Swipe();
        // swipeDown.set({ direction: Hammer.DIRECTION_ALL });
        // const swipeBack = new Hammer.Swipe();
        // swipeBack.set({ direction: Hammer.DIRECTION_ALL });

        // const hammerFront = new Hammer.Manager(touchFrontEl, {});
        // hammerFront.add(swipeFront);

        // const hammerUp = new Hammer.Manager(touchUpEl, {});
        // hammerUp.add(swipeUp);

        // const hammerRight = new Hammer.Manager(touchRightEl, {});
        // hammerRight.add(swipeRight);

        // const hammerLeft = new Hammer.Manager(touchLeftEl, {});
        // hammerLeft.add(swipeLeft);

        // const hammerDown = new Hammer.Manager(touchDownEl, {});
        // hammerDown.add(swipeDown);

        // const hammerBack = new Hammer.Manager(touchBackEl, {});
        // hammerBack.add(swipeBack);


        // hammerFront.add(new Hammer.Tap({ event: 'doubletap', taps: 2 }));
        // hammerFront.add(new Hammer.Tap({ event: 'singletap' }));
        // hammerFront.get('doubletap').recognizeWith('singletap');
        // hammerFront.get('singletap').requireFailure('doubletap');

        // hammerUp.add(new Hammer.Tap({ event: 'doubletap', taps: 2 }));
        // hammerUp.add(new Hammer.Tap({ event: 'singletap' }));
        // hammerUp.get('doubletap').recognizeWith('singletap');
        // hammerUp.get('singletap').requireFailure('doubletap');

        // hammerRight.add(new Hammer.Tap({ event: 'doubletap', taps: 2 }));
        // hammerRight.add(new Hammer.Tap({ event: 'singletap' }));
        // hammerRight.get('doubletap').recognizeWith('singletap');
        // hammerRight.get('singletap').requireFailure('doubletap');

        // hammerLeft.add(new Hammer.Tap({ event: 'doubletap', taps: 2 }));
        // hammerLeft.add(new Hammer.Tap({ event: 'singletap' }));
        // hammerLeft.get('doubletap').recognizeWith('singletap');
        // hammerLeft.get('singletap').requireFailure('doubletap');

        // hammerDown.add(new Hammer.Tap({ event: 'doubletap', taps: 2 }));
        // hammerDown.add(new Hammer.Tap({ event: 'singletap' }));
        // hammerDown.get('doubletap').recognizeWith('singletap');
        // hammerDown.get('singletap').requireFailure('doubletap');

        // hammerBack.add(new Hammer.Tap({ event: 'doubletap', taps: 2 }));
        // hammerBack.add(new Hammer.Tap({ event: 'singletap' }));
        // hammerBack.get('doubletap').recognizeWith('singletap');
        // hammerBack.get('singletap').requireFailure('doubletap');

        // hammerFront.on('singletap doubletap swipeup swipedown swiperight swipeleft', (ev) => {

        //     const type = ev.type;
        //     let element = ev.target;
        //     //debug(`${type} ${element.dataset.type}`);

        //     // Find swipe element if event is invoke on child element
        //     if (element.dataset.type !== 'CubeTwo') {
        //         element = element.parentElement;
        //         if (element.dataset.type !== 'CubeTwo')
        //             element = element.parentElement;
        //     }

        //     switch (type) {
        //         case 'singletap':
        //             break;
        //         case 'doubletap':
        //             this.tapped(element, ev.target.dataset.type);
        //             break;
        //         case 'swipeup':
        //             this.x();
        //             break;
        //         case 'swiperight':
        //             this.y();
        //             break;
        //         case 'swipedown':
        //             this.X();
        //             break;
        //         case 'swipeleft':
        //             this.Y();
        //             break;
        //     }
        // });


        // hammerUp.on('singletap doubletap swipeup swipedown swiperight swipeleft', (ev) => {
        //     const type = ev.type;
        //     let element = ev.target;
        //     //debug(`${type} ${element.dataset.type}`);

        //     // Find swipe element if event is invoke on child element
        //     if (element.dataset.type !== 'CubeTwo') {
        //         element = element.parentElement;
        //         if (element.dataset.type !== 'CubeTwo')
        //             element = element.parentElement;
        //     }

        //     switch (type) {
        //         case 'singletap':
        //             break;
        //         case 'doubletap':
        //             this.tapped(element, ev.target.dataset.type);
        //             break;
        //         case 'swipeup':
        //             this.x();
        //             break;
        //         case 'swiperight':
        //             this.z();
        //             break;
        //         case 'swipedown':
        //             this.X();
        //             break;
        //         case 'swipeleft':
        //             this.Z();
        //             break;
        //     }
        // });


        // hammerRight.on('singletap doubletap swipeup swipedown swiperight swipeleft', (ev) => {
        //     const type = ev.type;
        //     let element = ev.target;
        //     //debug(`${type} ${element.dataset.type}`);

        //     // Find swipe element if event is invoke on child element
        //     if (element.dataset.type !== 'CubeTwo') {
        //         element = element.parentElement;
        //         if (element.dataset.type !== 'CubeTwo')
        //             element = element.parentElement;
        //     }
        //     switch (type) {
        //         case 'singletap':
        //             break;
        //         case 'doubletap':
        //             this.tapped(element, ev.target.dataset.type);
        //             break;
        //         case 'swipeup':
        //             this.Z();
        //             break;
        //         case 'swiperight':
        //             this.y();
        //             break;
        //         case 'swipedown':
        //             this.z();
        //             break;
        //         case 'swipeleft':
        //             this.Y();
        //             break;
        //     }
        // });


        // hammerLeft.on('singletap doubletap swipeup swipedown swiperight swipeleft', (ev) => {
        //     const type = ev.type;
        //     let element = ev.target;
        //     debug(`${type} ${element.dataset.type}`);

        //     // Find swipe element if event is invoke on child element
        //     if (element.dataset.type !== 'CubeTwo') {
        //         element = element.parentElement;
        //         if (element.dataset.type !== 'CubeTwo')
        //             element = element.parentElement;
        //     }
        //     switch (type) {
        //         case 'singletap':
        //             break;
        //         case 'doubletap':
        //             this.tapped(element, ev.target.dataset.type);
        //             break;
        //         case 'swipeup':
        //             this.z();
        //             break;
        //         case 'swiperight':
        //             this.y();
        //             break;
        //         case 'swipedown':
        //             this.Z();
        //             break;
        //         case 'swipeleft':
        //             this.Y();
        //             break;
        //     }
        // });

        // hammerDown.on('singletap doubletap swipeup swipedown swiperight swipeleft', (ev) => {
        //     const type = ev.type;
        //     let element = ev.target;
        //     //debug(`${type} ${element.dataset.type}`);

        //     // Find swipe element if event is invoke on child element
        //     if (element.dataset.type !== 'CubeTwo') {
        //         element = element.parentElement;
        //         if (element.dataset.type !== 'CubeTwo')
        //             element = element.parentElement;
        //     }
        //     switch (type) {
        //         case 'singletap':
        //             break;
        //         case 'doubletap':
        //             this.tapped(element, ev.target.dataset.type);
        //             break;
        //         case 'swipeup':
        //             this.x();
        //             break;
        //         case 'swiperight':
        //             this.Z();
        //             break;
        //         case 'swipedown':
        //             this.X();
        //             break;
        //         case 'swipeleft':
        //             this.z();
        //             break;
        //     }
        // });


        // hammerBack.on('singletap doubletap swipeup swipedown swiperight swipeleft', (ev) => {
        //     const type = ev.type;
        //     let element = ev.target;
        //     //debug(`${type} ${element.dataset.type}`);

        //     // Find swipe element if event is invoke on child element
        //     if (element.dataset.type !== 'CubeTwo') {
        //         element = element.parentElement;
        //         if (element.dataset.type !== 'CubeTwo')
        //             element = element.parentElement;
        //     }
        //     switch (type) {
        //         case 'singletap':
        //             break;
        //         case 'doubletap':
        //             this.tapped(element, ev.target.dataset.type);
        //             break;
        //         case 'swipeup':
        //             this.X();
        //             break;
        //         case 'swiperight':
        //             this.y();
        //             break;
        //         case 'swipedown':
        //             this.x();
        //             break;
        //         case 'swipeleft':
        //             this.Y();
        //             break;
        //     }
        // });


        // this._updateUiFaces();

        // this.cubeComponentEl.addEventListener('keydown', this._handleKeyEvent, false);
        // cubeEl.addEventListener('transitionend', this._transitionEnd);

        // this._triggerEvent('init', { cube: this.cubeComponentEl, state: this.getState() });
    }

    _updateUiFaces() {

        // let u, f, r, l, b, d;
        // const state = this.getState();

        // u = getUp(state.code);
        // f = getFront(state.code);
        // r = getRight(state.code);
        // l = getLeft(state.code);
        // b = getBack(state.code);
        // d = getDown(state.code);

        // const faceSkins = this._config.faceSkins;
        // if (faceSkins) {
        //     let skin = '';

        //     this.upEl.style.backgroundColor = (skin = faceSkins[u].bgColor) ? skin : dictCubeSkins[u];
        //     this.frontEl.style.backgroundColor = (skin = faceSkins[f].bgColor) ? skin : dictCubeSkins[f];
        //     this.rightEl.style.backgroundColor = (skin = faceSkins[r].bgColor) ? skin : dictCubeSkins[r];
        //     this.leftEl.style.backgroundColor = (skin = faceSkins[l].bgColor) ? skin : dictCubeSkins[l];
        //     this.backEl.style.backgroundColor = (skin = faceSkins[b].bgColor) ? skin : dictCubeSkins[b];
        //     this.downEl.style.backgroundColor = (skin = faceSkins[d].bgColor) ? skin : dictCubeSkins[d];

        //     this.upEl.style.backgroundImage = (skin = faceSkins[u].bgImg) ? skin : '';
        //     this.frontEl.style.backgroundImage = (skin = faceSkins[f].bgImg) ? skin : '';
        //     this.rightEl.style.backgroundImage = (skin = faceSkins[r].bgImg) ? skin : '';
        //     this.leftEl.style.backgroundImage = (skin = faceSkins[l].bgImg) ? skin : '';
        //     this.backEl.style.backgroundImage = (skin = faceSkins[b].bgImg) ? skin : '';
        //     this.downEl.style.backgroundImage = (skin = faceSkins[d].bgImg) ? skin : '';


        // } else {
        //     this.upEl.style.backgroundColor = dictCubeSkins[u];
        //     this.frontEl.style.backgroundColor = dictCubeSkins[f];
        //     this.rightEl.style.backgroundColor = dictCubeSkins[r];
        //     this.leftEl.style.backgroundColor = dictCubeSkins[l];
        //     this.backEl.style.backgroundColor = dictCubeSkins[b];
        //     this.downEl.style.backgroundColor = dictCubeSkins[d];
        // }

        // let t = dictCubeTransform[state.code]['u'];
        // this.upEl.style.transform = t ? `rotate${t.dir}(${t.angle}deg)` : '';

        // t = dictCubeTransform[state.code]['f'];
        // this.frontEl.style.transform = t ? `rotate${t.dir}(${t.angle}deg)` : '';

        // t = dictCubeTransform[state.code]['r'];
        // this.rightEl.style.transform = t ? `rotate${t.dir}(${t.angle}deg)` : '';

        // t = dictCubeTransform[state.code]['l'];
        // this.leftEl.style.transform = t ? `rotate${t.dir}(${t.angle}deg)` : '';

        // t = dictCubeTransform[state.code]['b'];
        // this.backEl.style.transform = t ? `rotate${t.dir}(${t.angle}deg)` : '';

        // t = dictCubeTransform[state.code]['d'];
        // this.downEl.style.transform = t ? `rotate${t.dir}(${t.angle}deg)` : '';
    }

    // tapped(element, target) {
    //     qs(`[data-type="${target}"]`, element).classList.toggle('tapped');
    // }

    // _actionInvoke(action, ui, config) {
    //     let state = this.getState(),
    //         stateCode = state.code;

    //     if (!state.rotateEnabled)
    //         return;

    //     const skipAnimation = config && config.skipAnimation;

    //     state.code = dictCube[stateCode][action]; // reducer

    //     if (!skipAnimation) {
    //         state.rotateEnabled = false; // lock current anim
    //     }

    //     this._setState(state);

    //     if (!skipAnimation) {
    //         ui = ui.bind(this);
    //         ui();
    //     }
    //     if (skipAnimation) {
    //         this._updateUiFaces();
    //     }
    // }

    // gotoState(stateCode) {
    //     if (!STATES[stateCode])
    //         return;

    //     let state = this.getState();
    //     state.code = stateCode;
    //     this._setState(state);
    //     this._updateUiFaces();
    // }

    // setToRandomState() {
    //     let state = this.getState();
    //     state.code = STATES_ARRAY[(STATES_ARRAY.length * Math.random()) | 0];
    //     this._setState(state);
    //     this._updateUiFaces();
    // }

    // x(config) {
    //     if (!config || !config.skipTriggerEvent) {
    //         this._triggerEvent('beforerotate', {
    //             cube: this.cubeComponentEl,
    //             action: 'x',
    //             state: this.getState(),
    //         });
    //     }
    //     this._actionInvoke('x', this._uix, config);
    // }

    // X(config) {
    //     if (!config || !config.skipTriggerEvent) {
    //         this._triggerEvent('beforerotate', {
    //             cube: this.cubeComponentEl,
    //             action: '-x',
    //             state: this.getState(),
    //         });
    //     }
    //     this._actionInvoke('-x', this._uiX, config);
    // }

    // y(config) {
    //     if (!config || !config.skipTriggerEvent) {
    //         this._triggerEvent('beforerotate', {
    //             cube: this.cubeComponentEl,
    //             action: 'y',
    //             state: this.getState(),
    //         });
    //     }
    //     this._actionInvoke('y', this._uiy, config);
    // }

    // Y(config) {
    //     if (!config || !config.skipTriggerEvent) {
    //         this._triggerEvent('beforerotate', {
    //             cube: this.cubeComponentEl,
    //             action: '-y',
    //             state: this.getState(),
    //         });
    //     }
    //     this._actionInvoke('-y', this._uiY, config);
    // }

    // z(config) {
    //     if (!config || !config.skipTriggerEvent) {
    //         this._triggerEvent('beforerotate', {
    //             cube: this.cubeComponentEl,
    //             action: 'z',
    //             state: this.getState(),
    //         });
    //     }
    //     this._actionInvoke('z', this._uiz, config);
    // }

    // Z(config) {
    //     if (!config || !config.skipTriggerEvent) {
    //         this._triggerEvent('beforerotate', {
    //             cube: this.cubeComponentEl,
    //             action: '-z',
    //             state: this.getState(),
    //         });
    //     }
    //     this._actionInvoke('-z', this._uiZ, config);
    // }

    // _uix() {
    //     this.cubeEl.style.transform = `rotateX(90deg)`;
    // }

    // _uiy() {
    //     this.cubeEl.style.transform = `rotateY(90deg)`;
    // }

    // _uiX() {
    //     this.cubeEl.style.transform = `rotateX(-90deg)`;
    // }

    // _uiY() {
    //     this.cubeEl.style.transform = `rotateY(-90deg)`;
    // }

    // _uiz() {
    //     this.cubeEl.style.transform = `rotateZ(90deg)`;
    // }

    // _uiZ() {
    //     this.cubeEl.style.transform = `rotateZ(-90deg)`;
    // }

    // reset() {
    //     this.gotoState('uf');
    //     return 'reset';
    // }


    // _handleKeyEvent(event) {
    //     switch (event.keyCode) {
    //         case KEY.LEFT:
    //         case KEY.a:
    //             this.Y();
    //             break;
    //         case KEY.UP:
    //             event.preventDefault();
    //         case KEY.w:
    //             this.x();
    //             break;
    //         case KEY.RIGHT:
    //         case KEY.d:
    //             this.y();
    //             break;
    //         case KEY.DOWN:
    //             event.preventDefault();
    //         case KEY.s:
    //             this.X();
    //             break;
    //         case KEY.q:
    //             this.Z();
    //             break;
    //         case KEY.e:
    //             this.z();
    //             break;
    //     }
    // }
}

export default CubeTwo;