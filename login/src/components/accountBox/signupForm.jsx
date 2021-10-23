import React, { useState,useEffect,useContext} from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
  ErrorContainer,
} from "./common";
import { Marginer } from "../marginer";
import { authenticateSignup } from "../../service/api";
import { AccountContext } from "./accountContext";

const signupInitialValues = {
    fullname: '',
    phone: '',
    email: '',
    password: ''
};

export function SignupForm(props) {
  const [ signup, setSignup ] = useState(signupInitialValues);
  const [error,setError]=useState(false);
  const [value,setValue]=useState("");
  const {switchToSignin} =useContext(AccountContext)

  const onInputChange = (e) => {
      setSignup({ ...signup, [e.target.name]: e.target.value });
  }

  useEffect(()=>{
    value === signup.password?setError(false):setError(true);
  },[value])

  const onpassChange=(e)=>{
    setValue(e.target.value)
  }

   const signupUser = async() => {
      let response = await authenticateSignup(signup);
      if(!response) {
        alert('User with the email already exists! Try again');
        return;
      }
      alert('User registered! Now go and Login with the credentials');
      switchToSignin();
  }



  return (
    <BoxContainer>
      <FormContainer>
        <Input type="text" name='fullname' onChange={(e) => onInputChange(e)} placeholder="Full Name" />
        <Input type="text" name='phone' onChange={(e) => onInputChange(e)} placeholder="Phone Number"/>
        <Input type="email" name='email' onChange={(e) => onInputChange(e)} placeholder="Email" />
        <Input type="password" name='password' onChange={(e) => onInputChange(e)} placeholder="Password" />
        <Input type="password" onChange={(e) => onpassChange(e)} placeholder="Confirm Password" />
        {error && <ErrorContainer>The passwords don't match.</ErrorContainer>}
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton onClick={() => signupUser()} type="submit">Signup</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Already have an account?
        <BoldLink href="#" onClick={switchToSignin}>
          Signin
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}