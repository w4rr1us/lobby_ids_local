import React from "react";
import Navbar from '../../Utilities/Navbar/Navbar';
import Sidebar from '../../Utilities/Chatutilities/Sidebar';
import Chat from '../../Utilities/Chatutilities/Chat';


const Homechat = () => {
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
                                <div className='homeChat'>
                                    <div className="containerChat">
                                        <Sidebar />
                                        <Chat />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Homechat;
