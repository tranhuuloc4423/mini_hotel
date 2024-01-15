import { useState } from 'react'
import {
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane,
    MDBInput,
    MDBDropdown,
    MDBDropdownMenu,
    MDBDropdownToggle,
    MDBDropdownItem
} from 'mdb-react-ui-kit'
import icons from '../../utils/icons'
import Chart from '../Chart'
import Table from '../Table'

const { IoAddCircleOutline } = icons
const Report = () => {
    const [basicActive, setBasicActive] = useState('tab1')
    const [searchValue, setSearchValue] = useState('')

    const handleBasicClick = (value) => {
        if (value === basicActive) {
            return
        }

        setBasicActive(value)
    }
    return (
        <div className="main-container">
            <div className="main-header">
                <MDBTabs className="flex-center-y gap-2">
                    <MDBTabsItem>
                        <MDBTabsLink onClick={() => handleBasicClick('tab1')} active={basicActive === 'tab1'}>
                            Revenue
                        </MDBTabsLink>
                    </MDBTabsItem>
                    <MDBTabsItem>
                        <MDBTabsLink onClick={() => handleBasicClick('tab2')} active={basicActive === 'tab2'}>
                            Bill list
                        </MDBTabsLink>
                    </MDBTabsItem>
                    <MDBTabsItem>
                        <MDBTabsLink onClick={() => handleBasicClick('tab3')} active={basicActive === 'tab3'}>
                            Paid list
                        </MDBTabsLink>
                    </MDBTabsItem>
                    <MDBTabsItem>
                        <MDBTabsLink onClick={() => handleBasicClick('tab4')} active={basicActive === 'tab4'}>
                            Lack money list
                        </MDBTabsLink>
                    </MDBTabsItem>
                </MDBTabs>
                <div className="flex-center-y gap-2">
                    <MDBInput
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        label="Search"
                        id="search"
                        type="text"
                    />

                    <MDBDropdown>
                        <MDBDropdownToggle color="secondary">Filter</MDBDropdownToggle>
                        <MDBDropdownMenu>
                            <MDBDropdownItem link>Menu item</MDBDropdownItem>
                            <MDBDropdownItem link>Menu item</MDBDropdownItem>
                            <MDBDropdownItem link>Menu item</MDBDropdownItem>
                        </MDBDropdownMenu>
                    </MDBDropdown>
                </div>
            </div>
            <div className="main-body">
                <MDBTabsContent>
                    <MDBTabsPane open={basicActive === 'tab1'}>
                        <Chart />
                    </MDBTabsPane>
                    <MDBTabsPane open={basicActive === 'tab2'}>
                        <Table />
                    </MDBTabsPane>
                    <MDBTabsPane open={basicActive === 'tab3'}>
                        <Table />
                    </MDBTabsPane>
                    <MDBTabsPane open={basicActive === 'tab4'}>
                        <Table />
                    </MDBTabsPane>
                </MDBTabsContent>
            </div>
        </div>
    )
}

export default Report
