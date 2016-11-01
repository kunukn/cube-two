import { debug, log, error } from '../logger';

import {
    cloneObject,
    nextState,
    getLeft,
    getRight,
    getDown,
    getBack,
    getUp,
    getFront,
} from '../cube-util';

import dictCube from '../dictionaries/dict-cube';
import dictCubeTransform from '../dictionaries/dict-cube-transform';

export function reducer({ action, stateCodes }) {

    function applyHelper(c1, c2, c3, c4, actionCode) {
        c1.code = dictCube[c1.code][actionCode];
        c2.code = dictCube[c2.code][actionCode];
        c3.code = dictCube[c3.code][actionCode];
        c4.code = dictCube[c4.code][actionCode];
    }

    function applyF() {
        let c1 = stateCodes[0];
        let c2 = stateCodes[1];
        let c3 = stateCodes[2];
        let c4 = stateCodes[3];

        applyHelper(c1, c2, c3, c4, 'z');

        let temp = c1.cube;
        c1.cube = c3.cube;
        c3.cube = c4.cube;
        c4.cube = c2.cube;
        c2.cube = temp;
    }

    function applyF_() {
        let c1 = stateCodes[0];
        let c2 = stateCodes[1];
        let c3 = stateCodes[2];
        let c4 = stateCodes[3];

        applyHelper(c1, c2, c3, c4, '-z');

        let temp = c1.cube;
        c1.cube = c2.cube;
        c2.cube = c4.cube;
        c4.cube = c3.cube;
        c3.cube = temp;
    }

    function applyB_() {
        let c1 = stateCodes[4];
        let c2 = stateCodes[5];
        let c3 = stateCodes[6];
        let c4 = stateCodes[7];

        applyHelper(c1, c2, c3, c4, 'z');

        let temp = c1.cube;
        c1.cube = c3.cube;
        c3.cube = c4.cube;
        c4.cube = c2.cube;
        c2.cube = temp;
    }

    function applyB() {
        let c1 = stateCodes[4];
        let c2 = stateCodes[5];
        let c3 = stateCodes[6];
        let c4 = stateCodes[7];

        applyHelper(c1, c2, c3, c4, '-z');

        let temp = c1.cube;
        c1.cube = c2.cube;
        c2.cube = c4.cube;
        c4.cube = c3.cube;
        c3.cube = temp;
    }

    function applyR() {
        let c1 = stateCodes[1];
        let c2 = stateCodes[3];
        let c3 = stateCodes[5];
        let c4 = stateCodes[7];

        applyHelper(c1, c2, c3, c4, 'x');

        let temp = c1.cube;
        c1.cube = c2.cube;
        c2.cube = c4.cube;
        c4.cube = c3.cube;
        c3.cube = temp;
    }

    function applyR_() {
        let c1 = stateCodes[1];
        let c2 = stateCodes[3];
        let c3 = stateCodes[5];
        let c4 = stateCodes[7];

        applyHelper(c1, c2, c3, c4, '-x');

        let temp = c1.cube;
        c1.cube = c3.cube;
        c3.cube = c4.cube;
        c4.cube = c2.cube;
        c2.cube = temp;
    }

    function applyL() {
        let c1 = stateCodes[0];
        let c2 = stateCodes[2];
        let c3 = stateCodes[4];
        let c4 = stateCodes[6];

        applyHelper(c1, c2, c3, c4, '-x');

        let temp = cloneObject(c1);
        stateCodes[0] = stateCodes[4];
        stateCodes[4] = stateCodes[6];
        stateCodes[6] = stateCodes[2];
        stateCodes[2] = temp;
    }

    function applyL_() {
        let c1 = stateCodes[0];
        let c2 = stateCodes[2];
        let c3 = stateCodes[4];
        let c4 = stateCodes[6];

        applyHelper(c1, c2, c3, c4, 'x');

        let first = cloneObject(c1);
        stateCodes[0] = stateCodes[2];
        stateCodes[2] = stateCodes[6];
        stateCodes[6] = stateCodes[4];
        stateCodes[4] = first;
    }

    function applyU() {
        let c1 = stateCodes[0];
        let c2 = stateCodes[1];
        let c3 = stateCodes[4];
        let c4 = stateCodes[5];

        applyHelper(c1, c2, c3, c4, '-y');

        let temp = c1.cube;
        c1.cube = c2.cube;
        c2.cube = c4.cube;
        c4.cube = c3.cube;
        c3.cube = temp;
    }

    function applyU_() {
        let c1 = stateCodes[0];
        let c2 = stateCodes[1];
        let c3 = stateCodes[4];
        let c4 = stateCodes[5];

        applyHelper(c1, c2, c3, c4, 'y');

        let temp = c1.cube;
        c1.cube = c3.cube;
        c3.cube = c4.cube;
        c4.cube = c2.cube;
        c2.cube = temp;
    }


    function applyD() {
        let c1 = stateCodes[2];
        let c2 = stateCodes[3];
        let c3 = stateCodes[6];
        let c4 = stateCodes[7];

        applyHelper(c1, c2, c3, c4, 'y');

        let temp = c1.cube;
        c1.cube = c3.cube;
        c3.cube = c4.cube;
        c4.cube = c2.cube;
        c2.cube = temp;
    }

    function applyD_() {
        let c1 = stateCodes[2];
        let c2 = stateCodes[3];
        let c3 = stateCodes[6];
        let c4 = stateCodes[7];

        applyHelper(c1, c2, c3, c4, '-y');

        let temp = c1.cube;
        c1.cube = c2.cube;
        c2.cube = c4.cube;
        c4.cube = c3.cube;
        c3.cube = temp;
    }


    switch (action) {
        case 'F':
            applyF();
            break;
        case 'F_':
            applyF_();
            break;
        case 'B':
            applyB();
            break;
        case 'B_':
            applyB_();
            break;
        case 'z':
            applyF();
            applyB_();
            break;
        case 'z_':
            applyF_();
            applyB();
            break;
        case 'R':
            applyR();
            break;
        case 'R_':
            applyR_();
            break;
        case 'L':
            applyL();
            break;
        case 'L_':
            applyL_();
            break;
        case 'x':
            applyR();
            applyL_();
            break;
        case 'x_':
            applyR_();
            applyL();
            break;
        case 'U':
            applyU();
            break;
        case 'U_':
            applyU_();
            break;
        case 'D':
            applyD();
            break;
        case 'D_':
            applyD_();
            break;
        case 'y':
            applyU_();
            applyD();
            break;
        case 'y_':
            applyU();
            applyD_();
            break;
    }

    log(JSON.stringify(stateCodes));
    return stateCodes;
}