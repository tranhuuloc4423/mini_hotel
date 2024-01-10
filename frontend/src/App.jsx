import './index.css'
import { Routes, Route } from 'react-router-dom'
import paths from './utils/paths'
import {
    Account,
    Calculate,
    Customer,
    Dashboard,
    Home,
    IndexEW,
    Login,
    Report,
    Room,
    Service,
    Signup,
    Status
} from './components/Pages/'

const { HOME, LOGIN, SIGNUP, DASHBOARD, ACCOUNT, CUSTOMER, ROOM, SERVICE, STATUS, REPORT, INDEX, CALCULATE } = paths

function App() {
    return (
        <Routes>
            <Route path={LOGIN} element={<Login />} />
            <Route path={SIGNUP} element={<Signup />} />
            <Route path={HOME} element={<Home />}>
                <Route path={DASHBOARD} element={<Dashboard />} />
                <Route path={ACCOUNT} element={<Account />} />
                <Route path={CUSTOMER} element={<Customer />} />
                <Route path={ROOM} element={<Room />} />
                <Route path={INDEX} element={<IndexEW />} />
                <Route path={CALCULATE} element={<Calculate />} />
                <Route path={SERVICE} element={<Service />} />
                <Route path={STATUS} element={<Status />} />
                <Route path={REPORT} element={<Report />} />
            </Route>
        </Routes>
    )
}

export default App
