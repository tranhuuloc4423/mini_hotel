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
import { createCustomer, updateCustomer } from '../../../redux/api/customer'

const { CgRemoveR } = icons

const { FiPlusSquare, IoIosArrowBack, BsSave } = icons
const StepThree = ({ setStep, setOpenModal }) => {
    const { members, customer, amenities, edit } = useSelector(
        (state) => state.customer
    )
    const dispatch = useDispatch()
    const [membersData, setMembersData] = useState(members)

    const handleInputChange = (index, field, value) => {
        const updatedMemberData = [...membersData]
        updatedMemberData[index] = {
            ...updatedMemberData[index],
            [field]: value
        }
        setMembersData(updatedMemberData)
        dispatch(updateMember(index, membersData))
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
        const updatedMemberData = [...membersData, newMember]
        setMembersData(updatedMemberData)
    }

    const handleRemoveMember = (index) => {
        const updatedMemberData = [...membersData]
        updatedMemberData.splice(index, 1)
        setMembersData(updatedMemberData)
        dispatch(removeMember(index))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const hasEmptyItem = membersData.some((item) => {
            return Object.values(item).some((value) => value === '')
        })
        if (!hasEmptyItem) {
            const newCustomer = {
                ...customer,
                amenities: amenities,
                members: membersData
            }
            // console.log(newCustomer)
            if (edit) {
                updateCustomer(edit, newCustomer, dispatch)
            } else {
                createCustomer(newCustomer, dispatch)
            }
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
                    {membersData.map((member, index) => (
                        <tr key={index}>
                            <td>
                                <MDBInput
                                    label="Full Name"
                                    type="text"
                                    name="fullname"
                                    value={member.fullname}
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
                                        handleInputChange(index, 'dob', value)
                                    }
                                />
                            </td>
                            <td>
                                <div className="flex-center-y">
                                    <MDBRadio
                                        name={`sex_${index}`}
                                        value="male"
                                        label="Male"
                                        checked={member.sex === 'male'}
                                        onChange={() =>
                                            handleInputChange(
                                                index,
                                                'sex',
                                                'male'
                                            )
                                        }
                                    />
                                    <MDBRadio
                                        name={`sex_${index}`}
                                        value="female"
                                        label="Female"
                                        checked={member.sex === 'female'}
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
                                    value={member.idcard}
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
                                    onClick={() => handleRemoveMember(index)}
                                />
                            </td>
                        </tr>
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
