import React, { useState } from 'react';
import { MenuItem, TableCell, TableRow, IconButton } from '@mui/material';
import MuiCheckbox from '../../StyledComponent/MuiCheckbox';
import MuiButton from '../../StyledComponent/MuiButton';
import { Delete } from '@mui/icons-material';
import axios from 'axios';
const AppointmentSingle = ({ index, appointment, fetchData }) => {
    const { _id, name, phone, date, time, status } = appointment;
    const [statusValue, setStatusValue] = useState(status)

    const handleStatusChange = (id, value) => {
        setStatusValue(value);
        axios.patch(`https://secret-plains-52601.herokuapp.com/updateStatus/${id}`, { status: value })
            .then(res => {
                fetchData();
            })
    };
    const deleteAppointmentHandler = id => {
        axios.delete(`https://secret-plains-52601.herokuapp.com/deleteAppointment/${id}`)
            .then(res => {
                fetchData();
            })
    }
    return (
        <TableRow key={_id}>
            <TableCell>{index}</TableCell>
            <TableCell>{date}</TableCell>
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