import axios from '../../axios'

const getAllCustomers = async () => {
    try {
        const res = await axios.get('/customer/')
        return res
    } catch (error) {
        console.log(error)
    }
}

const createCustomer = async () => {
    try {
        const res = await axios.get('/customer/create')
        return res
    } catch (error) {
        console.log(error)
    }
}
