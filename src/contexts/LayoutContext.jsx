import { createContext,useState, useEffect } from "react";

export const LayoutContext = createContext();

export const LayoutProvider = ({ children }) => {

 const [menuOpen, setMenuOpen] = useState(false)

 const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  
      useEffect(()=>{
          const handleResize = () => {
              setIsMobile(window.innerWidth <= 768);
  
          }
          window.addEventListener('resize', handleResize);
          return () => window.removeEventListener('resize', handleResize);
  
      })

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  return (
    <LayoutContext.Provider value={{ menuOpen, toggleMenu, isMobile, setIsMobile }}>
      {children}
    </LayoutContext.Provider>
  );
}

