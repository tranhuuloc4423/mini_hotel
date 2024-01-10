import { useState } from 'react'
import Table from '../Table'
import Chart from '../Chart'
const Dashboard = () => {
    const [tabActive, setTabActive] = useState(0)
    return (
        <div className="grid grid-cols-2 grid-rows-2 w-full gap-10">
            <Table title={'Room state'}>
                <div className="flex mb-2">
                    <span
                        onClick={() => setTabActive(0)}
                        className={`px-4 py-3 select-none text-xl hover:bg-gray-200 cursor-pointer ${
                            tabActive == 0 ? 'bg-gray-200 border-b-4 border-gray-800' : 'bg-transparent'
                        }`}
                    >
                        available
                    </span>
                    <span
                        onClick={() => setTabActive(1)}
                        className={`px-4 py-3 select-none text-xl hover:bg-gray-200 cursor-pointer ${
                            tabActive == 1 ? 'bg-gray-200 border-b-4 border-gray-800' : 'bg-transparent'
                        }`}
                    >
                        renting
                    </span>
                </div>
                <div>{tabActive == 0 ? <>Available list</> : <>renting list</>}</div>
            </Table>
            <Table title={'Revenue'}>
                <div className="w-[95%] mx-auto">
                    <Chart />
                </div>
            </Table>
            <Table title={'List of available rooms'} />
            <Table title={'Customer list lacks money'} />
        </div>
    )
}

export default Dashboard
