import { useEffect, useState } from 'react'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../../Common/Button'
import icons from '../../../utils/icons'
import FormAddIndex from './FormAddIndex'
import { setCheckIndexs } from '../../../redux/slices/indexSlice'
import { getRooms } from '../../../redux/api/room'

const { FiEdit, TbInfoSquare } = icons

const IndexBody = () => {
    const [openModal, setOpenModal] = useState(false)
    const [room, setRoom] = useState(null)
    const { rooms } = useSelector((state) => state.room)
    const { checkIndexs } = useSelector((state) => state.index)
    const dispatch = useDispatch()

    const handleSubmit = (room) => {
        if (room?.customer) {
            setRoom(room)
            setOpenModal(true)
        }
    }

    useEffect(() => {
        getRooms(dispatch)
    }, [dispatch])

    useEffect(() => {
        getRooms(dispatch)
    }, [checkIndexs, dispatch])

    return (
        <MDBTable bordered align="middle" className="text-center">
            <MDBTableHead>
                <tr className="table-primary">
                    <th scope="col">{"Name's room"}</th>
                    <th scope="col">Customer</th>
                    <th scope="col">Modify</th>
                </tr>
            </MDBTableHead>
            <MDBTableBody>
                {rooms
                    ?.filter((item) => item?.hasInvoice === false)
                    ?.map((room) => (
                        <tr key={room?.id} className="w-full">
                            <td className="w-[30%]">
                                <p className="">{room?.roomname}</p>
                            </td>
                            <td className="w-[30%]">
                                <p className="">{room?.customer?.fullname}</p>
                            </td>
                            <td className="w-[30%]">
                                <Button
                                    color={'success'}
                                    text={'View'}
                                    icon={<TbInfoSquare size={20} />}
                                />
                                <Button
                                    color={'info'}
                                    text={'Input'}
                                    icon={<FiEdit size={20} />}
                                    onClick={() => handleSubmit(room)}
                                />
                            </td>
                        </tr>
                    ))}
            </MDBTableBody>
            <FormAddIndex
                openModal={openModal}
                setOpenModal={setOpenModal}
                room={room}
            />
        </MDBTable>
    )
}

export default IndexBody
