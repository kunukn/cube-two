import { STATES, OPPOSITE } from '../constants';
import { nextState, getRight, getLeft } from '../cube-util';
import deepFreeze from 'deep-freeze';

const dictCube = [];

Object.keys(STATES).forEach((state, index) => dictCube[state] = []);

let index, u, f, next, state = nextState.first;

for (index = 0; index < nextState.stateCount; index++) {

    u = state[0];
    f = state[1];

    dictCube[state]['x'] = `${f}${OPPOSITE[u]}`;
    dictCube[state]['-x'] = `${OPPOSITE[f]}${u}`;
    dictCube[state]['y'] = `${u}${getLeft(state)}`;
    dictCube[state]['-y'] = `${u}${getRight(state)}`;
    dictCube[state]['z'] = `${getLeft(state)}${f}`;
    dictCube[state]['-z'] = `${getRight(state)}${f}`;

    next = nextState.get(state);
    state = next.state;
}

deepFreeze(dictCube);
export default dictCube;