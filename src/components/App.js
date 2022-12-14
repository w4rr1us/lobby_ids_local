import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthClient } from "@dfinity/auth-client";
import { Actor, Identity } from "@dfinity/agent";
import { canisterId, createActor } from "./Utilities/Blog/BlogOne/declarations/whoami";


import Header from './Utilities/Header/Header';
import Home from './Pages/Home/HomeMain/HomeMain';
import HomeTwo from './Pages/Home/HomeTwo/HomeTwo';
import HomeThree from './Pages/Home/HomeThree/HomeThree';
import Footer from './Utilities/Footer/Footer';
import AboutUs from './Pages/AboutUs/AboutUs';
import Gallery from './Pages/Gallery/Gallery';
import Teams from './Pages/Team/Team';
import Faqs from './Pages/Faq/Faq';
import Games from './Pages/Games/Games';
import Matchese from './Pages/Matchese/Matchese';
import MatcheseDetails from './Pages/MatcheseDetails/MatcheseDetails';
import LiveStreaming from './Pages/LiveStreaming/LiveStreaming';
import Error404 from './Pages/404';
import Joinchat from './Pages/Chat/Homechat';
import Testchat from './Pages/Chat/Testchat';
import BlogPost from './Pages/Blog/Blog';
import ContactUs from './Pages/ContactUs/ContactUs';
import SinglePost from './Pages/SinglePost/SinglePost';
import heroImg from '../assets/img/slider/slider_img_bg.png';
import PlayRom from './Pages/Games/PlayRom';
import PlayTsfv from './Pages/Games/PlayTsfv';


const heroInformation = { img: heroImg, }
const { img } = heroInformation;

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
  } else {
    const principalId = await window.ic.infinityWallet.getPrincipal();
    if (principalId) {
      localStorage.setItem('Principal', principalId);
    } else {
      localStorage.setItem('Principal', null);
    }
  }
})();


const App = () => {
  return (
    <Router>
      <div className="App" style={{ background: `url(${img}) no-repeat center center / cover` }}>
        {/* Header */}
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home-two" component={HomeTwo} />
          <Route exact path="/home-three" component={HomeThree} />
          <Route exact path="/about" component={AboutUs} />
          <Route exact path="/gallery" component={Gallery} />
          <Route exact path="/team" component={Teams} />
          <Route exact path="/faq" component={Faqs} />
          <Route exact path="/game" component={Games} />
          <Route exact path="/matchese" component={Matchese} />
          <Route exact path="/matchese-details" component={MatcheseDetails} />
          <Route exact path="/live-streaming" component={LiveStreaming} />
          <Route exact path="/404" component={Error404} />
          <Route exact path="/joinchat" component={Joinchat} />
          <Route exact path="/testchat" component={Testchat} />
          <Route exact path="/blog" component={BlogPost} />
          <Route exact path="/single-post" component={SinglePost} />
          <Route exact path="/contact" component={ContactUs} />
          <Route exact path="/playrom" component={PlayRom} />
          <Route exact path="/playtsv" component={PlayTsfv} />

        </Switch>
        {/* Footer */}
        <Footer />
      </div>
    </Router>
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

export default App;
