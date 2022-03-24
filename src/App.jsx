import './App.css'
import {Todo} from './Pages/Todo'
import {Routes,Route} from 'react-router-dom'
import {TodoDetails} from './Pages/TodoDetails'
import {EditTodo} from './Pages/EditTodo'
function App() {
  return (
    <div className="App">
    
     <Routes>
       <Route path='/' element={ <Todo/>}></Route>
       <Route path='/:id' element={<TodoDetails/>}></Route>
       <Route path='/:id/edit' element={<EditTodo/>}></Route>
     </Routes>
    </div>
  )
}

export default App
