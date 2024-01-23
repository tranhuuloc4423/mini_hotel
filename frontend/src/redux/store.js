import { configureStore } from '@reduxjs/toolkit'
import roomSlice from './slices/roomSlice'
import appSlice from './slices/appSlice'
import authSlice from './slices/authSlice'
import amenities from './slices/amenities'
export default configureStore({
    reducer: {
        app: appSlice,
        auth: authSlice,
        room: roomSlice,
        amenities: amenities
    }
})
