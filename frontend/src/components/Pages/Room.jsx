import {
    MDBBtn,
    MDBInput,
    MDBDropdown,
    MDBDropdownMenu,
    MDBDropdownToggle,
    MDBDropdownItem,
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardHeader,
    MDBCardFooter
} from 'mdb-react-ui-kit'
import { useState } from 'react'

const Room = () => {
    const [searchValue, setSearchValue] = useState('')
    return (
        <div className="flex flex-col gap-4 h-full">
            <div className="w-full bg-white rounded-md shadow-sm p-3 flex justify-between">
                <div className="flex items-center gap-2">
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
            <div className="h-full bg-white rounded-md shadow-sm p-3 mb-4 flex flex-wrap">
                <div className="h-fit">
                    <MDBCard border="info" background="white" shadow="0">
                        <MDBCardHeader background="transparent" border="info">
                            Header
                        </MDBCardHeader>
                        <MDBCardBody className="text-info">
                            <MDBCardTitle>info card title</MDBCardTitle>
                            <MDBCardText>content</MDBCardText>
                        </MDBCardBody>
                        <MDBCardFooter background="transparent" border="info">
                            Footer
                        </MDBCardFooter>
                    </MDBCard>
                </div>
            </div>
        </div>
    )
}

export default Room
