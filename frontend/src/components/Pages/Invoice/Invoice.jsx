import {
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBInput
} from 'mdb-react-ui-kit'
import DatePicker from '../../Common/DatePicker'
import icons from '../../../utils/icons'
import Button from '../../Common/Button'
import { useEffect, useRef, useState } from 'react'
import InvoicePrint from './InvoicePrint'
import { useDispatch, useSelector } from 'react-redux'
import { useReactToPrint } from 'react-to-print'
import {
    getInvoices,
    paymentInvoice,
    removeInvoice
} from '../../../redux/api/invoice'
import {
    sortByRoom,
    sortByCustomer,
    sortByTime,
    sortByTotal,
    setSortByRoom,
    setSortByCustomer,
    setSortByTime,
    setSortByTotal,
    setSearch,
    filter
} from '../../../redux/slices/invoiceSlice'
import Table from '../../Common/Table'
import { MdPayment } from 'react-icons/md'
import { createData } from '../../../redux/api/annualData'

const { LuCalculator, TbInfoSquare, FaPrint, CgRemoveR } = icons

const Invoice = () => {
    const [date, setDate] = useState()
    const [openModal, setOpenModal] = useState()
    const [activeInvoice, setActiveInoice] = useState()
    const [pay, setPay] = useState(false)
    const { invoices, roomSort, customerSort, timeSort, totalSort, search } =
        useSelector((state) => state.invoice)
    const dispatch = useDispatch()
    const componentRef = useRef()
    const headers = [
        {
            name: 'Room',
            sort: roomSort,
            onClick: () => {
                dispatch(setSortByRoom())
                dispatch(sortByRoom(roomSort))
            }
        },
        {
            name: 'Customer',
            sort: customerSort,
            onClick: () => {
                dispatch(setSortByCustomer())
                dispatch(sortByCustomer(customerSort))
            }
        },
        {
            name: 'Date',
            sort: timeSort,
            onClick: () => {
                dispatch(setSortByTime())
                dispatch(sortByTime(timeSort))
            }
        },
        {
            name: 'Total',
            sort: totalSort,
            onClick: () => {
                dispatch(setSortByTotal())
                dispatch(sortByTotal(totalSort))
            }
        },
        {
            name: 'Modify'
        }
    ]

    useEffect(() => {
        getInvoices(dispatch)
    }, [dispatch])
    const handleDelete = (id) => {
        removeInvoice(id, dispatch)
    }
    const handleInvoice = (invoice) => {
        setOpenModal(true)
        setActiveInoice(invoice)
    }

    const handlePrint = useReactToPrint({
        content: () => componentRef.current
    })

    const handlePay = () => {
        const data = { ...activeInvoice, status: 'paid' }
        paymentInvoice(data, dispatch)
        const monthlyData = {
            invoice: data,
            month: new Date().getMonth() + 1
        }
        console.log(monthlyData)
        createData(monthlyData)
        setOpenModal(false)
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
                    <MDBInput
                        value={search}
                        onChange={(e) => {
                            const inputValue = e.target.value
                            dispatch(setSearch(inputValue))
                            if (inputValue === '' || inputValue === null) {
                                getInvoices(dispatch)
                            } else {
                                dispatch(filter())
                            }
                        }}
                        label="Search"
                        id="search"
                        type="text"
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
                <Table
                    headers={headers}
                    body={invoices?.map((invoice) => (
                        <tr key={invoice?.id}>
                            <td className="w-1/5">{invoice?.room?.roomname}</td>
                            <td className="w-1/5">
                                {invoice?.customer?.fullname}
                            </td>
                            <td className="w-1/5">{invoice?.time}</td>
                            <td className="w-1/5">{invoice?.total}</td>
                            <td className="w-1/5">
                                <Button
                                    color={'info'}
                                    text={'view'}
                                    icon={<FaPrint size={20} />}
                                    onClick={() => handleInvoice(invoice)}
                                />
                                <Button
                                    color={'danger'}
                                    text={'delete'}
                                    icon={<CgRemoveR size={20} />}
                                    onClick={() => handleDelete(invoice?.id)}
                                />
                            </td>
                        </tr>
                    ))}
                />
            </div>

            <MDBModal open={openModal} setOpen={setOpenModal} tabIndex="-1">
                <MDBModalDialog size="xl">
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
                                {activeInvoice?.status === 'pending' && (
                                    <Button
                                        color={'success'}
                                        text={'Pay'}
                                        icon={<MdPayment size={20} />}
                                        onClick={handlePay}
                                    />
                                )}
                            </div>
                        </MDBModalBody>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </div>
    )
}

export default Invoice
