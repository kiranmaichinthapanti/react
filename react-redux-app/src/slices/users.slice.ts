import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUsers = createAsyncThunk('fetchUsers', async() => {
    try {
        const response = await axios.get('https://fakestoreapi.com/users');
        return response.data;
    } catch(error) {

    }
});

const userSlice = createSlice({
    name: 'users',
    initialState: {
        isLoading: false,
        data: [],
        error: null
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state, action) => {
            state.isLoading = true;
        });

        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.data = action.payload;
            state.isLoading = false;
        });
    }
});
export default userSlice.reducer;