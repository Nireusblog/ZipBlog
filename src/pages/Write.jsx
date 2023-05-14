import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from "axios"; 

export const Write = () => {
  const [value, setValue] = useState(""); 
  const [title, setTitle] = useState(""); 
  const [file, setFile] = useState(null); 
  const [tag, setTag] = useState(""); 

  const upload = async ()=>{
    try{
      const formData = new FormData();
      formData.append("file", file);
      const res = await axios.post("/upload", formData)
      console.log(res.data)
    }catch(err){
      console.log(err);
    }
  }

  const handleClick = async e=>{
    e.preventDefault()
    upload()
  }


  console.log(value)
  return (
    <div className='add' >
      <div className="content">
        <input type="text" placeholder='Title' onChange={e=>setTitle(e.target.value)}/>
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
              <input type="radio" name="tag" value="art" id="art" onChange={e=>setTag(e.target.files[0])} />
              <label htmlFor="art">Art</label>
            </div>
            <div>
              <input type="radio" name="tag" value="science" id="science" onChange={e=>setTag(e.target.files[0])}/>

              <label htmlFor="science">Science</label>
            </div>
            <div>
              <input type="radio" name="tag" value="technology" id="technology" onChange={e=>setTag(e.target.files[0])}/>
              <label htmlFor="technology">Technology</label>
            </div>
            <div>
              <input type="radio" name="tag" value="cinema" id="cinema" onChange={e=>setTag(e.target.files[0])}/>
              <label htmlFor="cinema">Cinema</label>
            </div>
            <div>
              <input type="radio" name="tag" value="food" id="food" onChange={e=>setTag(e.target.files[0])}/>
              <label htmlFor="food">Food</label>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Write
