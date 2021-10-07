import React from 'react';
import Sidebar from './Sidebar';
import TodayIcon from '@mui/icons-material/Today';
const sidebarItems = [
    {
        label: 'Dashboard',
        route: '/dashboard',
        Icon: TodayIcon
    },
    {
        label: 'Appointments',
        route: '/appointments',
        Icon: TodayIcon
    },
    {
        label: 'Patients',
        route: '/patients',
        Icon: TodayIcon
    },
    {
        label: 'Prescriptions',
        route: '/prescriptions',
        Icon: TodayIcon
    }
]
const AdminSidebar = () => {
    return (
        <Sidebar sidebarItems={sidebarItems} />
    );
};

export default AdminSidebar;