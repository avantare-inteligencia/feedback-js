import Feedback, { IS_BROWSER } from './feedback.js'
export default Feedback

const detect = () => {
	window.addEventListener('load', () => {
		// Initialize the widget and attach styles
		window.feedback = new Feedback({'emailField': false, 'forceShowButton': true})

		// Render the default button
		if (window.feedback.options.forceShowButton) {
			window.feedback.renderButton()
		}
	})
}

if (IS_BROWSER) {
	detect()
} else {
	console.warn('[feedback-js] Detected environment without a `window` object')
}
