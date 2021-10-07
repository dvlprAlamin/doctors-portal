import { styled } from '@mui/styles';


const DashboardDiv = styled('div')({
    marginLeft: 220,
    marginTop: 20,
    '@media(max-width:600px)': {
        marginLeft: 0,
        marginTop: 20,
    }
})

export default DashboardDiv;