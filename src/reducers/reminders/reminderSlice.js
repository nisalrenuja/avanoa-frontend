import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const reminderSlice = createSlice({
    name: 'reminder',
    initialState: {
        reminders: [{
            id: "",
            title: "",
            description: "",
            time: 0,
        }]
    },
    reducers: {
        onDelete: (state, action) => {
            axios.delete(`/reminder/delete/${action.payload}`).then((res) => {
                state.reminders = state.reminders.filter((reminder) => reminder.id !== action.payload);
            })
        },
        setReminders: (state, action) => {
            state.reminders = action.payload;
        },
        addReminder: (state, action) => {
            state.reminders.push(action.payload);
        }
    }
});

export const { onDelete, setReminders, addReminder } = reminderSlice.actions;

export default reminderSlice.reducer;