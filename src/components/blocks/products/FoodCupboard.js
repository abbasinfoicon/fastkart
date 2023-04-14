import React from 'react'

const FoodCupboard = () => {
    return (
        <div className="product-box-slider no-arrow">
            <div>
                <div className="row m-0">
                    <div className="col-12 px-0">
                        <div className="product-box">
                            <div className="product-image">
                                <a href="product-left-thumbnail.html">
                                    <img src="../assets/images/vegetable/product/1.png"
                                        className="img-fluid blur-up lazyload" alt="" />
                                </a>
                                <ul className="product-option">
                                    <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
                                        <a href="javascript:void(0)" data-bs-toggle="modal"
                                            data-bs-target="#view">
                                            <i data-feather="eye"></i>
                                        </a>
                                    </li>

                                    <li data-bs-toggle="tooltip" data-bs-placement="top"
                                        title="Compare">
                                        <a href="compare.html">
                                            <i data-feather="refresh-cw"></i>
                                        </a>
                                    </li>

                                    <li data-bs-toggle="tooltip" data-bs-placement="top"
                                        title="Wishlist">
                                        <a href="wishlist.html" className="notifi-wishlist">
                                            <i data-feather="heart"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="product-detail">
                                <a href="product-left-thumbnail.html">
                                    <h6 className="name h-100">Chocalate Powder</h6>
                                </a>

                                <h5 className="sold text-content">
                                    <span className="theme-color price">$26.69</span>
                                    <del>28.56</del>
                                </h5>

                                <div className="product-rating mt-sm-2 mt-1">
                                    <ul className="rating">
                                        <li>
                                            <i data-feather="star" className="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" className="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" className="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" className="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star"></i>
                                        </li>
                                    </ul>

                                    <h6 className="theme-color">In Stock</h6>
                                </div>

                                <div className="add-to-cart-box">
                                    <button className="btn btn-add-cart addcart-button">Add
                                        <span className="add-icon">
                                            <i className="fa-solid fa-plus"></i>
                                        </span>
                                    </button>
                                    <div className="cart_qty qty-box">
                                        <div className="input-group">
                                            <button type="button" className="qty-left-minus"
                                                data-type="minus" data-field="">
                                                <i className="fa fa-minus" aria-hidden="true"></i>
                                            </button>
                                            <input className="form-control input-number qty-input"
                                                type="text" name="quantity" value="0" />
                                            <button type="button" className="qty-right-plus"
                                                data-type="plus" data-field="">
                                                <i className="fa fa-plus" aria-hidden="true"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="row m-0">
                    <div className="col-12 px-0">
                        <div className="product-box">
                            <div className="product-image">
                                <a href="product-left-thumbnail.html">
                                    <img src="../assets/images/vegetable/product/2.png"
                                        className="img-fluid blur-up lazyload" alt="" />
                                </a>
                                <ul className="product-option">
                                    <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
                                        <a href="javascript:void(0)" data-bs-toggle="modal"
                                            data-bs-target="#view">
                                            <i data-feather="eye"></i>
                                        </a>
                                    </li>

                                    <li data-bs-toggle="tooltip" data-bs-placement="top"
                                        title="Compare">
                                        <a href="compare.html">
                                            <i data-feather="refresh-cw"></i>
                                        </a>
                                    </li>

                                    <li data-bs-toggle="tooltip" data-bs-placement="top"
                                        title="Wishlist">
                                        <a href="wishlist.html" className="notifi-wishlist">
                                            <i data-feather="heart"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="product-detail">
                                <a href="product-left-thumbnail.html">
                                    <h6 className="name h-100">Sandwich Cookies</h6>
                                </a>

                                <h5 className="sold text-content">
                                    <span className="theme-color price">$26.69</span>
                                    <del>28.56</del>
                                </h5>

                                <div className="product-rating mt-sm-2 mt-1">
                                    <ul className="rating">
                                        <li>
                                            <i data-feather="star" className="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" className="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" className="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" className="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star"></i>
                                        </li>
                                    </ul>

                                    <h6 className="theme-color">In Stock</h6>
                                </div>

                                <div className="add-to-cart-box">
                                    <button className="btn btn-add-cart addcart-button">Add
                                        <span className="add-icon">
                                            <i className="fa-solid fa-plus"></i>
                                        </span>
                                    </button>
                                    <div className="cart_qty qty-box">
                                        <div className="input-group">
                                            <button type="button" className="qty-left-minus"
                                                data-type="minus" data-field="">
                                                <i className="fa fa-minus" aria-hidden="true"></i>
                                            </button>
                                            <input className="form-control input-number qty-input"
                                                type="text" name="quantity" value="0" />
                                            <button type="button" className="qty-right-plus"
                                                data-type="plus" data-field="">
                                                <i className="fa fa-plus" aria-hidden="true"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="row m-0">
                    <div className="col-12 px-0">
                        <div className="product-box">
                            <div className="product-image">
                                <a href="product-left-thumbnail.html">
                                    <img src="../assets/images/vegetable/product/3.png"
                                        className="img-fluid blur-up lazyload" alt="" />
                                </a>
                                <ul className="product-option">
                                    <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
                                        <a href="javascript:void(0)" data-bs-toggle="modal"
                                            data-bs-target="#view">
                                            <i data-feather="eye"></i>
                                        </a>
                                    </li>

                                    <li data-bs-toggle="tooltip" data-bs-placement="top"
                                        title="Compare">
                                        <a href="compare.html">
                                            <i data-feather="refresh-cw"></i>
                                        </a>
                                    </li>

                                    <li data-bs-toggle="tooltip" data-bs-placement="top"
                                        title="Wishlist">
                                        <a href="wishlist.html" className="notifi-wishlist">
                                            <i data-feather="heart"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="product-detail">
                                <a href="product-left-thumbnail.html">
                                    <h6 className="name h-100">Butter Croissant</h6>
                                </a>

                                <h5 className="sold text-content">
                                    <span className="theme-color price">$26.69</span>
                                    <del>28.56</del>
                                </h5>

                                <div className="product-rating mt-sm-2 mt-1">
                                    <ul className="rating">
                                        <li>
                                            <i data-feather="star" className="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" className="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" className="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" className="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star"></i>
                                        </li>
                                    </ul>

                                    <h6 className="theme-color">In Stock</h6>
                                </div>

                                <div className="add-to-cart-box">
                                    <button className="btn btn-add-cart addcart-button">Add
                                        <span className="add-icon">
                                            <i className="fa-solid fa-plus"></i>
                                        </span>
                                    </button>
                                    <div className="cart_qty qty-box">
                                        <div className="input-group">
                                            <button type="button" className="qty-left-minus"
                                                data-type="minus" data-field="">
                                                <i className="fa fa-minus" aria-hidden="true"></i>
                                            </button>
                                            <input className="form-control input-number qty-input"
                                                type="text" name="quantity" value="0" />
                                            <button type="button" className="qty-right-plus"
                                                data-type="plus" data-field="">
                                                <i className="fa fa-plus" aria-hidden="true"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="row m-0">
                    <div className="col-12 px-0">
                        <div className="product-box">
                            <div className="product-image">
                                <a href="product-left-thumbnail.html">
                                    <img src="../assets/images/vegetable/product/4.png"
                                        className="img-fluid blur-up lazyload" alt="" />
                                </a>
                                <ul className="product-option">
                                    <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
                                        <a href="javascript:void(0)" data-bs-toggle="modal"
                                            data-bs-target="#view">
                                            <i data-feather="eye"></i>
                                        </a>
                                    </li>

                                    <li data-bs-toggle="tooltip" data-bs-placement="top"
                                        title="Compare">
                                        <a href="compare.html">
                                            <i data-feather="refresh-cw"></i>
                                        </a>
                                    </li>

                                    <li data-bs-toggle="tooltip" data-bs-placement="top"
                                        title="Wishlist">
                                        <a href="wishlist.html" className="notifi-wishlist">
                                            <i data-feather="heart"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="product-detail">
                                <a href="product-left-thumbnail.html">
                                    <h6 className="name h-100">Dark Chocalate</h6>
                                </a>

                                <h5 className="sold text-content">
                                    <span className="theme-color price">$26.69</span>
                                    <del>28.56</del>
                                </h5>

                                <div className="product-rating mt-sm-2 mt-1">
                                    <ul className="rating">
                                        <li>
                                            <i data-feather="star" className="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" className="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" className="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" className="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star"></i>
                                        </li>
                                    </ul>

                                    <h6 className="theme-color">In Stock</h6>
                                </div>

                                <div className="add-to-cart-box">
                                    <button className="btn btn-add-cart addcart-button">Add
                                        <span className="add-icon">
                                            <i className="fa-solid fa-plus"></i>
                                        </span>
                                    </button>
                                    <div className="cart_qty qty-box">
                                        <div className="input-group">
                                            <button type="button" className="qty-left-minus"
                                                data-type="minus" data-field="">
                                                <i className="fa fa-minus" aria-hidden="true"></i>
                                            </button>
                                            <input className="form-control input-number qty-input"
                                                type="text" name="quantity" value="0" />
                                            <button type="button" className="qty-right-plus"
                                                data-type="plus" data-field="">
                                                <i className="fa fa-plus" aria-hidden="true"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="row m-0">
                    <div className="col-12 px-0">
                        <div className="product-box">
                            <div className="product-image">
                                <a href="product-left-thumbnail.html">
                                    <img src="../assets/images/vegetable/product/5.png"
                                        className="img-fluid blur-up lazyload" alt="" />
                                </a>
                                <ul className="product-option">
                                    <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
                                        <a href="javascript:void(0)" data-bs-toggle="modal"
                                            data-bs-target="#view">
                                            <i data-feather="eye"></i>
                                        </a>
                                    </li>

                                    <li data-bs-toggle="tooltip" data-bs-placement="top"
                                        title="Compare">
                                        <a href="compare.html">
                                            <i data-feather="refresh-cw"></i>
                                        </a>
                                    </li>

                                    <li data-bs-toggle="tooltip" data-bs-placement="top"
                                        title="Wishlist">
                                        <a href="wishlist.html" className="notifi-wishlist">
                                            <i data-feather="heart"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="product-detail">
                                <a href="product-left-thumbnail.html">
                                    <h6 className="name h-100">Mix-sweet-food</h6>
                                </a>

                                <h5 className="sold text-content">
                                    <span className="theme-color price">$26.69</span>
                                    <del>28.56</del>
                                </h5>

                                <div className="product-rating mt-sm-2 mt-1">
                                    <ul className="rating">
                                        <li>
                                            <i data-feather="star" className="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" className="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" className="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" className="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star"></i>
                                        </li>
                                    </ul>

                                    <h6 className="theme-color">In Stock</h6>
                                </div>

                                <div className="add-to-cart-box">
                                    <button className="btn btn-add-cart addcart-button">Add
                                        <span className="add-icon">
                                            <i className="fa-solid fa-plus"></i>
                                        </span>
                                    </button>
                                    <div className="cart_qty qty-box">
                                        <div className="input-group">
                                            <button type="button" className="qty-left-minus"
                                                data-type="minus" data-field="">
                                                <i className="fa fa-minus" aria-hidden="true"></i>
                                            </button>
                                            <input className="form-control input-number qty-input"
                                                type="text" name="quantity" value="0" />
                                            <button type="button" className="qty-right-plus"
                                                data-type="plus" data-field="">
                                                <i className="fa fa-plus" aria-hidden="true"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="row m-0">
                    <div className="col-12 px-0">
                        <div className="product-box">
                            <div className="product-image">
                                <a href="product-left-thumbnail.html">
                                    <img src="../assets/images/vegetable/product/4.png"
                                        className="img-fluid blur-up lazyload" alt="" />
                                </a>
                                <ul className="product-option">
                                    <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
                                        <a href="javascript:void(0)" data-bs-toggle="modal"
                                            data-bs-target="#view">
                                            <i data-feather="eye"></i>
                                        </a>
                                    </li>

                                    <li data-bs-toggle="tooltip" data-bs-placement="top"
                                        title="Compare">
                                        <a href="compare.html">
                                            <i data-feather="refresh-cw"></i>
                                        </a>
                                    </li>

                                    <li data-bs-toggle="tooltip" data-bs-placement="top"
                                        title="Wishlist">
                                        <a href="wishlist.html" className="notifi-wishlist">
                                            <i data-feather="heart"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="product-detail">
                                <a href="product-left-thumbnail.html">
                                    <h6 className="name h-100">Dark Chocalate</h6>
                                </a>

                                <h5 className="sold text-content">
                                    <span className="theme-color price">$26.69</span>
                                    <del>28.56</del>
                                </h5>

                                <div className="product-rating mt-sm-2 mt-1">
                                    <ul className="rating">
                                        <li>
                                            <i data-feather="star" className="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" className="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" className="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" className="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star"></i>
                                        </li>
                                    </ul>

                                    <h6 className="theme-color">In Stock</h6>
                                </div>

                                <div className="add-to-cart-box">
                                    <button className="btn btn-add-cart addcart-button">Add
                                        <span className="add-icon">
                                            <i className="fa-solid fa-plus"></i>
                                        </span>
                                    </button>
                                    <div className="cart_qty qty-box">
                                        <div className="input-group">
                                            <button type="button" className="qty-left-minus"
                                                data-type="minus" data-field="">
                                                <i className="fa fa-minus" aria-hidden="true"></i>
                                            </button>
                                            <input className="form-control input-number qty-input"
                                                type="text" name="quantity" value="0" />
                                            <button type="button" className="qty-right-plus"
                                                data-type="plus" data-field="">
                                                <i className="fa fa-plus" aria-hidden="true"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FoodCupboard