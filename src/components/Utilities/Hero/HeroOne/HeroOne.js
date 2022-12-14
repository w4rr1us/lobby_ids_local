import { Link } from 'react-router-dom';
import heroImg from '../../../../assets/img/slider/slider_img_bg.png';
import Principal from '../../../Utilities/Blog/BlogOne/Principal';
import News from '../../../Utilities/Blog/BlogOne/News';
import BlogOne from '../../../Utilities/Blog/BlogOne/BlogOne';
import Navbar from '../../Navbar/Navbar';

const heroInformation = {
    id: "1",
    img: heroImg,
    titleTag: "#world class game",
    title: "Are You ready For your next Challenge ?",
    btnText: "Read More",
}
const { img, titleTag, title, btnText } = heroInformation;

const HeroOne = () => {
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
                                <div className="slider-content s-slider-content">
                                    <Principal />
                                    <News />
                                    <BlogOne />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


export default HeroOne;