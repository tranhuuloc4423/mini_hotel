import { useEffect, useState } from 'react'
import Box from '../../Common/Box'
import Table from '../../Common/Table'
import Chart from '../../Common/Chart'
import {
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane
} from 'mdb-react-ui-kit'
import { getRooms } from '../../../redux/api/room'
import { useDispatch } from 'react-redux'
import { getAllEmenities } from '../../../redux/api/amenities'
import { getAllCustomers } from '../../../redux/api/customer'
const Dashboard = () => {
    const [tabActive, setTabActive] = useState('tab1')
    const dispatch = useDispatch()

    const handleClick = (value) => {
        if (value === tabActive) {
            return
        }

        setTabActive(value)
    }
    useEffect(() => {
        // call api when first load
        getRooms(dispatch)
        getAllEmenities(dispatch)
        getAllCustomers(dispatch)
    }, [])

    return (
        <div className="grid grid-cols-2 grid-rows-2 w-full gap-10">
            <Box title={'Revenue'}>
                <div className="w-[95%] mx-auto">
                    <Chart />
                </div>
            </Box>
            <Box title={'List of available rooms'}>
                <Table />
            </Box>
            <Box title={'Customer list lacks money'}>
                <Table />
            </Box>
        </div>
    )
}

export default Dashboard
