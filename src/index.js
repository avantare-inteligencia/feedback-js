import Feedback, { IS_BROWSER } from './feedback.js'
export default Feedback

const detect = () => {
    console.log("FEEDBACK: Detect acionado");
    window.feedback = new Feedback({'emailField': false, 'forceShowButton': true})
    console.log("FEEDBACK: Feedback criado");

    /*
    // Render the default button
    if (window.feedback.options.forceShowButton) {
        console.log("FEEDBACK: Render button delegado");
        window.feedback.renderButton()
    }
    */
}

console.log("FEEDBACK: Entrada no script");
detect();
