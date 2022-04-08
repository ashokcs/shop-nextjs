import { withRouter } from 'next/router';
import Layout from '../components/Layout';

const Content = withRouter( props => (
	<div>
		<h1>{ props.router.query.title }</h1>
				<div className="card">
  						<h2>Contact Us</h2>
  						<div className="row">
    						<div className="col">
      							<div className="form-group">
        							<label>First Name</label>
        							<input type="text"/>
      							</div>
    						</div>

							<div className="col">
      							<div className="form-group">
        							<label>Phone</label>
        							<input type="text"/>
      							</div>
    						</div>
    
    						<div className="col">
      							<div className="form-group">
        							<label>Email</label>
        							<input type="text"/>
      							</div>
    						</div>
    
    						<div className="col">
      							<div className="form-group">
     								<label>Message</label>
        							<textarea></textarea>
      							</div>
    						</div>

    						<div className="col">
      							<input type="submit" value="Submit"/>
    						</div>
						</div>
				</div>
				<style jsx>{`
				* {
					margin: 0;
					padding: 0;
					border-size: border-box;
				  }
				  
				  html, body {
					height: 100vh;
					background: #666666;
					font-family: 'Balsamiq Sans', sans-serif;
				  }
				  
				  body {
					display: flex;
					align-items: center;
					justify-content: center;
				  }
				  
				  .card {
					width: 40%;
					padding: 30px 90px 90px 90px;
					border: 6px solid #826F66;
					box-shadow: 10px 10px 0 rgba(0, 0, 0, 0.3);
					border-radius: 20px;
					position: relative;
				  }
				  
				  .card h2 {
					color: #826F66;
					font-size: 60px;
					text-transform: uppercase;
				  }
				  
				  .card .row {
					position: relative;
					width: 100%;
					display: grid;
					grid: auto / auto auto;
					grid-template-columns: repeat(auto-fit,minmax(40%, 1fr));
					grid-gap: 30px;
				  }
				  
				  .card .row .col {
					position: relative;
					width: 100%;
					margin: 30px 20px 40px 0;
					transition: 0.5s;
				  }
				  
				  .card .row .form-group {
					position: relative;
					width: 100%;
					height: 40px;
					color: #ffffff;
				  }
				  
				  .card .row .form-group input,
				  .card .row .form-group textarea {
					position: absolute;
					width: 90%;
					height: 100%;
					background: transparent;
					outline: none;
					font-size: 24px;
					padding: 10px 0 10px 20px;
					border: 5px solid rgba(0, 0, 0, 0.3);
					box-shadow: 5px 5px 0 rgba(0, 0, 0, 0.3);
					color: #ffffff;
					border-radius: 50px;
				  }
				  
				  .card .row .form-group label {
					line-height: 40px;
					color: #E6BA95;
					font-size: 24px;
					margin: 0 0 0 30px;
					display: block;
					pointer-events: none;
				  }
				  
				  .row .col:nth-child(6) {
					margin-top: 64px;
				  }
				  
				  .card .row .form-group input:focus,
				  .card .row .form-group textarea:focus {
					border: 5px solid #E6BA95;
					transition: all 0.5s;
				  }
				  
				  .card .row input[type="submit"] {
					border: 5px solid rgba(0, 0, 0, 0.3);
					box-shadow: 10px 10px 0 rgba(0, 0, 0, 0.3);
					padding: 10px;
					height: 100%;
					width: 50%;
					cursor: pointer;
					outline: none;
					background: transparent;
					text-transform: uppercase;
					color: #A97155;
					line-height: 40px;
					font-size: 24px;
					font-weight: 700;
					border-radius: 45px;
					transition: all 0.4s;
				  }
				  
				  .card .row input[type="submit"]:hover {
					border: 5px solid #A97155;
					color: #E6BA95;
					transition: all 0.4s;
				  }
				  
				  @media screen and (max-width: 900px) {
					.card .row {
					  grid-template-columns: repeat(auto-fit,minmax(70%, 1fr));
					}
					
					.card {
					  padding: 20px;
					}
					
					.card h2 {
					  font-size: 34px;
					}
					
					.card .row input[type="submit"] {
					  width: 100%;
					}
				  }

				`}
				</style>
	</div>

) );


const ContactPage = () => (
	<Layout>
		<Content/>
	</Layout>
);
export default ContactPage;
