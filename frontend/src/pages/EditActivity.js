import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

export const EditActivity = ({editedActivity}) => {
    const [name, setName] = useState(editedActivity.name);
    const [description, setDescription] = useState(editedActivity.description);
    const [date, setDate] = useState(editedActivity.date.slice(0, 10));
    const [startTime, setStartTime] = useState(editedActivity.startTime);
    const [endTime, setEndTime] = useState(editedActivity.endTime);
    const [length, setLength] = useState(editedActivity.length);
    
    const redirect = useNavigate();

    const editActivity = async () => {
        const activityNames = {name, description, date, startTime, endTime, length};
        const response = await fetch(`/log/${editedActivity._id}`, {
            method: 'PUT',
            body: JSON.stringify(activityNames),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 200){
            alert(`The activity has been successfully edited and saved!`);
        } else {
            const errMessage = await response.json();
            alert(`The activity you have logged is not edited successfully, status code = ${response.status}. ${errMessage.Error}`);
        };
        redirect("/log");
    };

    const timeCal = () => {
        const start = document.getElementById("activity-start-time");
        const end = document.getElementById("activity-end-time");
        if (start.value === "" || end.value === "") {
            return 
        }
        else if (Number(end.value.slice(0,2)) > Number(start.value.slice(0,2))) {
            if (Number(end.value.slice(3,5)) > Number(start.value.slice(3,5))) {
                return Number(end.value.slice(0,2)) - Number(start.value.slice(0,2)) + (Number(end.value.slice(3,5)) - Number(start.value.slice(3,5))) / 60;
            }
            else {
                return (Number(end.value.slice(0,2)) - 1 - Number(start.value.slice(0,2))) + (Number(end.value.slice(3,5)) + 60 - Number(start.value.slice(3,5))) / 60;
            }
        }
        else if (Number(end.value.slice(0,2)) === Number(start.value.slice(0,2)) && Number(end.value.slice(3,5)) >= Number(start.value.slice(3,5))) {
            return (Number(end.value.slice(3,5)) - Number(start.value.slice(3,5))) / 60;
        }
        else {
            alert("End time should be larger than start time! Please enter time again!");
            return;
        }
    }; 
    
    return (
        <>
            <h2>Activity</h2>
            <article>
            <p>Use the following table to edit the activity.</p>
            <table className='activity-table'>
                <caption>Edit Activity.</caption>
                {/**<TableHead />*/}
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
                                <input type="date" value={date} id="activity-date" name="date" onChange={e => setDate(e.target.value)} required 
                                pattern="\d{2}-\d{2}-\d{2}" />
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
                                <input type="number" value={length} id="length" name="length"onChange={e => {setLength(e.target.value)} }/>
                            </label>
                        </td>
                        <td><button onClick={editActivity}>Save</button></td>
                    </tr>
                </tbody>
            </table>
            </article>
        </>
    );
}

export default EditActivity;