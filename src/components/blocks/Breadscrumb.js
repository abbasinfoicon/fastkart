import React from 'react'

const Breadscrumb = () => {
    return (
        <section className="breadscrumb-section pt-0">
            <div className="container-fluid-lg">
                <div className="row">
                    <div className="col-12">
                        <div className="breadscrumb-contain">
                            <h2>About Us</h2>
                            <nav>
                                <ol className="breadcrumb mb-0">
                                    <li className="breadcrumb-item">
                                        <a href="index.html">
                                            <i className="fa-solid fa-house"></i>
                                        </a>
                                    </li>
                                    <li className="breadcrumb-item active" aria-current="page">About Us</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Breadscrumb