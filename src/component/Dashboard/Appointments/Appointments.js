import React, { useEffect, useState } from 'react';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { CircularProgress, Container, Grid, MenuItem, Paper, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';
import AdminSidebar from '../Sidebar/AdminSidebar';
import { CalendarPicker } from '@mui/lab';
import MuiCheckbox from '../../StyledComponent/MuiCheckbox';
import DashboardDiv from '../../StyledComponent/DashboardDiv';
import Calendar from '../../Calendar/Calendar';
import axios from 'axios';
import AppointmentsSingle from './AppointmentsSingle';
import Loader from '../../StyledComponent/Loader';
import PageHeader from '../PageHeader/PageHeader';

// const StaticDatePickerLandscape = () => {
//     const [date, setDate] = React.useState(new Date());
//     return (
//         <LocalizationProvider dateAdapter={AdapterDateFns}>
//             <CalendarPicker date={date} onChange={(newDate) => setDate(newDate)} />
//         </LocalizationProvider>
//     );
// }


const Appointment = () => {
    // const useStyle = makeStyles({
    //     root: {
    //         marginLeft: 220,
    //         marginTop: 20
    //     },
    //     gridItem: {
    //         minHeight: 450,
    //         marginTop: 20
    //     }
    // })
    // const { root, gridItem } = useStyle();

    const [date, setDate] = useState(new Date());
    const [appointments, setAppointments] = useState([]);
    const [loading, setLoading] = useState(true)
    // console.log(appointments);
    useEffect(() => {
        axios.get('https://secret-plains-52601.herokuapp.com/approvedAppointments')
            .then(res => {
                setAppointments(res.data);
                setAppointmentsByDate(res.data)
                setLoading(false)
            })
    }, [])

    const [appointmentsByDate, setAppointmentsByDate] = useState([])
    console.log(appointmentsByDate);
    const appointmentsByDateHandler = date => {
        const dataObject = { date: new Date(date).toDateString() }
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
                                            <TableCell>Name</TableCell>
                                            <TableCell>Schedule</TableCell>
                                            <TableCell>Action</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    {
                                        !loading &&
                                        <TableBody>
                                            {
                                                appointmentsByDate.map(appointment => <AppointmentsSingle appointment={appointment} doctor={true} />)
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

export default Appointment;