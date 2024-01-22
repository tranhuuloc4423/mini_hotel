import { MDBInput, MDBCol, MDBRow, MDBCheckbox, MDBBtn, MDBIcon, MDBTypography } from 'mdb-react-ui-kit'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
    const [username, setUsername] = useState('')
    const [fullname, setFullname] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')

    const handleSignup = (e) => {
        e.preventDefault()
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
                    Sign up
                </MDBTypography>
                <MDBRow className="mb-4">
                    <MDBCol>
                        <MDBInput
                            type="text"
                            label="Full name"
                            value={fullname}
                            onChange={(e) => setFullname(e.target.value)}
                        />
                    </MDBCol>
                    <MDBCol>
                        <MDBInput
                            type="text"
                            label="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </MDBCol>
                </MDBRow>

                <MDBInput
                    className="mb-4"
                    type="email"
                    label="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <MDBInput
                    className="mb-4"
                    type="text"
                    label="Phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
                <MDBInput
                    className="mb-4"
                    type="text"
                    label="Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />
                <MDBInput
                    className="mb-4"
                    type="password"
                    label="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <MDBInput
                    className="mb-4"
                    type="password"
                    label="Password cofirm"
                    value={passwordConfirm}
                    onChange={(e) => setPasswordConfirm(e.target.value)}
                />

                <MDBCheckbox
                    wrapperClass="d-flex justify-content-center mb-4"
                    id="form3Example5"
                    label="Do something"
                    defaultChecked
                />

                <MDBBtn className="mb-4" block>
                    Sign up
                </MDBBtn>

                <div className="text-center">
                    <p>
                        Already have an account?
                        <Link to={'/signin'} className="ml-1">
                            Sign in
                        </Link>
                    </p>
                </div>
            </form>
        </div>
    )
}

export default Signup
