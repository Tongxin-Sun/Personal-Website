import React from "react";

function TableHead() {
    return (
        <>
        <thead className="table-head">
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Date</th>
                    <th>Start Time</th>
                    <th>End Time</th>
                    <th>Length (h)</th>
                    <th></th>
                </tr>
            </thead>
        </>
    )
}

export default TableHead;