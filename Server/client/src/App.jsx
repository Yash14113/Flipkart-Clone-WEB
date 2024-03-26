
// import './App.css'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import { Box } from '@mui/material'
import DataProvider from '../context/dataprovider'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import DetailPage from './components/DetailPage/DetailPage'
import Cart from './components/Cart/Cart'

function App() {
  

  return (
    
    <DataProvider>
      <BrowserRouter>
    <Header/>
    <Box fontStyle={{marginTop:54}}>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/product/:id' element={<DetailPage/>}/>
      <Route path='/cart' element={<Cart/>} />
      </Routes>
    </Box>
    </BrowserRouter>
   
    </DataProvider>
    
  )
}

export default App
