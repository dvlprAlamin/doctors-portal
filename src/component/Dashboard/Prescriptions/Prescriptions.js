import { Container, Paper, Typography, Table, TableBody, TableHead, TableRow, TableContainer } from '@mui/material';
import React from 'react';
import PickDate from '../../PickDate/PickDate';
import DashboardDiv from '../../StyledComponent/DashboardDiv';
import MuiButton from '../../StyledComponent/MuiButton';
import TableData from '../../StyledComponent/TableData';
import AdminSidebar from '../Sidebar/AdminSidebar';

const Prescriptions = () => {
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
                                <TableBody>
                                    <TableRow>
                                        <TableData>01</TableData>
                                        <TableData>03-05-21</TableData>
                                        <TableData>Karim Ahmed</TableData>
                                        <TableData>+017000000</TableData>
                                        <TableData>
                                            <MuiButton>View</MuiButton>
                                        </TableData>
                                    </TableRow>
                                    <TableRow>
                                        <TableData>01</TableData>
                                        <TableData>03-05-21</TableData>
                                        <TableData>Karim Ahmed</TableData>
                                        <TableData>+017000000</TableData>
                                        <TableData>
                                            <MuiButton>View</MuiButton>
                                        </TableData>
                                    </TableRow>
                                    <TableRow>
                                        <TableData>01</TableData>
                                        <TableData>03-05-21</TableData>
                                        <TableData>Karim Ahmed</TableData>
                                        <TableData>+017000000</TableData>
                                        <TableData>
                                            <MuiButton>View</MuiButton>
                                        </TableData>
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

export default Prescriptions;