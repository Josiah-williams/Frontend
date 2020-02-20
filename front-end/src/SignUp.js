import React from 'react';
import './App.css';
import Styled from 'styled-components';
import {Switch, Route,Link} from 'react-router-dom'
import FormBusiness from './Components/FormBusiness';
import FormVolunteer from './Components/FormVolunteer';
import SignUpBusiness from './SignUpBusiness';
import SignUpVolunteer from './SignUpVolunteer';


const Box = Styled.div`
display: flex;
flex-flow: column;
align-items: center;
border: 3px solid black;
padding: 20px 0px;
margin: 10px; 
width: 30%;
`
const Borders = Styled.div`
border: 3px solid black;
padding: 10px 0;
width: 50%;

`
const Container = Styled.div`
display: flex;
flex-flow: column;
justify-content: center;
border: 3px solid black;
height: 100vh;
`
const Button = Styled.button`
background: white;
border: 2px solid black;
border-radius: 5px;
padding: 25px;
`

    
function SignUp() {

return (
    <div classname="Login">

<Borders></Borders>
      <Container>
<h1>Sign Up!</h1>
<div className="Boxes">
<Box>
  <Link to="/business"><Button className="hover"></Button></Link>
  <h3>I'm a business</h3>
  <p>I want to donate food</p>
</Box>
<Box>
  <Link to="/volunteer"><Button className="hover"></Button></Link>
  
  <h3>I'm a volunteer</h3>
  <p>I want to receive donations</p>
</Box>
</div>

<Route exact path="/Formbusiness">
        <FormBusiness />
      </Route>
      <Route exact path="/volunteer">
        <FormVolunteer />
      </Route>
      <Route exact path="/business/signup">
        <SignUpBusiness />
      </Route>
      <Route exact path="/volunteer/signup">
        <SignUpVolunteer />
      </Route>

      
      </Container>
      <Borders></Borders>
      </div>
);
}
      export default SignUp;
