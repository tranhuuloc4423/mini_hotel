import { createSlice } from '@reduxjs/toolkit'

const roomSlice = createSlice({
    name: 'room',
    initialState: {
        rooms: []
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
        }
    }
})

export const { setRooms, addItem, removeItem, updateItem } = roomSlice.actions

export default roomSlice.reducer
