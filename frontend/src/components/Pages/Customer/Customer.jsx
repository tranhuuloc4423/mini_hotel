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
import { useState } from 'react'
import FormAddCustomer from './FormAddCustomer'
import icons from '../../../utils/icons'
import Button from '../../Common/Button'

const { FiPlusSquare, FiEdit, CgRemoveR } = icons

const Customer = () => {
    const [searchValue, setSearchValue] = useState('')
    const [openModal, setOpenModal] = useState(false)
    const toggleOpen = () => setOpenModal(!openModal)
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
                <MDBTable align="middle">
                    <MDBTableHead>
                        <tr className="table-primary">
                            <th scope="col">Fullname</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone number</th>
                            <th scope="col">Modify</th>
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                        <tr>
                            <td className="w-1/4">Roku</td>
                            <td className="w-1/4">roku@gmail.com</td>
                            <td className="w-1/4">0123456789</td>
                            <td className="w-1/4">
                                <Button
                                    color={'info'}
                                    text={'edit'}
                                    icon={<FiEdit size={20} />}
                                />
                                <Button
                                    color={'danger'}
                                    text={'delete'}
                                    icon={<CgRemoveR size={20} />}
                                />
                            </td>
                        </tr>
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
