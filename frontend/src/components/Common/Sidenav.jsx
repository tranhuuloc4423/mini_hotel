import Logo from './Logo'
import Navbar from './Navbar'
import icons from '../../utils/icons'
import { useEffect, useRef, forwardRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { openSidenav, closeSidenav } from '../../redux/slices/appSlice'

const { IoIosArrowBack, IoIosArrowForward } = icons

const Sidenav = forwardRef((props, ref) => {
    const sidenavRef = useRef()
    const dispatch = useDispatch()
    const { sidenav } = useSelector((state) => state.app)

    useEffect(() => {
        console.log(sidenav)
    }, [sidenav])

    return (
        <>
            {/* bg-[#242526] */}
            <div
                ref={sidenavRef}
                className={`bg-white h-screen select-none fixed z-10 py-[10px] flex flex-col justify-between transition-all ${
                    sidenav ? 'w-[12%]' : 'w-[68px]'
                }`}
            >
                <div>
                    <Logo />
                    <Navbar />
                </div>

                <div className="absolute w-8 h-8 bg-[#3a3b3c] right-[-16px] rounded-full flex-center">
                    {sidenav ? (
                        <IoIosArrowBack
                            size={20}
                            color="white"
                            className="cursor-pointer"
                            onClick={() => dispatch(closeSidenav())}
                        />
                    ) : (
                        <IoIosArrowForward
                            size={20}
                            color="white"
                            className="cursor-pointer"
                            onClick={() => dispatch(openSidenav())}
                        />
                    )}
                </div>
            </div>
        </>
    )
})

export default Sidenav
