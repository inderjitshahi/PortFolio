import Home from "../Home/Home";
import AboutMe from "../AboutMe/AboutMe";
import Resume from "../Resume/Resume";
import ContactMe from "../ContactMe/ContactMe";
import Footer from "../Footer/Footer";

export const TOTAL_SCREENS = [
    {
        screen_name: "Home",
        Component: Home,
    },
    {
        screen_name: "About Me",
        Component: AboutMe,
    },
    {
        screen_name: "Resume",
        Component: Resume,
    },
    {
        screen_name: "ContactMe",
        Component: ContactMe,
    },
    {
        screen_name: "Footer",
        Component: Footer,
    },
]

export const GET_SCREEN_INDEX = (screen_name) => {
    const index = TOTAL_SCREENS.findIndex(ele => ele.screen_name === screen_name);
    return index;
}