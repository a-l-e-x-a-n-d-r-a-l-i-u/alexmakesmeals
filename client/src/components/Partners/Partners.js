import React from 'react';
import FormCard from '../Contact/FormCard.js'
import ThankYouSponsorsSection from './ThankYouSponsorsSection.js'

class PartnerInformation extends React.Component {
	render() {
		return (<div className="centred-container">
			<h2>Become A Partner</h2>
			<p>Alex Makes Meals relies on the generosity of the community, organisations and individual donors to deliver free, nutritious meals for healthcare workers. Here are a few areas we’re seeking partnerships in:</p>
			<li>Meal Support</li>
			<li>Delivery</li>
			<li>Volunteering</li>
			<li>Packaging</li>
			<p>We’re always looking for amazing people and organisations to partner with us and enhance what we do. We’re feel-good, passionate and we love making waves.</p>
			<h5>If this sounds like your organisation, we’d love to collaborate!</h5>
		</div>)
	}
}

class PartnerSignUp extends React.Component {
	render() {
		return (<div className="centred-container">
			<h2>Tell us about yourself and why you’d love to partner!</h2>
			<FormCard subjectTitle={'Partnership'} />
		</div >)
	}
}

const Partners = () => {
	return (<>
		<section className="alternate-bg-2"><PartnerInformation /></section>
		<section className="alternate-bg"><PartnerSignUp /></section>
		<section className="plain-bg"><ThankYouSponsorsSection /></section>
	</>)
}

export default Partners;