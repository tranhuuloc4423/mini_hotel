import { Routes, Route, useNavigate } from 'react-router-dom'
import paths from './utils/paths'
import {
    Calculate,
    Customer,
    Dashboard,
    Home,
    IndexEW,
    Login,
    Report,
    Room,
    Service,
    Register
} from './components/Pages/'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setFirstLoad } from './redux/slices/appSlice'
import { Bounce, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const {
    HOME,
    LOGIN,
    REGISTER,
    DASHBOARD,
    CUSTOMER,
    ROOM,
    SERVICE,
    REPORT,
    INDEX,
    CALCULATE
} = paths

function App() {
    const navigate = useNavigate()
    const { firstLoad } = useSelector((state) => state.app)
    const dispatch = useDispatch()
    useEffect(() => {
        if (firstLoad) {
            navigate('/login')
            dispatch(setFirstLoad(false))
        }
    }, [navigate])
    return (
        <>
            <div className="bg-[#ededed]">
                <Routes>
                    <Route path={LOGIN} element={<Login />} />
                    <Route path={REGISTER} element={<Register />} />
                    <Route path={HOME} element={<Home />}>
                        <Route path={DASHBOARD} element={<Dashboard />} />
                        <Route path={CUSTOMER} element={<Customer />} />
                        <Route path={ROOM} element={<Room />} />
                        <Route path={INDEX} element={<IndexEW />} />
                        <Route path={CALCULATE} element={<Calculate />} />
                        <Route path={SERVICE} element={<Service />} />
                        <Route path={REPORT} element={<Report />} />
                    </Route>
                </Routes>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />
        </>
    )
}

export default App
