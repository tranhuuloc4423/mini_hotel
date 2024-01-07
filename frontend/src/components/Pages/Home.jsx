import { Outlet } from 'react-router'
import VerticalBar from '../VerticalBar'

const Home = () => {
    return (
        <div>
            <div className="flex">
                <VerticalBar />
                <div className="ml-[300px]">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Home
