import React from 'react';
import KaelanProfile from '../images/photos/KaelanProfile.jpg'
import Team from '../images/photos/Team.JPG'
const TeamBg = { backgroundImage: 'url(' + Team + ')' };

const PlainPicture = () => {
return (<div className="large"></div>)
}

const AboutUsSection = () => {
	return (<div className="centred-container">
		<h2>What We Do</h2>
		<div className="text-content">
			<p>Alex Makes Meals is preparing, cooking and delivering free meals for frontline medical staff, straight to their door!</p>
			<p>As COVID-19 continues, healthcare professionals are working harder than anyone should. The last thing they should be thinking about is where their next meal is coming from.</p>
			<p>We prepare large volumes of food and deliver it to the door to healthcare staff during the ongoing pandemic. All money raised through <a href="https://www.gofundme.com/f/alex-makes-meals-national">our GoFundMe campaign</a> allows us to purchase produce and prepare nutritious meals.</p>
			<p>Our entire team are volunteers – from our chefs, delivery team and support resources through to marketing and communications. <a href="/volunteer-with-us">Join the team and help us help the community!</a></p>
		</div>
	</div>)
}

const AboutAlexDekkerSection = () => {
	return (<div className="centred-container">
		<h2>Meet Alex</h2>
		<div className="text-content">
			<div className="flex-grid">
				<div className="flex-container"><img className="profile-pic" src={KaelanProfile} /></div>
				<div className="flex-container">
					<p>Alex Dekker is a 20-year-old Monash University student, currently studying a double degree in International Relations and Science.</p>
					<p>When the outbreak of the COVID-19 began, Alex’s life changed dramatically. He was unable to visit his parents, as they were immunocompromised and has a history of pneumonia. His sister, who was the inspiration for the charity, is on placement at the emergency department at Monash Medical Hospital.</p>
					<p>Channeling his love of food, Alex cooked tray of lasagna for his sister and her friends. Alex admits he is an ordinary cook, but soon realised he could cook enough food to help a few more people. Overwhelmed by the demand, he recruited volunteers from the community and Alex Makes Meals began!</p>
				</div>
			</div>
		</div>
	</div>)
}

const FutureDirectionSection = () => {
	return (<div className="centred-container">
		<h2>What's Next?</h2>
		<div className="text-content">
			<p>Now operating in Victoria, New South Wales and Queensland, this will be a long journey for those at the frontline of the emergency. A return to a new normal is a very long way off for our healthcare workers.</p>
			<p>At Alex Makes Meals, we commit to supporting healthcare workers for as long as we are needed.</p>
		</div>
	</div>)
}

const About = () => {
	return (<>
	<section className="has-bg-img" style={TeamBg}><PlainPicture /></section>
		<section className="plain-bg"><AboutUsSection /></section>
		<section className="alternate-bg-2"><AboutAlexDekkerSection /></section>
		<section className="plain-bg"><FutureDirectionSection /></section>	</>)
}

export default About;