import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'

import './App.css'
import "./index.css"


//components
import LoadingScreen from './components/LoadingScreen'

import Layout from './components/Layout'
import { LayoutProvider } from './contexts/LayoutContext'
import Router from './Router'


function App() {

  const [isLoading, setLoading] = useState(false)
  

  return (
    <BrowserRouter basename="/miguel-jordan-portfolio">
      
    {!isLoading && <LoadingScreen onComplete={()=> setLoading(true)} />}
    
    <div className={`min-h-screen transition-opacity duration-700 
    ${isLoading ? 'opacity-100' : 'opacity-0'} bg-black text-gray-100`
      
    }>

    <LayoutProvider>
      <Layout>
        <Router/>
      </Layout>
    </LayoutProvider>

   
     

    </div>

     </BrowserRouter>
  )
}

export default App
