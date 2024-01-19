import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
    MDBInput
} from 'mdb-react-ui-kit'
import icons from '../utils/icons'
import Button from './Button'

const { BsSave } = icons

const FormAddRoom = ({ openModal, setOpenModal }) => {
    const toggleOpen = () => setOpenModal(!openModal)

    return (
        <MDBModal open={openModal} setOpen={setOpenModal} tabIndex="-1">
            <MDBModalDialog size="xl">
                <MDBModalContent>
                    <MDBModalHeader>
                        <MDBModalTitle className="text-2xl">Add Room</MDBModalTitle>
                        <MDBBtn className="btn-close" color="none" onClick={toggleOpen}></MDBBtn>
                    </MDBModalHeader>
                    <MDBModalBody className="p-4">
                        <div className="border-2 border-black_1 p-4 flex flex-col gap-3">
                            <MDBInput label="Name" id="form1" type="text" />
                            <MDBInput label="Price" id="form1" type="text" />
                            <MDBInput label="Capacity" id="form1" type="text" />
                            <MDBInput label="Type" id="form1" type="text" />
                            <MDBInput label="Is Occupied" placeholder="False" id="form1" type="text" readonly />
                        </div>
                    </MDBModalBody>

                    <MDBModalFooter>
                        <Button color={'info'} text={'save'} icon={<BsSave size={20} />} />
                    </MDBModalFooter>
                </MDBModalContent>
            </MDBModalDialog>
        </MDBModal>
    )
}

export default FormAddRoom
