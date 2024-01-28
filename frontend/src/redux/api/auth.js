import axios from '../../axios'
import {
    loginFailed,
    loginStart,
    loginSuccess,
    registerFailed,
    registerStart,
    registerSuccess
} from '../slices/authSlice'
import { toast } from 'react-toastify'

export const loginUser = async (user, dispatch, navigate) => {
    dispatch(loginStart())
    try {
        const res = await axios.post('/auth/login', user)
        dispatch(loginSuccess(res.data))
        dispatch(loginSuccess(user))
        toast.success('Login Success!')
        localStorage.setItem('currentUser', JSON.stringify(user))
        navigate('/home/dashboard')
    } catch (error) {
        toast.error('Login Failed!')
        dispatch(loginFailed())
    }
}

export const registerUser = async (user, dispatch, navigate) => {
    dispatch(registerStart())
    try {
        await axios.post('/auth/register', user)
        dispatch(registerSuccess())
        toast.success('Register Success!')
        navigate('/login')
    } catch (error) {
        toast.error('Register Failed!')
        dispatch(registerFailed())
    }
}
