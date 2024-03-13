import { Routes, Route, useNavigate } from 'react-router-dom'
import paths from './utils/paths'
import {
    Invoice,
    Customer,
    Dashboard,
    Home,
    IndexEW,
    Room,
    Amenities
} from './components/Pages/'
import Login from './components/Pages/Auth/Login'
import Register from './components/Pages/Auth/Register'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentUser } from './redux/slices/appSlice'
import { Bounce, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const {
    HOME,
    LOGIN,
    REGISTER,
    DASHBOARD,
    CUSTOMER,
    ROOM,
    AMENITIES,
    INDEX,
    INVOICE
} = paths

function App() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { currentUser } = useSelector((state) => state.app)
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('currentUser'))
        if (user) {
            dispatch(setCurrentUser(user))
        }
        if (currentUser?.username === null && currentUser?.password === null) {
            navigate('/login')
        } else {
            navigate('/home/dashboard')
        }
    }, [currentUser])
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
                        <Route path={INVOICE} element={<Invoice />} />
                        <Route path={AMENITIES} element={<Amenities />} />
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
