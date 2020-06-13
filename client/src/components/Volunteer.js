import React from 'react';

const Volunteer = () => {
    return (
        <div className="centred-container">
            <h3>We want to give back to the community around us and support health care workers in this time of uncertainty.</h3>
            <div className="flex-grid">
                <div className="flex-container">
                    <div className="text-content">
                        <p>We are currently recruiting volunteers to assist with the following roles.</p>
                        <h5>Delivery Drivers:</h5>
                        <li>Picking up prepared meals in bulk from our kitchen sites.</li>
                        <li>Driving to delivery location at hospitals, clinics etc.</li>
                        <li>Dropping off bulk prepared meals as a non-contact delivery driver.</li>

                        <h5>Kitchen and Food Preparation:</h5>
                        <li>Assist in food preparation and packaging.</li>
                        <li>Assist with general kitchen duties.</li>
                    </div>
                </div>
                <div className="flex-container">
                    <div className="form-wrapper">
                        <form action="mailto:Info@alexmakesmeals.com" method="POST" encType="text/plain">
                            <input name="sender-name" placeholder="Full Name" required />
                            <input name="sender-phone" placeholder="Phone" required />
                            <input name="sender-email" placeholder="Email Address" required />
                            <textarea name="message-body" placeholder="Message" required />
                            <input type="submit" value="Send" />
                        </form>
                    </div>
                </div>
            </div>
        </div>)
}


export default Volunteer;