import {
    // MDBDropdown,
    // MDBDropdownMenu,
    // MDBDropdownToggle,
    // MDBDropdownItem,
    MDBTable,
    MDBTableHead,
    MDBTableBody,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody
} from 'mdb-react-ui-kit'
import DatePicker from '../../Common/DatePicker'
import icons from '../../../utils/icons'
import Button from '../../Common/Button'
import { useState } from 'react'
import BillPrint from './BillPrint'
import ReactDOM from 'react-dom'

const { LuCalculator, TbInfoSquare, FaPrint, CgRemoveR } = icons

const Bill = () => {
    const [date, setDate] = useState()
    const [openModal, setOpenModal] = useState()
    const bills = [
        { roomName: 'Room A', customer: '123', date: '456' },
        { roomName: 'Room B', customer: '789', date: '321' }
        // Các item bill khác
    ]

    const handlePrint = () => {
        const printWindow = window.open('', '_blank')
        const printRoot = printWindow.document.createElement('div')
        printWindow.document.body.appendChild(printRoot)
        ReactDOM.createRoot(printRoot).render(<BillPrint />)
    }
    return (
        <div className="main-container">
            <div className="main-header">
                <div className="flex-center-y gap-2">
                    <DatePicker
                        label={'Date'}
                        value={date}
                        setValue={setDate}
                    />
                    {/* <div className="flex-center-y gap-2">
                        <span>state</span>
                        <MDBDropdown>
                            <MDBDropdownToggle color="secondary">
                                State
                            </MDBDropdownToggle>
                            <MDBDropdownMenu>
                                <MDBDropdownItem link>
                                    Menu item
                                </MDBDropdownItem>
                                <MDBDropdownItem link>
                                    Menu item
                                </MDBDropdownItem>
                                <MDBDropdownItem link>
                                    Menu item
                                </MDBDropdownItem>
                            </MDBDropdownMenu>
                        </MDBDropdown>
                    </div> */}
                </div>
                <div className="flex-center-y gap-2">
                    <Button
                        color={'success'}
                        text={'Bill'}
                        icon={<LuCalculator size={20} />}
                    />
                    <Button
                        color={'info'}
                        text={'view'}
                        icon={<TbInfoSquare size={20} />}
                    />
                </div>
            </div>
            <div className="main-body">
                <MDBTable align="middle">
                    <MDBTableHead>
                        <tr className="table-primary">
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Paid</th>
                            <th scope="col">Remain</th>
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                        {bills.map((bill, index) => (
                            <tr key={index}>
                                <td className="w-1/4">
                                    <p className="fw-normal mb-1">
                                        {bill.roomName}
                                    </p>
                                </td>
                                <td className="w-1/4">{bill.customer}</td>
                                <td className="w-1/4">{bill.date}</td>
                                <td className="w-1/4">
                                    <Button
                                        color={'info'}
                                        text={'print'}
                                        icon={<FaPrint size={20} />}
                                        onClick={() => setOpenModal(true)}
                                    />
                                    <Button
                                        color={'danger'}
                                        text={'delete'}
                                        icon={<CgRemoveR size={20} />}
                                    />
                                </td>
                            </tr>
                        ))}
                    </MDBTableBody>
                </MDBTable>
            </div>
            <MDBModal open={openModal} setOpen={setOpenModal} tabIndex="-1">
                <MDBModalDialog>
                    <MDBModalContent>
                        <MDBModalHeader>
                            <MDBModalTitle>Bill Detail</MDBModalTitle>
                        </MDBModalHeader>
                        <MDBModalBody>
                            <BillPrint />
                            <Button
                                color={'info'}
                                text={'Print'}
                                icon={<FaPrint size={20} />}
                                onClick={handlePrint}
                            />
                        </MDBModalBody>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </div>
    )
}

export default Bill
