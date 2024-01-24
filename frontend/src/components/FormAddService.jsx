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
import { createAmenity } from '../redux/api/amenities'
import { useDispatch } from 'react-redux'

const { BsSave } = icons

const FormAddService = ({
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

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!isEdit) {
            const newAmenity = { ...formValue }
            createAmenity(newAmenity, dispatch)
            formValue.name = ''
            formValue.price = ''
            formValue.calUnit = ''
        }
        // edit
        setOpenModal(false)
    }

    return (
        <MDBModal open={openModal} setOpen={setOpenModal} tabIndex="-1">
            <MDBModalDialog size="xl">
                <MDBModalContent>
                    <MDBModalHeader>
                        <MDBModalTitle className="text-2xl">
                            Add Amenity
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
                            onSubmit={handleSubmit}
                        >
                            <MDBInput
                                label="Name"
                                type="text"
                                value={formValue.name}
                                name="name"
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
                                label="Unit"
                                type="text"
                                value={formValue.calUnit}
                                name="calUnit"
                                onChange={onChange}
                            />
                            <Button
                                color={'info'}
                                text={'Save'}
                                icon={<BsSave size={20} />}
                            />
                        </form>
                    </MDBModalBody>
                </MDBModalContent>
            </MDBModalDialog>
        </MDBModal>
    )
}

export default FormAddService
