import { styled } from '@mui/styles';
import { CircularProgress } from '@mui/material';
import { Box } from '@mui/system';


// const Progress = styled(CircularProgress)({
//     position: 'absolute',
//     left: '50%',
//     top: '50%',
//     transform: 'translate(-50%,-50%)'
// })
const Loader = () => {
    return (
        <Box display="flex" justifyContent="center" alignItems="center" width="100%" height="300px">
            <CircularProgress />
        </Box>
    );
};

export default Loader;