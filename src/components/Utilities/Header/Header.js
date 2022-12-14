import React, { useState, useContext, } from 'react';
import { Link } from 'react-router-dom';
import MobileMenu from './MobileMenu/MobileMenu';
import Logo from '../Logo/Logo';
import logo from '../../../assets/img/logo/logo.png';
import Offcanvas from '../Offcanvas/Offcanvas';
import Offcanvas2 from '../Offcanvas/Offcanvas2';
import OffcanvasPlayer from '../Offcanvas/OffcanvasPlayer';
// import { auth, db } from "../../firebase";
// import { doc, onSnapshot } from "firebase/firestore";
// import { onAuthStateChanged } from "firebase/auth";
import { AuthContext } from "../../../context/AuthContext";



const Header = () => {

    const { currentUser } = useContext(AuthContext);

    const [openCanvas, setOpenCanves] = useState(false);
    const [openCanvas2, setOpenCanves2] = useState(false);
    const [openCanvasPlayer, setOpenPlayer] = useState(false);
    const [iconToggle, setIconToggle] = useState(false);


    const heandelOpen = () => {
        setOpenCanves(!openCanvas);
    }

    const heandelOpen2 = () => {
        setOpenCanves2(!openCanvas2);
    }

    const heandelOpen3 = () => {
        setOpenPlayer(!openCanvasPlayer);
    }

    return (
        <React.Fragment>
            <header className=''>
                <div id="header-sticky" className="menu-area menu-new" >
                    <div className="container-fluid pr-50">
                        <div className="second-menu">
                            <div className="row align-items-center">
                                <div className="col-xl-1 col-lg-1 col-6">
                                    <div className="logo">
                                        <Logo logo={logo} />
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 d-none d-lg-block offset-lg-2">
                                    <div className="main-menu">
                                        <nav id="mobile-menu">
                                            <ul>
                                                <li><Link to={'/'}>{'Home'}</Link></li>
                                                <li><Link to={'/'}>{'Community'}</Link></li>
                                                <li><Link to={'/'}>{'Help'}</Link></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                                <div className="col-xl-1 col-lg-1 text-left d-none d-lg-block mt-30 mb-30">
                                    <div className="cart-top">
                                        <ul>
                                            <li>
                                                <a onClick={heandelOpen} className="menu-tigger">
                                                    <i className="fas fa-search"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {!currentUser ? <div className="col-xl-2 col-lg-21 text-right d-none d-lg-block mt-30 mb-30">
                                    <a onClick={heandelOpen2}>
                                        <button className="btn btn-warning" Style="border-radius: 15px; padding-bottom: 10px; padding-top: 10px; min-width: 170px">CONNECT</button>
                                    </a>
                                </div> : <div className="col-xl-2 col-lg-21 text-right d-none d-lg-block mt-30 mb-30">
                                    <a onClick={heandelOpen3}>
                                        <button className="btn btn-warning" Style="border-radius: 15px; padding-bottom: 10px; padding-top: 10px; min-width: 170px">{currentUser.displayName}</button>
                                    </a>
                                </div>}
                                <div className="col-6 d-block d-lg-none">
                                    <div className="mobile-toggler text-right">
                                        <a onClick={() => setIconToggle(!iconToggle)}>
                                            <i className={`${iconToggle ? 'fas fa-times' : 'fa fa-bars'}`}></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <MobileMenu toggleMenu={iconToggle} onClose={setIconToggle} />
                    </div>
                </div>
            </header>
            <Offcanvas onOpne={openCanvas} onClose={setOpenCanves} />
            <Offcanvas2 onOpne={openCanvas2} onClose={setOpenCanves2} />
            <OffcanvasPlayer onOpne={openCanvasPlayer} onClose={setOpenPlayer} currentUser={currentUser} />

        </React.Fragment>
    )
}

export default Header;
