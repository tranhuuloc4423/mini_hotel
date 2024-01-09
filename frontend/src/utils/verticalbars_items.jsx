import icons from './icons'
import paths from './paths'
const {
    FiHome,
    MdOutlineAccountCircle,
    HiOutlineUserGroup,
    FaHouseUser,
    TbReportMoney,
    RiServiceLine,
    GrInfo,
    RiWaterFlashLine,
    LuCalculator
} = icons
const { HOME, LOGIN, DASHBOARD, ACCOUNT, CUSTOMER, ROOM, PRICE, SERVICE, STATUS, CALCULATE, INDEX } = paths
export default [
    {
        name: 'Dashboard',
        icon: <FiHome />,
        link: DASHBOARD
    },
    {
        name: 'Account',
        icon: <MdOutlineAccountCircle />,
        link: ACCOUNT
    },
    {
        name: 'Customer',
        icon: <HiOutlineUserGroup />,
        link: CUSTOMER
    },
    {
        name: 'Calculate',
        icon: <LuCalculator />,
        link: CALCULATE
    },
    {
        name: 'Index',
        icon: <RiWaterFlashLine />,
        link: INDEX
    },
    {
        name: 'Room',
        icon: <FaHouseUser />,
        link: ROOM
    },
    {
        name: 'Service',
        icon: <RiServiceLine />,
        link: SERVICE
    },
    {
        name: 'Status',
        icon: <GrInfo />,
        link: STATUS
    }
]
