import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import SingleInput from './form-elements/SingleInput.js';
import TextArea from './form-elements/TextArea.js';

export default class FormCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            phone: '',
            email: '',
            org: '',
            message: '',
            subject: `${this.props.subjectTitle} Inquiry from Alex Makes Meals Website`
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    async handleSubmit(e) {
        e.preventDefault()
        const { name, phone, email, message, org, subject } = this.state;
        const form = await axios.post('/api/form', {
            name,
            phone,
            email,
            message,
            org,
            subject
        })
    }
    render() {
        return (<div className="form-wrapper">
            <form onSubmit={this.handleSubmit}>
                <SingleInput name="name" placeholder="Full Name" controlFunc={this.handleChange} required />
                <SingleInput name="org" placeholder="Organisation (optional)" controlFunc={this.handleChange} />
                <SingleInput name="phone" placeholder="Phone" controlFunc={this.handleChange} required />
                <SingleInput name="email" placeholder="Email Address" controlFunc={this.handleChange} required />
                <TextArea name="message" placeholder="Message" controlFunc={this.handleChange} required />
                <input type="submit" value="Send" />
            </form>
        </div>)
    }
}

FormCard.propTypes = {
    subjectTitle: PropTypes.string,
  };  