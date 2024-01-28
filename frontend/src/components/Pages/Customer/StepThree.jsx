import { MDBTable, MDBTableBody, MDBTableHead } from 'mdb-react-ui-kit'
import icons from '../../../utils/icons'
import Button from '../../Common/Button'
import MemberRowInfo from './MemberRowInfo'
import React, { useEffect, useState } from 'react'

const { FiPlusSquare, IoIosArrowBack, BsSave } = icons
const StepThree = () => {
    const [memberRows, setMemberRows] = useState([])
    const handleAddMember = () => {
        const newMemberRow = <MemberRowInfo onDelete={handleDeleteMemberRow} />
        setMemberRows([...memberRows, newMemberRow])
    }

    const handleDeleteMemberRow = (rowIndex) => {
        console.log(rowIndex)
        setMemberRows((prevRows) =>
            prevRows.filter((_, index) => index !== rowIndex)
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    useEffect(() => {
        console.log(memberRows)
    }, [memberRows])

    return (
        <form onSubmit={handleSubmit}>
            <div className="text-lg font-semibold pb-4">Step 3: {'Member'}</div>
            <MDBTable align="middle" className="max-h-[400px] overflow-scroll">
                <MDBTableHead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">DoB</th>
                        <th scope="col">Sex</th>
                        <th scope="col">ID Card</th>
                        <th scope="col">Phone number</th>
                        <th scope="col">
                            <Button
                                color={'success'}
                                text={'add'}
                                icon={<FiPlusSquare size={20} />}
                                className={'w-[-webkit-fill-available]'}
                                onClick={handleAddMember}
                            />
                        </th>
                    </tr>
                </MDBTableHead>
                <MDBTableBody>
                    {memberRows.map((row, index) => (
                        <React.Fragment key={index}>
                            {React.cloneElement(row, {
                                onDelete: () => handleDeleteMemberRow(index)
                            })}
                        </React.Fragment>
                    ))}
                </MDBTableBody>
            </MDBTable>
            <div>
                <Button
                    color={'info'}
                    text={'previous'}
                    icon={<IoIosArrowBack size={20} />}
                    onClick={() => setStep(2)}
                />
                <Button
                    color={'info'}
                    text={'save'}
                    icon={<BsSave size={20} />}
                    onClick={() => {
                        dispatch(setSave(true))
                        setOpenModal(false)
                    }}
                />
            </div>
        </form>
    )
}

export default StepThree
