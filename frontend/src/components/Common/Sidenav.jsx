import Logo from './Logo'
import Navbar from './Navbar'
import icons from '../../utils/icons'
import { useState } from 'react'
import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalBody,
    MDBModalFooter
} from 'mdb-react-ui-kit'
import { useDispatch } from 'react-redux'
import { setLogoutUser } from '../../redux/slices/appSlice'
import { useNavigate } from 'react-router'

const { IoIosArrowBack } = icons

const { TbLogout2, MdOutlineLightMode } = icons
const Sidenav = () => {
    const [openModal, setOpenModal] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleLogout = () => {
        dispatch(setLogoutUser())
        setOpenModal(false)
        navigate('/login')
    }

    return (
        <>
            <div className="bg-[#242526] h-screen select-none relative z-10 w-[15%] py-[10px] flex flex-col justify-between">
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
                        <div className="px-2">
                            <TbLogout2 size={22} />
                        </div>
                        Logout
                    </div>
                    <div className="sidenav-item bg-[#3a3b3c]">
                        <div className="px-2">
                            <MdOutlineLightMode size={22} />
                        </div>
                        Settings
                    </div>
                </div>

                <div className="absolute w-8 h-8 bg-[#3a3b3c] right-[-16px] rounded-full flex-center">
                    <IoIosArrowBack
                        size={20}
                        color="white"
                        className="cursor-pointer"
                    />
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
}

export default Sidenav
