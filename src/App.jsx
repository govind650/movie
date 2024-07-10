
import './App.css'
import Appbar from './components/Appbar'
import Records from './components/Record'
import Add from './components/Add'
import { Route, Routes } from 'react-router-dom'
function App() {
  return (

    <> <Appbar/>
   
       <Routes>
        <Route path="/"element={<Records/>}></Route>
        <Route path="/add"element={<Add/>}></Route>
       </Routes>
      
    </>
  )
}

export default App
