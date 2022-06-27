const Letter = ({ letter }) => {
	return (
		<div className="letter">
			<p>{letter.toUpperCase()}</p>
		</div>
	);
};

export default Letter;
