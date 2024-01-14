import {
    MDBBtn,
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

const Customer = () => {
    const [searchValue, setSearchValue] = useState('')

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
                            <MDBDropdownItem link>Action</MDBDropdownItem>
                            <MDBDropdownItem link>Another action</MDBDropdownItem>
                            <MDBDropdownItem link>Something else here</MDBDropdownItem>
                        </MDBDropdownMenu>
                    </MDBDropdown>
                </div>
                <div>
                    <MDBBtn className="me-1" color="success">
                        Create
                    </MDBBtn>
                    <MDBBtn className="me-1" color="danger">
                        Delete
                    </MDBBtn>
                    <MDBBtn color="info">Edit</MDBBtn>
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
                                <MDBBtn className="me-1" color="info">
                                    edit
                                </MDBBtn>
                                <MDBBtn className="me-1" color="danger">
                                    delete
                                </MDBBtn>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p className="fw-normal mb-1">Software engineer</p>
                            </td>
                            <td>type</td>
                            <td>Price</td>
                            <td>
                                <MDBBtn className="me-1" color="info">
                                    edit
                                </MDBBtn>
                                <MDBBtn className="me-1" color="danger">
                                    delete
                                </MDBBtn>
                            </td>
                        </tr>
                    </MDBTableBody>
                </MDBTable>
            </div>
        </div>
    )
}

export default Customer
