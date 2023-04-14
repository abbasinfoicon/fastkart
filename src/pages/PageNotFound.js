import React from 'react'

const PageNotFound = () => {
  return (
    <>
      <section className="section-404 section-lg-space">
        <div className="container-fluid-lg">
          <div className="row">
            <div className="col-12">
              <div className="image-404">
                <img src="../assets/images/inner-page/404.png" className="img-fluid blur-up lazyload" alt="" />
              </div>
            </div>

            <div className="col-12">
              <div className="contain-404">
                <h3 className="text-content">The page you are looking for could not be found. The link to this
                  address may be outdated or we may have moved the since you last bookmarked it.</h3>
                <button onclick="location.href = 'index.html';"
                  className="btn btn-md text-white theme-bg-color mt-4 mx-auto">Back To Home Screen</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default PageNotFound