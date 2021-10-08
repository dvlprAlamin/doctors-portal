import { TextField } from '@mui/material';
import { styled } from '@mui/styles';

const ModalTextField = styled(TextField)({
    '& .MuiOutlinedInput-root': {
        '&.Mui-focused fieldset': {
            borderColor: '#19D3AE',
        },
        '&:hover fieldset': {
            borderColor: '#19D3AE'
        }
    },
});
export default ModalTextField;