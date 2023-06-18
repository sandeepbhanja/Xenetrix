import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import {
  getFirestore,
  doc,
  getDoc,
  getDocs,
  setDoc,
  collection,
  writeBatch,
  query,
} from "firebase/firestore";

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

//Sign-In methods
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithEmail = async (email, password) => {
  if (!email || !password) {
    return;
  }
  return await signInWithEmailAndPassword(auth, email, password);
};

//Sign-Up Methods
export const signUpWithEmailAndPassword = async (email, password) => {
  return await createUserWithEmailAndPassword(auth, email, password);
};

//Sign-Out Methods
export const SignOut = async () => await signOut(auth);

export const onAuthChangedListener = (callback) => {
  onAuthStateChanged(auth, callback);
};

//Database
export const db = getFirestore();

export const addCollectionAndDocuments = async (
  collectionKey,
  objectstoAdd
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);
  objectstoAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log('done');
};

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});

  return categoryMap;
};

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
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
        ...additionalInformation,
      });
    } catch (err) {
      console.log(err);
    }
  }
};
