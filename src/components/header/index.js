import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

export default class Header extends Component {
	render() {
		return (
			<header class={style.header}>
				<h1>Översättaren</h1>
				<nav>
					<Link activeClassName={style.active} href="/">Översättaren</Link>
					<Link activeClassName={style.active} href="/about">Om</Link>
				</nav>
			</header>
		);
	}
}
