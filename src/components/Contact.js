import React from 'react';
import '../index.css';
import FooterSection from '../FooterSection';

const Contact = () => {
	return (
		<div>
			<section id="section1">
				<div className="container">
					<h5><a href="mailto:sayhellotoalexandra@gmail.com?subject=Contact Page">For feedback, inquiries or comments please reach out to us by email!</a></h5>
					<p>Alternatively, you can mail to us at:</p>
					<p>Accessibly.com.au
						<br />Rhinehouse Studios
						<br />64A Burwood Road
						<br />Hawthorn
						<br />VIC 3121 Australia
					</p>
				</div>
			</section>
			<FooterSection />
		</div>
	)
}

export default Contact;