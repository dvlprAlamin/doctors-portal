import React from 'react';
import Sidebar from './Sidebar';
import TodayIcon from '@mui/icons-material/Today';
const sidebarItems = [
    {
        label: 'Appointments',
        route: '/dashboard',
        Icon: TodayIcon
    }
]
const UserSidebar = () => {
    return (
        <Sidebar sidebarItems={sidebarItems} />
    );
};

export default UserSidebar;