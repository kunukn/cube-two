# Cube Two

## Pocket Cube - Rubiks Cube 2x2x2 on web platform


## Browser support

| <img src="https://cdnjs.cloudflare.com/ajax/libs/browser-logos/37.2.0/archive/chrome-android_18-36/chrome-android_18-36_128x128.png" width="48px" height="48px" alt="Chrome logo"> | <img src="https://cdnjs.cloudflare.com/ajax/libs/browser-logos/37.2.0/archive/opera_10-14/opera_10-14_128x128.png" width="48px" height="48px" alt="Opera logo"> | <img src="https://cdnjs.cloudflare.com/ajax/libs/browser-logos/37.2.0/archive/safari_1-7/safari_1-7_128x128.png" width="48px" height="48px" alt="Safari logo"> | <img src="https://cdnjs.cloudflare.com/ajax/libs/browser-logos/37.2.0/edge/edge_128x128.png" width="48px" height="48px" alt="Edge logo"> | <img src="https://cdnjs.cloudflare.com/ajax/libs/browser-logos/37.2.0/archive/firefox_1.5-3/firefox_1.5-3.svg" width="48px" height="48px" alt="Firefox logo"> 
|:---:|:---:|:---:|:---:|:---:|
| 50+ ✅ | 40+ ✅ | 9+ ✅ |12+ ✅ |49+ ✅ |


## Demo

http://codepen.io/kunukn/pen/EgzJdR/

![demo](/demo/pocket-cube.gif?raw=true)


## Getting started
```
npm install

npm start

start a browser and go to http://localhost:3456/
```
## Configuration
```javascript
    var imgPath = 'http://your-cdn-url/image.svg';

    var cubetwo = new window.CubeTwo({
    
        cubeComponent: document.getElementById('cubetwo-component-1'), /* required */
        
        isTapEnabled: true, /* default: true */
        
        isRotateAnimationEnabled: true, /* default: true */
        
        borderOnTheCube: true, /* default: true */
        
        backgroundBlendModeOnTheCube: 'multiply', 
        
        /* e.g. screen, difference, normal, default: multiply */
        
        backfaceVisibilityHiddenOnTheCube: false, /* default: false */
        
        transition: 'transform cubic-bezier(0.4, 0.0, 0.2, 1) 190ms', /* optional */
        
        backgroundImages: { /* optional */
            u: imgPath,
            d: imgPath,
            f: imgPath,
            b: imgPath,
            r: imgPath,
            l: imgPath,
        },
        
        backgroundColors: { /* optional */
            u: 'rgba(255, 255, 255, .9)',
            d: 'rgba(255, 213, 0, .9)',
            f: 'rgba(0, 158, 96, .9)',
            b: 'rgba(0, 81, 186, .9)',
            r: 'rgba(196, 30, 58, .9)',
            l: 'rgba(255, 88, 0, .9)',
            backface: 'transparent',
        },
        
        cubeSize: { /* optional */
            value: 25,
            unit: 'vmin',
        }
    });
    
    cubetwo.addCallbackForEvent('init', (eventname, payload) => {});
    cubetwo.addCallbackForEvent('statechange', (eventname, payload) => {});
    cubetwo.addCallbackForEvent('beforerotate', (eventname, payload) => {});
    cubetwo.addCallbackForEvent('afterrotate', (eventname, payload) => {});
    cubetwo.addCallbackForEvent('issolved', (eventname, payload) => {});
    
    cubetwo.init();
```

## Edge browser support

To support Edge browser you must set a specific cube size, e.g.

```javascript
var cubetwo = new window.CubeTwo({
        cubeComponent: document.getElementById('cubetwo-component-1'),        
        
        cubeSize: {
            value: 80,
            unit: 'px',
        }
});
```


## Bugs

* Safari - transform-origin in z axis seems buggy, this has been avoided by not using it.
* Firefox - glitchy cube display, it has 3D order issue
* Edge - vmin and 3d doesn't work properly.
