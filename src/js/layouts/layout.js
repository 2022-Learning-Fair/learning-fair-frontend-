import React from 'react';
import Footer from "./footer"
import Header from "./header"
import "../../css/layouts/layout.css"

const Layout = (props) => {
  return (
    <div>
      <Header />
        <div id="main">
         {props.children}
        </div>
      <Footer />
    </div>
  )
}

export default Layout