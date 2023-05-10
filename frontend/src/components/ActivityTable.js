import ActivityRow from "./ActivityRow";
import { BiMessageAltAdd } from 'react-icons/bi';
import { Link } from "react-router-dom";
function ActivityTable({ activities, onDelete, onEdit }){
    return (
        <>
        <table className="main-table">
            <caption>A list of activities that you have done</caption>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Date</th>
                    <th>Start Time</th>
                    <th>End Time</th>
                    <th>Length (h)</th>
                    <th title="Click this icon to add a new activity." colSpan={2} style={{padding: '10px 0 0 0', textAlign: "center"}}><Link to="/add-activity"><i><BiMessageAltAdd size={30}/></i></Link></th>
                </tr>
            </thead>
            <tbody>
                {activities.map((activity, i) => <ActivityRow activity={activity} onEdit={onEdit} onDelete = {onDelete} key={i} />)} 
            </tbody>
        </table>
        </>
    )
}

export default ActivityTable;