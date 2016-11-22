'use strict';

import { debug, log, error } from '../logger';

import { qs, qsa, byId } from '../query';

// import { Queue } from '../queue'; // possible to be used in a future implementation to enable queued rotates, not sure

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
    getFront,
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

import dictCube from '../dictionaries/dict-cube';
import dictCubeTransform from '../dictionaries/dict-cube-transform';
import dictCubeSkins from '../dictionaries/dict-cube-skins';

import { CUBE_COUNT, CUBE_SIZE } from './cube-two-constants';

import { CubeTwoUi } from './cube-two-ui';

import { reducer } from './cube-two-reducer';

import { KEY, EVENT_NAMES } from '../constants';
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


function createStyleSheet(cubeSize) {

    if (!cubeSize || !cubeSize.value || !cubeSize.unit) {
        return;
    }

    const value = cubeSize.value,
        unit = cubeSize.unit;

    const size = `${value}${unit}`,
        sizeX2 = `${2 * value}${unit}`,
        sizeX4 = `${4 * value}${unit}`;

    const css = `      

        .cubetwo-component {
            width: ${sizeX4};
            height: ${sizeX4};
        }

        .cubetwo-rotation-view {
            width: ${sizeX2};
            height: ${sizeX2};
        }

         [data-type="cubetwo"] {
            width: ${size};
            height: ${size};
        }

        .cubetwo-cube-group--1 [data-type=front] {
            transform: translateZ(${size});
        }        

        .cubetwo-cube-group--2 [data-type=up] {
            transform: translateZ(-${size}) rotateX(-90deg) rotateY(180deg) rotateZ(180deg);
        }

        .cubetwo-cube-group--2 [data-type=right] {
            transform: translateZ(-${size}) rotateY(-270deg);
        }

        .cubetwo-cube-group--2 [data-type=back] {
            transform: translateZ(-${size}) rotateY(180deg);
        }

        .cubetwo-cube-group--2 [data-type=down] {
            transform: translateZ(-${size}) rotateX(90deg) rotateY(180deg) rotateZ(180deg);
        }

        .cubetwo-cube-group--2 [data-type=left] {
            transform: translateZ(-${size}) rotateY(270deg);
        }     
        `;

    const head = document.head || document.getElementsByTagName('head')[0],
        style = document.createElement('style');

    if (style.styleSheet) {
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));
    }
    head.appendChild(style);
}

class CubeTwo {
    constructor(config) {

        if (!config) {
            error(`config is invalid for CubeTwo, did you forgot to provide one?`);
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
    }

    _parseConfig(config, cubeComponentEl) {
        if (config.isRotateAnimationEnabled === undefined)
            config.isRotateAnimationEnabled = true;

        if (config.isTapEnabled === undefined)
            config.isTapEnabled = true;

        if (config.isAnimationLockEnabled === undefined)
            config.isAnimationLockEnabled = true;

        if (config.borderOnTheCube === undefined)
            config.borderOnTheCube = true;

        if (config.backgroundBlendModeOnTheCube === undefined)
            config.backgroundBlendModeOnTheCube = true;

        if (config.transition) {
            qsa('[data-type="cubetwo-display"]', cubeComponentEl).forEach(cube => {
                cube.style.transition = config.transition;
            });
        }
        config.backgroundImages = config.backgroundImages || {};
        config.backgroundColors = config.backgroundColors || {};

        // Set background colors from config, if not defined use default from dictionary
        const bgColors = config.backgroundColors;
        const cubeColors = {};
        cubeColors.backface = bgColors.backface || bgColors._ || dictCubeSkins['backface'];
        cubeColors.f = bgColors.f || dictCubeSkins['f'];
        cubeColors.b = bgColors.b || dictCubeSkins['b'];
        cubeColors.u = bgColors.u || dictCubeSkins['u'];
        cubeColors.d = bgColors.d || dictCubeSkins['d'];
        cubeColors.r = bgColors.r || dictCubeSkins['r'];
        cubeColors.l = bgColors.l || dictCubeSkins['l'];
        config.backgroundColors = cubeColors;

        const backface = cubeColors.backface;
        const bgImages = config.backgroundImages;
        const cubeSkins = {
            cubes: [null, null, null, null, null, null, null, null, null],
            backface,
        };
        const temp = {};

        function setFace(bgImage, side, cubeSize2x) {
            if (bgImage) {
                // Slice image on a cube face
                temp[side] = {
                    c1: `${cubeColors[side]} url("${bgImages[side]}") 0% 0% / ${cubeSize2x} ${cubeSize2x} no-repeat`,
                    c2: `${cubeColors[side]} url("${bgImages[side]}") 100% 0% / ${cubeSize2x} ${cubeSize2x} no-repeat`,
                    c3: `${cubeColors[side]} url("${bgImages[side]}") 0% 100% / ${cubeSize2x} ${cubeSize2x} no-repeat`,
                    c4: `${cubeColors[side]} url("${bgImages[side]}") 100% 100% / ${cubeSize2x} ${cubeSize2x} no-repeat`,
                };

            } else {
                temp[side] = {
                    c1: cubeColors[side],
                    c2: cubeColors[side],
                    c3: cubeColors[side],
                    c4: cubeColors[side],
                };
            }
        }

        const cubeSize = config.cubeSize || CUBE_SIZE;
        cubeSize.value = cubeSize.value || CUBE_SIZE.value;
        cubeSize.unit = cubeSize.unit || CUBE_SIZE.unit;

        // Update temp work
        const cubeSize2x = `${2 * cubeSize.value}${cubeSize.unit}`;
        setFace(bgImages.f, 'f', cubeSize2x);
        setFace(bgImages.b, 'b', cubeSize2x);
        setFace(bgImages.u, 'u', cubeSize2x);
        setFace(bgImages.d, 'd', cubeSize2x);
        setFace(bgImages.r, 'r', cubeSize2x);
        setFace(bgImages.l, 'l', cubeSize2x);

        // Use temp work
        cubeSkins.cubes[1] = {
            u: temp.u.c3,
            d: backface,
            f: temp.f.c1,
            b: backface,
            r: backface,
            l: temp.l.c2,
        }
        cubeSkins.cubes[2] = {
            u: temp.u.c4,
            d: backface,
            f: temp.f.c2,
            b: backface,
            r: temp.r.c1,
            l: backface,
        }
        cubeSkins.cubes[3] = {
            u: backface,
            d: temp.d.c1,
            f: temp.f.c3,
            b: backface,
            r: backface,
            l: temp.l.c4,
        }
        cubeSkins.cubes[4] = {
            u: backface,
            d: temp.d.c2,
            f: temp.f.c4,
            b: backface,
            r: temp.r.c3,
            l: backface,
        }
        cubeSkins.cubes[5] = {
            u: temp.u.c1,
            d: backface,
            f: backface,
            b: temp.b.c2,
            r: backface,
            l: temp.l.c1,
        }
        cubeSkins.cubes[6] = {
            u: temp.u.c2,
            d: backface,
            f: backface,
            b: temp.b.c1,
            r: temp.r.c2,
            l: backface,
        }
        cubeSkins.cubes[7] = {
            u: backface,
            d: temp.d.c3,
            f: backface,
            b: temp.b.c4,
            r: backface,
            l: temp.l.c3,
        }
        cubeSkins.cubes[8] = {
            u: backface,
            d: temp.d.c4,
            f: backface,
            b: temp.b.c3,
            r: temp.r.c4,
            l: backface,
        }

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
        const codes = this._appState.codes.map(item => cloneObject(item));
        return {
            codes: codes,
            isRotateEnabled: !!this._appState.isRotateEnabled,
        };
    }

    getStateCode() {
        return JSON.stringify(this.getState().codes);
    }

    isSolved() {
        return this._isSolved(this.getState().codes);
    }
    _isSolved(codes) {
        return !!codes.reduce((a, b) =>
            (a.code === b.code) ? a : NaN
        );
    }


    _setState(state) {

        const previousStateCode = JSON.stringify(this._appState.codes);

        const currentStateCode = JSON.stringify(state.codes);

        if (state.isRotateEnabled === undefined) {
            // ensure not locking by accident
            state.isRotateEnabled = true;
        }
        this._appState = state;

        if (previousStateCode !== currentStateCode) {

            this._triggerEvent('statechange', {
                previousStateCode,
                currentStateCode,
                state
            });

            if (this._isSolved(state.codes)) {
                this._triggerEvent('issolved', {
                    state
                });
            }
        }
    }

    _beforeRotateTriggerHelper({ action, config }) {
        if (!config || !config.skipTriggerEvent) {
            this._triggerEvent('beforerotate', {
                action,
                state: this.getState(),
            });
        }
    }

    F(config) {
        const action = 'F';
        this._beforeRotateTriggerHelper({ action, config });
        this._actionInvoke({ action, config, ui: this._ui.uiF });
    }
    F_(config) {
        const action = 'F_';
        this._beforeRotateTriggerHelper({ action, config });
        this._actionInvoke({ action, config, ui: this._ui.uiF_ });
    }
    F2(config) {
        const action = 'F2';
        this._beforeRotateTriggerHelper({ action, config });
        this._actionInvoke({ action, config, ui: this._ui.uiF2 });
    }
    F2_(config) {
        const action = 'F2_';
        this._beforeRotateTriggerHelper({ action, config });
        this._actionInvoke({ action, config, ui: this._ui.uiF2_ });
    }


    B(config) {
        const action = 'B';
        this._beforeRotateTriggerHelper({ action, config });
        this._actionInvoke({ action, config, ui: this._ui.uiB });
    }
    B_(config) {
        const action = 'B_';
        this._beforeRotateTriggerHelper({ action, config });
        this._actionInvoke({ action, config, ui: this._ui.uiB_ });
    }
    B2(config) {
        const action = 'B2';
        this._beforeRotateTriggerHelper({ action, config });
        this._actionInvoke({ action, config, ui: this._ui.uiB2 });
    }
    B2_(config) {
        const action = 'B2_';
        this._beforeRotateTriggerHelper({ action, config });
        this._actionInvoke({ action, config, ui: this._ui.uiB2_ });
    }


    U(config) {
        const action = 'U';
        this._beforeRotateTriggerHelper({ action, config });
        this._actionInvoke({ action, config, ui: this._ui.uiU });
    }
    U_(config) {
        const action = 'U_';
        this._beforeRotateTriggerHelper({ action, config });
        this._actionInvoke({ action, config, ui: this._ui.uiU_ });
    }
    U2(config) {
        const action = 'U2';
        this._beforeRotateTriggerHelper({ action, config });
        this._actionInvoke({ action, config, ui: this._ui.uiU2 });
    }
    U2_(config) {
        const action = 'U2_';
        this._beforeRotateTriggerHelper({ action, config });
        this._actionInvoke({ action, config, ui: this._ui.uiU2_ });
    }


    D(config) {
        const action = 'D';
        this._beforeRotateTriggerHelper({ action, config });
        this._actionInvoke({ action, config, ui: this._ui.uiD });
    }
    D_(config) {
        const action = 'D_';
        this._beforeRotateTriggerHelper({ action, config });
        this._actionInvoke({ action, config, ui: this._ui.uiD_ });
    }
    D2(config) {
        const action = 'D2';
        this._beforeRotateTriggerHelper({ action, config });
        this._actionInvoke({ action, config, ui: this._ui.uiD2 });
    }
    D2_(config) {
        const action = 'D2_';
        this._beforeRotateTriggerHelper({ action, config });
        this._actionInvoke({ action, config, ui: this._ui.uiD2_ });
    }


    R(config) {
        const action = 'R';
        this._beforeRotateTriggerHelper({ action, config });
        this._actionInvoke({ action, config, ui: this._ui.uiR });
    }
    R_(config) {
        const action = 'R_';
        this._beforeRotateTriggerHelper({ action, config });
        this._actionInvoke({ action, config, ui: this._ui.uiR_ });
    }
    R2(config) {
        const action = 'R2';
        this._beforeRotateTriggerHelper({ action, config });
        this._actionInvoke({ action, config, ui: this._ui.uiR2 });
    }
    R2_(config) {
        const action = 'R2_';
        this._beforeRotateTriggerHelper({ action, config });
        this._actionInvoke({ action, config, ui: this._ui.uiR2_ });
    }


    L(config) {
        const action = 'L';
        this._beforeRotateTriggerHelper({ action, config });
        this._actionInvoke({ action, config, ui: this._ui.uiL });
    }
    L_(config) {
        const action = 'L_';
        this._beforeRotateTriggerHelper({ action, config });
        this._actionInvoke({ action, config, ui: this._ui.uiL_ });
    }
    L2(config) {
        const action = 'L2';
        this._beforeRotateTriggerHelper({ action, config });
        this._actionInvoke({ action, config, ui: this._ui.uiL2 });
    }
    L2_(config) {
        const action = 'L2_';
        this._beforeRotateTriggerHelper({ action, config });
        this._actionInvoke({ action, config, ui: this._ui.uiL2_ });
    }


    x(config) {
        const action = 'x';
        this._beforeRotateTriggerHelper({ action, config });
        this._actionInvoke({ action, config, ui: this._ui.uix });
    }
    x_(config) {
        const action = 'x_';
        this._beforeRotateTriggerHelper({ action, config });
        this._actionInvoke({ action, config, ui: this._ui.uix_ });
    }
    x2(config) {
        const action = 'x2';
        this._beforeRotateTriggerHelper({ action, config });
        this._actionInvoke({ action, config, ui: this._ui.uix2 });
    }
    x2_(config) {
        const action = 'x2_';
        this._beforeRotateTriggerHelper({ action, config });
        this._actionInvoke({ action, config, ui: this._ui.uix2_ });
    }

    y(config) {
        const action = 'y';
        this._beforeRotateTriggerHelper({ action, config });
        this._actionInvoke({ action, config, ui: this._ui.uiy });
    }
    y_(config) {
        const action = 'y_';
        this._beforeRotateTriggerHelper({ action, config });
        this._actionInvoke({ action, config, ui: this._ui.uiy_ });
    }
    y2(config) {
        const action = 'y2';
        this._beforeRotateTriggerHelper({ action, config });
        this._actionInvoke({ action, config, ui: this._ui.uiy2 });
    }
    y2_(config) {
        const action = 'y2_';
        this._beforeRotateTriggerHelper({ action, config });
        this._actionInvoke({ action, config, ui: this._ui.uiy2_ });
    }

    z(config) {
        const action = 'z';
        this._beforeRotateTriggerHelper({ action, config });
        this._actionInvoke({ action, config, ui: this._ui.uiz });
    }
    z2(config) {
        const action = 'z2';
        this._beforeRotateTriggerHelper({ action, config });
        this._actionInvoke({ action, config, ui: this._ui.uiz2 });
    }
    z_(config) {
        const action = 'z_';
        this._beforeRotateTriggerHelper({ action, config });
        this._actionInvoke({ action, config, ui: this._ui.uiz_ });
    }
    z2_(config) {
        const action = 'z2_';
        this._beforeRotateTriggerHelper({ action, config });
        this._actionInvoke({ action, config, ui: this._ui.uiz2_ });
    }

    _actionInvoke({ action, config, ui }) {

        config = config || {};

        const state = this.getState();

        if (config.noVisualUpdate) {
            const nextStateCodes = reducer({ action, stateCodes: state.codes });
            state.codes = nextStateCodes; // update
            this._setState(state);
            return;
        }

        if (!state.isRotateEnabled) {
            // todo add animation lock and use queue buffer to enqueue rotation actions            
            debug(`rotate is locked ${new Date()}`);
            return;
        }

        const appConfig = this._config;
        const nextStateCodes = reducer({ action, stateCodes: state.codes });
        state.codes = nextStateCodes; // update

        if (appConfig.isRotateAnimationEnabled) {

            state.isRotateEnabled = false;
            this._setState(state);
            ui.bind(this._ui)();
            // _updateUiFaces is called in transitionend

        } else {
            this._setState(state);
            this._updateUiFaces();
        }
    }

    destroy() {
        // todo foreach display elements, remove transitionend
        // todo remove key event listener
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
                        index: target.dataset.index,
                        //state: this.getState(),
                    });
                });
            });
        }
    }

    init() {
        const code = nextState.first;
        this._setState({
            codes: [
                { cube: 1, code: code }, { cube: 2, code }, { cube: 3, code }, { cube: 4, code },
                { cube: 5, code }, { cube: 6, code }, { cube: 7, code }, { cube: 8, code }
            ],
            isRotateEnabled: true,
        });

        this._cubeElements = [''];
        this._touchElements = [''];
        this._displayElements = [{}];
        const appConfig = this._config;

        if (appConfig.borderOnTheCube) {
            this._cubeComponentEl.classList.add('cubetwo-border-on-display-cubes');
        }

        if (appConfig.backfaceVisibilityHiddenOnTheCube) {
            this._cubeComponentEl.classList.add('cubetwo-backface-visibility-hidden-on-display-cubes');
        }

        if (appConfig.backgroundBlendModeOnTheCube) {
            if (appConfig.backgroundBlendModeOnTheCube === true || appConfig.backgroundBlendModeOnTheCube === 'multiply') {
                this._cubeComponentEl.classList.add('cubetwo-background-blend-mode-on-display-cubes');
            } else {
                qsa('[data-type="cubetwo-display"] > div > div', this._cubeComponentEl).forEach(face => {
                    face.style.backgroundBlendMode = appConfig.backgroundBlendModeOnTheCube;
                });
            }
        }
        for (var i = 1; i <= CUBE_COUNT; i++) {
            let cube = qs(`.cubetwo-cube-${i}`, this._cubeComponentEl),
                touch = qs('[data-type="cubetwo-touch"]', cube),
                display = qs('[data-type="cubetwo-display"]', cube);

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


        createStyleSheet(appConfig.cubeSize);

        this._triggerEvent('init', { state: this.getState() });
    }

    _updateUiFaces() {

        const appConfig = this._config;
        const skins = appConfig.cubeSkins.cubes;
        const backface = appConfig.cubeSkins.backface;

        const state = this.getState();

        let cube, skin, place, f, b, u, d, r, l, t;

        for (var i = 1; i <= CUBE_COUNT; i++) {
            place = state.codes[i - 1];
            u = getUp(place.code);
            d = getDown(place.code);
            f = getFront(place.code);
            b = getBack(place.code);
            r = getRight(place.code);
            l = getLeft(place.code);

            cube = this._displayElements[i];
            skin = skins[place.cube];
            cube.u.style.background = skin[u];
            cube.d.style.background = skin[d];
            cube.f.style.background = skin[f];
            cube.b.style.background = skin[b];
            cube.r.style.background = skin[r];
            cube.l.style.background = skin[l];

            t = dictCubeTransform[place.code]['u'];
            cube.u.style.transform = t ? `rotate${t.dir}(${t.angle}deg)` : '';

            t = dictCubeTransform[place.code]['f'];
            cube.f.style.transform = t ? `rotate${t.dir}(${t.angle}deg)` : '';

            t = dictCubeTransform[place.code]['r'];
            cube.r.style.transform = t ? `rotate${t.dir}(${t.angle}deg)` : '';

            t = dictCubeTransform[place.code]['l'];
            cube.l.style.transform = t ? `rotate${t.dir}(${t.angle}deg)` : '';

            t = dictCubeTransform[place.code]['b'];
            cube.b.style.transform = t ? `rotate${t.dir}(${t.angle}deg)` : '';

            t = dictCubeTransform[place.code]['d'];
            cube.d.style.transform = t ? `rotate${t.dir}(${t.angle}deg)` : '';
        }
    }

    solve() {
        const code = nextState.first;
        this._setState({
            codes: [
                { cube: 1, code },
                { cube: 2, code },
                { cube: 3, code },
                { cube: 4, code },
                { cube: 5, code },
                { cube: 6, code },
                { cube: 7, code },
                { cube: 8, code }
            ],
            isRotateEnabled: true,
        });
        this._updateUiFaces();
    }

    scramble() {
        const actions = [this.F, this.F_, this.B, this.B_, this.U, this.U_, this.D, this.D_, this.R, this.R_, this.L, this.L_, this.x, this.y, this.z, this.x_, this.y_, this.z_];
        const length = actions.length;
        let action, rand;
        for (var i = 0; i < 10; i++) {
            rand = (Math.random() * length) | 0;
            action = actions[rand].bind(this);
            action({ noVisualUpdate: true });
        }

        const state = this.getState();
        state.isRotateEnabled = true;
        this._setState(state);

        this._updateUiFaces();
    }
}

if (window && !window.CubeTwo) {
    window.CubeTwo = CubeTwo; // dirty I guess
}

export { CubeTwo };