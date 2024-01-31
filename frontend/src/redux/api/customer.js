import axios from '../../axios'
import { toast } from 'react-toastify'
import {
    createCustomers,
    removeCustomers,
    setCustomers,
    updateCustomers
} from '../slices/customerSlice'

const getAllCustomers = async (dispatch) => {
    try {
        const res = await axios.get('/customer/')
        dispatch(setCustomers(res.data))
    } catch (error) {
        console.log(error)
    }
}

const createCustomer = async (customer, dispatch) => {
    try {
        await axios.post('/customer/create', customer)
        dispatch(createCustomers(customer))
        toast.success('Create Customer Success!')
    } catch (error) {
        toast.error('Create Customer Failed!')
        console.log('failed')
    }
}

const removeCustomer = async (id, dispatch) => {
    try {
        await axios.delete(`/customer/${id}`)
        dispatch(removeCustomers(id))
        toast.success('Remove Customer Success!')
    } catch (error) {
        toast.error('Remove Customer Failed!')
        console.log('failed')
    }
}

const updateCustomer = async (customer) => {
    try {
        const newCustomer = { ...customer }
        delete newCustomer?.customerId
        await axios.put(`/customer/${customer?.customerId}`, newCustomer)
        dispatch(updateCustomers(customer))
        toast.success('Update Customer Success!')
    } catch (error) {
        toast.error('Remove Customer Failed!')
        console.log('failed')
    }
}

export { getAllCustomers, createCustomer, removeCustomer, updateCustomer }
