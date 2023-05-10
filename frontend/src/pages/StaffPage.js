import React, { useState } from 'react';
import StaffRow from '../components/StaffRow';
import {BsFillPeopleFill} from 'react-icons/bs';

function StaffPage() {
    const [person, setPerson] = useState([]);
    const data = () => {fetch('https://randomuser.me/api/?results=10')
                .then(response => response.json())
                .then(response => {setPerson(response.results);})
                //.then(console.log({results}));
                .catch(() => alert("An error has occurred! Please check your network and refresh the page!"));}
    return (
        <>
            <h2><BsFillPeopleFill/>STAFF</h2>
            <article>
                
                <p>This page allows you to randomly generate a person/staff either from the browser or from the server, 
                    and add him/her information to the table below. 
                </p>
                <button onClick={data}>Get 10 random staffs!</button>
                
                <table>
                    <caption>Table of random staffs</caption>
                    <thead>
                        <tr>
                            <th>Portrait</th>
                            <th>Name/Email</th>
                            <th>Telephone</th>
                            <th>City</th>
                        </tr>
                    </thead>
                    <tbody  id="staffList">
                        {person.map((person, i) => <StaffRow person={person} key={i} />)}  
                    </tbody>
                </table>
            </article>
        </>
        );
}

export default StaffPage;