import { Outlet, useNavigate } from 'react-router'
import Sidenav from '../Common/Sidenav'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

const Home = () => {
    const { sidenav } = useSelector((state) => state.app)
    return (
        <div>
            <div className="flex justify-between w-screen">
                <Sidenav />
                <div
                    className={`${
                        sidenav ? 'w-[85%]' : 'w-[95%]'
                    } sm:mt-8 flex justify-center`}
                >
                    <div className="w-[100%] p-4">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
