import { Container, Paper, Typography, Table, TableBody, TableHead, TableRow, TableContainer, TableCell } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PickDate from '../../PickDate/PickDate';
import DashboardDiv from '../../StyledComponent/DashboardDiv';
import Loader from '../../StyledComponent/Loader';
import MuiButton from '../../StyledComponent/MuiButton';
import PageHeader from '../PageHeader/PageHeader';
import AdminSidebar from '../Sidebar/AdminSidebar';
import PrescriptionSingle from './PrescriptionSingle';

const Prescriptions = () => {
    const [prescription, setPrescription] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        axios.get('https://secret-plains-52601.herokuapp.com/approvedAppointments')
            .then(res => {
                setPrescription(res.data)
                setPrescriptionByDate(res.data)
                setLoading(false)
            })
    }, [])
    const [prescriptionByDate, setPrescriptionByDate] = useState([])
    const prescriptionByDateHandler = date => {
        const dataObject = { date: new Date(date).toDateString() }
        console.log(dataObject);
        axios.post('https://secret-plains-52601.herokuapp.com/appointmentsByDate', dataObject)
            .then(res => {
                setPrescriptionByDate(res.data);
            })
    }
    return (
        <>
            <AdminSidebar />
            <DashboardDiv>
                <Container>
                    <PageHeader title="Prescription" />
                    <Paper variant="outlined">
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Typography style={{ margin: 15 }} color="primary" variant="body1">All Prescriptions</Typography>
                            <PickDate handler={prescriptionByDateHandler} />
                        </div>
                        <TableContainer>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Sr. No</TableCell>
                                        <TableCell>Date</TableCell>
                                        <TableCell>Name</TableCell>
                                        <TableCell>Contact</TableCell>
                                        <TableCell>Prescription</TableCell>
                                    </TableRow>
                                </TableHead>
                                {
                                    !loading &&
                                    <TableBody>
                                        {
                                            prescriptionByDate.map((patient, i) => <PrescriptionSingle index={i + 1} key={patient._id} patient={patient} />)
                                        }

                                    </TableBody>}
                            </Table>
                        </TableContainer>

                        {loading ?
                            <Loader /> :
                            (prescriptionByDate.length === 0 && <Typography margin="50px 0" textAlign="center">No Prescription Found!</Typography>)}
                    </Paper>
                </Container>
            </DashboardDiv>
        </>
    );
};

export default Prescriptions;