import { useEffect, useState } from 'react'
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
import { useDispatch, useSelector } from 'react-redux'
import { setEditId } from '../../../redux/slices/customerSlice'

const FormAddCustomer = ({ openModal, setOpenModal }) => {
    const [step, setStep] = useState(1)
    const { edit } = useSelector((state) => state.customer)
    const toggleOpen = () => setOpenModal(!openModal)
    const dispatch = useDispatch()

    useEffect(() => {
        if (!openModal) {
            dispatch(setEditId(null))
        }
    }, [openModal])

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
                        <MDBModalTitle className="text-2xl font-bold uppercase">
                            {edit ? 'Edit Customer' : 'Add Customer'}
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
                        {step === 3 && (
                            <StepThree
                                setStep={setStep}
                                setOpenModal={setOpenModal}
                            />
                        )}
                    </MDBModalBody>
                </MDBModalContent>
            </MDBModalDialog>
        </MDBModal>
    )
}

export default FormAddCustomer
