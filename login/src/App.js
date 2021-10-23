import "./App.css";
import styled from "styled-components";
import ContextProvider from "./context/ContextProvider";
import { AccountBox } from "./components/accountBox";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from "./components/Home";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function App() {
  return (
    <Router>
      <Switch>
        <ContextProvider>
          <AppContainer>
            <Route exact path="/login" component={AccountBox}/>
            <Route exact path="/home" component={Home}/>
          </AppContainer>
        </ContextProvider>
      </Switch>
    </Router>
  );
}

export default App;