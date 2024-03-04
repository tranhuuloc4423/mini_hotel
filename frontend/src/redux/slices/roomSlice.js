import { createSlice } from '@reduxjs/toolkit'

const roomSlice = createSlice({
    name: 'room',
    initialState: {
        rooms: [],
        modalCustomer: false,
        search: ''
    },
    reducers: {
        setModalCustomer: (state, action) => {
            state.modalCustomer = action.payload
        },
        setRooms: (state, action) => {
            state.rooms = action.payload
        },
        addItem: (state, action) => {
            state.rooms.push(action.payload)
        },
        removeItem: (state, action) => {
            const newrooms = state.rooms.filter(
                (room) => room.id !== action.payload
            )
            state.rooms = newrooms
        },
        updateItem: (state, action) => {
            const updatedRooms = state.rooms.map((room) => {
                if (room.id === action.payload.id) {
                    return { ...room, ...action.payload.data }
                }
                return room
            })
            state.rooms = updatedRooms
        },
        updateCustomerItem: (state, action) => {
            state.rooms.find(
                (item, index) => item?.id === action.payload.roomId
            ).customer = action.payload.customer
        },
        setSearch: (state, action) => {
            state.search = action.payload
        },
        filter: (state) => {
            const searchQuery = state.search.toLowerCase()
            state.rooms = state.rooms.filter((item) => {
                return (
                    item.roomname.toLowerCase().includes(searchQuery) ||
                    item.price.toString().toLowerCase().includes(searchQuery)
                )
            })
        }
    }
})

export const {
    setRooms,
    addItem,
    removeItem,
    updateItem,
    setModalCustomer,
    updateCustomerItem,
    setSearch,
    filter
} = roomSlice.actions

export default roomSlice.reducer
