import React from 'react'
import { Link } from 'react-router-dom'

const FooterMenu = () => {
    return (
        <>
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                <div className="footer-title">
                    <h4>Categories</h4>
                </div>

                <div className="footer-contain">
                    <ul>
                        <li><Link to="/product" className="text-content">Vegetables & Fruit</Link></li>
                        <li><Link to="/product" className="text-content">Beverages</Link></li>
                        <li><Link to="/product" className="text-content">Meats & Seafood</Link></li>
                        <li><Link to="/product" className="text-content">Frozen Foods</Link></li>
                        <li><Link to="/product" className="text-content">Biscuits & Snacks</Link></li>
                        <li><Link to="/product" className="text-content">Grocery & Staples</Link></li>
                    </ul>
                </div>
            </div>

            <div className="col-xl col-lg-2 col-sm-3">
                <div className="footer-title">
                    <h4>Useful Links</h4>
                </div>

                <div className="footer-contain">
                    <ul>
                        <li><Link to="/" className="text-content">Home</Link></li>
                        <li><Link to="/product" className="text-content">Shop</Link></li>
                        <li><Link to="/about" className="text-content">About Us</Link></li>
                        <li><Link to="/blog" className="text-content">Blog</Link></li>
                        <li><Link to="/contact" className="text-content">Contact Us</Link></li>
                    </ul>
                </div>
            </div>

            <div className="col-xl-2 col-sm-3">
                <div className="footer-title">
                    <h4>Help Center</h4>
                </div>

                <div className="footer-contain">
                    <ul>
                        <li><Link to="/" className="text-content">Your Order</Link></li>
                        <li><Link to="/login" className="text-content">Your Account</Link></li>
                        <li><Link to="/" className="text-content">Track Order</Link></li>
                        <li><Link to="/" className="text-content">Your Wishlist</Link></li>
                        <li><Link to="/" className="text-content">Search</Link></li>
                        <li><Link to="/" className="text-content">FAQ</Link></li>
                    </ul>
                </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="footer-title">
                    <h4>Contact Us</h4>
                </div>

                <div className="footer-contact">
                    <ul>
                        <li>
                            <div className="footer-number">
                                <i data-feather="phone"></i>
                                <div className="contact-number">
                                    <h6 className="text-content">Hotline 24/7 :</h6>
                                    <h5>+91 888 104 2340</h5>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="footer-number">
                                <i data-feather="mail"></i>
                                <div className="contact-number">
                                    <h6 className="text-content">Email Address :</h6>
                                    <h5>fastkart@hotmail.com</h5>
                                </div>
                            </div>
                        </li>

                        <li className="social-app mb-0">
                            <h5 className="mb-2 text-content">Download App :</h5>
                            <ul>
                                <li className="mb-0"><Link to="/" target="_blank"><img src="./assets/images/playstore.svg" className="blur-up lazyload" alt="" /></Link></li>
                                <li className="mb-0"><Link to="/" target="_blank"><img src="./assets/images/appstore.svg" className="blur-up lazyload" alt="" /></Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default FooterMenu