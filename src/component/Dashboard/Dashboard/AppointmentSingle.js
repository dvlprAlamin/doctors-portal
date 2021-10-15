import React, { useState } from 'react';
import { MenuItem, TableCell, TableRow, IconButton } from '@mui/material';
import MuiCheckbox from '../../StyledComponent/MuiCheckbox';
import MuiButton from '../../StyledComponent/MuiButton';
import { Delete } from '@mui/icons-material';
import axios from 'axios';
const AppointmentSingle = ({ index, appointment }) => {
    const { _id, name, phone, date, time, status } = appointment;
    const [statusValue, setStatusValue] = useState(status)

    const handleStatusChange = (id, value) => {
        setStatusValue(value);
        console.log(id, value);
        axios.patch(`http://localhost:5000/updateStatus/${id}`, { status: value })
            .then(res => {
                console.log(res.data);
            })
    };
    const deleteAppointmentHandler = id => {
        axios.delete(`http://localhost:5000/deleteAppointment/${id}`)
            .then(res => {
                console.log(res.data);
            })
    }
    return (
        <TableRow key={_id}>
            <TableCell>{index}</TableCell>
            <TableCell>{date?.slice(4, 15)}</TableCell>
            <TableCell>{time?.slice(0, 8)}</TableCell>
            <TableCell>{name}</TableCell>
            <TableCell>{phone}</TableCell>
            <TableCell>
                <MuiButton>View</MuiButton>
            </TableCell>
            <TableCell>
                <MuiCheckbox
                    style={{ background: statusValue === 'pending' ? '#feb001' : statusValue === 'canceled' ? 'red' : '' }}
                    select
                    onChange={(e) => handleStatusChange(_id, e.target.value)}
                    value={statusValue}
                >
                    <MenuItem value="canceled">Canceled</MenuItem>
                    <MenuItem value="pending">Pending</MenuItem>
                    <MenuItem value="approved">Approved</MenuItem>
                </MuiCheckbox>
                <IconButton onClick={() => deleteAppointmentHandler(_id)}>
                    <Delete htmlColor="red" />
                </IconButton>
            </TableCell>
        </TableRow>
    );
};

export default AppointmentSingle;