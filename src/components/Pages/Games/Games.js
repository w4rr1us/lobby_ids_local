import React, { useState } from 'react';
import { Link } from "react-router-dom";
import SectionTitle from "../../Utilities/SectionTitle/SectionTitle";
import Navbar from '../../Utilities/Navbar/Navbar';


import workImg1 from '../../../assets/img/gallery/ths.png';
import workImg2 from '../../../assets/img/gallery/vetirents.png';
import workImg3 from '../../../assets/img/gallery/rom.png';
import workImg4 from '../../../assets/img/gallery/rom.png';
import workImg5 from '../../../assets/img/gallery/rom.png';
import workImg6 from '../../../assets/img/gallery/rom.png';
const gameItems = [
    {
        img: workImg1,
        tag: 'ROM/IDS',
        label: 'The Hereos Supremacy',
        description: 'MOBA Game',
        cat: 'ROM/IDS',
        url: '/playrom',
    },
    {
        img: workImg2,
        tag: 'ROM/IDS',
        label: 'The Search for Vetiren´s',
        description: 'TurnBase RPG',
        cat: 'ROM/IDS',
        url: '/playtsv',
    },
    {
        img: workImg3,
        tag: 'ROM/IDS',
        label: 'The Player Fortress',
        description: 'Player House',
        cat: 'ROM/IDS',
        url: '#',
    },
    {
        img: workImg4,
        tag: 'ROM/IDS',
        label: 'The Battle for Zhion',
        description: 'FPS/BR',
        cat: 'ROM/IDS',
        url: '#',
    },
    {
        img: workImg5,
        tag: 'ROM/IDS',
        label: 'The Release of Madness',
        description: 'MMORPG',
        cat: 'ROM/IDS',
        url: '#',
    },
    {
        img: workImg6,
        tag: 'ROM/IDS',
        label: 'Vetirent´s Magic Cards',
        description: 'Traiding Card Game',
        cat: 'ROM/IDS',
        url: '#',
    },
]

const Games = () => {
    const [items, setItems] = useState(gameItems);


    const fliterItem = (cat) => {
        const filterUpdate = gameItems.filter((currentItem) => {
            return currentItem.cat === cat;
        })
        setItems(filterUpdate);
    }
    return (
        <React.Fragment>
            <section id="home" className="slider-area slider-four fix p-relative">
                <div className="slider-active">
                    <div className="single-slider slider-bg align-items-center">
                        <div className="container">
                            <div className="row justify-content-center pt-10">
                                <div className="col-lg-1 col-md-1">
                                    <Navbar />
                                </div>
                                <div className="col-lg-11 col-md-11">
                                    <div className="slider-content s-sl">
                                        <section id="work" className="pb-120">
                                            <div className="container">
                                                <div className="portfolio ">
                                                    <div className="row align-items-center mb-30 wow fadeInUp animated" data-animation="fadeInRight" data-delay=".4s">
                                                        <div className="col-lg-12">
                                                            <SectionTitle
                                                                titleSec='Games' />
                                                        </div>
                                                    </div>
                                                    <div className="grid col3">
                                                        {
                                                            items.map((item, index) => {
                                                                const { img, tag, label, description, url } = item
                                                                return (
                                                                    <div className="grid-item" key={index}>
                                                                        <Link to={url} className="popup-image">
                                                                            <figure className="gallery-image">
                                                                                <img src={img} alt="img" className="img" />
                                                                                <figcaption>
                                                                                    <span>{tag}</span>
                                                                                    <h6>{label}</h6>
                                                                                    <p Style="font-size : 12px">{description}</p>
                                                                                </figcaption>
                                                                            </figure>
                                                                        </Link>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}
export default Games;