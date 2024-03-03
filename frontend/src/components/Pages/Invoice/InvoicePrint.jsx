import { MDBTable, MDBTableBody, MDBTableHead } from 'mdb-react-ui-kit'
import { forwardRef } from 'react'

const InvoicePrint = forwardRef(({ data }, ref) => {
    // const data = props
    console.log('data ', data)
    return (
        <div
            ref={ref}
            className="border-b-4 border-y-4 border-t-red_1 border-b-black p-4"
        >
            <div className="text-center text-2xl font-bold">
                Invoice Details
            </div>
            <div className="flex justify-between my-2">
                <div>
                    <div className="font-bold text-lg">Customer name</div>
                    <div>
                        <span className="font-bold">Phone</span> +1 12345-4569
                    </div>
                    <div>
                        <span className="font-bold">Email</span>{' '}
                        customer@gmail.com
                    </div>
                </div>
                <div>
                    {/* <div>Time : {data.time}</div>
                    <div>Room: {data.room.name}</div> */}
                    <div>BillID: 000001</div>
                </div>
            </div>
            <div>
                <MDBTable bordered align="middle" className="text-center">
                    <MDBTableHead>
                        <tr className="table-primary">
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Amount</th>
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                        <tr>
                            <td className="w-1/4">1</td>
                            <td className="w-1/4">Room price</td>
                            <td className="w-1/4">1</td>
                            <td className="w-1/4">100</td>
                        </tr>
                    </MDBTableBody>
                </MDBTable>
            </div>
            <div className="text-right">
                <span>invoice: </span>
                <span>1000</span>
                <span>$</span>
            </div>
        </div>
    )
})

export default InvoicePrint
