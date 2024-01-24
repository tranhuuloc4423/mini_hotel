import { createSlice } from '@reduxjs/toolkit'

const amenities = createSlice({
    name: 'amenities',
    initialState: {
        amenities: []
    },
    reducers: {
        setAmenities: (state, action) => {
            state.amenities = action.payload
        },
        addItem: (state, action) => {
            state.amenities.push(action.payload)
        },
        removeItem: (state, action) => {
            state.amenities = state.amenities.filter((item, index) => {
                return item.id != action.payload
            })
        }
    }
})

export const { setAmenities, addItem, removeItem } = amenities.actions

export default amenities.reducer
