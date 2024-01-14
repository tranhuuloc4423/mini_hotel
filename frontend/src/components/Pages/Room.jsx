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

                    <MDBDropdown>
                        <MDBDropdownToggle color="secondary">Filter</MDBDropdownToggle>
                        <MDBDropdownMenu>
                            <MDBDropdownItem link>Menu item</MDBDropdownItem>
                            <MDBDropdownItem link>Menu item</MDBDropdownItem>
                            <MDBDropdownItem link>Menu item</MDBDropdownItem>
                        </MDBDropdownMenu>
                    </MDBDropdown>
                </div>
                <div className="flex-center-y gap-1">
                    <MDBBtn className="me-1" color="success">
                        Create
                    </MDBBtn>
                    <MDBBtn className="me-1" color="danger">
                        Delete
                    </MDBBtn>
                    <MDBBtn color="info">Edit</MDBBtn>
                </div>
            </div>
            <div className="main-body flex flex-wrap">
                <div className="h-fit">
                    <MDBCard border="info" background="white" shadow="0">
                        <MDBCardHeader background="transparent" border="info">
                            Room name / room id
                        </MDBCardHeader>
                        <MDBCardBody className="text-info">
                            <MDBCardTitle>info card title</MDBCardTitle>
                            <MDBCardText>Price: 4444</MDBCardText>
                            <MDBCardText>capacity: 4</MDBCardText>
                            <MDBCardText>content</MDBCardText>
                        </MDBCardBody>
                        <MDBCardFooter background="transparent" border="info" className="grid grid-cols-2 gap-2">
                            <MDBBtn color="success">View</MDBBtn>
                            <MDBBtn color="info">Add Customer</MDBBtn>
                            <MDBBtn color="danger">Delete</MDBBtn>
                            <MDBBtn color="warning">Edit</MDBBtn>
                        </MDBCardFooter>
                    </MDBCard>
                </div>
            </div>
        </div>
    )
}

export default Room
