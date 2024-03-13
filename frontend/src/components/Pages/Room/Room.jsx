import {
    MDBInput,
    MDBCard,
    MDBCardBody,
    MDBCardHeader,
    MDBCardFooter
} from 'mdb-react-ui-kit'
import icons from '../../../utils/icons'
import FormAddRoom from './FormAddRoom'
import Button from '../../Common/Button'
import {
    deleteRoom,
    getRooms,
    removeCustomerRoom
} from '../../../redux/api/room'
import { setSearch, filter } from '../../../redux/slices/roomSlice'
import { useDispatch, useSelector } from 'react-redux'
import FormAddCusRoom from './FormAddCusRoom'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const { FiPlusSquare, FiEdit, CgRemoveR } = icons
const Room = () => {
    const [openModal, setOpenModal] = useState(false)
    const dispatch = useDispatch()
    const { rooms, search } = useSelector((state) => state.room)
    const { customers } = useSelector((state) => state.customer)
    const [isEdit, setIsEdit] = useState(false)
    const toggleOpen = () => setOpenModal(!openModal)
    const [formCustomer, setFormCustomer] = useState(false)
    const [id, setId] = useState()
    const [formValue, setFormValue] = useState({
        roomname: '',
        price: '',
        capacity: '',
        id: ''
    })

    const handleRemove = (room) => {
        if (!room.customer) {
            deleteRoom(room.id, dispatch)
            getRooms(dispatch)
        } else {
            toast.error('Room was occupied!')
        }
    }

    useEffect(() => {
        getRooms(dispatch)
    }, [isEdit, dispatch])

    return (
        <div className="main-container">
            <div className="main-header">
                <div className="flex-center-y gap-2">
                    <MDBInput
                        value={search}
                        onChange={(e) => {
                            const inputValue = e.target.value
                            dispatch(setSearch(inputValue))
                            if (inputValue === '' || inputValue === null) {
                                getRooms(dispatch)
                            } else {
                                dispatch(filter())
                            }
                        }}
                        label="Search"
                        id="search"
                        type="text"
                    />
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
                    <div
                        className="h-fit rounded-md border-[1px] border-black_1 shadow-slate-900 shadow-lg"
                        key={room?.id}
                    >
                        <MDBCard>
                            <MDBCardHeader className="text-2xl text-center font-bold">
                                {room?.roomname}
                            </MDBCardHeader>
                            <MDBCardBody>
                                <div className={`bg-contain w-full h-full`}>
                                    <div className="border-2 mb-2">
                                        <img
                                            src={room?.image}
                                            alt="roomImage"
                                            className="w-full h-[150px] object-cover"
                                        />
                                    </div>
                                    <div>Price: {room?.price} $</div>
                                    <div>Capacity: {room?.capacity} slot</div>
                                    <div>
                                        Customer:{' '}
                                        {room?.customer?.fullname
                                            ? room?.customer?.fullname
                                            : 'empty'}
                                    </div>
                                </div>
                            </MDBCardBody>
                            <MDBCardFooter className="flex flex-col gap-2">
                                <div className="flex">
                                    <Button
                                        color={'success'}
                                        text={'Add customer'}
                                        icon={<FiPlusSquare size={20} />}
                                        onClick={() => {
                                            setFormCustomer(true)
                                            setId(room?.id)
                                        }}
                                    />
                                    <Button
                                        color={'danger'}
                                        text={'delete'}
                                        icon={<CgRemoveR size={20} />}
                                        onClick={() => {
                                            handleRemove(room)
                                        }}
                                    />
                                </div>
                                <div className="flex">
                                    <Button
                                        color={'info'}
                                        text={'Remove customer'}
                                        icon={<FiPlusSquare size={20} />}
                                        onClick={() => {
                                            const data = {
                                                ...room,
                                                customer: {}
                                            }
                                            console.log(data)
                                            removeCustomerRoom(data, dispatch)
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
                                </div>
                            </MDBCardFooter>
                        </MDBCard>
                    </div>
                ))}
            </div>
            <FormAddCusRoom
                formCustomer={formCustomer}
                setFormCustomer={setFormCustomer}
                id={id}
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
