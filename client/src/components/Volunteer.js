import React from 'react';
import FormCard from './Contact/FormCard.js'

class VolunteerContactSection extends React.Component {

    render() {
        return (
            <div className="centred-container">
                <h2>We want to give back to the community and support health care workers in this time of uncertainty</h2>
                <div className="flex-grid">
                    <div className="flex-container">
                        <div className="text-content">
                            <p>We are currently recruiting volunteers to assist with the following roles.</p>
                            <h5>Delivery Drivers:</h5>
                            <li>Picking up prepared meals in bulk from our kitchen sites.</li>
                            <li>Driving to delivery location at hospitals, clinics etc.</li>
                            <li>Dropping off bulk prepared meals as a non-contact delivery driver.</li>

                            <h5>Kitchen and Food Preparation:</h5>
                            <li>Assist in food preparation and packaging.</li>
                            <li>Assist with general kitchen duties.</li>
                        </div>
                    </div>
                    <div className="flex-container">
                    <FormCard subjectTitle={'Volunteer'} />
                    </div>
                </div>
            </div>
        )
    }
}

const Volunteer = () => {
    return (
        <section className="alternate-bg-2"><VolunteerContactSection /></section>
    )
}


export default Volunteer;