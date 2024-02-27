import {
    MDBInput,
    MDBRadio,
    MDBTable,
    MDBTableBody,
    MDBTableHead
} from 'mdb-react-ui-kit'
import icons from '../../../utils/icons'
import Button from '../../Common/Button'
import React, { useState } from 'react'
import DatePicker from '../../Common/DatePicker'
import { useDispatch, useSelector } from 'react-redux'
import {
    addMember,
    removeMember,
    updateMember
} from '../../../redux/slices/customerSlice'
import { toast } from 'react-toastify'
import { createCustomer } from '../../../redux/api/customer'

const { CgRemoveR } = icons

const { FiPlusSquare, IoIosArrowBack, BsSave } = icons
const StepThree = ({ setStep, setOpenModal }) => {
    const { members, customer, amenities } = useSelector(
        (state) => state.customer
    )
    // console.log(members)
    const dispatch = useDispatch()
    const [memberData, setMemberData] = useState(members)

    const handleInputChange = (index, field, value) => {
        const updatedMemberData = [...memberData]
        updatedMemberData[index] = {
            ...updatedMemberData[index],
            [field]: value
        }
        setMemberData(updatedMemberData)
        dispatch(updateMember(index, memberData))
    }

    const handleAddMember = () => {
        const newMember = {
            fullname: '',
            sex: '',
            dob: '',
            idcard: '',
            phonenumber: ''
        }
        dispatch(addMember(newMember))
        const updatedMemberData = [...memberData, newMember]
        setMemberData(updatedMemberData)
    }

    const handleRemoveMember = (index) => {
        const updatedMemberData = [...memberData]
        updatedMemberData.splice(index, 1)
        setMemberData(updatedMemberData)
        dispatch(removeMember(index))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const hasEmptyItem = memberData.some((item) => {
            return Object.values(item).some((value) => value === '')
        })
        if (!hasEmptyItem) {
            const newCustomer = {
                ...customer,
                amenities: amenities,
                members: memberData
            }
            // console.log(newCustomer)
            createCustomer(newCustomer, dispatch)
            setOpenModal(false)
        } else {
            toast.warning('Please fill in complete information!')
        }
    }

    return (
        <div>
            <div className="text-lg font-semibold pb-4">Step 3: {'Member'}</div>
            <MDBTable align="middle" className="max-h-[400px] overflow-scroll">
                <MDBTableHead>
                    <tr>
                        <th scope="col">Full Name</th>
                        <th scope="col">DoB</th>
                        <th scope="col">Sex</th>
                        <th scope="col">ID Card</th>
                        <th scope="col">Phonenumber</th>
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
                    {members.map((member, index) => (
                        <React.Fragment key={index}>
                            <tr>
                                <td>
                                    <MDBInput
                                        label="Full Name"
                                        type="text"
                                        name="fullname"
                                        value={member.name}
                                        onChange={(e) =>
                                            handleInputChange(
                                                index,
                                                'fullname',
                                                e.target.value
                                            )
                                        }
                                    />
                                </td>
                                <td>
                                    <DatePicker
                                        label={'DoB'}
                                        value={member.dob}
                                        setValue={(value) =>
                                            handleInputChange(
                                                index,
                                                'dob',
                                                value
                                            )
                                        }
                                    />
                                </td>
                                <td>
                                    <div className="flex-center-y">
                                        <MDBRadio
                                            name={`sex-${index}`}
                                            value="male"
                                            label="Male"
                                            checked={member?.sex === 'male'}
                                            onChange={() =>
                                                handleInputChange(
                                                    index,
                                                    'sex',
                                                    'male'
                                                )
                                            }
                                        />
                                        <MDBRadio
                                            name={`sex-${index}`}
                                            value="female"
                                            label="Female"
                                            checked={member?.sex === 'female'}
                                            onChange={() =>
                                                handleInputChange(
                                                    index,
                                                    'sex',
                                                    'female'
                                                )
                                            }
                                        />
                                    </div>
                                </td>
                                <td>
                                    <MDBInput
                                        label="ID Card"
                                        type="text"
                                        name="idcard"
                                        value={member.idCard}
                                        onChange={(e) =>
                                            handleInputChange(
                                                index,
                                                'idcard',
                                                e.target.value
                                            )
                                        }
                                    />
                                </td>
                                <td>
                                    <MDBInput
                                        label="Phone number"
                                        type="text"
                                        name="phonenumber"
                                        value={member.phone}
                                        onChange={(e) =>
                                            handleInputChange(
                                                index,
                                                'phonenumber',
                                                e.target.value
                                            )
                                        }
                                    />
                                </td>
                                <td>
                                    <Button
                                        color={'danger'}
                                        text={'delete'}
                                        icon={<CgRemoveR size={20} />}
                                        onClick={() =>
                                            handleRemoveMember(index)
                                        }
                                    />
                                </td>
                            </tr>
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
        </div>
    )
}

export default StepThree
