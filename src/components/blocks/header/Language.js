import React from 'react'

const Language = () => {
    return (
        <div className="dropdown theme-form-select">
            <button className="btn dropdown-toggle" type="button" id="select-language"
                data-bs-toggle="dropdown" aria-expanded="false">
                <img src="../assets/images/country/united-states.png"
                    className="img-fluid blur-up lazyload" alt="" />
                <span>English</span>
            </button>
            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="select-language">
                <li>
                    <a className="dropdown-item" href="#" id="english">
                        <img src="../assets/images/country/united-kingdom.png"
                            className="img-fluid blur-up lazyload" alt="" />
                        <span>English</span>
                    </a>
                </li>
                <li>
                    <a className="dropdown-item" href="#" id="france">
                        <img src="../assets/images/country/germany.png"
                            className="img-fluid blur-up lazyload" alt="" />
                        <span>Germany</span>
                    </a>
                </li>
                <li>
                    <a className="dropdown-item" href="#" id="chinese">
                        <img src="../assets/images/country/turkish.png"
                            className="img-fluid blur-up lazyload" alt="" />
                        <span>Turki</span>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Language