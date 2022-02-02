import React from "react";
import styled from "styled-components";

import LogoImg from "../../images/logos/logo.png";

const BrandLogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImage = styled.div`
  width: ${({ size }) => (size ? size+10 + "px" : "2em")};
  height: ${({ size }) => (size ? size + "px" : "2em")};

  img {
    width: 100%;
    height: 100%;
  }
`;

const LogoTitle = styled.h2`
  margin: 0;
  font-size: ${({ size }) => (size ? size + "px" : "20px")};
  color: ${({ color }) => (color ? color : "#464646")};
  font-weight: 400;
  margin-left: 6px;
`;



export function BrandLogo(props) {
  const { logoSize, textSize, color, hideLogo } = props;

  return (
    <BrandLogoContainer>
       <LogoImage size={logoSize}>
            <img src={LogoImg} alt="" />
          </LogoImage>
          <LogoTitle size={textSize} color={color}>
          My Ways
        </LogoTitle>
    </BrandLogoContainer>
  );
}