import React from "react";
import styled from "styled-components";

const TopSectionContainer = styled.div`
    width: 100%;
    height: 800px;
`;
const BackgroundFilter = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
`;

const TopSectionInnerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;


export function TopSection(props){
   const  {children} = props
    return <TopSectionContainer>
          <BackgroundFilter>
          {children}
                <TopSectionInnerContainer>
                    My Blogs                     
                </TopSectionInnerContainer>
          </BackgroundFilter>
    </TopSectionContainer>
}