import { useEffect, useState } from "react"
import { useParams,Link,useNavigate} from "react-router-dom"
import axios from 'axios'


export const TodoDetails=()=>{
    const [todo,setTodo]=useState([])
    const {id}=useParams()
    const nav=useNavigate()
    useEffect(()=>{
      getData()
    },[])
    const getData=()=>{
        axios.get(`http://localhost:3001/Todos?id=${id}`).then(({data})=>{
            setTodo(data)
        })
    }
    return <div className="tododetails">
        {todo.map(e=>(
        <div id="TodoDetails"><h1 className="name">{e.title}</h1><button className="bt" onClick={()=>{
            let stat=false
            if(e.status===false){
               stat=true
            }else{
                stat=false
            }
             axios.put(`http://localhost:3001/Todos/${id}`,{status:stat,title:e.title}).then((data)=>{
                 getData()
             })
        }}>{e.status?"True":"False"}</button><br/>
        
        <h3 className="value">Value:{e.value}</h3>
        <button className="btn"><Link style={{textDecoration:"none",color:"white"}} to={`/${e.id}/edit`}>Edit</Link></button> <button className="btn" onClick={()=>{
            axios.delete(`http://localhost:3001/Todos/${id}`)
            nav('/')
        }}>Delete</button>
        </div>
    ))}</div>
}