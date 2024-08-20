import Feedback, { IS_BROWSER } from './feedback.js'
export default Feedback

const detect = () => {
	window.addEventListener('DOMContentLoaded', () => {
		// Initialize the widget and attach styles
		window.feedback = new Feedback({'emailField': false, 'forceShowButton': true})
                console.log("FEEDBACK: DOMContentLoaded disparado");

		// Render the default button
		if (window.feedback.options.forceShowButton) {
                        console.log("FEEDBACK: Render button delegado");
			window.feedback.renderButton()
		}
	})
}

if (IS_BROWSER) {
	detect()
} else {
	console.warn('[feedback-js] Detected environment without a `window` object')
}
