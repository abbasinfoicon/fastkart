import React from 'react'
import Slider from '../components/blocks/home/Slider'
import BannerSlider from '../components/blocks/home/BannerSlider'
import Category from '../components/blocks/aside/Category'
import TrendingProducts from '../components/blocks/aside/TrendingProducts'
import Ads from '../components/blocks/aside/Ads'
import CustomerComment from '../components/blocks/aside/CustomerComment'
import TimingBox from '../components/blocks/products/TimingBox'
import ProductBoxSlider from '../components/blocks/products/ProductBoxSlider'
import BrowsByCategory from '../components/blocks/products/BrowsByCategory'
import ProductOffer from '../components/blocks/products/ProductOffer'
import FoodCupboard from '../components/blocks/products/FoodCupboard'
import Cupone from '../components/blocks/products/Cupone'
import BestSeller from '../components/blocks/products/BestSeller'
import FeaturedBlog from '../components/blocks/blog/FeaturedBlog'
import Newsletter from '../components/blocks/home/Newsletter'

const Home = () => {
  return (
    <>
      <section className="home-section pt-2">
        <div className="container-fluid-lg">
          <Slider />
        </div>
      </section>


      <section className="banner-section ratio_60 wow fadeInUp">
        <div className="container-fluid-lg">
          <BannerSlider />
        </div>
      </section>


      <section className="product-section">
        <div className="container-fluid-lg">
          <div className="row g-sm-4 g-3">
            <div className="col-xxl-3 col-xl-4 d-none d-xl-block">
              <div className="p-sticky">
                <Category />
                <Ads />
                <TrendingProducts />
                <CustomerComment />
              </div>
            </div>

            <div className="col-xxl-9 col-xl-8">
              <div className="title title-flex">
                <div>
                  <h2>Top Save Today</h2>
                  <span className="title-leaf">
                    <svg className="icon-width">
                      <use href="https://themes.pixelstrap.com/fastkart/assets/svg/leaf.svg#leaf"></use>
                    </svg>
                  </span>
                  <p>Don't miss this opportunity at a special discount just for this week.</p>
                </div>

                <TimingBox />
              </div>

              <div className="section-b-space">
                <div className="product-border border-row overflow-hidden">
                  <ProductBoxSlider />
                </div>
              </div>

              <div className="title">
                <h2>Bowse by Categories</h2>
                <span className="title-leaf">
                  <svg className="icon-width">
                    <use href="https://themes.pixelstrap.com/fastkart/assets/svg/leaf.svg#leaf"></use>
                  </svg>
                </span>
                <p>Top Categories Of The Week</p>
              </div>

              <BrowsByCategory />

              <div className="section-t-space section-b-space">
                <ProductOffer />
              </div>

              <div className="title d-block">
                <h2>Food Cupboard</h2>
                <span className="title-leaf">
                  <svg className="icon-width">
                    <use href="https://themes.pixelstrap.com/fastkart/assets/svg/leaf.svg#leaf"></use>
                  </svg>
                </span>
                <p>A virtual assistant collects the products from your list</p>
              </div>

              <div className="product-border overflow-hidden wow fadeInUp">
                <FoodCupboard />
              </div>

              <div className="section-t-space">
                <Cupone />
              </div>

              <div className="section-t-space section-b-space">
                <div className="row g-md-4 g-3">
                  <div className="col-xxl-8 col-xl-12 col-md-7">
                    <div className="banner-contain hover-effect">
                      <img src="../assets/images/vegetable/banner/12.jpg" className="bg-img blur-up lazyload"
                        alt="" />
                      <div className="banner-details p-center-left p-4">
                        <div>
                          <h2 className="text-kaushan fw-normal theme-color">Get Ready To</h2>
                          <h3 className="mt-2 mb-3">TAKE ON THE DAY!</h3>
                          <p className="text-content banner-text">In publishing and graphic design, Lorem
                            ipsum is a placeholder text commonly used to demonstrate.</p>
                          <button onclick="location.href = 'shop-left-sidebar.html';"
                            className="btn btn-animation btn-sm mend-auto">Shop Now <i
                              className="fa-solid fa-arrow-right icon"></i></button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xxl-4 col-xl-12 col-md-5">
                    <a href="shop-left-sidebar.html" className="banner-contain hover-effect h-100">
                      <img src="../assets/images/vegetable/banner/13.jpg" className="bg-img blur-up lazyload"
                        alt="" />
                      <div className="banner-details p-center-left p-4 h-100">
                        <div>
                          <h2 className="text-kaushan fw-normal text-danger">20% Off</h2>
                          <h3 className="mt-2 mb-2 theme-color">SUMMRY</h3>
                          <h3 className="fw-normal product-name text-title">Product</h3>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <div className="title d-block">
                <div>
                  <h2>Our best Seller</h2>
                  <span className="title-leaf">
                    <svg className="icon-width">
                      <use href="https://themes.pixelstrap.com/fastkart/assets/svg/leaf.svg#leaf"></use>
                    </svg>
                  </span>
                  <p>A virtual assistant collects the products from your list</p>
                </div>
              </div>

              <BestSeller />

              <div className="section-t-space">
                <div className="banner-contain hover-effect">
                  <img src="../assets/images/vegetable/banner/14.jpg" className="bg-img blur-up lazyload" alt="" />
                  <div className="banner-details p-center banner-b-space w-100 text-center">
                    <div>
                      <h6 className="ls-expanded theme-color mb-sm-3 mb-1">SUMMER</h6>
                      <h2 className="banner-title">VEGETABLE</h2>
                      <h5 className="lh-sm mx-auto mt-1 text-content">Save up to 5% OFF</h5>
                      <button onclick="location.href = 'shop-left-sidebar.html';"
                        className="btn btn-animation btn-sm mx-auto mt-sm-3 mt-2">Shop Now <i
                          className="fa-solid fa-arrow-right icon"></i></button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="title section-t-space">
                <h2>Featured Blog</h2>
                <span className="title-leaf">
                  <svg className="icon-width">
                    <use href="https://themes.pixelstrap.com/fastkart/assets/svg/leaf.svg#leaf"></use>
                  </svg>
                </span>
                <p>A virtual assistant collects the products from your list</p>
              </div>

              <FeaturedBlog />
            </div>
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  )
}

export default Home