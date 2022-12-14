import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

const Login = ({ onOpne, onClose }) => {

    const [err, setErr] = useState(false);
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;

        try {

            const resp = await signInWithEmailAndPassword(auth, email, password);
            //console.log(resp);
            window.location.reload(false);

        } catch (err) {
            if (err.code === 'auth/user-not-found') {
                alert('Usuario No encontrado');
            }
            if (err.code === 'auth / wrong - password') {
                alert('contraseña incorrecta');
            }
            console.log(err.code);
            setErr(true);
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <li className="menu-item menu-item-type-custom menu-item-object-custom">
                <input type="email" placeholder="email" />
                <input type="password" placeholder="password" />
            </li>
            <li className="menu-item menu-item-type-custom menu-item-object-custom" >
                <button className="btn btn-block" Style="margin-top: 90px">Sign in</button>
            </li>
        </form>
    );
}
export default Login;