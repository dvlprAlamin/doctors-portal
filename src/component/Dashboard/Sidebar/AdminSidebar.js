import React from 'react';
import Sidebar from './Sidebar';
import TodayIcon from '@mui/icons-material/Today';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ReceiptIcon from '@mui/icons-material/Receipt';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
const sidebarItems = [
    {
        label: 'Dashboard',
        route: '/dashboard',
        Icon: DashboardIcon
    },
    {
        label: 'Appointments',
        route: '/appointments',
        Icon: TodayIcon
    },
    {
        label: 'Patients',
        route: '/patients',
        Icon: PeopleAltIcon
    },
    {
        label: 'Prescriptions',
        route: '/prescriptions',
        Icon: ReceiptIcon
    },
    {
        label: 'Add Doctor',
        route: '/add-doctor',
        Icon: PersonAddIcon
    }
]
const AdminSidebar = () => {
    return (
        <Sidebar sidebarItems={sidebarItems} />
    );
};

export default AdminSidebar;