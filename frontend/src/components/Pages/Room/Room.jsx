import {
    MDBInput,
    MDBDropdown,
    MDBDropdownMenu,
    MDBDropdownToggle,
    MDBDropdownItem,
    MDBCard,
    MDBCardBody,
    MDBCardHeader,
    MDBCardFooter
} from 'mdb-react-ui-kit'
import React, { useState, useEffect } from 'react'
import icons from '../../../utils/icons'
import FormAddRoom from './FormAddRoom'
import Button from '../../Common/Button'
import { deleteRoom, getRooms } from '../../../redux/api/room'
import { useDispatch, useSelector } from 'react-redux'

const { FiPlusSquare, TbInfoSquare, FiEdit, CgRemoveR } = icons
const Room = () => {
    const [searchValue, setSearchValue] = useState('')
    const [openModal, setOpenModal] = useState(false)
    const dispatch = useDispatch()
    const { rooms } = useSelector((state) => state.room)
    const [isEdit, setIsEdit] = useState(false)
    const toggleOpen = () => setOpenModal(!openModal)
    const [formValue, setFormValue] = useState({
        roomName: '',
        price: '',
        capacity: '',
        roomId: ''
    })

    const handleRemove = (id) => {
        deleteRoom(id, dispatch)
        getRooms(dispatch)
    }

    useEffect(() => {
        getRooms(dispatch)
    }, [isEdit, dispatch])

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
                        <MDBDropdownToggle color="secondary">
                            Filter
                        </MDBDropdownToggle>
                        <MDBDropdownMenu>
                            <MDBDropdownItem link>Menu item</MDBDropdownItem>
                            <MDBDropdownItem link>Menu item</MDBDropdownItem>
                            <MDBDropdownItem link>Menu item</MDBDropdownItem>
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
            <div className="main-body flex flex-wrap gap-4">
                {rooms?.map((room, index) => {
                    return (
                        <React.Fragment key={index}>
                            <div className="h-fit">
                                <MDBCard>
                                    <MDBCardHeader>
                                        {room?.roomName}
                                    </MDBCardHeader>
                                    <MDBCardBody>
                                        <div className="">
                                            <div>Price: {room?.price}</div>
                                            <div>
                                                Capacity: {room?.capacity}
                                            </div>
                                        </div>
                                    </MDBCardBody>
                                    <MDBCardFooter className="grid grid-cols-2 gap-2">
                                        <Button
                                            color={'success'}
                                            text={'view'}
                                            icon={<TbInfoSquare size={20} />}
                                        />
                                        <Button
                                            color={'info'}
                                            text={'Add customer'}
                                            icon={<FiPlusSquare size={20} />}
                                        />
                                        <Button
                                            color={'danger'}
                                            text={'delete'}
                                            icon={<CgRemoveR size={20} />}
                                            onClick={() => {
                                                handleRemove(room?.roomId)
                                            }}
                                        />
                                        <Button
                                            color={'warning'}
                                            text={'edit'}
                                            icon={<FiEdit size={20} />}
                                            onClick={() => {
                                                setOpenModal(true)
                                                setIsEdit(true)
                                                setFormValue({
                                                    roomName: room?.roomName,
                                                    price: room?.price,
                                                    capacity: room?.capacity,
                                                    roomId: room?.roomId
                                                })
                                            }}
                                        />
                                    </MDBCardFooter>
                                </MDBCard>
                            </div>
                        </React.Fragment>
                    )
                })}
            </div>
            <FormAddRoom
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

export default Room
