import { useEffect, useRef, useState } from 'react'
import { MDBInput, MDBCol, MDBRow, MDBCheckbox, MDBBtn, MDBIcon, MDBTypography } from 'mdb-react-ui-kit'

const Signin = () => {
    const [loginRegisterActive, setLoginRegisterActive] = useState('register')
    const formRef = useRef(null)
    const mainRef = useRef(null)
    let paddingHeight = 0
    const handleLoginRegisterClick = (value) => {
        // ...
        setLoginRegisterActive(value)
    }

    useEffect(() => {}, [])
    return (
        <div ref={mainRef} className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]  border">
            <form ref={formRef} className="w-[400px] px-[60px]">
                <MDBTypography variant="h2" className="text-center mb-4">
                    Sign in
                </MDBTypography>
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
            </form>
            <div className="relative top-0 left-0 overflow-hidden w-[400px] h-[550px]">
                <div
                    className="absolute right-0 top-0 w-[900px] h-full bg-[url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/sections-3.jpg')] bg-cover "
                    alt=""
                ></div>
                <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)]">
                    <div
                        className={`absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-white flex flex-col gap-4`}
                    >
                        <MDBTypography variant="h3" className="text-center">
                            New here
                        </MDBTypography>
                        <MDBTypography variant="h6" className="text-center">
                            Sign up and discover great amount of new opportunities!
                        </MDBTypography>
                        <MDBBtn className="mx-auto" color="white">
                            Sign up
                        </MDBBtn>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signin
