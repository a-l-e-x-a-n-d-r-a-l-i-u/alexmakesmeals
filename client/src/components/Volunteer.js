import React from 'react';
import axios from 'axios';
import FormCard from './Contact/FormCard.js'

class VolunteerContactSection extends React.Component {
    constructor() {
        super()
        this.state = {
            name: '',
            phone: '',
            email: '',
			org: '',
            message: '',
            subject: 'Volunteer Inquiry from Alex Makes Meals Website'
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    async handleSubmit(e) {
        e.preventDefault()
        const { name, phone, email, message, subject } = this.state;
        const form = await axios.post('/api/form', {
            name,
            phone,
            email,
            message,
            subject
        })
    }
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
                        <FormCard />
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