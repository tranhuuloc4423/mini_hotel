import { useEffect, useState } from 'react'
import DatePicker from '../../Common/DatePicker'
import { MDBInput, MDBRadio } from 'mdb-react-ui-kit'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../../Common/Button'

import icons from '../../../utils/icons'
import { setCustomerInfo } from '../../../redux/slices/customerSlice'
import { toast } from 'react-toastify'
import { getCustomer } from '../../../redux/api/customer'

const { IoIosArrowForward } = icons

const StepOne = ({ setStep }) => {
    const [formValue, setFormValue] = useState({
        fullname: '',
        phonenumber: '',
        email: '',
        idcard: '',
        address: ''
    })
    const dispatch = useDispatch()
    const { edit, customers } = useSelector((state) => state.customer)
    const [dob, setDob] = useState()
    const [sex, setSex] = useState()

    useEffect(() => {
        if (edit) {
            getCustomer(edit, dispatch)
            const customerEdit = customers.find((item) => item.id === edit)
            const { fullname, phonenumber, email, idcard, address, sex, dob } =
                { ...customerEdit }

            console.log({
                fullname: fullname,
                phonenumber: phonenumber,
                email: email,
                idcard: idcard,
                address: address,
                sex: sex,
                dob: dob
            })
            setFormValue({
                fullname: fullname,
                phonenumber: phonenumber,
                email: email,
                idcard: idcard,
                address: address
            })
            setSex(sex)
            setDob(dob)
        } else {
            setFormValue({
                fullname: '',
                phonenumber: '',
                email: '',
                idcard: '',
                address: ''
            })
            setSex('')
            setDob('')
        }
    }, [edit])
    const onChange = (e) => {
        setFormValue({ ...formValue, [e.target.name]: e.target.value })
    }

    const handleChangeSex = (e) => {
        setSex(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const isAllFieldsFilled = Object.values(formValue).every(
            (value) => value !== ''
        )
        const isDobFilled = dob !== undefined
        const isSexFilled = sex !== undefined

        if (isAllFieldsFilled && isDobFilled && isSexFilled) {
            const newCustomerInfo = { ...formValue, dob: dob, sex: sex }
            console.log(newCustomerInfo)
            dispatch(setCustomerInfo(newCustomerInfo))
            setStep(2)
        } else {
            toast.warning('Please fill in complete information!')
        }
    }

    return (
        <form onSubmit={handleSubmit}>
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
                    onClick={handleSubmit}
                    end
                />
            </div>
        </form>
    )
}

export default StepOne
