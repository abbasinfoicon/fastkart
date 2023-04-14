import React from 'react'

const FooterMenu = () => {
    return (
        <>
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                <div className="footer-title">
                    <h4>Categories</h4>
                </div>

                <div className="footer-contain">
                    <ul>
                        <li>
                            <a href="shop-left-sidebar.html" className="text-content">Vegetables & Fruit</a>
                        </li>
                        <li>
                            <a href="shop-left-sidebar.html" className="text-content">Beverages</a>
                        </li>
                        <li>
                            <a href="shop-left-sidebar.html" className="text-content">Meats & Seafood</a>
                        </li>
                        <li>
                            <a href="shop-left-sidebar.html" className="text-content">Frozen Foods</a>
                        </li>
                        <li>
                            <a href="shop-left-sidebar.html" className="text-content">Biscuits & Snacks</a>
                        </li>
                        <li>
                            <a href="shop-left-sidebar.html" className="text-content">Grocery & Staples</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="col-xl col-lg-2 col-sm-3">
                <div className="footer-title">
                    <h4>Useful Links</h4>
                </div>

                <div className="footer-contain">
                    <ul>
                        <li>
                            <a href="index.html" className="text-content">Home</a>
                        </li>
                        <li>
                            <a href="shop-left-sidebar.html" className="text-content">Shop</a>
                        </li>
                        <li>
                            <a href="about-us.html" className="text-content">About Us</a>
                        </li>
                        <li>
                            <a href="blog-list.html" className="text-content">Blog</a>
                        </li>
                        <li>
                            <a href="contact-us.html" className="text-content">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="col-xl-2 col-sm-3">
                <div className="footer-title">
                    <h4>Help Center</h4>
                </div>

                <div className="footer-contain">
                    <ul>
                        <li>
                            <a href="order-success.html" className="text-content">Your Order</a>
                        </li>
                        <li>
                            <a href="user-dashboard.html" className="text-content">Your Account</a>
                        </li>
                        <li>
                            <a href="order-tracking.html" className="text-content">Track Order</a>
                        </li>
                        <li>
                            <a href="wishlist.html" className="text-content">Your Wishlist</a>
                        </li>
                        <li>
                            <a href="search.html" className="text-content">Search</a>
                        </li>
                        <li>
                            <a href="faq.html" className="text-content">FAQ</a>
                        </li>
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
                                <li className="mb-0">
                                    <a href="https://play.google.com/store/apps" target="_blank">
                                        <img src="https://themes.pixelstrap.com/fastkart/assets/images/playstore.svg" className="blur-up lazyload"
                                            alt="" />
                                    </a>
                                </li>
                                <li className="mb-0">
                                    <a href="https://www.apple.com/in/app-store/" target="_blank">
                                        <img src="https://themes.pixelstrap.com/fastkart/assets/images/appstore.svg" className="blur-up lazyload"
                                            alt="" />
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default FooterMenu