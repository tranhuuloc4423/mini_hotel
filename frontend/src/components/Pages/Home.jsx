import { Outlet, useLocation, useNavigate } from 'react-router'
import Sidenav from '../Common/Sidenav'
import { useSelector } from 'react-redux'
import { useEffect, useRef } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { FaUserCircle } from 'react-icons/fa'
import {
    MDBDropdown,
    MDBDropdownItem,
    MDBDropdownMenu,
    MDBDropdownToggle
} from 'mdb-react-ui-kit'

const Home = () => {
    const location = useLocation()
    const { sidenav, currentUser } = useSelector((state) => state.app)
    const sidenavRef = useRef(null)
    const pathname = location.pathname.split('/')[2]
    useEffect(() => {
        console.log(sidenavRef.current?.offsetWidth)
    }, [])
    return (
        <div>
            <div className="w-screen">
                <Sidenav ref={sidenavRef} />
                <div
                    className={`h-screen ${sidenav ? 'pl-[12%]' : 'pl-[4%]'} `}
                >
                    <div className="w-[100%] p-4 ">
                        <div className="flex justify-between pb-6 text-xl">
                            <div className="font-bold">
                                Dashboard /{' '}
                                <span className="text-slate-900">
                                    {pathname}
                                </span>
                            </div>
                            <div className="border-2 cursor-pointer">
                                <MDBDropdown>
                                    <MDBDropdownToggle
                                        console
                                        className="flex items-center gap-2"
                                    >
                                        <FaUserCircle size={24} />
                                        <span className="font-bold">
                                            {currentUser.username}
                                        </span>
                                        <IoIosArrowDown size={24} />
                                    </MDBDropdownToggle>
                                    <MDBDropdownMenu>
                                        <MDBDropdownItem>
                                            Change info
                                        </MDBDropdownItem>
                                        <MDBDropdownItem>
                                            Logout
                                        </MDBDropdownItem>
                                    </MDBDropdownMenu>
                                </MDBDropdown>
                            </div>
                        </div>
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
