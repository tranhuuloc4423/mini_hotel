import { Routes, Route } from 'react-router-dom'
import paths from './utils/paths'
import {
    Calculate,
    Customer,
    Dashboard,
    Home,
    IndexEW,
    Signin,
    Report,
    Room,
    Service,
    Signup
} from './components/Pages/'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

const { HOME, SIGNIN, SIGNUP, DASHBOARD, CUSTOMER, ROOM, SERVICE, STATUS, REPORT, INDEX, CALCULATE } = paths

function App() {
    return (
        <div className="bg-[#ededed]">
            <Routes>
                <Route path={SIGNIN} element={<Signin />} />
                <Route path={SIGNUP} element={<Signup />} />
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
    )
}

export default App
