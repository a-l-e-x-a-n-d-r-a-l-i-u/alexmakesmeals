import React from 'react';
import publications from './NewsMedia/publications_array.js';

const News = () => {
	let mediaMarkup = publications.map((pub, key) => (
		<a className="link-out" href={pub.url}>
			<div className="flex-container">
				<img className="logos" src={pub.logo} alt={pub.publisher} />
				<h6 className="font-weight-normal">{pub.title}</h6>
			</div>
		</a>
	));

	return (<>
		<section className="plain-bg">
			<div className="centred-container">
				<h2>Alex Makes Meals in the Media</h2>
				<div id="news-features">
					{mediaMarkup}
				</div>
			</div>
		</section>
		<section className="alternate-bg">
			<h4>For all media inquiries or interview requests, please contact Pete Dillon at Scoffer Consulting on 0409 142 365 or <a href="mailto:pdillon@scoffer.com.au">pdillon@scoffer.com.au</a>.</h4>
		</section>
	</>)
}


export default News;