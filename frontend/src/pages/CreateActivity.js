import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import TableHead from "../components/TableHead";
import { MdEditCalendar } from 'react-icons/md'; 

export const CreateActivity = () => {

    const [name, setName]       = useState('');
    const [description, setDescription]         = useState('');
    const [date, setDate] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [length, setLength] = useState('');
    
    const redirect = useNavigate();

    const addActivity = async () => {
        const newActivity = { name, description, date, startTime, endTime, length };
        const response = await fetch('/log', {
            method: 'post',
            body: JSON.stringify(newActivity),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201){
            /**alert(`A new activity has been added!`);**/
            redirect("/log");
        } else {
            alert(`The activity you have logged is not added successfully, status code = ${response.status}`);
            redirect("/log");
        }
    };

    const timeCal = () => {
        const start = document.getElementById("activity-start-time").value;
        const end = document.getElementById("activity-end-time").value;
        if (start === "" || end === "") {
            return 
        }
        else if (Number(end.slice(0,2)) > Number(start.slice(0,2))) {
            if (Number(end.slice(3,5)) > Number(start.slice(3,5))) {
                return (Number(end.slice(0,2)) - Number(start.slice(0,2)) + (Number(end.slice(3,5)) - Number(start.slice(3,5))) / 60).toFixed(2);
            }
            else {
                return ((Number(end.slice(0,2)) - 1 - Number(start.slice(0,2))) + (Number(end.slice(3,5)) + 60 - Number(start.slice(3,5))) / 60).toFixed(2);
            }
        }
        else if (Number(end.slice(0,2)) === Number(start.slice(0,2)) && Number(end.slice(3,5)) >= Number(start.slice(3,5))) {
            return ((Number(end.slice(3,5)) - Number(start.slice(3,5))) / 60).toFixed(2);
        }
        else {
            /**alert("End time should be larger than start time! Please enter time again!");**/
            return;
        }
    }; 
    
    return (
        <>
            <h2>Activity</h2>
            <article>
            <p><MdEditCalendar/> Please use the following form to add an activity to your activity list.</p>
            <table className='activity-table'>
                <caption>New Activity</caption>
                <TableHead />
                <tbody>
                    <tr>
                        <td>
                            <label for="activity-name">
                                <input type="text" value={name} id="activity-name" name="name" onChange={e => setName(e.target.value)} required autoFocus />
                            </label>
                        </td>
                        <td>
                            <label for="activity-description">
                                <input type="text" value={description} id="activity-description" name="description" onChange={e => setDescription(e.target.value)} required />
                            </label>
                        </td>
                        <td>
                            <label for="activity-date">
                                <input type="date" value={date} id="activity-date" name="date" onChange={e => setDate(e.target.value)} pattern="\d{2}-\d{2}-\d{2}" required />
                            </label>
                        </td>
                        <td>
                            <label for="activity-start-time">
                                <input type="time" value={startTime} id="activity-start-time" name="startTime" onChange={
                                    e => {
                                        setStartTime(e.target.value);
                                        setLength(timeCal);
                                    }
                                    } required />
                            </label>
                        </td>
                        <td>
                            <label for="activity-end-time">
                                <input type="time" value={endTime} id="activity-end-time" name="endTime" onChange={e => {setEndTime(e.target.value); setLength(timeCal);} } required  />
                            </label>
                        </td>
                        <td>
                            <label for="length">
                                <input type="number" value={length} id="length" name="length" onChange={e => {setLength(e.target.value)} } required/>
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={"6"}><button onClick={addActivity}>Save</button></td>
                    </tr>
                </tbody>
            </table>
            </article>
        </>
    );
}

export default CreateActivity;