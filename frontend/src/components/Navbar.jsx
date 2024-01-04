import icons from '../assets/icons/icons'

const { FiHome, MdOutlineAccountCircle, HiOutlineUserGroup, FaHouseUser, TbReportMoney, RiServiceLine, GrInfo } = icons

const Navbar = () => {
    return (
        <div className="flex flex-col gap-4">
            <div className="nav-item">
                <div className="px-2">
                    <FiHome size={22} />
                </div>
                Dashboard
            </div>
            <div className="nav-item">
                <div className="px-2">
                    <MdOutlineAccountCircle size={22} />
                </div>
                Account
            </div>
            <div className="nav-item">
                <div className="px-2">
                    <HiOutlineUserGroup size={22} />
                </div>
                Customer
            </div>
            <div className="nav-item">
                <div className="px-2">
                    <FaHouseUser size={22} />
                </div>
                Room
            </div>
            <div className="nav-item">
                <div className="px-2">
                    <TbReportMoney size={22} />
                </div>
                Price
            </div>
            <div className="nav-item">
                <div className="px-2">
                    <RiServiceLine size={22} />
                </div>
                Service
            </div>
            <div className="nav-item">
                <div className="px-2">
                    <GrInfo size={22} />
                </div>
                Status
            </div>
        </div>
    )
}

export default Navbar
