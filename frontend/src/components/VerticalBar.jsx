import Logo from './Logo'
import Navbar from './Navbar'
import icons from '../utils/icons'

const { TbLogout2, MdOutlineLightMode } = icons
const VerticalBar = () => {
    return (
        <div className="bg-[#242526] h-screen fixed z-10 w-[250px] py-[10px] px-[14px] flex flex-col justify-between">
            <Logo />
            <Navbar />

            <div>
                <div className="nav-item">
                    <div className="px-2">
                        <TbLogout2 size={22} />
                    </div>
                    Logout
                </div>
                <div className="nav-item bg-[#3a3b3c]">
                    <div className="px-2">
                        <MdOutlineLightMode size={22} />
                    </div>
                    Light mode
                    <div>button</div>
                </div>
            </div>
        </div>
    )
}

export default VerticalBar
