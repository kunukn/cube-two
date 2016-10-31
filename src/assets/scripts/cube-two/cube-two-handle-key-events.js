import { KEY } from '../constants';

export function handleKeyEventCube1(event) {
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
export function handleKeyEventCube2(event) {
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
export function handleKeyEventCube3(event) {
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
export function handleKeyEventCube4(event) {
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
export function handleKeyEventCube5(event) {
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
export function handleKeyEventCube6(event) {
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
export function handleKeyEventCube7(event) {
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
export function handleKeyEventCube8(event) {
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
export function handleGlobalKeyEvent(event) {

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