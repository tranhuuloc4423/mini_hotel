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
import {
    setSortByName,
    setSortByPrice,
    setSortByUnit,
    sortByName,
    sortByPrice,
    sortByUnit
} from '../../../redux/slices/amenitiesSlice'
import { RiArrowDownSLine } from 'react-icons/ri'
import Table from '../../Common/Table'

const { FiPlusSquare, FiEdit, CgRemoveR } = icons

const Amenities = () => {
    const [searchValue, setSearchValue] = useState('')
    const [openModal, setOpenModal] = useState(false)
    const toggleOpen = () => setOpenModal(!openModal)
    const { amenities, nameSort, priceSort, unitSort } = useSelector(
        (state) => state.amenities
    )
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
    }, [isEdit, dispatch])

    const handleRemove = (id) => {
        console.log(id)
        removeAmenity(id, dispatch)
        getAllEmenities(dispatch)
    }
    const headers = [
        {
            name: 'Name',
            sort: nameSort,
            onClick: () => {
                dispatch(setSortByName())
                dispatch(sortByName(nameSort))
            }
        },
        {
            name: 'Price',
            sort: priceSort,
            onClick: () => {
                dispatch(setSortByPrice())
                dispatch(sortByPrice(priceSort))
            }
        },
        {
            name: 'Unit',
            sort: unitSort,
            onClick: () => {
                dispatch(setSortByUnit())
                dispatch(sortByUnit(unitSort))
            }
        },
        {
            name: 'Modify',
            onClick: () => {}
        }
    ]

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
                <Table
                    headers={headers}
                    body={amenities.map((amenity) => (
                        <tr key={amenity?.id}>
                            <td className="w-1/4">{amenity?.name}</td>
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
                                    onClick={() => handleRemove(amenity?.id)}
                                />
                            </td>
                        </tr>
                    ))}
                />
                {/* <MDBTable bordered align="middle" className="text-center">
                    <MDBTableHead className="select-none cursor-pointer">
                        <tr className="table-primary">
                            <th
                                scope="col"
                                className="relative"
                                onClick={() => {
                                    dispatch(setSortByName())
                                    dispatch(sortByName(nameSort))
                                }}
                            >
                                <span>Name</span>
                                <span
                                    className={`inline-block absolute right-2 ${
                                        nameSort ? 'rotate-180' : ''
                                    }`}
                                >
                                    <RiArrowDownSLine size={24} />
                                </span>
                            </th>
                            <th scope="col">Price</th>
                            <th scope="col">Unit</th>
                            <th scope="col">Modify</th>
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                        {amenities.map((amenity) => (
                            <tr key={amenity?.id}>
                                <td className="w-1/4">{amenity?.name}</td>
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
                        ))}
                    </MDBTableBody>
                </MDBTable> */}
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
