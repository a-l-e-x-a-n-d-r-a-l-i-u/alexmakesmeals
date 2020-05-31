import React from 'react';
import styled from 'styled-components';

export const TestimonialSectionContainer = styled.span`   
    padding-left: 1em;
    height: 20em;
`

export const SectionHeadingContainer = styled.div`
    text-align: center;
    padding-bottom: 2em;
`

export const SectionContents = styled.div`
    display: flex;
    justify-content: space-between;
`

export const ImageContainer = styled.span`
    width: 50%;
`

export const QuoteContainer = styled.span`
    display: flex;
    justify-content: center;
    width: 50%; 
`

export default class TestimonialSection extends React.Component {
    render() {
        return (
            <TestimonialSectionContainer>
                <SectionHeadingContainer>
                    <h2>Testimonial</h2>
                </SectionHeadingContainer>
                <SectionContents>
                    <ImageContainer>
                        <img alt="A health professional" />
                    </ImageContainer>
                    <QuoteContainer>
                        <blockquote>Insert quote here</blockquote>
                    </QuoteContainer>
                </SectionContents>
            </TestimonialSectionContainer>
        )
    }
}