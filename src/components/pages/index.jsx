import React,{useState,useEffect} from "react";
import styled from "styled-components";
import axios from 'axios';
import { Cards } from "../cards";
import  Pagination  from "../pagination";
import Posts from "../posts";
const PageContainer = styled.div`

    width:100%;
    height:40px;
    border:2px solid green;

`;

export function Pages (){
    const [posts,setPosts] = useState([]);
    const [loading,setLoading] = useState(false);
    const [currentPage,setCurrentPage] = useState(1);
    const [postsperPage] = useState(8);

    useEffect(()=>{
        const fetchPosts = async()=>{
            setLoading(true);
            const res = await axios.get('http://localhost:9000/services');
            setPosts(res.data);
            setLoading(false);
        }
        fetchPosts();
    },[]);

    const indexOfLastPost = currentPage*postsperPage;
    const indexOfFirstPost = indexOfLastPost - postsperPage;
    const currentPosts = posts.slice(indexOfFirstPost,indexOfLastPost)

    const paginate = pageNumber => setCurrentPage(pageNumber);

    const BlogContainer = styled.div`
       
        width:100%;
        height:500px;
        display flex;
        flex-direction:column;
    `
    const PageNumberConatiner = styled.div`
        display:flex;
        flex-direction:flex-end;
        justify-content:flex-end;
    `
    return(
        <BlogContainer>
              <PageNumberConatiner>
                       <Pagination postsPerPage={postsperPage}  
                                   totalPosts={posts.length}
                                   paginate={paginate}
                       />
              </PageNumberConatiner>
            <div className='container mt-5'>
            <Posts posts={currentPosts} loading={loading} />
            </div>
        </BlogContainer>
    )

}