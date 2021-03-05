import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';

const ViewPet = (props) => {
    const {id} = props;
    const [pet, setPet] = useState({});
    const [likes, setLikes] = useState({});


    useEffect(() => {
        axios.get("http://localhost:8000/api/pets/" + id)
            .then((response) => {
                const onePet= response.data;
                console.log(onePet);
                setPet(onePet);
            })
            .catch(err => console.log("Problem with ViewPet.js" + err));
    }, []);


    const deletePet = () => {
        axios.delete('http://localhost:8000/api/pets/' + id)
            .then((response)=> {
                const deletedPet = response.data;
                console.log(deletedPet);
                navigate("/");
            })
            .catch((err) => console.log("could not delete" + err));
    };

    return (
        <div className= "container">
            <div className= "header">
                <h1>Pet Shelter</h1>
                <Link to= {'/'}>Back to Home</Link>
            </div>
            <div className= "header">
                <h2 style= {{display: "inline-block"}}>Details about {pet.name}</h2> 
                <button className="redButton" onClick = {() => deletePet(pet._id)}>Adopt This Pet!</button> 
            </div>
            <div className= "mainContent">
                <p>Pet Type: {pet.type}</p>
                <p>Description: {pet.description}</p>
                <p> Skills:
                    {pet.skill1?
                        <p>{pet.skill1}</p>
                        : null}
                    {pet.skill2? 
                        <p> {pet.skill2}</p> 
                        :null}
                    {pet.skill3?
                        <p> {pet.skill3}</p> 
                        : null}
                </p>
            </div>
        </div>
    )
};

export default ViewPet;