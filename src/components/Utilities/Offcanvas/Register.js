import React, { useState } from "react";
// import Add from "../img/addAvatar.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useHistory, Link } from "react-router-dom";

const Register = ({ onOpne, onClose }) => {
    const [err, setErr] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useHistory();

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();
        const displayName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const file = '';

        try {
            //Create user
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
                        });
                        //create user on firestore
                        await setDoc(doc(db, "users", res.user.uid), {
                            uid: res.user.uid,
                            displayName,
                            email,
                            keyEncript: password
                        });

                        //create empty user chats on firestore
                        await setDoc(doc(db, "userChats", res.user.uid), {});
                        window.location.reload(false);
                    } catch (err) {
                        console.log(err.code);
                        alert(err.code);
                        setErr(true);
                        setLoading(false);
                    }
                });
            });
        } catch (err) {
            console.log(err.code);
            if (err.code === 'auth/weak-password') {
                alert('Weak password');
            }

            setErr(true);
            setLoading(false);
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <li className="menu-item menu-item-type-custom menu-item-object-custom">
                <input required type="text" placeholder="display name" />
                <input type="email" placeholder="email" />
                <input type="password" placeholder="password" />
            </li>
            <li className="menu-item menu-item-type-custom menu-item-object-custom" >
                <button className="btn btn-block" Style="margin-top: 140px">Register</button>
            </li>
        </form>
    );
}
export default Register;