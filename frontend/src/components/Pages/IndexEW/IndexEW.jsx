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
import { getAllEmenities } from '../../../redux/api/amenities'

const { TbInfoSquare, BsSave } = icons
const IndexEW = () => {
    const { activeTab } = useSelector((state) => state.index)
    const { amenities } = useSelector((state) => state.amenities)
    const dispatch = useDispatch()

    useEffect(() => {
        console.log(amenities)
    }, [amenities])
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
                                <MDBDropdownItem
                                    link
                                    onClick={() =>
                                        dispatch(setActiveTab('Water'))
                                    }
                                >
                                    Water
                                </MDBDropdownItem>
                                <MDBDropdownItem
                                    link
                                    onClick={() =>
                                        dispatch(setActiveTab('Electricity'))
                                    }
                                >
                                    Electricity
                                </MDBDropdownItem>
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
                                        (amenity, index) =>
                                            amenity.name !== 'Water' &&
                                            amenity.name !== 'Electricity'
                                    )
                                    .map((amenity, index) => (
                                        <MDBDropdownItem link key={index}>
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
            <div className="main-body"></div>
        </div>
    )
}

export default IndexEW
