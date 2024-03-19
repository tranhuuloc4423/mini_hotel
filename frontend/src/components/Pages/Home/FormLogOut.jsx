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
import { setLogoutUser } from '../../../redux/slices/appSlice'
import { useNavigate } from 'react-router'

const FormLogOut = ({ openLogOut, setOpenLogOut }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleLogout = () => {
        dispatch(setLogoutUser())
        setOpenModal(false)
        navigate('/login')
    }
    return (
        <MDBModal
            staticBackdrop
            open={openLogOut}
            setOpen={setOpenLogOut}
            tabIndex="-1"
        >
            <MDBModalDialog>
                <MDBModalContent>
                    <MDBModalHeader>
                        <MDBBtn
                            className="btn-close"
                            color="none"
                            onClick={() => setOpenLogOut(false)}
                        ></MDBBtn>
                    </MDBModalHeader>
                    <MDBModalBody className="p-4 text-center text-2xl">
                        Do you want to logout ?
                    </MDBModalBody>
                    <MDBModalFooter className="flex justify-center">
                        <MDBBtn
                            color="info"
                            onClick={() => setOpenLogOut(false)}
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
    )
}

export default FormLogOut
