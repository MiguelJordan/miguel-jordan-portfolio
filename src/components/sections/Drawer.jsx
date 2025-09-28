
import {useState,useEffect, useContext} from 'react'

import '../Layout/index.css'
import { LayoutContext } from '../../contexts/LayoutContext';
import { Link, NavLink } from 'react-router-dom';



export default function Drawer() {

  const {toggleMenu,isMobile, setIsMobile} = useContext(LayoutContext)

   
  
    
  return (
    <aside className="drawer">
        <div className="drawer-header"> Miguel<span className='text-blue-500'>.tech</span></div>

        {isMobile ? 
        <div className='w-5 h-5 mr-8 relative cursor-pointer z-40 md:hidden ham-menu' onClick={()=> toggleMenu()}>
                &#9776;
             </div>

        : 
        <nav className="drawer-nav">
          <NavLink to='/'
          className={({ isActive }) => isActive ? "active-link" : "" }
          >
          Accueil
          </NavLink>

          <NavLink to='/skills'
          className={({ isActive }) => isActive ? "active-link" : "" }>Compétences</NavLink>

            <NavLink to='/education&experiences'
          className={({ isActive }) => isActive ? "active-link" : "" }>Education et Experiences</NavLink>

          <NavLink to='/projects'
          className={({ isActive }) => isActive ? "active-link" : "" }>Projets</NavLink>
         
          <NavLink to='/contact'
          className={({ isActive }) => isActive ? "active-link" : "" }>Contact</NavLink>

        
          
        </nav>
      }


        
      </aside>
  )
}
