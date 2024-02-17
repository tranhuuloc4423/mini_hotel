import {
    MDBCheckbox,
    MDBTable,
    MDBTableBody,
    MDBTableHead
} from 'mdb-react-ui-kit'
import React from 'react'
import { useSelector } from 'react-redux'

const FormAddCusRoom = () => {
    const { modalCustomer } = useSelector((state) => state.room)

    return (
        modalCustomer && (
            <MDBTable align="middle" className="text-center">
                <MDBTableHead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Unit</th>
                        <th scope="col">Check</th>
                    </tr>
                </MDBTableHead>
                <MDBTableBody>
                    {amenities?.map((item) => (
                        <React.Fragment key={item?.amenityId}>
                            <tr>
                                <td>
                                    <p className="">{item?.name}</p>
                                </td>
                                <td>
                                    <p className="">{item?.price}</p>
                                </td>
                                <td>
                                    <p className="">{item?.unit}</p>
                                </td>
                                <td className="flex justify-center">
                                    <MDBCheckbox
                                        name="use"
                                        label="use"
                                        checked={amenitiesChecked.includes(
                                            item?.id
                                        )}
                                        onChange={() =>
                                            handleAmenitiesChecked(item?.id)
                                        }
                                    />
                                </td>
                            </tr>
                        </React.Fragment>
                    ))}
                </MDBTableBody>
            </MDBTable>
        )
    )
}

export default FormAddCusRoom
