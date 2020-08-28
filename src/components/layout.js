import React from 'react'

import '../scss/style.scss';
import Navbar from './navbar';




const Layout = ({children}) => {
  return (
    <div>
    
     <Navbar />
      {children}
    </div>
  )
}

export default Layout
