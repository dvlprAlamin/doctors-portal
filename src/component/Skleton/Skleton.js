import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import { Container, Paper, Table, MenuItem, TableBody, TableCell, TableHead, TableRow, TableContainer } from '@mui/material';
import axios from 'axios';
import { RestartAltSharp } from '@mui/icons-material';
const data = [
    {
        src: 'https://i.ytimg.com/vi/pLqipJNItIo/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBkklsyaw9FxDmMKapyBYCn9tbPNQ',
        title: 'Don Diablo @ Tomorrowland Main Stage 2019 | Official…',
        channel: 'Don Diablo',
        views: '396 k views',
        createdAt: 'a week ago',
    },
    {
        src: 'https://i.ytimg.com/vi/_Uu12zY01ts/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCpX6Jan2rxrCAZxJYDXppTP4MoQA',
        title: 'Queen - Greatest Hits',
        channel: 'Queen Official',
        views: '40 M views',
        createdAt: '3 years ago',
    },
    {
        src: 'https://i.ytimg.com/vi/kkLk2XWMBf8/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLB4GZTFu1Ju2EPPPXnhMZtFVvYBaw',
        title: 'Calvin Harris, Sam Smith - Promises (Official Video)',
        channel: 'Calvin Harris',
        views: '130 M views',
        createdAt: '10 months ago',
    },
];

function Media(props) {
    const { loading = false } = props;

    return (
        <Grid container wrap="nowrap">
            {(loading ? Array.from(new Array(3)) : data).map((item, index) => (
                <Box key={index} sx={{ width: 210, marginRight: 0.5, my: 5 }}>
                    {item ? (
                        <img
                            style={{ width: 210, height: 118 }}
                            alt={item.title}
                            src={item.src}
                        />
                    ) : (
                        <Skeleton variant="rectangular" width={210} height={118} />
                    )}

                    {item ? (
                        <Box sx={{ pr: 2 }}>
                            <Typography gutterBottom variant="body2">
                                {item.title}
                            </Typography>
                            <Typography display="block" variant="caption" color="text.secondary">
                                {item.channel}
                            </Typography>
                            <Typography variant="caption" color="text.secondary">
                                {`${item.views} • ${item.createdAt}`}
                            </Typography>
                        </Box>
                    ) : (
                        <Box sx={{ pt: 0.5 }}>
                            <Skeleton />
                            <Skeleton width="60%" />
                        </Box>
                    )}
                </Box>
            ))}
        </Grid>
    );
}

Media.propTypes = {
    loading: PropTypes.bool,
};

export default function Skleton() {

    const [loading, setLoading] = useState(true)
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        axios.get('https://secret-plains-52601.herokuapp.com/appointments')
            .then(res => {
                setAppointments(res.data);
                setLoading(false)
            })
    }, [])
    return (
        <>
            <Box sx={{ overflow: 'hidden' }}>
                <Media loading />
                <Media />

            </Box>
            <Container>
                <Paper variant="outlined">
                    <TableContainer>
                        <Table>
                            {

                                <>
                                    {/* <TableHead>
                                        <TableRow>
                                            {
                                                Object.keys(appointments[0]).map(item => (
                                                    <TableCell>{item}</TableCell>
                                                ))
                                            }
                                        </TableRow>
                                    </TableHead> */}
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Sr. No</TableCell>
                                            <TableCell>Date</TableCell>
                                            <TableCell>Time</TableCell>
                                            <TableCell>Name</TableCell>
                                            <TableCell>Contact</TableCell>
                                            <TableCell>Prescription</TableCell>
                                            <TableCell>Prescription</TableCell>
                                            <TableCell>Prescription</TableCell>
                                            <TableCell>Prescription</TableCell>
                                            <TableCell>Status</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>

                                        {
                                            (loading ? Array.from(new Array(10)) : appointments).map((items, i) =>

                                                <TableRow>
                                                    {
                                                        (items ? Object.values(items) : Array.from(new Array(10))).map(item => (
                                                            <TableCell>{item ? item.slice(0, 10) : <Skeleton animation="wave" />}</TableCell>
                                                        ))
                                                    }
                                                </TableRow>

                                            )
                                        }
                                    </TableBody>
                                </>}
                        </Table>
                        {!loading &&
                            (appointments.length === 0 && <Typography margin="50px 0" textAlign="center">No Appointments Found!</Typography>)}
                    </TableContainer>
                </Paper>
            </Container>
        </>
    );
}







