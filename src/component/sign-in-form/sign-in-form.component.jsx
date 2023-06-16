import FormInput from "../form-input/form-input.component";
import {
  signInWithGooglePopup,
  signInWithEmail,
} from "../../utils/firebase/firebase.utils";
import Button from "../button/button.component";
import { useState} from "react";
import './sign-in-form.style.scss';

const defaultFormField = {
  email: "",
  password: "",
};

const SignInForm = () => {

  const [formField, setFormField] = useState(defaultFormField);
  const {email, password} = formField;
  const login = async () => await signInWithGooglePopup();
  const resetFormField = () => {
    setFormField(defaultFormField);
  }
  const handleChange = async (e) => {
    const { name, value } = e.target;
    setFormField({ ...formField, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      await signInWithEmail(email, password);
      resetFormField();
    }
    catch(err){
      if(err.code==='auth/wrong-password'){
        alert('Wrong password or Username');
      }
      console.log(err);
    }
  };


  return (
    <div className="sign-in-container">
      <h2>Have an account?</h2>
      <span>Sign-In</span>
      <FormInput
        label="Email"
        type="email"
        required
        onChange={handleChange}
        name="email"
      />
      <FormInput
        label="Password"
        type="password"
        required
        onChange={handleChange}
        name="password"
      ></FormInput>
      <div className="Button-container">
        <Button onClick={handleSubmit} className="btn-1" children="Sign-in" type="submit"></Button>
        <Button
          onClick={login}
          className="btn-2"
          children="Google Sign In"
          type="submit"
          ButtonType="google"
        ></Button>
      </div>
    </div>
  );
};

export default SignInForm;
