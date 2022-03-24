import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { AddLoading, AddSuccess, GetLoading, GetSuccess} from "../Redux/action"
import axios from 'axios'
import {Link} from 'react-router-dom'

export const Todo=()=>{

    const [text,setText]=useState()
    const {todo,loading}=useSelector((store)=>store)
    const dispatch=useDispatch()
    const [value,setValue]=useState('')
    // const [color,setColor]=useState('')

    useEffect(()=>{
   getData()
    },[])
    const getData=()=>{
        dispatch(GetLoading())
        axios.get('http://localhost:3001/Todos').then(({data})=>{
           dispatch(GetSuccess(data))
        })
    }

    return loading?"Loading...server may not working please look into the server" : <div>
      <h1 id="todo">Todo</h1>
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
            dispatch(AddLoading())
           axios.post('http://localhost:3001/Todos',{
               title:text,
               status:false,
               value:value,
           }).then(()=>{
             dispatch(AddSuccess())
             getData()
           }).catch(()=>{

           })
        }}>Add</button>
        {todo.map((e,i)=>(
            <div className="td"><h2 className="h2">{i+1}. <Link style={{
              textDecoration:"none",
              color:"black",
            }} to={`/${e.id}`}>{e.title}
            <span className="tf" style={{color:"blue"}}>{e.status?"Complete":"Not Complete"}</span></Link></h2></div>
        ))}   
    </div>
}