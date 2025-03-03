import React from 'react'
import logo from './logo.svg';
import './App.css';
import Contact from './Contact';
import Create from './CRUD/Create';
import {Routes,Route} from "react-router-dom";
import NavigationBar from './NavigationBar';
import Footer from './Footer';
import Home from './Home';
import ReadAll from './CRUD/ReadAll';
import ReadOne from './CRUD/ReadOne';
import Services from './Services';
import Update from './CRUD/Update';

const App =()=> {
  return (
   <div>
    {/* <Contact/> */}
        <NavigationBar/>
        
         
    <Routes>

      <Route path="/" element={<Home/>}/>
      <Route path="/contact" element={<Contact/>}/>
       <Route path="/create" element={<Create/>}/>
       <Route path="/readAll" element={<ReadAll/>}/>
       <Route path="/readOne/:id" element={<ReadOne/>}/>
       <Route path="/update/:id" element={<Update/>}/>
       <Route path="/services/" element={<Services/>}/>

    </Routes>

    <Footer/>
    </div>
  );
}

export default App;
