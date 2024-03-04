import { MDBInput } from 'mdb-react-ui-kit'
import { useEffect, useState } from 'react'
import icons from '../../../utils/icons'
import Button from '../../Common/Button'
import FormAddAmenity from './FormAddAmenity'
import { useDispatch, useSelector } from 'react-redux'
import { getAllEmenities, removeAmenity } from '../../../redux/api/amenities'
import {
    setSortByName,
    setSortByPrice,
    setSortByUnit,
    sortByName,
    sortByPrice,
    sortByUnit,
    setSearch,
    filter
} from '../../../redux/slices/amenitiesSlice'
import Table from '../../Common/Table'

const { FiPlusSquare, FiEdit, CgRemoveR } = icons

const Amenities = () => {
    const [openModal, setOpenModal] = useState(false)
    const { amenities, nameSort, priceSort, unitSort, search } = useSelector(
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
        dispatch(setSearch(''))
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
                        value={search}
                        onChange={(e) => {
                            const inputValue = e.target.value
                            dispatch(setSearch(inputValue))
                            if (inputValue === '' || inputValue === null) {
                                getAllEmenities(dispatch)
                            } else {
                                dispatch(filter())
                            }
                        }}
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
