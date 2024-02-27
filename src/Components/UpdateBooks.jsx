import '../styles/UpdateBooks.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
const UpdateBooks = () => {

    let param = useParams()
    let [title, settitle] = useState("")
    let [pageCount, setpageCount] = useState("")
    let [shortDescription, setshortDescription] = useState("")
    let [longDescription, setlongDescription] = useState("")
    let [thumbnailUrl, setthumbnailUrl] = useState("")
    useEffect(() => {
        axios.get(`http://localhost:1000/books/${param.id}`)
            .then((res) => {
                console.log(res.data);
                settitle(res.data.title);
                setpageCount(res.data.pageCount);
                setshortDescription(res.data.shortDescription);
                setlongDescription(res.data.longDescription);
                setthumbnailUrl(res.data.thumbnailUrl)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])
    let data = { title, pageCount, shortDescription, longDescription, thumbnailUrl }
    let editbooks = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:1000/books/${param.id}`, data)
            .then((res) => {
                console.log(res);
                alert("data updated successfully")
            })
            .catch((err) => {
                console.log(err);
            })
    }


    return (
        <div className="updatebooks">
            <div className="content">
                <h1 style={{ color: "white", fontWeight: "bolder", fontSize: "35px" }}>Update Me</h1>
                <form action="">
                    <label htmlFor="">
                        TITLE: <input type="text" value={title} onChange={(e) => { settitle(e.target.value) }} placeholder="ENTER THE BOOK TITLE" />
                    </label>
                    <br />
                    <label htmlFor="">
                        pageCount: <input type="number" value={pageCount} onChange={(e) => { setpageCount(e.target.value) }} placeholder="ENTER THE NO OF PAGES" />
                    </label>
                    <br />
                    <label htmlFor="">
                        Short Description: <input type="text" value={shortDescription} onChange={(e) => { setshortDescription(e.target.value) }} placeholder="Enter the Short description" />
                    </label>
                    <br />
                    <label htmlFor="">
                        Long Description: <textarea value={longDescription} onChange={(e) => { setlongDescription(e.target.value) }} placeholder="Enter the Description" name="" id="" cols="30" rows="10"></textarea>
                    </label>
                    <br />
                    <br />
                    <label htmlFor="">
                        Image url: <input type="text" value={thumbnailUrl} onChange={(e) => { setthumbnailUrl(e.target.value) }} placeholder="Enter the image url" />
                    </label>
                    <br />
                    <button onClick={editbooks}>Update books</button>
                </form>
            </div>
        </div>

    );
}

export default UpdateBooks;