import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from "axios"; 
import { useLocation, useNavigate } from "react-router-dom"; 
import moment from "moment"; 


export const Write = () => {

  const state = useLocation().state;
  const [value, setValue] = useState(state?.title || ""); 
  const [title, setTitle] = useState(state?.desc ||""); 
  const [file, setFile] = useState(null); 
  const [tag, setTag] = useState(state?.tag ||""); 

  const navigate = useNavigate(); 

  const upload = async ()=>{
    try{
      const formData = new FormData();
      formData.append("file", file);
      const res = await axios.post("/upload", formData)
      return res.data; 
    }catch(err){
      console.log(err);
    }
  }

  const handleClick = async e=>{
    e.preventDefault()
    const imgUrl = await upload(); 

    try{
      state
        ? await axios.put(`/posts/${state.id}`, {
            title,
            desc: value,
            tag,
            img: file ? imgUrl : "",
          })
        : await axios.post(`/posts/`, {
            title,
            desc: value,
            tag,
            img: file ? imgUrl : "",
            date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
          });
          navigate("/")
    }catch(err){
      console.log(err)
    }
  }


  console.log(value)
  return (
    <div className='add' >
      <div className="content">
        <input type="text" value={title} placeholder='Title' onChange={e=>setTitle(e.target.value)}/>
        <div className="editorContainer">
        <ReactQuill 
        className="editor" 
        theme="snow" 
        value={value} 
        onChange={setValue} />
        
        </div>
      </div>
    
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Status: </b> Draft
          </span>
          <span>
            <b>Visibility: </b> Public
          </span>
          <input style ={{display: "none"}} type ="file" id="file" name="" onChange={e=>setFile(e.target.files[0])}/>
          <label className= "file" htmlFor="file">Upload Image</label>
          <div className="buttons">
            <button>Save as a Draft</button>
            <button onClick={handleClick}>Publish</button>
          </div>
        </div>
        <div className="item">
          <h1>Tag</h1>
          <div>
              <input type="radio" checked={tag === "art"} name="tag" value="art" id="art" onChange={(e)=>setTag(e.target.value)} />
              <label htmlFor="art">Art</label>
            </div>
            <div>
              <input type="radio" checked={tag === "science"} name="tag" value="science" id="science" onChange={(e)=>setTag(e.target.value)}/>

              <label htmlFor="science">Science</label>
            </div>
            <div>
              <input type="radio" checked={tag === "technology"} name="tag" value="technology" id="technology" onChange={(e)=>setTag(e.target.value)}/>
              <label htmlFor="technology">Technology</label>
            </div>
            <div>
              <input type="radio" checked={tag === "cinema"} name="tag" value="cinema" id="cinema" onChange={(e)=>setTag(e.target.value)}/>
              <label htmlFor="cinema">Cinema</label>
            </div>
            <div>
              <input type="radio" 
              checked={tag === "food"} 
              name="tag" 
              value="food" 
              id="food" 
              onChange={(e)=>setTag(e.target.value)}/>
              <label htmlFor="food">Food</label>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Write
