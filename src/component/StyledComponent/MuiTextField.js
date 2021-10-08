import { TextField } from '@mui/material';
import { styled } from '@mui/styles';

const MuiTextField = styled(TextField)({
    '& .MuiOutlinedInput-root': {
        color: '#fff',
        '&.Mui-focused fieldset': {
            borderColor: '#19D3AE',
        },
        '&:hover fieldset': {
            borderColor: '#19D3AE'
        }
    },
    '& .MuiInputLabel-root': {
        color: '#fff'
    },
    '& fieldset': {
        borderColor: '#fff',
        // '&:hover': {
        //     borderColor: '#19D3AE'
        // }
    }
});
export default MuiTextField;