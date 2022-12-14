import { Link } from "react-router-dom";

import Logo from "../Logo/Logo";
import logo from '../../../assets/img/logo/logo.png';

const Footer = () => {
    return (
        <footer className="footer-bg footer-p">
            <div className="footer-top pt-30">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-xl-3 col-lg-3 col-sm-6">
                            <div className="footer-widget mb-30">
                                <div className="f-widget-title mb-20  pt-40 pl-40">
                                    <Link to={'/'}>
                                        <Logo logo={logo} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-sm-5">
                            <div className="copyright-wrap">
                                <div className="container">
                                    <div className="row align-items-center">
                                        <div className="col-lg-12 pt-40">
                                            <center>{'Powered by'} <a target="_blank" href="https://internetcomputer.org/"><img style={{ height: "25px" }}
                                                src="https://getcrypto.info/images/logos/internet_computer.png"
                                                alt="Not Found"
                                                className=""
                                            />{'Internet Computer'}</a></center>
                                            <center>{'Copyright © 2022'} <span>{'Inside Dark Studio'}</span> {'All Rights Reserved.'}</center>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-3 col-sm-6">
                            <div className="footer-widget mb-30">
                                <div className="footer-social mt-30">
                                    {/* <a href="https://www.youtube.com/channel/UCexvqfOjoieX5oROmFqB_Jw"><i className="fab fa-youtube"></i></a> */}
                                    <Link to={'https://www.youtube.com/channel/UCexvqfOjoieX5oROmFqB_Jw'}><i className="fab fa-youtube"></i></Link>
                                    <Link to={'https://twitter.com/idarkstudio'}><i className="fab fa-twitter"></i></Link>
                                    <Link to={'https://discord.com/invite/wJ8SqCJ295'}><i className="fab fa-discord"></i></Link>
                                    <Link to={'https://inside-dark-studio.medium.com/'}><i className="fab fa-medium"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;