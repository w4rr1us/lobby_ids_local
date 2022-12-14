import React, { useState } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import { auth, db, storage } from "../../firebase";
import { collection, doc, setDoc, getDocs, onSnapshot, query, where } from "firebase/firestore";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { AuthClient } from "@dfinity/auth-client";
import { Actor, Identity } from "@dfinity/agent";
import { canisterId, createActor } from "../Blog/BlogOne/declarations/whoami";
import { InternetIdentityProvider, useInternetIdentity } from '@internet-identity-labs/react-ic-ii-auth';




const Offcanvas2 = ({ onOpne, onClose }) => {
    const [isEnviando, setIsEnviando] = useState(null);

    const handleMenuOne = () => {
        // do something   
        (async () => {
            // Canister Ids
            const nnsCanisterId = 'yerc4-jaaaa-aaaad-qd76q-cai'
            // Whitelist
            const whitelist = [
                nnsCanisterId,
            ];
            // Host
            const host = "https://game.realityofmadness.com/";
            // Make the request
            try {
                const publicKey = await window.ic.infinityWallet.requestConnect({
                    whitelist,
                    host,
                });
                //console.log(`The connected user's public key is:`, publicKey);
                // Obtenemos el ID del usuario
                const principalId = await window.ic.infinityWallet.getPrincipal();
                console.log(`InfinityWallet's user principal Id is ${principalId}`);

                // const docRef = doc(db, "wallets");
                // const docSnap = await getDoc(docRef);
                setIsEnviando(true);
                const q = query(collection(db, "wallets"), where("principalWallet", "==", `cal-${principalId}`));
                const querySnapshot = await getDocs(q);
                if (querySnapshot.size > 0) {
                    querySnapshot.forEach((doc2) => {
                        // doc.data() is never undefined for query doc snapshots
                        //console.log(doc2.data().uid);
                        const uid = doc2.data().uid;
                        if (uid) {
                            onSnapshot(doc(db, "users", uid), (doc) => {
                                try {
                                    signInWithEmailAndPassword(auth, doc.data().email, doc.data().keyEncript)
                                        .then(response => {
                                            window.location.reload(false);
                                        })
                                        .then(result => {
                                            window.location.reload(false);
                                        })
                                        .catch(error => {
                                            console.log(error);
                                        });
                                } catch (err) {
                                }
                            });
                        }
                    });
                } else {
                    const displayName = 'player-' + Math.floor(Math.random() * 10000) + '-' + Math.floor(Math.random() * 10000);
                    const email = displayName + '@realityofmadness.com';
                    const password = 'realityofmadnesscom001';
                    const file = 'https://firebasestorage.googleapis.com/v0/b/chat-ids.appspot.com/o/Joel1669086367870?alt=media&token=19314c24-94fe-4bc8-a9e0-7ff39ccf92c4';

                    const res = await createUserWithEmailAndPassword(auth, email, password);
                    //Create a unique image name
                    const date = new Date().getTime();
                    const storageRef = ref(storage, `${displayName + date}`);

                    await uploadBytesResumable(storageRef, file).then(() => {
                        getDownloadURL(storageRef).then(async (downloadURL) => {
                            try {
                                //Update profile
                                await updateProfile(res.user, {
                                    displayName,
                                    photoURL: downloadURL,
                                });
                                //create user on firestore
                                await setDoc(doc(db, "users", res.user.uid), {
                                    uid: res.user.uid,
                                    displayName,
                                    email,
                                    photoURL: downloadURL,
                                    keyEncript: password
                                });

                                //create empty user chats on firestore
                                await setDoc(doc(db, "userChats", res.user.uid), {});

                                await setDoc(doc(db, "wallets", res.user.uid), {
                                    uid: res.user.uid,
                                    principalWallet: `cal-${principalId}`,
                                });

                                window.location.reload(false);
                            } catch (err) {
                                console.log(err.code);
                                alert(err.code);
                            }
                        });
                    });
                }
            } catch (e) {
                console.log(e);
                window.open('https://wallet.infinityswap.one/', '_blank');
            }
        })();
    };

    const days = 1;
    const hours = 24;
    const nanoseconds = 13500000000000;
    const APPLICATION_NAME = "RealityOfMadness";
    const APPLICATION_LOGO_URL = "https%3A%2F%2F7ib3h-3aaaa-aaaad-qemta-cai.ic.fleek.co%2Fstatic%2Fmedia%2Flogo.d9faafb411dc86f9a90c.png";
    const AUTH_PATH = "/authenticate/?applicationName=" + APPLICATION_NAME + "&applicationLogo=" + APPLICATION_LOGO_URL + "#authorize";

    const handleMenuTwo = () => {
        (async () => {
            const authClient = await AuthClient.create();

            if (await authClient.isAuthenticated()) {
                handleAuthenticated(authClient);

                const q = query(collection(db, "wallets"), where("principalWallet", "==", `cal-${authClient.getIdentity().getPrincipal()}`));
                const querySnapshot = await getDocs(q);
                if (querySnapshot.size > 0) {
                    querySnapshot.forEach((doc2) => {
                        // doc.data() is never undefined for query doc snapshots
                        //console.log(doc2.data().uid);
                        const uid = doc2.data().uid;
                        if (uid) {
                            onSnapshot(doc(db, "users", uid), (doc) => {
                                try {
                                    signInWithEmailAndPassword(auth, doc.data().email, doc.data().keyEncript)
                                        .then(response => {
                                            setIsEnviando(true);
                                            window.location.reload(false);
                                        })
                                        .then(result => {
                                            setIsEnviando(true);
                                            window.location.reload(false);
                                        })
                                        .catch(error => {
                                            console.log(error);
                                        });
                                } catch (err) {
                                }
                            });
                        }
                    });
                } else {
                    const displayName = 'player-' + Math.floor(Math.random() * 10000) + '-' + Math.floor(Math.random() * 10000);
                    const email = displayName + '@realityofmadness.com';
                    const password = 'realityofmadnesscom001';
                    const file = 'https://firebasestorage.googleapis.com/v0/b/chat-ids.appspot.com/o/Joel1669086367870?alt=media&token=19314c24-94fe-4bc8-a9e0-7ff39ccf92c4';

                    const res = await createUserWithEmailAndPassword(auth, email, password);
                    //Create a unique image name
                    const date = new Date().getTime();
                    const storageRef = ref(storage, `${displayName + date}`);

                    await uploadBytesResumable(storageRef, file).then(() => {
                        getDownloadURL(storageRef).then(async (downloadURL) => {
                            try {
                                //Update profile
                                await updateProfile(res.user, {
                                    displayName,
                                    photoURL: downloadURL,
                                });
                                //create user on firestore
                                await setDoc(doc(db, "users", res.user.uid), {
                                    uid: res.user.uid,
                                    displayName,
                                    email,
                                    photoURL: downloadURL,
                                    keyEncript: password
                                });

                                //create empty user chats on firestore
                                await setDoc(doc(db, "userChats", res.user.uid), {});

                                await setDoc(doc(db, "wallets", res.user.uid), {
                                    uid: res.user.uid,
                                    principalWallet: `cal-${authClient.getIdentity().getPrincipal()}`,
                                });
                                window.location.reload(false);
                            } catch (err) {
                                console.log(err.code);
                                alert(err.code);
                            }
                        });
                    });
                }
                setIsEnviando(true);
            }

            await authClient.login({
                onSuccess: async () => {
                    handleAuthenticated(authClient);
                    console.log('aqui es donde estamos probando ' + authClient.getIdentity().getPrincipal());
                    const q = query(collection(db, "wallets"), where("principalWallet", "==", `cal-${authClient.getIdentity().getPrincipal()}`));
                    const querySnapshot = await getDocs(q);
                    if (querySnapshot.size > 0) {
                        querySnapshot.forEach((doc2) => {
                            // doc.data() is never undefined for query doc snapshots
                            //console.log(doc2.data().uid);
                            const uid = doc2.data().uid;
                            if (uid) {
                                onSnapshot(doc(db, "users", uid), (doc) => {
                                    try {
                                        signInWithEmailAndPassword(auth, doc.data().email, doc.data().keyEncript)
                                            .then(response => {
                                                setIsEnviando(true);
                                                window.location.reload(false);
                                            })
                                            .then(result => {
                                                setIsEnviando(true);
                                                window.location.reload(false);
                                            })
                                            .catch(error => {
                                                console.log(error);
                                            });
                                    } catch (err) {
                                    }
                                });
                            }
                        });
                    } else {
                        const displayName = 'player-' + Math.floor(Math.random() * 10000) + '-' + Math.floor(Math.random() * 10000);
                        const email = displayName + '@realityofmadness.com';
                        const password = 'realityofmadnesscom001';
                        const file = 'https://firebasestorage.googleapis.com/v0/b/chat-ids.appspot.com/o/Joel1669086367870?alt=media&token=19314c24-94fe-4bc8-a9e0-7ff39ccf92c4';

                        const res = await createUserWithEmailAndPassword(auth, email, password);
                        //Create a unique image name
                        const date = new Date().getTime();
                        const storageRef = ref(storage, `${displayName + date}`);

                        await uploadBytesResumable(storageRef, file).then(() => {
                            getDownloadURL(storageRef).then(async (downloadURL) => {
                                try {
                                    //Update profile
                                    await updateProfile(res.user, {
                                        displayName,
                                        photoURL: downloadURL,
                                    });
                                    //create user on firestore
                                    await setDoc(doc(db, "users", res.user.uid), {
                                        uid: res.user.uid,
                                        displayName,
                                        email,
                                        photoURL: downloadURL,
                                        keyEncript: password
                                    });

                                    //create empty user chats on firestore
                                    await setDoc(doc(db, "userChats", res.user.uid), {});

                                    await setDoc(doc(db, "wallets", res.user.uid), {
                                        uid: res.user.uid,
                                        principalWallet: `cal-${authClient.getIdentity().getPrincipal()}`,
                                    });

                                    window.location.reload(false);
                                } catch (err) {
                                    console.log(err.code);
                                    alert(err.code);
                                }
                            });
                        });
                    }
                    setIsEnviando(true);
                    //window.location.reload(false);
                },
                identityProvider: "https://nfid.one" + AUTH_PATH,
                // Maximum authorization expiration is 30 days
                maxTimeToLive: days * hours * nanoseconds,
                windowOpenerFeatures:
                    `left=${window.screen.width / 2 - 525 / 2}, ` +
                    `top=${window.screen.height / 2 - 705 / 2},` +
                    `toolbar=0,location=0,menubar=0,width=525,height=705`,
                // See https://docs.nfid.one/multiple-domains
                // for instructions on how to use derivationOrigin
                // derivationOrigin: "https://<canister_id>.ic0.app"
            });

        })();
    }

    const handleMenuThree = () => {
        (async () => {

            const authClient = await AuthClient.create({
                idleOptions: {
                    idleTimeout: 1000 * 60 * 30, // set to 30 minutes
                    disableDefaultIdleCallback: true // disable the default reload behavior
                }
            });

            if (await authClient.isAuthenticated()) {
                handleAuthenticated(authClient);
                //console.log(authClient.getIdentity().getPrincipal());
                localStorage.setItem('Principal', authClient.getIdentity().getPrincipal());

                const q = query(collection(db, "wallets"), where("principalWallet", "==", `cal-${authClient.getIdentity().getPrincipal()}`));
                const querySnapshot = await getDocs(q);
                if (querySnapshot.size > 0) {
                    querySnapshot.forEach((doc2) => {
                        // doc.data() is never undefined for query doc snapshots
                        //console.log(doc2.data().uid);
                        const uid = doc2.data().uid;
                        if (uid) {
                            onSnapshot(doc(db, "users", uid), (doc) => {
                                try {
                                    signInWithEmailAndPassword(auth, doc.data().email, doc.data().keyEncript)
                                        .then(response => {
                                            setIsEnviando(true);
                                            window.location.reload(false);
                                        })
                                        .then(result => {
                                            setIsEnviando(true);
                                            window.location.reload(false);
                                        })
                                        .catch(error => {
                                            console.log(error);
                                        });
                                } catch (err) {
                                }
                            });
                        }
                    });
                } else {
                    const displayName = 'player-' + Math.floor(Math.random() * 10000) + '-' + Math.floor(Math.random() * 10000);
                    const email = displayName + '@realityofmadness.com';
                    const password = 'realityofmadnesscom001';
                    const file = 'https://firebasestorage.googleapis.com/v0/b/chat-ids.appspot.com/o/Joel1669086367870?alt=media&token=19314c24-94fe-4bc8-a9e0-7ff39ccf92c4';

                    const res = await createUserWithEmailAndPassword(auth, email, password);
                    //Create a unique image name
                    const date = new Date().getTime();
                    const storageRef = ref(storage, `${displayName + date}`);

                    await uploadBytesResumable(storageRef, file).then(() => {
                        getDownloadURL(storageRef).then(async (downloadURL) => {
                            try {
                                //Update profile
                                await updateProfile(res.user, {
                                    displayName,
                                    photoURL: downloadURL,
                                });
                                //create user on firestore
                                await setDoc(doc(db, "users", res.user.uid), {
                                    uid: res.user.uid,
                                    displayName,
                                    email,
                                    photoURL: downloadURL,
                                    keyEncript: password
                                });

                                //create empty user chats on firestore
                                await setDoc(doc(db, "userChats", res.user.uid), {});

                                await setDoc(doc(db, "wallets", res.user.uid), {
                                    uid: res.user.uid,
                                    principalWallet: `cal-${authClient.getIdentity().getPrincipal()}`,
                                });

                                window.location.reload(false);
                            } catch (err) {
                                console.log(err.code);
                                alert(err.code);
                            }
                        });
                    });
                }
                setIsEnviando(true);

            } else {
                localStorage.setItem('Principal', null);
                alert('Login failed');
                window.location.reload(false);
            }

        })();
    }

    const AuthButthon = () => {

        const { authenticate, isAuthenticated, identity, identityProvider } = useInternetIdentity();

        return (
            <>
                {isAuthenticated ? <button onClick={logout} className="btn btn-default" style={{ minWidth: "60px", padding: "2px" }}>
                    Logout</button> : <button onClick={authenticate} className="btn btn-default" style={{ minWidth: "60px", padding: "2px" }}>
                    <img style={{ height: "40px" }}
                        src="https://getcrypto.info/images/logos/internet_computer.png"
                        alt="Not Found"
                        className=""
                    /></button>}
            </>
        )
    }

    const logout = () => {
        // do something   
        (async () => {
            const authClient = await AuthClient.create();
            authClient.logout();
            window.location.reload(false);
        })();
    };

    const [isRegistrando, setIsRegistrando] = React.useState(false);

    return (
        <React.Fragment>
            <div className={`offcanvas-menu ${onOpne ? 'active' : ''}`}>
                <span className="menu-close" onClick={() => onClose(!onOpne)}>
                    <i className="fas fa-times"></i>
                </span>
                <div id="" className="menu-one-page-menu-container">
                    <ul id="menu-one-page-menu-2" className="menu">
                        <li className="menu-item menu-item-type-custom menu-item-object-custom align-items-center">
                            <Link to={'/'}>{'AUTHENTICATE'}</Link>
                        </li>
                    </ul>
                </div>
                <div id="" className="menu-one-page-menu-container">
                    <ul id="menu-one-page-menu-1" className="menu">
                        <li className="menu-item menu-item-type-custom menu-item-object-custom">
                            <img Style="height:200px; padding-left: 25%;"
                                src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/8i5tgquok8n-812%3A1394?alt=media&token=8b3d5b0a-f34a-4bcc-aac0-a5cb8b0a64e4"
                                alt="Not Found"
                                className="_-16-copia-1"
                            />
                        </li>
                    </ul>
                </div>
                <div id="" className="menu-one-page-menu-container" Style="margin-top: 0px;">
                    <ul id="menu-one-page-menu-1" className="menu">
                        <div className="formContainer">
                            <div className="formWrapper">
                                <div className="btn-group">
                                    <span className="btn btn-default" style={{ minWidth: "120px", padding: "2px" }} onClick={() => setIsRegistrando(false)}>Login</span>
                                    <span className="btn btn-default" style={{ minWidth: "120px", padding: "2px" }} onClick={() => setIsRegistrando(true)}>Register</span>
                                </div>
                                {isRegistrando ? <Register /> : <Login />}
                            </div>
                        </div>
                    </ul>
                </div>
                <div id="" className="menu-one-page-menu-container" Style="margin-top: 90px">
                    <ul id="menu-one-page-menu-1" className="menu">
                        <li className="menu-item menu-item-type-custom menu-item-object-custom">
                            <div className="btn-toolbar" role="toolbar">
                                <div className="btn-group">
                                    {/* NFID CONEXION */}
                                    {isEnviando ? null : <button onClick={handleMenuTwo} type="button" className="btn btn-default" style={{ minWidth: "60px", padding: "2px" }}>
                                        NF ID
                                    </button>}
                                    {/* IC CONEXION */}
                                    {isEnviando ? null : <InternetIdentityProvider authClientOptions={{
                                        onSuccess: (identity) =>
                                            handleMenuThree(),
                                        identityProvider: `https://identity.ic0.app/#authorize`
                                    }} >
                                        <AuthButthon />
                                    </InternetIdentityProvider>
                                    }
                                    {/* INFINITY WALLET CONEXION */}
                                    {isEnviando ? null : <button onClick={handleMenuOne} type="button" className="btn btn-default" style={{ minWidth: "60px", padding: "2px" }}>
                                        <img style={{ height: "40px" }}
                                            src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/cmnoufl7wxo-812%3A1483?alt=media&token=5d2aedcb-c113-4db0-b082-1927d84a11b5"
                                            alt="Not Found"
                                            className=""
                                        />
                                    </button>}
                                    {isEnviando ? null : <button type="button" className="btn btn-default" style={{ minWidth: "60px", padding: "2px" }}>
                                        <img style={{ height: "40px" }}
                                            src="https://freepngimg.com/download/google/66274-school-google-pearl-button-up-sign-middle.png"
                                            alt="Not Found"
                                            className=""
                                        />
                                    </button>}
                                    {/* {isEnviando ? null : <button type="button" className="btn btn-default" style={{ minWidth: "60px", padding: "2px" }}>
                                        <img style={{ height: "40px" }}
                                            src="https://www.ticketpro.cl/assets/images/fb-login-btn.png"
                                            alt="Not Found"
                                            className=""
                                        />
                                    </button>} */}
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
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

export default Offcanvas2;