import React from 'react';

export default class TestimonialSection extends React.Component {
    render() {
        return (
            <div className="centred-container">
                {/* <img id="impact-quote" alt="Kelsey Hibberd" /> */}
                <blockquote><span style={{ fontSize: "xx-large"}}>“</span>Knowing about this initiative, I was motivated push through and work my night shift tonight. I have volunteered to work nights, working 50-hour night-shift weeks to assist. And whilst I can head to Coles, my energy levels are running very low. A few meals to have as backup would help me an enormous amount for when I really have nothing left in the tank.<span style={{fontSize: "x-large"}}>”</span></blockquote>
                <p>— Kelsey</p>
                <p>Nurse at a major metro hospital</p>
            </div>
        )
    }
}