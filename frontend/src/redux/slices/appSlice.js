import { createSlice } from '@reduxjs/toolkit'

const appSlice = createSlice({
    name: 'app',
    initialState: {
        firstLoad: true
    },
    reducers: {
        setFirstLoad: (state, action) => {
            state.firstLoad = action.payload
        }
    }
})

export const { setFirstLoad } = appSlice.actions

export default appSlice.reducer
