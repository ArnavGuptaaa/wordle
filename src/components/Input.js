import { useContext } from 'react';
import GameContext from '../context/GameContext';

import Letter from './Letter';

const Input = () => {
	const { attempts } = useContext(GameContext);

	return (
		<div className="input">
			{attempts.map((row) => (
				<div className="input__row">
					{row.map((letter) => (
						<Letter letter={letter} />
					))}
				</div>
			))}
		</div>
	);
};

export default Input;
