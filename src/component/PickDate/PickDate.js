import React from 'react';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import MuiTextField from '../StyledComponent/MuiTextField';
import { useMyContext } from '../../context/context';
import { styled } from '@mui/styles'
const Picker = styled(DatePicker)({
    '& .MuiCalendarPicker-root': {
        '& button': {
            borderRadius: 5,
            borderColor: '#19D3AE !important',
            '&:hover': {
                background: '#19D3AE !important',
                color: '#fff !important'
            },
            '&:focus': {
                background: '#19D3AE !important',
                color: '#fff !important'
            },
            '&.Mui-selected': {
                color: '#fff !important'
            }
        }
    }

})
const PickDate = ({ appointByDateHandler }) => {
    // const [value, setValue] = React.useState(new Date());
    const { date, setDate } = useMyContext();
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Picker
                views={['day']}
                value={date}
                onChange={(newValue) => {
                    setDate(newValue);
                    appointByDateHandler();
                }}
                renderInput={(params) => <MuiTextField style={{ maxWidth: 180, padding: 10 }} {...params} helperText={null} />}
            />
        </LocalizationProvider>
    );
};

export default PickDate;