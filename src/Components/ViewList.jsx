import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import '../styles/ViewList.css'
import axios from 'axios';
const ViewList = () => {
    let [data, setdata] = useState([])
    let navigate = useNavigate()
    let [cond, setCond] = useState(true)

    useEffect(() => {
        axios.get("http://localhost:1000/books")
            .then((res) => {
                // console.log(res.data);
                console.log('Use Effect is Working')
                setdata(res.data)
            })
            .catch((rej) => {
                console.log(rej);
            })
    },[cond])

    let readData = ((id) => {
        navigate(`/adminhome/viewlist/${id}`)
    })
    let editBook = ((id) => {
        navigate(`/adminhome/updatebooks/${id}`)
    })



    // useEffect(() => {
    //     let fetchData = async () => {
    //         let res = await fetch("http://localhost:1000/books")
    //         let result = await res.json()
    //         setdata(result)
    //     }
    //     fetchData()
    // }, [data])
    let deleteData = (id) => {
        axios.delete(`http://localhost:1000/books/${id}`)
        //   fetch(`http://localhost:1000/books/${id}`,{
        //     method: "DELETE"
        //   })
        if(cond){
            setCond(false)
        }
        else{
            setCond(true)
        }
    }
    return (

        <div className="viewlist">
            {data.map((x) => {
                return (
                    <div className="viewitems">
                        <div className="bookimg">
                            <img src={x.thumbnailUrl} alt="" />
                        </div>
                        <div className="bookdetails">
                            <h2 style={{ color: " #fff", paddingBottom: "10px", fontWeight: "bolder" }}>{x.title}</h2>
                            <p style={{ color: "yellow" }}>NO OF PAGES: <b style={{ color: "red" }}>{x.pageCount}</b></p>
                            <p style={{ color: "white" }}><b style={{ color: "red" }}>Short Description:</b>{x.shortDescription}</p>
                            <button onClick={() => { deleteData(x.id) }}>DELETE</button>
                            <button id="b1" onClick={() => { readData(x.id) }}>Read More</button>
                            <button id="b2" onClick={() => { editBook(x.id) }}>Edit Books</button>
                        </div>

                    </div>
                )
            })}
        </div>);
}

export default ViewList;