import React from "react";
import Member from "./Member";
import { auth } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { AuthClient } from "@dfinity/auth-client";
import { Actor, Identity } from "@dfinity/agent";
import { canisterId, createActor } from "../Blog/BlogOne/declarations/whoami";




const Team = () => {
    const [usuario, setUsuario] = React.useState(null);
    const [usuarioAvatar, setUsuarioAvatar] = React.useState(null);
    const [wallet, setWallet] = React.useState(null);


    onAuthStateChanged(auth, (user) => {
        if (user) {
            setUsuario(user.displayName);
            setUsuarioAvatar(user.photoURL);
            setWallet(localStorage.getItem('Principal'));
        } else {
            setUsuario(null);
            setUsuarioAvatar(null);
        }
    });

    const teamData = [
        {
            id: '1',
            avatar: usuarioAvatar,
            name: usuario,
            wallet: wallet
        },
    ]

    return (
        <section id="team" className="team-area2">
            <div className="container" Style="padding-left: 0px; padding-right: 0px">
                <div className="row ">
                    <Member teamData={teamData} />
                </div>
            </div>
        </section>
    );
}


export default Team;