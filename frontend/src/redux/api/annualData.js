import axios from '../../axios'
import { toast } from 'react-toastify'

const createData = async (data) => {
    try {
        await axios.post('/data/create', data)
    } catch (error) {
        toast.error('Data Failed!')
    }
}

export { createData }
