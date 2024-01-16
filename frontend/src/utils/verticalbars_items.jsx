import icons from './icons'
import paths from './paths'
const { FiHome, HiOutlineUserGroup, FaHouseUser, RiServiceLine, TbReport, RiWaterFlashLine, LuCalculator } = icons
const { DASHBOARD, CUSTOMER, ROOM, SERVICE, REPORT, CALCULATE, INDEX } = paths
export default [
    {
        name: 'Dashboard',
        icon: <FiHome size={20} />,
        link: DASHBOARD
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
        name: 'Report',
        icon: <TbReport size={20} />,
        link: REPORT
    }
]
