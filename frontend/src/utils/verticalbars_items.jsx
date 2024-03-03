import icons from './icons'
import paths from './paths'
const {
    FiHome,
    HiOutlineUserGroup,
    FaHouseUser,
    RiServiceLine,
    TbReport,
    RiWaterFlashLine,
    FaFileInvoiceDollar
} = icons
const { DASHBOARD, CUSTOMER, ROOM, AMENITIES, REPORT, INVOICE, INDEX } = paths
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
        name: 'Invoice',
        icon: <FaFileInvoiceDollar size={20} />,
        link: INVOICE
    },
    {
        name: 'Index',
        icon: <RiWaterFlashLine size={20} />,
        link: INDEX
    },

    {
        name: 'Amenities',
        icon: <RiServiceLine size={20} />,
        link: AMENITIES
    },
    {
        name: 'Report',
        icon: <TbReport size={20} />,
        link: REPORT
    }
]
