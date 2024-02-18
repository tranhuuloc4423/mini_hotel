import axios from '../../axios'
import { toast } from 'react-toastify'
import {
    addItem,
    removeItem,
    setAmenities,
    updateItem
} from '../slices/amenitiesSlice'
const getAllEmenities = async (dispatch) => {
    try {
        const res = await axios.get('/amenity/')
        dispatch(setAmenities(res.data))
    } catch (error) {
        console.log('failed')
    }
}
const createAmenity = async (amenity, dispatch) => {
    try {
        const res = await axios.post('/amenity/create', amenity)
        dispatch(addItem(res.data))
        toast.success('Create Amenity Success!')
        console.log('Success')
    } catch (error) {
        toast.error('Create Amenity Failed!')
        console.log('failed')
    }
}

const removeAmenity = async (id, dispatch) => {
    try {
        await axios.delete(`/amenity/${id}`)
        dispatch(removeItem(id))
        toast.success('Remove Amenity Success!')
    } catch (error) {
        toast.error('Remove Amenity Failed!')
        console.log('failed')
    }
}

const updateAmenity = async (amenity, dispatch) => {
    try {
        const newAmenity = { ...amenity }
        delete newAmenity?.id
        await axios.put(`/amenity/${amenity?.id}`, newAmenity)
        dispatch(updateItem(amenity))
        getAllEmenities(dispatch)
        toast.success('Update Amenity Success!')
    } catch (error) {
        toast.error('Update Amenity Failed!')
        console.log('failed')
    }
}

export { getAllEmenities, createAmenity, removeAmenity, updateAmenity }
