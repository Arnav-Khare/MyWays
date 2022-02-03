import React,{useState} from "react";
import styled from "styled-components";
import { BrandLogo } from "../brandLogo";
import { Button } from "../button/button";
import { Marginer } from "../marginer";
import WhatsappLogo from "../../images/logos/whatsapp.png"
import { Modal } from 'react-bootstrap';

import GoogleImage from "../../images/logos/google.png"
import facebookImage from "../../images/logos/linkdin.png"

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
          onChange={(e) =>setEmail(e.target.value)}
        />
        <Marginer direction="vertical" margin={20}></Marginer>
         <InputForm
          type="password" 
          placeholder="Password"
          value={password}
          onChange={(e) =>setPassword(e.target.value)}
        />
        <Marginer direction="vertical" margin={20}></Marginer>
        <Center>
            <Button width={80} center={true} onClick={()=>{alert('hello')}}>
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
export function Navbar(props){
    const [modalShow, setModalShow] = React.useState(false);
    
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
                 <Button outline={false}>REGISTER</Button>


             </AccessibilityContainer>
        </NavbarConatiner>
        <MyVerticallyCenteredModal
             show={modalShow}
             onHide={() => setModalShow(false)}
        />
            </>
        )
    }