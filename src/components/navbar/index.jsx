import React from "react";
import styled from "styled-components";
import { BrandLogo } from "../brandLogo";
import { Button } from "../button/button";
import { Marginer } from "../marginer";
import WhatsappLogo from "../../images/logos/whatsapp.png"
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
export function Navbar(props){
    return <NavbarConatiner>
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
                 <Button outline={true}>LOG IN</Button>
                 <Marginer direction="horizontal" margin={20}></Marginer>
                 <Button outline={false}>REGISTER</Button>


             </AccessibilityContainer>
        </NavbarConatiner>
    }