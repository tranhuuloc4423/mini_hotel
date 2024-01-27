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
import DatePicker from '../../Common/DatePicker'
import icons from '../../../utils/icons'
import Button from '../../Common/Button'
import StepOne from './StepOne'
import StepTwo from './StepTwo'
import StepThree from './StepThree'

const { BsSave, IoIosArrowBack, IoIosArrowForward } = icons

const FormAddCustomer = ({ openModal, setOpenModal }) => {
    const [step, setStep] = useState(1)
    const toggleOpen = () => setOpenModal(!openModal)

    const getNavigationButtons = () => {
        if (step === 1) {
            return (
                <Button
                    color={'info'}
                    text={'next'}
                    icon={<IoIosArrowForward size={20} />}
                    onClick={() => setStep(2)}
                    end
                />
            )
        } else if (step === 2) {
            return (
                <>
                    <Button
                        color={'info'}
                        text={'previous'}
                        icon={<IoIosArrowBack size={20} />}
                        onClick={() => setStep(1)}
                    />
                    <Button
                        color={'info'}
                        text={'next'}
                        icon={<IoIosArrowForward size={20} />}
                        onClick={() => setStep(3)}
                        end
                    />
                </>
            )
        } else {
            return (
                <>
                    <Button
                        color={'info'}
                        text={'previous'}
                        icon={<IoIosArrowBack size={20} />}
                        onClick={() => setStep(2)}
                    />
                    <Button
                        color={'info'}
                        text={'save'}
                        icon={<BsSave size={20} />}
                    />
                </>
            )
        }
    }

    return (
        <MDBModal open={openModal} setOpen={setOpenModal} tabIndex="-1">
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
                        {step === 1 && <StepOne />}
                        {/* step 2 */}
                        {step === 2 && <StepTwo />}
                        {/* step 3 */}
                        {step === 3 && <StepThree />}
                    </MDBModalBody>

                    <MDBModalFooter>{getNavigationButtons()}</MDBModalFooter>
                </MDBModalContent>
            </MDBModalDialog>
        </MDBModal>
    )
}

export default FormAddCustomer
