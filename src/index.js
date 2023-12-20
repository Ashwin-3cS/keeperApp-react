import React from 'react';
import ReactDOM from 'react-dom';
import  "./index.css";

import Note from "./components/Note.jsx";
import Header from "./components/Header.jsx";
// import App from "./components/App.jsx";
import Footer from "./components/Footer.jsx";

ReactDOM.render(

  <div>
    <Header/>
    <Note/>
    <Footer/>
    {/* <App/> */}
  </div>,

document.getElementById("root")
);