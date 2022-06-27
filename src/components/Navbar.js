import { BsGithub } from 'react-icons/bs';

const Navbar = () => {
	return (
		<nav className="nav">
			<div></div>
			<h1 className="nav__title">Wordle</h1>
			<a
				href="https://github.com/ArnavGuptaaa"
				target="_blank"
				rel="noreferrer"
				className="nav__github"
			>
				<BsGithub size={30} />
			</a>
		</nav>
	);
};

export default Navbar;
