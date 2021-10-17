import { CircularProgress } from '@mui/material';
import { Box } from '@mui/system';


const Loader = () => {
    return (
        <Box display="flex" justifyContent="center" alignItems="center" width="100%" height="300px">
            <CircularProgress />
        </Box>
    );
};

export default Loader;