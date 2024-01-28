import { useState } from 'react'
import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody
} from 'mdb-react-ui-kit'
import StepOne from './StepOne'
import StepTwo from './StepTwo'
import StepThree from './StepThree'

const FormAddCustomer = ({ openModal, setOpenModal }) => {
    const [step, setStep] = useState(1)
    const toggleOpen = () => setOpenModal(!openModal)

    return (
        <MDBModal
            staticBackdrop
            open={openModal}
            setOpen={setOpenModal}
            tabIndex="-1"
        >
            <MDBModalDialog size="xl">
                <MDBModalContent>
                    <MDBModalHeader>
                        <MDBModalTitle className="text-2xl">
                            Add Customer
                        </MDBModalTitle>
                        <MDBBtn
                            className="btn-close"
                            color="none"
                            onClick={toggleOpen}
                        ></MDBBtn>
                    </MDBModalHeader>
                    <MDBModalBody className="p-4">
                        {/* step 1 */}
                        {step === 1 && <StepOne setStep={setStep} />}
                        {/* step 2 */}
                        {step === 2 && <StepTwo setStep={setStep} />}
                        {/* step 3 */}
                        {step === 3 && <StepThree setStep={setStep} />}
                    </MDBModalBody>
                </MDBModalContent>
            </MDBModalDialog>
        </MDBModal>
    )
}

export default FormAddCustomer
