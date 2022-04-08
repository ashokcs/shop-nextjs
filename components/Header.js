import Link from 'next/link';

const styling = {
	fontSize: 30,
	margin: 30,
	paddingBottom: 30
};

const right = {
	float: 'right',
	marginLeft: 100,
	textDecoration: 'none',
	fontSize: 50,
};

const Header = () => (
	<div>
		<div style={ styling } >
			<Link href="/">
				<a style={ styling }>Home</a>
			</Link>
			<Link href="./About">
				<a style={ styling }>About</a>
			</Link>
			<Link href="./Contact">
				<a style={ styling }>Contact Us</a>
			</Link>
			<Link href="" style={ right } >
				<a style={ right }>Shoppers Stop</a>
			</Link>
		</div>
	</div>
);

export default Header;
