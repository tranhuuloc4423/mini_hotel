import icons from './icons'
import paths from './paths'
const { FiHome, MdOutlineAccountCircle, HiOutlineUserGroup, FaHouseUser, TbReportMoney, RiServiceLine, GrInfo } = icons
const { HOME, LOGIN, REGISTER, ACCOUNT, CUSTOMER, ROOM, PRICE, SERVICE, STATUS } = paths
export default [
    {
        name: 'Dashboard',
        icon: <FiHome />,
        link: HOME
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
        name: 'Room',
        icon: <FaHouseUser />,
        link: ROOM
    },
    {
        name: 'Price',
        icon: <TbReportMoney />,
        link: PRICE
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
