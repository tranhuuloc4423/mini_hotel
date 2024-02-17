import { createSlice } from '@reduxjs/toolkit'

const roomSlice = createSlice({
    name: 'room',
    initialState: {
        rooms: [],
        modalCustomer: false
    },
    reducers: {
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
        setModalCustomer: (state, action) => {
            state.modalCustomer = action.payload
        }
    }
})

export const { setRooms, addItem, removeItem, updateItem, setModalCustomer } =
    roomSlice.actions

export default roomSlice.reducer
