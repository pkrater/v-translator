import { h, Component } from 'preact';
import style from './style';

export default class Translator extends Component {
	state = {
		inputValue: '',
		letters: [
			'a',
			'b',
			'c',
			'd',
			'e',
			'f',
			'g',
			'h',
			'i',
			'j',
			'k',
			'l',
			'm',
			'n',
			'o',
			'p',
			'q',
			'r',
			's',
			't',
			'u',
			'v',
			'w',
			'x',
			'y',
			'z',
			'å',
			'ä',
			'ö'
		]
	};

	translate(term = 'abc') {
		let n = term
		    .toLowerCase()
			.split('')
			.map(letter => this.state.letters.indexOf(letter))
			.map(
				i =>
					i !== 28
						? i === -1 ? ' ' : this.state.letters[i + 1]
						: this.state.letters[0]
			);
		return <div class={style.result}>{n}</div>;
	}

	updateInputValue(evt) {
		this.setState({
			inputValue: evt.target.value
		});
	}

	render() {
		return (
			<div>
				<input type="text"
					value={this.state.inputValue}
					onKeyUp={evt => this.updateInputValue(evt)}
				/>
				{this.translate(this.state.inputValue)}
			</div>
		);
	}
}
