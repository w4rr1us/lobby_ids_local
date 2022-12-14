import React from "react";
import { Link } from "react-router-dom";
import errorImg from '../../../assets/img/bg/error-bg.png';
import errorHdImg from '../../../assets/img/bg/about-hd.png';
const Error404 = () => {
    return (
        <React.Fragment>
            <section className="breadcrumb-area d-flex align-items-center" style={{ background: `url(${errorHdImg})` }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-12 col-lg-12"></div>
                    </div>
                </div>
            </section>
            <section id="about" className="about-area about-p pb-120 p-relative">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="error-page text-center">
                                <div className="error-code"> <strong>{'404'}</strong>
                                </div>
                                <div className="error-message">
                                    <h3>{'Oops... Page Not Found!'}</h3>
                                </div>
                                <div className="error-body">
                                    <p>{'Try using the button below to go to main page of the site'}</p>
                                    <Link to={'/'} className="btn btn-primary solid blank">
                                        <i className="fa fa-arrow-circle-left">&nbsp;</i>
                                        {'Go to Home'}
                                    </Link>
                                </div>
                            </div>
                            <div className="error-img">
                                <img src={errorImg} alt="logo" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

export default Error404;