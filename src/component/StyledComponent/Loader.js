import { styled } from '@mui/styles';
import { CircularProgress } from '@mui/material';


const Loader = styled(CircularProgress)({
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%,-50%)'
})

export default Loader;