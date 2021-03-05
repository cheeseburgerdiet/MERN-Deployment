import React, {useState} from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router';

const AddPet = (props) => {
    const [name, setName ]= useState('');
    const [ type, setType]= useState('');
    const [ description, setDescription]= useState('');
    const [ skill1, setSkill1 ]= useState('');
    const [ skill2, setSkill2 ]= useState('');
    const [ skill3, setSkill3 ]= useState('');
    const [errs, setErrs] = useState({});

    const onSubmitHandler= (e)=> {
        e.preventDefault();
        axios.post('http://localhost:8000/api/pets', {
            name: name,
            type: type,
            description: description,
            skill1: skill1, 
            skill2: skill2,
            skill3: skill3
        })
            .then((response) => {
                if(response.data.errors) {
                    setErrs(response.data.errors);
                } else {
                    console.log(response.data);
                    navigate("/")};
            })
            .catch(err => console.log("problem with AddPet.js", err));
    };

    return (
        <div className="container">
            <div className= "header">
                <h1>Pet Shelter</h1>
                <Link to= {'/'}>Back to Home</Link>
            </div>
            <div>
                <h2>Know a pet needing a home?</h2>
                <div className= "mainContent">
                    <form className="form" onSubmit= {onSubmitHandler}>
                        <div style={{display: "inline-block"}}>
                            <div className="form-input">
                                <label>Pet Name:</label>
                                {
                                    errs.name ?
                                        <p style={{color: 'red'}}>{ errs.name.message }</p>
                                        : null
                                }
                                <input
                                    type="text"
                                    name="name"
                                    value={name}
                                    onChange= {(e) => setName(e.target.value) }
                                    />
                            </div>
                            <div className="form-input">
                                <label>Pet Type:</label>
                                {
                                    errs.type ?
                                        <p style={{color: 'red'}}>{ errs.type.message }</p>
                                        : null
                                }
                                <input
                                    type="text"
                                    name="type"
                                    value={type}
                                    onChange= {(e) => setType(e.target.value) }
                                    />
                            </div>
                            <div className="form-input">
                                <label>Description:</label>
                                {
                                    errs.description ?
                                        <p style={{color: 'red'}}>{ errs.description.message }</p>
                                        : null
                                }
                                <input
                                    type="text" 
                                    name="description"
                                    value={description}
                                    onChange= {(e) => setDescription(e.target.value) }
                                    />
                            </div>
                        </div>
                        <div style={{display: "inline-block"}}>
                            <p>Skills: (optional)</p>
                            <div className="form-input">
                                <label>Skill 1:</label>
                                <input
                                    type="text"
                                    name="skill1"
                                    value={skill1}
                                    onChange= {(e) => setSkill1(e.target.value) }
                                    />
                            </div>
                            <div className="form-input">
                                <label> Skill 2: </label>
                                <input 
                                    type= 'text'
                                    name="skill2"
                                    value={skill2}
                                    onChange= {(e) => setSkill2(e.target.value) }
                                />
                            </div>
                            <div className="form-input">
                                <label> Skill 3: </label>
                                <input
                                type= "text"
                                name= "skill3"
                                checked = {skill3}
                                onChange = {(e)=> setSkill3(e.target.value)}
                                />
                            </div>
                        </div>
                        <button className="blueButton" style={{display: "block"}} type = "submit">Add Pet</button>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default AddPet;