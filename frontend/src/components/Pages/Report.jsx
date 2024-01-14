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
                    <MDBTabsItem className="">
                        <MDBTabsLink onClick={() => handleBasicClick('tab1')} active={basicActive === 'tab1'}>
                            Paid list
                        </MDBTabsLink>
                    </MDBTabsItem>
                    <MDBTabsItem className="p-0">
                        <MDBTabsLink
                            onClick={() => handleBasicClick('tab2')}
                            active={basicActive === 'tab2'}
                            className="px-6 py-3 m-0"
                        >
                            Paid list
                        </MDBTabsLink>
                    </MDBTabsItem>
                    <MDBTabsItem className="p-0">
                        <MDBTabsLink
                            onClick={() => handleBasicClick('tab3')}
                            active={basicActive === 'tab3'}
                            className="px-6 py-3 m-0"
                        >
                            Paid list
                        </MDBTabsLink>
                    </MDBTabsItem>
                    <MDBTabsItem className="p-0">
                        <MDBTabsLink
                            onClick={() => handleBasicClick('tab4')}
                            active={basicActive === 'tab4'}
                            className="px-6 py-3 m-0"
                        >
                            Paid list
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
                    <MDBTabsPane open={basicActive === 'tab1'}>Paid list</MDBTabsPane>
                    <MDBTabsPane open={basicActive === 'tab2'}>lack money list</MDBTabsPane>
                    <MDBTabsPane open={basicActive === 'tab3'}>Revenue</MDBTabsPane>
                    <MDBTabsPane open={basicActive === 'tab4'}>bill list</MDBTabsPane>
                </MDBTabsContent>
            </div>
        </div>
    )
}

export default Report
