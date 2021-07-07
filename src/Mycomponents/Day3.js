import React from 'react'

export const Day3 = (props) => {
    const p={
        float:'right',
        display:'inline'


    }
    const weather={
        "Clear":'sun',
        "Clouds":'cloud'
    }
    
    const a=props.weather
    console.log(weather.a)
    return (
        
            <div className="col-12 col-sm-12 col-md-2 day mt-3 mb-3" style={{backgroundColor:'#2399aa'}}>
                <h2 className="text-center">
                    {props.day}
                </h2>
                <div className="date text-center" id="date">{props.date}</div>
            
                 
                <h3 className="text-center">{props.weather}</h3>                  
                
                <h4 className="text-center">{(props.temperature-273.15).toFixed(2)} &deg;C</h4>
                <p style={{display:'inline'}}>Min: {(props.min-273.15).toFixed(2)} &deg;C</p>
                <p style={p}>Max:{(props.max-273.15).toFixed(2)}&deg;C</p>
            </div>
            

            
        
    )
}
