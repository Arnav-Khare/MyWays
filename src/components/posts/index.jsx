  
import React from 'react';
import styled from 'styled-components';
import { Marginer } from '../marginer';

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

const Ullist = styled.ul`
  width:100%;
  display:flex;
  flex-wrap:wrap;
  list-style:none;
  margin:0;
  padding:0;
`; 

const CardsItem = styled.li`
    display: flex;
    padding: 1rem;
    width:25%;
`;
const Card = styled.div`
  background-color: white;
  border-radius: 0.25rem;
  box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  
  img{
    height: auto;
    max-width: 100%;
    vertical-align: middle;
  };
`;

const CardContent = styled.div`
padding: 1rem;
`;

const CardTitle = styled.div`

color: #000;
font-size: 1.1rem;
font-weight: 700;
letter-spacing: 1px;
text-transform: capitalize;
margin: 0px;`
;

const PublishedDate = styled.p`
  color:#999999;
  font-size:14px;
`
const CardText = styled.div`
color: #535353;
font-size: 0.875rem;
line-height: 1.5;
margin-bottom: 1.25rem;    
font-weight: 400;
`;
 const HorizontalLine = styled.div`
  width:100%;
  border:0.1px solid #e3e1da;
 `
 const CardFooter = styled.div`
    width:100%; 
    display:flex;
    align-items:center;
    justify-content:space-between;
 `;

 const TotalReadTime = styled.div`
  margin-top:5px;
  color:#999999;
  font-size:14px;
 `
 const ActionLink = styled.a`
 margin-top:5px;
 cursor: pointer;
 font-size:14px;
 color:#358EE5;
 `
  return (
      <Ullist>
          {posts.map(post=>(
                <CardsItem>
                <Card>
                    <img src={'https://picsum.photos/500/300/?image=10'}/>
                    <CardContent>
                        <CardTitle>
                            {post.title}
                        </CardTitle>
                        <Marginer direction={"vertical"} margin={2}/>
                        <PublishedDate>
                           Published - 2022-14-01
                        </PublishedDate>
                        <CardText>
                            {post.Description}
                        </CardText>
                        <HorizontalLine/>
                        <CardFooter>
                            <TotalReadTime>
                                5 min Read
                            </TotalReadTime>
                            <ActionLink>
                                Read More
                            </ActionLink>
                        </CardFooter>
                    </CardContent>
                </Card>
            </CardsItem>
          ))}
          
      </Ullist>

  );
};

export default Posts;
