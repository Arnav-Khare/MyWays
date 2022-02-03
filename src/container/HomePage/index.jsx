import React from "react";
import { InnerPageContainer, PageContainer } from "../../components/pageContainer";
import {TopSection} from "../HomePage/topSection"
import { Navbar } from "../../components/navbar";
import styled from "styled-components";
import {deviceSize} from "../../components/responsive"
import { Marginer } from "../../components/marginer";
import { Pages } from "../../components/pages";

const Title = styled.h1`

    font-weight:500;
    color:#000;
`;

const ContentContainer = styled.div`
  width:100%;
  max-width:${deviceSize.laptop}px;
  display:flex;
  flex-direction:column;
`;
export function HomePage(props){
    return <PageContainer>
        <TopSection>
            <Navbar/>
        </TopSection>
        <InnerPageContainer>
            <ContentContainer>
                <Marginer direction={"vertical"} margin={40}/>
                <Title>MyWays Blogs</Title>
                <Pages/>
            </ContentContainer>
        </InnerPageContainer>
    </PageContainer>
}