import React from "react";
import { PageContainer } from "../../components/pageContainer";
import {TopSection} from "../HomePage/topSection"
import { Navbar } from "../../components/navbar";

export function HomePage(props){
    return <PageContainer>
        <TopSection>
            <Navbar/>
        </TopSection>
    </PageContainer>
}