import React from 'react';
import '../index.css';
import Map from "../Mapbox.js";
import loc from "../locations.json";
import LocationListing from "./LocationListing.js";
import FooterSection from '../FooterSection';

const Explore = () => {
	return (
		<div className="container">
			<section id="section1" style={{ height: "100vh" }}>
				<Map locations={loc.locations} />
			</section>
			<FooterSection />
		</div>
	)
}


export default Explore;