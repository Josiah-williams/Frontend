import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import './App.css';

import login from './Login';

const Box = styled.div`
display: flex;
flex-flow: column;
align-items: center;
border: 3px solid black;
padding: 20px 0px;
margin: 10px; 
width: 30%;
`
const Borders = styled.div`
border: 3px solid black;
padding: 10px 0;
width: 50%;

`
const Container = styled.div`
display: flex;
flex-flow: column;
justify-content: center;
border: 3px solid black;
height: 100vh;
width: 50%;
margin: -3px 0;
`

const Button = styled.button`
color: #EEEEEE;
background-color: #2723EC;
    width: 150px;
    height: 30 px;
    text-align: center;
    border-radius: 10% / 50%;;
    margin-left: 5%;
    margin-right: 30%;
    font-size: 20px
`
const Span = styled.span`
padding-bottom = 50px;
`

function App() {

  

  return (
    <div className="App">
      
      <Borders></Borders>
      <Container>
        <Switch>
        <Route exact path="/">
      <h1>Welcome to Replate!</h1>
      <div className="Boxes">
      
        <Link to="/Login"><Button className="hover">Login</Button></Link>
        
        <span class="psw">Don't have an account? Click <a href="#">here</a> to sign up</span>
    
      </div>
      </Route>
      
      </Switch>
      
      </Container>
      <Borders></Borders>
    </div>
  );
}

export default App;
