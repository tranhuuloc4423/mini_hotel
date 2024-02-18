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
import FormAddCusRoom from './FormAddCusRoom'

const { FiPlusSquare, TbInfoSquare, FiEdit, CgRemoveR } = icons
const Room = () => {
    const [searchValue, setSearchValue] = useState('')
    const [openModal, setOpenModal] = useState(false)
    const dispatch = useDispatch()
    const { rooms } = useSelector((state) => state.room)
    const [isEdit, setIsEdit] = useState(false)
    const toggleOpen = () => setOpenModal(!openModal)
    const [formCustomer, setFormCustomer] = useState(false)
    const [roomId, setRoomId] = useState()
    const [formValue, setFormValue] = useState({
        roomname: '',
        price: '',
        capacity: '',
        id: ''
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
                {rooms?.map((room) => (
                    <div className="h-fit" key={room?.id}>
                        <MDBCard>
                            <MDBCardHeader>{room?.roomname}</MDBCardHeader>
                            <MDBCardBody>
                                <div
                                    className={`bg-[data:image/jpeg;base64,${room?.image}] bg-contain w-full h-full`}
                                >
                                    <div>Price: {room?.price}</div>
                                    <div>Capacity: {room?.capacity}</div>
                                    <div>CustomerId: {room?.customer}</div>
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
                                    onClick={() => {
                                        setFormCustomer(true)
                                        setRoomId(room?.id)
                                    }}
                                />
                                <Button
                                    color={'danger'}
                                    text={'delete'}
                                    icon={<CgRemoveR size={20} />}
                                    onClick={() => {
                                        handleRemove(room?.id)
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
                                            roomname: room?.roomname,
                                            price: room?.price,
                                            capacity: room?.capacity,
                                            id: room?.id
                                        })
                                    }}
                                />
                            </MDBCardFooter>
                        </MDBCard>
                    </div>
                ))}
            </div>
            <FormAddCusRoom
                formCustomer={formCustomer}
                setFormCustomer={setFormCustomer}
                roomId={roomId}
            />
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
