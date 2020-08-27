import A11yRadioUtility from "../accessible-states/src/A11yRadioUtility";
import A11yModalUtility from "../accessible-modals/src/A11yModalUtility";

export default class A11yCore {
    a11yRadioUtil: A11yRadioUtility = new A11yRadioUtility();
    a11yModalManager: A11yModalUtility = new A11yModalUtility();
}

declare global {
    interface Window { a11yCore: A11yCore; }
}

window.addEventListener("DOMContentLoaded", () => {
    if (!window.a11yCore) {
        window.a11yCore = new A11yCore();
    }
})