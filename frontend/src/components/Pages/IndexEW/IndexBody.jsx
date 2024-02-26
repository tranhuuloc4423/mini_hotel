import { useEffect, useState } from 'react'
import {
    MDBTable,
    MDBTableHead,
    MDBTableBody,
    MDBTabsContent,
    MDBTabsPane,
    MDBInput
} from 'mdb-react-ui-kit'
import { useSelector } from 'react-redux'
import Button from '../../Common/Button'
import icons from '../../../utils/icons'
import FormAddIndex from './FormAddIndex'

const { FiEdit, TbInfoSquare } = icons

const IndexBody = () => {
    const [openModal, setOpenModal] = useState(false)
    const [room, setRoom] = useState(null)
    const { rooms } = useSelector((state) => state.room)

    const handleSubmit = (room) => {
        setRoom(room)
        setOpenModal(true)
    }

    return (
        <MDBTable align="middle">
            <MDBTableHead>
                <tr className="table-primary">
                    <th scope="col">{"Name's room"}</th>
                    <th scope="col">Customer</th>
                    <th scope="col">Modify</th>
                </tr>
            </MDBTableHead>
            <MDBTableBody>
                {rooms?.map((room, _) => (
                    <tr key={room?.id} className="w-full">
                        <td className="w-[30%]">
                            <p className="">{room?.roomname}</p>
                        </td>
                        <td className="w-[30%]">
                            <p className="">{room?.customer}</p>
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
