import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
    return (
        <ul className="navbar-nav">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/about">About us</Link></li>
            <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="javascript:;" data-bs-toggle="dropdown">Product</Link>
                <ul className="dropdown-menu">
                    <li><Link to="/product" className="dropdown-item">ProductBundle</Link></li>
                    <li><Link to="/product" className="dropdown-item">ProductSlider</Link></li>
                    <li><Link to="/product" className="dropdown-item">ProductSticky</Link></li>
                </ul>
            </li>
            <li className="nav-item dropdown dropdown-mega">
                <Link className="nav-link dropdown-toggle ps-xl-2 ps-0" to="javascript:void(0)" data-bs-toggle="dropdown">Mega Menu</Link>

                <div className="dropdown-menu dropdown-menu-2">
                    <div className="row">
                        <div className="dropdown-column col-xl-3">
                            <h5 className="dropdown-header">Daily Vegetables</h5>
                            <Link className="dropdown-item" to="shop-left-sidebar.html">Beans
                                &amp; Brinjals</Link>

                            <Link className="dropdown-item" to="shop-left-sidebar.html">Broccoli &amp; Cauliflower</Link>

                            <Link to="shop-left-sidebar.html" className="dropdown-item">Chilies, Garlic</Link>

                            <Link className="dropdown-item" to="shop-left-sidebar.html">Vegetables &amp; Salads</Link>

                            <Link className="dropdown-item" to="shop-left-sidebar.html">Gourd, Cucumber</Link>

                            <Link className="dropdown-item" to="shop-left-sidebar.html">Herbs
                                &amp; Sprouts</Link>

                            <Link to="demo-personal-portfolio.html" className="dropdown-item">Lettuce &amp; Leafy</Link>
                        </div>

                        <div className="dropdown-column col-xl-3">
                            <h5 className="dropdown-header">Baby Tender</h5>
                            <Link className="dropdown-item" to="shop-left-sidebar.html">Beans
                                &amp; Brinjals</Link>

                            <Link className="dropdown-item" to="shop-left-sidebar.html">Broccoli &amp; Cauliflower</Link>

                            <Link className="dropdown-item" to="shop-left-sidebar.html">Chilies, Garlic</Link>

                            <Link className="dropdown-item" to="shop-left-sidebar.html">Vegetables &amp; Salads</Link>

                            <Link className="dropdown-item" to="shop-left-sidebar.html">Gourd, Cucumber</Link>

                            <Link className="dropdown-item" to="shop-left-sidebar.html">Potatoes &amp; Tomatoes</Link>

                            <Link to="shop-left-sidebar.html" className="dropdown-item">Peas
                                &amp; Corn</Link>
                        </div>

                        <div className="dropdown-column col-xl-3">
                            <h5 className="dropdown-header">Exotic Vegetables</h5>
                            <Link className="dropdown-item" to="shop-left-sidebar.html">Asparagus &amp; Artichokes</Link>

                            <Link className="dropdown-item" to="shop-left-sidebar.html">Avocados &amp; Peppers</Link>

                            <Link className="dropdown-item" to="shop-left-sidebar.html">Broccoli &amp; Zucchini</Link>

                            <Link className="dropdown-item" to="shop-left-sidebar.html">Celery, Fennel &amp; Leeks</Link>

                            <Link className="dropdown-item" to="shop-left-sidebar.html">Chilies &amp; Lime</Link>
                        </div>

                        <div className="dropdown-column dropdown-column-img col-3"></div>
                    </div>
                </div>
            </li>
            <li className="nav-item"><Link className="nav-link" to="/blog">Blog</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/contact">Contact us</Link></li>

        </ul>
    )
}

export default Menu