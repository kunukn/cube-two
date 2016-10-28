'use strict';

import { debug, log, error } from './logger';

import { qs, qsa, byId } from './query';

// import dictCubeSkins from './dictionaries/dict-cube-skins';

import deepFreeze from 'deep-freeze';

import {
    rAF,
    nextFrame,
    cloneObject,
    // nextState,
    // getLeft,
    // getRight,
    // getDown,
    // getBack,
    // getUp,
    // getFront
} from './cube-util';

// import dictCube from './dictionaries/dict-cube';
// import dictCubeTransform from './dictionaries/dict-cube-transform';

import { /*STATES, STATES_ARRAY,*/ KEY, EVENT_NAMES } from './constants';

const CUBE_COUNT = 8;
const CUBE_SIZE = '20vmin';
const CUBE_SIZE_HALF = '10vmin';


class CubeTwo {
    constructor(config) {

        if (!config || !config.cubeComponent) {
            error(`CubeTwo element was not provided: ${config.cubeComponent}`);
            return;
        }
        this._appState = {};
        this._config = config;
        deepFreeze(this._config);

        this._cubeComponentEl = config.cubeComponent;

        this._updateEventBindings();

        this._initCallbacks();

        this._setState({
            code: 'todo impl state info for the cube',
            rotateEnabled: true,
        });

        log('CubeTwo constructor');
    }


    _updateEventBindings() {
        this._handleKeyEvent = this._handleKeyEvent.bind(this);
        this._transitionEnd = this._transitionEnd.bind(this);
    }

    _initCallbacks() {
        this.callbacks = {};
        Object.keys(EVENT_NAMES)
            .forEach((eventName, index) => this.callbacks[eventName] = []);
    }

    addCallbackForEvent(eventName, callback) {
        let collection = this.callbacks[(eventName = eventName.toLowerCase())];
        if (collection && typeof callback === 'function') {
            collection.push(callback);
        }
    };

    _triggerEvent(eventName, payload) {
        let collection = this.callbacks[eventName] || [],
            i, max;
        for (i = 0, max = collection.length; i < max; i++) {
            collection[i].call(this, eventName, payload);
        }
    }



    getState() {
        return cloneObject(this._appState);
    }

    _setState(state) {

        const copyState = cloneObject(state);

        const previousStateCode = this._appState.code,
            currentStateCode = copyState.code;

        this._appState = copyState;

        if (previousStateCode !== currentStateCode) {
            this._triggerEvent('statechange', {
                cube: this.cubeComponentEl,
                previousStateCode,
                currentStateCode,
                state: copyState
            });
        }
    }



    _uiF_Helper(angle) {

        this._displayElements[1].style.transformOrigin = `100% 100% ${CUBE_SIZE_HALF}`;
        this._displayElements[2].style.transformOrigin = `0% 100% ${CUBE_SIZE_HALF}`;
        this._displayElements[3].style.transformOrigin = `100% 0% ${CUBE_SIZE_HALF}`;
        this._displayElements[4].style.transformOrigin = `0% 0% ${CUBE_SIZE_HALF}`;

        this._displayElements[1].style.transform = `rotateZ(${angle}deg)`;
        this._displayElements[2].style.transform = `rotateZ(${angle}deg)`;
        this._displayElements[3].style.transform = `rotateZ(${angle}deg)`;
        this._displayElements[4].style.transform = `rotateZ(${angle}deg)`;
    }
    _uiF() {
        this._uiF_Helper('90');
    }
    _uiF_() {
        this._uiF_Helper('-90');
    }
    _uiF2() {
        this._uiF_Helper('180');
    }
    _uiF2_() {
        this._uiF_Helper('-180');
    }

    _uiB_Helper(angle) {
        this._displayElements[5].style.transformOrigin = `100% 100% ${CUBE_SIZE_HALF}`;
        this._displayElements[6].style.transformOrigin = `0% 100% ${CUBE_SIZE_HALF}`;
        this._displayElements[7].style.transformOrigin = `100% 0% ${CUBE_SIZE_HALF}`;
        this._displayElements[8].style.transformOrigin = `0% 0% ${CUBE_SIZE_HALF}`;

        this._displayElements[5].style.transform = `rotateZ(${angle}deg)`;
        this._displayElements[6].style.transform = `rotateZ(${angle}deg)`;
        this._displayElements[7].style.transform = `rotateZ(${angle}deg)`;
        this._displayElements[8].style.transform = `rotateZ(${angle}deg)`;
    }
    _uiB() {
        this._uiB_Helper('-90');
    }
    _uiB_() {
        this._uiB_Helper('90');
    }
    _uiB2() {
        this._uiB_Helper('-180');
    }
    _uiB2_() {
        this._uiB_Helper('180');
    }


    _uiU_Helper(angle) {
        this._displayElements[1].style.transformOrigin = `100% 0% -${CUBE_SIZE_HALF}`;
        this._displayElements[2].style.transformOrigin = `0% 0% -${CUBE_SIZE_HALF}`;
        this._displayElements[5].style.transformOrigin = `100% 0% ${CUBE_SIZE_HALF}`;
        this._displayElements[6].style.transformOrigin = `0% 0% ${CUBE_SIZE_HALF}`;

        this._displayElements[1].style.transform = `rotateY(${angle}deg)`;
        this._displayElements[2].style.transform = `rotateY(${angle}deg)`;
        this._displayElements[5].style.transform = `rotateY(${angle}deg)`;
        this._displayElements[6].style.transform = `rotateY(${angle}deg)`;
    }
    _uiU() {
        this._uiU_Helper('-90');
    }
    _uiU_() {
        this._uiU_Helper('90');
    }
    _uiU2() {
        this._uiU_Helper('-180');
    }
    _uiU2_() {
        this._uiU_Helper('180');
    }



    _uiD_Helper(angle) {
        this._displayElements[3].style.transformOrigin = `100% 0% -${CUBE_SIZE_HALF}`;
        this._displayElements[4].style.transformOrigin = `0% 0% -${CUBE_SIZE_HALF}`;
        this._displayElements[7].style.transformOrigin = `100% 0% ${CUBE_SIZE_HALF}`;
        this._displayElements[8].style.transformOrigin = `0% 0% ${CUBE_SIZE_HALF}`;

        this._displayElements[3].style.transform = `rotateY(${angle}deg)`;
        this._displayElements[4].style.transform = `rotateY(${angle}deg)`;
        this._displayElements[7].style.transform = `rotateY(${angle}deg)`;
        this._displayElements[8].style.transform = `rotateY(${angle}deg)`;
    }
    _uiD() {
        this._uiD_Helper('90');
    }
    _uiD_() {
        this._uiD_Helper('-90');
    }
    _uiD2() {
        this._uiD_Helper('180');
    }
    _uiD2_() {
        this._uiD_Helper('-180');
    }



    _uiR_Helper(angle) {
        this._displayElements[2].style.transformOrigin = `0% 100% -${CUBE_SIZE_HALF}`;
        this._displayElements[6].style.transformOrigin = `0% 100% ${CUBE_SIZE_HALF}`;
        this._displayElements[8].style.transformOrigin = `0% 0% ${CUBE_SIZE_HALF}`;
        this._displayElements[4].style.transformOrigin = `0% 0% -${CUBE_SIZE_HALF}`;

        this._displayElements[2].style.transform = `rotateX(${angle}deg)`;
        this._displayElements[6].style.transform = `rotateX(${angle}deg)`;
        this._displayElements[8].style.transform = `rotateX(${angle}deg)`;
        this._displayElements[4].style.transform = `rotateX(${angle}deg)`;
    }
    _uiR() {
        this._uiR_Helper('90');
    }
    _uiR_() {
        this._uiR_Helper('-90');
    }
    _uiR2() {
        this._uiR_Helper('180');
    }
    _uiR2_() {
        this._uiR_Helper('-180');
    }



    _uiL_Helper(angle) {
        this._displayElements[1].style.transformOrigin = `0% 100% -${CUBE_SIZE_HALF}`;
        this._displayElements[5].style.transformOrigin = `0% 100% ${CUBE_SIZE_HALF}`;
        this._displayElements[7].style.transformOrigin = `0% 0% ${CUBE_SIZE_HALF}`;
        this._displayElements[3].style.transformOrigin = `0% 0% -${CUBE_SIZE_HALF}`;

        this._displayElements[1].style.transform = `rotateX(${angle}deg)`;
        this._displayElements[5].style.transform = `rotateX(${angle}deg)`;
        this._displayElements[7].style.transform = `rotateX(${angle}deg)`;
        this._displayElements[3].style.transform = `rotateX(${angle}deg)`;
    }
    _uiL() {
        this._uiL_Helper('-90');
    }
    _uiL_() {
        this._uiL_Helper('90');
    }
    _uiL2() {
        this._uiL_Helper('-180');
    }
    _uiL2_() {
        this._uiL_Helper('180');
    }




    _uix() {
        this._uiR();
        this._uiL_();
    }
    _uix_() {
        this._uiR_();
        this._uiL();
    }
    _uix2() {
        this._uiR2();
        this._uiL2_();
    }
    _uix2_() {
        this._uiR2_();
        this._uiL2();
    }

    _uiy() {
        this._uiU_();
        this._uiD();
    }
    _uiy_() {
        this._uiU();
        this._uiD_();
    }
    _uiy2() {
        this._uiU2_();
        this._uiD2();
    }
    _uiy2_() {
        this._uiU2();
        this._uiD2_();
    }

    _uiz() {
        this._uiF();
        this._uiB_();
    }
    _uiz_() {
        this._uiF_();
        this._uiB();
    }
    _uiz2() {
        this._uiF2();
        this._uiB2_();
    }
    _uiz2_() {
        this._uiF2_();
        this._uiB2();
    }


    /* -------------------- */

    F(config) {
        this._uiF();
    }
    F_(config) {
        this._uiF_();
    }
    F2(config) {
        this._uiF2();
    }
    F2_(config) {
        this._uiF2_();
    }


    B(config) {
        this._uiB();
    }
    B_(config) {
        this._uiB_();
    }
    B2(config) {
        this._uiB2();
    }
    B2_(config) {
        this._uiB2_();
    }



    U(config) {
        this._uiU();
    }
    U_(config) {
        this._uiU_();
    }
    U2(config) {
        this._uiU2();
    }
    U2_(config) {
        this._uiU2_();
    }


    D(config) {
        this._uiD();
    }
    D_(config) {
        this._uiD_();
    }
    D2(config) {
        this._uiD2();
    }
    D2_(config) {
        this._uiD2_();
    }


    R(config) {
        this._uiR();
    }
    R_(config) {
        this._uiR_();
    }
    R2(config) {
        this._uiR2();
    }
    R2_(config) {
        this._uiR2_();
    }


    L(config) {
        this._uiL();
    }
    L_(config) {
        this._uiL_();
    }
    L2(config) {
        this._uiL2();
    }
    L2_(config) {
        this._uiL2_();
    }


    x(config) {
        this._uix();
    }
    x_(config) {
        this._uix_();
    }
    x2(config) {
        this._uix2();
    }
    x2_(config) {
        this._uix2_();
    }


    y(config) {
        this._uiy();
    }
    y_(config) {
        this._uiy_();
    }
    y2(config) {
        this._uiy2();
    }
    y2_(config) {
        this._uiy2_();
    }


    z(config) {
        this._uiz();
    }
    z2(config) {
        this._uiz2();
    }
    z_(config) {
        this._uiz_();
    }
    z2_(config) {
        this._uiz2_();
    }


    destroy() {

        // todo foreach display elements, remove transitionend
        // todo remove key event listener
        //     this.cubeComponentEl.removeEventListener('keydown', this._handleKeyEvent, false);
        //     this.cubeEl.removeEventListener('transitionend', this._transitionEnd);
    }

    _updateUiFaces() {
        // Update view by state
    }

    _transitionEnd(ev) {
        let target;
        if (ev.currentTarget) {
            target = ev.currentTarget;
        } else if (ev.target) {
            target = ev.target;
        }
        if (target) {

            const backupTransition = target.style.transition;
            target.style.transition = `0s`;

            nextFrame(_ => {
                // Reset
                target.style.transformOrigin = '';
                target.style.transform = '';

                this._updateUiFaces();

                target.style.transform = backupTransition;
                rAF(_ => {
                    target.style.transition = backupTransition;

                    const state = this.getState();
                    state.rotateEnabled = true;
                    this._setState(state);
                    this._triggerEvent('afterrotate', {
                        state: state,
                    });
                });
            });
        }
    }

    _setupCube1() {
        let touchEl = this._touchElements[1],
            touchUpEl = qs('[data-type="up"]', touchEl),
            touchDownEl,
            touchFrontEl = qs('[data-type="front"]', touchEl),
            touchBackEl,
            touchRightEl,
            touchLeftEl = qs('[data-type="left"]', touchEl);

        let swipe = new Hammer.Swipe();
        swipe.set({ direction: Hammer.DIRECTION_ALL });

        let hammerManager = new Hammer.Manager(touchFrontEl, {});
        hammerManager.add(swipe);
        hammerManager.add(new Hammer.Tap({ event: 'doubletap', taps: 2 }));
        hammerManager.add(new Hammer.Tap({ event: 'singletap' }));
        hammerManager.get('doubletap').recognizeWith('singletap');
        hammerManager.get('singletap').requireFailure('doubletap');

        hammerManager.on('singletap doubletap swipeup swipedown swiperight swipeleft', (ev) => {
            const type = ev.type;
            let element = ev.target;
            //debug(`${type} ${element.dataset.type}`);

            // Find swipe element if event is invoke on child element
            if (element.dataset.type !== 'cubetwo') {
                element = element.parentElement;
                if (element.dataset.type !== 'cubetwo')
                    element = element.parentElement;
            }
            switch (type) {
                case 'singletap':
                    break;
                case 'doubletap':
                    //this.tapped(element, ev.target.dataset.type);
                    break;
                case 'swipeup':
                    this.L_();
                    break;
                case 'swiperight':
                    this.U_();
                    break;
                case 'swipedown':
                    this.L();
                    break;
                case 'swipeleft':
                    this.U();
                    break;
            }
        });


        swipe = new Hammer.Swipe();
        swipe.set({ direction: Hammer.DIRECTION_ALL });

        hammerManager = new Hammer.Manager(touchUpEl, {});
        hammerManager.add(swipe);
        hammerManager.add(new Hammer.Tap({ event: 'doubletap', taps: 2 }));
        hammerManager.add(new Hammer.Tap({ event: 'singletap' }));
        hammerManager.get('doubletap').recognizeWith('singletap');
        hammerManager.get('singletap').requireFailure('doubletap');

        hammerManager.on('singletap doubletap swipeup swipedown swiperight swipeleft', (ev) => {
            const type = ev.type;
            let element = ev.target;
            //debug(`${type} ${element.dataset.type}`);

            if (element.dataset.type !== 'cubetwo') {
                element = element.parentElement;
                if (element.dataset.type !== 'cubetwo')
                    element = element.parentElement;
            }
            switch (type) {
                case 'singletap':
                    break;
                case 'doubletap':
                    break;
                case 'swipeup':
                    this.L_();
                    break;
                case 'swiperight':
                    this.F();
                    break;
                case 'swipedown':
                    this.L();
                    break;
                case 'swipeleft':
                    this.F_();
                    break;
            }
        });

        swipe = new Hammer.Swipe();
        swipe.set({ direction: Hammer.DIRECTION_ALL });

        hammerManager = new Hammer.Manager(touchLeftEl, {});
        hammerManager.add(swipe);
        hammerManager.add(new Hammer.Tap({ event: 'doubletap', taps: 2 }));
        hammerManager.add(new Hammer.Tap({ event: 'singletap' }));
        hammerManager.get('doubletap').recognizeWith('singletap');
        hammerManager.get('singletap').requireFailure('doubletap');

        hammerManager.on('singletap doubletap swipeup swipedown swiperight swipeleft', (ev) => {
            const type = ev.type;
            let element = ev.target;
            //debug(`${type} ${element.dataset.type}`);

            if (element.dataset.type !== 'cubetwo') {
                element = element.parentElement;
                if (element.dataset.type !== 'cubetwo')
                    element = element.parentElement;
            }
            switch (type) {
                case 'singletap':
                    break;
                case 'doubletap':
                    break;
                case 'swipeup':
                    this.F();
                    break;
                case 'swiperight':
                    this.U_();
                    break;
                case 'swipedown':
                    this.F_();
                    break;
                case 'swipeleft':
                    this.U();
                    break;
            }
        });

    }
    _setupCube2() {
        let touchEl = this._touchElements[2],
            touchUpEl = qs('[data-type="up"]', touchEl),
            touchDownEl,
            touchFrontEl = qs('[data-type="front"]', touchEl),
            touchBackEl,
            touchRightEl = qs('[data-type="right"]', touchEl),
            touchLeftEl;

        let swipe = new Hammer.Swipe();
        swipe.set({ direction: Hammer.DIRECTION_ALL });

        let hammerManager = new Hammer.Manager(touchFrontEl, {});
        hammerManager.add(swipe);
        hammerManager.add(new Hammer.Tap({ event: 'doubletap', taps: 2 }));
        hammerManager.add(new Hammer.Tap({ event: 'singletap' }));
        hammerManager.get('doubletap').recognizeWith('singletap');
        hammerManager.get('singletap').requireFailure('doubletap');

        hammerManager.on('singletap doubletap swipeup swipedown swiperight swipeleft', (ev) => {
            const type = ev.type;
            let element = ev.target;
            //debug(`${type} ${element.dataset.type}`);

            // Find swipe element if event is invoke on child element
            if (element.dataset.type !== 'cubetwo') {
                element = element.parentElement;
                if (element.dataset.type !== 'cubetwo')
                    element = element.parentElement;
            }
            switch (type) {
                case 'singletap':
                    break;
                case 'doubletap':
                    //this.tapped(element, ev.target.dataset.type);
                    break;
                case 'swipeup':
                    this.R();
                    break;
                case 'swiperight':
                    this.U_();
                    break;
                case 'swipedown':
                    this.R_();
                    break;
                case 'swipeleft':
                    this.U();
                    break;
            }
        });


        swipe = new Hammer.Swipe();
        swipe.set({ direction: Hammer.DIRECTION_ALL });

        hammerManager = new Hammer.Manager(touchUpEl, {});
        hammerManager.add(swipe);
        hammerManager.add(new Hammer.Tap({ event: 'doubletap', taps: 2 }));
        hammerManager.add(new Hammer.Tap({ event: 'singletap' }));
        hammerManager.get('doubletap').recognizeWith('singletap');
        hammerManager.get('singletap').requireFailure('doubletap');

        hammerManager.on('singletap doubletap swipeup swipedown swiperight swipeleft', (ev) => {
            const type = ev.type;
            let element = ev.target;
            //debug(`${type} ${element.dataset.type}`);

            if (element.dataset.type !== 'cubetwo') {
                element = element.parentElement;
                if (element.dataset.type !== 'cubetwo')
                    element = element.parentElement;
            }
            switch (type) {
                case 'singletap':
                    break;
                case 'doubletap':
                    break;
                case 'swipeup':
                    this.R();
                    break;
                case 'swiperight':
                    this.F();
                    break;
                case 'swipedown':
                    this.R_();
                    break;
                case 'swipeleft':
                    this.F_();
                    break;
            }
        });

        swipe = new Hammer.Swipe();
        swipe.set({ direction: Hammer.DIRECTION_ALL });

        hammerManager = new Hammer.Manager(touchRightEl, {});
        hammerManager.add(swipe);
        hammerManager.add(new Hammer.Tap({ event: 'doubletap', taps: 2 }));
        hammerManager.add(new Hammer.Tap({ event: 'singletap' }));
        hammerManager.get('doubletap').recognizeWith('singletap');
        hammerManager.get('singletap').requireFailure('doubletap');

        hammerManager.on('singletap doubletap swipeup swipedown swiperight swipeleft', (ev) => {
            const type = ev.type;
            let element = ev.target;
            //debug(`${type} ${element.dataset.type}`);

            if (element.dataset.type !== 'cubetwo') {
                element = element.parentElement;
                if (element.dataset.type !== 'cubetwo')
                    element = element.parentElement;
            }
            switch (type) {
                case 'singletap':
                    break;
                case 'doubletap':
                    break;
                case 'swipeup':
                    this.F_();
                    break;
                case 'swiperight':
                    this.U_();
                    break;
                case 'swipedown':
                    this.F();
                    break;
                case 'swipeleft':
                    this.U();
                    break;
            }
        });
    }
    _setupCube3() {
        let touchEl = this._touchElements[3],
            touchUpEl,
            touchDownEl = qs('[data-type="down"]', touchEl),
            touchFrontEl = qs('[data-type="front"]', touchEl),
            touchBackEl,
            touchRightEl,
            touchLeftEl = qs('[data-type="left"]', touchEl);

        let swipe = new Hammer.Swipe();
        swipe.set({ direction: Hammer.DIRECTION_ALL });

        let hammerManager = new Hammer.Manager(touchFrontEl, {});
        hammerManager.add(swipe);
        hammerManager.add(new Hammer.Tap({ event: 'doubletap', taps: 2 }));
        hammerManager.add(new Hammer.Tap({ event: 'singletap' }));
        hammerManager.get('doubletap').recognizeWith('singletap');
        hammerManager.get('singletap').requireFailure('doubletap');

        hammerManager.on('singletap doubletap swipeup swipedown swiperight swipeleft', (ev) => {
            const type = ev.type;
            let element = ev.target;
            //debug(`${type} ${element.dataset.type}`);

            // Find swipe element if event is invoke on child element
            if (element.dataset.type !== 'cubetwo') {
                element = element.parentElement;
                if (element.dataset.type !== 'cubetwo')
                    element = element.parentElement;
            }
            switch (type) {
                case 'singletap':
                    break;
                case 'doubletap':
                    //this.tapped(element, ev.target.dataset.type);
                    break;
                case 'swipeup':
                    this.L_();
                    break;
                case 'swiperight':
                    this.D();
                    break;
                case 'swipedown':
                    this.L();
                    break;
                case 'swipeleft':
                    this.D_();
                    break;
            }
        });


        swipe = new Hammer.Swipe();
        swipe.set({ direction: Hammer.DIRECTION_ALL });

        hammerManager = new Hammer.Manager(touchDownEl, {});
        hammerManager.add(swipe);
        hammerManager.add(new Hammer.Tap({ event: 'doubletap', taps: 2 }));
        hammerManager.add(new Hammer.Tap({ event: 'singletap' }));
        hammerManager.get('doubletap').recognizeWith('singletap');
        hammerManager.get('singletap').requireFailure('doubletap');

        hammerManager.on('singletap doubletap swipeup swipedown swiperight swipeleft', (ev) => {
            const type = ev.type;
            let element = ev.target;
            //debug(`${type} ${element.dataset.type}`);

            if (element.dataset.type !== 'cubetwo') {
                element = element.parentElement;
                if (element.dataset.type !== 'cubetwo')
                    element = element.parentElement;
            }
            switch (type) {
                case 'singletap':
                    break;
                case 'doubletap':
                    break;
                case 'swipeup':
                    this.L_();
                    break;
                case 'swiperight':
                    this.F_();
                    break;
                case 'swipedown':
                    this.L();
                    break;
                case 'swipeleft':
                    this.F();
                    break;
            }
        });

        swipe = new Hammer.Swipe();
        swipe.set({ direction: Hammer.DIRECTION_ALL });

        hammerManager = new Hammer.Manager(touchLeftEl, {});
        hammerManager.add(swipe);
        hammerManager.add(new Hammer.Tap({ event: 'doubletap', taps: 2 }));
        hammerManager.add(new Hammer.Tap({ event: 'singletap' }));
        hammerManager.get('doubletap').recognizeWith('singletap');
        hammerManager.get('singletap').requireFailure('doubletap');

        hammerManager.on('singletap doubletap swipeup swipedown swiperight swipeleft', (ev) => {
            const type = ev.type;
            let element = ev.target;
            //debug(`${type} ${element.dataset.type}`);

            if (element.dataset.type !== 'cubetwo') {
                element = element.parentElement;
                if (element.dataset.type !== 'cubetwo')
                    element = element.parentElement;
            }
            switch (type) {
                case 'singletap':
                    break;
                case 'doubletap':
                    break;
                case 'swipeup':
                    this.F();
                    break;
                case 'swiperight':
                    this.D();
                    break;
                case 'swipedown':
                    this.F_();
                    break;
                case 'swipeleft':
                    this.D_();
                    break;
            }
        });
    }
    _setupCube4() {}
    _setupCube5() {}
    _setupCube6() {}
    _setupCube7() {}
    _setupCube8() {}

    init() {
        this._cubeElements = [''];
        this._touchElements = [''];
        this._displayElements = [''];

        for (var i = 1; i <= CUBE_COUNT; i++) {
            let cube = qs(`.cubetwo-cube-${i}`, this._cubeComponentEl),
                touch = qs('[data-type="cubetwo-touch"]', cube),
                display = qs('[data-type="cubetwo-display"]', cube);

            this._cubeElements.push(cube);
            this._displayElements.push(display);
            this._touchElements.push(touch);
        }
        deepFreeze(this._cubeElements);
        deepFreeze(this._touchElements);
        deepFreeze(this._displayElements);

        for (var i = 1; i <= CUBE_COUNT; i++) {
            let cubeDisplay = this._displayElements[i];
            if (cubeDisplay) {
                cubeDisplay.addEventListener('transitionend',
                    this._transitionEnd);
            }
        }

        this._setupCube1();
        this._setupCube2();
        this._setupCube3();
        this._setupCube4();
        this._setupCube5();
        this._setupCube6();
        this._setupCube7();
        this._setupCube8();

        this._updateUiFaces();

        this._cubeComponentEl.addEventListener('keydown', this._handleKeyEvent, false);

        this._triggerEvent('init', { state: this.getState() });
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



    // reset() {
    //     this.gotoState('uf');
    //     return 'reset';
    // }


    _handleKeyEvent(event) {

        // log(event.keyCode);

        switch (event.keyCode) {
            case KEY.LEFT:
            case KEY.a:
                this.y_();
                break;
            case KEY.UP:
                event.preventDefault();
            case KEY.w:
            case KEY.x:
                this.x();
                break;
            case KEY.RIGHT:
            case KEY.d:
            case KEY.y:
                this.y();
                break;
            case KEY.DOWN:
                event.preventDefault();
            case KEY.s:
                this.x_();
                break;
            case KEY.q:
                this.z_();
                break;
            case KEY.e:
            case KEY.z:
                this.z();
                break;
        }
    }
}

export default CubeTwo;