import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";

const Navbar = () => {

    const [usuario, setUsuario] = React.useState(null);

    onAuthStateChanged(auth, (user) => {
        if (user) {
            setUsuario(user.displayName);
        } else {
            setUsuario(null);
        }
    });


    return (
        <div className="pt-2 text-white min-vh-100">
            <ul className="" id="menu" Style="padding-left: 40%;">
                <li className="nav-item" Style="text-align: center;">
                    <a href='/'><img
                        src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/mqxvwazhs9b-806%3A224?alt=media&token=5be0a9c4-2894-4508-bfde-7e68dd7d69fb"
                        alt="Not Found"
                        className="console-game"
                    />
                    </a>
                    <Link to={'/'} className="nav-link align-middle px-0">
                        Fortress
                    </Link>
                </li>
                <li className="nav-item" Style="text-align: center;">
                    <a href={usuario ? '/game' : null}>
                        <img
                            src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/mqxvwazhs9b-806%3A224?alt=media&token=5be0a9c4-2894-4508-bfde-7e68dd7d69fb"
                            alt="Not Found"
                            className="console-game"
                        />
                    </a>
                    {usuario ? <Link to={'/game'} className="nav-link align-middle px-0">
                        Games
                    </Link> : <Link to={'#'} className="nav-link align-middle px-0" onClick={() => { alert('you must login first') }}>
                        Games
                    </Link>}

                </li>
                <li className="nav-item" Style="text-align: center;">
                    <a href='/'>
                        <img
                            src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/mqxvwazhs9b-806%3A213?alt=media&token=153a3e80-d7ec-47bf-b18f-ea1d989ee67f"
                            alt="Not Found"
                            className="console-game"
                        />
                    </a>
                    <Link to={'/'}>
                        Streaming
                    </Link>
                </li>
                <li className="nav-item" Style="text-align: center;">
                    <a>
                        <img
                            src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/mqxvwazhs9b-806%3A205?alt=media&token=4284f291-7680-4fb5-b4f8-451ceff4c566"
                            alt="Not Found"
                            className="console-game"
                        />
                    </a>
                    {usuario ? <Link to={'/joinchat'} className="nav-link align-middle px-0">
                        Chat
                    </Link> : <Link to={'#'} className="nav-link align-middle px-0" onClick={() => { alert('you must login first') }}>
                        Chat
                    </Link>}

                </li>
                <li className="nav-item" Style="text-align: center;">
                    <a href='/'>
                        <img
                            src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/mqxvwazhs9b-806%3A193?alt=media&token=11e241fe-4b35-4a0f-824a-1a7a1cd6d20b"
                            alt="Not Found"
                            className="console-game"
                        />
                    </a>
                    <Link to={'/'} className="nav-link align-middle px-0">
                        Marketplace
                    </Link>
                </li>
                <li className="nav-item" Style="text-align: center;">
                    <a href='/'>
                        <img
                            src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/mqxvwazhs9b-806%3A201?alt=media&token=0d8caa22-c21c-4b56-bdd6-72025637b354"
                            alt="Not Found"
                            className="console-game"
                        />
                    </a>
                    <Link to={'/'} className="nav-link align-middle px-0">
                        Auction House
                    </Link>
                </li>
            </ul>
        </div>
    );
}
export default Navbar;