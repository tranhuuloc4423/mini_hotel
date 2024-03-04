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
import Button from '../../Common/Button'
import icons from '../../../utils/icons'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createInvoice } from '../../../redux/api/invoice'
import { format } from 'date-fns'
import { setCheckIndexs } from '../../../redux/slices/indexSlice'

const { BsSave } = icons

const FormAddIndex = ({ openModal, setOpenModal, room }) => {
    const { amenities } = useSelector((state) => state.amenities)
    const dispatch = useDispatch()
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
                time: format(new Date(), 'dd/MM/yyyy'),
                room: room,
                customer: activeCustomer
            }
            console.log(data) // call api
            createInvoice(data, dispatch)

            // reset formValue
            setFormValue({
                oldWater: '',
                newWater: '',
                oldElec: '',
                newElec: ''
            })
            setOpenModal(false)
            dispatch(setCheckIndexs(true))
        } else {
            console.log('invalid value!')
        }
    }

    useEffect(() => {
        setActiveCustomer(room?.customer)
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
        const others = finalAmenities.filter((item) => !item?.mandatory)
        setActiveAmenities(others)
    }, [room?.customer, amenities, activeCustomer])

    return (
        <MDBModal
            staticBackdrop
            open={openModal}
            setOpen={setOpenModal}
            tabIndex="-1"
        >
            <MDBModalDialog size="lg" className="bg-white rounded-md">
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
                                <MDBInput
                                    label="Date"
                                    name="time"
                                    value={format(new Date(), 'dd/MM/yyyy')}
                                    disabled
                                    className="select-none"
                                />
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
