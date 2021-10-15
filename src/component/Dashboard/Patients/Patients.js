import { Container, Paper, Typography, Table, TableBody, TableCell, TableHead, TableRow, TableContainer, Grid } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PickDate from '../../PickDate/PickDate';
import DashboardDiv from '../../StyledComponent/DashboardDiv';
import Loader from '../../StyledComponent/Loader';
import AdminSidebar from '../Sidebar/AdminSidebar';
import PatientSingle from './PatientSingle';

const Patients = () => {
    const [patients, setPatients] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        axios.get('http://localhost:5000/approvedAppointments')
            .then(res => {
                setPatients(res.data)
                setLoading(false)
            })
    }, [])
    return (
        <>
            <AdminSidebar />
            <DashboardDiv>
                <Container>

                    <Typography style={{ marginBottom: 25 }} variant="h6">Patients</Typography>
                    <Paper variant="outlined">
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Typography style={{ margin: 15 }} color="primary" variant="body1">All Patients</Typography>
                            <PickDate />
                        </div>
                        <TableContainer>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Sr. No</TableCell>
                                        <TableCell>Name</TableCell>
                                        <TableCell>Gender</TableCell>
                                        <TableCell>Age</TableCell>
                                        <TableCell>Contact</TableCell>
                                    </TableRow>
                                </TableHead>
                                {
                                    loading ?
                                        <Loader /> :
                                        <TableBody>
                                            {
                                                patients.map((patient, i) => <PatientSingle key={patient._id} index={i + 1} patient={patient} />)
                                            }
                                        </TableBody>}
                            </Table>
                        </TableContainer>
                    </Paper>
                </Container>
            </DashboardDiv>
        </>
    );
};

export default Patients;