import DatePicker from '../../Common/DatePicker'
import { MDBInput, MDBRadio } from 'mdb-react-ui-kit'

const StepOne = () => {
    return (
        <div>
            <div className="text-lg font-semibold pb-4">
                Step 1: {"Customer's infomation"}
            </div>
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
                <MDBInput label="ID Card" type="text" />
                <MDBInput label="Phone Number" type="text" />
                <MDBInput label="Email" type="text" />
                <MDBInput label="Address" type="text" />
            </div>
        </div>
    )
}

export default StepOne
