import { Avatar } from '@mui/material';
import React from 'react';
import { useMyContext } from '../../../context/context';

const UserAvatar = () => {
    const { loggedInUser } = useMyContext();
    return (
        <Avatar src={loggedInUser?.photoURL} />
    );
};

export default UserAvatar;