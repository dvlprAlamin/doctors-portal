import React, { useState } from 'react';
import { MenuItem, TableRow } from '@mui/material';
import TableData from '../../StyledComponent/TableData';
import MuiCheckbox from '../../StyledComponent/MuiCheckbox';
import axios from 'axios';

const AppointmentsSingle = ({ appointment }) => {
    const { _id, name, time, action } = appointment;
    const [actionInfo, setActionInfo] = useState(action)

    const handleChange = e => {
        setActionInfo(e.target.value);
        axios.patch(`http://localhost:5000/updateAction/${_id}`, { action: e.target.value })
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
                    value={actionInfo}
                >
                    <MenuItem value='not visited'>Not Visited</MenuItem>
                    <MenuItem value='visited'>Visited</MenuItem>
                </MuiCheckbox>
            </TableData>
        </TableRow>
    );
};

export default AppointmentsSingle;