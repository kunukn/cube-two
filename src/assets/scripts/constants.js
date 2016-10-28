import deepFreeze from 'deep-freeze';

const STATES = {
    uf: 'uf',
    ur: 'ur',
    ub: 'ub',
    ul: 'ul',
    fu: 'fu',
    fl: 'fl',
    fd: 'fd',
    fr: 'fr',
    ru: 'ru',
    rf: 'rf',
    rd: 'rd',
    rb: 'rb',
    df: 'df',
    dl: 'dl',
    db: 'db',
    dr: 'dr',
    bu: 'bu',
    br: 'br',
    bd: 'bd',
    bl: 'bl',
    lu: 'lu',
    lb: 'lb',
    ld: 'ld',
    lf: 'lf',
};
deepFreeze(STATES);


const STATES_ARRAY = [];
Object.keys(STATES).forEach((state, index) => STATES_ARRAY.push(state));
deepFreeze(STATES_ARRAY);


const KEY = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    a: 65,
    d: 68,
    e: 69,
    q: 81,
    s: 83,
    w: 87,
    x: 88,
    y: 89,
    z: 90,
};
deepFreeze(KEY);


const EVENT_NAMES = {
    init: 'init',
    statechange: 'statechange',
    beforerotate: 'beforerotate',
    afterrotate: 'afterrotate',
};
deepFreeze(EVENT_NAMES);



const OPPOSITE = [];
OPPOSITE['u'] = 'd';
OPPOSITE['d'] = 'u';
OPPOSITE['r'] = 'l';
OPPOSITE['l'] = 'r';
OPPOSITE['f'] = 'b';
OPPOSITE['b'] = 'f';

const LEFT = [];
LEFT['uf'] = 'l';
LEFT['ur'] = 'f';
LEFT['ub'] = 'r';
LEFT['ul'] = 'b';

LEFT['fu'] = 'r';
LEFT['fl'] = 'u';
LEFT['fd'] = 'l';
LEFT['fr'] = 'd';

LEFT['ru'] = 'b';
LEFT['rf'] = 'u';
LEFT['rd'] = 'f';
LEFT['rb'] = 'd';

LEFT['df'] = 'r';
LEFT['dl'] = 'f';
LEFT['db'] = 'l';
LEFT['dr'] = 'b';

LEFT['bu'] = 'l';
LEFT['br'] = 'u';
LEFT['bd'] = 'r';
LEFT['bl'] = 'd';

LEFT['lu'] = 'f';
LEFT['lb'] = 'u';
LEFT['ld'] = 'b';
LEFT['lf'] = 'd';


export { STATES, STATES_ARRAY, OPPOSITE, LEFT, KEY, EVENT_NAMES };