import React, { useState, useContext, } from "react";
import { Link, useHistory } from "react-router-dom";
import Team from "../Team/Team";
import { auth, db } from "../../firebase";
import { doc, setDoc, onSnapshot } from "firebase/firestore";
import { AuthContext } from "../../../context/AuthContext";
import { AuthClient } from "@dfinity/auth-client";
import { canisterId, createActor } from "../Blog/BlogOne/declarations/whoami";
import { Actor, Identity } from "@dfinity/agent";


const OffcanvasPlayer = ({ onOpne, onClose, currentUser }) => {

    // const handleMenuOne = () => {
    //     // do something   

    //     (async () => {
    //         // const [usuario, setUsuario] = React.useState(null);

    //         // const [wal, setWal] = React.useState(null);
    //         // Canister Ids
    //         const nnsCanisterId = 'yerc4-jaaaa-aaaad-qd76q-cai'
    //         // Whitelist
    //         const whitelist = [
    //             nnsCanisterId,
    //         ];
    //         // Host
    //         const host = "https://game.realityofmadness.com/";
    //         // Make the request
    //         try {
    //             const publicKey = await window.ic.infinityWallet.requestConnect({
    //                 whitelist,
    //                 host,
    //             });
    //             //console.log(`The connected user's public key is:`, publicKey);
    //             // Obtenemos el ID del usuario
    //             const principalId = await window.ic.infinityWallet.getPrincipal();
    //             //console.log(`InfinityWallet's user principal Id is ${principalId}`);


    //             if (principalId) {
    //                 if (currentUser == null) {
    //                     alert('Now you must register a user');
    //                 } else {
    //                     onSnapshot(doc(db, "wallets", currentUser.uid), (doc2) => {
    //                         if (doc2.data()) {
    //                             const wal = doc2.data().principalWallet;
    //                             if (wal) {
    //                                 //console.log('Si EXISTE', wal);
    //                             } else {
    //                                 setDoc(doc(db, "wallets", currentUser.uid), {
    //                                     uid: currentUser.uid,
    //                                     principalWallet: `cal-${principalId}`,
    //                                 });
    //                             }
    //                         } else {
    //                             setDoc(doc(db, "wallets", currentUser.uid), {
    //                                 uid: currentUser.uid,
    //                                 principalWallet: `cal-${principalId}`,
    //                             });
    //                         }
    //                     });
    //                 }
    //             }
    //             window.location.reload(false);
    //         } catch (e) {
    //             console.log(e);
    //             window.open('https://wallet.infinityswap.one/', '_blank');
    //         }
    //     })();
    // };


    // const history = useHistory();
    const cerrarSesion = () => {
        auth.signOut();
        (async () => {
            const authClient = await AuthClient.create();
            authClient.logout();
            localStorage.setItem('Principal', null);
            window.location.reload(false);
        })();
    };

    return (
        <React.Fragment>
            <div className={`offcanvas-menu ${onOpne ? 'active' : ''}`}>
                <span className="menu-close" onClick={() => onClose(!onOpne)}>
                    <i className="fas fa-times"></i>
                </span>
                <div id="" className="menu-one-page-menu-container">
                    <ul id="menu-one-page-menu-2" className="menu mt-0">
                        <Team />
                    </ul>
                </div>
                <div id="" className="menu-one-page-menu-container">
                    <ul id="menu-one-page-menu-1" className="menu mt-0">
                        <li className="menu-item menu-item-type-custom menu-item-object-custom pb-10">
                            <div className="btn-toolbar" role="toolbar">
                                <div className="btn-group">
                                    <button className="btn btn-warning mw250 tb-pd-10 br-10">WALLETS</button>
                                </div>
                            </div>
                        </li>
                        <li className="menu-item menu-item-type-custom menu-item-object-custom pb-10">
                            <div className="btn-toolbar" role="toolbar">
                                <div className="btn-group">
                                    <button className="btn btn-warning mw250 mw250  tb-pd-10 br-10">PROFILE</button>
                                </div>
                            </div>
                        </li>
                        <li className="menu-item menu-item-type-custom menu-item-object-custom pb-10">
                            <div className="btn-toolbar" role="toolbar">
                                <div className="btn-group">
                                    <button className="btn btn-warning mw250 tb-pd-10 br-10">SETTINGS</button>
                                </div>
                            </div>
                        </li>
                        <li className="menu-item menu-item-type-custom menu-item-object-custom pb-10">
                            <div className="btn-toolbar" role="toolbar">
                                <div className="btn-group">
                                    <button className="btn btn-warning mw250 tb-pd-10 br-10">NFT´s</button>
                                </div>
                            </div>
                        </li>
                        <li className="menu-item menu-item-type-custom menu-item-object-custom pb-10">
                            <div className="btn-toolbar" role="toolbar">
                                <div className="btn-group">
                                    <button className="btn btn-warning mw250 tb-pd-10 br-10">PATHS OF EVOLUTION</button>
                                </div>
                            </div>
                        </li>
                        <li className="menu-item menu-item-type-custom menu-item-object-custom pb-10">
                            <div className="btn-toolbar" role="toolbar">
                                <div className="btn-group">
                                    <button className="btn btn-warning mw250 tb-pd-10 br-10" onClick={cerrarSesion} >LOGOUT</button>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                {/* <div id="" className="menu-one-page-menu-container" Style="margin-top: 10px">
                    <ul id="menu-one-page-menu-1" className="menu">
                        <li className="menu-item menu-item-type-custom menu-item-object-custom">
                            <div className="btn-toolbar" role="toolbar">
                                <div className="btn-group">
                                    <button type="button" className="btn btn-default" style={{ minWidth: "80px", padding: "2px" }}>
                                        <img style={{ height: "40px" }}
                                            src="https://freepngimg.com/download/google/66274-school-google-pearl-button-up-sign-middle.png"
                                            alt="Not Found"
                                            className=""
                                        />
                                    </button>

                                    <button type="button" className="btn btn-default" style={{ minWidth: "80px", padding: "2px" }}>
                                        <img style={{ height: "40px" }}
                                            src="https://www.ticketpro.cl/assets/images/fb-login-btn.png"
                                            alt="Not Found"
                                            className=""
                                        />
                                    </button>
                                    <button onClick={handleMenuOne} type="button" className="btn btn-default" style={{ minWidth: "80px", padding: "2px" }}>
                                        <img style={{ height: "40px" }}
                                            src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/cmnoufl7wxo-812%3A1483?alt=media&token=5d2aedcb-c113-4db0-b082-1927d84a11b5"
                                            alt="Not Found"
                                            className=""
                                        />
                                    </button>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div> */}
            </div>
            <div className={`offcanvas-overly ${onOpne ? 'active' : ''}`}
                onClick={() => onClose(!onOpne)}></div>
        </React.Fragment >
    );

}

async function handleAuthenticated(AuthClient) {
    const identity = (await AuthClient.getIdentity());
    const whoami_actor = createActor(canisterId, {
        agentOptions: {
            identity,
        },
    });
    // Invalidate identity then render login when user goes idle
    AuthClient.idleManager?.registerCallback(() => {
        Actor.agentOf(whoami_actor)?.invalidateIdentity?.();
    });
}

export default OffcanvasPlayer;