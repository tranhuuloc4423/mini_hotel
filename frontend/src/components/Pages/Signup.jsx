import Input from '../Input'
import Register from './Register'
import Select from '../Select'
import { useState } from 'react'

const Signup = () => {
    const roles = [
        {
            id: '1',
            label: 'Landlord',
            value: 'landlord'
        },
        {
            id: '2',
            label: 'Customer',
            value: 'customer'
        }
    ]

    const temp = roles.find((role) => role.value)

    const [currentExtension, setCurrentExtension] = useState(temp)
    return (
        <Register type={'signup'}>
            <Input type={'email'} placeholder={'Email'} />
            <Input type={'password'} placeholder={'Password'} />
            <Input type={'password'} placeholder={'Confirm Password'} />
            <Select
                options={roles}
                selectedOption={currentExtension}
                handelChange={(event) => {
                    setCurrentExtension(event)
                }}
            />
            <div className="mb-10"></div>
        </Register>
    )
}

export default Signup
