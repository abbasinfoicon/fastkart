import React from 'react'

const TimingBox = () => {
    return (
        <div className="timing-box">
            <div className="timing">
                <i data-feather="clock"></i>
                <h6 className="name">Expires in :</h6>
                <div className="time" id="clockdiv-1" data-hours="1" data-minutes="2" data-seconds="3">
                    <ul>
                        <li>
                            <div className="counter">
                                <div className="days">
                                    <h6></h6>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="counter">
                                <div className="hours">
                                    <h6></h6>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="counter">
                                <div className="minutes">
                                    <h6></h6>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="counter">
                                <div className="seconds">
                                    <h6></h6>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default TimingBox