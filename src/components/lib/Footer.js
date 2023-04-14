import React from 'react'
import ServiceContain from '../blocks/footer/ServiceContain'
import FooterLogo from '../blocks/footer/FooterLogo'
import FooterMenu from '../blocks/footer/FooterMenu'
import SocialLink from '../blocks/footer/SocialLink'

const Footer = () => {
  return (
    <footer className="section-t-space">
      <div className="container-fluid-lg">
        <div className="service-section">
          <div className="row g-3">
            <div className="col-12">
              <ServiceContain />
            </div>
          </div>
        </div>

        <div className="main-footer section-b-space section-t-space">
          <div className="row g-md-4 g-3">
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <FooterLogo />
            </div>

            <FooterMenu />
          </div>
        </div>

        <div className="sub-footer section-small-space">
          <div className="reserve">
            <h6 className="text-content">©2022 Fastkart All rights reserved</h6>
          </div>

          <div className="payment">
            <img src="../assets/images/payment/1.png" className="blur-up lazyload" alt="" />
          </div>

          <SocialLink />
        </div>
      </div>
    </footer>
  )
}

export default Footer