import {
    MDBBtn,
    MDBDropdown,
    MDBDropdownMenu,
    MDBDropdownToggle,
    MDBDropdownItem,
    MDBInput,
    MDBTable,
    MDBTableHead,
    MDBTableBody
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

    useEffect(() => {
        document.addEventListener('click', handleOutsideClick)
        return () => {
            document.removeEventListener('click', handleOutsideClick)
        }
    }, [])
    return (
        <div className="main-container">
            <div className="main-header">
                <div className="flex-center-y gap-2">
                    <div className="flex-center-y gap-2">
                        <div className="">
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
                </div>
                <div className="flex-center-y gap-2">
                    <MDBBtn color="info">View</MDBBtn>
                    <MDBBtn className="me-1" color="success">
                        Save
                    </MDBBtn>
                </div>
            </div>
            <div className="main-body">
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
            </div>
        </div>
    )
}

export default IndexEW
