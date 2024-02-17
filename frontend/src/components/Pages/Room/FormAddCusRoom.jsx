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
import { useSelector } from 'react-redux'
import Button from '../../Common/Button'
import icons from '../../../utils/icons'

const { BsSave } = icons
const FormAddCusRoom = ({ formCustomer, setFormCustomer }) => {
    const { modalCustomer } = useSelector((state) => state.room)
    const { customers } = useSelector((state) => state.customer)
    const [selectedCustomer, setSelectedCustomer] = useState()

    const handleSubmit = () => {
        console.log(selectedCustomer)
    }
    return (
        <MDBModal open={formCustomer} setOpen={setFormCustomer} tabIndex="-1">
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
                                                onChange={(e) =>
                                                    setSelectedCustomer(
                                                        e.target.value
                                                    )
                                                }
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
