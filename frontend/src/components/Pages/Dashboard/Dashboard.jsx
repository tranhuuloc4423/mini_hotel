import { useEffect, useState } from 'react'
import { getRooms } from '../../../redux/api/room'
import { useDispatch } from 'react-redux'
import { getAllEmenities } from '../../../redux/api/amenities'
import { getAllCustomers } from '../../../redux/api/customer'
import FirstRow from './FirstRow'
import SecondRow from './SecondRow'
import ThirdRow from './ThirdRow'
const Dashboard = () => {
    const dispatch = useDispatch()
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
