import { Outlet } from 'react-router'
import VerticalBar from '../VerticalBar'

const Home = () => {
    return (
        <div>
            <div className="flex">
                <VerticalBar />
                <Outlet className="" />
            </div>
        </div>
    )
}

export default Home
