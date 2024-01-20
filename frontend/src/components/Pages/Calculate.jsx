import {
    MDBDropdown,
    MDBDropdownMenu,
    MDBDropdownToggle,
    MDBDropdownItem,
    MDBTable,
    MDBTableHead,
    MDBTableBody
} from 'mdb-react-ui-kit'
import DatePicker from '../DatePicker'
import icons from '../../utils/icons'
import Button from '../Button'

const { LuCalculator, TbInfoSquare, FaPrint, CgRemoveR } = icons

const Calculate = () => {
    return (
        <div className="main-container">
            <div className="main-header">
                <div className="flex-center-y gap-2">
                    <DatePicker label={'Date'} />
                    <div className="flex-center-y gap-2">
                        <span>state</span>
                        <MDBDropdown>
                            <MDBDropdownToggle color="secondary">State</MDBDropdownToggle>
                            <MDBDropdownMenu>
                                <MDBDropdownItem link>Menu item</MDBDropdownItem>
                                <MDBDropdownItem link>Menu item</MDBDropdownItem>
                                <MDBDropdownItem link>Menu item</MDBDropdownItem>
                            </MDBDropdownMenu>
                        </MDBDropdown>
                    </div>
                    <div className="flex-center-y gap-2">
                        <span>state</span>
                        <MDBDropdown>
                            <MDBDropdownToggle color="secondary">State</MDBDropdownToggle>
                            <MDBDropdownMenu>
                                <MDBDropdownItem link>Menu item</MDBDropdownItem>
                                <MDBDropdownItem link>Menu item</MDBDropdownItem>
                                <MDBDropdownItem link>Menu item</MDBDropdownItem>
                            </MDBDropdownMenu>
                        </MDBDropdown>
                    </div>
                    <div className="flex-center-y gap-2">
                        <span>state</span>
                        <MDBDropdown>
                            <MDBDropdownToggle color="secondary">State</MDBDropdownToggle>
                            <MDBDropdownMenu>
                                <MDBDropdownItem link>Menu item</MDBDropdownItem>
                                <MDBDropdownItem link>Menu item</MDBDropdownItem>
                                <MDBDropdownItem link>Menu item</MDBDropdownItem>
                            </MDBDropdownMenu>
                        </MDBDropdown>
                    </div>
                </div>
                <div className="flex-center-y gap-2">
                    <Button color={'success'} text={'calculate'} icon={<LuCalculator size={20} />} />
                    <Button color={'info'} text={'view'} icon={<TbInfoSquare size={20} />} />
                </div>
            </div>
            <div className="main-body">
                <MDBTable align="middle">
                    <MDBTableHead>
                        <tr className="table-primary">
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Paid</th>
                            <th scope="col">Remain</th>
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                        <tr>
                            <td>
                                <p className="fw-normal mb-1">room name</p>
                            </td>
                            <td>444</td>
                            <td>444</td>
                            <td>
                                <Button color={'info'} text={'print'} icon={<FaPrint size={20} />} />
                                <Button color={'danger'} text={'delete'} icon={<CgRemoveR size={20} />} />
                            </td>
                        </tr>
                    </MDBTableBody>
                </MDBTable>
            </div>
        </div>
    )
}

export default Calculate
