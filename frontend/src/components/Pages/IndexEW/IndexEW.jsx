import {
    MDBDropdown,
    MDBDropdownMenu,
    MDBDropdownToggle,
    MDBDropdownItem,
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink
} from 'mdb-react-ui-kit'
import DatePicker from '../../Common/DatePicker'
import { useEffect, useState } from 'react'
import icons from '../../../utils/icons'
import Button from '../../Common/Button'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveTab } from '../../../redux/slices/indexSlice'
import IndexBody from './IndexBody'

const { TbInfoSquare, BsSave } = icons
const IndexEW = () => {
    const { activeTab } = useSelector((state) => state.index)
    const { amenities } = useSelector((state) => state.amenities)
    const dispatch = useDispatch()

    useEffect(() => {
        // console.log(amenities)
        console.log(activeTab)
    }, [activeTab])
    return (
        <div className="main-container">
            <div className="main-header">
                <div className="flex-center-y justify-between gap-2">
                    <DatePicker label={'Date'} />
                    <div className="flex-center-y gap-2">
                        <MDBDropdown>
                            <MDBDropdownToggle color="secondary">
                                Water & Electricity
                            </MDBDropdownToggle>
                            <MDBDropdownMenu>
                                {amenities
                                    ?.filter(
                                        (amenity, _) =>
                                            amenity?.mandatory === true
                                    )
                                    .map((amenity, index) => (
                                        <MDBDropdownItem
                                            key={index}
                                            link
                                            onClick={() =>
                                                dispatch(
                                                    setActiveTab(amenity?.name)
                                                )
                                            }
                                        >
                                            {amenity?.name}
                                        </MDBDropdownItem>
                                    ))}
                            </MDBDropdownMenu>
                        </MDBDropdown>
                    </div>
                    <div className="flex-center-y gap-2">
                        <MDBDropdown>
                            <MDBDropdownToggle color="secondary">
                                Other
                            </MDBDropdownToggle>
                            <MDBDropdownMenu>
                                {amenities
                                    ?.filter(
                                        (amenity, _) =>
                                            amenity?.mandatory === false
                                    )
                                    .map((amenity, index) => (
                                        <MDBDropdownItem
                                            key={index}
                                            link
                                            onClick={() =>
                                                dispatch(
                                                    setActiveTab(amenity?.name)
                                                )
                                            }
                                        >
                                            {amenity?.name}
                                        </MDBDropdownItem>
                                    ))}
                            </MDBDropdownMenu>
                        </MDBDropdown>
                    </div>
                </div>
                <div className="flex-center-y gap-2">
                    <Button
                        color={'info'}
                        text={'View'}
                        icon={<TbInfoSquare size={20} />}
                    />
                    <Button
                        color={'success'}
                        text={'Save'}
                        icon={<BsSave size={20} />}
                    />
                </div>
            </div>
            <div className="main-body">
                <div className="w-full text-center text-xl pb-3 font-bold">
                    {activeTab}
                </div>
                <IndexBody />
            </div>
        </div>
    )
}

export default IndexEW
