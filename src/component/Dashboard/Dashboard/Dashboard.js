import { Container, Paper, Typography, Table, MenuItem, TableBody, TableCell, TableHead, TableRow, TableContainer, Grid, Button, IconButton, CircularProgress } from '@mui/material';
import React, { useState, useEffect } from 'react';
import PickDate from '../../PickDate/PickDate';
import DashboardDiv from '../../StyledComponent/DashboardDiv';
import MuiButton from '../../StyledComponent/MuiButton';
import AdminSidebar from '../Sidebar/AdminSidebar';
import EditIcon from '@mui/icons-material/Edit';
import { makeStyles } from '@mui/styles';
import UserAvatar from '../Sidebar/UserAvatar';
import axios from 'axios';
import { useMyContext } from '../../../context/context';
import MuiCheckbox from '../../StyledComponent/MuiCheckbox';
import { Delete } from '@mui/icons-material';
import AppointmentSingle from './AppointmentSingle';
import Loader from '../../StyledComponent/Loader';
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


const Dashboard = () => {
    const { gridItem } = useStyle();
    const { date, loggedInUser } = useMyContext();
    // console.log(date);
    const [loading, setLoading] = useState(true)
    const [appointments, setAppointments] = useState([]);
    console.log(appointments);
    const appointByDateHandler = () => {
        const dataObject = { date: new Date(date).toDateString(), email: loggedInUser.email }
        console.log(dataObject);
        axios.post('https://secret-plains-52601.herokuapp.com/appointmentsByDate', dataObject)
            .then(res => {
                setAppointments(res.data);
            })
    }
    // useEffect(() => {

    // }, [date, loggedInUser])

    useEffect(() => {
        axios.get('https://secret-plains-52601.herokuapp.com/appointments')
            .then(res => {
                setAppointments(res.data);
                setLoading(false)
            })
    }, [])


    return (
        <>
            <AdminSidebar />
            <DashboardDiv>
                <Container>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography style={{ marginBottom: 25 }} variant="h6">Dashboard</Typography>
                        <UserAvatar />
                    </div>
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
                                <Typography variant="h3">{appointments.length}</Typography>
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
                            <PickDate appointByDateHandler={appointByDateHandler} />
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
                                        <TableCell>Status</TableCell>
                                    </TableRow>
                                </TableHead>
                                {
                                    loading ?
                                        <Loader /> :
                                        <TableBody>
                                            {
                                                appointments.map((appointment, i) => <AppointmentSingle key={appointment._id} index={i + 1} appointment={appointment} />)
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

export default Dashboard;