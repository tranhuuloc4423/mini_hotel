import {
    MDBInput,
    MDBCol,
    MDBRow,
    MDBCheckbox,
    MDBBtn,
    MDBTypography
} from 'mdb-react-ui-kit'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { registerUser } from '../../redux/api/auth'
import { toast } from 'react-toastify'

const Register = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [formValue, setFormValue] = useState({
        fullname: '',
        username: '',
        email: '',
        phonenumber: '',
        address: '',
        password: '',
        passwordConfirm: ''
    })

    const onChange = (e) => {
        setFormValue({ ...formValue, [e.target.name]: e.target.value })
    }

    const handleSignup = (e) => {
        e.preventDefault()
        if (formValue.passwordConfirm === formValue.password) {
            const registerForm = {
                ...formValue
            }
            delete registerForm.passwordConfirm
            console.log({ registerForm })
            registerUser(registerForm, dispatch, navigate)
        } else {
            toast.error('Password not match!')
        }
    }
    return (
        <div
            className={`w-screen h-screen bg-center bg-cover relative bg-[url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/sections-3.jpg')]`}
        >
            <form
                className="w-[480px] absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] bg-white p-10 shadow-md rounded-md"
                onSubmit={handleSignup}
            >
                <MDBTypography variant="h2" className="text-center mb-4">
                    Register
                </MDBTypography>
                <MDBRow className="mb-4">
                    <MDBCol>
                        <MDBInput
                            type="text"
                            label="Full name"
                            name="fullname"
                            value={formValue.fullname}
                            onChange={onChange}
                        />
                    </MDBCol>
                    <MDBCol>
                        <MDBInput
                            type="text"
                            label="Username"
                            name="username"
                            value={formValue.username}
                            onChange={onChange}
                        />
                    </MDBCol>
                </MDBRow>

                <MDBInput
                    className="mb-4"
                    type="email"
                    name="email"
                    label="Email"
                    value={formValue.email}
                    onChange={onChange}
                />
                <MDBInput
                    className="mb-4"
                    type="text"
                    name="phonenumber"
                    label="Phone number"
                    value={formValue.phonenumber}
                    onChange={onChange}
                />
                <MDBInput
                    className="mb-4"
                    type="text"
                    name="address"
                    label="Address"
                    value={formValue.address}
                    onChange={onChange}
                />
                <MDBInput
                    className="mb-4"
                    type="password"
                    name="password"
                    label="Password"
                    value={formValue.password}
                    onChange={onChange}
                />
                <MDBInput
                    className="mb-4"
                    type="password"
                    name="passwordConfirm"
                    label="Password cofirm"
                    value={formValue.passwordConfirm}
                    onChange={onChange}
                />

                <MDBCheckbox
                    wrapperClass="d-flex justify-content-center mb-4"
                    id="form3Example5"
                    label="Do something"
                    defaultChecked
                />

                <MDBBtn className="mb-4" block>
                    Register
                </MDBBtn>

                <div className="text-center">
                    <p>
                        Already have an account?
                        <Link to={'/login'} className="ml-1">
                            Log in
                        </Link>
                    </p>
                </div>
            </form>
        </div>
    )
}

export default Register
