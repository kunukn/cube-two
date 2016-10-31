'use strict';

import { debug, log, error } from '../logger';

import { qs, qsa, byId } from '../query';

// import { Queue } from '../queue';

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

import { CUBE_COUNT, CUBE_SIZE_2X } from './cube-two-constants';

import { CubeTwoUi } from './cube-two-ui';

import dictCubeSkins from '../dictionaries/dict-cube-skins';

import { /*STATES, STATES_ARRAY,*/ KEY, EVENT_NAMES } from '../constants';
import {
    handleKeyEventCube1,
    handleKeyEventCube2,
    handleKeyEventCube3,
    handleKeyEventCube4,
    handleKeyEventCube5,
    handleKeyEventCube6,
    handleKeyEventCube7,
    handleKeyEventCube8,
    handleGlobalKeyEvent
} from './cube-two-handle-key-events';

let cubeSkins;

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
        this._cubeComponentEl = config.cubeComponent;

        this._appState = {};
        this._ui = null;
        //this._actionQueue = new Queue();

        this._config = cloneObject(config);
        this._parseConfig(this._config, this._cubeComponentEl);

        this._updateEventBindings();

        this._initCallbacks();

        this._setState({
            code: {
                c1: 'uf',
                c2: 'uf',
                c3: 'uf',
                c4: 'uf',
                c5: 'uf',
                c6: 'uf',
                c7: 'uf',
                c8: 'uf',
            },
            isRotateEnabled: true,
        });
    }

    _parseConfig(config, cubeComponentEl) {
        if (config.isRotateAnimationEnabled !== false)
            config.isRotateAnimationEnabled = true;

        if (config.isTapEnabled !== false)
            config.isTapEnabled = true;

        if (config.isAnimationLockEnabled !== false)
            config.isAnimationLockEnabled = true;


        if (config.transition) {
            qsa('[data-type="cubetwo-display"]', cubeComponentEl).forEach(cube => {
                cube.style.transition = config.transition;
            });
        }

        config.backgroundImages = config.backgroundImages || {};
        config.backgroundColors = config.backgroundColors || {};

        const bgColors = config.backgroundColors;
        const cubeColors = {};
        cubeColors._ = bgColors._ ? bgColors._ : dictCubeSkins['_'];
        cubeColors.f = bgColors.f ? bgColors.f : dictCubeSkins['f'];
        cubeColors.b = bgColors.b ? bgColors.b : dictCubeSkins['b'];
        cubeColors.u = bgColors.u ? bgColors.u : dictCubeSkins['u'];
        cubeColors.d = bgColors.d ? bgColors.d : dictCubeSkins['d'];
        cubeColors.r = bgColors.r ? bgColors.r : dictCubeSkins['r'];
        cubeColors.l = bgColors.l ? bgColors.l : dictCubeSkins['l'];
        config.backgroundColors = cubeColors;

        const bgImages = config.backgroundImages;
        const cubeSkins = {};
        cubeSkins._ = bgImages._ ? `${cubeColors._} url("${bgImages._}")` : `${cubeColors._}`;

        function setFace(bgImage, side) {
            if (bgImage) {
                cubeSkins[side] = {
                    c: cubeColors[side],
                    c1: `${cubeColors[side]} url("${bgImages[side]}") 0% 0% / ${CUBE_SIZE_2X} ${CUBE_SIZE_2X} no-repeat`,
                    c2: `${cubeColors[side]} url("${bgImages[side]}") 100% 0% / ${CUBE_SIZE_2X} ${CUBE_SIZE_2X} no-repeat`,
                    c3: `${cubeColors[side]} url("${bgImages[side]}") 0% 100% / ${CUBE_SIZE_2X} ${CUBE_SIZE_2X} no-repeat`,
                    c4: `${cubeColors[side]} url("${bgImages[side]}") 100% 100% / ${CUBE_SIZE_2X} ${CUBE_SIZE_2X} no-repeat`,
                };

            } else {
                cubeSkins[side] = {
                    c: cubeColors[side],
                    c1: cubeColors[side],
                    c2: cubeColors[side],
                    c3: cubeColors[side],
                    c4: cubeColors[side],
                };
            }
        }

        setFace(bgImages.f, 'f');
        setFace(bgImages.b, 'b');
        setFace(bgImages.u, 'u');
        setFace(bgImages.d, 'd');
        setFace(bgImages.r, 'r');
        setFace(bgImages.l, 'l');

        config.cubeSkins = cubeSkins;

        deepFreeze(config);
    }

    _updateEventBindings() {
        this._transitionEnd = this._transitionEnd.bind(this);
        this.handleGlobalKeyEvent = handleGlobalKeyEvent.bind(this);
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
        this._rotationInvoke({ config, ui: this._ui.uiF });
    }
    F_(config) {
        this._rotationInvoke({ config, ui: this._ui.uiF_ });
    }
    F2(config) {
        this._rotationInvoke({ config, ui: this._ui.uiF2 });
    }
    F2_(config) {
        this._rotationInvoke({ config, ui: this._ui.uiF2_ });
    }


    B(config) {
        this._rotationInvoke({ config, ui: this._ui.uiB });
    }
    B_(config) {
        this._rotationInvoke({ config, ui: this._ui.uiB_ });
    }
    B2(config) {
        this._rotationInvoke({ config, ui: this._ui.uiB2 });
    }
    B2_(config) {
        this._rotationInvoke({ config, ui: this._ui.uiB2_ });
    }


    U(config) {
        this._rotationInvoke({ config, ui: this._ui.uiU });
    }
    U_(config) {
        this._rotationInvoke({ config, ui: this._ui.uiU_ });
    }
    U2(config) {
        this._rotationInvoke({ config, ui: this._ui.uiU2 });
    }
    U2_(config) {
        this._rotationInvoke({ config, ui: this._ui.uiU2_ });
    }


    D(config) {
        this._rotationInvoke({ config, ui: this._ui.uiD });
    }
    D_(config) {
        this._rotationInvoke({ config, ui: this._ui.uiD_ });
    }
    D2(config) {
        this._rotationInvoke({ config, ui: this._ui.uiD2 });
    }
    D2_(config) {
        this._rotationInvoke({ config, ui: this._ui.uiD2_ });
    }


    R(config) {
        this._rotationInvoke({ config, ui: this._ui.uiR });
    }
    R_(config) {
        this._rotationInvoke({ config, ui: this._ui.uiR_ });
    }
    R2(config) {
        this._rotationInvoke({ config, ui: this._ui.uiR2 });
    }
    R2_(config) {
        this._rotationInvoke({ config, ui: this._ui.uiR2_ });
    }


    L(config) {
        this._rotationInvoke({ config, ui: this._ui.uiL });
    }
    L_(config) {
        this._rotationInvoke({ config, ui: this._ui.uiL_ });
    }
    L2(config) {
        this._rotationInvoke({ config, ui: this._ui.uiL2 });
    }
    L2_(config) {
        this._rotationInvoke({ config, ui: this._ui.uiL2_ });
    }


    x(config) {
        this._rotationInvoke({ config, ui: this._ui.uix });
    }
    x_(config) {
        this._rotationInvoke({ config, ui: this._ui.uix_ });
    }
    x2(config) {
        this._rotationInvoke({ config, ui: this._ui.uix2 });
    }
    x2_(config) {
        this._rotationInvoke({ config, ui: this._ui.uix2_ });
    }

    y(config) {
        this._rotationInvoke({ config, ui: this._ui.uiy });
    }
    y_(config) {
        this._rotationInvoke({ config, ui: this._ui.uiy_ });
    }
    y2(config) {
        this._rotationInvoke({ config, ui: this._ui.uiy2 });
    }
    y2_(config) {
        this._rotationInvoke({ config, ui: this._ui.uiy2_ });
    }

    z(config) {
        this._rotationInvoke({ config, ui: this._ui.uiz });
    }
    z2(config) {
        this._rotationInvoke({ config, ui: this._ui.uiz2 });
    }
    z_(config) {
        this._rotationInvoke({ config, ui: this._ui.uiz_ });
    }
    z2_(config) {
        this._rotationInvoke({ config, ui: this._ui.uiz2_ });
    }

    _rotationInvoke({ config, ui }) {
        // todo add animation lock and use queue buffer to enqueue rotation actions

        const appConfig = this._config;

        if (appConfig.isRotateAnimationEnabled) {

            const state = this.getState();
            if (appConfig.isAnimationLockEnabled && !state.isRotateEnabled) {
                debug(`rotate is locked ${new Date()}`);
                return;
            }

            // todo update state by action

            if (appConfig.isAnimationLockEnabled) {
                state.isRotateEnabled = false;
                this._setState(state);
            }

            ui.bind(this._ui)();

        } else {
            debug('isRotateAnimationEnabled is false');
            // todo update state by action
            this._updateUiFaces();
        }
    }

    destroy() {
        // todo foreach display elements, remove transitionend
        // todo remove key event listener
    }

    _updateUiFaces() {
        // Update view by state
    }

    _transitionEnd(ev) {
        const target = ev.currentTarget,
            appConfig = this._config;

        if (target) {
            const backupTransition = target.style.transition;
            target.style.transition = `0s`;

            nextFrame(_ => {

                target.style.transformOrigin = ''; // reset
                target.style.transform = '';
                this._updateUiFaces();

                rAF(_ => {
                    target.style.transition = backupTransition;

                    if (appConfig.isAnimationLockEnabled) {
                        const state = this.getState();
                        state.isRotateEnabled = true;
                        this._setState(state);
                    }

                    this._triggerEvent('afterrotate', {
                        state: this.getState(),
                    });
                });
            });
        }
    }

    init() {
        this._cubeElements = [''];
        this._touchElements = [''];
        this._displayElements = [{}];
        const appConfig = this._config;

        for (var i = 1; i <= CUBE_COUNT; i++) {
            let cube = qs(`.cubetwo-cube-${i}`, this._cubeComponentEl),
                touch = qs('[data-type="cubetwo-touch"]', cube),
                display = qs('[data-type="cubetwo-display"]', cube);

            if (!display) error('buuh');

            let f = qs('[data-type="front"] > div', display),
                b = qs('[data-type="back"] > div', display),
                u = qs('[data-type="up"] > div', display),
                d = qs('[data-type="down"] > div', display),
                r = qs('[data-type="right"] > div', display),
                l = qs('[data-type="left"] > div', display);

            this._cubeElements.push(cube);
            this._displayElements.push({
                root: display,
                f,
                b,
                u,
                d,
                r,
                l
            });
            this._touchElements.push(touch);
        }
        deepFreeze(this._cubeElements);
        deepFreeze(this._touchElements);
        //deepFreeze(this._displayElements);

        this._ui = new CubeTwoUi(this._displayElements.map(display => display.root));

        for (var i = 1; i <= CUBE_COUNT; i++) {
            let cubeDisplay = this._displayElements[i].root;
            if (cubeDisplay) {
                cubeDisplay.addEventListener('transitionend',
                    this._transitionEnd);
            }
        }

        setupCube1.bind(this)(appConfig);
        setupCube2.bind(this)(appConfig);
        setupCube3.bind(this)(appConfig);
        setupCube4.bind(this)(appConfig);
        setupCube5.bind(this)(appConfig);
        setupCube6.bind(this)(appConfig);
        setupCube7.bind(this)(appConfig);
        setupCube8.bind(this)(appConfig);

        this._updateUiFaces();

        this._cubeElements[1].addEventListener('keydown', handleKeyEventCube1.bind(this), false);
        this._cubeElements[2].addEventListener('keydown', handleKeyEventCube2.bind(this), false);
        this._cubeElements[3].addEventListener('keydown', handleKeyEventCube3.bind(this), false);
        this._cubeElements[4].addEventListener('keydown', handleKeyEventCube4.bind(this), false);
        this._cubeElements[5].addEventListener('keydown', handleKeyEventCube5.bind(this), false);
        this._cubeElements[6].addEventListener('keydown', handleKeyEventCube6.bind(this), false);
        this._cubeElements[7].addEventListener('keydown', handleKeyEventCube7.bind(this), false);
        this._cubeElements[8].addEventListener('keydown', handleKeyEventCube8.bind(this), false);

        this._triggerEvent('init', { state: this.getState() });
    }

    _updateUiFaces() {
        // todo update view by state

        const appConfig = this._config;
        const bgColors = appConfig.backgroundColors;
        const skins = appConfig.cubeSkins;

        let cube, f, b, u, d, r, l;

        cube = this._displayElements[1];
        cube.f.style.background = skins.f.c1;
        cube.b.style.background = skins._;
        cube.u.style.background = skins.u.c3;
        cube.d.style.background = skins._;
        cube.r.style.background = skins._;
        cube.l.style.background = skins.l.c2;

        cube = this._displayElements[2];
        cube.f.style.background = skins.f.c2;
        cube.b.style.background = skins._;
        cube.u.style.background = bgColors.u;
        cube.d.style.background = skins._;
        cube.r.style.background = bgColors.r;
        cube.l.style.background = skins._;

        cube = this._displayElements[3];
        cube.f.style.background = skins.f.c3;
        cube.b.style.background = skins._;
        cube.u.style.background = skins._;
        cube.d.style.background = dictCubeSkins['d'];
        cube.r.style.background = skins._;
        cube.l.style.background = dictCubeSkins['l'];

        cube = this._displayElements[4];
        cube.f.style.background = bgColors.f;
        cube.f.style.background = skins.f.c4;
        cube.b.style.background = skins._;
        cube.u.style.background = skins._;
        cube.d.style.background = dictCubeSkins['d'];
        cube.r.style.background = dictCubeSkins['r'];
        cube.l.style.background = dictCubeSkins['_'];

        cube = this._displayElements[5];
        cube.f.style.background = dictCubeSkins['_'];
        cube.b.style.background = dictCubeSkins['b'];
        cube.u.style.background = dictCubeSkins['u'];
        cube.d.style.background = dictCubeSkins['_'];
        cube.r.style.background = dictCubeSkins['_'];
        cube.l.style.background = dictCubeSkins['l'];

        cube = this._displayElements[6];
        cube.f.style.background = dictCubeSkins['_'];
        cube.b.style.background = dictCubeSkins['b'];
        cube.u.style.background = dictCubeSkins['u'];
        cube.d.style.background = dictCubeSkins['_'];
        cube.r.style.background = dictCubeSkins['r'];
        cube.l.style.background = dictCubeSkins['_'];

        cube = this._displayElements[7];
        cube.f.style.background = dictCubeSkins['_'];
        cube.b.style.background = dictCubeSkins['b'];
        cube.u.style.background = dictCubeSkins['_'];
        cube.d.style.background = dictCubeSkins['d'];
        cube.r.style.background = dictCubeSkins['_'];
        cube.l.style.background = dictCubeSkins['l'];

        cube = this._displayElements[8];
        cube.f.style.background = dictCubeSkins['_'];
        cube.b.style.background = dictCubeSkins['b'];
        cube.u.style.background = dictCubeSkins['_'];
        cube.d.style.background = dictCubeSkins['d'];
        cube.r.style.background = dictCubeSkins['r'];
        cube.l.style.background = dictCubeSkins['_'];
    }
}

export { CubeTwo };