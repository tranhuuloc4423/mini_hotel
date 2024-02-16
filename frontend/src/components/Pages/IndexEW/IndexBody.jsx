import React from 'react'
import {
    MDBTable,
    MDBTableHead,
    MDBTableBody,
    MDBTabsContent,
    MDBTabsPane,
    MDBInput
} from 'mdb-react-ui-kit'

const IndexBody = () => {
    return (
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
                                <p className="fw-normal mb-1">
                                    Software engineer
                                </p>
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
                            <td className="w-1/4">
                                <p className="fw-normal mb-1">
                                    Software engineer
                                </p>
                            </td>
                            <td className="w-1/4">
                                <MDBInput label="Old number" type="number" />
                            </td>
                            <td className="w-1/4">
                                <MDBInput label="New number" type="number" />
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
