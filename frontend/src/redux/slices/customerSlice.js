import { createSlice } from '@reduxjs/toolkit'

const customer = createSlice({
    name: 'customer',
    initialState: {
        customers: [
            {
                fullname: '',
                sex: '',
                dob: '',
                idCard: '',
                phone: '',
                email: '',
                address: '',
                amenities: [],
                members: [
                    {
                        name: '',
                        dob: '',
                        sex: '',
                        idCard: '',
                        phone: ''
                    }
                ]
            }
        ],
        save: false
    },
    reducers: {
        addCustomer: (state, action) => {
            state.customers.push = action.payload
        },
        setSave: (state, action) => {
            state.save = action.payload
        }
    }
})

export const { addCustomer, setSave } = customer.actions

export default customer.reducer
