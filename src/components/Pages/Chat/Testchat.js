import React from "react";
import Iframe from 'react-iframe'
import Navbar from '../../Utilities/Navbar/Navbar';


const Testchat = () => {
    const url = "https://oc.app/";
    //console.log(url);
    return (
        <section id="home" className="slider-area slider-four fix p-relative">
            <div className="slider-active">
                <div className="single-slider slider-bg align-items-center">
                    <div className="container">
                        <div className="row justify-content-center pt-10">
                            <div className="col-lg-1 col-md-1">
                                <Navbar />
                            </div>
                            <div className="col-lg-11 col-md-11">
                                <div className="container">
                                    <section>
                                        {url ?
                                            <Iframe url={url}
                                                width="100%"
                                                height="650px"
                                                id=""
                                                className=""
                                                display="block"
                                                position="relative"
                                                styles={{ border: "0px" }} /> : null}
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Testchat;
