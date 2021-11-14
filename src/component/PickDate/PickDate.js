import React, { useState } from 'react';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import MuiTextField from '../StyledComponent/MuiTextField';
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
const PickDate = ({ handler }) => {
    const [date, setDate] = useState(new Date());
    console.log(date);
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Picker
                views={['day']}
                value={date}
                onChange={(newValue) => {
                    setDate(newValue);
                    handler(newValue);
                }}
                renderInput={(params) => <MuiTextField style={{ maxWidth: 180, padding: 10 }} {...params} helperText={null} />}
            />
        </LocalizationProvider>
    );
};

export default PickDate;