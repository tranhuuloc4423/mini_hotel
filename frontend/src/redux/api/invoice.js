import axios from '../../axios'
import { toast } from 'react-toastify'
import { addItem, removeItem, setInvoices } from '../slices/invoiceSlice'

const getInvoices = async (dispatch) => {
    try {
        const res = await axios.get('/invoice/')
        // console.log(res.data)
        dispatch(setInvoices(res.data))
    } catch (error) {
        console.log(error)
    }
}

const createInvoice = async (invoice, dispatch) => {
    try {
        const res = await axios.post('/invoice/create/', invoice)
        dispatch(addItem(res.data))
        toast.success('Create Invoice Successfully!')
    } catch (error) {
        toast.error('Create Invoice Failed!')
        console.log(error)
    }
}

const removeInvoice = async (id, dispatch) => {
    try {
        await axios.delete(`/invoice/${id}`)
        dispatch(removeItem(id))
        getInvoices(dispatch)
        toast.success('Delete Invoice Successfully!')
    } catch (error) {
        toast.error('Delete Invoice Failed!')
        console.log(error)
    }
}

export { getInvoices, createInvoice, removeInvoice }
