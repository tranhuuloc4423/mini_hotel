import axios from '../../axios'
import { toast } from 'react-toastify'
import { addItem, removeItem, setAmenities } from '../slices/amenitiesSlice'
export const createAmenity = async (amenity, dispatch) => {
    try {
        const res = await axios.post('/amenity/create', amenity)
        dispatch(addItem(amenity))
        toast.success('Create Amenity Success!')
    } catch (error) {
        toast.error('Create Amenity Failed!')
        console.log('failed')
    }
}
export const getAllEmenities = async (dispatch) => {
    try {
        const res = await axios.get('/amenity/')
        dispatch(setAmenities(res.data))
    } catch (error) {
        console.log('failed')
    }
}

export const removeAmenity = async (id, dispatch) => {
    try {
        const res = await axios.delete(`/amenity/${id}`)
        dispatch(removeItem(id))
        toast.info('Remove Amenity Success!')
    } catch (error) {
        console.log('failed')
    }
}
