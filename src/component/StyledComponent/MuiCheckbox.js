import { styled } from '@mui/styles';
import { TextField } from '@mui/material';


const MuiCheckbox = styled(TextField)({
    background: 'linear-gradient(90deg, #19D3AE,#0FCFEC)',
    color: '#fff !important',
    border: '1px solid transparent',
    outline: '0 !important',
    borderRadius: 5,
    overflow: 'hidden',
    boxShadow: '0 !important',
    '& div': {
        height: 35,
        color: '#fff',
        minWidth: 80,
    },
    '& svg': {
        fill: '#fff'
    },
    '& .MuiOutlinedInput-root': {
        '&.Mui-focused fieldset': {
            borderColor: '#19D3AE',
        },
    },
})

export default MuiCheckbox;
