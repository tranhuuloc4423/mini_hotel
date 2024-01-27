import { useState } from 'react'
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
const Dashboard = () => {
    const [tabActive, setTabActive] = useState('tab1')

    const handleClick = (value) => {
        if (value === tabActive) {
            return
        }

        setTabActive(value)
    }
    return (
        <div className="grid grid-cols-2 grid-rows-2 w-full gap-10">
            <Box title={'Room state'}>
                <>
                    <MDBTabs className="mb-3">
                        <MDBTabsItem className="p-0">
                            <MDBTabsLink
                                onClick={() => handleClick('tab1')}
                                active={tabActive === 'tab1'}
                            >
                                Tab 1
                            </MDBTabsLink>
                        </MDBTabsItem>
                        <MDBTabsItem>
                            <MDBTabsLink
                                onClick={() => handleClick('tab2')}
                                active={tabActive === 'tab2'}
                            >
                                Tab 2
                            </MDBTabsLink>
                        </MDBTabsItem>
                        <MDBTabsItem>
                            <MDBTabsLink
                                onClick={() => handleClick('tab3')}
                                active={tabActive === 'tab3'}
                            >
                                Tab 3
                            </MDBTabsLink>
                        </MDBTabsItem>
                    </MDBTabs>

                    <MDBTabsContent>
                        <MDBTabsPane open={tabActive === 'tab1'}>
                            Tab 1 content
                        </MDBTabsPane>
                        <MDBTabsPane open={tabActive === 'tab2'}>
                            Tab 2 content
                        </MDBTabsPane>
                        <MDBTabsPane open={tabActive === 'tab3'}>
                            Tab 3 content
                        </MDBTabsPane>
                    </MDBTabsContent>
                </>
            </Box>
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
