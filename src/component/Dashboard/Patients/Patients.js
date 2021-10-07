import { Container, Paper, Typography, Table, TableBody, TableCell, TableHead, TableRow, TableContainer, Grid } from '@mui/material';
import React from 'react';
import PickDate from '../../PickDate/PickDate';
import DashboardDiv from '../../StyledComponent/DashboardDiv';
import AdminSidebar from '../Sidebar/AdminSidebar';

const Patients = () => {
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
                                        <TableCell>Weight</TableCell>
                                        <TableCell>Contact</TableCell>
                                        <TableCell>Address</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>01</TableCell>
                                        <TableCell>Karim Ahmed</TableCell>
                                        <TableCell>Male</TableCell>
                                        <TableCell>20</TableCell>
                                        <TableCell>50kg</TableCell>
                                        <TableCell>0123456789</TableCell>
                                        <TableCell>South Gazichar, Savar, Dhaka</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>01</TableCell>
                                        <TableCell>Karim Ahmed</TableCell>
                                        <TableCell>Male</TableCell>
                                        <TableCell>20</TableCell>
                                        <TableCell>50kg</TableCell>
                                        <TableCell>0123456789</TableCell>
                                        <TableCell>South Gazichar, Savar, Dhaka</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>01</TableCell>
                                        <TableCell>Karim Ahmed</TableCell>
                                        <TableCell>Male</TableCell>
                                        <TableCell>20</TableCell>
                                        <TableCell>50kg</TableCell>
                                        <TableCell>0123456789</TableCell>
                                        <TableCell>South Gazichar, Savar, Dhaka</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>01</TableCell>
                                        <TableCell>Karim Ahmed</TableCell>
                                        <TableCell>Male</TableCell>
                                        <TableCell>20</TableCell>
                                        <TableCell>50kg</TableCell>
                                        <TableCell>0123456789</TableCell>
                                        <TableCell>South Gazichar, Savar, Dhaka</TableCell>
                                    </TableRow>

                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>
                </Container>
            </DashboardDiv>
        </>
    );
};

export default Patients;