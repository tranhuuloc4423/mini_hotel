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
import FirstRow from './FirstRow'
import SecondRow from './SecondRow'
import ThirdRow from './ThirdRow'
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
        <div className="flex flex-col justify-between">
            <FirstRow />
            <SecondRow />
            <ThirdRow />
        </div>
    )
}

export default Dashboard
