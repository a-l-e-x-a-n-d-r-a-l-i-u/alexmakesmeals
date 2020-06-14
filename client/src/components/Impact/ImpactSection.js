import React from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

export default class ImpactStatsSection extends React.Component {
    render() {
        return (
            <div className="centred-container">
                <div className="container">
                    <h2>Our impact</h2>
                    <div className="flex-grid">
                        <div className="flex-container" style={{minWidth: "250px"}}>
                            <h1 ><CountUp end={983} separator="," redraw={true}>
                                {({ countUpRef, start }) => (
                                    <VisibilitySensor onChange={start} delayedCall>
                                        <span ref={countUpRef} />
                                    </VisibilitySensor>
                                )}
                            </CountUp></h1>
                            <h3 className="font-weight-normal">Donations</h3>
                        </div>
                        <div className="flex-container" style={{minWidth: "250px"}}>
                            <h1><CountUp end={18652} separator="," redraw={true}>
                            {({ countUpRef, start }) => (
                                    <VisibilitySensor onChange={start} delayedCall>
                                        <span ref={countUpRef} />
                                    </VisibilitySensor>
                                )}
                            </CountUp></h1>
                            <h3 className="font-weight-normal">Meals Served</h3>
                        </div>
                        <div className="flex-container" style={{minWidth: "250px"}}>
                            <h1><CountUp end={163985} separator="," redraw={true} prefix="$">
                            {({ countUpRef, start }) => (
                                    <VisibilitySensor onChange={start} delayedCall>
                                        <span ref={countUpRef} />
                                    </VisibilitySensor>
                                )}
                            </CountUp></h1>
                            <h3 className="font-weight-normal">Funds Raised</h3>
                        </div>
                    </div>
                    <p>We are active across in <em>3 states</em>, providing for <em>19 hospitals</em> with <em>11 restaurants</em> on board.</p>
                    <a href="/donation"><h5>Get involved</h5></a>
                </div>
            </div>
        )
    }
}