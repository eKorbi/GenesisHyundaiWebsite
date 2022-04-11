// ekorbi
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from 'react-router-dom';
import Save from './Save'

const getLocalData = () => {
    const data = localStorage.getItem('vehicles');
    if (data) {
        return JSON.parse(data);
    }else {
        return [];
    }
}
const Admin = () => {
    const [vehicles, setVehicles] = useState([getLocalData]);
    const [model, setModel] = useState('');
    const [generation, setGeneration] = useState('');
    const [events, setEvents] = useState('');
    const [awards, setAwards] = useState('');
    
    const handleAddedVehicles = (e) => {
        e.preventDefault();
        let vehicle = {
            model,
            generation,
            events,
            awards
        };
        setVehicles([...vehicles, vehicle]);
        setModel('');
        setGeneration('');
        setEvents('');
        setAwards('');
        
    };
    useEffect(() => {
        localStorage.setItem('vehicles', JSON.stringify(vehicles));
    }, [vehicles]);
    return (
        <div className="admin">
            <div className="logout">
          <a>
        <Link to='/' className="link">Logout</Link>
          </a>
            </div>
            <h1>E.Korbi | Genesis Administrator</h1>
            <p>Vehicle administration</p>
            <div className="admin-main">
                <div className="form-container">
                <form autocomplete="off" className="form-group" onSubmit={handleAddedVehicles}>
                        <label>Model</label>
                        <input type='text' className="form-control" required onChange={(e) => setModel(e.target.value)} value={model}></input>
                        <br></br>
                         <label>Generation</label>
                        <input type='text' className="form-control" required onChange={(e) => setGeneration(e.target.value)} value={generation}></input>
                        <br></br>
                         <label>Location</label>
                        <input type='text' className="form-control" required onChange={(e) => setEvents(e.target.value)} value={events}></input>
                        <br></br>
                         <label>SOLD</label>
                        <input type='text' className="form-control" required onChange={(e) => setAwards(e.target.value)} value={awards}>
                        </input>
                        <br></br>
                        <button type="submit" className="btn">
                            ADD
                        </button>
                        
                </form>
                </div>
                <div className="view-container">
                    {vehicles.length > 0 && <div>
                        <table>
                            <thead>
                                <tr>
                                    <th>Model</th>
                                    <th>Generation</th>
                                    <th>Location</th>
                                    <th>SOLD</th>
                                </tr>
                            </thead>
                            <tbody>
                                <Save vehicles={vehicles}/>
                            </tbody>
                        </table>
                    </div>}
                    {vehicles.length===0 && <div>No vehicle is added yet.</div>}
                </div>
            </div>

        </div>
    )
};
export default Admin;