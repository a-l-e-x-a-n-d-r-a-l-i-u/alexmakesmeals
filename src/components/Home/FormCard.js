import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

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

export default function FormCard() {

  return (
    <StyledCard >
        <form action="mailto:Info@alexmakesmeals.com" method="POST" encType="text/plain">
            <StyledParagraph>Send us a message to partner with us</StyledParagraph>
            <FormFields>
            <StyledInput name="sender-name" placeholder="Full Name" required />
            </FormFields>
            <FormFields>
            <StyledInput name="sender-phone" placeholder="Phone" required />
            </FormFields>
            <StyledInput name="sender-email" placeholder="Email Address" required />
            <textarea name="message-body" placeholder="Message" required />
            <StyledInput type="submit" value="Send" />
        </form>
    </StyledCard>
  );
}
