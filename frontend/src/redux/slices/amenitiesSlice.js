import { createSlice } from '@reduxjs/toolkit'

const amenities = createSlice({
    name: 'amenities',
    initialState: {
        amenities: [],
        nameSort: false,
        priceSort: false,
        unitSort: false
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
        },
        sortByName: (state, action) => {
            if (action.payload) {
                state.amenities.sort((a, b) => a.name.localeCompare(b.name))
            } else {
                state.amenities.sort((a, b) => b.name.localeCompare(a.name))
            }
        },
        sortByPrice: (state, action) => {
            if (action.payload) {
                state.amenities.sort((a, b) => a.price - b.price)
            } else {
                state.amenities.sort((a, b) => b.price - a.price)
            }
        },
        sortByUnit: (state, action) => {
            if (action.payload) {
                state.amenities.sort((a, b) => a.unit.localeCompare(b.unit))
            } else {
                state.amenities.sort((a, b) => b.unit.localeCompare(a.unit))
            }
        },
        setSortByName: (state) => {
            state.nameSort = !state.nameSort
        },
        setSortByPrice: (state) => {
            state.priceSort = !state.priceSort
        },
        setSortByUnit: (state) => {
            state.unitSort = !state.unitSort
        }
    }
})

export const {
    setAmenities,
    addItem,
    removeItem,
    updateItem,
    sortByName,
    sortByPrice,
    sortByUnit,
    setSortByName,
    setSortByPrice,
    setSortByUnit
} = amenities.actions

export default amenities.reducer
