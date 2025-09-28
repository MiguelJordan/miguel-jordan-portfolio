import {useEffect} from 'react'
import { Link } from "react-router-dom";

export default function Navbar({menuOpen, setMenuOpen}) {

    useEffect(()=>{
        document.body.style.overflow = menuOpen ? 'hidden' : ''
    }, [menuOpen])


  return (
    <nav className='fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)]
     backdrop-blur-lg border-white/10'>

       <div className='max-w-5xl mx-auto px-4'>

        <div className='flex justify-between items-center h-16'>

            <Link to={'/'} className='font-mono text-xl font-bold text-white '>
           
             Miguel<span className='text-blue-500'>.tech</span>
             </Link>

             <div className='w-7 h-5 mr-10 relative cursor-pointer z-40 md:hidden' onClick={()=> setMenuOpen(prev => !prev)}>
                &#9776;
             </div>

             <div className='hidden md:flex items-center space-x-8'>
                <Link to={'/'} className='text-gray-300 hover:text-white-500 transition-colors'>
                  
                    Accueil
                </Link>

                <Link to={'/about'} className='text-gray-300 hover:text-white-500 transition-colors'>
                    
                    A Propos
                </Link>

                <Link to={"/projects"} className='text-gray-300 hover:text-white-500 transition-colors'>
                    
                    Projects
                </Link>

                 <Link to={'/contact'} className='text-gray-300 hover:text-white-500 transition-colors'>
                    
                    Contact
                </Link>
             </div>

        </div>
       </div>

     </nav>
  )
}
