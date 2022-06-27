import Navbar from './components/Navbar';
import GameBoard from './components/GameBoard';
import Footer from './components/Footer';
import GameContext from './context/GameContext';
import words from './data/data';

import { useEffect, useState } from 'react';
import Modal from 'react-modal';

function App() {
	const [word, setWord] = useState('');
	const [currentIndex, setCurrentIndex] = useState(0);
	const [attemptNumber, setAttemptNumber] = useState(0);
	const [attempts, setAttempts] = useState([
		['', '', '', '', ''],
		['', '', '', '', ''],
		['', '', '', '', ''],
		['', '', '', '', ''],
		['', '', '', '', ''],
	]);
	const [modalIsOpen, setIsModalOpen] = useState(false);

	useEffect(() => {
		newGame();
	}, []);

	const newGame = () => {
		// Choose a random word from word array
		setWord(words[Math.floor(Math.random() * words.length)].toLowerCase());
		setAttempts([
			['', '', '', '', ''],
			['', '', '', '', ''],
			['', '', '', '', ''],
			['', '', '', '', ''],
			['', '', '', '', ''],
		]);
		setAttemptNumber(0);
		setCurrentIndex(0);

		for (let i = 0; i < attempts[attemptNumber].length; i++) {
			for (let j = 0; j < 5; j++) {
				const letter = document.querySelector(
					`.input__row:nth-child(${i + 1}) .letter:nth-child(${j + 1}`
				);

				letter.classList.remove('correct');
				letter.classList.remove('incorrect');
				letter.classList.remove('position');
				letter.classList.remove('animation');
			}
		}
	};

	const checkSubmission = () => {
		let wordCopy = word.slice();
		const submission = attempts[attemptNumber].join('');
		const rows = document.querySelectorAll(
			`.input__row:nth-child(${attemptNumber + 1}) .letter`
		);

		if (!(currentIndex === 5)) {
			return;
		}

		// apply animation classes
		rows.forEach((row) => {
			row.classList.add('animation');
		});

		// first check for perfect matches
		for (let i = 0; i < attempts[attemptNumber].length; i++) {
			const letter = document.querySelector(
				`.input__row:nth-child(${attemptNumber + 1}) .letter:nth-child(${i + 1}`
			);

			if (submission[i] === word[i]) {
				letter.classList.add('correct');
				wordCopy = wordCopy.substring(0, i) + ' ' + wordCopy.substring(i + 1);
			}
		}

		// Check for wrong position and incorrect guesses
		for (let i = 0; i < attempts[attemptNumber].length; i++) {
			const letter = document.querySelector(
				`.input__row:nth-child(${attemptNumber + 1}) .letter:nth-child(${i + 1}`
			);

			if (wordCopy.includes(submission[i])) letter.classList.add('position');
			else if (wordCopy[i] !== ' ') letter.classList.add('incorrect');
		}

		if (wordCopy === '     ') {
			setTimeout(() => {
				setIsModalOpen(true);
			}, 600);

			return;
		}

		if (attemptNumber + 1 === 5) {
			setTimeout(() => {
				setIsModalOpen(true);
			}, 600);
		} else {
			setAttemptNumber(attemptNumber + 1);
			setCurrentIndex(0);
		}
	};

	Modal.setAppElement('#root');

	return (
		<>
			<GameContext.Provider
				value={{
					word,
					setWord,
					attempts,
					setAttempts,
					attemptNumber,
					setAttemptNumber,
					currentIndex,
					setCurrentIndex,
					checkSubmission,
				}}
			>
				<Modal
					isOpen={modalIsOpen}
					onRequestClose={() => setIsModalOpen(false)}
					onAfterClose={newGame}
					className="modal"
					overlayClassName="overlay"
				>
					<h1 className="modal__title">GAME OVER!</h1>

					<div className="modal__buttons">
						<button>
							<a
								href="https://github.com/ArnavGuptaaa"
								target="_blank"
								rel="noreferrer"
							>
								visit repository
							</a>
						</button>

						<button
							onClick={() => {
								setIsModalOpen(false);
							}}
						>
							New Game
						</button>
					</div>
				</Modal>
				<Navbar />
				<GameBoard />
				<Footer />
			</GameContext.Provider>
		</>
	);
}

export default App;
