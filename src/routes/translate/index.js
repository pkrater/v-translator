import { h, Component } from 'preact';
import style from './style';
import Translator  from '../../components/translator';

export default class Translate extends Component {
	

	render() {
		return (
			<div class={style.translate}>
				<h1>Magiska översättaren</h1>
				<p>Skriv in ordet du vill översätta.</p>
				<div>
					<Translator />
				</div>
				
			</div>
		);
	}
}
