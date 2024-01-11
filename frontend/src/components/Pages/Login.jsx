import { useState } from 'react'
import { MDBInput, MDBCol, MDBRow, MDBCheckbox, MDBBtn, MDBIcon } from 'mdb-react-ui-kit'

const Login = () => {
    const [loginRegisterActive, setLoginRegisterActive] = useState('register')

    const handleLoginRegisterClick = (value) => {
        // ...
        setLoginRegisterActive(value)
    }
    return (
        <form className="w-[380px] absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
            <MDBInput className="mb-4" type="email" id="form2Example1" label="Email" />
            <MDBInput className="mb-4" type="password" id="form2Example2" label="Password" />

            <MDBRow className="mb-4">
                <MDBCol className="d-flex justify-content-center select-none">
                    <MDBCheckbox id="form2Example3" label="Remember me" defaultChecked />
                </MDBCol>
                <MDBCol>
                    <a href="#!">Forgot password?</a>
                </MDBCol>
            </MDBRow>

            <MDBBtn type="submit" className="mb-4" block>
                Sign in
            </MDBBtn>

            <div className="text-center">
                <p>
                    Not a member? <a href="#!">Register</a>
                </p>
                <p>or sign up with:</p>

                <MDBBtn floating color="secondary" className="mx-1">
                    <MDBIcon fab icon="facebook-f" />
                </MDBBtn>

                <MDBBtn floating color="secondary" className="mx-1">
                    <MDBIcon fab icon="google" />
                </MDBBtn>

                <MDBBtn floating color="secondary" className="mx-1">
                    <MDBIcon fab icon="twitter" />
                </MDBBtn>

                <MDBBtn floating color="secondary" className="mx-1">
                    <MDBIcon fab icon="github" />
                </MDBBtn>
            </div>
        </form>
    )
}

export default Login
