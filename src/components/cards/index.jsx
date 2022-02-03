import React from "react";
import styled from "styled-components";
import DemoImage from '../../images/demo.jpg'
import { Marginer } from "../marginer";

const CardsContainer = styled.div`
    display:flex;
    flex-direction:column;
    border:2px solid white;
    border-radius:5px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`

const ImageContainer = styled.div`
  width: ${({ size }) => (size ? size+10 + "px" : "2em")};
  height: ${({ size }) => (size ? size + "px" : "2em")};

  img {
    width: 100%;
    height: 100%;
  }
`;

const Title = styled.div`
  font-weight:900;
  font-size:13px;
`;
const DateOfPublished = styled.div`
  font-color:red;
`;
const BriefDescription = styled.div`

`

const ReadDuration = styled.div``;
const ActionLink = styled.div`
    margin-top:5px;
    font-size:17px;
    color:#272727;
    cursor:pointer;
    oultine:none;

    &:hover{
        filter:contrast(0.6);
    }
`;

const CardFooter = styled.div`
  display:flex;
  justify-content:space-between;
`;

export function Cards(props){
  const {posts,loading}  = props
  if(loading){
    return <h2>Loading</h2>
  }
  else{
    return <ul >
      {posts.map((post)=>(
        <li key={post.id}>
          {post.title}
        </li>
      ))}
    </ul>
  }
}
// return <CardsContainer>
//         <ImageContainer>
//               <img src={DemoImage} alt="" />
//         </ImageContainer>
//         <Title>
//             Title of the Blog Goes Here....!!!
//         </Title>
//         <DateOfPublished>
//             Published - 2022-14-01
//         </DateOfPublished>
//         <Marginer direction={"vertical"} margin={20}/>
//         <BriefDescription>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nibh ligula, euismod vitae bibendum nec, pretium quis est. Sed interdum erat
//         </BriefDescription>
//         <Marginer direction={"vertical"} margin= {35}/>
//         <CardFooter>
//             <ReadDuration>
//                 5 min read
//             </ReadDuration>
//             <ActionLink>
//                 Read More...
//             </ActionLink>
//         </CardFooter>


//     </CardsContainer>

// }