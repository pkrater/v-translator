import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Header from './header';
import About from '../routes/about';
import Translate from '../routes/translate';
// import Home from 'async!../routes/home';
// import Profile from 'async!../routes/profile';

export default class App extends Component {
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<div id="app">
				<Header />
				<Router onChange={this.handleRoute}>
					<Translate path="/" />
					<About path="/about" />
				</Router>
			</div>
		);
	}
}
