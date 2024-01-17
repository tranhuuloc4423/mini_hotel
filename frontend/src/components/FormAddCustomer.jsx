import { useState } from 'react'
import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
    MDBInput,
    MDBRadio,
    MDBBadge,
    MDBTable,
    MDBTableHead,
    MDBTableBody,
    MDBCheckbox
} from 'mdb-react-ui-kit'
import DatePicker from './DatePicker'

const FormAddCustomer = ({ openModal, setOpenModal }) => {
    const [step, setStep] = useState(1)
    const toggleOpen = () => setOpenModal(!openModal)

    const getNavigationButtons = () => {
        if (step === 1) {
            return <MDBBtn onClick={() => setStep(2)}>Next step</MDBBtn>
        } else if (step === 2) {
            return (
                <>
                    <MDBBtn onClick={() => setStep(1)}>Previous step</MDBBtn>
                    <MDBBtn onClick={() => setStep(3)}>Next step</MDBBtn>
                </>
            )
        } else {
            return (
                <>
                    <MDBBtn onClick={() => setStep(2)}>Previous step</MDBBtn>
                    <MDBBtn>Save changes</MDBBtn>
                </>
            )
        }
    }

    return (
        <MDBModal open={openModal} setOpen={setOpenModal} tabIndex="-1">
            <MDBModalDialog size="xl">
                <MDBModalContent>
                    <MDBModalHeader>
                        <MDBModalTitle className="text-2xl">Add Customer</MDBModalTitle>
                        <MDBBtn className="btn-close" color="none" onClick={toggleOpen}></MDBBtn>
                    </MDBModalHeader>
                    <MDBModalBody className="p-4">
                        {step === 1 && (
                            <>
                                <div className="text-lg font-semibold pb-4">Step 1: {"Customer's infomation"}</div>
                                <div className="border-2 border-black_1 flex-1 p-4 flex flex-col gap-3">
                                    <MDBInput label="Full Name" id="form1" type="text" />
                                    <div className="flex flex-2">
                                        <MDBRadio
                                            name="inlineRadio"
                                            id="inlineRadio1"
                                            value="male"
                                            label="Male"
                                            inline
                                        />
                                        <MDBRadio
                                            name="inlineRadio"
                                            id="inlineRadio2"
                                            value="female"
                                            label="Female"
                                            inline
                                        />
                                    </div>
                                    <DatePicker label={'DoB'} />
                                    <MDBInput label="ID Card" id="form1" type="text" />
                                    <MDBInput label="Phone Number" id="form1" type="text" />
                                    <MDBInput label="Email" id="form1" type="text" />
                                    <MDBInput label="Address" id="form1" type="text" />
                                </div>
                            </>
                        )}
                        {/* step 2 */}
                        {step === 2 && (
                            <>
                                <div className="text-lg font-semibold pb-4">Step 2: {'Service'}</div>
                                <MDBTable align="middle">
                                    <MDBTableHead>
                                        <tr>
                                            <th scope="col">Name</th>
                                            <th scope="col">Price</th>
                                            <th scope="col">Quantity</th>
                                            <th scope="col">Check</th>
                                        </tr>
                                    </MDBTableHead>
                                    <MDBTableBody>
                                        <tr>
                                            <td>
                                                <p className="fw-normal mb-1">Software engineer</p>
                                            </td>
                                            <td>
                                                <MDBBadge color="success" pill>
                                                    Active
                                                </MDBBadge>
                                            </td>
                                            <td>Senior</td>
                                            <td>
                                                <MDBCheckbox
                                                    name="ckb1"
                                                    value=""
                                                    id="1"
                                                    label="Checked checkbox"
                                                    defaultChecked
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <p className="fw-normal mb-1">Consultant</p>
                                            </td>
                                            <td>
                                                <MDBBadge color="primary" pill>
                                                    Onboarding
                                                </MDBBadge>
                                            </td>
                                            <td>Junior</td>
                                            <td>
                                                <MDBCheckbox
                                                    name="flexCheck"
                                                    value=""
                                                    id="2"
                                                    label="Checked checkbox"
                                                    defaultChecked
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <p className="fw-normal mb-1">Designer</p>
                                            </td>
                                            <td>
                                                <MDBBadge color="warning" pill>
                                                    Awaiting
                                                </MDBBadge>
                                            </td>
                                            <td>Senior</td>
                                            <td>
                                                <MDBCheckbox
                                                    name="flexCheck"
                                                    value=""
                                                    id="3"
                                                    label="Checked checkbox"
                                                    defaultChecked
                                                />
                                            </td>
                                        </tr>
                                    </MDBTableBody>
                                </MDBTable>
                            </>
                        )}

                        {/* step 3 */}
                        {step === 3 && (
                            <>
                                <div className="text-lg font-semibold pb-4">Step 3: {'Member'}</div>
                                <MDBTable align="middle">
                                    <MDBTableHead>
                                        <tr>
                                            <th scope="col">Name</th>
                                            <th scope="col">DoB</th>
                                            <th scope="col">Sex</th>
                                            <th scope="col">ID Card</th>
                                            <th scope="col">Phone number</th>
                                            <th scope="col">
                                                <MDBBtn color="success">Add</MDBBtn>
                                            </th>
                                        </tr>
                                    </MDBTableHead>
                                    <MDBTableBody>
                                        <tr>
                                            <td>
                                                <MDBInput label="Name" id="form1" type="text" />
                                            </td>
                                            <td>
                                                <DatePicker />
                                            </td>
                                            <td>
                                                <div className="flex-center-y">
                                                    <MDBRadio
                                                        name="inlineRadio"
                                                        id="inlineRadio1"
                                                        value="male"
                                                        label="Male"
                                                        inline
                                                    />
                                                    <MDBRadio
                                                        name="inlineRadio"
                                                        id="inlineRadio2"
                                                        value="female"
                                                        label="Female"
                                                        inline
                                                    />
                                                </div>
                                            </td>
                                            <td>
                                                <MDBInput label="ID Card" id="form1" type="text" />
                                            </td>
                                            <td>
                                                <MDBInput label="Phone number" id="form1" type="text" />
                                            </td>
                                            <td>
                                                <MDBBtn color="danger">Delete</MDBBtn>
                                            </td>
                                        </tr>
                                    </MDBTableBody>
                                </MDBTable>
                            </>
                        )}
                    </MDBModalBody>

                    <MDBModalFooter>{getNavigationButtons()}</MDBModalFooter>
                </MDBModalContent>
            </MDBModalDialog>
        </MDBModal>
    )
}

export default FormAddCustomer
