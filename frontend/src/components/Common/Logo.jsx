import logo from '../../assets/images/logo_4.png'

const Logo = () => {
    return (
        <div className="flex flex-col justify-center items-center mb-4">
            <div className="text-[#1b6ff3] flex justify-center">
                <img src={logo} className="w-1/2 rounded-full" />
            </div>
        </div>
    )
}

export default Logo
