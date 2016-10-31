import deepFreeze from 'deep-freeze';

const dictCubeSkins = [];

let alpha = .9;


dictCubeSkins['blank'] = `rgba(0, 0, 0, ${alpha})`;
dictCubeSkins['_'] = `transparent`;
dictCubeSkins['u'] = `rgba(255, 255, 255, ${alpha})`; // #fff
dictCubeSkins['f'] = `rgba(0, 158, 96, ${alpha})`; // #009E60
//dictCubeSkins['f'] = `rgba(0, 158, 96, ${alpha}) url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/157670/visma-logo.svg) 0% 0% / 50vmin 50vmin no-repeat`
dictCubeSkins['r'] = `rgba(196, 30, 58, ${alpha})`; // #C41E3A
dictCubeSkins['l'] = `rgba(255, 88, 0, ${alpha})`; // #FF5800
dictCubeSkins['b'] = `rgba(0, 81, 186, ${alpha})`; // #0051BA
dictCubeSkins['d'] = `rgba(255, 213, 0, ${alpha})`; // #FFD500

alpha = .3;

dictCubeSkins['blank-dark'] = `rgba(0, 0, 0, ${alpha})`;
dictCubeSkins['u-dark'] = `rgba(255, 255, 255, ${alpha})`; // #fff
dictCubeSkins['f-dark'] = `rgba(0, 158, 96, ${alpha})`; // #009E60
dictCubeSkins['r-dark'] = `rgba(196, 30, 58, ${alpha})`; // #C41E3A
dictCubeSkins['l-dark'] = `rgba(255, 88, 0, ${alpha})`; // #FF5800
dictCubeSkins['b-dark'] = `rgba(0, 81, 186, ${alpha})`; // #0051BA
dictCubeSkins['d-dark'] = `rgba(255, 213, 0, ${alpha})`; // #FFD500

const imgBaseUrl = '/src/assets/images/';

deepFreeze(dictCubeSkins);

export default dictCubeSkins;