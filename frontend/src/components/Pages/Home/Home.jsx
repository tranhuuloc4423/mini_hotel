import { Outlet, useLocation, useNavigate } from 'react-router'
import Sidenav from '../../Common/Sidenav'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useRef, useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { FaUserCircle } from 'react-icons/fa'
import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalBody,
    MDBModalFooter
} from 'mdb-react-ui-kit'
import FormLogOut from './FormLogOut'
import FormChangeInfo from './FormChangeInfo'
import FormChangePass from './FormChangePass'

const Home = () => {
    const location = useLocation()
    const { sidenav, currentUser } = useSelector((state) => state.app)
    const [openProfile, setOpenFrofile] = useState(false)
    const [openLogOut, setOpenLogOut] = useState(false)
    const [openChangeInfo, setOpenChangeInfo] = useState(false)
    const [openChangePass, setOpenChangePass] = useState(false)
    const sidenavRef = useRef(null)
    const pathname = location.pathname.split('/')[2]

    useEffect(() => {
        console.log(sidenavRef.current?.offsetWidth)
    }, [])
    return (
        <>
            <div className="w-screen h-screen">
                <Sidenav ref={sidenavRef} />
                <div
                    className={`h-screen overflow-hidden ${
                        sidenav ? 'pl-[12%]' : 'pl-[4%]'
                    } `}
                >
                    <div className="w-[100%] h-full p-4">
                        <div className="flex justify-between pb-6 text-xl h-[5%]">
                            <div className="font-bold">
                                Dashboard /{' '}
                                <span className="text-slate-900">
                                    {pathname}
                                </span>
                            </div>
                            <div
                                className="border-2 cursor-pointer flex items-center gap-2 relative p-3 w-[200px]"
                                onClick={() => setOpenFrofile(!openProfile)}
                            >
                                <FaUserCircle size={24} />
                                <span className="font-bold">
                                    {currentUser.username}
                                </span>
                                <IoIosArrowDown size={24} />
                                {openProfile && (
                                    <div className="absolute flex z-50 flex-col overflow-hidden bg-white rounded-md shadow-md top-[120%] left-0 w-full">
                                        <div
                                            className="p-3 hover:bg-white_1"
                                            onClick={() =>
                                                setOpenChangeInfo(true)
                                            }
                                        >
                                            Change Info
                                        </div>
                                        <div
                                            className="p-3 hover:bg-white_1"
                                            onClick={() =>
                                                setOpenChangePass(true)
                                            }
                                        >
                                            Change Password
                                        </div>
                                        <div
                                            className="p-3 hover:bg-white_1"
                                            onClick={() => setOpenLogOut(true)}
                                        >
                                            Logout
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="h-[90%]">
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
            <FormLogOut openLogOut={openLogOut} setOpenLogOut={setOpenLogOut} />
            <FormChangeInfo
                openChangeInfo={openChangeInfo}
                setOpenChangeInfo={setOpenChangeInfo}
            />
            <FormChangePass
                openChangePass={openChangePass}
                setOpenChangePass={setOpenChangePass}
            />
        </>
    )
}

export default Home
