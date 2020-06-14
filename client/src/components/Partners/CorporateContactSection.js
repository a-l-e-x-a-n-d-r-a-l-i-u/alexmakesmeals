import React from 'react';
import FormCard from '../Contact/FormCard.js'

export default class CorporateContactSection extends React.Component {
    render() {
        return (
            <div className="centred-container">
                <h2>Partner with us to <span style={{ color: '#7ac143' }}>make a difference</span></h2>
                <div className="flex-grid">
                    <div className="flex-container">
                        <div className="text-content">
                            <p>The spread of COVID-19 means our nation is not only facing its biggest ever health crisis but also our hospitals, emergency services, contact tracing centres, testing centres and other important facilities are understaffed and overworked during times of crisis.</p>
                            <p>Our frontline medical staff are working harder and longer than ever before. They are being asked to dig deeper than ever before.</p>
                            <p>Together, let's support them in their hard work in keeping us safe and well.</p>
                            <p>Corporate partnerships will enable us to help to feed those that face food insecurity, who need our support.</p>
                        </div>
                    </div>
                    <div className="flex-container">
                        <FormCard subjectTitle={'Partnership'} />
                    </div>
                </div>
            </div>
        )
    }
}
