import React, { useState } from 'react';
import { MenuItem, TableCell, TableRow } from '@mui/material';
import MuiCheckbox from '../../StyledComponent/MuiCheckbox';
import axios from 'axios';

const AppointmentsSingle = ({ appointment, doctor }) => {
    const { _id, name, time, action } = appointment;
    const [actionInfo, setActionInfo] = useState(action)

    const handleChange = e => {
        setActionInfo(e.target.value)
        axios.patch(`https://secret-plains-52601.herokuapp.com/updateAction/${_id}`, { action: e.target.value })
            .then(res => {
                console.log(res.data);
            })
    };
    return (
        <TableRow>
            <TableCell>{name}</TableCell>
            <TableCell>{time?.slice(0, 8)}</TableCell>
            {
                doctor &&
                <TableCell>
                    <MuiCheckbox
                        select
                        onChange={handleChange}
                        value={actionInfo}
                    >
                        <MenuItem value='not visited'>Not Visited</MenuItem>
                        <MenuItem value='visited'>Visited</MenuItem>
                    </MuiCheckbox>
                </TableCell>}
        </TableRow>
    );
};

export default AppointmentsSingle;