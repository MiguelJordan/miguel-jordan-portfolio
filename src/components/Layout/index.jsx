
import './index.css'


import Drawer from '../sections/Drawer';
import MobileMenu from '../MobileMenu';

export default function Layout({ children }) {

    

 return (
    <div className="layout">
   
   
    <Drawer/>
    <MobileMenu/>
   

    <main className="content">
        {children}
    </main>

      
      
    </div>
  );
}
