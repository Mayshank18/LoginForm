import React, { useContext,useState,useEffect } from "react";
import {
  BoldLink,
  BoxContainer,
  ErrorContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { authenticateLogin } from "../../service/api";
import  { LoginContext }  from "../../context/ContextProvider";
import { AccountContext } from "./accountContext";
import { useHistory } from "react-router-dom";

const loginInitialValues = {
    email: '',
    password: ''
};


export const LoginForm=(props)=> {
  let history = useHistory(); 
  const [ error, showError] = useState(false);
  const [ login, setLogin ] = useState(loginInitialValues);
  const {setAccount,setLoggedIn} = useContext(LoginContext)
  const {switchToSignup} = useContext(AccountContext)

  useEffect(() => {
      showError(false);
  }, [login])

  const onValueChange = (e) => {
      setLogin({ ...login, [e.target.name]: e.target.value });
  }

  const loginUser = async() => {
      let response = await authenticateLogin(login);
      if(!response) {
          showError(true);
      }
      else {
          showError(false);
          alert('Login successfull');
          console.log(response.data);
          setAccount(response.data);
          setLoggedIn(true);
          history.push("/home");
      }
  }


  return (
    <BoxContainer>
      <FormContainer>
        <Input type="text" name="email" onChange={(e) => onValueChange(e)} placeholder="Enter your email" />
        <Input type="password" name="password" onChange={(e) => onValueChange(e)} placeholder="Enter the password" />
        { error && <ErrorContainer>Please fill in the correct credentials.</ErrorContainer> }
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <MutedLink href="#">Forget your password?</MutedLink>
      <Marginer direction="vertical" margin="1.6em" />
      <SubmitButton onClick={() =>loginUser()} type="submit">Signin</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Don't have an account?{" "}
        <BoldLink href="#" onClick={switchToSignup}>
          Signup
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}