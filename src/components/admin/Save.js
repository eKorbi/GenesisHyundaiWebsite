// ekorbi
import React from 'react';

const Save = ({vehicles}) => {
    return vehicles.map(vehicle=>(
        <tr key={vehicle.generation}>
            <td>{vehicle.model}</td>
            <td>{ vehicle.generation}</td>
            <td>{vehicle.events}</td>
            <td>{vehicle.awards}</td>    
        </tr>
    ))
};
export default Save;