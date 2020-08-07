import React from 'react';
import publications from '../publications.js';

export default News = () => {
	let mediaMarkup = publications.map((pub, key) => (
		<a className="link-out" href={pub.url}>
			<div className="flex-container">
				<img className="logos" src={pub.logo} alt={pub.publisher} />
				<h6 className="font-weight-normal">{pub.title}</h6>
			</div>
		</a>
	));

	return (<div className="centred-container" style={{ minWidth: "100vh", padding: "5em 0" }}>
		<div className="centred-container">
			<h2>Alex Makes Meals in the Media</h2>
			<div className="flex-grid" id="news-features">
				{mediaMarkup}
			</div>
			<h4>For all media inquiries or interview requests, please contact Pete Dillon at Scoffer Consulting on 0409 142 365 or <a href="mailto:pdillon@scoffer.com.au">pdillon@scoffer.com.au</a>.</h4>
		</div>
	</div>)
}