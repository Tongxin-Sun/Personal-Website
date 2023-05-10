import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ActivityTable from "../components/ActivityTable";
import {AiFillDatabase} from 'react-icons/ai';

function ActivityPage({ setEditedActivity }){
    const redirect = useNavigate();
    const [activities, setActivities] = useState([]);
    const loadActivities = async () => {
        const response = await fetch('/log');
        const activityList = await response.json();
        setActivities(activityList);
    }
    
    const onEditActivity = (activity) => {
        setEditedActivity(activity);
        redirect("/edit-activity");
    }
    const onDeleteActivity = async _id => {
        const response = await fetch(`/log/${_id}`, { method: 'DELETE' });
        if (response.status === 204) {
            const newActivity = activities.filter(a => a._id !== _id);
            setActivities(newActivity);
        } else {
            console.error(`Sorry, the activity with _id = ${_id} you were trying to delete was NOT deleted 
            successfully: status code = ${response.status}`);
        }
    }
    useEffect(() => {loadActivities();}, [activities]);
    return (
        <>
            <h2><AiFillDatabase/>ACTIVITIES</h2>
            <p>This is the place where you can keep a record of every activity you have done. Time management is important, and this app can help!</p>
            <ActivityTable activities={activities} onEdit={onEditActivity} onDelete={onDeleteActivity} />
        </>
    );
}

export default ActivityPage;
