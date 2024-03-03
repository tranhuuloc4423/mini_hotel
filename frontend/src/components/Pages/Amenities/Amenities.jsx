import {
    MDBInput,
    MDBDropdown,
    MDBDropdownMenu,
    MDBDropdownToggle,
    MDBDropdownItem,
    MDBTable,
    MDBTableHead,
    MDBTableBody
} from 'mdb-react-ui-kit'
import { useEffect, useState } from 'react'
import icons from '../../../utils/icons'
import Button from '../../Common/Button'
import FormAddAmenity from './FormAddAmenity'
import { useDispatch, useSelector } from 'react-redux'
import { getAllEmenities, removeAmenity } from '../../../redux/api/amenities'
import React from 'react'

const { FiPlusSquare, FiEdit, CgRemoveR } = icons

const Amenities = () => {
    const [searchValue, setSearchValue] = useState('')
    const [openModal, setOpenModal] = useState(false)
    const toggleOpen = () => setOpenModal(!openModal)
    const { amenities } = useSelector((state) => state.amenities)
    const dispatch = useDispatch()
    const [formValue, setFormValue] = useState({
        name: '',
        price: '',
        unit: '',
        id: ''
    })
    const [isEdit, setIsEdit] = useState(false)

    useEffect(() => {
        console.log(amenities)
        getAllEmenities(dispatch)
    }, [isEdit])

    const handleRemove = (id) => {
        console.log(id)
        removeAmenity(id, dispatch)
        getAllEmenities(dispatch)
    }

    return (
        <div className="main-container">
            <div className="main-header">
                <div className="flex-center-y gap-2">
                    <MDBInput
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        label="Search"
                        id="search"
                        type="text"
                    />

                    <MDBDropdown group className="shadow-0">
                        <MDBDropdownToggle color="light">
                            Filter
                        </MDBDropdownToggle>
                        <MDBDropdownMenu>
                            <MDBDropdownItem link>Price</MDBDropdownItem>
                            <MDBDropdownItem link>In use</MDBDropdownItem>
                        </MDBDropdownMenu>
                    </MDBDropdown>
                </div>
                <div>
                    <Button
                        color={'success'}
                        text={'Create'}
                        icon={<FiPlusSquare size={20} />}
                        onClick={() => {
                            setOpenModal(true)
                            setFormValue({
                                name: '',
                                price: '',
                                unit: '',
                                id: ''
                            })
                        }}
                    />
                </div>
            </div>
            <div className="main-body">
                <MDBTable bordered align="middle" className="text-center">
                    <MDBTableHead>
                        <tr className="table-primary">
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Unit</th>
                            <th scope="col">Modify</th>
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                        {amenities.map((amenity) => (
                            <React.Fragment key={amenity?.id}>
                                <tr>
                                    <td className="w-1/4">
                                        <p className="fw-normal mb-1">
                                            {amenity?.name}
                                        </p>
                                    </td>
                                    <td className="w-1/4">{amenity?.price}</td>
                                    <td className="w-1/4">{amenity?.unit}</td>
                                    <td className="w-1/4">
                                        <Button
                                            color={'info'}
                                            text="Edit"
                                            icon={<FiEdit size={20} />}
                                            onClick={() => {
                                                setOpenModal(true)
                                                setFormValue({
                                                    name: amenity?.name,
                                                    price: amenity?.price,
                                                    unit: amenity?.unit,
                                                    id: amenity?.id
                                                })
                                                setIsEdit(true)
                                            }}
                                        />
                                        <Button
                                            color={'danger'}
                                            text="Delete"
                                            icon={<CgRemoveR size={20} />}
                                            onClick={() =>
                                                handleRemove(amenity?.id)
                                            }
                                        />
                                    </td>
                                </tr>
                            </React.Fragment>
                        ))}
                    </MDBTableBody>
                </MDBTable>
            </div>
            <FormAddAmenity
                openModal={openModal}
                setOpenModal={setOpenModal}
                formValue={formValue}
                setFormValue={setFormValue}
                isEdit={isEdit}
                setIsEdit={setIsEdit}
            />
        </div>
    )
}

export default Amenities
