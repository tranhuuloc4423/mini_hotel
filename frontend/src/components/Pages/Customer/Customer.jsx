import { MDBInput } from 'mdb-react-ui-kit'
import React, { useEffect, useState } from 'react'
import FormAddCustomer from './FormAddCustomer'
import icons from '../../../utils/icons'
import Button from '../../Common/Button'
import { getAllCustomers, removeCustomer } from '../../../redux/api/customer'
import {
    sortByFullName,
    sortByIDCard,
    sortByEmail,
    sortByPhone,
    setSortByFullName,
    setSortByIDCard,
    setSortByEmail,
    setSortByPhone,
    setSearch,
    filter,
    setEditId
} from '../../../redux/slices/customerSlice'
import { useDispatch, useSelector } from 'react-redux'
import Table from '../../Common/Table'

const { FiPlusSquare, FiEdit, CgRemoveR } = icons

const Customer = () => {
    const [openModal, setOpenModal] = useState(false)
    const {
        customers,
        fullnameSort,
        idcardSort,
        emailSort,
        phoneSort,
        search
    } = useSelector((state) => state.customer)
    const dispatch = useDispatch()

    const headers = [
        {
            name: 'Fullname',
            sort: fullnameSort,
            onClick: () => {
                dispatch(setSortByFullName())
                dispatch(sortByFullName(fullnameSort))
            }
        },
        {
            name: 'ID Card',
            sort: idcardSort,
            onClick: () => {
                dispatch(setSortByIDCard())
                dispatch(sortByIDCard(idcardSort))
            }
        },
        {
            name: 'Email',
            sort: emailSort,
            onClick: () => {
                dispatch(setSortByEmail())
                dispatch(sortByEmail(emailSort))
            }
        },
        {
            name: 'Phone Number',
            sort: phoneSort,
            onClick: () => {
                dispatch(setSortByPhone())
                dispatch(sortByPhone(phoneSort))
            }
        },
        {
            name: 'Modify'
        }
    ]

    const handleRemove = (id) => {
        dispatch(removeCustomer(id, dispatch))
    }

    const handleEdit = (id) => {
        dispatch(setEditId(id))
        setOpenModal(true)
    }

    useEffect(() => {
        dispatch(setSearch(''))
        getAllCustomers(dispatch)
    }, [dispatch])

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
                                getAllCustomers(dispatch)
                            } else {
                                dispatch(filter())
                            }
                        }}
                        label="Search"
                        id="search"
                        type="text"
                    />
                </div>
                <Button
                    color={'success'}
                    text={'create'}
                    icon={<FiPlusSquare size={20} />}
                    onClick={() => setOpenModal(true)}
                />
            </div>
            <div className="main-body">
                <Table
                    headers={headers}
                    body={customers?.map((customer, index) => (
                        <React.Fragment key={index}>
                            <tr>
                                <td className="w-1/5">{customer?.fullname}</td>
                                <td className="w-1/5">{customer?.idcard}</td>
                                <td className="w-1/5">{customer?.email}</td>
                                <td className="w-1/5">
                                    {customer?.phonenumber}
                                </td>
                                <td className="w-1/5">
                                    <Button
                                        color={'info'}
                                        text={'edit'}
                                        icon={<FiEdit size={20} />}
                                        onClick={() => {
                                            handleEdit(customer?.id)
                                        }}
                                    />
                                    <Button
                                        color={'danger'}
                                        text={'delete'}
                                        icon={<CgRemoveR size={20} />}
                                        onClick={() =>
                                            handleRemove(customer?.id)
                                        }
                                    />
                                </td>
                            </tr>
                        </React.Fragment>
                    ))}
                />
            </div>
            <FormAddCustomer
                openModal={openModal}
                setOpenModal={setOpenModal}
            />
        </div>
    )
}

export default Customer
