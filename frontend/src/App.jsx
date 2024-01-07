import './index.css'
import { Routes, Route } from 'react-router-dom'
import paths from './utils/paths'
import { Account, Customer, Dashboard, Home, Login, Price, Report, Room, Service, Status } from './components/Pages/'

const { HOME, LOGIN, DASHBOARD, ACCOUNT, CUSTOMER, ROOM, PRICE, SERVICE, STATUS, REPORT } = paths

function App() {
    return (
        <Routes>
            <Route path={LOGIN} element={<Login />} />
            <Route path={HOME} element={<Home />}>
                <Route path={DASHBOARD} element={<Dashboard />} />
                <Route path={ACCOUNT} element={<Account />} />
                <Route path={CUSTOMER} element={<Customer />} />
                <Route path={ROOM} element={<Room />} />
                <Route path={PRICE} element={<Price />} />
                <Route path={SERVICE} element={<Service />} />
                <Route path={STATUS} element={<Status />} />
                <Route path={REPORT} element={<Report />} />
            </Route>
        </Routes>
    )
}

export default App
