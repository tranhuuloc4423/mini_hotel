import { createSlice } from '@reduxjs/toolkit'

const index = createSlice({
    name: 'index',
    initialState: {
        index: [],
        activeTab: null
    },
    reducers: {
        setActiveTab: (state, action) => {
            state.activeTab = action.payload
        }
    }
})

export const { setActiveTab } = index.actions

export default index.reducer
