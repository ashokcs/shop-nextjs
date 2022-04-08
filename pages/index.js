import Layout from '../components/Layout.js'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

const Index = (props) => (
	<Layout>
		<div className="gallery">
		{props.products.map(data => (
				<li className="items_li" key={data.id}>
					<a href={data.image} data-lightbox="mygallery">
            			<img className="thumbnail_image" src={data.image} width="100" height="100"/>
					</a>

					<p></p>

					<Link  as={`/p/${data.id}`} href={`/post?id=${data.id}`}>
							<a >{data.title}</a>
					</Link>

				</li>
		))}
		</div>

		<style jsx>{`

		h1, a {
			font-family: "Arial";
			color: 'red'
			opacity: 0.9;
		}

			ul {
			padding: 0;
		}

			li {
			list-style: none;
			margin: 5px 0;
		}

		a {
			text-decoration: none;
			color: blue;
		}
		
		a:hover {
			opacity: 0.6;
		}

		.gallery {
			margin: 10px 40px;
			display: grid;
			grid-template-columns: repeat(4, 1fr);
			grid-template-rows: repeat(6, 10vw);
			grid-gap: 125px;
			border-top-style: dotted;
		}


		.thumbnail_image{
			border-radius: 20px;
		}
		
		.items_li{
			padding: 100px 0 ;
			margin: 100px 0;
		}

        .gallery img {
            width: 150px;
            height: 150px;
            transition: 1s;
			padding: 15px;
        }
         
        .gallery img:hover {
            filter: drop-shadow(4px 4px 6px gray);
            transform: scale(2.1);
		}

		* {
			box-sizing: border-box;
		  }
		.column {
			float: left;
			margin:300px;
			width: 30%;
			padding: 1000px;
		}

		.row:after {
			content: "";
			display: table;
			clear: both;
		}

		`}
		</style>
	</Layout>
);

Index.getInitialProps = async function() {
	const res = await fetch('https://fakestoreapi.com/products');
	const data = await res.json();

	console.log(`Show data fetched. Count: ${data.length}`);

	return {
		products: data
	}
};

export default Index