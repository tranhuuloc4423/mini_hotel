import {
    MDBCheckbox,
    MDBTable,
    MDBTableBody,
    MDBTableHead
} from 'mdb-react-ui-kit'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllEmenities } from '../../../redux/api/amenities'
import Button from '../../Common/Button'
import icons from '../../../utils/icons'

const { IoIosArrowBack, IoIosArrowForward } = icons

const StepTwo = ({ setStep }) => {
    const [amenitiesChecked, setAmenitiesChecked] = useState([])
    const handleAmenitiesChecked = (item) => {
        if (amenitiesChecked.includes(item)) {
            setAmenitiesChecked(
                amenitiesChecked.filter((selected) => selected !== item)
            )
        } else {
            setAmenitiesChecked([...amenitiesChecked, item])
        }
    }
    const { amenities } = useSelector((state) => state.amenities)
    const dispatch = useDispatch()
    useEffect(() => {
        getAllEmenities(dispatch)
    }, [dispatch])
    useEffect(() => {
        console.log(amenitiesChecked)
    }, [amenitiesChecked])
    return (
        <form>
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
                                        checked={amenitiesChecked.includes(
                                            item?.amenityId
                                        )}
                                        onChange={() =>
                                            handleAmenitiesChecked(
                                                item?.amenityId
                                            )
                                        }
                                    />
                                </td>
                            </tr>
                        </React.Fragment>
                    ))}
                </MDBTableBody>
            </MDBTable>
            <div className="w-full flex justify-center items-center mt-4">
                <Button
                    color={'info'}
                    text={'previous'}
                    icon={<IoIosArrowBack size={20} />}
                    onClick={() => setStep(1)}
                />
                <Button
                    color={'info'}
                    text={'next'}
                    icon={<IoIosArrowForward size={20} />}
                    onClick={() => setStep(3)}
                    end
                />
            </div>
        </form>
    )
}

export default StepTwo
