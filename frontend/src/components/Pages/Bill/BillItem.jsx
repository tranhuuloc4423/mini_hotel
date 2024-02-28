import React, { useRef } from 'react'
import Button from '../../Common/Button'
import icons from '../../../utils/icons'
import { useReactToPrint } from 'react-to-print'

const { FaPrint, CgRemoveR } = icons

const BillItem = ({ roomName, customer, date }) => {
    const componentRef = useRef()
    const handlePrint = useReactToPrint({
        content: () => componentRef.current
    })

    return (
        <tr ref={componentRef}>
            <td className="w-1/4">
                <p className="fw-normal mb-1">{roomName}</p>
            </td>
            <td className="w-1/4">{customer}</td>
            <td className="w-1/4">{date}</td>
            <td className="w-1/4">
                <Button
                    color={'info'}
                    text={'print'}
                    icon={<FaPrint size={20} />}
                    onClick={handlePrint}
                />
                <Button
                    color={'danger'}
                    text={'delete'}
                    icon={<CgRemoveR size={20} />}
                />
            </td>
        </tr>
    )
}

export default BillItem
