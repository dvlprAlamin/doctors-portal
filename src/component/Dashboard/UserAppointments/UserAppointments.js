import React, { useEffect, useState } from 'react';
import { Container, Grid, Paper, Table, TableBody, TableHead, TableRow, Typography } from '@mui/material';
import DashboardDiv from '../../StyledComponent/DashboardDiv';
import TableData from '../../StyledComponent/TableData';
import Calendar from '../../Calendar/Calendar';
import axios from 'axios';
import Loader from '../../StyledComponent/Loader';
import PageHeader from '../PageHeader/PageHeader';
import UserSidebar from '../Sidebar/UserSidebar';
import AppointmentsSingle from '../Appointments/AppointmentsSingle';
import { useMyContext } from '../../../context/context';


const UserAppointments = () => {
    const { loggedInUser } = useMyContext();
    const [date, setDate] = useState(new Date());
    const [loading, setLoading] = useState(true)
    const [appointmentsByDate, setAppointmentsByDate] = useState([])
    useEffect(() => {
        const dataObject = { date: new Date().toDateString(), email: loggedInUser.email }
        axios.get('https://secret-plains-52601.herokuapp.com/appointmentsByDate', dataObject)
            .then(res => {
                setAppointmentsByDate(res.data)
                setLoading(false)
            })
            .catch(err => {
                setLoading(false)
            })
    }, [])

    const appointmentsByDateHandler = date => {
        const dataObject = { date: new Date(date).toDateString(), email: loggedInUser.email }
        console.log(dataObject);
        axios.post('https://secret-plains-52601.herokuapp.com/appointmentsByDate', dataObject)
            .then(res => {
                setAppointmentsByDate(res.data);
                setLoading(false)
            })
    }
    return (
        <>
            <UserSidebar />
            <DashboardDiv>
                <Container>
                    <PageHeader title="Appointments" />
                    <Grid container spacing={3}>
                        <Grid item sm={12} md={6} lg={6} style={{ marginTop: 80 }}>
                            <Calendar date={date} setDate={setDate} handler={appointmentsByDateHandler} />
                        </Grid>
                        <Grid item sm={12} md={6} lg={6}>
                            <Paper variant="outlined" style={{ minHeight: 450, marginTop: 20 }}>
                                <Typography style={{ margin: 15 }} color="primary" variant="body1">Appointment</Typography>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableData>Name</TableData>
                                            <TableData>Schedule</TableData>
                                        </TableRow>
                                    </TableHead>
                                    {
                                        !loading &&
                                        <TableBody>
                                            {
                                                appointmentsByDate.map(appointment => <AppointmentsSingle appointment={appointment} doctor={false} />)
                                            }
                                        </TableBody>
                                    }
                                </Table>
                                {loading ?
                                    <Loader /> :
                                    (appointmentsByDate.length === 0 && <Typography margin="50px 0" textAlign="center">No Appointments Found!</Typography>)}
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </DashboardDiv>
        </>
    );
};

export default UserAppointments;

