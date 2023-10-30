import { createSlice } from "@reduxjs/toolkit";
import { getToken } from "../util/getToken";
import { registerUser, userLogin } from "./authActions";

const token = getToken() ? getToken() : null;

const authSlice = createSlice({
    name: "auth",
    initialState: {
        token,
        registerSuccess: false,
        isLoggedIn: false,
        loading: false,
        authUser: null,
    },
    reducers: {
        logout: (state) => {
            localStorage.removeItem("token");
            state.isLoggedIn = false;
            state.authUser = null;
            state.loading = false;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(registerUser.pending, (state) => {
                state.registerSuccess = false;
                state.loading = true;
            })
        builder.addCase(registerUser.fulfilled, (state) => {
                state.registerSuccess = true;
                state.loading = false;
            })
        builder.addCase(registerUser.rejected, (state) => {
                state.registerSuccess = false;
                state.loading = false;
            })
        builder.addCase(userLogin.pending, (state) => {
                state.loading = true;
                state.isLoggedIn = false;
            })
        builder.addCase(userLogin.fulfilled, (state, action) => {
                state.loading = false;
                state.isLoggedIn = true;
                state.authUser = action.payload.user;
            })
        builder.addCase(userLogin.rejected, (state) => {
                state.loading = false;
                state.isLoggedIn = false;
                state.authUser = null;
            });
    }
})

export const authActions = authSlice.actions;
export default authSlice;

