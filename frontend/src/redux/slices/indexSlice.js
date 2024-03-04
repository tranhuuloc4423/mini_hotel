import { createSlice } from '@reduxjs/toolkit'

const index = createSlice({
    name: 'index',
    initialState: {
        index: [],
        checkIndexs: false,
        activeAmenities: null,
        roomSort: false,
        customerSort: false,
        search: ''
    },
    reducers: {
        setActiveAmenities: (state, action) => {
            state.activeAmenities = action.payload
        },
        setCheckIndexs: (state, action) => {
            state.checkIndexs = action.payload
        }
    }
})

export const { setCheckIndexs, setActiveAmenities } = index.actions

export default index.reducer
