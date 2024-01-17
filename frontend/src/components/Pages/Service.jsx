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
import icons from '../../utils/icons'
import Button from '../Button'
import FormAddService from '../FormAddService'

const { FiPlusSquare, FiEdit, CgRemoveR } = icons

const Service = () => {
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
                        <MDBDropdownToggle color="light">Filter</MDBDropdownToggle>
                        <MDBDropdownMenu>
                            <MDBDropdownItem link>Type</MDBDropdownItem>
                            <MDBDropdownItem link>Price</MDBDropdownItem>
                            <MDBDropdownItem link>In use</MDBDropdownItem>
                        </MDBDropdownMenu>
                    </MDBDropdown>
                </div>
                <div>
                    <Button color={'success'} text={'Create'} icon={<FiPlusSquare size={20} />} onClick={toggleOpen} />
                </div>
            </div>
            <div className="main-body">
                <MDBTable align="middle">
                    <MDBTableHead>
                        <tr className="table-primary">
                            <th scope="col">Name</th>
                            <th scope="col">Type</th>
                            <th scope="col">Price</th>
                            <th scope="col">In use</th>
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                        <tr>
                            <td>
                                <p className="fw-normal mb-1">Software engineer</p>
                            </td>
                            <td>type</td>
                            <td>Price</td>
                            <td>
                                <Button color={'info'} text="Edit" icon={<FiEdit size={20} />} />
                                <Button color={'danger'} text="Delete" icon={<CgRemoveR size={20} />} />
                            </td>
                        </tr>
                    </MDBTableBody>
                </MDBTable>
            </div>
            <FormAddService openModal={openModal} setOpenModal={setOpenModal} />
        </div>
    )
}

export default Service
