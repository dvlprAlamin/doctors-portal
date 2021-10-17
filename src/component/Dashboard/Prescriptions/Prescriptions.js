import { Container, Paper, Typography, Table, TableBody, TableHead, TableRow, TableContainer } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PickDate from '../../PickDate/PickDate';
import DashboardDiv from '../../StyledComponent/DashboardDiv';
import Loader from '../../StyledComponent/Loader';
import MuiButton from '../../StyledComponent/MuiButton';
import TableData from '../../StyledComponent/TableData';
import PageHeader from '../PageHeader/PageHeader';
import AdminSidebar from '../Sidebar/AdminSidebar';
import PrescriptionSingle from './PrescriptionSingle';

const Prescriptions = () => {
    const [prescription, setPrescription] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        axios.get('http://localhost:5000/approvedAppointments')
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
        axios.post('http://localhost:5000/appointmentsByDate', dataObject)
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
                                        <TableData>Sr. No</TableData>
                                        <TableData>Date</TableData>
                                        <TableData>Name</TableData>
                                        <TableData>Contact</TableData>
                                        <TableData>Prescription</TableData>
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