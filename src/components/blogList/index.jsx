import React,{useEffect,useState} from 'react';
import styled from "styled-components";
import { Marginer } from "../marginer";
import axios from 'axios';
import { Button } from "../button/button";
const  BlogPostContainer = styled.div`
    width:100%
    display:row;
    justify-content:center,

`
const BlogCard = styled.div`
margin:0 auto;
display:flex;
flex-direction:column;
border:2px solid black;
border-radius:5px;
width:50%;
    img{
        width:100%;
        height:200px;
    }
`
const CardText = styled.div`
color: #535353;
font-size: 0.875rem;
line-height: 1.5;
margin-bottom: 1.25rem;    
font-weight: 400;
margin-left:10px
`;

const EditButtonContainer = styled.div`
    width:95%;
    display:flex;
    justify-content:flex-end;
    margin-bottom:10px;

`
const CardTitle = styled.div`

color: #000;
font-size: 1.1rem;
font-weight: 700;
letter-spacing: 1px;
text-transform: capitalize;
margin: 0px;
margin-left:10px
`
;
export function BlogList ({data}){
    const [blogs,setBlogs] = useState([]);
    const [loading,setLoading] = useState(false);

    useEffect(()=>{
        const fetchPosts = async()=>{
            const id  = localStorage.getItem('id')
            console.log(id)
            setLoading(true);
            const res = await axios.post('http://localhost:6001/getBlogs',{id});
            console.log(res.data)
            setBlogs(res.data.reverse())
            setLoading(false);
        }
        fetchPosts();
    },[]);
    return(
        <BlogPostContainer>
                  <Marginer direction={"vertical"} margin={80}/>
            {blogs.map((blog)=>(
                <div>
                <BlogCard>
                <img src={'https://picsum.photos/500/300/?image=10'}/>
                <Marginer direction={"vertical"} margin={20}/>
                        <CardTitle>
                              {blog.title}
                        </CardTitle>
                    <CardText>
                            {blog.content}
                    </CardText>
                    <EditButtonContainer>
                        <Button>
                            Edit
                        </Button>
                    </EditButtonContainer>
                </BlogCard>
                <Marginer direction={"vertical"} margin={20}/>
                </div>
            ))}
        </BlogPostContainer>
    )
}