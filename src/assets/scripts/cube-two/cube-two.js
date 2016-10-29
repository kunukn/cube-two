'use strict';

import { debug, log, error } from '../logger';

import { qs, qsa, byId } from '../query';

// import dictCubeSkins from '../dictionaries/dict-cube-skins';

import deepFreeze from 'deep-freeze';

import {
    rAF,
    nextFrame,
    cloneObject,
} from '../cube-util';

import {
    setupCube1,
    setupCube2,
    setupCube3,
    setupCube4,
    setupCube5,
    setupCube6,
    setupCube7,
    setupCube8
} from './cube-two-setup';

// import dictCube from '../dictionaries/dict-cube';
// import dictCubeTransform from '../dictionaries/dict-cube-transform';

import { /*STATES, STATES_ARRAY,*/ KEY, EVENT_NAMES } from '../constants';

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
        this._handleKeyEventCube1 = this._handleKeyEventCube1.bind(this);
        this._handleKeyEventCube2 = this._handleKeyEventCube2.bind(this);
        this._handleKeyEventCube3 = this._handleKeyEventCube3.bind(this);
        this._handleKeyEventCube4 = this._handleKeyEventCube4.bind(this);
        this._handleKeyEventCube5 = this._handleKeyEventCube5.bind(this);
        this._handleKeyEventCube6 = this._handleKeyEventCube6.bind(this);
        this._handleKeyEventCube7 = this._handleKeyEventCube7.bind(this);
        this._handleKeyEventCube8 = this._handleKeyEventCube8.bind(this);

        this.handleGlobalKeyEvent = this.handleGlobalKeyEvent.bind(this);
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
        this._rotationInvoke(config, this._uiF);
    }
    F_(config) {
        this._rotationInvoke(config, this._uiF_);
    }
    F2(config) {
        this._rotationInvoke(config, this._uiF2);
    }
    F2_(config) {
        this._rotationInvoke(config, this._uiF2_);
    }


    B(config) {
        this._rotationInvoke(config, this._uiB);
    }
    B_(config) {
        this._rotationInvoke(config, this._uiB_);
    }
    B2(config) {
        this._rotationInvoke(config, this._uiB2);
    }
    B2_(config) {
        this._rotationInvoke(config, this._uiB2_);
    }


    U(config) {
        this._rotationInvoke(config, this._uiU);
    }
    U_(config) {
        this._rotationInvoke(config, this._uiU_);
    }
    U2(config) {
        this._rotationInvoke(config, this._uiU2);
    }
    U2_(config) {
        this._rotationInvoke(config, this._uiU2_);
    }


    D(config) {
        this._rotationInvoke(config, this._uiD);
    }
    D_(config) {
        this._rotationInvoke(config, this._uiD_);
    }
    D2(config) {
        this._rotationInvoke(config, this._uiD2);
    }
    D2_(config) {
        this._rotationInvoke(config, this._uiD2_);
    }


    R(config) {
        this._rotationInvoke(config, this._uiR);
    }
    R_(config) {
        this._rotationInvoke(config, this._uiR_);
    }
    R2(config) {
        this._rotationInvoke(config, this._uiR2);
    }
    R2_(config) {
        this._rotationInvoke(config, this._uiR2_);
    }


    L(config) {
        this._rotationInvoke(config, this._uiL);
    }
    L_(config) {
        this._rotationInvoke(config, this._uiL_);
    }
    L2(config) {
        this._rotationInvoke(config, this._uiL2);
    }
    L2_(config) {
        this._rotationInvoke(config, this._uiL2_);
    }


    x(config) {
        this._rotationInvoke(config, this._uix);
    }
    x_(config) {
        this._rotationInvoke(config, this._uix_);
    }
    x2(config) {
        this._rotationInvoke(config, this._uix2);
    }
    x2_(config) {
        this._rotationInvoke(config, this._uix2_);
    }

    y(config) {
        this._rotationInvoke(config, this._uiy);
    }
    y_(config) {
        this._rotationInvoke(config, this._uiy_);
    }
    y2(config) {
        this._rotationInvoke(config, this._uiy2);
    }
    y2_(config) {
        this._rotationInvoke(config, this._uiy2_);
    }


    z(config) {
        this._rotationInvoke(config, this._uiz);
    }
    z2(config) {
        this._rotationInvoke(config, this._uiz2);
    }
    z_(config) {
        this._rotationInvoke(config, this._uiz_);
    }
    z2_(config) {
        this._rotationInvoke(config, this._uiz2_);
    }

    _rotationInvoke(config, ui) {
        // todo add animation lock and use queue buffer to enqueue rotation actions
        ui.bind(this)();
    }

    destroy() {
        // todo foreach display elements, remove transitionend
        // todo remove key event listener
    }

    _updateUiFaces() {
        // Update view by state
    }

    _transitionEnd(ev) {
        let target = ev.currentTarget;
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

        setupCube1.bind(this)();
        setupCube2.bind(this)();
        setupCube3.bind(this)();
        setupCube4.bind(this)();
        setupCube5.bind(this)();
        setupCube6.bind(this)();
        setupCube7.bind(this)();
        setupCube8.bind(this)();


        this._updateUiFaces();

        this._cubeElements[1].addEventListener('keydown', this._handleKeyEventCube1, false);
        this._cubeElements[2].addEventListener('keydown', this._handleKeyEventCube2, false);
        this._cubeElements[3].addEventListener('keydown', this._handleKeyEventCube3, false);
        this._cubeElements[4].addEventListener('keydown', this._handleKeyEventCube4, false);
        this._cubeElements[5].addEventListener('keydown', this._handleKeyEventCube5, false);
        this._cubeElements[6].addEventListener('keydown', this._handleKeyEventCube6, false);
        this._cubeElements[7].addEventListener('keydown', this._handleKeyEventCube7, false);
        this._cubeElements[8].addEventListener('keydown', this._handleKeyEventCube8, false);

        this._triggerEvent('init', { state: this.getState() });
    }

    _updateUiFaces() {
        // todo update view by state
    }

    _handleKeyEventCube1(event) {
        event.stopPropagation();

        switch (event.keyCode) {
            case KEY.LEFT:
            case KEY.a:
                this.U();
                break;
            case KEY.UP:
                event.preventDefault();
            case KEY.w:
                this.L_();
                break;
            case KEY.RIGHT:
            case KEY.d:
                this.U_();
                break;
            case KEY.DOWN:
                event.preventDefault();
            case KEY.s:
                this.L();
                break;
            case KEY.q:
                this.F_();
                break;
            case KEY.e:
                this.F();
                break;
            case KEY.x:
                this.x();
                break;
            case KEY.y:
                this.y();
                break;
            case KEY.z:
                this.z();
                break;
        }
    }
    _handleKeyEventCube2(event) {
        event.stopPropagation();

        switch (event.keyCode) {
            case KEY.LEFT:
            case KEY.a:
                this.U();
                break;
            case KEY.UP:
                event.preventDefault();
            case KEY.w:
                this.R();
                break;
            case KEY.RIGHT:
            case KEY.d:
                this.U_();
                break;
            case KEY.DOWN:
                event.preventDefault();
            case KEY.s:
                this.R_();
                break;
            case KEY.q:
                this.F_();
                break;
            case KEY.e:
                this.F();
                break;
            case KEY.x:
                this.x();
                break;
            case KEY.y:
                this.y();
                break;
            case KEY.z:
                this.z();
                break;
        }
    }
    _handleKeyEventCube3(event) {
        event.stopPropagation();

        switch (event.keyCode) {
            case KEY.LEFT:
            case KEY.a:
                this.D_();
                break;
            case KEY.UP:
                event.preventDefault();
            case KEY.w:
                this.L_();
                break;
            case KEY.RIGHT:
            case KEY.d:
                this.D();
                break;
            case KEY.DOWN:
                event.preventDefault();
            case KEY.s:
                this.L();
                break;
            case KEY.q:
                this.F_();
                break;
            case KEY.e:
                this.F();
                break;
            case KEY.x:
                this.x();
                break;
            case KEY.y:
                this.y();
                break;
            case KEY.z:
                this.z();
                break;
        }
    }
    _handleKeyEventCube4(event) {
        event.stopPropagation();

        switch (event.keyCode) {
            case KEY.LEFT:
            case KEY.a:
                this.D_();
                break;
            case KEY.UP:
                event.preventDefault();
            case KEY.w:
                this.R();
                break;
            case KEY.RIGHT:
            case KEY.d:
                this.D();
                break;
            case KEY.DOWN:
                event.preventDefault();
            case KEY.s:
                this.R_();
                break;
            case KEY.q:
                this.F_();
                break;
            case KEY.e:
                this.F();
                break;
            case KEY.x:
                this.x();
                break;
            case KEY.y:
                this.y();
                break;
            case KEY.z:
                this.z();
                break;
        }
    }
    _handleKeyEventCube5(event) {
        event.stopPropagation();

        // todo
    }
    _handleKeyEventCube6(event) {
        event.stopPropagation();

        // todo
    }
    _handleKeyEventCube7(event) {
        event.stopPropagation();

        // todo
    }
    _handleKeyEventCube8(event) {
        event.stopPropagation();

        // todo
    }

    handleGlobalKeyEvent(event) {

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

export { CubeTwo };