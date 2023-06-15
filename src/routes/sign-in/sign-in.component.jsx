import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

const SignIn = ()=>{

    const login = async()=>{
        const res = await signInWithGooglePopup();
        createUserDocumentFromAuth(res.user);
    }

    return (
      <div>
        <h1>Sign In</h1>
        <button onClick={login}>Sign In</button>
      </div>
    );
}

export default SignIn;