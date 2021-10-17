import { Container, Paper, Typography, Table, TableBody, TableCell, TableHead, TableRow, TableContainer, Grid } from '@mui/material';
import React, { useState, useEffect } from 'react';
import PickDate from '../../PickDate/PickDate';
import DashboardDiv from '../../StyledComponent/DashboardDiv';
import AdminSidebar from '../Sidebar/AdminSidebar';
import { makeStyles } from '@mui/styles';
import axios from 'axios';
import { useMyContext } from '../../../context/context';
import AppointmentSingle from './AppointmentSingle';
import Loader from '../../StyledComponent/Loader';
import PageHeader from '../PageHeader/PageHeader';
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
    const { loggedInUser } = useMyContext();
    const [loading, setLoading] = useState(true)
    const [appointments, setAppointments] = useState([]);
    const [appointmentsByDate, setAppointmentsByDate] = useState([]);
    const getCount = name => {
        const amount = appointments.filter(item => item.status === name)
        return amount.length;
    }
    const getTodaysAppointment = () => {
        const amount = appointments.filter(item => item.date === new Date().toDateString())
        return amount.length;
    }
    const fetchData = () => {
        axios.get('https://secret-plains-52601.herokuapp.com/appointments')
            .then(res => {
                setAppointments(res.data);
                setAppointmentsByDate(res.data)
                getCount('pending')
                getCount('approved')
                setLoading(false)
            })
    }
    useEffect(() => fetchData(), [])

    // console.log(appointments);
    const appointByDateHandler = (date) => {
        const dataObject = { date: new Date(date).toDateString(), email: loggedInUser.email }
        console.log(dataObject);
        axios.post('https://secret-plains-52601.herokuapp.com/appointmentsByDate', dataObject)
            .then(res => {
                setAppointmentsByDate(res.data);
            })
    }



    return (
        <>
            <AdminSidebar />
            <DashboardDiv>
                <Container>
                    <PageHeader title="Dashboard" />
                    <Grid container spacing={2} style={{ marginBottom: 20 }}>
                        <Grid item xs={6} sm={6} md={3} lg={3}>
                            <Paper className={gridItem} style={{ background: '#F1536E' }}>
                                <Typography variant="h3">{getCount('pending')}</Typography>
                                <Typography variant="body1">Pending <br /> Appointment</Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={6} sm={6} md={3} lg={3}>
                            <Paper className={gridItem} style={{ background: '#0FCFEC' }}>
                                <Typography variant="h3">{getTodaysAppointment()}</Typography>
                                <Typography variant="body1">Today's <br /> Appointment</Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={6} sm={6} md={3} lg={3}>
                            <Paper className={gridItem} style={{ background: '#19D3AE' }}>
                                <Typography variant="h3">{appointments?.length}</Typography>
                                <Typography variant="body1">Total <br /> Appointment</Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={6} sm={6} md={3} lg={3}>
                            <Paper className={gridItem} style={{ background: '#FDA006' }}>
                                <Typography variant="h3">{getCount('approved')}</Typography>
                                <Typography variant="body1">Total <br /> Patients</Typography>
                            </Paper>
                        </Grid>

                    </Grid>
                    <Paper variant="outlined">
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Typography style={{ margin: 15 }} color="primary" variant="body1">Recent Appointments</Typography>
                            <PickDate handler={appointByDateHandler} />
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
                                    !loading &&
                                    <TableBody>
                                        {
                                            appointmentsByDate.map((appointment, i) =>
                                                <AppointmentSingle
                                                    key={appointment._id}
                                                    index={i + 1}
                                                    appointment={appointment}
                                                    fetchData={fetchData}
                                                />)
                                        }
                                    </TableBody>}
                            </Table>
                            {loading ?
                                <Loader /> :
                                (appointmentsByDate.length === 0 && <Typography margin="50px 0" textAlign="center">No Appointments Found!</Typography>)}
                        </TableContainer>
                    </Paper>
                </Container>
            </DashboardDiv>
        </>
    );
};

export default Dashboard;