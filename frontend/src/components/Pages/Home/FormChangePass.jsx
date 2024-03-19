import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalBody,
    MDBInput
} from 'mdb-react-ui-kit'
import { useNavigate } from 'react-router'
import Button from '../../Common/Button'
import { useState } from 'react'

const FormChangePass = ({ openChangePass, setOpenChangePass }) => {
    const [oldpass, setOldPass] = useState('')
    const [newpass, setNewPass] = useState('')
    const [confirmPass, setConfirmPass] = useState('')
    const navigate = useNavigate()
    const handleChangePass = () => {
        console.log({
            oldpass: oldpass,
            newpass: newpass,
            confirmPass: confirmPass
        })

        setOpenChangePass(false)
    }
    return (
        <MDBModal
            staticBackdrop
            open={openChangePass}
            setOpen={setOpenChangePass}
            tabIndex="-1"
        >
            <MDBModalDialog>
                <MDBModalContent>
                    <MDBModalHeader>
                        <div className="text-2xl font-bold">
                            Change Password
                        </div>
                        <MDBBtn
                            className="btn-close"
                            color="none"
                            onClick={() => setOpenChangePass(false)}
                        ></MDBBtn>
                    </MDBModalHeader>
                    <MDBModalBody className="p-4">
                        <div className="w-full flex flex-col gap-4 text-xl">
                            <MDBInput
                                label="old password"
                                value={oldpass}
                                onChange={(e) => setOldPass(e.target.value)}
                                type="password"
                            />
                            <MDBInput
                                label="new password"
                                value={newpass}
                                onChange={(e) => setNewPass(e.target.value)}
                                type="password"
                            />
                            <MDBInput
                                label="confirm new password"
                                value={confirmPass}
                                onChange={(e) => setConfirmPass(e.target.value)}
                                type="password"
                            />
                        </div>
                        <div className="w-full flex justify-center items-center mt-4">
                            <Button
                                color={'info'}
                                text={'save'}
                                onClick={handleChangePass}
                            />
                        </div>
                    </MDBModalBody>
                </MDBModalContent>
            </MDBModalDialog>
        </MDBModal>
    )
}

export default FormChangePass
