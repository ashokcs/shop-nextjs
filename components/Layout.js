import Header from './Header'

const styling = {
	margin: 100,
	padding: 20,
	border: '3px solid #F1DDBF'
};

const Layout = props => (
	<div style={styling}>
		<Header />
		{props.children}
	</div>
);

export default Layout
