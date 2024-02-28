import { createSlice } from '@reduxjs/toolkit'

const appSlice = createSlice({
    name: 'app',
    initialState: {
        currentUser: {
            username: null,
            password: null
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
        },
        openSidenav: (state) => {
            state.sidenav = true
        },
        closeSidenav: (state) => {
            state.sidenav = false
        }
    }
})

export const { setCurrentUser, setLogoutUser, openSidenav, closeSidenav } =
    appSlice.actions

export default appSlice.reducer
