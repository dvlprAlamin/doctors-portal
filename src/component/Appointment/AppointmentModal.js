import React, { useEffect, useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { Grid, LinearProgress, MenuItem } from '@mui/material';
import MuiButton from '../StyledComponent/MuiButton';
import MuiTextField from '../StyledComponent/MuiTextField';
import axios from 'axios';

const style = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    margin: 'auto',
    maxHeight: 'fit-content',
    maxWidth: 500,
    bgcolor: 'background.paper',
    boxShadow: 24,
    padding: 4,
};

const AppointmentModal = ({ open, setOpen, date }) => {
    const [gender, setGender] = useState('none');
    const [formData, setFormData] = useState({});
    const [loading, setLoading] = useState(false)
    const handleChange = e => {
        const newData = {
            ...formData,
            gender,
            status: 'pending',
            action: 'not visited',
            date: new Date(date).toDateString(),
            time: new Date(date).toTimeString()
        };
        newData[e.target.name] = e.target.value;
        setFormData(newData);
    }
    const handleSubmit = e => {
        setLoading(true)
        e.preventDefault();
        console.log(formData);
        axios.post('https://secret-plains-52601.herokuapp.com/addAppointment', formData)
            .then(res => {
                if (res.data) {
                    setOpen(false)
                    setLoading(false);
                }
            })
    }

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={() => setOpen(false)}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={open}>
                <Box sx={style}>
                    {loading && <LinearProgress />}
                    <form onSubmit={handleSubmit}>
                        <MuiTextField
                            variant="outlined"
                            fullWidth
                            name="name"
                            label="Name"
                            margin="dense"
                            onChange={handleChange}
                            required
                        />
                        <MuiTextField
                            margin="dense"
                            variant="outlined"
                            fullWidth
                            name="phone"
                            label="Phone Number"
                            onChange={handleChange}
                            required
                        />
                        <MuiTextField
                            variant="outlined"
                            fullWidth
                            name="email"
                            label="Email"
                            margin="dense"
                            onChange={handleChange}
                            required
                        />
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <MuiTextField
                                    select
                                    variant="outlined"
                                    fullWidth
                                    name="gender"
                                    margin="dense"
                                    value={gender}
                                    onChange={e => setGender(e.target.value)}
                                    required
                                >
                                    <MenuItem value="none" disabled>Gender</MenuItem>
                                    <MenuItem value="male">Male</MenuItem>
                                    <MenuItem value="female">Female</MenuItem>

                                </MuiTextField>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <MuiTextField
                                    variant="outlined"
                                    fullWidth
                                    name="age"
                                    label="Age"
                                    margin="dense"
                                    onChange={handleChange}
                                    required
                                />
                            </Grid>
                        </Grid>
                        <MuiButton type="submit" style={{ marginTop: 10 }}>Send</MuiButton>
                    </form>
                </Box>
            </Fade>
        </Modal>
    );
};

export default AppointmentModal;