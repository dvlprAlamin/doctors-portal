import { Container, Paper, Typography, Table, TableBody, TableCell, TableHead, TableRow, TableContainer, Grid } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PickDate from '../../PickDate/PickDate';
import DashboardDiv from '../../StyledComponent/DashboardDiv';
import Loader from '../../StyledComponent/Loader';
import PageHeader from '../PageHeader/PageHeader';
import AdminSidebar from '../Sidebar/AdminSidebar';
import PatientSingle from './PatientSingle';

const Patients = () => {
    const [patients, setPatients] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        axios.get('https://secret-plains-52601.herokuapp.com/approvedAppointments')
            .then(res => {
                setPatients(res.data);
                setPatientByDate(res.data)
                setLoading(false)
            })
    }, [])
    const [patientByDate, setPatientByDate] = useState([])

    const patientByDateHandler = date => {
        const dataObject = { date: new Date(date).toDateString() }
        console.log(dataObject);
        axios.post('https://secret-plains-52601.herokuapp.com/appointmentsByDate', dataObject)
            .then(res => {
                setPatientByDate(res.data);
            })
    }
    return (
        <>
            <AdminSidebar />
            <DashboardDiv>
                <Container>

                    <PageHeader title="Patients" />
                    <Paper variant="outlined">
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Typography style={{ margin: 15 }} color="primary" variant="body1">All Patients</Typography>
                            <PickDate handler={patientByDateHandler} />
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
                                    !loading &&
                                    <TableBody>
                                        {
                                            patientByDate.map((patient, i) => <PatientSingle key={patient._id} index={i + 1} patient={patient} />)
                                        }
                                    </TableBody>
                                }

                            </Table>
                        </TableContainer>
                        {loading ?
                            <Loader /> :
                            (patientByDate.length === 0 && <Typography margin="50px 0" textAlign="center">No Patient Found!</Typography>)}
                    </Paper>
                </Container>
            </DashboardDiv>
        </>
    );
};

export default Patients;