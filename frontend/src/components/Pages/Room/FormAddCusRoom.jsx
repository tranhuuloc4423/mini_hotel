import {
    MDBModal,
    MDBModalBody,
    MDBModalContent,
    MDBModalDialog,
    MDBModalFooter,
    MDBModalHeader,
    MDBRadio,
    MDBTable,
    MDBTableBody,
    MDBTableHead
} from 'mdb-react-ui-kit'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../../Common/Button'
import icons from '../../../utils/icons'
import { addCustomerRoom } from '../../../redux/api/room'
import { toast } from 'react-toastify'

const { BsSave } = icons
const FormAddCusRoom = ({ formCustomer, setFormCustomer, id }) => {
    const { modalCustomer } = useSelector((state) => state.room)
    const { customers } = useSelector((state) => state.customer)
    const { rooms } = useSelector((state) => state.room)
    const [selectedCustomer, setSelectedCustomer] = useState()
    const dispatch = useDispatch()

    const handleSubmit = () => {
        setFormCustomer(false)
        // addCustomerRoom()

        const activeRoom = rooms.find((item) => item.id === id)
        const checkCapacity =
            selectedCustomer.members.length + 1 <= activeRoom.capacity
        if (checkCapacity) {
            const data = { customer: selectedCustomer, id: id }
            addCustomerRoom(data, dispatch)
        } else {
            toast.error('Not enough capacity!')
        }
    }
    return (
        <MDBModal
            staticBackdrop
            open={formCustomer}
            setOpen={setFormCustomer}
            tabIndex="-1"
        >
            <MDBModalDialog size="xl">
                <MDBModalContent>
                    <MDBModalHeader className="mx-auto text-xl font-bold">
                        Select Customer
                    </MDBModalHeader>
                    <MDBModalBody>
                        <MDBTable align="middle" className="text-center">
                            <MDBTableHead>
                                <tr className="table-primary">
                                    <th scope="col">FullName</th>
                                    <th scope="col">ID Card</th>
                                    <th scope="col">Phone Number</th>
                                    <th scope="col">Select</th>
                                </tr>
                            </MDBTableHead>
                            <MDBTableBody>
                                {customers?.map((item, index) => (
                                    <tr key={index}>
                                        <td>
                                            <p className="">{item?.fullname}</p>
                                        </td>
                                        <td>
                                            <p className="">{item?.idcard}</p>
                                        </td>
                                        <td>
                                            <p className="">
                                                {item?.phonenumber}
                                            </p>
                                        </td>
                                        <td className="flex justify-center">
                                            <MDBRadio
                                                name="customer"
                                                value={item?.id}
                                                onChange={(e) => {
                                                    setSelectedCustomer(item)
                                                }}
                                            />
                                        </td>
                                    </tr>
                                ))}
                            </MDBTableBody>
                        </MDBTable>
                    </MDBModalBody>
                    <MDBModalFooter className="mx-auto">
                        <Button
                            color={'info'}
                            text={'save'}
                            icon={<BsSave size={20} />}
                            onClick={() => {
                                handleSubmit()
                            }}
                        />
                    </MDBModalFooter>
                </MDBModalContent>
            </MDBModalDialog>
        </MDBModal>
    )
}

export default FormAddCusRoom
