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

    if (action === 'F') {
        let cube1 = stateCodes[0];
        let cube2 = stateCodes[1];
        let cube3 = stateCodes[2];
        let cube4 = stateCodes[3];

        let actionCode = 'z';
        let cube1NextCode = dictCube[cube1.code][actionCode];
        let cube2NextCode = dictCube[cube2.code][actionCode];
        let cube3NextCode = dictCube[cube3.code][actionCode];
        let cube4NextCode = dictCube[cube4.code][actionCode];
        // log(cube1NextCode);
        // log(cube2NextCode);
        // log(cube3NextCode);
        // log(cube4NextCode);
        cube1.code = cube1NextCode;
        cube2.code = cube2NextCode;
        cube3.code = cube3NextCode;
        cube4.code = cube4NextCode;
        let temp = cube1.cube;
        cube1.cube = cube3.cube;
        cube3.cube = cube4.cube;
        cube4.cube = cube2.cube;
        cube2.cube = temp;
    }

    //log(JSON.stringify(stateCodes));
    return stateCodes;
}