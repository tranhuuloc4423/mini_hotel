import { createSlice } from '@reduxjs/toolkit'

const index = createSlice({
    name: 'index',
    initialState: {
        index: [],
        activeTab: 'Water',
        activeAmenities: null,
        roomSort: false,
        customerSort: false,
        search: ''
    },
    reducers: {
        setActiveTab: (state, action) => {
            state.activeTab = action.payload
        },
        setActiveAmenities: (state, action) => {
            state.activeAmenities = action.payload
        }
    }
})

export const { setActiveTab, setActiveAmenities } = index.actions

export default index.reducer
