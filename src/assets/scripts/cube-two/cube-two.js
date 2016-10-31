'use strict';

import { debug, log, error } from '../logger';

import { qs, qsa, byId } from '../query';

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

import { CUBE_COUNT, CUBE_SIZE, CUBE_SIZE_HALF } from './cube-two-constants';

import { CubeTwoUi } from './cube-two-ui';


import { /*STATES, STATES_ARRAY,*/ KEY, EVENT_NAMES } from '../constants';

class CubeTwo {
    constructor(config) {
        if (!config) {
            error(`config is invalid for CubeTwo`);
            return;
        }
        if (!config.cubeComponent) {
            error(`CubeTwo element was not provided: ${config.cubeComponent}`);
            return;
        }
        this._appState = {};
        this._ui = null;
        this._config = config;
        if (this._config.isTransitionEnabled !== false)
            this._config.isTransitionEnabled = true;

        deepFreeze(this._config);

        this._cubeComponentEl = config.cubeComponent;

        this._updateEventBindings();

        this._initCallbacks();

        this._setState({
            code: 'todo impl state info for the cube',
            rotateEnabled: true,
        });
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


    F(config) {
        this._rotationInvoke(config, this._ui.uiF);
    }
    F_(config) {
        this._rotationInvoke(config, this._ui.uiF_);
    }
    F2(config) {
        this._rotationInvoke(config, this._ui.uiF2);
    }
    F2_(config) {
        this._rotationInvoke(config, this._ui.uiF2_);
    }


    B(config) {
        this._rotationInvoke(config, this._ui.uiB);
    }
    B_(config) {
        this._rotationInvoke(config, this._ui.uiB_);
    }
    B2(config) {
        this._rotationInvoke(config, this._ui.uiB2);
    }
    B2_(config) {
        this._rotationInvoke(config, this._ui.uiB2_);
    }


    U(config) {
        this._rotationInvoke(config, this._ui.uiU);
    }
    U_(config) {
        this._rotationInvoke(config, this._ui.uiU_);
    }
    U2(config) {
        this._rotationInvoke(config, this._ui.uiU2);
    }
    U2_(config) {
        this._rotationInvoke(config, this._ui.uiU2_);
    }


    D(config) {
        this._rotationInvoke(config, this._ui.uiD);
    }
    D_(config) {
        this._rotationInvoke(config, this._ui.uiD_);
    }
    D2(config) {
        this._rotationInvoke(config, this._ui.uiD2);
    }
    D2_(config) {
        this._rotationInvoke(config, this._ui.uiD2_);
    }


    R(config) {
        this._rotationInvoke(config, this._ui.uiR);
    }
    R_(config) {
        this._rotationInvoke(config, this._ui.uiR_);
    }
    R2(config) {
        this._rotationInvoke(config, this._ui.uiR2);
    }
    R2_(config) {
        this._rotationInvoke(config, this._ui.uiR2_);
    }


    L(config) {
        this._rotationInvoke(config, this._ui.uiL);
    }
    L_(config) {
        this._rotationInvoke(config, this._ui.uiL_);
    }
    L2(config) {
        this._rotationInvoke(config, this._ui.uiL2);
    }
    L2_(config) {
        this._rotationInvoke(config, this._ui.uiL2_);
    }


    x(config) {
        this._rotationInvoke(config, this._ui.uix);
    }
    x_(config) {
        this._rotationInvoke(config, this._ui.uix_);
    }
    x2(config) {
        this._rotationInvoke(config, this._ui.uix2);
    }
    x2_(config) {
        this._rotationInvoke(config, this._ui.uix2_);
    }

    y(config) {
        this._rotationInvoke(config, this._ui.uiy);
    }
    y_(config) {
        this._rotationInvoke(config, this._ui.uiy_);
    }
    y2(config) {
        this._rotationInvoke(config, this._ui.uiy2);
    }
    y2_(config) {
        this._rotationInvoke(config, this._ui.uiy2_);
    }

    z(config) {
        this._rotationInvoke(config, this._ui.uiz);
    }
    z2(config) {
        this._rotationInvoke(config, this._ui.uiz2);
    }
    z_(config) {
        this._rotationInvoke(config, this._ui.uiz_);
    }
    z2_(config) {
        this._rotationInvoke(config, this._ui.uiz2_);
    }

    _rotationInvoke(config, ui) {
        // todo add animation lock and use queue buffer to enqueue rotation actions
        ui.bind(this._ui)();
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
        if (this._config.isTransitionEnabled && target) {
            const backupTransition = target.style.transition;
            target.style.transition = `0s`;

            nextFrame(_ => {

                this._updateUiFaces();
                target.style.transformOrigin = ''; // reset
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

        this._ui = new CubeTwoUi(this._displayElements);

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
                this.B();
                break;
            case KEY.e:
                this.B_();
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
    _handleKeyEventCube6(event) {
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
                this.B();
                break;
            case KEY.e:
                this.B_();
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
    _handleKeyEventCube7(event) {
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
                this.B();
                break;
            case KEY.e:
                this.B_();
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
    _handleKeyEventCube8(event) {
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
                this.B();
                break;
            case KEY.e:
                this.B_();
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