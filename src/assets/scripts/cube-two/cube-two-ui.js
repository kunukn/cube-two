import { CUBE_SIZE } from './cube-two-constants';
import { debug, log, error } from '../logger';


export class CubeTwoUi {

    constructor(displayElements) {
        this.displayElements = displayElements;
    }

    uiF_Helper(angle) {
        this.displayElements[1].style.transformOrigin = `100% 100%`;
        this.displayElements[2].style.transformOrigin = `0% 100%`;
        this.displayElements[3].style.transformOrigin = `100% 0%`;
        this.displayElements[4].style.transformOrigin = `0% 0%`;

        this.displayElements[1].style.transform = `rotateZ(${angle}deg)`;
        this.displayElements[2].style.transform = `rotateZ(${angle}deg)`;
        this.displayElements[3].style.transform = `rotateZ(${angle}deg)`;
        this.displayElements[4].style.transform = `rotateZ(${angle}deg)`;
    }
    uiF() {
        this.uiF_Helper('90');
    }
    uiF_() {
        this.uiF_Helper('-90');
    }
    uiF2() {
        this.uiF_Helper('180');
    }
    uiF2_() {
        this.uiF_Helper('-180');
    }

    uiB_Helper(angle) {
        this.displayElements[5].style.transformOrigin = `100% 100%`;
        this.displayElements[6].style.transformOrigin = `0% 100%`;
        this.displayElements[7].style.transformOrigin = `100% 0%`;
        this.displayElements[8].style.transformOrigin = `0% 0%`;

        this.displayElements[5].style.transform = `rotateZ(${angle}deg)`;
        this.displayElements[6].style.transform = `rotateZ(${angle}deg)`;
        this.displayElements[7].style.transform = `rotateZ(${angle}deg)`;
        this.displayElements[8].style.transform = `rotateZ(${angle}deg)`;
    }
    uiB() {
        this.uiB_Helper('-90');
    }
    uiB_() {
        this.uiB_Helper('90');
    }
    uiB2() {
        this.uiB_Helper('-180');
    }
    uiB2_() {
        this.uiB_Helper('180');
    }


    uiU_Helper(angle) {
        this.displayElements[1].style.transformOrigin = `100% 0%`;
        this.displayElements[2].style.transformOrigin = `0% 0%`;
        this.displayElements[5].style.transformOrigin = `100% 0% ${CUBE_SIZE}`;
        this.displayElements[6].style.transformOrigin = `0% 0% ${CUBE_SIZE}`;

        this.displayElements[1].style.transform = `rotateY(${angle}deg)`;
        this.displayElements[2].style.transform = `rotateY(${angle}deg)`;
        this.displayElements[5].style.transform = `rotateY(${angle}deg)`;
        this.displayElements[6].style.transform = `rotateY(${angle}deg)`;
    }
    uiU() {
        this.uiU_Helper('-90');
    }
    uiU_() {
        this.uiU_Helper('90');
    }
    uiU2() {
        this.uiU_Helper('-180');
    }
    uiU2_() {
        this.uiU_Helper('180');
    }


    uiD_Helper(angle) {
        this.displayElements[3].style.transformOrigin = `100% 0%`;
        this.displayElements[4].style.transformOrigin = `0% 0%`;
        this.displayElements[7].style.transformOrigin = `100% 0% ${CUBE_SIZE}`;
        this.displayElements[8].style.transformOrigin = `0% 0% ${CUBE_SIZE}`;

        this.displayElements[3].style.transform = `rotateY(${angle}deg)`;
        this.displayElements[4].style.transform = `rotateY(${angle}deg)`;
        this.displayElements[7].style.transform = `rotateY(${angle}deg)`;
        this.displayElements[8].style.transform = `rotateY(${angle}deg)`;
    }
    uiD() {
        this.uiD_Helper('90');
    }
    uiD_() {
        this.uiD_Helper('-90');
    }
    uiD2() {
        this.uiD_Helper('180');
    }
    uiD2_() {
        this.uiD_Helper('-180');
    }

    uiR_Helper(angle) {
        this.displayElements[2].style.transformOrigin = `0% 100%`;
        this.displayElements[6].style.transformOrigin = `0% 100% ${CUBE_SIZE}`;
        this.displayElements[8].style.transformOrigin = `0% 0% ${CUBE_SIZE}`;
        this.displayElements[4].style.transformOrigin = `0% 0%`;

        this.displayElements[2].style.transform = `rotateX(${angle}deg)`;
        this.displayElements[6].style.transform = `rotateX(${angle}deg)`;
        this.displayElements[8].style.transform = `rotateX(${angle}deg)`;
        this.displayElements[4].style.transform = `rotateX(${angle}deg)`;
    }
    uiR() {
        this.uiR_Helper('90');
    }
    uiR_() {
        this.uiR_Helper('-90');
    }
    uiR2() {
        this.uiR_Helper('180');
    }
    uiR2_() {
        this.uiR_Helper('-180');
    }

    uiL_Helper(angle) {
        this.displayElements[1].style.transformOrigin = `0% 100%`;
        this.displayElements[5].style.transformOrigin = `0% 100% ${CUBE_SIZE}`;
        this.displayElements[7].style.transformOrigin = `0% 0% ${CUBE_SIZE}`;
        this.displayElements[3].style.transformOrigin = `0% 0%`;

        this.displayElements[1].style.transform = `rotateX(${angle}deg)`;
        this.displayElements[5].style.transform = `rotateX(${angle}deg)`;
        this.displayElements[7].style.transform = `rotateX(${angle}deg)`;
        this.displayElements[3].style.transform = `rotateX(${angle}deg)`;
    }
    uiL() {
        this.uiL_Helper('-90');
    }
    uiL_() {
        this.uiL_Helper('90');
    }
    uiL2() {
        this.uiL_Helper('-180');
    }
    uiL2_() {
        this.uiL_Helper('180');
    }

    uix() {
        this.uiR();
        this.uiL_();
    }
    uix_() {
        this.uiR_();
        this.uiL();
    }
    uix2() {
        this.uiR2();
        this.uiL2_();
    }
    uix2_() {
        this.uiR2_();
        this.uiL2();
    }

    uiy() {
        this.uiU_();
        this.uiD();
    }
    uiy_() {
        this.uiU();
        this.uiD_();
    }
    uiy2() {
        this.uiU2_();
        this.uiD2();
    }
    uiy2_() {
        this.uiU2();
        this.uiD2_();
    }

    uiz() {
        this.uiF();
        this.uiB_();
    }
    uiz_() {
        this.uiF_();
        this.uiB();
    }
    uiz2() {
        this.uiF2();
        this.uiB2_();
    }
    uiz2_() {
        this.uiF2_();
        this.uiB2();
    }
}