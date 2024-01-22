import { createSlice } from '@reduxjs/toolkit'

const roomSlice = createSlice({
    name: 'room',
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

export const { setOpenModal, setSearch } = roomSlice.actions

export default roomSlice.reducer
