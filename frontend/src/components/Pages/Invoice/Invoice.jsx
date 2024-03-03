import {
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
import { useEffect, useRef, useState } from 'react'
import InvoicePrint from './InvoicePrint'
import { useDispatch, useSelector } from 'react-redux'
import { useReactToPrint } from 'react-to-print'
import { getInvoices } from '../../../redux/api/invoice'

const { LuCalculator, TbInfoSquare, FaPrint, CgRemoveR } = icons

const Invoice = () => {
    const [date, setDate] = useState()
    const [openModal, setOpenModal] = useState()
    const [activeInvoice, setActiveInoice] = useState()
    const { invoices } = useSelector((state) => state.invoice)
    const dispatch = useDispatch()
    const componentRef = useRef()

    useEffect(() => {
        getInvoices(dispatch)
    }, [invoices])
    const handleInvoice = (invoice) => {
        setOpenModal(true)
        setActiveInoice(invoice)
    }

    const handlePrint = useReactToPrint({
        content: () => componentRef.current
    })
    return (
        <div className="main-container">
            <div className="main-header">
                <div className="flex-center-y gap-2">
                    <DatePicker
                        label={'Date'}
                        value={date}
                        setValue={setDate}
                    />
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
                <MDBTable bordered align="middle" className="text-center">
                    <MDBTableHead>
                        <tr className="table-primary">
                            <th scope="col">Room</th>
                            <th scope="col">Customer</th>
                            <th scope="col">Date</th>
                            <th scope="col">Total</th>
                            <th scope="col">Modify</th>
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                        {invoices.map((invoice) => (
                            <tr key={invoice?.id}>
                                <td className="w-1/4">
                                    <p className="fw-normal mb-1">
                                        {invoice?.room.name}
                                    </p>
                                </td>
                                <td className="w-1/4">{invoice?.customer}</td>
                                <td className="w-1/4">{invoice?.time}</td>
                                <td className="w-1/4">{invoice?.total}</td>
                                <td className="w-1/4">
                                    <Button
                                        color={'info'}
                                        text={'print'}
                                        icon={<FaPrint size={20} />}
                                        onClick={() => handleInvoice(invoice)}
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
                            {openModal && (
                                <InvoicePrint
                                    ref={componentRef}
                                    data={activeInvoice}
                                />
                            )}

                            <div className="w-full flex justify-center mt-4">
                                <Button
                                    color={'info'}
                                    text={'Print'}
                                    icon={<FaPrint size={20} />}
                                    onClick={handlePrint}
                                />
                            </div>
                        </MDBModalBody>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </div>
    )
}

export default Invoice
