import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAfwmnlxexCzo3PATgk9CTi32xaq3tjFWw",

  authDomain: "xenetrix-304e9.firebaseapp.com",

  projectId: "xenetrix-304e9",

  storageBucket: "xenetrix-304e9.appspot.com",

  messagingSenderId: "866542996685",

  appId: "1:866542996685:web:f815b707fe7e71d212ad84",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider(firebaseApp);
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);
  if (userSnapshot.exists()) {
    console.log("User already exists");
  } else {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (err) {
      console.log(err);
    }
  }
};
