import React from 'react';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { CalendarPicker } from '@mui/lab';
import { styled } from '@mui/styles'
const Picker = styled(CalendarPicker)({
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
})

const Calendar = ({ date, setDate, handler }) => {
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Picker date={date}
                onChange={(newDate) => {
                    setDate(newDate)
                    handler && handler(newDate)
                }} />
        </LocalizationProvider>
    );
}
export default Calendar;