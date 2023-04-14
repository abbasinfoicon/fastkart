import React from 'react'

const ProductOffer = () => {
    return (
        <div className="row g-md-4 g-3">
            <div className="col-md-6">
                <div className="banner-contain hover-effect">
                    <img src="../assets/images/vegetable/banner/9.jpg" className="bg-img blur-up lazyload"
                        alt="" />
                    <div className="banner-details p-center-left p-4">
                        <div>
                            <h3 className="text-exo">50% offer</h3>
                            <h4 className="text-russo fw-normal theme-color mb-2">Testy Mushrooms</h4>
                            <button onclick="location.href = 'shop-left-sidebar.html';"
                                className="btn btn-animation btn-sm mend-auto">Shop Now <i
                                    className="fa-solid fa-arrow-right icon"></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="banner-contain hover-effect">
                    <img src="../assets/images/vegetable/banner/10.jpg" className="bg-img blur-up lazyload"
                        alt="" />
                    <div className="banner-details p-center-left p-4">
                        <div>
                            <h3 className="text-exo">50% offer</h3>
                            <h4 className="text-russo fw-normal theme-color mb-2">Fresh MEAT</h4>
                            <button onclick="location.href = 'shop-left-sidebar.html';"
                                className="btn btn-animation btn-sm mend-auto">Shop Now <i
                                    className="fa-solid fa-arrow-right icon"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductOffer