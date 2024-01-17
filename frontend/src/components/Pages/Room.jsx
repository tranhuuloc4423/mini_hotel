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
import icons from '../../utils/icons'
import FormAddRoom from '../FormAddRoom'

const { IoAddCircleOutline } = icons
const Room = () => {
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

                    <MDBDropdown>
                        <MDBDropdownToggle color="secondary">Filter</MDBDropdownToggle>
                        <MDBDropdownMenu>
                            <MDBDropdownItem link>Menu item</MDBDropdownItem>
                            <MDBDropdownItem link>Menu item</MDBDropdownItem>
                            <MDBDropdownItem link>Menu item</MDBDropdownItem>
                        </MDBDropdownMenu>
                    </MDBDropdown>
                </div>
                <MDBBtn className="me-1" color="success" onClick={toggleOpen}>
                    <div className="flex-center-y gap-1">
                        <IoAddCircleOutline size={20} />
                        Create
                    </div>
                </MDBBtn>
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
            <FormAddRoom openModal={openModal} setOpenModal={setOpenModal} />
        </div>
    )
}

export default Room
