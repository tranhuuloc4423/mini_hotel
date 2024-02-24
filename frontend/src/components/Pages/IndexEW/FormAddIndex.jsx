import {
    MDBBtn,
    MDBInput,
    MDBModal,
    MDBModalBody,
    MDBModalContent,
    MDBModalDialog,
    MDBModalHeader,
    MDBModalTitle
} from 'mdb-react-ui-kit'
import DatePicker from '../../Common/DatePicker'
import Button from '../../Common/Button'
import icons from '../../../utils/icons'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const { BsSave } = icons

const FormAddIndex = ({ openModal, setOpenModal, customerId }) => {
    const { customers } = useSelector((state) => state.customer)
    const { amenities } = useSelector((state) => state.amenities)
    const [activeCustomer, setActiveCustomer] = useState()
    const [activeAmenities, setActiveAmenities] = useState()
    const [formValue, setFormValue] = useState({
        oldwater: '',
        newwater: '',
        oldelec: '',
        newelec: ''
    })
    const [date, setDate] = useState()

    const onChange = (e) => {
        setFormValue({ ...formValue, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    useEffect(() => {
        setActiveCustomer(customers.find((item, _) => item.id === customerId))

        setActiveAmenities(
            amenities
                .filter((amenity, index) =>
                    activeCustomer?.amenities?.find(
                        (item, _) => amenity?.id === item
                    )
                )
                .filter((amenityItem, _) => !amenityItem.mandatory)
        )
        console.log(activeAmenities)
    }, [customerId])

    return (
        <MDBModal
            staticBackdrop
            open={openModal}
            setOpen={setOpenModal}
            tabIndex="-1"
        >
            <MDBModalDialog size="xl" className="bg-white rounded-md">
                <MDBModalContent>
                    <MDBModalHeader>
                        <MDBModalTitle className="text-2xl w-full text-center">
                            Form Index Input
                        </MDBModalTitle>
                        <MDBBtn
                            className="btn-close"
                            color="none"
                            onClick={() => setOpenModal(false)}
                        ></MDBBtn>
                    </MDBModalHeader>
                    <MDBModalBody className="p-4">
                        <form onSubmit={handleSubmit}>
                            <div className="border-2 border-black_1 flex-1 p-4 flex flex-col gap-3">
                                <div className="flex gap-4">
                                    <MDBInput
                                        label="Old Water Index"
                                        name="oldwater"
                                        value={formValue.oldwater}
                                        onChange={onChange}
                                        type="number"
                                    />
                                    <MDBInput
                                        label="New Water Index"
                                        name="newwater"
                                        value={formValue.newwater}
                                        onChange={onChange}
                                        type="number"
                                    />
                                </div>
                                <div className="flex gap-4">
                                    <MDBInput
                                        label="Old Elec Index"
                                        name="oldelec"
                                        value={formValue.oldelec}
                                        onChange={onChange}
                                        type="number"
                                    />
                                    <MDBInput
                                        label="New Elec Index"
                                        name="newelec"
                                        value={formValue.newelec}
                                        onChange={onChange}
                                        type="number"
                                    />
                                </div>

                                <DatePicker
                                    label={'Date'}
                                    value={date}
                                    setValue={setDate}
                                />
                                {activeAmenities?.map((input, _) => (
                                    <MDBInput
                                        key={input}
                                        label={input?.name}
                                        type="text"
                                        name={input?.name}
                                        value={formValue.idcard}
                                        onChange={onChange}
                                    />
                                ))}
                            </div>
                            <div className="w-full flex justify-center items-center mt-4">
                                <Button
                                    color={'info'}
                                    text={'Save'}
                                    icon={<BsSave size={20} />}
                                    onClick={handleSubmit}
                                    end
                                />
                            </div>
                        </form>
                    </MDBModalBody>
                </MDBModalContent>
            </MDBModalDialog>
        </MDBModal>
    )
}

export default FormAddIndex
