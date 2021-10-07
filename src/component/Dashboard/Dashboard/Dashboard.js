import { Container, Paper, Typography, Table, TableBody, TableCell, TableHead, TableRow, TableContainer, Grid, Button, IconButton } from '@mui/material';
import React from 'react';
import PickDate from '../../PickDate/PickDate';
import DashboardDiv from '../../StyledComponent/DashboardDiv';
import MuiButton from '../../StyledComponent/MuiButton';
import AdminSidebar from '../Sidebar/AdminSidebar';
import EditIcon from '@mui/icons-material/Edit';
import { makeStyles } from '@mui/styles';
const Dashboard = () => {
    const useStyle = makeStyles({
        gridItem: {
            display: 'flex',
            justifyContent: 'space-around',
            padding: 10,
            '& h3': {
                fontWeight: 700,
                color: '#fff'
            },
            '& p': {
                color: '#fff'
            }
        }
    });
    const { gridItem } = useStyle();
    return (
        <>
            <AdminSidebar />
            <DashboardDiv>
                <Container>

                    <Typography style={{ marginBottom: 25 }} variant="h6">Dashboard</Typography>
                    <Grid container spacing={2} style={{ marginBottom: 20 }}>
                        <Grid item xs={6} sm={6} md={3} lg={3}>
                            <Paper className={gridItem} style={{ background: '#F1536E' }}>
                                <Typography variant="h3">09</Typography>
                                <Typography variant="body1">Pending <br /> Appointment</Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={6} sm={6} md={3} lg={3}>
                            <Paper className={gridItem} style={{ background: '#0FCFEC' }}>
                                <Typography variant="h3">19</Typography>
                                <Typography variant="body1">Today's <br /> Appointment</Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={6} sm={6} md={3} lg={3}>
                            <Paper className={gridItem} style={{ background: '#19D3AE' }}>
                                <Typography variant="h3">34</Typography>
                                <Typography variant="body1">Total <br /> Appointment</Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={6} sm={6} md={3} lg={3}>
                            <Paper className={gridItem} style={{ background: '#FDA006' }}>
                                <Typography variant="h3">78</Typography>
                                <Typography variant="body1">Total <br /> Patients</Typography>
                            </Paper>
                        </Grid>

                    </Grid>
                    <Paper variant="outlined">
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Typography style={{ margin: 15 }} color="primary" variant="body1">Recent Appointments</Typography>
                            <PickDate />
                        </div>
                        <TableContainer>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Sr. No</TableCell>
                                        <TableCell>Date</TableCell>
                                        <TableCell>Time</TableCell>
                                        <TableCell>Name</TableCell>
                                        <TableCell>Contact</TableCell>
                                        <TableCell>Prescription</TableCell>
                                        <TableCell>Action</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>01</TableCell>
                                        <TableCell>05-05-21</TableCell>
                                        <TableCell>6.00 PM</TableCell>
                                        <TableCell>Karim Ahmed</TableCell>
                                        <TableCell>0123456789</TableCell>
                                        <TableCell>
                                            <MuiButton>View</MuiButton>
                                        </TableCell>
                                        <TableCell>
                                            <Button>Pending</Button><IconButton><EditIcon /> </IconButton>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>01</TableCell>
                                        <TableCell>05-05-21</TableCell>
                                        <TableCell>6.00 PM</TableCell>
                                        <TableCell>Karim Ahmed</TableCell>
                                        <TableCell>0123456789</TableCell>
                                        <TableCell>
                                            <MuiButton>View</MuiButton>
                                        </TableCell>
                                        <TableCell>
                                            <Button>Pending</Button><IconButton><EditIcon /> </IconButton>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>01</TableCell>
                                        <TableCell>05-05-21</TableCell>
                                        <TableCell>6.00 PM</TableCell>
                                        <TableCell>Karim Ahmed</TableCell>
                                        <TableCell>0123456789</TableCell>
                                        <TableCell>
                                            <MuiButton>View</MuiButton>
                                        </TableCell>
                                        <TableCell>
                                            <Button>Pending</Button><IconButton><EditIcon /> </IconButton>
                                        </TableCell>
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

export default Dashboard;