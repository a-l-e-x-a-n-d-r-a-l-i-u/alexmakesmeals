import React from 'react';
import axios from 'axios';
import SingleInput from '../../form-elements/SingleInput.js';
import TextArea from '../../form-elements/TextArea.js';

export default class CorporateContactSection extends React.Component {
    constructor() {
        super()
        this.state = {
            name: '',
            phone: '',
            email: '',
            message: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    async handleSubmit(e) {
        e.preventDefault()
        const { name, phone, email, message } = this.state;
        const form = await axios.post('/api/form', {
            name,
            phone,
            email,
            message
        })
    }

    render() {
        return (
            <div className="centred-container">
                <h2>Partner with us to <span style={{ color: '#7ac143' }}>make a difference</span></h2>
                <div className="flex-grid">
                    <div className="flex-container">
                        <div className="text-content">
                            <p>The spread of COVID-19 means our nation is not only facing its biggest ever health crisis but also our hospitals, emergency services, contact tracing centres, testing centres and other important facilities are understaffed and overworked during times of crisis.</p>
                            <p>Our frontline medical staff are working harder and longer than ever before. They are being asked to dig deeper than ever before.</p>
                            <p>Together, let's support them in their hard work in keeping us safe and well.</p>
                            {/* <p>Corporate partnerships will enable us to help to feed those that face food insecurity, who need our support.</p> */}
                        </div>
                    </div>
                    <div className="flex-container">
                        <div className="form-wrapper">
                            <form onSubmit={this.handleSubmit}>
                                <SingleInput name="name" placeholder="Full Name" controlFunc={this.handleChange} required />
                                <SingleInput name="phone" placeholder="Phone" controlFunc={this.handleChange} required />
                                <SingleInput name="email" placeholder="Email Address" controlFunc={this.handleChange} required />
                                <TextArea name="message" placeholder="Message" controlFunc={this.handleChange} required />
                                <input type="submit" value="Send" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
