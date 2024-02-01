import { createSlice } from '@reduxjs/toolkit'

const customer = createSlice({
    name: 'customer',
    initialState: {
        customers: [],
        customer: {},
        amenities: [],
        members: [],
        save: false
    },
    reducers: {
        setCustomers: (state, action) => {
            state.customers = action.payload
        },
        removeCustomer: (state, action) => {
            const newCustomers = state.customers.filter(
                (customer) => customer.customerId !== action.payload
            )
            state.customers = newCustomers
        },
        updateCustomers: (state, action) => {
            const updatedcustomers = state.customers.map((customer) => {
                if (customer.customerId === action.payload.customerId) {
                    return { ...customer, ...action.payload.data }
                }
                return customer
            })

            state.customers = updatedcustomers
        },
        addCustomer: (state, action) => {
            state.customer = action.payload
        },
        addAmenities: (state, action) => {
            state.amenities = action.payload
        },
        setSave: (state, action) => {
            state.save = action.payload
        },
        addMember: (state, action) => {
            state.members.push(action.payload)
        },
        removeMember: (state, action) => {
            const index = action.payload
            const updatedMembers = [...state.members]
            updatedMembers.splice(index, 1)

            return {
                ...state,
                members: updatedMembers
            }
        },
        updateMember: (state, action) => {
            const { index, memberData } = action.payload
            const updatedMembers = [...state.members]
            updatedMembers[index] = memberData

            return {
                ...state,
                members: updatedMembers
            }
        },
        createCustomer: (state, action) => {
            state.customers.push(action.payload)
            state.customer = {}
            state.amenities = []
            state.members = []
        }
    }
})

export const {
    setCustomers,
    createCustomers,
    removeCustomers,
    updateCustomers,
    addCustomer,
    addAmenities,
    setSave,
    addMember,
    removeMember,
    updateMember
} = customer.actions

export default customer.reducer
