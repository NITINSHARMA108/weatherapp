import React,{useState} from 'react'
import {Link} from 'react-router-dom';

const Form = (props) => {
    const [city,setcity]=useState('jaipur')
    
    const submitted=(e)=>{
        e.preventDefault();
       props.getcity(city);
        console.log(city);

    }
    
    
    return (
        <div className="row">
            <form className="col-6 offset-3" onSubmit={submitted} action='/city' method="GET">
            <div class="form-group">
                <label for="city">select city:</label>
                <select class="form-control" id="city" value={city} onChange={(e)=>setcity(e.target.value)}>
                <option value="jaipur">Jaipur</option>
                <option value="delhi">Delhi</option>
                <option value="kolkata">Kolkata</option>
                <option value="mumbai">Mumbai</option>
                <option value="chennai">Chennai</option>
                <option value="bengaluru">Bengaluru</option>
                <option value="chandigarh">Chandigarh</option>
                <option value="srinagar">Srinagar</option>
                <option value="guwahati">Guwahati</option>
                <option value="indore">Indore</option>
                <option value="pune">Pune</option>
                <option value="lucknow">Lucknow</option>
                <option value="bhopal">Bhopal</option>
                <option value="shimla">Shimla</option>
                <option value="patna">Patna</option>
                <option value="hyderabad">Hyderabad</option>
                </select>
            </div>
            <br/>
            <button type="submit" class="btn btn-primary">Go</button>
            </form>
        </div>
    )
}

export default Form
