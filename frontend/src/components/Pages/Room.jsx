import {
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
import Button from '../Button'

const { FiPlusSquare, TbInfoSquare, FiEdit, CgRemoveR } = icons
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
                <Button color={'success'} text={'create'} icon={<FiPlusSquare size={20} />} onClick={toggleOpen} />
            </div>
            <div className="main-body flex flex-wrap">
                <div className="h-fit">
                    <MDBCard>
                        <MDBCardHeader>Room name / room id</MDBCardHeader>
                        <MDBCardBody>
                            <MDBCardTitle>info card title</MDBCardTitle>
                            <MDBCardText>Price: 4444</MDBCardText>
                            <MDBCardText>capacity: 4</MDBCardText>
                            <MDBCardText>content</MDBCardText>
                        </MDBCardBody>
                        <MDBCardFooter className="grid grid-cols-2 gap-2">
                            <Button color={'success'} text={'view'} icon={<TbInfoSquare size={20} />} />
                            <Button color={'info'} text={'Add customer'} icon={<FiPlusSquare size={20} />} />
                            <Button color={'danger'} text={'delete'} icon={<CgRemoveR size={20} />} />
                            <Button color={'warning'} text={'edit'} icon={<FiEdit size={20} />} />
                        </MDBCardFooter>
                    </MDBCard>
                </div>
            </div>
            <FormAddRoom openModal={openModal} setOpenModal={setOpenModal} />
        </div>
    )
}

export default Room
