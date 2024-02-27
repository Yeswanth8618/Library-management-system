import axios from 'axios';
import '../styles/AddBooks.css'
import { useState } from 'react';
const AddBooks = () => { 
      
      let [title,settitle]=useState("")
      let [pageCount,setpageCount]=useState("") 
      let [shortDescription,setshortDescription]=useState("")
      let [longDescription,setlongDescription]=useState("")
      let [thumbnailUrl,setthumbnailUrl]=useState("")

      let data={title,pageCount,shortDescription,longDescription,thumbnailUrl}

      let addbook=(e)=>{
        e.preventDefault();
        // fetch('http://localhost:1000/books',{
        //     method:"POST",
        //   headers: { "Content-Type":"application/json"},
        //     body:JSON.stringify(data)
        // })
        //   alert("Data added successfully")
        axios.post(`http://localhost:1000/books/`,data)
        .then((res)=>{
          console.log(res);
          alert("Data added successfully")
        })
        .catch((err)=>{
          console.log(err);
        })
      }

    return ( 
        <div className="addbooks">
            <div className="content">
            <h1 style={{color:"white",fontWeight:"bolder",fontSize:"35px"}}>add books</h1>
            <form action="">
                <label htmlFor="">
                    TITLE: <input value={title} onChange={(e)=>{settitle(e.target.value)}} type="text"  placeholder="ENTER THE BOOK TITLE"/>
                </label>
                <br />
               <label htmlFor="">
                pageCount: <input value={pageCount} onChange={(e)=>{setpageCount(e.target.value)}} type="number" placeholder="ENTER THE NO OF PAGES"  />
               </label>
               <br />
               <label htmlFor="">
                Short Description: <input value={shortDescription} onChange={(e)=>{setshortDescription(e.target.value)}} type="text" placeholder="Enter the Short description"/>
               </label>
               <br />
               <label htmlFor="">
                Long Description: <textarea value={longDescription} onChange={(e)=>{setlongDescription(e.target.value)}} placeholder="Enter the Description" name="" id="" cols="30" rows="10"></textarea>
               </label>
               <br />
               <br />
               <label htmlFor="">
                Image url: <input value={thumbnailUrl} onChange={(e)=>{setthumbnailUrl(e.target.value)}} type="text" placeholder="Enter the image url" />
               </label>
               <br />
               <button onClick={addbook}>Add books</button>
            </form>
            </div>
        </div>
     );
}
 
export default AddBooks;