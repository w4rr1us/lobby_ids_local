import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import Navbar from '../../Utilities/Navbar/Navbar';

function Play() {
    const { unityProvider, isLoaded, loadingProgression } = useUnityContext({
        loaderUrl: "https://test.realityofmadness.com/Build/HS.loader.js",
        dataUrl: "https://test.realityofmadness.com/Build/HS.data",
        frameworkUrl: "https://test.realityofmadness.com/Build/HS.framework.js",
        codeUrl: "https://test.realityofmadness.com/Build/HS.wasm",
    });
    // return (
    //     <Unity unityProvider={unityProvider} style={{ width: 1920, height: 1080 }} />
    // );
    const loadingPercentage = Math.round(loadingProgression * 100);
    return (
        <section id="home" className="slider-area slider-four fix p-relative">
            <div className="slider-active">
                <div className="single-slider slider-bg align-items-center">
                    <div className="container">
                        <div className="row justify-content-center pt-10">
                            <div className="col-lg-1 col-md-1">
                                <Navbar />
                            </div>
                            <div className="col-lg-11 col-md-11">
                                <div className="container">
                                    {isLoaded === false && (
                                        // We'll conditionally render the loading overlay if the Unity
                                        // Application is not loaded.
                                        <div className="loading-overlay">
                                            <p>Loading... ({loadingPercentage}%)</p>
                                        </div>
                                    )}
                                    {/* <Unity className="unity" unityProvider={unityProvider} /> */}
                                    <Unity
                                        unityProvider={unityProvider}
                                        style={{ width: '90%', height: '80%', alignContent: 'center' }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );

}

export default Play;