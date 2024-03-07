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
                    <div className="font-bold text-lg">
                        <span className="font-bold">Customer : </span>
                        <span>{data?.customer.fullname}</span>
                    </div>
                    <div>
                        <span className="font-bold">Phone : </span>
                        <span>{data?.customer.phonenumber}</span>
                    </div>
                    <div>
                        <span className="font-bold">Email : </span>
                        <span>{data?.customer.email}</span>
                    </div>
                </div>
                <div>
                    <div>Time : {data.time}</div>
                    <div>Room: {data.room.name}</div>
                    <div>BillID: 000001</div>
                </div>
            </div>
            <div className="w-full">
                <MDBTable bordered align="middle" className="text-center">
                    <MDBTableHead>
                        <tr className="table-primary">
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Old</th>
                            <th scope="col">New</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Amount</th>
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                        <tr>
                            <td className="w-1/5">1</td>
                            <td className="w-1/5">Room price</td>
                            <td className="w-1/5"></td>
                            <td className="w-1/5"></td>
                            <td className="w-1/5">1</td>
                            <td className="w-1/5">{data?.room.price}</td>
                        </tr>
                        <tr>
                            <td className="w-1/5">2</td>
                            <td className="w-1/5">Water</td>
                            <td className="w-1/5">{data?.water.old}</td>
                            <td className="w-1/5">{data?.water.new}</td>
                            <td className="w-1/5">{data?.water.use}</td>
                            <td className="w-1/5">{data?.water.total}</td>
                        </tr>
                        <tr>
                            <td className="w-1/5">3</td>
                            <td className="w-1/5">Electricity</td>
                            <td className="w-1/5">{data?.electricity.old}</td>
                            <td className="w-1/5">{data?.electricity.new}</td>
                            <td className="w-1/5">{data?.electricity.use}</td>
                            <td className="w-1/5">{data?.electricity.total}</td>
                        </tr>
                        {data?.others.map((item) => {
                            let count = 3
                            return (
                                <tr key={item.name}>
                                    <td className="w-1/5">{++count}</td>
                                    <td className="w-1/5">{item.name}</td>
                                    <td className="w-1/5"></td>
                                    <td className="w-1/5"></td>
                                    <td className="w-1/5">{item?.quantity}</td>
                                    <td className="w-1/5">
                                        {item?.otherTotal}
                                    </td>
                                </tr>
                            )
                        })}
                    </MDBTableBody>
                </MDBTable>
            </div>
            <div className="text-right text-2xl">
                <span className="font-bold">Invoice: </span>
                <span>{data?.total}</span>
                <span>$</span>
            </div>
        </div>
    )
})

export default InvoicePrint
