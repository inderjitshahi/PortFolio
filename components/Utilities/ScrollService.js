import { TOTAL_SCREENS } from "./CommonUtilities";
import { Subject } from 'rxjs';
import React from 'react';

export default class ScrollService {
    static scrollHandler = new ScrollService();

    static currentScreenBroadCaster = new Subject();
    static currentScreenFadeIn = new Subject();

    constructor() {
        window.addEventListener('scroll', this.checkCurrentScreenUnderViewport);
    }

    scrollToHireMe = () => {
        let contactMeScreen = document.getElementById("Contact Me");
        if (!contactMeScreen) return;
        contactMeScreen.scrollIntoView({ behavior: "smooth" });
    }

    scrollToHome = () => {
        let homeScreen = document.getElementById("Home");
        if (homeScreen) return;
        homeScreen.scrollIntoView({ behavior: "smooth" });
    }

    isElementInView = (ele, type) => {
        let rec = ele.getBoundingClientReact();
        console.log(rec);
        let eleTop = rec.top;
        let eleBottom = rec.Bottom;

        let partiallyVisible = eleTop < window.innerHeight && eleBottom >= 0;
        let completelyVisible = eleTop >= 0 && eleBottom <= window.innerHeight;

        switch (type) {
            case "partially":
                return partiallyVisible;
            case "complete":
                return completelyVisible;
            default:
                return false;
        }

    };

    checkCurrentScreenUnderViewport = (e) => {
        if (!e || Object.keys(e).length < 1) return;
        for (let screen of TOTAL_SCREENS) {
            let screenFromDOM = document.getElementById(screen.screen_name);
            if (!screenFromDOM) continue;

            let fullyVisible = this.isElementInView(screenFromDOM, "complete");
            let partiallyVisible = this.isElementInView(screenFromDOM, "partially");

            if (fullyVisible || partiallyVisible) {
                if (partiallyVisible && !screen.alreadyRendered) {
                    ScrollService.currentScreenFadeIn.next({
                        fadeInScreen: screen.screen_name,
                    });
                    screen['alreadyRendered'] = true;
                    break;
                }
                if (fullyVisible) {
                    ScrollService.currentScreenBroadCaster.next({
                        screenInVies: screen.screen_name,
                    });
                    break;
                }
            }
        }
    }


};