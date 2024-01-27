import { createSlice } from '@reduxjs/toolkit'

const appSlice = createSlice({
    name: 'app',
    initialState: {
        currentUser: {
            username: null,
            password: null
        }
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
        }
    }
})

export const { setCurrentUser, setLogoutUser } = appSlice.actions

export default appSlice.reducer
