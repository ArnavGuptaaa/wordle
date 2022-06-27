import Key from './Key';

const Keyboard = () => {
	const row1 = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
	const row2 = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
	const row3 = ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'BACK'];

	return (
		<div className="keyboard">
			<div className="keyboard__row">
				{row1.map((letter) => (
					<Key letter={letter.toLowerCase()} />
				))}
			</div>
			<div className="keyboard__row">
				{row2.map((letter) => (
					<Key letter={letter.toLowerCase()} />
				))}
			</div>
			<div className="keyboard__row">
				{row3.map((letter) => (
					<Key letter={letter.toLowerCase()} />
				))}
			</div>
		</div>
	);
};

export default Keyboard;
