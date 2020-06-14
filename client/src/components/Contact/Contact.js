import React from 'react';
import FormCard from './FormCard.js'

class GeneralContactSection extends React.Component {
	render() {
		return (
			<div className="centred-container">
				<h2>Help us make a difference</h2>
				<div className="flex-grid">
					<div className="flex-container">
						<div className="text-content">
							<p>We are looking for help across Australia. If you have time, produce, delivery services or funds to support us, please <a href="/volunteer">volunteer with us!</a></p>
							<p>Please note, those involved in food preparation should hold a Certificate III in Hospitality or be working to attain this qualification. A Food Handling Certificate or similar qualification will be recognized also.</p>
							<p>Fresh produce and other foodstuffs can be delivered to VIC, NSW and QLD capital cities. We are working on supporting major regional cities in those states.</p>
							<p>TAS, WA and SA – we are coming to you soon. If you know anyone who might assist, please contact us.</p>
						</div>
					</div>
					<div className="flex-container">
						<FormCard subjectTitle={'General'} />
					</div>
				</div>
			</div>
		)
	}
}


const Contact = () => {
	return (<>
		<section className="alternate-bg-2"><GeneralContactSection /></section>
		<section className="plain-bg">
			<h4>For all media inquiries or interview requests, please contact Pete Dillon at Scoffer Consulting on 0409 142 365 or <a href="mailto:pdillon@scoffer.com.au">pdillon@scoffer.com.au</a>.</h4>
		</section>
	</>)
}

export default Contact;