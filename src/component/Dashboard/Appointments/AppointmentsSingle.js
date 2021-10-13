import React, { useState } from 'react';
import { MenuItem, TableRow } from '@mui/material';
import TableData from '../../StyledComponent/TableData';
import MuiCheckbox from '../../StyledComponent/MuiCheckbox';
import axios from 'axios';

const AppointmentsSingle = ({ item }) => {
    const { _id, name, phone, date, time, action } = item;
    const [status, setStatus] = useState(action)

    const handleChange = (event) => {
        setStatus(event.target.value);
        axios.patch(`http://localhost:5000/updateStatus/${_id}`, { action: status })
            .then(res => {
                console.log(res.data);
            })
    };
    return (
        <TableRow>
            <TableData>{name}</TableData>
            <TableData>{time?.slice(0, 9)}</TableData>
            <TableData>
                <MuiCheckbox
                    select
                    onChange={handleChange}
                    value={status}
                >
                    <MenuItem value='not visited'>Not Visited</MenuItem>
                    <MenuItem value='visited'>Visited</MenuItem>
                </MuiCheckbox>
            </TableData>
        </TableRow>
    );
};

export default AppointmentsSingle;