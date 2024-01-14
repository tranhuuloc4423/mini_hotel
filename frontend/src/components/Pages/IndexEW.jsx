import {
    MDBBtn,
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
import { useEffect, useRef, useState } from 'react'
import { DayPicker } from 'react-day-picker'
import 'react-day-picker/dist/style.css'
import icons from '../../utils/icons'

const { MdOutlineDateRange } = icons

const IndexEW = () => {
    const [selected, setSelected] = useState()
    const datepickerRef = useRef(null)
    const calendarRef = useRef(null)
    const [activeDatepicker, setActiveDatepicker] = useState(false)
    const [basicActive, setBasicActive] = useState('tab1')

    const handleIconClick = () => {
        setActiveDatepicker(!activeDatepicker)
        console.log(datepickerRef.current)
    }

    const handleOutsideClick = (event) => {
        if (
            datepickerRef.current &&
            !datepickerRef.current.contains(event.target) &&
            !calendarRef.current.contains(event.target)
        ) {
            setActiveDatepicker(false)
        }
    }

    const handleBasicClick = (value) => {
        if (value === basicActive) {
            return
        }

        setBasicActive(value)
    }

    useEffect(() => {
        document.addEventListener('click', handleOutsideClick)
        return () => {
            document.removeEventListener('click', handleOutsideClick)
        }
    }, [])
    return (
        <div className="main-container">
            <div className="main-header">
                <div className="flex-center-y justify-between gap-2">
                    <MDBTabs className="flex-nowrap gap-2">
                        <MDBTabsItem>
                            <MDBTabsLink onClick={() => handleBasicClick('tab1')} active={basicActive === 'tab1'}>
                                Paid list
                            </MDBTabsLink>
                        </MDBTabsItem>
                        <MDBTabsItem>
                            <MDBTabsLink
                                onClick={() => handleBasicClick('tab2')}
                                active={basicActive === 'tab2'}
                                className="px-6 py-3 m-0"
                            >
                                Paid list
                            </MDBTabsLink>
                        </MDBTabsItem>
                    </MDBTabs>
                    <MDBInput label="Date picker" id="form1" type="text" className="relative">
                        <div ref={datepickerRef} onClick={handleIconClick}>
                            <MdOutlineDateRange
                                className="absolute top-1/2 translate-y-[-50%] right-2 cursor-pointer"
                                size={24}
                            />
                        </div>
                        {activeDatepicker && (
                            <div ref={calendarRef}>
                                <DayPicker
                                    mode="single"
                                    selected={selected}
                                    onSelect={setSelected}
                                    onClick={handleOutsideClick}
                                    className="absolute left-0 mx-0 bg-white shadow-md rounded-md p-2"
                                />
                            </div>
                        )}
                    </MDBInput>
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
                    <MDBBtn color="info">View</MDBBtn>
                    <MDBBtn className="me-1" color="success">
                        Save
                    </MDBBtn>
                </div>
            </div>
            <div className="main-body">
                <MDBTabsContent>
                    <MDBTabsPane open={basicActive === 'tab1'}>
                        <MDBTable align="middle">
                            <MDBTableHead>
                                <tr className="table-primary">
                                    <th scope="col">Name</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Position</th>
                                </tr>
                            </MDBTableHead>
                            <MDBTableBody>
                                <tr>
                                    <td>
                                        <p className="fw-normal mb-1">Software engineer</p>
                                        <p className="text-muted mb-0">IT department</p>
                                    </td>
                                    <td>
                                        <MDBInput label="Number input" id="typeNumber" type="number" />
                                    </td>
                                    <td>
                                        {' '}
                                        <MDBInput label="Number input" id="typeNumber" type="number" />
                                    </td>
                                    <td>
                                        <MDBBtn color="link" rounded size="sm">
                                            Edit
                                        </MDBBtn>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p className="fw-normal mb-1">Consultant</p>
                                        <p className="text-muted mb-0">Finance</p>
                                    </td>
                                    <td>
                                        <MDBInput label="Number input" id="typeNumber" type="number" />
                                    </td>
                                    <td>
                                        {' '}
                                        <MDBInput label="Number input" id="typeNumber" type="number" />
                                    </td>
                                    <td>
                                        <MDBBtn color="link" rounded size="sm">
                                            Edit
                                        </MDBBtn>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p className="fw-normal mb-1">Designer</p>
                                        <p className="text-muted mb-0">UI/UX</p>
                                    </td>
                                    <td>
                                        <MDBInput label="Number input" id="typeNumber" type="number" size="md" />
                                    </td>
                                    <td>
                                        {' '}
                                        <MDBInput label="Number input" id="typeNumber" type="number" />
                                    </td>
                                    <td>
                                        <MDBBtn color="link" rounded size="sm">
                                            Edit
                                        </MDBBtn>
                                    </td>
                                </tr>
                            </MDBTableBody>
                        </MDBTable>
                    </MDBTabsPane>
                    <MDBTabsPane open={basicActive === 'tab2'}>lack money list</MDBTabsPane>
                    <MDBTabsPane open={basicActive === 'tab3'}>Revenue</MDBTabsPane>
                    <MDBTabsPane open={basicActive === 'tab4'}>bill list</MDBTabsPane>
                </MDBTabsContent>
            </div>
        </div>
    )
}

export default IndexEW
