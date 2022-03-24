import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"

export const EditTodo=()=>{
    const {id}=useParams()
    const [value,setValue]=useState()
    const [text,setText]=useState()
    const [data,setData]=useState([])
    useEffect(()=>{
      getData()
    },[])
   const getData=()=>{
       axios.get(`http://localhost:3001/Todos?id=${id}`).then(({data})=>{
           setData(data)
       })
   }

    return <div>
        <h1>Edit:{id}</h1>
        <input type="text" onChange={(e)=>{
            setText(e.target.value)
        }}/>
        <select onChange={(e)=>{
          setValue(e.target.value)
        }}>
          <option value="">Value</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <button onClick={()=>{ 

            axios.put(`http://localhost:3001/Todos/${id}`,{status:false,title:text,value:value}).then((data)=>{
                 getData()
        })
        }}>Edit</button>
        {data.map(e=>(
            <div><h2 className="h2">Name:{e.title}</h2><h2 className="h2">Value:{e.value}</h2></div>
        ))}
    </div>
}