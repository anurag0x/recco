import React from 'react'
import {Routes , Route} from 'react-router-dom'
import MainPage from '../Component/MainPage'
import Showdata from '../Component/Showdata'
const MainRoute = () => {
  return<>
  <Routes>
    <Route path='/' element={<MainPage/>}/>
    {/* <Route path='/' element={<Showdata/>}/> */}
  </Routes>
  
  </>
  

}

export default MainRoute