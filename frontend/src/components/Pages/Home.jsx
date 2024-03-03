import { Outlet, useNavigate } from 'react-router'
import Sidenav from '../Common/Sidenav'
import { useSelector } from 'react-redux'
import { useEffect, useRef } from 'react'

const Home = () => {
    const { sidenav } = useSelector((state) => state.app)
    const sidenavRef = useRef(null)
    useEffect(() => {
        console.log(sidenavRef.current?.offsetWidth)
    }, [])
    return (
        <div>
            <div className="w-screen">
                <Sidenav ref={sidenavRef} />
                <div className={`${sidenav ? 'pl-[12%]' : 'pl-[4%]'} `}>
                    <div className="w-[100%] p-4 h-screen">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
