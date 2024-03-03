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

const FormAddIndex = ({ openModal, setOpenModal, room }) => {
    const { customers } = useSelector((state) => state.customer)
    const { amenities } = useSelector((state) => state.amenities)
    // const { activeAmenities } = useSelector((state) => state.index)
    const [activeCustomer, setActiveCustomer] = useState()
    const [activeAmenities, setActiveAmenities] = useState()

    const [formValue, setFormValue] = useState({
        oldWater: '',
        newWater: '',
        oldElec: '',
        newElec: ''
    })

    const onChange = (e) => {
        setFormValue({ ...formValue, [e.target.name]: e.target.value })
    }

    const [date, setDate] = useState()
    const handleSubmit = (e) => {
        e.preventDefault()
        const { oldWater, newWater, oldElec, newElec, ...others } = formValue
        const checkWater = Number(oldWater) <= Number(newWater)
        const checkElec = Number(oldElec) <= Number(newElec)
        const otherAmenities = []

        Object.entries(others).forEach(([key, value]) => {
            otherAmenities.push({
                name: key,
                quantity: value
            })
        })
        if (checkWater && checkElec) {
            const data = {
                water: {
                    old: oldWater,
                    new: newWater
                },
                electricity: {
                    old: oldElec,
                    new: newElec
                },
                others: otherAmenities,
                date: date,
                room: {
                    name: room?.roomname,
                    price: room?.price
                },
                customer: activeCustomer.fullname
            }
            console.log(data) // call api

            // reset formValue
            setFormValue({
                oldWater: '',
                newWater: '',
                oldElec: '',
                newElec: ''
            })
            setDate('')
            setOpenModal(false)
        } else {
            console.log('invalid value!')
        }
    }

    useEffect(() => {
        setActiveCustomer(
            customers.find((item, _) => item.id === room?.customer)
        )
    }, [room?.customer])

    useEffect(() => {
        const finalAmenities = []

        activeCustomer?.amenities?.forEach((amenity) => {
            const matchedAmenity = amenities?.find(
                (item) => item.id === amenity
            )
            if (matchedAmenity) {
                finalAmenities.push(matchedAmenity)
            }
        })
        const others = finalAmenities.filter((item, _) => !item?.mandatory)
        setActiveAmenities(others)
    }, [room?.customer, amenities, activeCustomer])

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
                                        name="oldWater"
                                        value={formValue.oldWater}
                                        onChange={onChange}
                                        type="number"
                                    />
                                    <MDBInput
                                        label="New Water Index"
                                        name="newWater"
                                        value={formValue.newWater}
                                        onChange={onChange}
                                        type="number"
                                    />
                                </div>
                                <div className="flex gap-4">
                                    <MDBInput
                                        label="Old Elec Index"
                                        name="oldElec"
                                        value={formValue.oldElec}
                                        onChange={onChange}
                                        type="number"
                                    />
                                    <MDBInput
                                        label="New Elec Index"
                                        name="newElec"
                                        value={formValue.newElec}
                                        onChange={onChange}
                                        type="number"
                                    />
                                </div>

                                <DatePicker
                                    label={'Date'}
                                    value={date}
                                    setValue={setDate}
                                />
                                {activeAmenities?.map((input, index) => (
                                    <MDBInput
                                        key={index}
                                        label={input?.name}
                                        type="number"
                                        name={input?.name}
                                        value={formValue?.input?.name}
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
