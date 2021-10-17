import { TableCell, TableRow } from '@mui/material';
import React from 'react';
import MuiButton from '../../StyledComponent/MuiButton';

const PrescriptionSingle = ({ index, patient }) => {
    const { name, date, phone } = patient;
    return (
        <TableRow>
            <TableCell>{index}</TableCell>
            <TableCell>{date}</TableCell>
            <TableCell>{name}</TableCell>
            <TableCell>{phone}</TableCell>
            <TableCell>
                <MuiButton>View</MuiButton>
            </TableCell>
        </TableRow>
    );
};

export default PrescriptionSingle;