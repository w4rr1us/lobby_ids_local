import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';


import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/animate.min.css';
import './assets/css/dripicons.css';
import './assets/css/magnific-popup.css';
import './assets/fontawesome/css/all.min.css';
import './assets/font-flaticon/flaticon.css';
import './assets/css/meanmenu.css';
import './assets/css/default.css';
import './assets/css/style.css';
import './assets/css/responsive.css';
import { AuthContextProvider } from "./context/AuthContext";
import { ChatContextProvider } from "./context/ChatContext";

ReactDOM.render(<AuthContextProvider>
    <ChatContextProvider>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </ChatContextProvider>
</AuthContextProvider>, document.getElementById('root'));