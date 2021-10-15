import { Container, Paper, Typography, Table, TableBody, TableHead, TableRow, TableContainer } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PickDate from '../../PickDate/PickDate';
import DashboardDiv from '../../StyledComponent/DashboardDiv';
import Loader from '../../StyledComponent/Loader';
import MuiButton from '../../StyledComponent/MuiButton';
import TableData from '../../StyledComponent/TableData';
import AdminSidebar from '../Sidebar/AdminSidebar';
import PrescriptionSingle from './PrescriptionSingle';

const Prescriptions = () => {
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
                    <Typography style={{ marginBottom: 25 }} variant="h6">Prescriptions</Typography>
                    <Paper variant="outlined">
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Typography style={{ margin: 15 }} color="primary" variant="body1">All Prescriptions</Typography>
                            <PickDate />
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
                                    loading ?
                                        <Loader /> :
                                        <TableBody>
                                            {
                                                patients.map((patient, i) => <PrescriptionSingle index={i + 1} key={patient._id} patient={patient} />)
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

export default Prescriptions;