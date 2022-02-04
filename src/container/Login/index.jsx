import React from "react";
import { InnerPageContainer, PageContainer } from "../../components/pageContainer";
import {TopSection} from "../HomePage/topSection"
import { Navbar } from "../../components/navbar";
import styled from "styled-components";
import {deviceSize} from "../../components/responsive"
import { Marginer } from "../../components/marginer";
import {BlogPost} from "../../components/blogPost"
import { useLocation } from "react-router-dom"


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

export function User (){
    const location = useLocation();
    console.log(location.state._id);
    localStorage.setItem("id",location.state._id);
    const name = location.state.fullName
    return <PageContainer>
        <TopSection>
            <Navbar/>
        </TopSection>
        <InnerPageContainer>
            <ContentContainer>
                <Marginer direction={"vertical"} margin={40}/>
                <Title>{name}'s Blogs</Title>
                <BlogPost data={location.state}/>
            </ContentContainer>
        </InnerPageContainer>
    </PageContainer>
}
