import Logo from './Logo'
import Navbar from './Navbar'
import icons from '../utils/icons'
import { useState } from 'react'

const { TbLogout2, MdOutlineLightMode } = icons
const VerticalBar = () => {
    const [mode, setMode] = useState(true)
    return (
        <div className="bg-[#242526] h-screen select-none relative z-10 w-[15%] py-[10px] px-[14px] flex flex-col justify-between">
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
                    <div className="w-[44px] h-[24px] bg-[#fff] rounded-full relative" onClick={() => setMode(!mode)}>
                        <span
                            className={`w-[20px] h-[20px] transition-all bg-[#000] top-[2px] absolute rounded-full ${
                                mode ? 'left-1' : 'left-5'
                            }`}
                        ></span>
                    </div>
                </div>
            </div>
            <div className="absolute w-8 h-8 bg-[#3a3b3c] right-[-16px] rounded-full"></div>
        </div>
    )
}

export default VerticalBar
