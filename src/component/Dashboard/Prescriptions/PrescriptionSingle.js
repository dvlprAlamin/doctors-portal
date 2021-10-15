import { TableRow } from '@mui/material';
import React from 'react';
import MuiButton from '../../StyledComponent/MuiButton';
import TableData from '../../StyledComponent/TableData';

const PrescriptionSingle = ({ index, patient }) => {
    const { name, date, phone } = patient;
    return (
        <TableRow>
            <TableData>{index}</TableData>
            <TableData>{date}</TableData>
            <TableData>{name}</TableData>
            <TableData>{phone}</TableData>
            <TableData>
                <MuiButton>View</MuiButton>
            </TableData>
        </TableRow>
    );
};

export default PrescriptionSingle;