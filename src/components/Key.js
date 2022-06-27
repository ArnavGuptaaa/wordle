import GameContext from '../context/GameContext';
import { useContext } from 'react';

const Key = ({ letter }) => {
	const {
		attempts,
		attemptNumber,
		currentIndex,
		setCurrentIndex,
		checkSubmission,
	} = useContext(GameContext);

	const handleClick = (letter) => {
		if (letter.toUpperCase() === 'ENTER') {
			checkSubmission();
		} else if (letter.toUpperCase() === 'BACK') {
			if (currentIndex > 0) {
				setCurrentIndex(currentIndex - 1);
				attempts[attemptNumber][currentIndex - 1] = '';
			}
		} else {
			if (currentIndex < 5) {
				attempts[attemptNumber][currentIndex] = letter;
				setCurrentIndex(currentIndex + 1);
			}
		}
	};

	return (
		<div
			className="key"
			id={`key_${letter}`}
			onClick={() => handleClick(letter)}
		>
			<p>{letter.toUpperCase()}</p>
		</div>
	);
};

export default Key;
