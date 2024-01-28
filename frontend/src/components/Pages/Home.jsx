import { Outlet, useNavigate } from 'react-router'
import Sidenav from '../Common/Sidenav'
import { useEffect } from 'react'

const Home = () => {
    // const navigate = useNavigate()
    // useEffect(() => {
    //     console.log(isFirstLoad)
    //     if (!isFirstLoad) {
    //         navigate('/login')
    //     } else {
    //         navigate('/home')
    //     }
    // }, [isFirstLoad, navigate])
    return (
        <div>
            <div className="flex justify-between w-screen">
                <Sidenav />
                <div className="w-[85%] sm:mt-8 flex justify-center">
                    <div className="w-[90%]">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
