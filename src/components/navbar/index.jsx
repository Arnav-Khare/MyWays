import React,{useState} from "react";
import styled from "styled-components";
import { BrandLogo } from "../brandLogo";
import { Button } from "../button/button";
import { Marginer } from "../marginer";
import WhatsappLogo from "../../images/logos/whatsapp.png"
import { Modal } from 'react-bootstrap';

import GoogleImage from "../../images/logos/google.png"
import facebookImage from "../../images/logos/linkdin.png"
import axios from "axios";
import {useNavigate} from "react-router-dom";

const NavbarConatiner = styled.div`
    width:100%;
    height:85px;
    display:flex;
    align-items:center;
    justify-content:space-evenly;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const AccessibilityContainer = styled.div`
    display:flex;
    img{
        width:30px;
        height:30px
    }
`;

const ActionLink = styled.div`
    margin-top:5px;
    font-size:17px;
    color:#272727;
    cursor:pointer;
    oultine:none;
    transition:all 200ms ease-in-out;

    &:hover{
        filter:contrast(0.6);
    }
`;

const Line = styled.h6`
    display: flex;
    flex-direction: row;
    color:#A5A5A5;
    font-size:14px;
    &:before,
    &:after{
        content: " ";
        flex: 1 1;
        border-bottom: 2px solid #A5A5A5;
        margin: auto;
    }
`;

const Border = styled.div`
    width:30%;
    height:60px;
    border:1px solid black;
    text-align:center;
    border-radius:7px;
    cursor:pointer;
    img{
        margin-top:8px;
        width:40px;
        height:40px;
    }
    
`;
const ImageContainer = styled.div`
    display:flex;
    width:100%;
    justify-content:space-evenly;
    
`;

const InputForm = styled.input`
display:flex;
justify-content:center;
outline: 0;
background: #f2f2f2;
width: 80%;
border: 0;
border-radius: 5px;
margin: 0 auto;
padding: 15px;
box-sizing: border-box;
font-size: 14px;
font-family: 'Comfortaa', cursive;`;

const Center = styled.div`
    color:#A5A5A5;
    display:flex;
    justify-content:center;
    cursor:pointer;

`


function MyVerticallyCenteredModal(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage,setErrorMessage] = useState("")
    let navigate = useNavigate()
    const handleSubmit = async() => {
     
      if (email === "" || password === "") {
        setErrorMessage('Empty username/password field')
      } else{
        const loginDetails = {
          email,
          password
        }
        axios.post('http://localhost:6001/login',loginDetails).then((response) => {
          if(response.status === 200){
            localStorage.setItem("isAuthenticated", "true");
            navigate('user',{ state: response.data})
          }
        }, (error) => {
          setErrorMessage('Invalid Login Details')
        });
        
      }
    };
    return (
      <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter" >
            Login
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Line>Login With</Line>
          <Marginer direction="vertical" margin={10}></Marginer>
          <ImageContainer>
                <Border>
                    <img src={GoogleImage}/>
               </Border>
               <Border>
                    <img src={facebookImage}/>
               </Border>
          </ImageContainer>
          <Marginer direction="vertical" margin={20}></Marginer>
          <Line>OR</Line>
          <Marginer direction="vertical" margin={20}></Marginer>
          <InputForm
          type="text" 
          value={email}
          placeholder="Email"
          name="email"
          onChange={(e) =>setEmail(e.target.value)}
        />
        <Marginer direction="vertical" margin={20}></Marginer>
         <InputForm
          type="password" 
          placeholder="Password"
          value={password}
          name="password"
          onChange={(e) =>setPassword(e.target.value)}
        />
        <Marginer direction="vertical" margin={20}></Marginer>
        <Center>
        {errorMessage && (
          <p className="text-danger"> {errorMessage} </p>
        )}
        </Center>
        <Center>
            <Button width={80} center={true} onClick={handleSubmit}>
                Login
            </Button>
        </Center>
        <Marginer direction="vertical" margin={20}></Marginer>
        <Center>
            Forgot your Password?
        </Center>
        </Modal.Body>
        <Modal.Footer>
           
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  function MyVerticallyCenteredModalRegister(props) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phonenumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [campusId, setCampusId] = useState("");
    const [errorMessage,setErrorMessage] = useState("")
    let navigate = useNavigate()
    const handleSubmit = async(e) => {
     e.preventDefault();
      if (email === "" || password === "" || name ===" " || phonenumber === " " || confirmPassword === " ") {
        setErrorMessage('Please Enter the Required Field')
      } else if(confirmPassword != password){
        setErrorMessage("Password MisMatch...!")
      }
      else{
        const userDetails = {
          name,
          email,
          password,
          phonenumber,
          campusId,
        }
        axios.post('http://localhost:6001/register',userDetails).then((response) => {
          if(response.status === 200){
            localStorage.setItem("isAuthenticated", "true");
            navigate('user',{ state: response.data})
          }
        }, (error) => {
          setErrorMessage('Invalid Login Details')
        });
        
      }
    }
    return (
      <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter" >
            Candidate
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Line>Login With</Line>
          <Marginer direction="vertical" margin={10}></Marginer>
          <ImageContainer>
                <Border>
                    <img src={GoogleImage}/>
               </Border>
               <Border>
                    <img src={facebookImage}/>
               </Border>
          </ImageContainer>
          <Marginer direction="vertical" margin={20}></Marginer>
          <Line>OR</Line>
          <Marginer direction="vertical" margin={20}></Marginer>
          <InputForm
          type="text" 
          value={name}
          placeholder="FullName"
          name="fullname"
          onChange={(e) =>setName(e.target.value)}
        />
        <Marginer direction="vertical" margin={10}></Marginer>
         <InputForm
          type="text" 
          placeholder="Email"
          value={email}
          name="email"
          onChange={(e) =>setEmail(e.target.value)}
        />
        <Marginer direction="vertical" margin={10}></Marginer>
         <InputForm
          type="numbr" 
          placeholder="PhoneNumber"
          value={phonenumber}
          name="phonenumber"
          onChange={(e) =>setPhoneNumber(e.target.value)}
        />
        <Marginer direction="vertical" margin={10}></Marginer>
         <InputForm
          type="password" 
          placeholder="Password"
          value={password}
          name="password"
          onChange={(e) =>setPassword(e.target.value)}
        />
        <Marginer direction="vertical" margin={10}></Marginer>
         <InputForm
          type="password" 
          placeholder="Confirm Password"
          value={confirmPassword}
          name="confirmPassword"
          onChange={(e) =>setConfirmPassword(e.target.value)}
        />
        <Marginer direction="vertical" margin={10}></Marginer>
         <InputForm
          type="text" 
          placeholder="Campus ID (Optional)"
          value={campusId}
          name="campusId"
          onChange={(e) =>setCampusId(e.target.value)}
        />
          <Center>
        {errorMessage && (
          <p className="text-danger"> {errorMessage} </p>
        )}
        </Center>
        <Marginer direction="vertical" margin={20}></Marginer>
        <Center>
            <Button width={80} center={true} onClick={(e)=>{handleSubmit(e)}}>
                Register As Candidate
            </Button>
        </Center>

        <Marginer direction="vertical" margin={20}></Marginer>
        </Modal.Body>
        <Modal.Footer>
           
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
export function Navbar(props){
    const [modalShow, setModalShow] = React.useState(false);
    const [modalRegisterShow, setModalRegisterShow] = React.useState(false);
    const isAuthenticated = localStorage.getItem('id');
    return (
    <>
        <NavbarConatiner>
            <BrandLogo logoSize={70}/>
            <Marginer direction="horizontal" margin={150}></Marginer>
             <AccessibilityContainer>
                 <AccessibilityContainer>
                     <img src={WhatsappLogo}  />
                     <Marginer direction="horizontal" margin={10}></Marginer>
                     <ActionLink>Join Community</ActionLink>
                 </AccessibilityContainer>
                 <Marginer direction="horizontal" margin={20}></Marginer>
                 <AccessibilityContainer>
                     <ActionLink>Practisium Plus</ActionLink>
                 </AccessibilityContainer>
                 <Marginer direction="horizontal" margin={20}></Marginer>
                 <AccessibilityContainer>
                     <ActionLink>For Students</ActionLink>
                 </AccessibilityContainer>
                 <Marginer direction="horizontal" margin={20}></Marginer>
                 <AccessibilityContainer>
                     <ActionLink>For Employee</ActionLink>
                 </AccessibilityContainer>
                 <Marginer direction="horizontal" margin={20}></Marginer>
                 <Button outline={true} onClick={() => setModalShow(true)} >LOG IN</Button>
                 <Marginer direction="horizontal" margin={20}></Marginer>
                 <Button outline={false} onClick={() => setModalRegisterShow(true)}>REGISTER</Button>


             </AccessibilityContainer>
        </NavbarConatiner>
        <MyVerticallyCenteredModal
             show={modalShow}
             onHide={() => setModalShow(false)}
        />
         <MyVerticallyCenteredModalRegister
             show={modalRegisterShow}
             onHide={() => setModalRegisterShow(false)}
        />
            </>
        )
    }