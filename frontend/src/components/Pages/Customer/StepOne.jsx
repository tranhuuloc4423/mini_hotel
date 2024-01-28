import { useEffect, useRef, useState } from 'react'
import DatePicker from '../../Common/DatePicker'
import { MDBInput, MDBRadio } from 'mdb-react-ui-kit'
import { useSelector } from 'react-redux'
import Button from '../../Common/Button'

import icons from '../../../utils/icons'

const { IoIosArrowForward } = icons

const StepOne = ({ setStep }) => {
    const [formValue, setFormValue] = useState({
        fullname: '',
        phonenumber: '',
        email: '',
        idcard: '',
        address: ''
    })
    // const { save } = useSelector((state) => state.customer)
    const [dob, setDob] = useState()
    const [sex, setSex] = useState()

    const onChange = (e) => {
        setFormValue({ ...formValue, [e.target.name]: e.target.value })
    }

    const handleChangeSex = (e) => {
        setSex(e.target.value)
    }

    const handleStepOne = (e) => {
        e.preventDefault()
        setStep(2)
        const newCustomerInfo = { ...formValue, dob: dob, sex: sex }
        console.log(newCustomerInfo)
    }

    // useEffect(() => {
    //     // const newCustomerInfo = { ...formValue }
    //     console.log(dob)
    // }, [dob])

    return (
        <form onSubmit={handleStepOne}>
            <div className="text-lg font-semibold pb-4">
                Step 1: {"Customer's infomation"}
            </div>
            <div className="border-2 border-black_1 flex-1 p-4 flex flex-col gap-3">
                <MDBInput
                    label="Full Name"
                    name="fullname"
                    value={formValue.fullname}
                    onChange={onChange}
                    type="text"
                />
                <div className="flex flex-2">
                    <MDBRadio
                        name="inlineRadio"
                        value="male"
                        label="Male"
                        inline
                        checked={sex === 'male'}
                        onChange={handleChangeSex}
                    />
                    <MDBRadio
                        name="inlineRadio"
                        value="female"
                        label="Female"
                        inline
                        checked={sex === 'female'}
                        onChange={handleChangeSex}
                    />
                </div>
                <DatePicker label={'DoB'} value={dob} setValue={setDob} />
                <MDBInput
                    label="ID Card"
                    type="text"
                    name="idcard"
                    value={formValue.idcard}
                    onChange={onChange}
                />
                <MDBInput
                    label="Phone Number"
                    type="text"
                    name="phonenumber"
                    value={formValue.phonenumber}
                    onChange={onChange}
                />
                <MDBInput
                    label="Email"
                    type="text"
                    name="email"
                    value={formValue.email}
                    onChange={onChange}
                />
                <MDBInput
                    label="Address"
                    type="text"
                    name="address"
                    value={formValue.address}
                    onChange={onChange}
                />
            </div>
            <div className="w-full flex justify-center items-center mt-4">
                <Button
                    color={'info'}
                    text={'next'}
                    icon={<IoIosArrowForward size={20} />}
                    onClick={handleStepOne}
                    end
                />
            </div>
        </form>
    )
}

export default StepOne
