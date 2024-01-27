import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBInput,
    MDBFile
} from 'mdb-react-ui-kit'
import icons from '../../../utils/icons'
import Button from '../../Common/Button'
import { createRoom, updateRoom } from '../../../redux/api/room'
import { useDispatch } from 'react-redux'
import DropImageInput from '../../Common/DropImageInput'

const { BsSave } = icons

const FormAddRoom = ({
    openModal,
    setOpenModal,
    formValue,
    setFormValue,
    isEdit,
    setIsEdit
}) => {
    const toggleOpen = () => setOpenModal(!openModal)
    const dispatch = useDispatch()

    const onChange = (e) => {
        setFormValue({ ...formValue, [e.target.name]: e.target.value })
    }

    const handleCreateRoom = (e) => {
        e.preventDefault()
        if (!isEdit) {
            const newRoom = { ...formValue }
            delete newRoom.roomId
            console.log(newRoom)
            createRoom(newRoom, dispatch)
        } else {
            const newRoom = { ...formValue }
            updateRoom(newRoom, dispatch)
            console.log()
        }
        setIsEdit(false)
        setOpenModal(false)
    }

    return (
        <MDBModal open={openModal} setOpen={setOpenModal} tabIndex="-1">
            <MDBModalDialog size="xl">
                <MDBModalContent>
                    <MDBModalHeader>
                        <MDBModalTitle className="text-2xl">
                            Add Room
                        </MDBModalTitle>
                        <MDBBtn
                            className="btn-close"
                            color="none"
                            onClick={toggleOpen}
                        ></MDBBtn>
                    </MDBModalHeader>
                    <MDBModalBody className="p-4">
                        <form
                            className="border-2 border-black_1 p-4 flex flex-col gap-3"
                            onSubmit={handleCreateRoom}
                        >
                            <MDBInput
                                label="Name"
                                type="text"
                                value={formValue.roomName}
                                name="roomName"
                                onChange={onChange}
                            />
                            <MDBInput
                                label="Price"
                                type="text"
                                value={formValue.price}
                                name="price"
                                onChange={onChange}
                            />
                            <MDBInput
                                label="Capacity"
                                type="text"
                                value={formValue.capacity}
                                name="capacity"
                                onChange={onChange}
                            />
                            <DropImageInput />
                            <Button
                                color={'info'}
                                text={'save'}
                                icon={<BsSave size={20} />}
                            />
                        </form>
                    </MDBModalBody>
                </MDBModalContent>
            </MDBModalDialog>
        </MDBModal>
    )
}

export default FormAddRoom
