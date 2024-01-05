import VerticalBar from './components/VerticalBar'
import './index.css'
import { Routes, Route } from 'react-router-dom'
import paths from './utils/paths'
import { Home, Login, Public } from './components/Pages/'

const { PUBLIC, HOME, LOGIN, REGISTER, ACCOUNT, CUSTOMER, ROOM, PRICE, SERVICE, STATUS } = paths

function App() {
    console.log(PUBLIC)
    return (
        <Routes>
            <Route path={LOGIN} element={<Login />} />
            <Route path={PUBLIC} element={<Public />}>
                <Route path={HOME} element={<Home />} />
                <Route path={ACCOUNT} element={<VerticalBar />} />
                <Route path={CUSTOMER} element={<Home />} />
            </Route>
        </Routes>
    )
}

export default App
