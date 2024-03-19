import axios from '../../axios'
import { toast } from 'react-toastify'
import {
    addCustomer,
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

const getCustomer = async (id, dispatch) => {
    try {
        const res = await axios.get(`/customer/${id}`)
        dispatch(addCustomer(res.data))
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
        console.log(error)
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

const updateCustomer = async (id, customer, dispatch) => {
    try {
        await axios.put(`/customer/${id}`, customer)
        dispatch(updateCustomers(customer))
        getAllCustomers(dispatch)
        toast.success('Update Customer Success!')
    } catch (error) {
        toast.error('Remove Customer Failed!')
        console.log('failed')
    }
}

export {
    getAllCustomers,
    createCustomer,
    removeCustomer,
    updateCustomer,
    getCustomer
}
