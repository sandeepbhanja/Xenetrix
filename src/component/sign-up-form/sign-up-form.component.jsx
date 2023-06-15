import { useState } from "react";
import {
  signUpWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import './sign-up-container.style.scss';
import Button from "../button/button.component";
const defualtFormField = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formField, setFormField] = useState(defualtFormField);
  const { displayName, email, password, confirmPassword } = formField;
  const resetFormField = () => {
    setFormField(defualtFormField);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormField({ ...formField, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      return;
    }

    try {
      const response = await signUpWithEmailAndPassword(email, password);
      await createUserDocumentFromAuth(response.user, { displayName });
      resetFormField();
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        alert("Email already in use");
      }
      console.log(err);
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your Email and Password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
        />
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
        />
        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
        />
        <div className="Button-container">
          <Button
            type="submit"
            children="Sign-Up"
            ButtonType="default"
          ></Button>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
