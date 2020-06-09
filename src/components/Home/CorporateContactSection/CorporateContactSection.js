import React from 'react';
import styled from 'styled-components';
import FormCard from './FormCard'

export const SectionHeadingContainer = styled.div`
    text-align: center;
    padding-bottom: 1em;
`

export const TextContainer = styled.span`
    padding-right: 2em;
    display: flex;
    justify-content: center;
    width: 100%; 
`

export const CardContainer = styled.span`
    padding: 1em;
    display: flex;
    justify-content: center;
    width: 50%; 
`

export default class CorporateContactSection extends React.Component {
    render() {
        return (
            <div className="centred-container">
                <SectionHeadingContainer>
                    <h2>Partner with us to <span style={{ color: '#7ac143' }}>make a difference</span></h2>
                </SectionHeadingContainer>
                <div className="flex-grid">
                    <div className="flex-container">
                        <TextContainer>
                            <p>Corporate partnerships will enable us to... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </TextContainer>
                    </div>
                        <CardContainer>
                            <FormCard></FormCard>
                        </CardContainer>
                </div>
            </div>
        )
    }
}