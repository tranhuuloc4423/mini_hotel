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

const FormChangeInfo = ({ openChangeInfo, setOpenChangeInfo }) => {
    const dispatch = useDispatch()
    const handleLogout = () => {
        dispatch(setLogoutUser())
        setOpenChangeInfo(false)
    }
    return (
        <MDBModal
            staticBackdrop
            open={openChangeInfo}
            setOpen={setOpenChangeInfo}
            tabIndex="-1"
        >
            <MDBModalDialog>
                <MDBModalContent>
                    <MDBModalHeader>
                        <MDBBtn
                            className="btn-close"
                            color="none"
                            onClick={() => setOpenChangeInfo(false)}
                        ></MDBBtn>
                    </MDBModalHeader>
                    <MDBModalBody className="p-4 text-center text-2xl">
                        Do you want to logout ?
                    </MDBModalBody>
                    <MDBModalFooter className="flex justify-center">
                        <MDBBtn
                            color="info"
                            onClick={() => setOpenChangeInfo(false)}
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

export default FormChangeInfo
