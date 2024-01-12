import { Outlet } from 'react-router'
import Sidenav from '../Sidenav'

const Home = () => {
    return (
        <div>
            <div className="flex justify-between w-screen">
                <Sidenav />
                <div className="w-[85%] mt-8 flex justify-center">
                    <div className="w-[90%]">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
