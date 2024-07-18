import { useState } from 'react'

import './App.css'
import InputInfo from './Component/InputInfo'
import AttendaceList from './Component/AttendenceList'
import { OfficeContextProvider , useOffice } from './Context/OfficeContext'
import Search from './Component/SearchInfo'


function App() {

  const [Office , setOffice] = useState([])
  const addEmployee = ({id , name , loggedIn}) => {
    setOffice(prev => [...prev, {id , name , loggedIn}]);
 }

const removeEmployee=(id)=>{
    setOffice((prev) => prev.filter((prevID)=> prevID.id !== id))
}

  return (
    <OfficeContextProvider value={{Office , addEmployee , removeEmployee }}>
    <h1>Office Attendance System</h1>
    <div className='main-Container'>
     
      <div className='flex1'>
      <InputInfo /> 
      <Search />
      </div>

      <div className='flex2 '>
      
{
  Office.map((e)=>(
    <>
     <div className='grid'  key={e.id} >

<AttendaceList  key={e.id} employee={e}/>
</div>
</>
  ))
}

      </div>
    
    </div>
    </OfficeContextProvider>
  )
}

export default App
