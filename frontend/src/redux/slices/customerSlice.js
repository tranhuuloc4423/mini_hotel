import { createSlice } from '@reduxjs/toolkit'

const customer = createSlice({
    name: 'customer',
    initialState: {
        customers: [],
        customer: {},
        amenities: [],
        members: [
            {
                fullname: '',
                sex: '',
                dob: '',
                idcard: '',
                phonenumber: ''
            }
        ],
        save: false,
        fullnameSort: false,
        idcardSort: false,
        emailSort: false,
        phoneSort: false,
        search: '',
        edit: null
    },
    reducers: {
        setCustomers: (state, action) => {
            state.customers = action.payload
        },
        removeCustomers: (state, action) => {
            const newCustomers = state.customers.filter(
                (customer) => customer.id !== action.payload
            )
            state.customers = newCustomers
        },
        updateCustomers: (state, action) => {
            const updatedcustomers = state.customers.map((customer) => {
                if (customer.id === action.payload.id) {
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
        createCustomers: (state, action) => {
            state.customers.push(action.payload)
            state.customer = {}
            state.amenities = []
            state.members = []
        },
        sortByFullName: (state, action) => {
            if (action.payload) {
                state.customers.sort((a, b) =>
                    a.fullname.localeCompare(b.fullname)
                )
            } else {
                state.customers.sort((a, b) =>
                    b.fullname.localeCompare(a.fullname)
                )
            }
        },
        sortByIDCard: (state, action) => {
            if (action.payload) {
                state.customers.sort((a, b) => a.idcard - b.idcard)
            } else {
                state.customers.sort((a, b) => b.idcard - a.idcard)
            }
        },
        sortByEmail: (state, action) => {
            if (action.payload) {
                state.customers.sort((a, b) => a.email.localeCompare(b.email))
            } else {
                state.customers.sort((a, b) => b.email.localeCompare(a.email))
            }
        },
        sortByPhone: (state, action) => {
            if (action.payload) {
                state.customers.sort((a, b) => a.phonenumber - b.phonenumber)
            } else {
                state.customers.sort((a, b) => b.phonenumber - a.phonenumber)
            }
        },
        setSortByFullName: (state) => {
            state.fullnameSort = !state.fullnameSort
        },
        setSortByIDCard: (state) => {
            state.idcardSort = !state.idcardSort
        },
        setSortByEmail: (state) => {
            state.emailSort = !state.emailSort
        },
        setSortByPhone: (state) => {
            state.phoneSort = !state.phoneSort
        },
        setSearch: (state, action) => {
            state.search = action.payload
        },
        filter: (state) => {
            const searchQuery = state.search.toLowerCase()
            state.customers = state.customers.filter((item) => {
                return (
                    item.fullname.toLowerCase().includes(searchQuery) ||
                    item.idcard
                        .toString()
                        .toLowerCase()
                        .includes(searchQuery) ||
                    item.email.toLowerCase().includes(searchQuery) ||
                    item.phonenumber
                        .toString()
                        .toLowerCase()
                        .includes(searchQuery)
                )
            })
        },
        setEditId: (state, action) => {
            state.edit = action.payload
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
    updateMember,
    sortByFullName,
    sortByIDCard,
    sortByEmail,
    sortByPhone,
    setSortByFullName,
    setSortByIDCard,
    setSortByEmail,
    setSortByPhone,
    setSearch,
    filter,
    setEditId
} = customer.actions

export default customer.reducer
