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
                    <p>Knowing about this initiative, I was motivated push through and work my night shift tonight. I have volunteered to work nights, working 50-hour night-shift weeks to assist. And whilst I can head to Coles, my energy levels are running very low. A few meals to have as backup would help me an enormous amount for when I really have nothing left in the tank.
                        <br/> — Kelsey Hibberd, nurse at a major metro hospital</p>
                    </QuoteContainer>
                </SectionContents>
            </TestimonialSectionContainer>
        )
    }
}