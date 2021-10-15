import React, { useEffect, useState } from 'react';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { Container, Grid, MenuItem, Paper, Table, TableBody, TableHead, TableRow, Typography } from '@mui/material';
import AdminSidebar from '../Sidebar/AdminSidebar';
import { CalendarPicker } from '@mui/lab';
import MuiCheckbox from '../../StyledComponent/MuiCheckbox';
import DashboardDiv from '../../StyledComponent/DashboardDiv';
import TableData from '../../StyledComponent/TableData';
import Calendar from '../../Calendar/Calendar';
import axios from 'axios';
import AppointmentsSingle from './AppointmentsSingle';
import Loader from '../../StyledComponent/Loader';

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
        axios.get('http://localhost:5000/approvedAppointments')
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
        axios.post('http://localhost:5000/appointmentsByDate', dataObject)
            .then(res => {
                setAppointmentsByDate(res.data);
            })
    }
    return (
        <>
            <AdminSidebar />
            <DashboardDiv>
                <Container>
                    <Typography variant="h6">Appointment</Typography>
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
                                            <TableData>Action</TableData>
                                        </TableRow>
                                    </TableHead>
                                    {
                                        loading ?
                                            <Loader /> :
                                            <TableBody>
                                                {
                                                    appointmentsByDate.map(appointment => <AppointmentsSingle appointment={appointment} />)
                                                }
                                            </TableBody>
                                    }
                                </Table>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </DashboardDiv>
        </>
    );
};

export default Appointment;