import React from 'react'

const Currency = () => {
    return (
        <div className="dropdown theme-form-select">
            <button className="btn dropdown-toggle" type="button" id="select-dollar"
                data-bs-toggle="dropdown" aria-expanded="false">
                <span>USD</span>
            </button>
            <ul className="dropdown-menu dropdown-menu-end sm-dropdown-menu"
                aria-labelledby="select-dollar">
                <li>
                    <a className="dropdown-item" id="aud" href="#">AUD</a>
                </li>
                <li>
                    <a className="dropdown-item" id="eur" href="#">EUR</a>
                </li>
                <li>
                    <a className="dropdown-item" id="cny" href="#">CNY</a>
                </li>
            </ul>
        </div>
    )
}

export default Currency