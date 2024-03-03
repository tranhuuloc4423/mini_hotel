import { createSlice } from '@reduxjs/toolkit'

const invoiceSlice = createSlice({
    name: 'invoice',
    initialState: {
        invoices: []
    },
    reducers: {
        setInvoices: (state, action) => {
            state.invoices = action.payload
        },
        addItem: (state, action) => {
            state.invoices.push(action.payload)
        },
        removeItem: (state, action) => {
            const newInvoice = state.invoices.filter(
                (room) => room.id !== action.payload
            )
            state.invoices = newInvoice
        }
    }
})

export const { setInvoices, addItem, removeItem } = invoiceSlice.actions

export default invoiceSlice.reducer
