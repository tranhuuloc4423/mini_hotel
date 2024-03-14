import { createSlice } from '@reduxjs/toolkit'

const appSlice = createSlice({
    name: 'app',
    initialState: {
        currentUser: {
            username: null,
            password: null,
            email: null
        },
        sidenav: true
    },
    reducers: {
        setCurrentUser: (state, action) => {
            state.currentUser.username = action.payload.username
            state.currentUser.password = action.payload.password
        },
        setLogoutUser: (state) => {
            localStorage.removeItem('currentUser')
            state.currentUser.username = null
            state.currentUser.password = null
            state.currentUser.email = null
        },
        setEmail: (state, action) => {
            state.currentUser.email = action.payload.email
        },
        openSidenav: (state) => {
            state.sidenav = true
        },
        closeSidenav: (state) => {
            state.sidenav = false
        }
    }
})

export const {
    setCurrentUser,
    setLogoutUser,
    openSidenav,
    closeSidenav,
    setEmail
} = appSlice.actions

export default appSlice.reducer
