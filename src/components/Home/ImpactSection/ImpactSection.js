import React from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import { SectionContainer,
    SectionHeadingContainer,
    StatsContainer,
    StatsColumn,
    DonationButtonContainer,
    DonationButton,
    ButtonText
} from './style'


export default class ImpactSection extends React.Component {
    render() {
        return (
            <SectionContainer >
                <div className="container">
                    <SectionHeadingContainer>
                        <h2>Our impact</h2>
                    </SectionHeadingContainer>
                    <StatsContainer>
                        <StatsColumn>
                            <h1 ><CountUp end={983} separator="," redraw={true}>
                                {({ countUpRef, start }) => (
                                    <VisibilitySensor onChange={start} delayedCall>
                                        <span ref={countUpRef} />
                                    </VisibilitySensor>
                                )}
                            </CountUp></h1>
                            <h3 className="legend-header">Donations</h3>
                        </StatsColumn>
                        <StatsColumn>
                            <h1><CountUp end={18652} separator="," redraw={true}>
                            {({ countUpRef, start }) => (
                                    <VisibilitySensor onChange={start} delayedCall>
                                        <span ref={countUpRef} />
                                    </VisibilitySensor>
                                )}
                            </CountUp></h1>
                            <h3 className="legend-header">Meals Served</h3>
                        </StatsColumn>
                        <StatsColumn>
                            <h1><CountUp end={163985} separator="," redraw={true} prefix="$">
                            {({ countUpRef, start }) => (
                                    <VisibilitySensor onChange={start} delayedCall>
                                        <span ref={countUpRef} />
                                    </VisibilitySensor>
                                )}
                            </CountUp></h1>
                            <h3 className="legend-header">Funds Raised</h3>
                        </StatsColumn>
                    </StatsContainer>
                    <p>We are active across in <em>3 states</em>, providing for <em>19 hospitals</em> with <em>#PLACEHOLDER NUMBER# restaurants</em> on board.</p>
                    <DonationButtonContainer>
                        <DonationButton>
                            <a href="/donation">
                                <ButtonText>
                                    Get involved
                                </ButtonText>
                            </a>
                        </DonationButton>
                    </DonationButtonContainer>
                </div>
            </SectionContainer >
        )
    }
}