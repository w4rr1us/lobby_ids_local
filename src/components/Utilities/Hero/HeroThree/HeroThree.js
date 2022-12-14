import { Link } from 'react-router-dom';
import sliderBg from '../../../../assets/img/slider/slider_img02.png';
import sliderImg from '../../../../assets/img/bg/before-header-img.png';
const HeroThree = () => {
    return (
        <section id="home" className="slider-area slider-four fix p-relative">
            <div className="slider-active">
                <div className="single-slider slider-bg d-flex align-items-center" style={{ background: `url(${sliderBg}) no-repeat center top / cover` }}>
                    <div className="after-bg">
                        <img src={sliderImg} alt="circle_left" />
                    </div>
                    <div className="container">
                        <div className="row justify-content-center pt-50 text-center">
                            <div className="col-lg-12 col-md-12">
                                <div className="slider-content s-slider-content">
                                    <h2 data-animation="fadeInUp" data-delay=".4s">Are You ready For <br />your next Challenge ?</h2>
                                    <div className="slider-btn">
                                        <Link to={'/about'} className="btn ss-btn mr-15">{'Read More'}</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroThree;