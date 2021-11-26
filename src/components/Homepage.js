import React from 'react';
import Navbar from '../components/Navbar';
import Appbody from '../components/Appbody';
import Agent from "../components/Agent";
import Properties from './Properties';
import '../css/style.min.css';  
 



const HomePage =()=> {


    return (
        <div>
             <div className="home">
                <Navbar/>
                <Appbody/>
            </div> 
            <Agent/>
            <Properties/>
            <div className="overlay"></div>
        </div>
      
        
        
    )
}


export default HomePage; 