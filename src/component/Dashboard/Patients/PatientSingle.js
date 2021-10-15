import { TableCell, TableRow } from '@mui/material';
import React from 'react';

const PatientSingle = ({ index, patient }) => {
    const { name, gender, age, phone } = patient;
    return (
        <TableRow>
            <TableCell>{index}</TableCell>
            <TableCell>{name}</TableCell>
            <TableCell>{gender}</TableCell>
            <TableCell>{age}</TableCell>
            <TableCell>{phone}</TableCell>
        </TableRow>
    );
};

export default PatientSingle;