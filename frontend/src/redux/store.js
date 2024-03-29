import { configureStore } from '@reduxjs/toolkit'
import roomSlice from './slices/roomSlice'
import appSlice from './slices/appSlice'
import authSlice from './slices/authSlice'
import amenities from './slices/amenitiesSlice'
import customerSlice from './slices/customerSlice'
import indexSlice from './slices/indexSlice'
import invoiceSlice from './slices/invoiceSlice'
export default configureStore({
    reducer: {
        app: appSlice,
        auth: authSlice,
        room: roomSlice,
        amenities: amenities,
        customer: customerSlice,
        index: indexSlice,
        invoice: invoiceSlice
    }
})
