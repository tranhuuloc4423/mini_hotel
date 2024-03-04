import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit'

import { RiArrowDownSLine } from 'react-icons/ri'
const Table = ({ extraClass, headers, body }) => {
    return (
        <MDBTable
            bordered
            align="middle"
            className={`text-center ${extraClass}`}
        >
            <MDBTableHead>
                <tr className="table-primary select-none">
                    {headers?.map((item) => (
                        <th
                            key={item.name}
                            scope="col"
                            className="relative cursor-pointer"
                            onClick={item?.onClick}
                        >
                            <span>{item.name}</span>
                            {'sort' in item && (
                                <span
                                    className={`inline-block absolute right-2 ${
                                        item.sort ? '' : 'rotate-180'
                                    }`}
                                >
                                    <RiArrowDownSLine size={24} />
                                </span>
                            )}
                        </th>
                    ))}
                </tr>
            </MDBTableHead>
            <MDBTableBody>{body}</MDBTableBody>
        </MDBTable>
    )
}

export default Table
