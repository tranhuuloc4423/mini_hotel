import {
    MDBBadge,
    MDBCheckbox,
    MDBTable,
    MDBTableBody,
    MDBTableHead
} from 'mdb-react-ui-kit'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllEmenities } from '../../../redux/api/amenities'

const StepTwo = () => {
    const { amenities } = useSelector((state) => state.amenities)
    const dispatch = useDispatch()
    useEffect(() => {
        getAllEmenities(dispatch)
    }, [dispatch])
    return (
        <div>
            <div className="text-lg font-semibold pb-4">
                Step 2: {'Service'}
            </div>
            <MDBTable align="middle" className="text-center">
                <MDBTableHead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
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
                                    <p className="">{item?.calUnit}</p>
                                </td>
                                <td className="flex justify-center">
                                    <MDBCheckbox
                                        name="use"
                                        label="use"
                                        defaultChecked
                                    />
                                </td>
                            </tr>
                        </React.Fragment>
                    ))}
                </MDBTableBody>
            </MDBTable>
        </div>
    )
}

export default StepTwo
