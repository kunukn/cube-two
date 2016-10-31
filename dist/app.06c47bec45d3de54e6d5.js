webpackJsonp([1,0],[function(e,t,i){e.exports=i(7)},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.log=console.log.bind(console),t.error=console.error.bind(console),t.debug=console.debug.bind(console)},function(e,t,i){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.ROTATION_VIEW=t.EVENT_NAMES=t.KEY=t.LEFT=t.OPPOSITE=t.STATES_ARRAY=t.STATES=void 0;var n=i(4),a=s(n),r={X:20,Y:30};(0,a.default)(r);var u={uf:"uf",ur:"ur",ub:"ub",ul:"ul",fu:"fu",fl:"fl",fd:"fd",fr:"fr",ru:"ru",rf:"rf",rd:"rd",rb:"rb",df:"df",dl:"dl",db:"db",dr:"dr",bu:"bu",br:"br",bd:"bd",bl:"bl",lu:"lu",lb:"lb",ld:"ld",lf:"lf"};(0,a.default)(u);var o=[];Object.keys(u).forEach(function(e,t){return o.push(e)}),(0,a.default)(o);var c={LEFT:37,UP:38,RIGHT:39,DOWN:40,a:65,d:68,e:69,q:81,s:83,w:87,x:88,y:89,z:90};(0,a.default)(c);var l={init:"init",statechange:"statechange",beforerotate:"beforerotate",afterrotate:"afterrotate"};(0,a.default)(l);var p=[];p.u="d",p.d="u",p.r="l",p.l="r",p.f="b",p.b="f";var d=[];d.uf="l",d.ur="f",d.ub="r",d.ul="b",d.fu="r",d.fl="u",d.fd="l",d.fr="d",d.ru="b",d.rf="u",d.rd="f",d.rb="d",d.df="r",d.dl="f",d.db="l",d.dr="b",d.bu="l",d.br="u",d.bd="r",d.bl="d",d.lu="f",d.lb="u",d.ld="b",d.lf="d",t.STATES=u,t.STATES_ARRAY=o,t.OPPOSITE=p,t.LEFT=d,t.KEY=c,t.EVENT_NAMES=l,t.ROTATION_VIEW=r},function(e,t){"use strict";function i(e,t){return(t||document).querySelector(e)}function s(e,t){return[].slice.call((t||document).querySelectorAll(e),0)}function n(e){return document.getElementById(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.qs=i,t.qsa=s,t.byId=n},function(e,t){e.exports=function e(t){return Object.freeze(t),Object.getOwnPropertyNames(t).forEach(function(i){!t.hasOwnProperty(i)||null===t[i]||"object"!=typeof t[i]&&"function"!=typeof t[i]||Object.isFrozen(t[i])||e(t[i])}),t}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.CUBE_COUNT=8,t.CUBE_SIZE="25vmin"},function(e,t){},function(e,t,i){"use strict";i(6);var s=i(1),n=i(3),a=i(2),r=i(11),u=((0,n.qs)(".body-wrapper"),(0,n.byId)("cubetwo-component-1")),o=(0,n.qs)(".cubetwo-rotation-view",u),c=new r.CubeTwo({cubeComponent:u});c.addCallbackForEvent("init",function(e,t){}),c.init();var l=(0,n.qs)(".cubetwo-js.cubetwo-btn-menu",u),p=(0,n.qs)(".cubetwo-menu-component");l.addEventListener("click",function(e){p.classList.toggle("cubetwo-show-dialog"),e.currentTarget.classList.toggle("cubetwo-active")});var d=(0,n.qs)(".cubetwo-js.cubetwo-btn-help",u),h=(0,n.qs)(".cubetwo-help-component");d.addEventListener("click",function(e){h.classList.toggle("cubetwo-show-dialog"),e.currentTarget.classList.toggle("cubetwo-active")}),(0,n.qs)(".cubetwo-btn-top-left",u).addEventListener("click",function(e){return o.style.transform="rotateX("+a.ROTATION_VIEW.X+"deg) rotateY(-"+a.ROTATION_VIEW.Y+"deg) rotateZ(0deg)"}),(0,n.qs)(".cubetwo-btn-top-right",u).addEventListener("click",function(e){return o.style.transform="rotateX("+a.ROTATION_VIEW.X+"deg) rotateY("+a.ROTATION_VIEW.Y+"deg) rotateZ(0deg)"}),(0,n.qs)(".cubetwo-btn-bottom-left",u).addEventListener("click",function(e){return o.style.transform="rotateX(-"+a.ROTATION_VIEW.X+"deg) rotateY(-"+a.ROTATION_VIEW.Y+"deg) rotateZ(0deg)"}),(0,n.qs)(".cubetwo-btn-bottom-right",u).addEventListener("click",function(e){return o.style.transform="rotateX(-"+a.ROTATION_VIEW.X+"deg) rotateY("+a.ROTATION_VIEW.Y+"deg) rotateZ(0deg)"}),(0,n.qs)(".cubetwo-btn-top-center",u).addEventListener("click",function(e){return c.x()}),(0,n.qs)(".cubetwo-btn-bottom-center",u).addEventListener("click",function(e){return c.x_()}),(0,n.qs)(".cubetwo-js.cubetwo-btn-rotate-left",u).addEventListener("click",function(e){return c.y_()}),(0,n.qs)(".cubetwo-js.cubetwo-btn-rotate-left-2x",u).addEventListener("click",function(e){return c.y2_()}),(0,n.qs)(".cubetwo-js.cubetwo-btn-rotate-right",u).addEventListener("click",function(e){return c.y()}),(0,n.qs)(".cubetwo-js.cubetwo-btn-rotate-right-2x",u).addEventListener("click",function(e){return c.y2()}),window.addEventListener("keydown",c.handleGlobalKeyEvent,!1),window.cubetwo=c,(0,s.log)("cubetwo is available in console")},function(e,t,i){(function(e){"use strict";function s(){var t=this,i=this._touchElements[1],s=(0,p.qs)('[data-type="up"]',i),n=(0,p.qs)('[data-type="front"]',i),a=(0,p.qs)('[data-type="left"]',i),r=new e.Swipe;r.set({direction:e.DIRECTION_ALL});var u=new e.Manager(n,{});u.add(r),u.add(new e.Tap({event:"singletab"})),u.on("singletab swipeup swipedown swiperight swipeleft",function(e){var i=e.type;e.target;switch(i){case"singletab":t.L_();break;case"swipeup":t.L_();break;case"swiperight":t.U_();break;case"swipedown":t.L();break;case"swipeleft":t.U()}}),r=new e.Swipe,r.set({direction:e.DIRECTION_ALL}),u=new e.Manager(s,{}),u.add(r),u.add(new e.Tap({event:"singletap"})),u.on("singletap swipeup swipedown swiperight swipeleft",function(e){var i=e.type,s=e.target;switch("cubetwo"!==s.dataset.type&&(s=s.parentElement,"cubetwo"!==s.dataset.type&&(s=s.parentElement)),i){case"singletap":t.F_();break;case"swipeup":t.L_();break;case"swiperight":t.F();break;case"swipedown":t.L();break;case"swipeleft":t.F_()}}),r=new e.Swipe,r.set({direction:e.DIRECTION_ALL}),u=new e.Manager(a,{}),u.add(r),u.add(new e.Tap({event:"singletap"})),u.on("singletap swipeup swipedown swiperight swipeleft",function(e){var i=e.type,s=e.target;switch("cubetwo"!==s.dataset.type&&(s=s.parentElement,"cubetwo"!==s.dataset.type&&(s=s.parentElement)),i){case"singletap":t.U_();break;case"swipeup":t.F();break;case"swiperight":t.U_();break;case"swipedown":t.F_();break;case"swipeleft":t.U()}})}function n(){var t=this,i=this._touchElements[2],s=(0,p.qs)('[data-type="up"]',i),n=(0,p.qs)('[data-type="front"]',i),a=(0,p.qs)('[data-type="right"]',i),r=new e.Swipe;r.set({direction:e.DIRECTION_ALL});var u=new e.Manager(n,{});u.add(r),u.add(new e.Tap({event:"singletap"})),u.on("singletap swipeup swipedown swiperight swipeleft",function(e){var i=e.type;e.target;switch(i){case"singletap":t.R();break;case"swipeup":t.R();break;case"swiperight":t.U_();break;case"swipedown":t.R_();break;case"swipeleft":t.U()}}),r=new e.Swipe,r.set({direction:e.DIRECTION_ALL}),u=new e.Manager(s,{}),u.add(r),u.add(new e.Tap({event:"singletap"})),u.on("singletap swipeup swipedown swiperight swipeleft",function(e){var i=e.type,s=e.target;switch("cubetwo"!==s.dataset.type&&(s=s.parentElement,"cubetwo"!==s.dataset.type&&(s=s.parentElement)),i){case"singletap":t.F();break;case"swipeup":t.R();break;case"swiperight":t.F();break;case"swipedown":t.R_();break;case"swipeleft":t.F_()}}),r=new e.Swipe,r.set({direction:e.DIRECTION_ALL}),u=new e.Manager(a,{}),u.add(r),u.add(new e.Tap({event:"singletap"})),u.on("singletap swipeup swipedown swiperight swipeleft",function(e){var i=e.type,s=e.target;switch("cubetwo"!==s.dataset.type&&(s=s.parentElement,"cubetwo"!==s.dataset.type&&(s=s.parentElement)),i){case"singletap":t.U();break;case"swipeup":t.F_();break;case"swiperight":t.U_();break;case"swipedown":t.F();break;case"swipeleft":t.U()}})}function a(){var t=this,i=this._touchElements[3],s=(0,p.qs)('[data-type="down"]',i),n=(0,p.qs)('[data-type="front"]',i),a=(0,p.qs)('[data-type="left"]',i),r=new e.Swipe;r.set({direction:e.DIRECTION_ALL});var u=new e.Manager(n,{});u.add(r),u.add(new e.Tap({event:"singletap"})),u.on("singletap swipeup swipedown swiperight swipeleft",function(e){var i=e.type;e.target;switch(i){case"singletap":t.L();break;case"swipeup":t.L_();break;case"swiperight":t.D();break;case"swipedown":t.L();break;case"swipeleft":t.D_()}}),r=new e.Swipe,r.set({direction:e.DIRECTION_ALL}),u=new e.Manager(s,{}),u.add(r),u.add(new e.Tap({event:"singletap"})),u.on("singletap swipeup swipedown swiperight swipeleft",function(e){var i=e.type;e.target;switch(i){case"singletap":t.F();break;case"swipeup":t.L_();break;case"swiperight":t.F_();break;case"swipedown":t.L();break;case"swipeleft":t.F()}}),r=new e.Swipe,r.set({direction:e.DIRECTION_ALL}),u=new e.Manager(a,{}),u.add(r),u.add(new e.Tap({event:"singletap"})),u.on("singletap swipeup swipedown swiperight swipeleft",function(e){var i=e.type;e.target;switch(i){case"singletap":t.D();break;case"swipeup":t.F();break;case"swiperight":t.D();break;case"swipedown":t.F_();break;case"swipeleft":t.D_()}})}function r(){var t=this,i=this._touchElements[4],s=(0,p.qs)('[data-type="down"]',i),n=(0,p.qs)('[data-type="front"]',i),a=(0,p.qs)('[data-type="right"]',i),r=new e.Swipe;r.set({direction:e.DIRECTION_ALL});var u=new e.Manager(n,{});u.add(r),u.add(new e.Tap({event:"singletap"})),u.on("singletap swipeup swipedown swiperight swipeleft",function(e){var i=e.type;e.target;switch(i){case"singletap":t.R_();break;case"swipeup":t.R();break;case"swiperight":t.D();break;case"swipedown":t.R_();break;case"swipeleft":t.D_()}}),r=new e.Swipe,r.set({direction:e.DIRECTION_ALL}),u=new e.Manager(s,{}),u.add(r),u.add(new e.Tap({event:"singletap"})),u.on("singletap swipeup swipedown swiperight swipeleft",function(e){var i=e.type;e.target;switch(i){case"singletap":t.F_();break;case"swipeup":t.R();break;case"swiperight":t.F_();break;case"swipedown":t.R_();break;case"swipeleft":t.F()}}),r=new e.Swipe,r.set({direction:e.DIRECTION_ALL}),u=new e.Manager(a,{}),u.add(r),u.add(new e.Tap({event:"singletap"})),u.on("singletap swipeup swipedown swiperight swipeleft",function(e){var i=e.type;e.target;switch(i){case"singletap":t.D_();break;case"swipeup":t.F_();break;case"swiperight":t.D();break;case"swipedown":t.F();break;case"swipeleft":t.D_()}})}function u(){var t=this,i=this._touchElements[5],s=(0,p.qs)('[data-type="up"]',i),n=(0,p.qs)('[data-type="back"]',i),a=(0,p.qs)('[data-type="left"]',i),r=new e.Swipe;r.set({direction:e.DIRECTION_ALL});var u=new e.Manager(n,{});u.add(r),u.add(new e.Tap({event:"singletap"})),u.on("singletap swipeup swipedown swiperight swipeleft",function(e){var i=e.type;e.target;switch(i){case"singletap":t.L_();break;case"swipeup":t.L_();break;case"swiperight":t.U_();break;case"swipedown":t.L();break;case"swipeleft":t.U()}}),r=new e.Swipe,r.set({direction:e.DIRECTION_ALL}),u=new e.Manager(s,{}),u.add(r),u.add(new e.Tap({event:"singletap"})),u.on("singletap swipeup swipedown swiperight swipeleft",function(e){var i=e.type;e.target;switch(i){case"singletap":t.B();break;case"swipeup":t.L_();break;case"swiperight":t.B_();break;case"swipedown":t.L();break;case"swipeleft":t.B()}}),r=new e.Swipe,r.set({direction:e.DIRECTION_ALL}),u=new e.Manager(a,{}),u.add(r),u.add(new e.Tap({event:"singletap"})),u.on("singletap swipeup swipedown swiperight swipeleft",function(e){var i=e.type;e.target;switch(i){case"singletap":t.U();break;case"swipeup":t.B_();break;case"swiperight":t.U_();break;case"swipedown":t.B();break;case"swipeleft":t.U()}})}function o(){var t=this,i=this._touchElements[6],s=(0,p.qs)('[data-type="up"]',i),n=(0,p.qs)('[data-type="back"]',i),a=(0,p.qs)('[data-type="right"]',i),r=new e.Swipe;r.set({direction:e.DIRECTION_ALL});var u=new e.Manager(n,{});u.add(r),u.add(new e.Tap({event:"singletap"})),u.on("singletap swipeup swipedown swiperight swipeleft",function(e){var i=e.type;e.target;switch(i){case"singletap":break;case"swipeup":t.R();break;case"swiperight":t.U_();break;case"swipedown":t.R_();break;case"swipeleft":t.U()}}),r=new e.Swipe,r.set({direction:e.DIRECTION_ALL}),u=new e.Manager(s,{}),u.add(r),u.add(new e.Tap({event:"singletap"})),u.on("singletap swipeup swipedown swiperight swipeleft",function(e){var i=e.type;e.target;switch(i){case"singletap":t.B_();break;case"swipeup":t.R();break;case"swiperight":t.B_();break;case"swipedown":t.R_();break;case"swipeleft":t.B()}}),r=new e.Swipe,r.set({direction:e.DIRECTION_ALL}),u=new e.Manager(a,{}),u.add(r),u.add(new e.Tap({event:"singletap"})),u.on("singletap swipeup swipedown swiperight swipeleft",function(e){var i=e.type;e.target;switch(i){case"singletap":t.U_();break;case"swipeup":t.B();break;case"swiperight":t.U_();break;case"swipedown":t.B_();break;case"swipeleft":t.U()}})}function c(){var t=this,i=this._touchElements[7],s=(0,p.qs)('[data-type="down"]',i),n=(0,p.qs)('[data-type="back"]',i),a=(0,p.qs)('[data-type="left"]',i),r=new e.Swipe;r.set({direction:e.DIRECTION_ALL});var u=new e.Manager(n,{});u.add(r),u.add(new e.Tap({event:"singletap"})),u.on("singletap swipeup swipedown swiperight swipeleft",function(e){var i=e.type;e.target;switch(i){case"singletap":break;case"swipeup":t.L_();break;case"swiperight":t.D();break;case"swipedown":t.L();break;case"swipeleft":t.D_()}}),r=new e.Swipe,r.set({direction:e.DIRECTION_ALL}),u=new e.Manager(s,{}),u.add(r),u.add(new e.Tap({event:"singletap"})),u.on("singletap swipeup swipedown swiperight swipeleft",function(e){var i=e.type;e.target;switch(i){case"singletap":t.B_();break;case"swipeup":t.L_();break;case"swiperight":t.B();break;case"swipedown":t.L();break;case"swipeleft":t.B_()}}),r=new e.Swipe,r.set({direction:e.DIRECTION_ALL}),u=new e.Manager(a,{}),u.add(r),u.add(new e.Tap({event:"singletap"})),u.on("singletap swipeup swipedown swiperight swipeleft",function(e){var i=e.type;e.target;switch(i){case"singletap":t.D_();break;case"swipeup":t.B_();break;case"swiperight":t.D();break;case"swipedown":t.B();break;case"swipeleft":t.D_()}})}function l(){var t=this,i=this._touchElements[8],s=(0,p.qs)('[data-type="down"]',i),n=(0,p.qs)('[data-type="back"]',i),a=(0,p.qs)('[data-type="right"]',i),r=new e.Swipe;r.set({direction:e.DIRECTION_ALL});var u=new e.Manager(n,{});u.add(r),u.add(new e.Tap({event:"singletap"})),u.on("singletap swipeup swipedown swiperight swipeleft",function(e){var i=e.type;e.target;switch(i){case"singletap":t.R_();break;case"swipeup":t.R();break;case"swiperight":t.D();break;case"swipedown":t.R_();break;case"swipeleft":t.D_()}}),r=new e.Swipe,r.set({direction:e.DIRECTION_ALL}),u=new e.Manager(s,{}),u.add(r),u.add(new e.Tap({event:"singletap"})),u.on("singletap swipeup swipedown swiperight swipeleft",function(e){var i=e.type;e.target;switch(i){case"singletap":t.B();break;case"swipeup":t.R();break;case"swiperight":t.B();break;case"swipedown":t.R_();break;case"swipeleft":t.B_()}}),r=new e.Swipe,r.set({direction:e.DIRECTION_ALL}),u=new e.Manager(a,{}),u.add(r),u.add(new e.Tap({event:"singletap"})),u.on("singletap swipeup swipedown swiperight swipeleft",function(e){var i=e.type;e.target;switch(i){case"singletap":t.D();break;case"swipeup":t.B();break;case"swiperight":t.D();break;case"swipedown":t.B_();break;case"swipeleft":t.D_()}})}Object.defineProperty(t,"__esModule",{value:!0}),t.setupCube1=s,t.setupCube2=n,t.setupCube3=a,t.setupCube4=r,t.setupCube5=u,t.setupCube6=o,t.setupCube7=c,t.setupCube8=l;var p=i(3);i(1)}).call(t,i(13))},function(e,t,i){"use strict";function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.CubeTwoUi=void 0;var n=function(){function e(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,i,s){return i&&e(t.prototype,i),s&&e(t,s),t}}(),a=i(5);i(1),t.CubeTwoUi=function(){function e(t){s(this,e),this.displayElements=t}return n(e,[{key:"uiF_Helper",value:function(e){this.displayElements[1].style.transformOrigin="100% 100%",this.displayElements[2].style.transformOrigin="0% 100%",this.displayElements[3].style.transformOrigin="100% 0%",this.displayElements[4].style.transformOrigin="0% 0%",this.displayElements[1].style.transform="rotateZ("+e+"deg)",this.displayElements[2].style.transform="rotateZ("+e+"deg)",this.displayElements[3].style.transform="rotateZ("+e+"deg)",this.displayElements[4].style.transform="rotateZ("+e+"deg)"}},{key:"uiF",value:function(){this.uiF_Helper("90")}},{key:"uiF_",value:function(){this.uiF_Helper("-90")}},{key:"uiF2",value:function(){this.uiF_Helper("180")}},{key:"uiF2_",value:function(){this.uiF_Helper("-180")}},{key:"uiB_Helper",value:function(e){this.displayElements[5].style.transformOrigin="100% 100%",this.displayElements[6].style.transformOrigin="0% 100%",this.displayElements[7].style.transformOrigin="100% 0%",this.displayElements[8].style.transformOrigin="0% 0%",this.displayElements[5].style.transform="rotateZ("+e+"deg)",this.displayElements[6].style.transform="rotateZ("+e+"deg)",this.displayElements[7].style.transform="rotateZ("+e+"deg)",this.displayElements[8].style.transform="rotateZ("+e+"deg)"}},{key:"uiB",value:function(){this.uiB_Helper("-90")}},{key:"uiB_",value:function(){this.uiB_Helper("90")}},{key:"uiB2",value:function(){this.uiB_Helper("-180")}},{key:"uiB2_",value:function(){this.uiB_Helper("180")}},{key:"uiU_Helper",value:function(e){this.displayElements[1].style.transformOrigin="100% 0%",this.displayElements[2].style.transformOrigin="0% 0%",this.displayElements[5].style.transformOrigin="100% 0% "+a.CUBE_SIZE,this.displayElements[6].style.transformOrigin="0% 0% "+a.CUBE_SIZE,this.displayElements[1].style.transform="rotateY("+e+"deg)",this.displayElements[2].style.transform="rotateY("+e+"deg)",this.displayElements[5].style.transform="rotateY("+e+"deg)",this.displayElements[6].style.transform="rotateY("+e+"deg)"}},{key:"uiU",value:function(){this.uiU_Helper("-90")}},{key:"uiU_",value:function(){this.uiU_Helper("90")}},{key:"uiU2",value:function(){this.uiU_Helper("-180")}},{key:"uiU2_",value:function(){this.uiU_Helper("180")}},{key:"uiD_Helper",value:function(e){this.displayElements[3].style.transformOrigin="100% 0%",this.displayElements[4].style.transformOrigin="0% 0%",this.displayElements[7].style.transformOrigin="100% 0% "+a.CUBE_SIZE,this.displayElements[8].style.transformOrigin="0% 0% "+a.CUBE_SIZE,this.displayElements[3].style.transform="rotateY("+e+"deg)",this.displayElements[4].style.transform="rotateY("+e+"deg)",this.displayElements[7].style.transform="rotateY("+e+"deg)",this.displayElements[8].style.transform="rotateY("+e+"deg)"}},{key:"uiD",value:function(){this.uiD_Helper("90")}},{key:"uiD_",value:function(){this.uiD_Helper("-90")}},{key:"uiD2",value:function(){this.uiD_Helper("180")}},{key:"uiD2_",value:function(){this.uiD_Helper("-180")}},{key:"uiR_Helper",value:function(e){this.displayElements[2].style.transformOrigin="0% 100%",this.displayElements[6].style.transformOrigin="0% 100% "+a.CUBE_SIZE,this.displayElements[8].style.transformOrigin="0% 0% "+a.CUBE_SIZE,this.displayElements[4].style.transformOrigin="0% 0%",this.displayElements[2].style.transform="rotateX("+e+"deg)",this.displayElements[6].style.transform="rotateX("+e+"deg)",this.displayElements[8].style.transform="rotateX("+e+"deg)",this.displayElements[4].style.transform="rotateX("+e+"deg)"}},{key:"uiR",value:function(){this.uiR_Helper("90")}},{key:"uiR_",value:function(){this.uiR_Helper("-90")}},{key:"uiR2",value:function(){this.uiR_Helper("180")}},{key:"uiR2_",value:function(){this.uiR_Helper("-180")}},{key:"uiL_Helper",value:function(e){this.displayElements[1].style.transformOrigin="0% 100%",this.displayElements[5].style.transformOrigin="0% 100% "+a.CUBE_SIZE,this.displayElements[7].style.transformOrigin="0% 0% "+a.CUBE_SIZE,this.displayElements[3].style.transformOrigin="0% 0%",this.displayElements[1].style.transform="rotateX("+e+"deg)",this.displayElements[5].style.transform="rotateX("+e+"deg)",this.displayElements[7].style.transform="rotateX("+e+"deg)",this.displayElements[3].style.transform="rotateX("+e+"deg)"}},{key:"uiL",value:function(){this.uiL_Helper("-90")}},{key:"uiL_",value:function(){this.uiL_Helper("90")}},{key:"uiL2",value:function(){this.uiL_Helper("-180")}},{key:"uiL2_",value:function(){this.uiL_Helper("180")}},{key:"uix",value:function(){this.uiR(),this.uiL_()}},{key:"uix_",value:function(){this.uiR_(),this.uiL()}},{key:"uix2",value:function(){this.uiR2(),this.uiL2_()}},{key:"uix2_",value:function(){this.uiR2_(),this.uiL2()}},{key:"uiy",value:function(){this.uiU_(),this.uiD()}},{key:"uiy_",value:function(){this.uiU(),this.uiD_()}},{key:"uiy2",value:function(){this.uiU2_(),this.uiD2()}},{key:"uiy2_",value:function(){this.uiU2(),this.uiD2_()}},{key:"uiz",value:function(){this.uiF(),this.uiB_()}},{key:"uiz_",value:function(){this.uiF_(),this.uiB()}},{key:"uiz2",value:function(){this.uiF2(),this.uiB2_()}},{key:"uiz2_",value:function(){this.uiF2_(),this.uiB2()}}]),e}()},function(e,t,i){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.CubeTwo=void 0;var a=function(){function e(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,i,s){return i&&e(t.prototype,i),s&&e(t,s),t}}(),r=i(1),u=i(3),o=i(4),c=s(o),l=i(12),p=i(8),d=i(5),h=i(9),w=i(2),_=function(){function e(t){return n(this,e),t?t.cubeComponent?(this._appState={},this._ui=null,this._config=t,this._config.isTransitionEnabled!==!1&&(this._config.isTransitionEnabled=!0),(0,c.default)(this._config),this._cubeComponentEl=t.cubeComponent,this._updateEventBindings(),this._initCallbacks(),void this._setState({code:"todo impl state info for the cube",rotateEnabled:!0})):void(0,r.error)("CubeTwo element was not provided: "+t.cubeComponent):void(0,r.error)("config is invalid for CubeTwo")}return a(e,[{key:"_updateEventBindings",value:function(){this._handleKeyEventCube1=this._handleKeyEventCube1.bind(this),this._handleKeyEventCube2=this._handleKeyEventCube2.bind(this),this._handleKeyEventCube3=this._handleKeyEventCube3.bind(this),this._handleKeyEventCube4=this._handleKeyEventCube4.bind(this),this._handleKeyEventCube5=this._handleKeyEventCube5.bind(this),this._handleKeyEventCube6=this._handleKeyEventCube6.bind(this),this._handleKeyEventCube7=this._handleKeyEventCube7.bind(this),this._handleKeyEventCube8=this._handleKeyEventCube8.bind(this),this.handleGlobalKeyEvent=this.handleGlobalKeyEvent.bind(this),this._transitionEnd=this._transitionEnd.bind(this)}},{key:"_initCallbacks",value:function(){var e=this;this.callbacks={},Object.keys(w.EVENT_NAMES).forEach(function(t,i){return e.callbacks[t]=[]})}},{key:"addCallbackForEvent",value:function(e,t){var i=this.callbacks[e=e.toLowerCase()];i&&"function"==typeof t&&i.push(t)}},{key:"_triggerEvent",value:function(e,t){var i=this.callbacks[e]||[],s=void 0,n=void 0;for(s=0,n=i.length;s<n;s++)i[s].call(this,e,t)}},{key:"getState",value:function(){return(0,l.cloneObject)(this._appState)}},{key:"_setState",value:function(e){var t=(0,l.cloneObject)(e),i=this._appState.code,s=t.code;this._appState=t,i!==s&&this._triggerEvent("statechange",{cube:this.cubeComponentEl,previousStateCode:i,currentStateCode:s,state:t})}},{key:"F",value:function(e){this._rotationInvoke(e,this._ui.uiF)}},{key:"F_",value:function(e){this._rotationInvoke(e,this._ui.uiF_)}},{key:"F2",value:function(e){this._rotationInvoke(e,this._ui.uiF2)}},{key:"F2_",value:function(e){this._rotationInvoke(e,this._ui.uiF2_)}},{key:"B",value:function(e){this._rotationInvoke(e,this._ui.uiB)}},{key:"B_",value:function(e){this._rotationInvoke(e,this._ui.uiB_)}},{key:"B2",value:function(e){this._rotationInvoke(e,this._ui.uiB2)}},{key:"B2_",value:function(e){this._rotationInvoke(e,this._ui.uiB2_)}},{key:"U",value:function(e){this._rotationInvoke(e,this._ui.uiU)}},{key:"U_",value:function(e){this._rotationInvoke(e,this._ui.uiU_)}},{key:"U2",value:function(e){this._rotationInvoke(e,this._ui.uiU2)}},{key:"U2_",value:function(e){this._rotationInvoke(e,this._ui.uiU2_)}},{key:"D",value:function(e){this._rotationInvoke(e,this._ui.uiD)}},{key:"D_",value:function(e){this._rotationInvoke(e,this._ui.uiD_)}},{key:"D2",value:function(e){this._rotationInvoke(e,this._ui.uiD2)}},{key:"D2_",value:function(e){this._rotationInvoke(e,this._ui.uiD2_)}},{key:"R",value:function(e){this._rotationInvoke(e,this._ui.uiR)}},{key:"R_",value:function(e){this._rotationInvoke(e,this._ui.uiR_)}},{key:"R2",value:function(e){this._rotationInvoke(e,this._ui.uiR2)}},{key:"R2_",value:function(e){this._rotationInvoke(e,this._ui.uiR2_)}},{key:"L",value:function(e){this._rotationInvoke(e,this._ui.uiL)}},{key:"L_",value:function(e){this._rotationInvoke(e,this._ui.uiL_)}},{key:"L2",value:function(e){this._rotationInvoke(e,this._ui.uiL2)}},{key:"L2_",value:function(e){this._rotationInvoke(e,this._ui.uiL2_)}},{key:"x",value:function(e){this._rotationInvoke(e,this._ui.uix)}},{key:"x_",value:function(e){this._rotationInvoke(e,this._ui.uix_)}},{key:"x2",value:function(e){this._rotationInvoke(e,this._ui.uix2)}},{key:"x2_",value:function(e){this._rotationInvoke(e,this._ui.uix2_)}},{key:"y",value:function(e){this._rotationInvoke(e,this._ui.uiy)}},{key:"y_",value:function(e){this._rotationInvoke(e,this._ui.uiy_)}},{key:"y2",value:function(e){this._rotationInvoke(e,this._ui.uiy2)}},{key:"y2_",value:function(e){this._rotationInvoke(e,this._ui.uiy2_)}},{key:"z",value:function(e){this._rotationInvoke(e,this._ui.uiz)}},{key:"z2",value:function(e){this._rotationInvoke(e,this._ui.uiz2)}},{key:"z_",value:function(e){this._rotationInvoke(e,this._ui.uiz_)}},{key:"z2_",value:function(e){this._rotationInvoke(e,this._ui.uiz2_)}},{key:"_rotationInvoke",value:function(e,t){t.bind(this._ui)()}},{key:"destroy",value:function(){}},{key:"_updateUiFaces",value:function(){}},{key:"_transitionEnd",value:function(e){var t=this,i=e.currentTarget;this._config.isTransitionEnabled&&i&&!function(){var e=i.style.transition;i.style.transition="0s",(0,l.nextFrame)(function(s){t._updateUiFaces(),i.style.transformOrigin="",i.style.transform=e,(0,l.rAF)(function(s){i.style.transition=e;var n=t.getState();n.rotateEnabled=!0,t._setState(n),t._triggerEvent("afterrotate",{state:n})})})}()}},{key:"init",value:function(){this._cubeElements=[""],this._touchElements=[""],this._displayElements=[""];for(var e=1;e<=d.CUBE_COUNT;e++){var t=(0,u.qs)(".cubetwo-cube-"+e,this._cubeComponentEl),i=(0,u.qs)('[data-type="cubetwo-touch"]',t),s=(0,u.qs)('[data-type="cubetwo-display"]',t);this._cubeElements.push(t),this._displayElements.push(s),this._touchElements.push(i)}(0,c.default)(this._cubeElements),(0,c.default)(this._touchElements),(0,c.default)(this._displayElements),this._ui=new h.CubeTwoUi(this._displayElements);for(var e=1;e<=d.CUBE_COUNT;e++){var n=this._displayElements[e];n&&n.addEventListener("transitionend",this._transitionEnd)}p.setupCube1.bind(this)(),p.setupCube2.bind(this)(),p.setupCube3.bind(this)(),p.setupCube4.bind(this)(),p.setupCube5.bind(this)(),p.setupCube6.bind(this)(),p.setupCube7.bind(this)(),p.setupCube8.bind(this)(),this._updateUiFaces(),this._cubeElements[1].addEventListener("keydown",this._handleKeyEventCube1,!1),this._cubeElements[2].addEventListener("keydown",this._handleKeyEventCube2,!1),this._cubeElements[3].addEventListener("keydown",this._handleKeyEventCube3,!1),this._cubeElements[4].addEventListener("keydown",this._handleKeyEventCube4,!1),this._cubeElements[5].addEventListener("keydown",this._handleKeyEventCube5,!1),this._cubeElements[6].addEventListener("keydown",this._handleKeyEventCube6,!1),this._cubeElements[7].addEventListener("keydown",this._handleKeyEventCube7,!1),this._cubeElements[8].addEventListener("keydown",this._handleKeyEventCube8,!1),this._triggerEvent("init",{state:this.getState()})}},{key:"_updateUiFaces",value:function(){}},{key:"_handleKeyEventCube1",value:function(e){switch(e.stopPropagation(),e.keyCode){case w.KEY.LEFT:case w.KEY.a:this.U();break;case w.KEY.UP:e.preventDefault();case w.KEY.w:this.L_();break;case w.KEY.RIGHT:case w.KEY.d:this.U_();break;case w.KEY.DOWN:e.preventDefault();case w.KEY.s:this.L();break;case w.KEY.q:this.F_();break;case w.KEY.e:this.F();break;case w.KEY.x:this.x();break;case w.KEY.y:this.y();break;case w.KEY.z:this.z()}}},{key:"_handleKeyEventCube2",value:function(e){switch(e.stopPropagation(),e.keyCode){case w.KEY.LEFT:case w.KEY.a:this.U();break;case w.KEY.UP:e.preventDefault();case w.KEY.w:this.R();break;case w.KEY.RIGHT:case w.KEY.d:this.U_();break;case w.KEY.DOWN:e.preventDefault();case w.KEY.s:this.R_();break;case w.KEY.q:this.F_();break;case w.KEY.e:this.F();break;case w.KEY.x:this.x();break;case w.KEY.y:this.y();break;case w.KEY.z:this.z()}}},{key:"_handleKeyEventCube3",value:function(e){switch(e.stopPropagation(),e.keyCode){case w.KEY.LEFT:case w.KEY.a:this.D_();break;case w.KEY.UP:e.preventDefault();case w.KEY.w:this.L_();break;case w.KEY.RIGHT:case w.KEY.d:this.D();break;case w.KEY.DOWN:e.preventDefault();case w.KEY.s:this.L();break;case w.KEY.q:this.F_();break;case w.KEY.e:this.F();break;case w.KEY.x:this.x();break;case w.KEY.y:this.y();break;case w.KEY.z:this.z()}}},{key:"_handleKeyEventCube4",value:function(e){switch(e.stopPropagation(),e.keyCode){case w.KEY.LEFT:case w.KEY.a:this.D_();break;case w.KEY.UP:e.preventDefault();case w.KEY.w:this.R();break;case w.KEY.RIGHT:case w.KEY.d:this.D();break;case w.KEY.DOWN:e.preventDefault();case w.KEY.s:this.R_();break;case w.KEY.q:this.F_();break;case w.KEY.e:this.F();break;case w.KEY.x:this.x();break;case w.KEY.y:this.y();break;case w.KEY.z:this.z()}}},{key:"_handleKeyEventCube5",value:function(e){switch(e.stopPropagation(),e.keyCode){case w.KEY.LEFT:case w.KEY.a:this.U();break;case w.KEY.UP:e.preventDefault();case w.KEY.w:this.L_();break;case w.KEY.RIGHT:case w.KEY.d:this.U_();break;case w.KEY.DOWN:e.preventDefault();case w.KEY.s:this.L();break;case w.KEY.q:this.B();break;case w.KEY.e:this.B_();break;case w.KEY.x:this.x();break;case w.KEY.y:this.y();break;case w.KEY.z:this.z()}}},{key:"_handleKeyEventCube6",value:function(e){switch(e.stopPropagation(),e.keyCode){case w.KEY.LEFT:case w.KEY.a:this.U();break;case w.KEY.UP:e.preventDefault();case w.KEY.w:this.R();break;case w.KEY.RIGHT:case w.KEY.d:this.U_();break;case w.KEY.DOWN:e.preventDefault();case w.KEY.s:this.R_();break;case w.KEY.q:this.B();break;case w.KEY.e:this.B_();break;case w.KEY.x:this.x();break;case w.KEY.y:this.y();break;case w.KEY.z:this.z()}}},{key:"_handleKeyEventCube7",value:function(e){switch(e.stopPropagation(),e.keyCode){case w.KEY.LEFT:case w.KEY.a:this.D_();break;case w.KEY.UP:e.preventDefault();case w.KEY.w:this.L_();break;case w.KEY.RIGHT:case w.KEY.d:this.D();break;case w.KEY.DOWN:e.preventDefault();case w.KEY.s:this.L();break;case w.KEY.q:this.B();break;case w.KEY.e:this.B_();break;case w.KEY.x:this.x();break;case w.KEY.y:this.y();break;case w.KEY.z:this.z()}}},{key:"_handleKeyEventCube8",value:function(e){switch(e.stopPropagation(),e.keyCode){case w.KEY.LEFT:case w.KEY.a:this.D_();break;case w.KEY.UP:e.preventDefault();case w.KEY.w:this.R();break;case w.KEY.RIGHT:case w.KEY.d:this.D();break;case w.KEY.DOWN:e.preventDefault();case w.KEY.s:this.R_();break;case w.KEY.q:this.B();break;case w.KEY.e:this.B_();break;case w.KEY.x:this.x();break;case w.KEY.y:this.y();break;case w.KEY.z:this.z()}}},{key:"handleGlobalKeyEvent",value:function(e){switch(e.keyCode){case w.KEY.LEFT:case w.KEY.a:this.y_();break;case w.KEY.UP:e.preventDefault();case w.KEY.w:case w.KEY.x:this.x();break;case w.KEY.RIGHT:case w.KEY.d:case w.KEY.y:this.y();break;case w.KEY.DOWN:e.preventDefault();case w.KEY.s:this.x_();break;case w.KEY.q:this.z_();break;case w.KEY.e:case w.KEY.z:this.z()}}}]),e}();t.CubeTwo=_},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=i(10);Object.defineProperty(t,"CubeTwo",{enumerable:!0,get:function(){return s.CubeTwo}})},function(e,t,i){"use strict";function s(e){window.requestAnimationFrame(e)}function n(e){window.requestAnimationFrame(function(t){window.requestAnimationFrame(e)})}function a(e){return e[0]}function r(e){return e[1]}function u(e){return h.OPPOSITE[o(e)]}function o(e){return h.LEFT[e]}function c(e){return h.OPPOSITE[e[0]]}function l(e){return h.OPPOSITE[e[1]]}function p(e){return Object.assign({},e)}function d(){var e=h.STATES_ARRAY;this.first=h.STATES_ARRAY[0],this.last=h.STATES_ARRAY[h.STATES_ARRAY.length-1],this.stateCount=e.length,this.get=function(t){var i=e.indexOf(t);if(i>=0)return i===e.length-1?{state:e[0],index:0}:{state:e[i+1],index:i+1
}}}Object.defineProperty(t,"__esModule",{value:!0}),t.nextState=void 0,t.rAF=s,t.nextFrame=n,t.getUp=a,t.getFront=r,t.getRight=u,t.getLeft=o,t.getDown=c,t.getBack=l,t.cloneObject=p;var h=i(2),w=(i(1),new d);t.nextState=w},function(e,t){e.exports=Hammer}]);