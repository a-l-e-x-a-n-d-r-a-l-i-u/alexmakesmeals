import React from 'react';
import Card from '@material-ui/core/Card';
import styled from 'styled-components';
import axios from 'axios';

const StyledCard = styled(Card)`
    text-align: left;
    margin-left: 0.8rem;
    margin-right: 0.8rem;
    padding-left: 1.5em;
    padding-top: 0.2em;
    padding-right: 1.5em;
    padding-bottom: 1.2em;
`

const StyledParagraph = styled.p`
  font-size: 16px;
`

const StyledInput = styled.input`
    margin: 0.2em;
`
const FormFields = styled.div`
    display: inline-block;  
`
const StyledText = styled.textarea`
    margin-top: 0.25em;
    margin-bottom: 0.5em;
    margin-left: 0.2em;
`

class FormCard extends React.Component {
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

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }
  async handleSubmit(e) {
    e.preventDefault()
    const { name, phone, email, message } = this.state
    const form = await axios.post('/api/form', {
      name,
      phone,
      email,
      message
    })
  }

  render() {
    return (
      <StyledCard >
        <form onSubmit={this.handleSubmit}>
          <StyledParagraph>Get in contact with us about partnerships!</StyledParagraph>
          <FormFields>
            <StyledInput name="name" placeholder="Full Name" onChange={this.handleChange} required />
          </FormFields>
          <FormFields>
            <StyledInput name="phone" placeholder="Phone" onChange={this.handleChange} required />
          </FormFields>
          <StyledInput name="email" placeholder="Email Address" onChange={this.handleChange} required />
          <StyledText name="message" placeholder="Message" onChange={this.handleChange} required />
          <StyledInput type="submit" value="Send" />
        </form>
      </StyledCard>
    )
  }
};

export default FormCard