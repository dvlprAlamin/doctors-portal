import { Typography } from '@mui/material';
import React from 'react';
import UserAvatar from '../Sidebar/UserAvatar';

const PageHeader = ({ title }) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography style={{ marginBottom: 25 }} variant="h6">{title}</Typography>
            <UserAvatar />
        </div>
    );
};

export default PageHeader;