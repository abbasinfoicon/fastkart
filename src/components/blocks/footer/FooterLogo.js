import React from 'react'

const FooterLogo = () => {
    return (
        <div className="footer-logo">
            <div className="theme-logo">
                <a href="index.html">
                    <img src="../assets/images/logo/1.png" className="blur-up lazyload" alt="" />
                </a>
            </div>

            <div className="footer-logo-contain">
                <p>We are a friendly bar serving a variety of cocktails, wines and beers. Our bar is a
                    perfect place for a couple.</p>

                <ul className="address">
                    <li>
                        <i data-feather="home"></i>
                        <a href="#">1418 Riverwood Drive, CA 96052, US</a>
                    </li>
                    <li>
                        <i data-feather="mail"></i>
                        <a href="#">support@fastkart.com</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default FooterLogo