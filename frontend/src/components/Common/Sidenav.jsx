import Logo from './Logo'
import Navbar from './Navbar'
import icons from '../../utils/icons'
import { useEffect, useRef, useState, forwardRef } from 'react'
import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalBody,
    MDBModalFooter
} from 'mdb-react-ui-kit'
import { useDispatch, useSelector } from 'react-redux'
import {
    openSidenav,
    closeSidenav,
    setLogoutUser
} from '../../redux/slices/appSlice'
import { useNavigate } from 'react-router'

const { IoIosArrowBack, IoIosArrowForward } = icons

const { TbLogout2, MdOutlineLightMode } = icons
const Sidenav = forwardRef((props, ref) => {
    const [openModal, setOpenModal] = useState(false)
    const { sidenav } = useSelector((state) => state.app)
    const sidenavRef = useRef()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleLogout = () => {
        dispatch(setLogoutUser())
        setOpenModal(false)
        navigate('/login')
    }

    useEffect(() => {
        console.log(sidenav)
    }, [sidenav])

    return (
        <>
            {/* bg-[#242526] */}
            <div
                ref={sidenavRef}
                className={`bg-white h-screen select-none fixed z-10 py-[10px] flex flex-col justify-between transition-all ${
                    sidenav ? 'w-[12%]' : 'w-[68px]'
                }`}
            >
                <div>
                    <Logo />
                    <Navbar />
                </div>
                <div className="flex flex-col gap-2">
                    <div
                        className="sidenav-item"
                        onClick={() => {
                            setOpenModal(true)
                        }}
                    >
                        <TbLogout2 size={22} />
                        <span className={sidenav ? '' : 'hidden'}>Logout</span>
                    </div>
                    <div className="sidenav-item bg-[#e7f1fe]">
                        <MdOutlineLightMode size={22} />
                        <span className={sidenav ? '' : 'hidden'}>
                            Settings
                        </span>
                    </div>
                </div>

                <div className="absolute w-8 h-8 bg-[#3a3b3c] right-[-16px] rounded-full flex-center">
                    {sidenav ? (
                        <IoIosArrowBack
                            size={20}
                            color="white"
                            className="cursor-pointer"
                            onClick={() => dispatch(closeSidenav())}
                        />
                    ) : (
                        <IoIosArrowForward
                            size={20}
                            color="white"
                            className="cursor-pointer"
                            onClick={() => dispatch(openSidenav())}
                        />
                    )}
                </div>
            </div>
            <MDBModal
                staticBackdrop
                open={openModal}
                setOpen={setOpenModal}
                tabIndex="-1"
            >
                <MDBModalDialog>
                    <MDBModalContent>
                        <MDBModalHeader>
                            <MDBBtn
                                className="btn-close"
                                color="none"
                                onClick={() => setOpenModal(false)}
                            ></MDBBtn>
                        </MDBModalHeader>
                        <MDBModalBody className="p-4 text-center text-2xl">
                            Do you want to logout ?
                        </MDBModalBody>
                        <MDBModalFooter className="flex justify-center">
                            <MDBBtn
                                color="info"
                                onClick={() => setOpenModal(false)}
                            >
                                Close
                            </MDBBtn>
                            <MDBBtn color="warning" onClick={handleLogout}>
                                Exit
                            </MDBBtn>
                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </>
    )
})

export default Sidenav
