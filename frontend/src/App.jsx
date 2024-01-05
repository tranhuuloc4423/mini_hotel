import VerticalBar from './components/VerticalBar'
import './index.css'
import { Routes, Route } from 'react-router-dom'
import paths from './utils/paths'
import { Home, Login } from './components/Pages/'

const { HOME, LOGIN } = paths

function App() {
    return (
        <div>
            <VerticalBar />
            <Routes>
                <Route path={HOME} element={<Home />}>
                    <Route path={LOGIN} element={<Login />} />
                </Route>
            </Routes>
        </div>
    )
}

export default App
