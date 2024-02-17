import axios from '../../axios'
import { toast } from 'react-toastify'
import { addItem, removeItem, setRooms, updateItem } from '../slices/roomSlice'

const getRooms = async (dispatch) => {
    try {
        const res = await axios.get('/room/')
        console.log(res.data)
        dispatch(setRooms(res.data))
    } catch (error) {
        console.log(error)
    }
}

const createRoom = async (room, dispatch) => {
    try {
        const res = await axios.post('/room/create/', room)
        dispatch(addItem(res.data))
        toast.success('Create Room Successfully!')
    } catch (error) {
        toast.error('Create Room Failed!')
        console.log(error)
    }
}

const deleteRoom = async (id, dispatch) => {
    try {
        await axios.delete(`/room/${id}`)
        dispatch(removeItem(id))
        getRooms(dispatch)
        toast.success('Delete Room Successfully!')
    } catch (error) {
        toast.error('Delete Room Failed!')
        console.log(error)
    }
}

const updateRoom = async (room, dispatch) => {
    try {
        const newRoom = { ...room }
        delete newRoom?.id
        await axios.put(`/room/${room?.id}`, newRoom)
        dispatch(updateItem(room))
        toast.success('Update Room Successfully!')
    } catch (error) {
        toast.success('Update Room Failed!')
        console.log(error)
    }
}

const addCustomerRoom = async (id, dispatch) => {
    try {
        await axios.put(`/room/${id}`)
        dispatch()
        toast.success('Delete Room Successfully!')
    } catch (error) {
        toast.error('Delete Room Failed!')
        console.log(error)
    }
}

export { getRooms, createRoom, deleteRoom, updateRoom }
