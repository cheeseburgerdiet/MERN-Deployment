import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from '@reach/router';

const AllPets = (props) => {
    const [petList, setPetList] = useState([]);

    
    useEffect(() => {
        axios.get('http://localhost:8000/api/pets')
            .then(response => {
                console.log(response.data);
                setPetList(response.data);
            })
            .catch(err => console.log("problem with AllPets.js", err));
    },[]);

    return (
        <div className="container">
            <div className="header">
                <h1>Pet Shelter</h1>
                <p><Link to= {'/pets/new'}>Add New Pet</Link></p>
            </div>
            <div>
                <h2>These pets are looking for a good home</h2>
                <table className= "table">
                    <thead className="tableHeader">
                        <tr>
                            <th>Pet</th>
                            <th>Type</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                    { petList.map((pet, i) => (
                        <tr key = {i}> 
                            <td> {pet.name} </td>
                            <td>{pet.type}</td>
                            <td> 
                                <Link to= {'/pets/' + pet._id }>Details </Link> | 
                    
                                <Link to= {'/pets/' + pet._id + '/edit' }>Edit </Link>
            
                            </td>
                        </tr>    
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
};

export default AllPets;

