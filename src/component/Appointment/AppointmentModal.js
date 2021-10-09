import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { Grid, MenuItem } from '@mui/material';
import MuiButton from '../StyledComponent/MuiButton';
import MuiTextField from '../StyledComponent/MuiTextField';

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

const AppointmentModal = ({ open, setOpen }) => {

    const handleClose = () => setOpen(false);
    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={open}>
                <Box sx={style}>
                    <MuiTextField
                        variant="outlined"
                        fullWidth
                        label="Name"
                        margin="dense"
                    />
                    <MuiTextField
                        margin="dense"
                        variant="outlined"
                        fullWidth
                        label="Phone Number"
                    />
                    <MuiTextField
                        variant="outlined"
                        fullWidth
                        label="Email"
                        margin="dense"
                    />
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <MuiTextField
                                select
                                variant="outlined"
                                fullWidth
                                margin="dense"
                                value={'default'}>
                                <MenuItem value="default" disabled>Gender</MenuItem>
                                <MenuItem value="male">Male</MenuItem>
                                <MenuItem value="female">Female</MenuItem>
                            </MuiTextField>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <MuiTextField
                                variant="outlined"
                                fullWidth
                                label="Age"
                                margin="dense"
                            />
                        </Grid>
                    </Grid>
                    <MuiButton style={{ marginTop: 10 }}>Send</MuiButton>
                </Box>
            </Fade>
        </Modal>
    );
};

export default AppointmentModal;