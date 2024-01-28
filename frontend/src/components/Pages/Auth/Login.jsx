import { useEffect, useState } from 'react'
import {
    MDBInput,
    MDBCol,
    MDBRow,
    MDBCheckbox,
    MDBBtn,
    MDBTypography
} from 'mdb-react-ui-kit'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { loginUser } from '../../../redux/api/auth'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleLogin = (e) => {
        e.preventDefault()
        const user = {
            username: username,
            password: password
        }
        loginUser(user, dispatch, navigate)
    }

    useEffect(() => {}, [])
    return (
        <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] border flex-center-y">
            <form className="w-[400px] px-[60px]" onSubmit={handleLogin}>
                <MDBTypography variant="h2" className="text-center mb-4">
                    Log in
                </MDBTypography>
                <MDBInput
                    className="mb-4"
                    type="text"
                    label="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <MDBInput
                    className="mb-4"
                    type="password"
                    label="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <MDBRow className="mb-4">
                    <MDBCol className="d-flex justify-content-center select-none">
                        <MDBCheckbox label="Remember me" defaultChecked />
                    </MDBCol>
                    <MDBCol>
                        <a href="#!">Forgot password?</a>
                    </MDBCol>
                </MDBRow>

                <MDBBtn className="mb-4" block>
                    Log in
                </MDBBtn>
            </form>
            <div className="relative top-0 left-0 overflow-hidden w-[400px] h-[550px]">
                <div
                    className="absolute right-0 top-0 w-[900px] h-full bg-[url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/sections-3.jpg')] bg-cover"
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
                            Sign up and discover great amount of new
                            opportunities!
                        </MDBTypography>
                        <Link to={'/register'} className="mx-auto">
                            <MDBBtn color="white">Register</MDBBtn>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
