import { MDBInput, MDBRadio } from 'mdb-react-ui-kit'
import Button from '../../Common/Button'
import DatePicker from '../../Common/DatePicker'
import icons from '../../../utils/icons'
import { useState } from 'react'

const { CgRemoveR } = icons

const MemberRowInfo = ({ onDelete, onChange, formValue }) => {
    return (
        <tr>
            <td>
                <MDBInput
                    label="Name"
                    type="text"
                    name="name"
                    value={formValue.name}
                    onChange={onChange}
                />
            </td>
            <td>
                <DatePicker />
            </td>
            <td>
                <div className="flex-center-y">
                    <MDBRadio name="sex" value="male" label="Male" />
                    <MDBRadio name="sex" value="female" label="Female" />
                </div>
            </td>
            <td>
                <MDBInput
                    label="ID Card"
                    type="text"
                    name="idcard"
                    value={formValue.idcard}
                />
            </td>
            <td>
                <MDBInput
                    label="Phone number"
                    type="text"
                    name="phonenumber"
                    value={formValue.phonenumber}
                />
            </td>
            <td>
                <Button
                    color={'danger'}
                    text={'delete'}
                    icon={<CgRemoveR size={20} />}
                    onClick={() => onDelete()}
                />
            </td>
        </tr>
    )
}

export default MemberRowInfo
