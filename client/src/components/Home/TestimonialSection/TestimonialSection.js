import React from 'react';
import { TestimonialSectionContainer,
    SectionHeadingContainer,
    SectionContents,
    ImageContainer,
    QuoteContainer
} from './style';

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