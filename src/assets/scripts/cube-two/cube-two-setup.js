import { qs, qsa, byId } from '../query';
import { debug, log, error } from '../logger';

export function setupCube1(config) {

    const isTapEnabled = config && config.isTapEnabled;

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
    hammerManager.add(new Hammer.Tap({ event: 'singletab' }));

    hammerManager.on('singletab swipeup swipedown swiperight swipeleft', (ev) => {
        const type = ev.type;
        let element = ev.target;
        //debug(`${type} ${element.dataset.type}`);

        switch (type) {
            case 'singletab':
                if (isTapEnabled) {
                    this.L_();
                }
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
    hammerManager.add(new Hammer.Tap({ event: 'singletap' }));

    hammerManager.on('singletap swipeup swipedown swiperight swipeleft', (ev) => {
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
                if (isTapEnabled) {
                    this.F_();
                }
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
    hammerManager.add(new Hammer.Tap({ event: 'singletap' }));

    hammerManager.on('singletap swipeup swipedown swiperight swipeleft', (ev) => {
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
                if (isTapEnabled) {
                    this.U_();
                }
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
export function setupCube2(config) {

    const isTapEnabled = config && config.isTapEnabled;

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
    hammerManager.add(new Hammer.Tap({ event: 'singletap' }));

    hammerManager.on('singletap swipeup swipedown swiperight swipeleft', (ev) => {
        const type = ev.type;
        let element = ev.target;
        //debug(`${type} ${element.dataset.type}`);

        switch (type) {
            case 'singletap':
                if (isTapEnabled) {
                    this.R();
                }
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
    hammerManager.add(new Hammer.Tap({ event: 'singletap' }));

    hammerManager.on('singletap swipeup swipedown swiperight swipeleft', (ev) => {
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
                if (isTapEnabled) {
                    this.F();
                }
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
    hammerManager.add(new Hammer.Tap({ event: 'singletap' }));

    hammerManager.on('singletap swipeup swipedown swiperight swipeleft', (ev) => {
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
                if (isTapEnabled) {
                    this.U();
                }
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
export function setupCube3(config) {

    const isTapEnabled = config && config.isTapEnabled;

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
    hammerManager.add(new Hammer.Tap({ event: 'singletap' }));

    hammerManager.on('singletap swipeup swipedown swiperight swipeleft', (ev) => {
        const type = ev.type;
        let element = ev.target;
        //debug(`${type} ${element.dataset.type}`);

        switch (type) {
            case 'singletap':
                if (isTapEnabled) {
                    this.L();
                }
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
    hammerManager.add(new Hammer.Tap({ event: 'singletap' }));

    hammerManager.on('singletap swipeup swipedown swiperight swipeleft', (ev) => {
        const type = ev.type;
        let element = ev.target;
        //debug(`${type} ${element.dataset.type}`);

        switch (type) {
            case 'singletap':
                if (isTapEnabled) {
                    this.F();
                }
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
    hammerManager.add(new Hammer.Tap({ event: 'singletap' }));

    hammerManager.on('singletap swipeup swipedown swiperight swipeleft', (ev) => {
        const type = ev.type;
        let element = ev.target;
        //debug(`${type} ${element.dataset.type}`);

        switch (type) {
            case 'singletap':
                if (isTapEnabled) {
                    this.D();
                }
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
export function setupCube4(config) {

    const isTapEnabled = config && config.isTapEnabled;

    let touchEl = this._touchElements[4],
        touchUpEl,
        touchDownEl = qs('[data-type="down"]', touchEl),
        touchFrontEl = qs('[data-type="front"]', touchEl),
        touchBackEl,
        touchRightEl = qs('[data-type="right"]', touchEl),
        touchLeftEl;

    let swipe = new Hammer.Swipe();
    swipe.set({ direction: Hammer.DIRECTION_ALL });

    let hammerManager = new Hammer.Manager(touchFrontEl, {});
    hammerManager.add(swipe);
    hammerManager.add(new Hammer.Tap({ event: 'singletap' }));

    hammerManager.on('singletap swipeup swipedown swiperight swipeleft', (ev) => {
        const type = ev.type;
        let element = ev.target;
        //debug(`${type} ${element.dataset.type}`);

        switch (type) {
            case 'singletap':
                if (isTapEnabled) {
                    this.R_();
                }
                break;
            case 'swipeup':
                this.R();
                break;
            case 'swiperight':
                this.D();
                break;
            case 'swipedown':
                this.R_();
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
    hammerManager.add(new Hammer.Tap({ event: 'singletap' }));

    hammerManager.on('singletap swipeup swipedown swiperight swipeleft', (ev) => {
        const type = ev.type;
        let element = ev.target;
        //debug(`${type} ${element.dataset.type}`);

        switch (type) {
            case 'singletap':
                if (isTapEnabled) {
                    this.F_();
                }
                break;
            case 'swipeup':
                this.R();
                break;
            case 'swiperight':
                this.F_();
                break;
            case 'swipedown':
                this.R_();
                break;
            case 'swipeleft':
                this.F();
                break;
        }
    });

    swipe = new Hammer.Swipe();
    swipe.set({ direction: Hammer.DIRECTION_ALL });

    hammerManager = new Hammer.Manager(touchRightEl, {});
    hammerManager.add(swipe);
    hammerManager.add(new Hammer.Tap({ event: 'singletap' }));

    hammerManager.on('singletap swipeup swipedown swiperight swipeleft', (ev) => {
        const type = ev.type;
        let element = ev.target;
        //debug(`${type} ${element.dataset.type}`);

        switch (type) {
            case 'singletap':
                if (isTapEnabled) {
                    this.D_();
                }
                break;
            case 'swipeup':
                this.F_();
                break;
            case 'swiperight':
                this.D();
                break;
            case 'swipedown':
                this.F();
                break;
            case 'swipeleft':
                this.D_();
                break;
        }
    });
}
export function setupCube5(config) {

    const isTapEnabled = config && config.isTapEnabled;

    let touchEl = this._touchElements[5],
        touchUpEl = qs('[data-type="up"]', touchEl),
        touchDownEl,
        touchFrontEl,
        touchBackEl = qs('[data-type="back"]', touchEl),
        touchRightEl,
        touchLeftEl = qs('[data-type="left"]', touchEl);

    let swipe = new Hammer.Swipe();
    swipe.set({ direction: Hammer.DIRECTION_ALL });

    let hammerManager = new Hammer.Manager(touchBackEl, {});
    hammerManager.add(swipe);
    hammerManager.add(new Hammer.Tap({ event: 'singletap' }));

    hammerManager.on('singletap swipeup swipedown swiperight swipeleft', (ev) => {
        const type = ev.type;
        let element = ev.target;
        //debug(`${type} ${element.dataset.type}`);

        switch (type) {
            case 'singletap':
                if (isTapEnabled) {
                    this.L_();
                }
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
    hammerManager.add(new Hammer.Tap({ event: 'singletap' }));

    hammerManager.on('singletap swipeup swipedown swiperight swipeleft', (ev) => {
        const type = ev.type;
        let element = ev.target;
        //debug(`${type} ${element.dataset.type}`);

        switch (type) {
            case 'singletap':
                if (isTapEnabled) {
                    this.B();
                }
                break;
            case 'swipeup':
                this.L_();
                break;
            case 'swiperight':
                this.B_();
                break;
            case 'swipedown':
                this.L();
                break;
            case 'swipeleft':
                this.B();
                break;
        }
    });

    swipe = new Hammer.Swipe();
    swipe.set({ direction: Hammer.DIRECTION_ALL });

    hammerManager = new Hammer.Manager(touchLeftEl, {});
    hammerManager.add(swipe);
    hammerManager.add(new Hammer.Tap({ event: 'singletap' }));

    hammerManager.on('singletap swipeup swipedown swiperight swipeleft', (ev) => {
        const type = ev.type;
        let element = ev.target;
        //debug(`${type} ${element.dataset.type}`);

        switch (type) {
            case 'singletap':
                if (isTapEnabled) {
                    this.U();
                }
                break;
            case 'swipeup':
                this.B_();
                break;
            case 'swiperight':
                this.U_();
                break;
            case 'swipedown':
                this.B();
                break;
            case 'swipeleft':
                this.U();
                break;
        }
    });

}
export function setupCube6(config) {

    const isTapEnabled = config && config.isTapEnabled;

    let touchEl = this._touchElements[6],
        touchUpEl = qs('[data-type="up"]', touchEl),
        touchDownEl,
        touchFrontEl,
        touchBackEl = qs('[data-type="back"]', touchEl),
        touchRightEl = qs('[data-type="right"]', touchEl),
        touchLeftEl;

    let swipe = new Hammer.Swipe();
    swipe.set({ direction: Hammer.DIRECTION_ALL });

    let hammerManager = new Hammer.Manager(touchBackEl, {});
    hammerManager.add(swipe);
    hammerManager.add(new Hammer.Tap({ event: 'singletap' }));

    hammerManager.on('singletap swipeup swipedown swiperight swipeleft', (ev) => {
        const type = ev.type;
        let element = ev.target;
        //debug(`${type} ${element.dataset.type}`);

        switch (type) {
            case 'singletap':
                if (isTapEnabled) {}
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
    hammerManager.add(new Hammer.Tap({ event: 'singletap' }));

    hammerManager.on('singletap swipeup swipedown swiperight swipeleft', (ev) => {
        const type = ev.type;
        let element = ev.target;
        //debug(`${type} ${element.dataset.type}`);

        switch (type) {
            case 'singletap':
                if (isTapEnabled) {
                    this.B_();
                }
                break;
            case 'swipeup':
                this.R();
                break;
            case 'swiperight':
                this.B_();
                break;
            case 'swipedown':
                this.R_();
                break;
            case 'swipeleft':
                this.B();
                break;
        }
    });

    swipe = new Hammer.Swipe();
    swipe.set({ direction: Hammer.DIRECTION_ALL });

    hammerManager = new Hammer.Manager(touchRightEl, {});
    hammerManager.add(swipe);
    hammerManager.add(new Hammer.Tap({ event: 'singletap' }));

    hammerManager.on('singletap swipeup swipedown swiperight swipeleft', (ev) => {
        const type = ev.type;
        let element = ev.target;
        //debug(`${type} ${element.dataset.type}`);

        switch (type) {
            case 'singletap':
                if (isTapEnabled) {
                    this.U_();
                }
                break;
            case 'swipeup':
                this.B();
                break;
            case 'swiperight':
                this.U_();
                break;
            case 'swipedown':
                this.B_();
                break;
            case 'swipeleft':
                this.U();
                break;
        }
    });
}
export function setupCube7(config) {

    const isTapEnabled = config && config.isTapEnabled;

    let touchEl = this._touchElements[7],
        touchUpEl,
        touchDownEl = qs('[data-type="down"]', touchEl),
        touchFrontEl,
        touchBackEl = qs('[data-type="back"]', touchEl),
        touchRightEl,
        touchLeftEl = qs('[data-type="left"]', touchEl);

    let swipe = new Hammer.Swipe();
    swipe.set({ direction: Hammer.DIRECTION_ALL });

    let hammerManager = new Hammer.Manager(touchBackEl, {});
    hammerManager.add(swipe);
    hammerManager.add(new Hammer.Tap({ event: 'singletap' }));

    hammerManager.on('singletap swipeup swipedown swiperight swipeleft', (ev) => {
        const type = ev.type;
        let element = ev.target;
        //debug(`${type} ${element.dataset.type}`);

        switch (type) {
            case 'singletap':
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
    hammerManager.add(new Hammer.Tap({ event: 'singletap' }));

    hammerManager.on('singletap swipeup swipedown swiperight swipeleft', (ev) => {
        const type = ev.type;
        let element = ev.target;
        //debug(`${type} ${element.dataset.type}`);

        switch (type) {
            case 'singletap':
                this.B_();
                break;
            case 'swipeup':
                this.L_();
                break;
            case 'swiperight':
                this.B();
                break;
            case 'swipedown':
                this.L();
                break;
            case 'swipeleft':
                this.B_();
                break;
        }
    });

    swipe = new Hammer.Swipe();
    swipe.set({ direction: Hammer.DIRECTION_ALL });

    hammerManager = new Hammer.Manager(touchLeftEl, {});
    hammerManager.add(swipe);
    hammerManager.add(new Hammer.Tap({ event: 'singletap' }));

    hammerManager.on('singletap swipeup swipedown swiperight swipeleft', (ev) => {
        const type = ev.type;
        let element = ev.target;
        //debug(`${type} ${element.dataset.type}`);

        switch (type) {
            case 'singletap':
                this.D_();
                break;
            case 'swipeup':
                this.B_();
                break;
            case 'swiperight':
                this.D();
                break;
            case 'swipedown':
                this.B();
                break;
            case 'swipeleft':
                this.D_();
                break;
        }
    });
}
export function setupCube8(config) {

    const isTapEnabled = config && config.isTapEnabled;

    let touchEl = this._touchElements[8],
        touchUpEl,
        touchDownEl = qs('[data-type="down"]', touchEl),
        touchFrontEl,
        touchBackEl = qs('[data-type="back"]', touchEl),
        touchRightEl = qs('[data-type="right"]', touchEl),
        touchLeftEl;

    let swipe = new Hammer.Swipe();
    swipe.set({ direction: Hammer.DIRECTION_ALL });

    let hammerManager = new Hammer.Manager(touchBackEl, {});
    hammerManager.add(swipe);
    hammerManager.add(new Hammer.Tap({ event: 'singletap' }));

    hammerManager.on('singletap swipeup swipedown swiperight swipeleft', (ev) => {
        const type = ev.type;
        let element = ev.target;
        //debug(`${type} ${element.dataset.type}`);

        switch (type) {
            case 'singletap':
                if (isTapEnabled) {
                    this.R_();
                }
                break;
            case 'swipeup':
                this.R();
                break;
            case 'swiperight':
                this.D();
                break;
            case 'swipedown':
                this.R_();
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
    hammerManager.add(new Hammer.Tap({ event: 'singletap' }));

    hammerManager.on('singletap swipeup swipedown swiperight swipeleft', (ev) => {
        const type = ev.type;
        let element = ev.target;
        //debug(`${type} ${element.dataset.type}`);

        switch (type) {
            case 'singletap':
                if (isTapEnabled) {
                    this.B();
                }
                break;
            case 'swipeup':
                this.R();
                break;
            case 'swiperight':
                this.B();
                break;
            case 'swipedown':
                this.R_();
                break;
            case 'swipeleft':
                this.B_();
                break;
        }
    });

    swipe = new Hammer.Swipe();
    swipe.set({ direction: Hammer.DIRECTION_ALL });

    hammerManager = new Hammer.Manager(touchRightEl, {});
    hammerManager.add(swipe);
    hammerManager.add(new Hammer.Tap({ event: 'singletap' }));

    hammerManager.on('singletap swipeup swipedown swiperight swipeleft', (ev) => {
        const type = ev.type;
        let element = ev.target;
        //debug(`${type} ${element.dataset.type}`);

        switch (type) {
            case 'singletap':
                if (isTapEnabled) {
                    this.D();
                }
                break;
            case 'swipeup':
                this.B();
                break;
            case 'swiperight':
                this.D();
                break;
            case 'swipedown':
                this.B_();
                break;
            case 'swipeleft':
                this.D_();
                break;
        }
    });
}