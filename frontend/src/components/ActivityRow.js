import React from 'react';
import {AiFillEdit, AiFillDelete} from "react-icons/ai";

function ActivityRow({ activity, onDelete, onEdit}){
    return (
        <tr className='activity-row'>
            <td>{activity.name}</td>
            <td>{activity.description}</td>
            <td>{activity.date.slice(0, 10)}</td>
            <td>{activity.startTime}</td>
            <td>{activity.endTime}</td>
            <td>{activity.length}</td>
            <td title='Click this icon to edit this activity.'><AiFillEdit onClick={() => onEdit(activity)}/></td>
            <td title='Click this icon to delete this activity.'><AiFillDelete onClick={() => onDelete(activity._id)}/></td>
        </tr>
    );
}

export default ActivityRow;