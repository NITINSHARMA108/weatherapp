import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from 'react';
import {Day3} from './Mycomponents/Day3';
import {Heading} from './Mycomponents/Heading';
import {City} from './Mycomponents/City';
import Transit from './Mycomponents/Transit'
import Footer from './Mycomponents/Footer'
import Form from './Mycomponents/Form';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  
  const [a,seta]=useState(null)
  window.city='delhi'
  const f=async(city)=>{
    

      const data=await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=a3a6eabd1c4ef82c1dd11a55f735dc19`);
 
      console.log(data);
   
      seta(await data.json());

      console.log(a)
    
    
  
  
  }
  
 
  


 

 

  
  const day=()=>{
    const data=new Date();
    const day=data.getDay();
    return day;
  }
 

  var i=day();
  const days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

  

  return (
    <div>

     
      
      <div className="main">
      <Heading />
     
          
            <Form getcity={f}/>
         
            {a!==null && a!==undefined ?
            <>
            <City city={a.city.name} country={a.city.country}/>
            <div className="row">
            
              <Day3 day={days[i]} date={a.list[0].dt_txt.split(' ')[0]} temperature={a.list[0].main.temp}
              min={a.list[0].main.temp_min} max={a.list[0].main.temp_max} weather={a.list[0].weather[0].main} />
  
              <Day3 day={days[(i+1)%7]} date={a.list[0+8].dt_txt.split(' ')[0]} temperature={a.list[0+8].main.temp}
              min={a.list[0+8].main.temp_min} max={a.list[0+8].main.temp_max} weather={a.list[0+8].weather[0].main}/>
  
              <Day3 day={days[(i+2)%7]} date={a.list[0+16].dt_txt.split(' ')[0]} temperature={a.list[0+16].main.temp}
              min={a.list[0+16].main.temp_min} max={a.list[0+16].main.temp_max} weather={a.list[0+16].weather[0].main}/>
  
              <Day3 day={days[(i+3)%7]} date={a.list[0+24].dt_txt.split(' ')[0]} temperature={a.list[0+24].main.temp}
              min={a.list[0+24].main.temp_min} max={a.list[0+24].main.temp_max} weather={a.list[0].weather[0].main}/>
  
              <Day3 day={days[(i+4)%7]} date={a.list[0+32].dt_txt.split(' ')[0]} temperature={a.list[0+32].main.temp}
                min={a.list[0+32].main.temp_min} max={a.list[0+32].main.temp_max} weather={a.list[0].weather[0].main}/>
              
            </div>
            </> : " "}

          
      
            {a===undefined || a===null ?
            <Footer style={true}/>:<Footer style={false} />}
          
          </div>
    </div>
  )
  
}

export default App;
