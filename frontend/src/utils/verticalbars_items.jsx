import icons from './icons'
import paths from './paths'
const {
    FiHome,
    MdOutlineAccountCircle,
    HiOutlineUserGroup,
    FaHouseUser,
    RiServiceLine,
    GrInfo,
    RiWaterFlashLine,
    LuCalculator
} = icons
const { DASHBOARD, ACCOUNT, CUSTOMER, ROOM, SERVICE, STATUS, CALCULATE, INDEX } = paths
export default [
    {
        name: 'Dashboard',
        icon: <FiHome size={20} />,
        link: DASHBOARD
    },
    {
        name: 'Account',
        icon: <MdOutlineAccountCircle size={20} />,
        link: ACCOUNT
    },
    {
        name: 'Room',
        icon: <FaHouseUser size={20} />,
        link: ROOM
    },
    {
        name: 'Customer',
        icon: <HiOutlineUserGroup size={20} />,
        link: CUSTOMER
    },
    {
        name: 'Calculate',
        icon: <LuCalculator size={20} />,
        link: CALCULATE
    },
    {
        name: 'Index',
        icon: <RiWaterFlashLine size={20} />,
        link: INDEX
    },

    {
        name: 'Service',
        icon: <RiServiceLine size={20} />,
        link: SERVICE
    },
    {
        name: 'Status',
        icon: <GrInfo size={20} />,
        link: STATUS
    }
]
