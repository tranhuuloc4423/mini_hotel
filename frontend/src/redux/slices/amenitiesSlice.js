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
            const newAmenities = state.amenities.filter(
                (amenity) => amenity.id !== action.payload
            )
            state.amenities = newAmenities
        },
        updateItem: (state, action) => {
            const updatedAmenities = state.amenities.map((amenity) => {
                if (amenity.id === action.payload.id) {
                    return { ...amenity, ...action.payload.data }
                }
                return amenity
            })

            state.amenities = updatedAmenities
        }
    }
})

export const { setAmenities, addItem, removeItem, updateItem } =
    amenities.actions

export default amenities.reducer
