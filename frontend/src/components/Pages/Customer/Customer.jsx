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
import React, { useEffect, useState } from 'react'
import FormAddCustomer from './FormAddCustomer'
import icons from '../../../utils/icons'
import Button from '../../Common/Button'
import { getAllCustomers, removeCustomer } from '../../../redux/api/customer'
import { useDispatch, useSelector } from 'react-redux'

const { FiPlusSquare, FiEdit, CgRemoveR } = icons

const Customer = () => {
    const [searchValue, setSearchValue] = useState('')
    const [openModal, setOpenModal] = useState(false)
    const toggleOpen = () => setOpenModal(!openModal)
    const { customers } = useSelector((state) => state.customer)
    const dispatch = useDispatch()

    const handleRemove = (id) => {
        dispatch(removeCustomer(id, dispatch))
    }

    useEffect(() => {
        getAllCustomers(dispatch)
    }, [dispatch])

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
                            <MDBDropdownItem link>Type</MDBDropdownItem>
                            <MDBDropdownItem link>Price</MDBDropdownItem>
                            <MDBDropdownItem link>In use</MDBDropdownItem>
                        </MDBDropdownMenu>
                    </MDBDropdown>
                </div>
                <Button
                    color={'success'}
                    text={'create'}
                    icon={<FiPlusSquare size={20} />}
                    onClick={toggleOpen}
                />
            </div>
            <div className="main-body">
                <MDBTable bordered align="middle" className="text-center">
                    <MDBTableHead>
                        <tr className="table-primary">
                            <th scope="col">Fullname</th>
                            <th scope="col">ID Card</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone number</th>
                            <th scope="col">Modify</th>
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                        {customers?.map((customer, index) => (
                            <React.Fragment key={index}>
                                <tr>
                                    <td className="w-1/5">
                                        {customer?.fullname}
                                    </td>
                                    <td className="w-1/5">
                                        {customer?.idcard}
                                    </td>
                                    <td className="w-1/5">{customer?.email}</td>
                                    <td className="w-1/5">
                                        {customer?.phonenumber}
                                    </td>
                                    <td className="w-1/5">
                                        <Button
                                            color={'info'}
                                            text={'edit'}
                                            icon={<FiEdit size={20} />}
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
                    </MDBTableBody>
                </MDBTable>
            </div>
            <FormAddCustomer
                openModal={openModal}
                setOpenModal={setOpenModal}
            />
        </div>
    )
}

export default Customer
