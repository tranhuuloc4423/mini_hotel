import {
    MDBDropdown,
    MDBDropdownMenu,
    MDBDropdownToggle,
    MDBDropdownItem,
    MDBInput,
    MDBTable,
    MDBTableHead,
    MDBTableBody,
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane
} from 'mdb-react-ui-kit'
import DatePicker from '../DatePicker'
import { useState } from 'react'
import icons from '../../utils/icons'
import Button from '../Button'

const { TbInfoSquare, BsSave } = icons
const IndexEW = () => {
    const [basicActive, setBasicActive] = useState('tab1')

    const handleBasicClick = (value) => {
        if (value === basicActive) {
            return
        }
        setBasicActive(value)
    }
    return (
        <div className="main-container">
            <div className="main-header">
                <div className="flex-center-y justify-between gap-2">
                    <MDBTabs className="flex-nowrap gap-2">
                        <MDBTabsItem>
                            <MDBTabsLink onClick={() => handleBasicClick('tab1')} active={basicActive === 'tab1'}>
                                Water Index
                            </MDBTabsLink>
                        </MDBTabsItem>
                        <MDBTabsItem>
                            <MDBTabsLink
                                onClick={() => handleBasicClick('tab2')}
                                active={basicActive === 'tab2'}
                                className="px-6 py-3 m-0"
                            >
                                Electricity index
                            </MDBTabsLink>
                        </MDBTabsItem>
                    </MDBTabs>
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
                </div>
                <div className="flex-center-y gap-2">
                    <Button color={'info'} text={'View'} icon={<TbInfoSquare size={20} />} />
                    <Button color={'success'} text={'Save'} icon={<BsSave size={20} />} />
                </div>
            </div>
            <div className="main-body">
                <MDBTabsContent>
                    <MDBTabsPane open={basicActive === 'tab1'}>
                        <MDBTable align="middle">
                            <MDBTableHead>
                                <tr className="table-primary">
                                    <th scope="col">{"Name's room"}</th>
                                    <th scope="col">Old number</th>
                                    <th scope="col">New number</th>
                                    <th scope="col">Total</th>
                                </tr>
                            </MDBTableHead>
                            <MDBTableBody>
                                <tr>
                                    <td>
                                        <p className="fw-normal mb-1">Software engineer</p>
                                        <p className="text-muted mb-0">IT department</p>
                                    </td>
                                    <td>
                                        <MDBInput label="Old number" id="typeNumber" type="number" />
                                    </td>
                                    <td>
                                        <MDBInput label="New number" id="typeNumber" type="number" />
                                    </td>
                                    <td>total</td>
                                </tr>
                                <tr>
                                    <td>
                                        <p className="fw-normal mb-1">Consultant</p>
                                        <p className="text-muted mb-0">Finance</p>
                                    </td>
                                    <td>
                                        <MDBInput label="Old number" id="typeNumber" type="number" />
                                    </td>
                                    <td>
                                        <MDBInput label="New number" id="typeNumber" type="number" />
                                    </td>
                                    <td>total</td>
                                </tr>
                                <tr>
                                    <td>
                                        <p className="fw-normal mb-1">Designer</p>
                                        <p className="text-muted mb-0">UI/UX</p>
                                    </td>
                                    <td>
                                        <MDBInput label="Old number" id="typeNumber" type="number" />
                                    </td>
                                    <td>
                                        <MDBInput label="New number" id="typeNumber" type="number" />
                                    </td>
                                    <td>total</td>
                                </tr>
                            </MDBTableBody>
                        </MDBTable>
                    </MDBTabsPane>
                    <MDBTabsPane open={basicActive === 'tab2'}>
                        <MDBTable align="middle">
                            <MDBTableHead>
                                <tr className="table-primary">
                                    <th scope="col">{"Name's room"}</th>
                                    <th scope="col">Old number</th>
                                    <th scope="col">New number</th>
                                    <th scope="col">Total</th>
                                </tr>
                            </MDBTableHead>
                            <MDBTableBody>
                                <tr>
                                    <td>
                                        <p className="fw-normal mb-1">Software engineer</p>
                                        <p className="text-muted mb-0">IT department</p>
                                    </td>
                                    <td>
                                        <MDBInput label="Old number" id="typeNumber" type="number" />
                                    </td>
                                    <td>
                                        <MDBInput label="New number" id="typeNumber" type="number" />
                                    </td>
                                    <td>total</td>
                                </tr>
                                <tr>
                                    <td>
                                        <p className="fw-normal mb-1">Consultant</p>
                                        <p className="text-muted mb-0">Finance</p>
                                    </td>
                                    <td>
                                        <MDBInput label="Old number" id="typeNumber" type="number" />
                                    </td>
                                    <td>
                                        <MDBInput label="New number" id="typeNumber" type="number" />
                                    </td>
                                    <td>total</td>
                                </tr>
                                <tr>
                                    <td>
                                        <p className="fw-normal mb-1">Designer</p>
                                        <p className="text-muted mb-0">UI/UX</p>
                                    </td>
                                    <td>
                                        <MDBInput label="Old number" id="typeNumber" type="number" />
                                    </td>
                                    <td>
                                        <MDBInput label="New number" id="typeNumber" type="number" />
                                    </td>
                                    <td>total</td>
                                </tr>
                            </MDBTableBody>
                        </MDBTable>
                    </MDBTabsPane>
                </MDBTabsContent>
            </div>
        </div>
    )
}

export default IndexEW
