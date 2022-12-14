import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';
import {
    getFirestore,
    collection,
    addDoc,
    serverTimestamp,
    onSnapshot,
    query,
    orderBy,
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAFkmYCHM1oxscWncBlXI9eUI81ncL4nBE",
    authDomain: "chat-ids.firebaseapp.com",
    projectId: "chat-ids",
    storageBucket: "chat-ids.appspot.com",
    messagingSenderId: "2105819817",
    appId: "1:2105819817:web:74ccc36539f097324e9fb8",
    measurementId: "G-QGDKL1Y4EF"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);



async function loginWithGoogle() {
    try {
        const provider = new GoogleAuthProvider();
        const auth = getAuth();

        const { user } = await signInWithPopup(auth, provider);

        return { uid: user.uid, displayName: user.displayName };
    } catch (error) {
        // if (error.code !== 'auth/cancelled-popup-request') {
        console.error(error);
        // }
        return null;
    }
}

async function sendMessage(roomId, user, text) {
    try {
        await addDoc(collection(db, 'chat-rooms', roomId, 'messages'), {
            uid: user.uid,
            displayName: user.displayName,
            text: text.trim(),
            timestamp: serverTimestamp(),
        });
    } catch (error) {
        console.error(error);
    }
}

function getMessages(roomId, callback) {
    return onSnapshot(
        query(
            collection(db, 'chat-rooms', roomId, 'messages'),
            orderBy('timestamp', 'asc')
        ),
        (querySnapshot) => {
            const messages = querySnapshot.docs.map((x) => ({
                id: x.id,
                ...x.data(),
            }));

            callback(messages);
        }
    );
}

export { loginWithGoogle, sendMessage, getMessages };
