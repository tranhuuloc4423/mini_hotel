import { MDBTable, MDBTableBody, MDBTableHead } from 'mdb-react-ui-kit'
import icons from '../../../utils/icons'
import Button from '../../Common/Button'
import MemberRowInfo from './MemberRowInfo'
import React, { useEffect, useState } from 'react'

const { FiPlusSquare, IoIosArrowBack, BsSave } = icons
const StepThree = ({ setStep }) => {
    const [memberRows, setMemberRows] = useState([])
    const [formValue, setFormValue] = useState({
        name: '',
        phonenumber: '',
        idcard: ''
    })

    const handleChangeSex = (e) => {
        setSex(e.target.value)
    }

    // const { save } = useSelector((state) => state.customer)
    const [dob, setDob] = useState()
    const [sex, setSex] = useState()

    const handleAddMember = () => {
        const newMemberRow = (
            <MemberRowInfo
                onDelete={handleDeleteMemberRow}
                onChange={onChange}
                formValue={formValue}
            />
        )
        setMemberRows([...memberRows, newMemberRow])
    }

    const onChange = (e) => {
        setFormValue({ ...formValue, [e.target.name]: e.target.value })
    }

    const handleDeleteMemberRow = (rowIndex) => {
        const updatedMemberRows = [...memberRows]
        updatedMemberRows.splice(rowIndex, 1)
        setMemberRows(updatedMemberRows)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        memberRows
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
                    onClick={handleSubmit}
                />
            </div>
        </form>
    )
}

export default StepThree
