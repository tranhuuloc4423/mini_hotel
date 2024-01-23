import { createSlice } from '@reduxjs/toolkit'

const amenities = createSlice({
    name: 'amenities',
    initialState: {
        openModal: false,
        search: ''
    },
    reducers: {
        setOpenModal: (state, action) => {
            state.openModal = action.payload
        },
        setSearch: (state, action) => {
            state.search = action.payload
        }
    }
})

export const { setOpenModal, setSearch } = amenities.actions

export default amenities.reducer
