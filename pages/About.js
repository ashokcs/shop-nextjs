import Layout from "../components/Layout";

const styling = {
	width: '100%',
	height: '400px'
};

const textAlignCenterStyling = {
	textAlign: 'center'
}

export default function About() {
	return (
		<Layout>
			<div>
			<div className="about-section">
  <h1>About Us</h1>
  <p>We are a small office and home like office, located in New York City.</p>
  <p>But we are growing fast, checkout our Careers page if you would like to join us.</p>
</div>

<h2 style={ textAlignCenterStyling }>Our Team</h2>
<div className="row">
  <div className="column">
    <div className="card">
      <img src="https://images.unsplash.com/photo-1531539134685-27d854339120?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80" alt="Jane" style= { styling } />
      <div className="container">
        <h2>Pavika ash</h2>
        <p className="title">CEO</p>
        <p>We believe in not only developing professionals, but cultivating individuals that have purpose and are energized by their task	.</p>
        <p>pavika@example.com</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div className="column">
    <div className="card">
      <img src="https://images.unsplash.com/photo-1580894908361-967195033215?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80" alt="Mike" style= { styling } />
      <div className="container">
        <h2>Jomy Ross</h2>
        <p className="title">Director</p>
        <p>Join us if you wish to make revolution in the world.</p>
        <p>jomy@example.com</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div>
  
  <div className="column">
    <div className="card">
      <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2669&q=80" alt="John" style= { styling } />
      <div className="container">
        <h2>Malina Gau</h2>
        <p className="title">Designer</p>
        <p>Reimage the business with us.</p>
        <p>malina@example.com</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div>
</div>
<style jsx>{`
				body {
					font-family: Arial, Helvetica, sans-serif;
					margin: 0;
				  }
				  
				  html {
					box-sizing: border-box;
				  }
				  
				  *, *:before, *:after {
					box-sizing: inherit;
				  }
				  
				  .column {
					float: left;
					width: 32%;
					margin-bottom: 16px;
					padding: 0 8px;
				  }
				  
				  .card {
					box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
					margin: 8px;
				  }
				  
				  .about-section {
					padding: 50px;
					text-align: center;
					background-color: #474e5d;
					color: white;
				  }
				  
				  .container {
					padding: 0 16px;
				  }
				  
				  .container::after, .row::after {
					content: "";
					clear: both;
					display: table;
				  }
				  
				  .title {
					color: grey;
				  }
				  
				  .button {
					border: none;
					outline: 0;
					display: inline-block;
					padding: 8px;
					color: white;
					background-color: #000;
					text-align: center;
					cursor: pointer;
					width: 100%;
				  }
				  
				  .button:hover {
					background-color: #555;
				  }
				  
				  @media screen and (max-width: 650px) {
					.column {
					  width: 100%;
					  display: block;
					}
				  }`}
				  </style>
			</div>
		</Layout>
	)
};
