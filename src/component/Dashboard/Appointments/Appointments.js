import React, { useState } from 'react';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { Container, Grid, MenuItem, Paper, Table, TableBody, TableHead, TableRow, Typography } from '@mui/material';
import AdminSidebar from '../Sidebar/AdminSidebar';
import { CalendarPicker } from '@mui/lab';
import MuiCheckbox from '../../StyledComponent/MuiCheckbox';
import { makeStyles } from '@mui/styles';
import DashboardDiv from '../../StyledComponent/DashboardDiv';
import TableData from '../../StyledComponent/TableData';
import Calendar from '../../Calendar/Calendar';
import { setDate } from 'date-fns';

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
    const [date, setDate] = React.useState(new Date());
    const [status, setStatus] = useState(false)

    const handleChange = (event) => {
        setStatus(event.target.value);
    };
    return (
        <>
            <AdminSidebar />
            <DashboardDiv>
                <Container>
                    <Typography variant="h6">Appointment</Typography>
                    <Grid container spacing={3}>
                        <Grid item sm={12} md={6} lg={6} style={{ marginTop: 80 }}>
                            <Calendar date={date} setDate={setDate} />
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
                                    <TableBody>
                                        <TableRow>
                                            <TableData>Karim Ahmed</TableData>
                                            <TableData>7.00 PM</TableData>
                                            <TableData>
                                                <MuiCheckbox
                                                    select
                                                    onChange={handleChange}
                                                    value={status}
                                                >
                                                    <MenuItem value={false}>Not Visited</MenuItem>
                                                    <MenuItem value={true}>Visited</MenuItem>
                                                </MuiCheckbox>
                                            </TableData>
                                        </TableRow>
                                        <TableRow>
                                            <TableData>Karim Ahmed</TableData>
                                            <TableData>7.00 PM</TableData>
                                            <TableData>
                                                <MuiCheckbox
                                                    select
                                                    onChange={handleChange}
                                                    value={status}
                                                >
                                                    <MenuItem value={false}>Not Visited</MenuItem>
                                                    <MenuItem value={true}>Visited</MenuItem>
                                                </MuiCheckbox>
                                            </TableData>
                                        </TableRow>
                                        <TableRow>
                                            <TableData>Karim Ahmed</TableData>
                                            <TableData>7.00 PM</TableData>
                                            <TableData>
                                                <MuiCheckbox
                                                    select
                                                    onChange={handleChange}
                                                    value={status}
                                                >
                                                    <MenuItem value={false}>Not Visited</MenuItem>
                                                    <MenuItem value={true}>Visited</MenuItem>
                                                </MuiCheckbox>
                                            </TableData>
                                        </TableRow>
                                    </TableBody>
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