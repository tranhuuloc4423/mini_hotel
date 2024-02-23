import { useEffect } from 'react'
import {
    MDBTable,
    MDBTableHead,
    MDBTableBody,
    MDBTabsContent,
    MDBTabsPane,
    MDBInput
} from 'mdb-react-ui-kit'
import { useSelector } from 'react-redux'

const IndexBody = () => {
    const { activeTab } = useSelector((state) => state.index)
    const { amenities } = useSelector((state) => state.amenities)

    useEffect(() => {
        // console.log(activeTab)
    }, [activeTab])
    return (
        <MDBTabsContent>
            <MDBTabsPane
                open={amenities?.find(
                    (item, index) =>
                        item?.mandatory === true && item?.name === activeTab
                )}
            >
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
                                <p className="fw-normal mb-1">Room name</p>
                                <p className="text-muted mb-0">IT department</p>
                            </td>
                            <td>
                                <MDBInput
                                    label="Old number"
                                    id="typeNumber"
                                    type="number"
                                />
                            </td>
                            <td>
                                <MDBInput
                                    label="New number"
                                    id="typeNumber"
                                    type="number"
                                />
                            </td>
                            <td>total</td>
                        </tr>
                        <tr>
                            <td>
                                <p className="fw-normal mb-1">Consultant</p>
                                <p className="text-muted mb-0">Finance</p>
                            </td>
                            <td>
                                <MDBInput
                                    label="Old number"
                                    id="typeNumber"
                                    type="number"
                                />
                            </td>
                            <td>
                                <MDBInput
                                    label="New number"
                                    id="typeNumber"
                                    type="number"
                                />
                            </td>
                            <td>total</td>
                        </tr>
                        <tr>
                            <td>
                                <p className="fw-normal mb-1">Designer</p>
                                <p className="text-muted mb-0">UI/UX</p>
                            </td>
                            <td>
                                <MDBInput
                                    label="Old number"
                                    id="typeNumber"
                                    type="number"
                                />
                            </td>
                            <td>
                                <MDBInput
                                    label="New number"
                                    id="typeNumber"
                                    type="number"
                                />
                            </td>
                            <td>total</td>
                        </tr>
                    </MDBTableBody>
                </MDBTable>
            </MDBTabsPane>
            <MDBTabsPane
                open={amenities?.find(
                    (item, index) =>
                        item?.mandatory === false && item?.name === activeTab
                )}
            >
                <MDBTable align="middle">
                    <MDBTableHead>
                        <tr className="table-primary">
                            <th scope="col">{"Name's room"}</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Total</th>
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                        <tr>
                            <td className="w-1/4">
                                <p className="fw-normal mb-1">
                                    Software engineer
                                </p>
                            </td>
                            <td className="w-1/4">
                                <MDBInput label="Old number" type="number" />
                            </td>
                            <td className="w-1/4">total</td>
                        </tr>
                    </MDBTableBody>
                </MDBTable>
            </MDBTabsPane>
        </MDBTabsContent>
    )
}

export default IndexBody
