import { createSlice } from "@reduxjs/toolkit"
const appSlice = createSlice({

    name : "app",
    initialState : {
        isLoggedIn : true,
    },
    reducers : {
        toggleUser : (state) => {
            state.isLoggedIn = !state.isLoggedIn;

        },
    },
});

export const {toggleUser} = appSlice.actions;
export default appSlice.reducer;