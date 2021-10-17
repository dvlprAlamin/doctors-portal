import { Button, Container, Input, Paper, Typography } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import DashboardDiv from '../../StyledComponent/DashboardDiv';
import MuiButton from '../../StyledComponent/MuiButton';
import MuiTextField from '../../StyledComponent/MuiTextField';
import PageHeader from '../PageHeader/PageHeader';
import AdminSidebar from '../Sidebar/AdminSidebar';
import UserAvatar from '../Sidebar/UserAvatar';

const AddDoctor = () => {
    const [infoData, setInfoData] = useState({})
    const [image, setImage] = useState(null);
    const handleImage = e => {
        const newImg = e.target.files[0];
        setImage(newImg);
    }
    // console.log(image);
    const onChangeHandler = e => {
        const newInfoData = { ...infoData, image };
        newInfoData[e.target.name] = e.target.value;
        setInfoData(newInfoData);
        // console.log(e.target.value);
    }
    const handleSubmit = e => {
        const formData = new FormData()
        formData.append('file', image);
        formData.append('name', infoData.name);
        formData.append('email', infoData.email);
        formData.append('phone', infoData.phone);
        e.preventDefault();
        axios.post('http://localhost:5000/addADoctor', formData)
            .then(res => {
                console.log(res.data);
            })
    }
    return (
        <>
            <AdminSidebar />
            <DashboardDiv>
                <Container>
                    <PageHeader title="Add Doctor" />
                </Container>
                <Container maxWidth="sm">
                    <Paper sx={{ padding: 2 }}>
                        <form onSubmit={handleSubmit}>
                            <MuiTextField
                                fullWidth
                                label="Doctor's Name"
                                name="name"
                                required
                                margin="dense"
                                onChange={onChangeHandler}
                            />
                            <MuiTextField
                                fullWidth
                                label="Email"
                                name="email"
                                required
                                margin="dense"
                                onChange={onChangeHandler}
                            />
                            <MuiTextField
                                fullWidth
                                label="Phone"
                                name="phone"
                                required
                                margin="dense"
                                onChange={onChangeHandler}
                            />
                            <label htmlFor="uploadImage">
                                <input onChange={handleImage} name="image" style={{ display: 'none' }} accept="image/*" id="uploadImage" type="file" />
                                <MuiButton component="div" style={{ marginTop: 10 }}>
                                    Choose Image
                                </MuiButton>
                                <div>{image?.name}</div>
                            </label>
                            <MuiButton type="submit" style={{ marginTop: 10 }}>Add</MuiButton>
                        </form>
                    </Paper>
                </Container>
            </DashboardDiv>
        </>
    );
};

export default AddDoctor;