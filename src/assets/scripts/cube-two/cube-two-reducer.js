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

    function applyF() {
        let c1 = stateCodes[0];
        let c2 = stateCodes[1];
        let c3 = stateCodes[2];
        let c4 = stateCodes[3];
        const actionCode = 'z';

        c1.code = dictCube[c1.code][actionCode];
        c2.code = dictCube[c2.code][actionCode];
        c3.code = dictCube[c3.code][actionCode];
        c4.code = dictCube[c4.code][actionCode];

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
        const actionCode = '-z';

        c1.code = dictCube[c1.code][actionCode];
        c2.code = dictCube[c2.code][actionCode];
        c3.code = dictCube[c3.code][actionCode];
        c4.code = dictCube[c4.code][actionCode];

        let temp = c1.cube;
        c1.cube = c2.cube;
        c2.cube = c4.cube;
        c4.cube = c3.cube;
        c3.cube = temp;
    }


    if (action === 'F') {
        applyF();
    }
    if (action === 'F_') {
        applyF_();
    }


    //log(JSON.stringify(stateCodes));
    return stateCodes;
}