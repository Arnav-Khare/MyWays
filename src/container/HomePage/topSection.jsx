import React from "react";
import styled from "styled-components";
const TopSectionContainer = styled.div`
    width: 100%;
    height: 100px;
`;

export function TopSection(props){
   const  {children} = props
    return <TopSectionContainer>
          {children}
    </TopSectionContainer>
}