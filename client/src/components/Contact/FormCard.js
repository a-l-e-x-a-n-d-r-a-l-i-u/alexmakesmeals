import React from 'react';
import SingleInput from './form-elements/SingleInput.js';
import TextArea from './form-elements/TextArea.js';

export default class FormCard extends React.Component {
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