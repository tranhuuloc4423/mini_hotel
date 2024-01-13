import { useState } from 'react'
import { MDBInput, MDBCol, MDBRow, MDBCheckbox, MDBBtn, MDBIcon } from 'mdb-react-ui-kit'

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
        <form className="w-[380px] absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
            <MDBRow className="mb-4">
                <MDBCol>
                    <MDBInput id="form3Example1" label="First name" />
                </MDBCol>
                <MDBCol>
                    <MDBInput id="form3Example2" label="Last name" />
                </MDBCol>
            </MDBRow>
            <MDBInput className="mb-4" type="email" id="form3Example3" label="Email address" />
            <MDBInput className="mb-4" type="password" id="form3Example4" label="Password" />

            <MDBCheckbox
                wrapperClass="d-flex justify-content-center mb-4"
                id="form3Example5"
                label="Subscribe to our newsletter"
                defaultChecked
            />

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

export default Signup
