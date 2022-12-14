import React from 'react'

import { InternetIdentityProvider, useInternetIdentity, AuthIframe } from '@internet-identity-labs/react-ic-ii-auth'

const AuthButthon = () => {
    const [showModal, setShowModal] = React.useState(true)
    const { authenticate, isAuthenticated, identity, identityProvider } = useInternetIdentity()

    // THE IFRAME CURRENTLY IS NOT SUPPORTED ON SAFARI
    const isSafari = navigator.userAgent.match(/(Safari)/)

    console.log('>> initialize your actors with', { identity })

    const handleAuthButtonClick = React.useCallback(() => {
        setShowModal(true)
    }, [])

    const handleAuth = React.useCallback(async () => {
        try {
            await authenticate()
        } catch (e) {
            console.error(e)
            // setShowModal(false)
        }
    }, [authenticate])

    return (
        <>
            <button className='btn btn-default' onClick={isSafari ? handleAuth : authenticate}>
                {isAuthenticated ? 'Logout' : 'LOGIN WALLET IC'}
            </button>
            {/* THE IFRAME CURRENTLY IS NOT SUPPORTED ON SAFARI */}
            {!isSafari && showModal && (
                <div className="modal">
                    <AuthIframe src={identityProvider} onLoad={handleAuth} />
                </div>
            )}
        </>
    )
}

const BlogOne = () => {
    return (
        <InternetIdentityProvider
            authClientOptions={{
                onSuccess: (identity) => console.log(
                    ">> Carga directa con ", { identity }
                ),
                // NOTE: Overwrite identityProvider in dev mode
                // defaults to "https://identity.ic0.app/#authorize"
                identityProvider: `https://identity.ic0.app/#authorize`
            }}
        >
            <AuthButthon />
        </InternetIdentityProvider>
    )
}

export default BlogOne