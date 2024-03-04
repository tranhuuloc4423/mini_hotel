import { createSlice } from '@reduxjs/toolkit'

const invoiceSlice = createSlice({
    name: 'invoice',
    initialState: {
        invoices: [],
        roomSort: false,
        customerSort: false,
        timeSort: false,
        totalSort: false,
        search: ''
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
        },
        sortByRoom: (state, action) => {
            if (action.payload) {
                state.invoices.sort((a, b) =>
                    a.room.roomname.localeCompare(b.room.roomname)
                )
            } else {
                state.invoices.sort((a, b) =>
                    b.room.roomname.localeCompare(a.room.roomname)
                )
            }
        },
        sortByCustomer: (state, action) => {
            if (action.payload) {
                state.invoices.sort((a, b) =>
                    a.customer.fullname.localeCompare(b.customer.fullname)
                )
            } else {
                state.invoices.sort((a, b) =>
                    b.customer.fullname.localeCompare(a.customer.fullname)
                )
            }
        },
        sortByTime: (state, action) => {
            if (action.payload) {
                state.invoices.sort((a, b) => a.time.localeCompare(b.time))
            } else {
                state.invoices.sort((a, b) => b.time.localeCompare(a.time))
            }
        },
        sortByTotal: (state, action) => {
            if (action.payload) {
                state.invoices.sort((a, b) => a.total - b.total)
            } else {
                state.invoices.sort((a, b) => b.total - a.total)
            }
        },
        setSortByRoom: (state) => {
            state.roomSort = !state.roomSort
        },
        setSortByCustomer: (state) => {
            state.customerSort = !state.customerSort
        },
        setSortByTime: (state) => {
            state.timeSort = !state.timeSort
        },
        setSortByTotal: (state) => {
            state.totalSort = !state.totalSort
        },
        setSearch: (state, action) => {
            state.search = action.payload
        },
        filter: (state) => {
            const searchQuery = state.search.toLowerCase()
            state.invoices = state.invoices.filter((item) => {
                return (
                    item.room.name.toLowerCase().includes(searchQuery) ||
                    item.customer.fullname
                        .toLowerCase()
                        .includes(searchQuery) ||
                    item.time.toLowerCase().includes(searchQuery) ||
                    item.total.toString().toLowerCase().includes(searchQuery)
                )
            })
        }
    }
})

export const {
    setInvoices,
    addItem,
    removeItem,
    sortByRoom,
    sortByCustomer,
    sortByTime,
    sortByTotal,
    setSortByRoom,
    setSortByCustomer,
    setSortByTime,
    setSortByTotal,
    setSearch,
    filter
} = invoiceSlice.actions

export default invoiceSlice.reducer
