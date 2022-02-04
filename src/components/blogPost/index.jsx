import React,{useState,useEffect} from "react";
import styled from "styled-components";
import { Marginer } from "../marginer";
import { Button } from "../button/button";
import { Modal } from 'react-bootstrap';
import { BlogList } from "../blogList";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const Center = styled.div`
    display:flex;
    justify-content:flex-start;
    cursor:pointer;

`
const InputForm = styled.input`
display:flex;
justify-content:center;
outline: 0;
background: #f2f2f2;
width: 100%;
border: 0;
border-radius: 5px;
margin: 0 auto;
padding: 15px;
box-sizing: border-box;
font-size: 14px;
font-family: 'Comfortaa', cursive;`;

function CreatePostModal(props) {
    let navigate = useNavigate()
    const [title, setTitle] = useState("");
    const [name, setAuthorName] = useState("");
    const [desc,setDescription] = useState("");
    const [Image,setImage] = useState("");
    const [errorMessage,setErrorMessage] = useState("")

    const handleSubmit = async() => {
        if (title === "" || name === ""|| desc === "") {
          setErrorMessage('Please Enter The Value')
        } else{
            const id = localStorage.getItem("id");
            console.log("Id: " ,id)
          const blogDetails = {
            id,
            title,
            name,
            desc,
            Image,
          }
          axios.post('http://localhost:6001/update',blogDetails).then((response) => {
            if(response.status === 200){
              console.log('Values Sent to Server')
              
            }
          }, (error) => {
                console.log('Pssssssssssssst')
          });
          
        }
      };
    return (
      <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter" >
            Add a blog to MyWays
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>

            <Center>
                Post title
            </Center>
            <Marginer direction={"vertical"} margin={10}/>
            <InputForm
          type="text" 
          value={title}
          placeholder="Enter Your Post Title"
          name="title"
          onChange={(e) =>setTitle(e.target.value)}
        />
         <Marginer direction={"vertical"} margin={20}/>
            <Center>
                Author name 
            </Center>
            <Marginer direction={"vertical"} margin={10}/>
            <InputForm
          type="text" 
          value={name}
          placeholder="Enter Author Name"
          name="author"
          onChange={(e) =>setAuthorName(e.target.value)}
        />
        <Marginer direction={"vertical"} margin={20}/>
            <Center>
               Content 
            </Center>
            <Marginer direction={"vertical"} margin={10}/>
            <InputForm
          type="text" 
          value={desc}
          placeholder="Write Your Blog Here"
          name="content"
          onChange={(e) =>setDescription(e.target.value)}
        />
        <Marginer direction={"vertical"} margin={20}/>
            <Center>
                Image (optional)
            </Center>
            <Marginer direction={"vertical"} margin={10}/>
            <InputForm
          type="text" 
          value={Image}
          placeholder="Upload an Image here"
          name="image"
          onChange={(e) =>setImage(e.target.value)}
        />
        <Center>
        {errorMessage && (
          <p className="text-danger"> {errorMessage} </p>
        )}
        </Center>
        </Modal.Body>
        <Modal.Footer>
           
          <Button onClick={()=>{
              handleSubmit();
          }}>Submit</Button>
        </Modal.Footer>
      </Modal>
    );
  }
export function  BlogPost ({data}){

    const [createModalShow,setCreateModalShow]  = useState(false)

    useEffect(()=>{
        const fetchPosts = async()=>{
     
        }
        fetchPosts();
    },[]);

    const BlogContainer = styled.div`
       
        width:95%;
        height:500px;
        display flex;
        flex-direction:column;
    `
    const CreatePostConatiner = styled.div`
        display:flex;
        flex-direction:flex-end;
        justify-content:flex-end;
    `
    return(
        <div>
         <BlogContainer>
              <CreatePostConatiner>
                    <Button onClick={()=>{setCreateModalShow(true)}}>
                        Create Post
                    </Button>    
              </CreatePostConatiner>
        
              <BlogList data ={data}/>  
        </BlogContainer>
        <CreatePostModal
             data = {data}
             show={createModalShow}
             onHide={() => setCreateModalShow(false)}
        />
        </div>
       
        
    )

}
